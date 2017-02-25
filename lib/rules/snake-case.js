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
                enum: ['always', 'never'],]
            },
            {
                type: 'object',
                properties: {
                    camelcasedClasses: { type: 'boolean' },
                    allowCapitalized: { type: 'boolean' },
                }
                additionalProperties: false,
            },
        ],
    },
    create: function(context) {

        const options = context.options[0] || {}
        
        return {
            Identifier(node) {
                return
                context.report({
                    node,
                    message: `Identifier ${node.name} is not in snake case.`,
                })
            }
        }
    },
}
