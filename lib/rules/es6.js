/**
 * www.eslint.org 上 ECMAScript 6 的规则集
 */

module.exports = {
  rules: {
    /**
     * 箭头函数的方法体写法
     * @fixable
     */
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
    /**
     * 箭头函数参数必须使用括号包裹
     * @fixable
     */
    'arrow-parens': ['error', 'always'],
    /**
     * 箭头函数 `=>` 符号前后必须有空格
     * @fixable
    */
    'arrow-spacing': ['error', { before: true, after: true }],
    /**
     * 当使用 extends 时构造函数必须调用super()
    */
    'constructor-super': 'error',
    /**
     * generator 函数的 * 符号，前不需要空格，后面必须要空格
     * @fixable
     */
    'generator-star-spacing': ['error', { before: false, after: true }],
    /**
     * 禁止对定义过的 class 重新赋值
    */
    'no-class-assign': 'error',
    /**
     * 禁止出现令人困惑的箭头函数，如： var x = a => 1 ? 2 : 3;
     * @fixable
    */
    'no-confusing-arrow': ['error', { allowParens: true }],
    /** 禁止对常量重新赋值 */
    'no-const-assign': 'error',
    /** 禁止重复 class 成员属性和方法 */
    'no-dupe-class-members': 'error',
    /** 禁止重复 import 模块 */
    'no-duplicate-imports': 'error',
    /** Symbol 禁用 new */
    'no-new-symbol': 'error',
    /**
     * 禁止某个模块不能导出
     * @off 没必要
    */
    'no-restricted-exports': 'off',
    /**
     * 禁止某个模块不能导入使用
     * @off 没必要
    */
    'no-restricted-imports': 'off',
    /** 禁止在 super 调用之前，使用 this */
    'no-this-before-super': 'error',
    /**
     * 禁止出现没用的计算属性键
     * @fixable
    */
    'no-useless-computed-key': 'error',
    /** 禁止没有的 constructor 函数 */
    'no-useless-constructor': 'error',
    /** 禁止没用的重命名 @fixable */
    'no-useless-rename': 'error',
    /**
     * 禁止使用 var 声明变量，应该用 let 或者 const
     * @fixable
    */
    'no-var': 'error',
    /**
     * 强制使用 对象简写表示
     * @fixable
    */
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    /**
     * 优先使用箭头函数作为回调
     * @fixable
    */
    'prefer-arrow-callback': 'error',
    /**
     * 优先使用 const 常量定义
     * @fixable
    */
    'prefer-const': 'error',
    /**
     * 针对对象和数组优先使用结构赋值
     * @off 没必要
    */
    'prefer-destructuring': 'off',
    /**
     * 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
     * @fixable
     * @off 没必要
    */
    'prefer-numeric-literals': 'off',
    /**
     * 优先使用剩余参数，而不是使用 arguments
     */
    'prefer-rest-params': 'error',
    /**
     * 优先使用扩展符
    */
    'prefer-spread': 'error',
    /**
     * 优先使用字符串模板
     * @fixable
    */
    'prefer-template': 'error',
    /**
     * generator 函数中必须要有 yield
    */
    'require-yield': 'error',
    /**
     * 禁止扩展符(...)后面有空格
     * @fixable
    */
    'rest-spread-spacing': ['error', 'never'],
    /**
     * import 导入排序
     * @fixable
     * @off 没必要
    */
    'sort-imports': 'off',
    /** 创建 Symbol 时，必须传入参数 */
    'symbol-description': 'error',
    /**
     * `${name}` 内首尾禁止有空格
     * @fixable
    */
    'template-curly-spacing': ['error', 'never'],
    /**
     * yield* 后面必须要有空格
     * @fixable
     */
    'yield-star-spacing': ['error', 'after'],
  },
};
