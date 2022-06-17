/**
 * Dobby ESlint 规则集合
 *
 * 包含所有 ESLint v8.x 规则
 * 使用 @babel/eslint-parser 作为解析器
 *
 * @fixable 表示此配置支持通过 --fix 来修正
 * @off     表示关闭此 eslint 规则，并且后面说明关闭的原因
 * @warn    表示该规则允许，但是会报警告
 */

const rules = ['./eslintRules/possible-problems', './eslintRules/suggestions', './eslintRules/layout-formatting'].map(
  require.resolve
);

module.exports = {
  extends: [...rules, 'prettier', 'plugin:import/recommended'],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    allowReserved: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
};
