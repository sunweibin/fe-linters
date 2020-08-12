/**
 * www.eslint.org 上 Variables 的规则集
 */

module.export = {
  rules: {
    /**
     * 变量声明前必须初始化值
     * @off 有时候需要先申明后赋值
     */
    'init-declarations': 'off',
    /**
     * 禁止使用 delete 变量
     *  ```
     *    var x;
     *    delete x;
     *  ```
     */
    'no-delete-var': 'error',
    /** 禁止标签与变量同名 */
    'no-label-var': 'error',
    /**
     * 禁止某个具体的变量名称不能使用
     * @off 如果后期项目中需要规定某些代码，防止被别人覆盖时，在另外定义
    */
    'no-restricted-globals': 'off',
    /**
     * 禁止变量声明与外层作用域的变量同名
     * @off 太严格了
    */
    'no-shadow': 'off',
    /** 禁止使用语言保留关键字作为变量名 */
    'no-shadow-restricted-names': 'error',
    /** * 禁止使用未定义的变量, 除了针对 typeof 的比较 */
    'no-undef': ['error', { typeof: false }],
    /**
     * 禁止将变量初始化为 undefined
     * @fixable
    */
    'no-undef-init': 'error',
    /** 禁止将 undefined 作为变量名*/
    'no-undefined': 'error',
    /** 定义过的变量，必须使用 */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      }
    ],
    /** */
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      }
    ],
  },
};
