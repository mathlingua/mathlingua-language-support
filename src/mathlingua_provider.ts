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

import * as vscode from 'vscode';
const kotlin = require('kotlin');

const commandId = 'mathlingua.runCodeAction';
const mlg = require('./mathlingua');

interface MathlinguaDiagnostic {
  message: string;
  row: number;
  column: number;
}

interface MathlinguaSignature {
  form: string;
  row: number;
  column: number;
}

function findDuplicateContent(input: string,
                              supplemental: string[]): MathlinguaDiagnostic[] {
  const suppList = kotlin.kotlin.collections.listOf_i5x0yv$(supplemental);
  const res = mlg.mathlingua.common.MathLingua.findDuplicateContent_kwv3np$(input, suppList);
  const resArray = res.array_hd7ov6$_0;
  if (!resArray) {
    return [];
  }

  const result: MathlinguaDiagnostic[] = [];
  for (let i=0; i<resArray.length; i++) {
    const location = resArray[i];
    const loc: MathlinguaDiagnostic = {
      message: 'Duplicate content detected',
      row: location.row,
      column: location.column
    };
    result.push(loc);
  }

  return result;
}

function findDuplicateSignatures(input: string,
                                 supplemental: string[]): MathlinguaSignature[] {
  const suppList = kotlin.kotlin.collections.listOf_i5x0yv$(supplemental);
  const res = mlg.mathlingua.common.MathLingua.findDuplicateSignatures_kwv3np$(input, suppList);
  const resArray = res.array_hd7ov6$_0;
  if (!resArray) {
    return [];
  }

  const signatures: MathlinguaSignature[] = [];
  for (let i=0; i<resArray.length; i++) {
    const sig = resArray[i];
    const mathSig: MathlinguaSignature = {
      form: sig.form,
      row: sig.location.row,
      column: sig.location.column
    };
    signatures.push(mathSig);
  }
  return signatures;
}

function findUndefinedSignatures(input: string,
                                 supplemental: string[]): MathlinguaSignature[] {
  const suppList = kotlin.kotlin.collections.listOf_i5x0yv$(supplemental);
  const res = mlg.mathlingua.common.MathLingua.findUndefinedSignatures_kwv3np$(input, suppList);
  const resArray = res.array_hd7ov6$_0;
  if (!resArray) {
    return [];
  }

  const signatures: MathlinguaSignature[] = [];
  for (let i=0; i<resArray.length; i++) {
    const sig = resArray[i];
    const mathSig: MathlinguaSignature = {
      form: sig.form,
      row: sig.location.row,
      column: sig.location.column
    };
    signatures.push(mathSig);
  }
  return signatures;
}

function analyze(input: string): MathlinguaDiagnostic[] {
  const validation = mlg.mathlingua.common.MathLingua.parse_61zpoe$(input);
  const errors = validation.errors;
  if (!errors) {
    return [];
  }

  const errorArr = errors.array_hd7ov6$_0;
  if (!errorArr) {
    return [];
  }

  const res: MathlinguaDiagnostic[] = [];
  for (let i=0; i<errorArr.length; i++) {
    const err = errorArr[i];
    const message = err.message;
    const row = err.row;
    // there seems to be a bug in the Mathlingua parser
    // where the column is off by 1
    const column = Math.max(0, err.column - 1);
    const diag: MathlinguaDiagnostic = {
      message, row, column
    };
    res.push(diag);
  }

  return res;
}

async function processFileRecusrively(fullPath: string, fileContents: string[]) {
  const stat = await fs.promises.stat(fullPath);
  if (stat.isFile() && fullPath.endsWith('.math')) {
    const content = await fs.promises.readFile(fullPath, 'utf8');
    fileContents.push(content);
  } else if (stat.isDirectory()) {
    const files = await fs.promises.readdir(fullPath);
    await Promise.all(files.map(it =>
      processFileRecusrively(path.join(fullPath, it), fileContents)));
  }
}

export async function getAllDocContents(readFilesystem: boolean) {
  let docs: string[];
    if (readFilesystem) {
      docs = [];
      await Promise.all(
        vscode.workspace.workspaceFolders?.map(it =>
          processFileRecusrively(it.uri.fsPath, docs)) || []);
    } else {
      docs = vscode.workspace.textDocuments.map(it => it.getText());
    }
    return docs;
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
      await this.doProcessImpl(textDoc, true);
    }
  }

  dispose() {
    this.diagnosticCollection.clear();
    this.diagnosticCollection.dispose();
    this.command.dispose();
  }

  private processAll() {
    vscode.workspace.textDocuments.forEach(this.doProcess, this);
  }

  private async doProcess(textDocument: vscode.TextDocument) {
    return this.doProcessImpl(textDocument, false);
  }

  private async doProcessImpl(textDocument: vscode.TextDocument,
                              readFilesystem: boolean) {
    if (textDocument.languageId !== 'mathlingua') {
      return;
    }

    const text = textDocument.getText();
    const lines = text.split('\n');

    const diagnostics: vscode.Diagnostic[] = [];
    const analysis = analyze(text);
    for (const diag of analysis) {
      const message = diag.message;
      const row = diag.row;
      const col = diag.column;

      const line = lines[row] || '';
      const range = new vscode.Range(row, col, row, line.length);
      const severity = vscode.DiagnosticSeverity.Error;

      diagnostics.push(new vscode.Diagnostic(range, message, severity));
    }

    let otherDocs: string[];
    if (readFilesystem) {
      otherDocs = [];
      await Promise.all(
        vscode.workspace.workspaceFolders?.map(it =>
          processFileRecusrively(it.uri.fsPath, otherDocs)) || []);
    } else {
      otherDocs = vscode.workspace.textDocuments.filter(it => it.uri !== textDocument.uri)
                                                .map(it => it.getText());
    }

    const undefSigs = findUndefinedSignatures(text, otherDocs);
    for (const sig of undefSigs) {
      const message = `'${sig.form}' is not defined`;
      const row = sig.row;
      const col = sig.column;

      const line = lines[row] || '';
      const range = new vscode.Range(row, col, row, line.length);
      const severity = vscode.DiagnosticSeverity.Error;

      diagnostics.push(new vscode.Diagnostic(range, message, severity));
    }

    const dupSigs = findDuplicateSignatures(text, otherDocs);
    for (const sig of dupSigs) {
      const message = `'${sig.form}' is already defined`;
      const row = sig.row;
      const col = sig.column;

      const line = lines[row] || '';
      const range = new vscode.Range(row, col, row, line.length);
      const severity = vscode.DiagnosticSeverity.Error;

      diagnostics.push(new vscode.Diagnostic(range, message, severity));
    }

    const dupContentDiagnostics = findDuplicateContent(text, otherDocs);
    for (const diag of dupContentDiagnostics) {
      const row = diag.row;
      const col = 0;

      const line = lines[row] || '';
      const range = new vscode.Range(row, col, row, line.length);
      const severity = vscode.DiagnosticSeverity.Error;
      diagnostics.push(new vscode.Diagnostic(range, diag.message, severity));
    }

    this.diagnosticCollection.set(textDocument.uri, diagnostics);
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
