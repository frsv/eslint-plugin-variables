/**
 * @fileoverview Rule to flag non-snakecased identifiers
 * @author Roman Fursov
 */

'use strict'

module.exports = {
    meta: {
        docs: {
            description: 'Force to use snake case in variable names',
            category: 'Stylistic Issues',
            recommended: false,
        },
        schema: [
            {
                type: 'object',
                properties: {
                    camelcasedClasses: { type: 'boolean' },
                    allowCapitalized: { type: 'boolean' },
                },
                additionalProperties: false,
            },
        ],
    },
    create: function(context) {
        // reported nodes to avoid reporting twice on destructuring with shorthand notation
        const reported = []

        function _isConstant(name) {
            return name === name.toUpperCase()
        }

        function _hasCapitalized(name) {
            return name !== name.toLowerCase()
        }

        function _isClass(node) {
            return ['ClassDeclaration', 'ClassExpression'].indexOf(node.parent.type) !== -1
        }

        function _hasUnderscores(name) {
            // remove undesccores not connecting words, eg:
            // _test, test_, test____test
            return name.split('_').filter(s => s).length > 1
        }

        function report(node, message) {
            if (reported.indexOf(node) === -1) {
                reported.push(node)
                context.report({
                    node,
                    message,
                    data: { name: node.name },
                })
            }
        }

        const options = context.options[0] || {}

        return {
            Identifier(node) {
                const name = node.name
                const isClass = _isClass(node)
                const isConstant = _isConstant(name)
                const camelcasedClass = options.camelcasedClasses && isClass
                const capitalizedConstant =  options.allowCapitalized && isConstant
                const hasCapitalized = _hasCapitalized(name)
                const hasUnderscores = _hasUnderscores(name)

                const messages = {
                    default: `Identifier '${node.name}' is not in snake case.`,
                    camelcasedClass: `Class '${node.name}' should be in camel case: 'camelcasedClass' is turned on.`
                }

                if (isClass) {
                    if (camelcasedClass && hasUnderscores) {
                        report(node, messages.camelcasedClass)
                    } else if (!camelcasedClass && hasCapitalized) {
                        report(node, messages.default)
                    }
                    return
                } else if (isConstant) {
                    if (hasCapitalized && capitalizedConstant) {
                        return
                    }
                    report(node, messages.default)
                } else if (hasCapitalized) {
                    report(node, messages.default)
                }

                return
            }
        }
    },
}
