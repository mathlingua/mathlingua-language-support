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

import * as vscode from 'vscode';

const commandId = 'mathlingua.runCodeAction';
const mlg = require('./mathlingua');

interface MathlinguaDiagnostic {
  message: string;
  row: number;
  column: number;
}

function analyze(input: string): MathlinguaDiagnostic[] {
  const validation = mlg.mathlingua.common.MathLingua.parse_61zpoe$(input);
  const errors = validation.errors;
  if (!errors) {
    return [];
  }

  const errorArr = errors.array_hd7ov6$_0;
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

export class MathlinguaProvider implements vscode.CodeActionProvider {

  private command!: vscode.Disposable;
  private diagnosticCollection!: vscode.DiagnosticCollection;

  activate(subscriptions: vscode.Disposable[]) {
    this.command = vscode.commands.registerCommand(commandId, () => {}, this);
    subscriptions.push(this);
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection();

    vscode.workspace.onDidOpenTextDocument(this.doProcess, this, subscriptions);
    vscode.workspace.onDidCloseTextDocument(textDocument => {
      this.diagnosticCollection.delete(textDocument.uri);
    }, null, subscriptions);

    vscode.workspace.onDidSaveTextDocument(this.doProcess, this);
    vscode.workspace.textDocuments.forEach(this.doProcess, this);
  }

  dispose() {
    this.diagnosticCollection.clear();
    this.diagnosticCollection.dispose();
    this.command.dispose();
  }

  private doProcess(textDocument: vscode.TextDocument) {
    if (textDocument.languageId !== 'mathlingua') {
      return;
    }

    const text = textDocument.getText();
    const lines = text.split('\n');

    const diagnostics: vscode.Diagnostic[] = [];
    const analysis = analyze(text);
    for (const diag of analysis) {

      console.log('diag=', diag);

      const message = diag.message;
      const row = diag.row;
      const col = diag.column;

      const line = lines[row] || '';
      const range = new vscode.Range(row, col, row, line.length);
      const severity = vscode.DiagnosticSeverity.Error;

      diagnostics.push(new vscode.Diagnostic(range, message, severity));
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
