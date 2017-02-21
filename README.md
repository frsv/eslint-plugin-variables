eslint-plugin-variables
=================

[![Build Status](https://travis-ci.org/frsv/eslint-plugin-variables.svg?branch=master)](https://travis-ci.org/frsv/eslint-plugin-variables)

ESLint micro plugin with rules for more strictly variables usage.

Installation
------------

```npm
npm install -D eslint-plugin-variables

```

Usage
-----

Add into your `.eslintrc`:
```json
{
  "plugins": [
    "variables"
  ],
  "rules": {
    "variables/only-ascii-variables": "error"
  }
}
```

Rules list
----------

Currently following rules is supported:

  - `variables/only-ascii-variables`: Forbid [unicode variable names](https://mathiasbynens.be/notes/javascript-identifiers).

License
-------
[MIT](LICENSE.md)