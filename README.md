# Mathlingua Language Support

This is the official Visual Studio Code extension to provide language support for the [Mathlingua](https://www.mathlingua.org/) language.

## Features

Supports syntax highlighting, auto-analysis, and autocomplete within the current file.  Any parse errors are displayed within the current file on save, and any signatures that are used but have not been defined are marked with a warning.

## Release Notes

### 0.5.1 (2020-06-10)
- Update the README.

### 0.5.0 (2020-06-10)
- Updated to reflect changes to MathLingua where `Theorem` is used instead of `Result` and `Resource` is used instead of `Source`.

### 0.4.0 (2020-05-20)
- Warnings are displayed for signatures that are used but have not been defined.

### 0.3.0 (2020-05-19)
- Parse errors are now displayed within the editor on save.

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
