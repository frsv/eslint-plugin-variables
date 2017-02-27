'use strict';

module.exports = {
    valid: [
        'var foo = 1',
        'const foo_bar = 1',
        'let foo_bar_baz = 1',
        { code: 'var FOO_BAR_BAZ = 1', options: [{ allowCapitalized: true }] },
        { code: 'class fooBarBaz {}', options: [{ camelcasedClasses: true }] },
    ],
    invalid: [
        {
            code: 'var fooBar = 1',
            errors: [{message: "Identifier 'fooBar' is not in snake case."}],
        },
        {
            code: 'var FOO_BAR = 2',
            options: [{ allowCapitalized: false }],
            errors: [{message: "Identifier 'FOO_BAR' is not in snake case."}],
        },
        {
            code: 'class foo_bar_baz {}',
            options: [{ camelcasedClasses: true }],
            errors: [{message: "Class 'foo_bar_baz' should be in camel case: 'camelcasedClass' is turned on."}],
        },
        {
            code: 'class fooBarBaz {}',
            options: [{ camelcasedClasses: false }],
            errors: [{message: "Identifier 'fooBarBaz' is not in snake case."}],
        },
        {
            code: 'class FOO_BAR {}',
            options: [{ allowCapitalized: true, camelcasedClasses: true }],
            errors: [{message: "Class 'FOO_BAR' should be in camel case: 'camelcasedClass' is turned on."}],
        },
    ]
};
