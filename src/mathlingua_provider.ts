/*
 * Copyright 2020 Dominic Kramer
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as cp from 'child_process';

import * as vscode from 'vscode';

const commandId = 'mathlingua.runCodeAction';

interface CheckDiagnostic {
  Type: string;
  Origin: string;
  Message: string;
  Path: string;
  Position: {
    Offset: number;
    Row: number;
    Column: number;
  };
}

interface CheckResult {
  Diagnostics: CheckDiagnostic[];
}

function toVscodeDiagnostics(lines: string[],
                             mathDiagnostics: CheckDiagnostic[]): vscode.Diagnostic[] {
    const diagnostics: vscode.Diagnostic[] = [];
    for (const diag of mathDiagnostics) {
      const message = diag.Message;
      const row = diag.Position.Row;
      const col = diag.Position.Column;

      const line = lines[row] || '';
      const range = new vscode.Range(row, col, row, line.length);
      const severity = vscode.DiagnosticSeverity.Error;

      diagnostics.push(new vscode.Diagnostic(range, message, severity));
    }
    return diagnostics;
}

async function findFilesRecusrively(fullPath: string,
                                    fileMap: Map<string, string>,
                                    shouldProcess: (fullPath: string) => boolean) {
  const stat = await fs.promises.stat(fullPath);
  if (stat.isFile() && fullPath.endsWith('.math') && shouldProcess(fullPath)) {
    const content = await fs.promises.readFile(fullPath, 'utf8');
    fileMap.set(fullPath, content);
  } else if (stat.isDirectory()) {
    const files = await fs.promises.readdir(fullPath);
    await Promise.all(files.map(it =>
      findFilesRecusrively(path.join(fullPath, it), fileMap, shouldProcess)));
  }
}

async function getAllDocuments(shouldProcess: (fullPath: string) => boolean): Promise<Map<string, string>> {
  const fileMap: Map<string, string> = new Map();
  await Promise.all(
    vscode.workspace.workspaceFolders?.map(it =>
      findFilesRecusrively(it.uri.fsPath, fileMap, shouldProcess)) || []);
  return fileMap;
}

export async function getAllDocContents(shouldProcess: (fullPath: string) => boolean): Promise<string[]> {
  return Array.from((await getAllDocuments(shouldProcess)).values());
}

export class MathlinguaProvider implements vscode.CodeActionProvider {
  private command!: vscode.Disposable;
  private diagnosticCollection!: vscode.DiagnosticCollection;

  async activate(subscriptions: vscode.Disposable[]) {
    this.command = vscode.commands.registerCommand(commandId, () => {}, this);
    subscriptions.push(this);
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection();

    vscode.workspace.onDidSaveTextDocument(this.processAll, this);
    vscode.workspace.onDidOpenTextDocument(this.processAll, this, subscriptions);
    vscode.workspace.onDidCloseTextDocument(textDocument => {
      this.diagnosticCollection.delete(textDocument.uri);
    }, null, subscriptions);

    vscode.workspace.textDocuments.forEach(this.doProcess, this);

    const textDoc = vscode.workspace.textDocuments[0];
    if (textDoc) {
      await this.doProcess(textDoc);
    }
  }

  dispose() {
    this.diagnosticCollection.clear();
    this.diagnosticCollection.dispose();
    this.command.dispose();
  }

  private processing = false;
  private async processAll() {
    if (this.processing) {
      return;
    }
    this.processing = true;
    await Promise.all(vscode.workspace.textDocuments.map(it => this.doProcess(it)));
    this.processing = false;
  }

  
  private async doProcess(textDocument: vscode.TextDocument) {
    if (textDocument.languageId !== 'mathlingua') {
      return;
    }

    const lines = (await fs.promises.readFile(textDocument.uri.fsPath))
                        .toString().split('\n');

    const allDiagnostics: vscode.Diagnostic[] = [];
    const diagnosticsForCheck = await this.check(textDocument);
    for (const d of toVscodeDiagnostics(lines, diagnosticsForCheck)) {
      allDiagnostics.push(d);
    }
    this.diagnosticCollection.set(textDocument.uri, allDiagnostics);
  }

  private async check(textDocument: vscode.TextDocument): Promise<CheckDiagnostic[]> {
    const cwd = vscode.workspace.getWorkspaceFolder(textDocument.uri)?.uri.fsPath;
    return new Promise((resolve, reject) => {
      cp.execFile('mlg', [
        'check',
        '--json'
      ], { cwd }, async (err, stdout, stderr) => {
        const parseResults: CheckResult = JSON.parse(stdout);
        const diagnostics = parseResults.Diagnostics.filter(diag =>
          path.resolve(cwd ?? '', diag.Path) === path.resolve(textDocument.uri.fsPath));
        resolve(diagnostics);
      });
    });
  }

  provideCodeActions(document: vscode.TextDocument,
                     range: vscode.Range | vscode.Selection,
                     context: vscode.CodeActionContext,
                     token: vscode.CancellationToken): vscode.ProviderResult<(vscode.Command | vscode.CodeAction)[]> {
    const diagnostic: vscode.Diagnostic = context.diagnostics[0];
    return [{
      title: 'Mathlingua',
      command: commandId,
      arguments: [document, diagnostic.range, diagnostic.message]
    }];
  }
}
