# Mathlingua Language Support

This is the official Visual Studio Code extension to provide language support for the [Mathlingua](https://www.mathlingua.org/) language.

## Features

Syntax highlighting and autocompletion of mathematical structures are supported.  The current version does not support autocompletion within statements (text within single quotes).

## Release Notes

### 0.2.0 (2020-05-18)
#### Added
- Autocomplete of `Defines:` and `Represents:` signatures has been added but only within the current file.  That is, if a signature is specified in file `a.math`, then file `b.math` does not yet know about it.

### 0.1.1 (2020-05-17)
#### Added
- Included more keywords to identify the extension

### 0.1.0 (2020-05-17)
#### Added
- Introduced syntax highlighting support
- Introduced autocompletion for structural components (i.e. not statements within single quotes)
