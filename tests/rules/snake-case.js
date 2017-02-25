'use strict';

module.exports = {
    valid: [
        'var foo = 1',
        'var foo_bar = 1',
        'var foo_bar_baz = 1',
        { code: 'var FOO_BAR_BAZ = 1', options: [{ allowCapitalized: true }] },
        { code: 'class fooBarBaz', options: [{ capitalizedClasses: true }] },
    ],
    invalid: [
        {code: 'var fooBar = 1', errors: [{message: "Unexpected var declaration with 'üœø' name."}]},
        {code: 'var foo_Bar = 2', errors: [{message: "Unexpected let declaration with 'ёж' name."}]},
        {code: 'class foo_bar_baz', errors: [{message: "Unexpected const declaration with '火' name."}]}
    ]
};
