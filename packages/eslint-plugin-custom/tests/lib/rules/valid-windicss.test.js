const rule = require('../../../lib/rules/valid-windicss')
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester({
    parser: require.resolve('vue-eslint-parser'),
    parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run('vue template windicss order', rule, {
    valid: [
        {
            filename: 'test.vue',
            code:
            `<template>
                <div class="flex bg-[red] w-2xl w-screen-xl -pt-200px w-max-120px -inset-full -order-1 -order-11 justify-items-start content-evenly self-center">
                    <button type="button" class="text-20px leading-20px flex position">Hello World</button>
                </div>
            </template>`
        },
    ],
    invalid: [
        // {
        //     filename: 'test.vue',
        //     code: '<template><button type="button" class="flex leading-20px text-20px">Hello World</button></template>'
        // },
    ]
})
