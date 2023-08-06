module.exports = {
    meta: {
        type: 'suggestion', // 规则类型
        docs: {}, // 文档
        fixable: 'code', // 是否自动修复 null ｜ code
        messages: {
            noHttpUrl: 'Recommended "{{ url }}" switch to HTTPS' // 带占位符的提示信息
        }
    },
    create: function(context) {
        return {
            Literal: function handleRequires(node) {
                if (
                    node.value &&
                    typeof node.value === 'string' &&
                    node.value.indexOf('http:') === 0
                ) {
                    context.report({
                        node,
                        messageId: 'noHttpUrl',
                        data: {  // (可选的) data 中的数据可用作 message 的占位符
                            url: node.value
                        },
                        // 替换 http 为 https
                        fix: fixer => {
                            return fixer.replaceText(
                                node,
                                `'${node.value.replace('http:', 'https:')}'`
                            )
                        }
                    })
                }
            }
        }
    }
}