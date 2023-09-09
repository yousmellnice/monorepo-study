function getClsArrFromAttrs(attrs) {
    const clsStr = attrs.find(attr => attr.type === 'VAttribute' && attr.key.name === 'class')?.value.value
    const clsArr = clsStr.split(' ') || []
    const filterClsArr = filterClsArrToNoSuffix(clsArr) // 处理之后的样式数组，下一步进行对比顺序是否正确
    console.log(filterClsArr);
}
const positionCls = ['order', 'justify', '']
const specialWindiCssAttrs = ['']

// 过滤class 转换成对应的数组
function filterClsArrToNoSuffix(clsArr) {
    const result = clsArr.map(item => {
        // TODO 这里需要额外处理，一些正则不好匹配的属性，如 flex-col 、justify-items-start 等多个 `-` 的 windicss 属性
        return item.trim().replace(/^-/, '').replace(/-.*$/, '')
    })
    return result
}

function checkDomList(templateChildList) {
    if (!templateChildList?.length) {
        return
    }
    templateChildList.forEach(child => {
        if (child.type !== 'VElement') {
            return
        }
        getClsArrFromAttrs(child.startTag.attributes)
        if (child.children.length > 0) {
            checkDomList(child.children)
        }
    });
}

module.exports = {
    meta: {
        type: 'suggestion', // 规则类型
        docs: {}, // 文档
        fixable: 'null', // 是否自动修复 null ｜ code
        messages: {
            sequence: '请按照 css 样式顺序进行编写' // 带占位符的提示信息
        }
    },
    create: function(context) {
        // console.log('parserServices', context.parserServices);
        t
            {
                // VElement(node) {
                // }
            },
            {
                Program(node) {
                    const domList = node.templateBody.children;
                    checkDomList(node.templateBody.children);
                }
            }
        )
    }
}