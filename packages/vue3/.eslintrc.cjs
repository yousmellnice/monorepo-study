/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    // 'plugin:@packages/eslint-plugin-custom/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
