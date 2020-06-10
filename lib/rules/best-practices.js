/**
 * www.eslint.org 上 Best Practices 的规则集
 */

module.exports = {
  rules: {
    /** 强制在对象或者类里面 getter 和 setter 访问器成对出现 */
    'accessor-pairs': 'error',
    /** 除了 forEach, 数组的方法都必须有返回值 */
    'array-callback-return': 'error',
    /** 强制把变量的使用限制在其定义的作用域范围内 */
    'block-scoped-var	': 'error',
    /** 强制类方法使用 this @off 太严格 */
    'class-methods-use-this': 'off',
    /** 指定程序中允许的最大环路复杂度 */
    'complexity': ['error', { max: 15 }],
    /** 要求 return 语句要么总是指定返回的值，要么不指定 @ff 太严格 */
    'consistent-return': 'off',
    /** @fixable 强制所有控制语句使用一致的括号风格 */
    'curly': ['error', 'all'],
    /** 要求 switch 语句中有 default 分支, @off 有时候就是没有，太严格 */
    'default-case': 'off',
    /** 强制 switch 语句中 default 分支，放到最后 */
    'default-case-last': 'eror',
    /** 强制函数参数有默认值的放到最后 */
    'default-param-last': 'error',
    /** @fixable 强制在点号之前和之后一致的换行, 链式调用点号必须跟着属性或者方法的前面 */
    'dot-location': ['erro', 'property'],
    /** @fixable 强制尽可能地使用点号 */
    'dot-notation': 'error',
    /** @fixable 要求使用 === 和 !== */
    'eqeqeq': ['error', 'always', { null: 'ignore'}],
    /** 要求对象字面量和类中成组出现访问器对, 也就是有 set get */
    'grouped-accessor-pairs': ['error', 'setBeforeGet'],
    /** 要求 for-in 循环中有一个 Object.prototype.hasOwnProperty.call(foo, key) 语句 */
    'guard-for-in': 'error',
    /** 强制一个文件中声明类的数量, 一个文件只能有一个 Class 类 */
    'max-classes-per-file': ['error', 1],
    /** 禁用 alert、confirm 和 prompt , @off 有时候会用到 */
    'no-alert': 'off',
    /** 禁用 arguments.caller 或 arguments.callee */
    'no-caller': 'error',
    /**
     * 不允许在 case 子句中使用词法声明, 当 case 语句里面有变量定义，必须要使用大括号包裹
     * 如：
     * ```
     *  case 1: {
     *    let x = 1;
     *    break;
     *  }
     *  case 2: {
     *    const y = 2;
     *    break;
     *  }
     */
    'no-case-declarations': 'error',
    /**
     * 禁止在 class 类的构造函数 constructor 中使用 return 语句
     * 此规则不允许在类的构造函数中使用return语句。请注意，使用流控制不返回任何内容。
     */
    'no-constructor-return': 'error',
    /** @fixable 禁止除法操作符显式的出现在正则表达式开始的位置, @off 一般不存在问题 */
    'no-div-regex': 'off',
    /** @fixable 禁止 if 语句中 return 语句之后有 else 块 */
    'no-else-return': 'error',
    /** 禁止出现空函数, @off 有时候需要使用到空函数 */
    'no-empty-function': 'off',
    /** 禁止使用空解构模式 */
    'no-empty-pattern': 'error',
    /**
     * 禁止在没有类型检查操作符的情况下与 null 进行比较
     * @off 有时判断 undefined == null 时用得到
     */
    'no-eq-null': 'off',
    /** 禁用 eval() */
    'no-eval': 'error',
    /** 禁止修改或者扩展原生类型 */
    'no-extend-native': 'error',
    /** @fixable 禁止不必要的 bind  */
    'no-extra-bind': 'error',
    /** @fixable 禁用不必要的标签  */
    'no-extra-label': 'error',
    /** 禁止 case 语句落空, case 必须要有 break 或者 return */
    'no-fallthrough': 'error',
    /** @fixable 禁止数字字面量中使用前导和末尾小数点, 禁止出现 .5 这种小数，应该是 0.5 */
    'no-floating-decimal': 'error',
    /** 禁止给全局变量赋值 */
    'no-global-assign': 'error',
    /** @fixable 禁止使用短符号进行类型转换 */
    'no-implicit-coercion': ['error', { allow: ['!!'] } ],
    /** 禁止在全局范围内使用变量声明和 function 声明 */
    'no-implicit-globals': 'error',
    /** 禁止在 setTimeout,setInterval 中传入字符串 */
    'no-implied-eval': 'error',
    /** 禁止 this 关键字出现在类和类对象之外 @off 有时候在函数中使用很有用 */
    'no-invalid-this': 'off',
    /** 禁用 __iterator__ 属性 */
    'no-iterator': 'error',
    /** 禁用标签语句 */
    'no-labels': 'error',
    /** 禁止使用没必要的 {} 作为代码块 */
    'no-lone-blocks': 'error',
    /** 禁止在循环语句中出现包含不安全引用的函数声明 */
    'no-loop-func': 'error',
    /** 禁用魔术数字 @off 业务代码中有时候需要直接写数字 */
    'no-magic-numbers': 'off',
    /** @fixable 禁止使用多个空格, 尾部注释可以 */
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      }
    ],
    /** 禁止使用多行字符串 */
    'no-multi-str': 'error',
    /** 禁止直接 new 一个类，而不赋值 */
    'no-new': 'error',
    /** 禁止对 Function 对象使用 new 操作符 */
    'no-new-func': 'error',
    /** 禁止对包装类如 String, Boolean, Number 使用 new */
    'no-new-wrappers': 'error',
    /** 禁用八进制字面量 */
    'no-octal': 'error',
    /** 禁止在字符串中使用八进制转义序列 */
    'no-octal-escape': 'error',
    /** 禁止对 function 的参数进行重新赋值 */
    'no-param-reassign': 'error',
    /** 禁用 __proto__ 属性 */
    'no-proto': 'error',
    /** 禁止多次声明同一变量 */
    'no-redeclare': 'error',
    /** 禁止某些 api 不能使用, @off 一般用不到 */
    'no-restricted-properties': 'off',
    /** 禁止在 return 语句中使用赋值语句 */
    'no-return-assign': ['error', 'always'],
    /** 禁用不必要的 return await */
    'no-return-await': 'error',
    /** 禁止使用 javascript: url */
    'no-script-url': 'error',
    /** 禁止自我赋值 */
    'no-self-assign': 'error',
    /** 禁止自身比较 */
    'no-self-compare': 'error',
    /** 禁用逗号操作符 */
    'no-sequences': 'error',
    /** 禁止抛出异常字面量, 必须抛出 Error */
    'no-throw-literal': 'error',
    /** 禁用一成不变的循环条件 */
    'no-unmodified-loop-condition': 'error',
    /** 禁止无用的表达式 */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      }
    ],
    /** @fixable 禁止出现无用的 label 语句 */
    'no-unused-labels': 'error',
    /** 禁止不必要的 .call() 和 .apply() */
    'no-useless-call': 'error',
    /** 禁止不必要的 catch 子句 */
    'no-useless-catch': 'error',
    /** 禁止不必要的字符串字面量或模板字面量的连接 */
    'no-useless-concat': 'error',
    /** 禁用不必要的转义字符 */
    'no-useless-escape': 'error',
    /** @fixable 禁止多余的 return 语句 */
    'no-useless-return': 'error',
    /** 禁用 void 操作符 */
    'no-void': 'error',
    /** 禁止在注释中使用特定的警告术语 @off TODO, FIXME等是常用的 */
    'no-warning-comments': 'off',
    /** 禁用 with 语句 */
    'no-with': 'error',
    /** 建议在正则表达式中使用命名捕获组, @off 因为暂时用的比较少 */
    'prefer-named-capture-group': 'off',
    /** 要求使用 Error 对象作为 Promise 拒绝的原因 */
    'prefer-promise-reject-errors': 'error',
    /** 优先使用正则表示的字面量定义 */
    'prefer-regex-literals': 'error',
    /** 强制在 parseInt() 使用基数参数 */
    'radix': 'error',
    /** 禁止使用不带 await 表达式的 async 函数 @off koa中有这种写法 */
    'require-await': 'off',
    /** 强制在 RegExp 上使用 u 标志 @off 暂时没必要 */
    'require-unicode-regexp': 'off',
    /** 要求所有的 var 声明出现在它们所在的作用域顶部 */
    'vars-on-top': 'error',
    /** @fixable 要求 IIFE 使用括号括起来 */
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    /** @fixable 要求或禁止 “Yoda” 条件 */
    'yoda': ['error', 'never', { exceptRange: true, onlyEquality: true }]
  },
};
