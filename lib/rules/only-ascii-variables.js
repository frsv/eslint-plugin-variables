'use strict'

module.exports = {
    meta: {
        docs: {
            description: 'Forbid non-ASCII variable names',
        },
        schema: [],
    },
    create(context) {
        return {
            VariableDeclaration(node) {
                const name = node.declarations[0].id.name

                if (/^[ -~]*$/g.test(name)) {
                    return
                }

                context.report({
                    node,
                    message: `Unexpected ${node.kind} declaration with '${name}' name.`,
                })
            },
        }
    },
}