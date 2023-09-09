const rule = require('../../../lib/rules/valid-http')
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester({
    // parser: require.resolve('babel-eslint'),
    parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run('http valid start', rule, {
    valid: [
        {
            code: "const test = 'https://test.com';"
        }
    ],
    invalid: [
        {
            code: "const test = 'http://test.com';",
            output: "const test = 'https://test.com';",
            errors: [
                {
                    message: 'Recommended "http://test.com" switch to HTTPS'
                }
            ]
        },
    ]
})
