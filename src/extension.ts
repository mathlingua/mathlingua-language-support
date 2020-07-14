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

import {MathlinguaProvider } from './mathlingua_provider';

import * as cp from 'child_process';

interface StaticCompletion {
  name: string;
  documentation: string;
  text: string;
}

const STATIC_COMPLETIONS: StaticCompletion[] = [
  {
    name: 'Resource:',
    documentation: 'Describes a mathematical resource (a book, website, article, etc.)',
    text: '[${1}]\nResource:\n. type: "${2}"\n. name: "${3}"\n. author: "${4}"\n. homepage: "${5}"\n. url: "${6}"\n. offset: "${7}"\nMetadata: ${8}'
  },
  {
    name: 'Defines:',
    documentation: 'Describes a mathematical definition.',
    text: '[${1}]\nDefines: ${2}\nassuming: ${3}\nmeans: ${4}'
  },
  {
    name: 'Represents:',
    documentation: 'Describes a mathematical representation such `x \\in y` or `x < y`.',
    text: '[${1}]\nRepresents:\nassuming: ${2}\nthat: ${3}\nAlias: ${4}\nMetadata: ${5}'
  },
  {
    name: 'Theorem:',
    documentation: 'Describes a proven mathematical result such as a theorem, proposition, corollary, or lemma.',
    text: 'Theorem: ${1}\nAlias: ${2}\nMetadata: ${3}'
  },
  {
    name: 'Axiom:',
    documentation: 'Describes a mathematical axiom.',
    text: 'Axiom:\nAlias: ${1}\nMetadata: ${2}'
  },
  {
    name: 'Conjecture:',
    documentation: 'Describe a mathematical conjecture.',
    text: 'Conjecture:\nAlias: ${1}\nMetadata: ${2}'
  },
  {
    name: 'for:',
    documentation: 'Introduces a new mathematical object satisfying some (optional) properties.',
    text: 'for: ${1}\nwhere: ${2}\nthen: ${3}'
  },
  {
    name: 'exists:',
    documentation: 'Introduces a statement that mathematical object exists.',
    text: 'exists: ${1}\nsuchThat: ${2}'
  },
  {
    name: 'if:',
    documentation: 'Introduces and if-then structure.',
    text: 'if: ${1}\nthen: ${2}'
  },
  {
    name: 'iff:',
    documentation: 'Introduces an (if and only if)-then structure.',
    text: 'iff: ${1}\nthen: ${2}'
  },
  {
    name: 'not:',
    documentation: 'Introduces a negation.',
    text: 'not: ${1}'
  },
  {
    name: 'or:',
    documentation: 'Specifies that at least one of the given properties is true.',
    text: 'or: ${1}'
  },
  {
    name: 'expands:',
    documentation: 'Specifies how a variadic argument should be expanded in a definition.',
    text: 'expands: ${1}\nas: ${2}'
  },
  {
    name: 'Metadata:',
    documentation: 'Specifies additional metadata for a mathematical item.',
    text: 'Metadata:\n. written: "${1}"\n. name: "${2}"\n. reference:\n  . source: "@${3}"\n    page: "${4}"\n. tag: "${5}"'
  },
  {
    name: 'Alias:',
    documentation: 'Specifies alias(es) for a mathematical item.',
    text: 'Alias: ${1} = "${2}"'
  }
];

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

function getDynamicIdCompletions(text: string): vscode.CompletionItem[] {
  const result: vscode.CompletionItem[] = [];

  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      const id = trimmed.substring(1, trimmed.length - 1).trim();

      const snippet = new vscode.CompletionItem(id);
      // replace the first \ character from the text to insert.
      // Otherwise, for the text `\som` the autocomplete will
      // replace it with `\\something' with two \ characters.
      let toInsert = getVariableAnnotatedVersion(id).replace(/\\/, '');
      snippet.insertText = new vscode.SnippetString(toInsert);
      snippet.keepWhitespace = true;
      snippet.commitCharacters = ['\\'];

      result.push(snippet);
    }
  }

  return result;
}

async function updateHtmlView(panel: vscode.WebviewPanel, textDoc: vscode.TextDocument) {
  if (!textDoc.uri.path.endsWith('.math')) {
    return;
  }

  const config = vscode.workspace.getConfiguration();
  const editorFontFamily = config.editor.fontFamily || 'monospace';

  const fontFamily = config.mathlingua.fontFamily || editorFontFamily;
  const scale = config.mathlingua.scale || 1.5;
  const weight = config.mathlingua.useBoldHeaders ? 'bold' : 'plain';

  cp.execFile('java', [
    '-jar',
    path.join(__dirname, '..', 'jar', 'mathlingua.jar'),
    'render',
    '--filter', 'defines.math,represents.math',
    '--output', 'html',
    '--expand',
    textDoc.uri.fsPath
  ], (err, stdout, stderr) => {
    if (err) {
      panel.webview.html = err.message;
    } else {
      panel.webview.html = stdout
            .replace(/<style>/g, '<style> .end-mathlingua-top-level { display: block; height: 1em; } ')
            .replace(/font-size: 1em;/g, `font-size: ${scale}em;`) // scale the main font
            .replace(/font-size: 0\.75em;/g, `font-size: ${scale*0.75}em;`) // scale the latex font
            .replace(/font-family: monospace;/g, `font-family: ${fontFamily};`)
            // add more padding below each entry
            .replace(/\.mathlingua-top-level \{/g, '.mathlingua-top-level {padding-bottom: 1.5em;')
            .replace(/font-weight: bold;/g, `font-weight: ${weight};`);
    }
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

export function activate(context: vscode.ExtensionContext) {

  const mathlinguaProvider = new MathlinguaProvider();
  vscode.languages.registerCodeActionsProvider('mathlingua', mathlinguaProvider);
  mathlinguaProvider.activate(context.subscriptions);

  const staticCompletionProvider = vscode.languages.registerCompletionItemProvider('mathlingua', {
    provideCompletionItems(document: vscode.TextDocument,
                           position: vscode.Position,
                           token: vscode.CancellationToken,
                           context: vscode.CompletionContext) {
      const staticCompletions = STATIC_COMPLETIONS.map(it =>
        buildIndentedCompletion(it, document, position))
          .filter(it => !!it) as vscode.CompletionItem[];

      const dynamicCompletions = getDynamicIdCompletions(document.getText());

      return staticCompletions.concat(dynamicCompletions);
    }
  });

  const previewCommand = vscode.commands.registerCommand('mathlingua.preview', () => {
    maybeCreateHtmlView(null, true);
  });

  context.subscriptions.push(staticCompletionProvider, previewCommand);

  const config = vscode.workspace.getConfiguration();
  const showPreview = !!config && !!config.mathlingua && config.mathlingua.autoOpenPreview === true;
  if (showPreview) {
    maybeCreateHtmlView(null, false);
    vscode.workspace.onDidOpenTextDocument(async doc => {
      maybeCreateHtmlView(doc, false);
    });
  }
}
