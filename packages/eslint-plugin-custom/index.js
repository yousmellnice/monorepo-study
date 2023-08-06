module.exports = {
    rules: {
        'valid-windicss-sequence': require('./lib/rules/valid-windi-css.js')
    },
    configs: {
        recommended: require('./configs/myRules'),
    }
}