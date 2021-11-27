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
    name: 'Defines:satisfying:',
    documentation: 'Makes an abstract definition.',
    text: '[${1}]\nDefines: ${2}\nrequiring: ${3}\nwhen: ${4}\nmeans: ${5}\nsatisfying: ${6}\nviewing:\n. as: ${7}\n  via: ${8}\n. membership:\n  through: ${9}\nusing: ${10}\nwritten: "${11}"'
  },
  {
    name: 'Defines:maps:',
    documentation: 'Specifies a map.',
    text: '[${1}]\nDefines: ${2}\nrequiring: ${3}\nwhen: ${4}\nmeans: ${5}\nmaps: ${6}\n. from: ${7}\n  to: ${8}\nsatisfying: ${9}\nviewing:\n. as: ${10}\n  via: ${11}\n. membership:\n  through: ${12}\nusing: ${13}\nwritten: "${14}"'
  },
  {
    name: 'from:to:',
    documentation: 'Specifies the domain and range of a mapping.',
    text: 'from: ${1}\nto: ${2}'
  },
  {
    name: 'Defines:collects:',
    documentation: 'Specifies a collection of objects.',
    text: '[${1}]\nDefines: ${2}\nrequiring: ${3}\nwhen: ${4}\nmeans: ${5}\ncollects:\n. given: ${6}\n  where: ${7}\n  all: ${8}\n  suchThat: ${9}\nviewing:\n. as: ${10}\n  via: ${11}\n. membership:\n  through: ${12}\nusing: ${13}\nwritten: "${14}"'
  },
  {
    name: 'Defines:evaluated:',
    documentation: 'Defines a function.',
    text: '[${1}]\nDefines: ${1}\nrequiring: ${2}\nwhen: ${3}\nmeans: ${4}\nevaluated:\n. ${5}\nviewing:\n. as: ${6}\n  via: ${7}\n. membership:\n  through: ${8}\nusing: ${9}\nwritten: ${10}'
  },
  {
    name: 'States:',
    documentation: 'Describes a mathematical statement such `x \\in y` or `x < y`.',
    text: '[${1}]\nStates:\nrequiring: ${2}\nwhen: ${3}\nthat: ${4}\nusing: ${5}\nwritten: "${6}"'
  },
  {
    name: 'Evaluates',
    documentation: 'Describes how an infix operator should be evaluated based on the input',
    text: '[${1}]\nEvaluates:\nwhen: ${2}\nthen: ${3}\nelse: ${4}\nusing: ${5}\nwritten: "${6}"'
  },
  {
    name: 'Foundation',
    documentation: 'Describes a definition that is foundationally true',
    text: 'Foundation:\n. ${1}'
  },
  {
    name: 'Topic',
    documentation: 'Used to give a description of a mathematical topic.',
    text: '[]\nTopic:\ncontent: "${1}"'
  },
  {
    name: 'Theorem:',
    documentation: 'Describes a proven mathematical result such as a theorem, proposition, corollary, or lemma.',
    text: 'Theorem: ${1}\ngiven: ${2}\nwhere: ${3}\nthen: ${4}\nusing: ${5}'
  },
  {
    name: 'Axiom:',
    documentation: 'Describes a mathematical axiom.',
    text: 'Axiom: ${1}\ngiven: ${2}\nwhere: ${3}\nthen: ${4}\nusing: ${5}'
  },
  {
    name: 'Conjecture:',
    documentation: 'Describe a mathematical conjecture.',
    text: 'Conjecture: ${1}\ngiven: ${2}\nwhere: ${3}\nthen: ${4}\nusing: ${5}'
  },
  {
    name: 'forAll:',
    documentation: 'Introduces a new mathematical object satisfying some properties.',
    text: 'forAll: ${1}\nwhere: ${2}\nthen: ${3}'
  },
  {
    name: 'exists:',
    documentation: 'Introduces a statement that mathematical object exists.',
    text: 'exists: ${1}\nwhere: ${2}\nsuchThat: ${3}'
  },
  {
    name: 'existsUnique:',
    documentation: 'Introduces a statement that unique mathematical object exists.',
    text: 'existsUnique: ${1}\nwhere: ${2}\nsuchThat: ${3}'
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
    name: 'and:',
    documentation: 'Specifies that all of the properties are true.',
    text: 'and: ${1}'
  },
  {
    name: 'expands:',
    documentation: 'Specifies how a variadic argument should be expanded in a definition.',
    text: 'expands: ${1}\nas: ${2}'
  },
  {
    name: 'piecewise',
    documentation: 'Used to define a function piecewise',
    text: 'piecewise:\nwhen: ${1}\nthen: ${2}\nelse: ${3}'
  },
  {
    name: 'source:',
    documentation: 'Specifies a source such as a book or an article.',
    text: 'source: "@${1}"\npage: "${2}"\noffset: "${3}"\ncontent: "${4}"'
  },
  {
    name: 'Metadata:source:',
    documentation: 'Specifies additional metadata for a mathematical item with a book or article reference.',
    text: 'Metadata:\n. resources:\n  . source: "@${1}"\n    page: "${2}"\n    offset: "${3}"\n    content: "${4}"'
  },
  {
    name: 'site:',
    documentation: 'Specifies a website source URL.',
    text: 'site: "${1}"\nname: "${2}"'
  },
  {
    name: 'Metadata:site:',
    documentation: 'Specifies additional metadata for a mathematical item with a website reference.',
    text: 'Metadata:\n. resources:\n  . site: "${1}"\n    name: "${2}"'
  },
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
    cp.execFile(mlgPath, ['version']);
  }

  const mathlinguaProvider = new MathlinguaProvider();
  vscode.languages.registerCodeActionsProvider('mathlingua', mathlinguaProvider);
  mathlinguaProvider.activate(context.subscriptions, MATHLINGUA_JAR_PATH);

  const staticCompletionProvider = vscode.languages.registerCompletionItemProvider('mathlingua', {
    async provideCompletionItems(document: vscode.TextDocument,
                           position: vscode.Position,
                           token: vscode.CancellationToken,
                           context: vscode.CompletionContext) {
      const staticCompletions = STATIC_COMPLETIONS.map(it =>
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

  const config = vscode.workspace.getConfiguration();
  const showPreview = !!config && !!config.mathlingua && config.mathlingua.autoOpenPreview === true;
  if (showPreview) {
    maybeCreateHtmlView(null, false);
    vscode.workspace.onDidOpenTextDocument(async doc => {
      maybeCreateHtmlView(doc, false);
    });
  }
}
