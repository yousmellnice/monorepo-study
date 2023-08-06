module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce that a variable named `foo` can only be assigned a value of 'bar'."
        },
        fixable: null,
        schema: []
    },
    create(context) {
        return {
            CheckWindiCss(node) {
                console.log(node, '这是获取到的node')
                console.log(context, '这是获取到的context')
                context.report({
                    node,
                    message: '这里是测试有没有错误',
                    data: {
                        notBar: node.init.value
                    },
                })
            }
        }
    }
}