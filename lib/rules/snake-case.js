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

        function isConstant(name) {
            return name === name.toUpperCase()
        }

        function isClass(node) {
            return ['ClassDeclaration', 'ClassExpression'].includes(node.parent.type)
        }

        function report(node) {
            if (!reported.includes(node)) {
                reported.push(node)
                context.report({
                    node,
                    message: `Identifier '${node.name}' is not in snake case.`,
                    data: { name: node.name },
                })
            }
        }

        const options = context.options[0] || {}

        return {
            Identifier(node) {
                const name = node.name
                const isClass = isClass(node)
                const isConstant = isConstant(name)
                console.log(node.parent.type === 'ClassDeclaration')

                if (options.allowCapitalized && isConstant) {
                    // TODO apply only on variable declarations and methods
                    report(node)
                }

                return
            }
        }
    },
}
