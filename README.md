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

Currently following rules are supported:

  - `variables/only-ascii-variables`: Forbid [unicode variable names](https://mathiasbynens.be/notes/javascript-identifiers).
  - `variables/snakecase`: **[WIP]** Force to use snake_case in your code. Options: `allowCapitalized`, `camelcasedClasses`.
    * Use `allowCapitalized` if your code contains capitalized constants, e.g. `MY_IMPORTANT_CONSTANT = {...}`  
    * Use `camelcasedClasses` to allow class names in camel case (hi, PEP8). Currently works only with ES5 `class` statement.

Troubleshooting
---------------

You can get error "Parsing error: The keyword is reserved" 
if you use modern JavaScript features in your project, such as let and const.
To solve this, add to your `.eslintrc`:

```json
"parserOptions": {
    "ecmaVersion": 2015
}
```

Contributing
------------

This package contains only rules related to the variables usage and naming in JavaScript.
Feel free to open issues and pull requests and suggest rules


Tests running
-------------

Just run
```bash
npm test
```

License
-------
[MIT](LICENSE.md)
