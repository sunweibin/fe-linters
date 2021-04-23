/**
 * www.eslint.org 上 Possible Errors的规则集
 */

module.exports = {
  rules: {
    /**
     * 禁止 for 循环出现方向错误的循环，例如: for(let i = 0; i < 10; i--)
     */
    'for-direction': 'error',
    /** 访问器 getter 必须要有返回值并且不能返回undefined等 */
    'getter-return': 'error',
    /**
     * 禁止使用 async 函数作为 Promise 构造函数的 执行器
     * @see https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': 'error',
    /** 禁止在循环里面写 await */
    'no-await-in-loop': 'error',
    /** 禁止与负零进行比较 */
    'no-compare-neg-zero': 'error',
    /** 禁止在判断语句中进行赋值 */
    'no-cond-assign': ['error', 'always'],
    /** 禁止使用 console 打印语句, 但是允许 console.warn, console.error 因为这两个一般都是报错使用 */
    'no-console': ['error', { allow: ['warn', 'error'] }],
    /** 禁止判断条件使用常量型的值, 除非循环中有条件可以中断 */
    'no-constant-condition': ['error', { checkLoops: false }],
    /** 禁止使用 ctrl 键的 ASCII 码(\x1f)表示出现在正则表达式中， */
    'no-control-regex': 'error',
    /** 禁止 debugger  */
    'no-debugger': 'error',
    /** 禁止重复的命名参数 */
    'no-dupe-args': 'error',
    /** 禁止在 else if 相同的条件判断 */
    'no-dupe-else-if': 'error',
    /** 禁止对象中出现重复的 key */
    'no-dupe-keys': 'error',
    /** 禁止在 switch 中出现相同的 case 条件 */
    'no-duplicate-case': 'error',
    /** 禁止空代码块，除了 catch 语句 */
    'no-empty': ['error', { allowEmptyCatch: true }],
    /** 禁止正则表达式中出现空的字符集 */
    'no-empty-character-class': 'error',
    /** 禁止将 catch 的第一个 error 参数赋值 */
    'no-ex-assign': 'error',
    /** @fixable 禁止不必要的布尔值转换 */
    'no-extra-boolean-cast': 'error',
    /** @fixable 禁止不必要的括号 */
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'all' }],
    /** @fixable 禁止不必要的分号 */
    'no-extra-semi': 'error',
    /** 禁止函数重新赋值 */
    'no-func-assign': 'error',
    /** 禁止给 import 的值重新赋值 */
    'no-import-assign': 'error',
    /** 禁止在 if 代码块中出现函数声明 */
    'no-inner-declarations': ['error', 'both'],
    /** 禁止在正则表达式的构造函数中使用非法表达式, 允许 ES6 新增的 flags: u, y  */
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] } ],
    /** 禁止出现不常规的空白符 */
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    /** 不允许数字文字失去准确性, 写数字时需要确保数字的精确度问题 */
    'no-loss-of-precision': 'error',
    /** 不允许在字符类语法中出现由多个代码点组成的字符 */
    'no-misleading-character-class': 'error',
    /** 禁止将全局对象当作函数进行调用 */
    'no-obj-calls': 'error',
    /** 禁止直接使用 Object.prototypes 的内置属性 */
    'no-prototype-builtins': 'error',
    /** @fixable 禁止正则表达式字面量中出现多个空格 */
    'no-regex-spaces': 'error',
    /** 禁止在 setter 访问器 return 值 */
    'no-setter-return': 'error',
    /** 禁止稀疏数组，如 let for = [,,] */
    'no-sparse-arrays': 'error',
    /** 禁止在常规字符串中使用模板文字占位符语法 */
    'no-template-curly-in-string': 'error',
    /** 禁止出现令人困惑的多行表达式 */
    'no-unexpected-multiline': 'error',
    /** 禁止在 return、throw、continue 和 break 语句之后出现不可达代码 */
    'no-unreachable': 'error',
    /** 禁止在循环中 return、throw、continue 和 break 语句之后出现不可达代码 */
    'no-unreachable-loop': 'error',
    /** 禁止在 finally 语句块中出现 return、throw、break 和 continue  */
    'no-unsafe-finally': 'error',
    /** @fixable 禁止对关系运算符的左操作数使用否定操作符, 比如 if(!key in obj) */
    'no-unsafe-negation': 'error',
    /** 禁止在不允许使用未定义值的上下文中使用可选链接，比如 (obj?.foo)(); */
    'no-unsafe-optional-chaining': 'error',
    /** 在正则表达式中禁止无用的反向引用 */
    'no-useless-backreference': 'error',
    /** 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值, 如 result += await asyncFunction() */
    'require-atomic-updates': 'error',
    /** 要求使用 isNaN() 检查 NaN */
    'use-isnan': 'error',
    /** 强制 typeof 表达式与有效的字符串进行比较 */
    'valid-typeof': 'error',
    /** 禁止 promise 的 executor 函数中不允许 return 值，应该使用 resolve, reject 抛出值 */
    'no-promise-executor-return': 'error'
  },
};
