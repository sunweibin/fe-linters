/**
 * Dobby ESlint 规则集合
 *
 * 包含所有 ESLint v7.x 规则
 * 使用 babel-eslint 作为解析器
 *
 * @fixable 表示此配置支持通过 --fix 来修正
 * @off     表示关闭此 eslint 规则，并且后面说明关闭的原因
 */

module.exports = {
  extends: [
    './rules/possible-errors.js'
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
        modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  rules: {},
};
