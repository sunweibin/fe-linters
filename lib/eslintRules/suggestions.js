/**
 * ESLint@8.14.0
 * www.eslint.org 上 Suggestions 的规则集
 */

module.exports = {
  rules: {
    /** 强制在对象或者类里面 getter 和 setter 访问器成对出现 */
    'accessor-pairs': 'error',
    /**
     * 箭头函数的方法体写法
     * @fixable
     */
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
    /** 强制把变量的使用限制在其定义的作用域范围内 */
    'block-scoped-var': 'error',
    /** 强制驼峰命名 */
    camelcase: 'error',
    /**
     * 强制注释的首字母大写
     * @off 太严格了
     */
    'capitalized-comments': 'off',
    /**
     * 强制类方法使用 this
     * @off 太严格了
     */
    'class-methods-use-this': 'off',
    /** 指定程序中允许的最大环路复杂度 */
    complexity: ['error', { max: 15 }],
    /**
     * 要求 return 语句要么总是指定返回的值，要么不指定
     * @ff 太严格了
     */
    'consistent-return': 'error',
    /**
     * 强制上下文环境使用同一个命名
     * @off 太严格了
     */
    'consistent-this': 'off',
    /**
     * 强制所有控制语句使用一致的括号风格
     * @fixable
     */
    curly: ['error', 'all'],
    /**
     * 要求 switch 语句中有 default 分支,
     * @off 有时候就是没有，太严格了
     */
    'default-case': 'off',
    /**
     * 强制 switch 语句中 default 分支，放到最后
     */
    'default-case-last': 'error',
    /**
     * 强制函数参数有默认值的放到最后
     */
    'default-param-last': 'error',
    /**
     * 强制尽可能地使用点号
     * @fixable
     */
    'dot-notation': 'error',
    /**
     * 强制要求使用 === 和 !==
     * @fixable
     */
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    /**
     * 要求函数的命名与其关联的变量名和属性匹配
     * @off 太严格了
     */
    'func-name-matching': 'off',
    /**
     * 必须使用命名函数
     * as-needed: 如果需要则命名, 非必须则可以使用匿名函数
     */
    'func-names': ['error', 'as-needed'],
    /**
     * 强制使用统一的函数定义方式
     * 方式有：表达式或者声明式
     * @off 太严格
     */
    'func-style': 'off',
    /**
     * 要求对象字面量和类中成组出现访问器对, 也就是有 set get
     */
    'grouped-accessor-pairs': ['error', 'setBeforeGet'],
    /**
     * 要求 for-in 循环中有一个 Object.prototype.hasOwnProperty.call(foo, key) 语句
     */
    'guard-for-in': 'error',
    /**
     * 禁用的变量名列表
     * @off 太严格了
     */
    'id-denylist': 'off',
    /**
     * 变量名长度
     * @off 太严格了
     */
    'id-length': 'off',
    /**
     * 变量名命名规则
     * @off 太严格了
     */
    'id-match': 'off',
    /**
     * 变量声明前必须初始化值
     * @off 有时候需要先申明后赋值
     */
    'init-declarations': 'off',
    /**
     * 强制一个文件中声明类的数量, 一个文件只能有一个 Class 类
     */
    'max-classes-per-file': ['error', 1],
    /**
     * 最大的嵌套深度
     * @off 没必要，太严格了
     */
    'max-depth': 'off',
    /**
     * 每个文件最多代码行
     * @off 没必要限制，太严格了
     */
    'max-lines': 'off',
    /**
     * 每个函数体最多代码行
     * @off 没必要限制，太严格了
     */
    'max-lines-per-function': 'off',
    /**
     * 最大回调嵌套
     * @off 没必要，太严格了
     */
    'max-nested-callbacks': 'off',
    /**
     * 最多形参个数，最多4个形参
     */
    'max-params': ['error', { max: 4 }],
    /**
     * 最多变量申明
     * @off 没必要，太严格了
     */
    'max-statements': 'off',
    /**
     * 多行注释样式
     * @fixable
     * @off 没没必要，太严格了
     */
    'multiline-comment-style': ['off', 'starred-block'],
    /**
     * 构造函数首字母大写
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    /**
     * 禁用 alert、confirm 和 prompt
     * @off 有时候会用到，太严格了
     */
    'no-alert': 'warn',
    /**
     * 禁用 Array 构造函数
     */
    'no-array-constructor': 'error',
    /**
     * 禁用位运算
     * @off 有时候需要用到
     */
    'no-bitwise': 'off',
    /**
     * 禁用 arguments.caller 或 arguments.callee
     */
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
     * 禁止出现令人困惑的箭头函数，如： var x = a => 1 ? 2 : 3;
     * @fixable
     */
    'no-confusing-arrow': ['error', { allowParens: true, onlyOneSimpleParam: true }],
    /**
     * 禁止使用 console 打印语句,
     * 但是允许 console.warn, console.error 因为这两个一般都是报错使用
     */
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    /**
     * 禁用 continue 语句
     * @off 有时需要用到
     */
    'no-continue': 'off',
    /**
     * 禁止使用 delete 变量
     *  ```
     *    var x;
     *    delete x;
     *  ```
     */
    'no-delete-var': 'error',
    /**
     * 禁止除法操作符显式的出现在正则表达式开始的位置,
     * @fixable
     */
    'no-div-regex': 'error',
    /**
     * 禁止 if 语句中 return 语句之后有 else 块
     * @fixable
     */
    'no-else-return': 'error',
    /**
     * 禁止空代码块，除了 catch 语句
     */
    'no-empty': ['error', { allowEmptyCatch: true }],
    /**
     * 禁止出现空函数
     * @off 有时候需要使用到空函数
     */
    'no-empty-function': 'off',
    /**
     * 禁止在没有类型检查操作符的情况下与 null 进行比较
     */
    'no-eq-null': 'error',
    /**
     * 禁用 eval()
     */
    'no-eval': 'error',
    /**
     * 禁止修改或者扩展原生类型
     */
    'no-extend-native': 'error',
    /**
     * 禁止不必要的 bind
     * @fixable
     */
    'no-extra-bind': 'error',
    /**
     * 禁止不必要的布尔值转换
     * @fixable
     */
    'no-extra-boolean-cast': 'error',
    /**
     * 禁用不必要的标签
     * @fixable
     */
    'no-extra-label': 'error',
    /**
     * 禁止不必要的分号
     * @fixable
     */
    'no-extra-semi': 'error',
    /**
     * 禁止数字字面量中使用前导和末尾小数点, 禁止出现 .5 这种小数，应该是 0.5
     * @fixable
     */
    'no-floating-decimal': 'error',
    /**
     * 禁止给全局变量赋值
     */
    'no-global-assign': 'error',
    /**
     * 禁止使用短符号进行类型转换
     * @fixable
     */
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    /**
     * 禁止在全局范围内使用变量声明和 function 声明
     */
    'no-implicit-globals': 'error',
    /**
     * 禁止在 setTimeout,setInterval 中传入字符串
     */
    'no-implied-eval': 'error',
    /**
     * 禁止行内注释
     * @off 需要行内注释
     */
    'no-inline-comments': 'off',
    /**
     * 禁止 this 关键字出现在类和类对象之外
     * @off 有时候在函数中使用很有用
     */
    'no-invalid-this': 'off',
    /**
     * 禁用 __iterator__ 属性
     */
    'no-iterator': 'error',
    /**
     * 禁止标签与变量同名
     */
    'no-label-var': 'error',
    /**
     * 禁用标签语句
     */
    'no-labels': 'error',
    /**
     * 禁止使用没必要的 {} 作为代码块
     */
    'no-lone-blocks': 'error',
    /**
     * 禁止 if 作为独立的语句出现在 else 中
     * @fixable
     */
    'no-lonely-if': 'error',
    /**
     * 禁止在循环语句中出现包含不安全引用的函数声明
     */
    'no-loop-func': 'error',
    /**
     * 禁用魔术数字
     * @off 业务代码中有时候需要直接写数字
     */
    'no-magic-numbers': 'off',
    /**
     * 禁止不同优先级的操作符混用
     */
    'no-mixed-operators': 'error',
    /**
     * 禁止连续赋值, a = b =c =5;
     * @off 没必要限制，太严格了
     */
    'no-multi-assign': 'off',
    /**
     * 禁止使用多行字符串
     */
    'no-multi-str': 'error',
    /**
     * 禁用否定表达式
     * @off 没必要，有时否定表述更加清晰
     */
    'no-negated-condition': 'off',
    /**
     * 禁用三元表达式嵌套
     * @off 没必要
     */
    'no-nested-ternary': 'off',
    /**
     * 禁止直接 new 一个类，而不赋值
     */
    'no-new': 'error',
    /**
     * 禁止对 Function 对象使用 new 操作符
     */
    'no-new-func': 'error',
    /**
     * 禁止直接 new Object()
     */
    'no-new-object': 'error',
    /**
     * 禁止对包装类如 String, Boolean, Number 使用 new
     */
    'no-new-wrappers': 'error',
    /**
     * 禁止在字符串文字中使用\ 8和\ 9转义序列, 比如：'\8', 而应该写成 '\\8'
     */
    'no-nonoctal-decimal-escape': 'error',
    /**
     * 禁用八进制字面量
     */
    'no-octal': 'error',
    /**
     * 禁止在字符串中使用八进制转义序列
     */
    'no-octal-escape': 'error',
    /**
     * 禁止对 function 的参数进行重新赋值
     */
    'no-param-reassign': 'error',
    /**
     * 禁止操作符 ++ 或 --
     * @off 很常见
     */
    'no-plusplus': 'off',
    /**
     * 禁用 __proto__ 属性
     */
    'no-proto': 'error',
    /**
     * 禁止多次声明同一变量
     */
    'no-redeclare': 'error',
    /**
     * 禁止正则表达式字面量中出现多个空格
     * @fixable
     */
    'no-regex-spaces': 'error',
    /**
     * 禁止某个模块不能导出
     * @off 没必要，太严格了
     */
    'no-restricted-exports': 'off',
    /**
     * 禁止某个具体的变量名称不能使用
     * @off 如果后期项目中需要规定某些代码，防止被别人覆盖时，在另外定义
     */
    'no-restricted-globals': 'off',
    /**
     * 禁止某个模块不能导入使用
     * @off 没必要，太严格了
     */
    'no-restricted-imports': 'off',
    /**
     * 禁止某些 api 不能使用
     * @off 一般用不到
     */
    'no-restricted-properties': 'off',
    /**
     * 禁止特定语法的使用
     * @off 没必要
     */
    'no-restricted-syntax': 'off',
    /**
     * 禁止在 return 语句中使用赋值语句
     */
    'no-return-assign': ['error', 'always'],
    /**
     * 禁用不必要的 return await
     */
    'no-return-await': 'error',
    /**
     * 禁止使用 javascript: url
     */
    'no-script-url': 'error',
    /**
     * 禁用逗号操作符
     */
    'no-sequences': 'error',
    /**
     * 禁止变量声明与外层作用域的变量同名
     */
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }],
    /**
     * 禁止使用语言保留关键字作为变量名
     */
    'no-shadow-restricted-names': 'error',
    /**
     * 禁用三元表达式
     * @off 很常见
     */
    'no-ternary': 'off',
    /**
     * 禁止抛出异常字面量, 必须抛出 Error
     */
    'no-throw-literal': 'error',
    /**
     * 禁止将变量初始化为 undefined
     * @fixable
     */
    'no-undef-init': 'error',
    /**
     * 禁止将 undefined 作为变量名
     */
    'no-undefined': 'error',
    /**
     * 禁用下划线命名变量或者属性
     * @off 下划线命名很常见
     */
    'no-underscore-dangle': 'off',
    /**
     * 禁止不必要的三元表达式
     * @fixable
     * @off 没必要限制，由开发人员自己控制
     */
    'no-unneeded-ternary': 'off',
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    /**
     * 禁止出现无用的 label 语句
     * @fixable
     */
    'no-unused-labels': 'error',
    /**
     * 禁止不必要的 .call() 和 .apply()
     */
    'no-useless-call': 'error',
    /**
     * 禁止不必要的 catch 子句
     */
    'no-useless-catch': 'error',
    /**
     * 禁止出现没用的计算属性键
     * @fixable
     */
    'no-useless-computed-key': 'error',
    /**
     * 禁止不必要的字符串字面量或模板字面量的连接
     */
    'no-useless-concat': 'error',
    /**
     * 禁止没必要的 constructor 函数
     */
    'no-useless-constructor': 'error',
    /**
     * 禁用不必要的转义字符
     */
    'no-useless-escape': 'error',
    /**
     * 禁止没用的重命名
     * @fixable
     */
    'no-useless-rename': 'error',
    /**
     * 禁止多余的 return 语句
     * @fixable
     */
    'no-useless-return': 'error',
    /**
     * 禁止使用 var 声明变量，应该用 let 或者 const
     * @fixable
     */
    'no-var': 'error',
    /**
     * 禁用 void 操作符
     */
    'no-void': 'error',
    /**
     * 禁止在注释中使用特定的警告术语
     * @off TODO, FIXME等是常用的
     */
    'no-warning-comments': 'off',
    /**
     * 禁用 with 语句
     */
    'no-with': 'error',
    /**
     * 强制使用 对象简写表示
     * @fixable
     */
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
        avoidExplicitReturnArrows: false,
      },
    ],
    /**
     * 强制变量声明放在一起
     * @fixable
     * 不需要放在一起申明
     */
    'one-var': ['error', 'never'],
    /**
     * 一行一个变量申明
     * @fixable
     */
    'one-var-declaration-per-line': ['error', 'always'],
    /**
     * 简化操作符 x = x + y 写成 x += y;
     * @fixable
     * @off 没必要限制
     */
    'operator-assignment': 'off',
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
     * 针对对象和数组优先使用解构赋值
     * @off 没必要
     */
    'prefer-destructuring': 'off',
    /**
     * 优先使用 `**` 代替 Math.pow()
     * @fixable
     */
    'prefer-exponentiation-operator': 'error',
    /**
     * 建议在正则表达式中使用命名捕获组
     *  @off 因为暂时用的比较少
     */
    'prefer-named-capture-group': 'off',
    /**
     * 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
     * @fixable
     * @off 没必要
     */
    'prefer-numeric-literals': 'off',
    /**
     * 优先使用 Object.hasOwn(object, "foo") 来判断对象是否含有自身某属性，
     * 不使用 Object.prototype.hasOwnProperty.call()
     * @fixable
     */
    'prefer-object-has-own': 'error',
    /**
     * 当使用 Object.assign 时，优先使用对象扩展符
     * @fixable
     */
    'prefer-object-spread': 'error',
    /**
     * 要求使用 Error 对象作为 Promise 拒绝的原因
     */
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    /**
     * 优先使用正则表示的字面量定义
     */
    'prefer-regex-literals': 'error',
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
     * 对象属性键名，是否可以使用引号包裹
     * @fixable
     */
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    /**
     * 强制在 parseInt() 使用基数参数,如: parseInt('11', 10)
     */
    radix: 'error',
    /**
     * 禁止使用不带 await 表达式的 async 函数
     * @off koa中有这种写法，太严格了
     */
    'require-await': 'off',
    /**
     * 强制在 RegExp 上使用 u 标志
     * @off 暂时没必要
     */
    'require-unicode-regexp': 'off',
    /**
     * generator 函数中必须要有 yield
     */
    'require-yield': 'error',
    /**
     * import 导入排序
     * @fixable
     * @off 没必要，太严格了
     */
    'sort-imports': 'off',
    /**
     * 将对象的key，排好序
     * @off 没必要，太严格了
     */
    'sort-keys': 'off',
    /**
     * 将变量申明排好序
     * @off 没必要，太严格了
     */
    'sort-vars': 'off',
    /**
     * 注释的 * 或者 // 后必须要有空格
     * @fixable
     */
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          // space here to support sprockets directives, slash for TS /// comments
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+', '*'],
          // space here to support sprockets directives and flow comment types
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],
    /**
     * 该规则禁止严格模式指令
     */
    strict: ['error', 'never'],
    /**
     * 创建 Symbol 时，必须传入参数
     */
    'symbol-description': 'error',
    /**
     * 要求所有的 var 声明出现在它们所在的作用域顶部
     */
    'vars-on-top': 'error',
    /**
     * 禁止 “Yoda” 条件
     * @fixable
     */
    yoda: ['error', 'never', { exceptRange: true, onlyEquality: true }],
  },
};
