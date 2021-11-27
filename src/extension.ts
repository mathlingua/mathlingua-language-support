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
import * as path from 'path';
import * as fs from 'fs';

import {MathlinguaProvider, getAllDocContents} from './mathlingua_provider';

import * as cp from 'child_process';

interface StaticCompletion {
  name: string;
  text: string;
  documentation: string;
}

function buildIndentedCompletion(completion: StaticCompletion,
                                 document: vscode.TextDocument,
                                 position: vscode.Position): vscode.CompletionItem|undefined {
  const line = document.lineAt(position).text;
  const res = /([^a-zA-Z]*)([a-zA-Z]+)/.exec(line);

  // res[1] is the line prefix
  // res[2] is the matched text
  // So if the line is '    . Res' then:
  //   res[1] = '    . '
  //   res[2] = 'Res'
  if (!res ||
       res[1] === undefined ||
       res[2] === undefined ||
       completion.text.toLowerCase().indexOf(res[2].toLowerCase()) < 0) {
    return undefined;
  }

  const prefix = ' '.repeat((res[1] || '').length);

  let toinsert = '';
  const lines = completion.text.split('\n');
  for (let i=0; i<lines.length; i++) {
    if (i !== 0) {
      toinsert += '\n';
      toinsert += prefix;
    }
    toinsert += lines[i];
  }

  const snippet = new vscode.CompletionItem(completion.name);
  snippet.documentation = new vscode.MarkdownString(completion.documentation);
  snippet.insertText = new vscode.SnippetString(toinsert);
  // keepWhitespace is needed to prevent VSCode from inserting extra whitespace
  // that it thinks is needed to preserve the indentation.  We are handling the
  // indentation explicitly and so if VSCode also tries to handle the indentation
  // by adding whitespace, then the indentation will be incorrect.
  snippet.keepWhitespace = true;

  return snippet;
}

// For example an input of `\some.function{x}:on{A}to{B}`
// will return `\some.function{${1:x}}:on{${2:A}}to{${3:B}}`
function getVariableAnnotatedVersion(id: string): string {
  const trimmed = id.trim();

  if (!trimmed.startsWith('\\')) {
    return trimmed;
  }

  const lhsExec = /^[a-zA-Z]+/.exec(trimmed);
  const lhs = !!lhsExec ? lhsExec[0] : '';

  const rhsExec = / [a-zA-Z]+$/.exec(trimmed);
  const rhs = !!rhsExec ? rhsExec[0].trim() : '';

  let count = 1;

  let result = '';

  // Don't include the left-hand-side of an infix operator
  // so that if a known infix operator is `a \in b` and the
  // user types `x \i` the autocomplete fills in `x \in b`
  // with the `b` highlighted for the user to modify.
  /*
  if (lhs) {
    result += '${' + (count++) + ':' + lhs + '}';
    result += ' ';
  }
  */

  const inner = trimmed.substring(lhs.length, trimmed.length - rhs.length).trim();
  let bracesCount = 0;
  let i = 0;
  while (i < inner.length) {
    const c = inner[i++];
    if (c === '{' || c === '(' || c === '[') {
      bracesCount++;
      result += c;
    } else if (c === '}' || c === ')' || c === ']') {
      bracesCount--;
      result += c;
    } else if (/[a-zA-Z]/.test(c) && bracesCount > 0) {
      let varName = c;
      while (i < inner.length && /[a-zA-Z]/.test(inner[i])) {
        varName += inner[i++];
      }

      result += '${' + (count++) + ':' + varName + '}';
    } else {
      result += c;
    }
  }

  if (rhs) {
    result += ' ';
    result += '${' + (count++) + ':' + rhs + '}';
  }

  return result;
}

// `commandPrefix` is the string that occurs prior to the index where the
// completion should occur.  That is if the text on the current line is
// `x + \some.text` and the cursor is between the `e` and `x` then
// `commandPrefix` is `\some.te`.
function getIdSnippet(id: string, commandPrefix: string): vscode.CompletionItem {
  const snippet = new vscode.CompletionItem(id, vscode.CompletionItemKind.Module);
  // replace the first \ character from the text to insert.
  // Otherwise, for the text `\som` the autocomplete will
  // replace it with `\\something' with two \ characters.
  let toInsert = getVariableAnnotatedVersion(id).replace(/\\/, '');
  if (toInsert.startsWith(commandPrefix)) {
    let toIgnore = '';
    const index = commandPrefix.lastIndexOf('.');
    if (index >= 0) {
      // If the text to insert starts with `commandPrefix` and also contains
      // a dot, then only actually insert the text after the last dot.
      // That is, if `commandPrefix` is `\some.text` and the cursor is
      // between `e` and `x` then only insert `text` and not `some.text`.
      // Otherwise, the inserted text in the document will be
      // `\some.some.text`.  That is, the text before the last dot will be
      // repeated.
      // This also works if the cursor is, for example, between `o` and `m`.
      // Then the inserted text is still `\some.text` as it should be.
      toIgnore = commandPrefix.substring(0, index + 1);
    }
    toInsert = toInsert.substr(toIgnore.length);
  }
  snippet.insertText = new vscode.SnippetString(toInsert);
  snippet.keepWhitespace = true;
  snippet.commitCharacters = ['\\'];
  return snippet;
}

function getDynamicIdCompletions(text: string, prefix: string): vscode.CompletionItem[] {
  const result: vscode.CompletionItem[] = [];

  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      const id = trimmed.substring(1, trimmed.length - 1).trim();
      result.push(getIdSnippet(id, prefix));

      // if the id doesn't contain a backslash then it is associated
      // with a resource and can be specified in a reference as `@id`
      if (id.indexOf('\\') === -1) {
        result.push(getIdSnippet(`@${id}`, ''));
      }
    }
  }

  return result;
}

async function updateHtmlView(panel: vscode.WebviewPanel, textDoc: vscode.TextDocument) {
  if (!textDoc.uri.path.endsWith('.math')) {
    return;
  }

  const args = [
    '-jar',
    MATHLINGUA_JAR_PATH,
    'document'
  ];
  const cwd = vscode.workspace.getWorkspaceFolder(textDoc.uri)?.uri.fsPath;
  cp.execFile('java', args, { cwd }, async (err, stdout, stderr) => {
    const sep = path.sep;
    const outFile = textDoc.uri.fsPath.replace(`${sep}content${sep}`, `${sep}docs${sep}content${sep}`)
                                      .replace('.math', '.html');
    panel.webview.html = (await fs.promises.readFile(outFile)).toString();
  });
}

let prevPanel: vscode.WebviewPanel|null = null;
function maybeCreateHtmlView(document: vscode.TextDocument|null, force: boolean) {
  const doc = document || vscode.window.activeTextEditor?.document;
  if ((!doc || !doc.uri.path.endsWith('.math')) && !force) {
    return;
  }

  if (prevPanel != null) {
    if (!force) {
      return;
    }

    prevPanel.dispose();
    prevPanel = null;
  }

  const panel = vscode.window.createWebviewPanel(
    'mathlingua',
    'MathLingua Preview',
    vscode.ViewColumn.Beside,
    {
      enableScripts: true
    }
  );
  prevPanel = panel;
  var isDisposed = false;
  prevPanel.onDidDispose(() => {
    isDisposed = true;
    prevPanel = null;
  });

  vscode.workspace.onDidSaveTextDocument(textDoc => {
    if (isDisposed) {
      return;
    }
    return updateHtmlView(panel, textDoc);
  });

  vscode.workspace.onDidOpenTextDocument(doc => {
    if (isDisposed) {
      return;
    }
    return updateHtmlView(panel, doc);
  });

  if (doc) {
    updateHtmlView(panel, doc);
  } else {
    panel.webview.html = '<html><body><span style="font-size: 1.5em; margin-top: 2em;">' +
      'Whenever a MathLingua (.math) document is saved, its contents will be displayed here.</span></body></html>';
  }
}

export let MATHLINGUA_JAR_PATH = '';

export function activate(context: vscode.ExtensionContext) {

  const workspaceFolders = vscode.workspace.workspaceFolders ?? [];
  let workspaceFolder = '';
  let mlgPath = '';
  for (const f of workspaceFolders) {
    workspaceFolder = f.uri.fsPath;
    const possibleMlgPath = path.join(workspaceFolder, 'mlg');
    if (fs.existsSync(possibleMlgPath)) {
      mlgPath = possibleMlgPath;
      MATHLINGUA_JAR_PATH = path.join(workspaceFolder, '.bin', 'mathlingua.jar');
      break;
    }
  }

  if (!mlgPath) {
    vscode.window.showErrorMessage(`Could not find the 'mlg' executable in ${workspaceFolder}.  ` +
      `Please follow the instructions at www.mathlingua.org to install the 'mlg' tool in that directory.`);
  } else {
    // invoke mlg so that if the mathlingua.jar file doesn't exist, mlg will download it
    cp.execFile('java', ['-D__MATHLINGUA_SHOW_COMPLETIONS__=true',
                         '-jar', MATHLINGUA_JAR_PATH,
                         'help'], (err, stdout, stderr) => {
      const completions: { items: Array<{ name: string; value: string; }> } = JSON.parse(stdout);

      const staticCompletionProvider = vscode.languages.registerCompletionItemProvider('mathlingua', {
        async provideCompletionItems(document: vscode.TextDocument,
                               position: vscode.Position,
                               _: vscode.CancellationToken,
                               __: vscode.CompletionContext) {
          const staticCompletions = completions.items.map(item => {
            return {
              name: item.name,
              text: item.value,
              documentation: item.name
            };
          }).map(it =>
            buildIndentedCompletion(it, document, position))
              .filter(it => !!it) as vscode.CompletionItem[];

            const curLine = document.getText(new vscode.Range(
            new vscode.Position(position.line, 0),
            position
          ));
          const lastSlashIndex = curLine.lastIndexOf('\\');
          let commandPrefix = '';
          if (lastSlashIndex >= 0) {
            commandPrefix = curLine.substring(lastSlashIndex + 1);
          }

          let dynamicCompletions: vscode.CompletionItem[] = [];
          const contents = await getAllDocContents(fullPath => fullPath.endsWith('.math'));
          for (const content of contents) {
            dynamicCompletions = dynamicCompletions.concat(getDynamicIdCompletions(content, commandPrefix));
          }

          return staticCompletions.concat(dynamicCompletions);
        }
      });

      const previewCommand = vscode.commands.registerCommand('mathlingua.preview', () => {
        maybeCreateHtmlView(null, true);
      });

      context.subscriptions.push(staticCompletionProvider, previewCommand);
    });
  }

  const mathlinguaProvider = new MathlinguaProvider();
  vscode.languages.registerCodeActionsProvider('mathlingua', mathlinguaProvider);
  mathlinguaProvider.activate(context.subscriptions, MATHLINGUA_JAR_PATH);

  const config = vscode.workspace.getConfiguration();
  const showPreview = !!config && !!config.mathlingua && config.mathlingua.autoOpenPreview === true;
  if (showPreview) {
    maybeCreateHtmlView(null, false);
    vscode.workspace.onDidOpenTextDocument(async doc => {
      maybeCreateHtmlView(doc, false);
    });
  }
}
