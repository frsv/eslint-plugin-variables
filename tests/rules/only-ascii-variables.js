'use strict';

module.exports = {
    valid: [
        'var foo = 1',
        'let bar = 2',
        'const baz = 3',
    ],
    invalid: [
        {code: 'var üœø = 1', errors: [{message: "Unexpected var declaration with 'üœø' name."}]},
        {code: 'let ёж = 2', errors: [{message: "Unexpected let declaration with 'ёж' name."}]},
        {code: 'const 火 = 3', errors: [{message: "Unexpected const declaration with '火' name."}]}
    ]
};