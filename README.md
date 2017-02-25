eslint-plugin-variables
=================

[![Build Status](https://travis-ci.org/frsv/eslint-plugin-variables.svg?branch=master)](https://travis-ci.org/frsv/eslint-plugin-variables)

ESLint micro plugin with rules for more strictly variables usage.

Installation
------------

```npm
npm i -D eslint-plugin-variables
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

Developing rules:

  - `variables/snakecase`: Force to use snake_case in your code. Best suited if you your project has python code. Option for permission to use camelCase in class names will be provided.

License
-------
[MIT](LICENSE.md)
