/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
// const windicss = require('../eslint-plugin-custom/index')
// require('../eslint-plugin-custom/index')
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:@packages/eslint-plugin-custom/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  // rules: {
  //   'valid-windicss-sequence': 2
  // },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
