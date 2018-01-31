'use strict';

const RuleTester = require('eslint').RuleTester
const plugin = require('../index')

Object.keys(plugin.rules).forEach((ruleName) => {
    const tester = new RuleTester({
        parserOptions: {
            ecmaVersion: 2015,
        }
    });

    tester.run(`variables/${ruleName}`, plugin.rules[ruleName], require(`./rules/${ruleName}`));
})