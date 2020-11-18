/**
 * www.eslint.org 上 Stylistic Issues 的规则集
 */

module.exports = {
  rules: {
    /**
     * 强制数组的 `[` 与 `]` 字面量符号换行
     * @fixable
     * @off 没必要
    */
   'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    /**
     * 强制给数组的 `[` 与 `]` 之间添加空格
     * @fixalbe
     * never 表示不需要
     */
    'array-bracket-spacing': ['error', 'never'],
    /**
     * 强制数组每一项换行
     * @fixable
     * 表示非多行或者不多于3个数组项，可以不换行
    */
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],
    /** 强制块级区域的开始后和结束位置前需要空格 @fixable */
    'block-spacing': ['error', 'always'],
    /**
     * 块级区域中 `{}` 括号的样式
     * @fixable
     * 一个块的开头括号与其对应的语句或声明放在同一行上, 并且允许单行
    */
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    /** 强制驼峰命名, 不校验对象属性，解构后的使用也不校验 */
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
    /**
     * 强制注释的首字母大写
     * @off 不需要
    */
    'capitalized-comments': 'off',
    /**
     * 拖尾逗号
     * @fixable
     * 只有在多行的情况下，才添加拖尾逗号
    */
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }
    ],
    /**
     * 逗号的前后空格
     * @fixable
     * 逗号前不需要空格, 逗号后需要空格
    */
    'comma-spacing': ['error', { before: false, after: true }],
    /**
     * 逗号位置
     * @fixable
     * 全部需要把逗号放在后面，而不是开头
    */
    'comma-style': ['erro', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],
    /**
     * 给计算属性添加空格
     * @fixable
    */
    'computed-property-spacing': ['error', 'never'],
    /**
     * 强制上下文环境使用同一个命名
     * @off 没必要
    */
    'consistent-this': 'off',
    /** 文件尾空行 @fixable */
    'eol-last': ['error', 'always'],
    /**
     * 禁止函数名称和调用（即`()`）之间空格
     * @fixable
    */
    'func-call-spacing': ['error', 'never'],
    /**
     * 要求函数的命名与其关联的变量名和属性匹配
     * @off 没必要
    */
    'func-name-matching': 'off',
    /**
     * 必须使用命名函数
     * as-needed: 如果需要则命名, 非必须则可以使用匿名函数
    */
    'func-names': ["error", "as-needed"],
    /**
     * 强制使用统一的函数定义方式
     * 方式有：表达式或者声明式
     * @off 太严格
    */
    'func-style': 'off',
    /**
     * 强制函数调用时的参数换行
     * @fixable
     * 保持一致即可
    */
    'function-call-argument-newline': ['error', 'consistent'],
    /**
     * 函数的参数定义是否换行
     * @fixable
     * 保持一致
    */
    'function-paren-newline': ['error', 'consistent'],
    /**
     * 禁用的变量名列表
     * @off 太严格
    */
    'id-denylist': 'off',
    /** 变量名长度 @off 太严格 */
    'id-length': 'off',
    /** 变量名命名规则 @off 太严格 */
    'id-match': 'off',
    /**
     * 箭头函数的返回体的位置
     * @fixable
     * 禁止在箭头函数体之前出现换行
    */
    'implicit-arrow-linebreak': ['error', 'beside'],
    /**
     * 强制一致的缩进
     * @fixable
     * 嵌套使用 2 个空格缩进
     */
    'indent': ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      offsetTernaryExpressions: true,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],
    /**
     * jsx 属性使用一致的引号
     * @fixable
     * 全部使用双引号，除非内容`'"'`,双引号本身就是内容
    */
    'jsx-quotes': ['error', 'prefer-double'],
    /**
     * 对象的键值之间的空白
     * @fixable
     * 冒号前不需要，冒号后需要
    */
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    /**
     * 关键字前后是否需要空格
     * @fixable
    */
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    /** 行注释的位置 @off 太严格 */
    'line-comment-position': 'off',
    /** 强制统一的换行符 @fixable */
    'linebreak-style': ['error', 'unix'],
    /** 强制注释都为有空行 @off 没必要 */
    'lines-around-comment': 'off',
    /**
     * 强制类的成员属性之前要有空行
     * @fixable
    */
    'lines-between-class-members':  ['error', 'always', { exceptAfterSingleLine: false }],
    /** 最大的嵌套深度 @off 没必要 */
    'max-depth': 'off',
    /** 每行最大长度 */
    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    /** 每个文件最多代码行 @off 没必要限制 */
    'max-lines': 'off',
    /** 每个函数体最多代码行 @off 没必要限制 */
    'max-lines-per-function': 'off',
    /** 最大回调嵌套 @off 没必要 */
    'max-nested-callbacks': 'off',
    /** 最多形参 @off 没必要 */
    'max-params': 'off',
    /** 最多变量申明 @off 没必要 */
    'max-statements': 'off',
    /** 一行最多申明数量 @off 没必要 */
    'max-statements-per-line': 'off',
    /**
     * 多行注释样式
     * @fixable
     * @off 没必要限制
     */
    'multiline-comment-style': 'off',
    /** 多行三元表达式 */
    'multiline-ternary': ['error', 'always-multiline'],
    /** 构造函数首字母大写 */
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: false,
      properties: true
    }],
    /**
     * 调用无参数构造函数必须使用括号
     * @fixable
     */
    'new-parens': 'error',
    /** 每一个链式调用都换行 */
    'newline-per-chained-call': 'error',
    /** 禁用 Array 构造函数 */
    'no-array-constructor': 'error',
    /** 禁用位运算 @off 有时候需要用到 */
    'no-bitwise': 'off',
    /** 禁用 continue 语句 @off 有时需要用到 */
    'no-continue': 'off',
    /** 禁止行内注释 @off 有时候需要 */
    'no-inline-comments': 'off',
    /** 禁止 if 作为独立的语句出现在 else 中 @fixable */
    'no-lonely-if': 'error',
    /** 禁止混合使用操作符 */
    'no-mixed-operators': 'error',
    /** 禁用混用空格和制表符 */
    'no-mixed-spaces-and-tabs': 'error',
    /**
     * 禁止连续赋值, a = b =c =5;
     * @off 没必要限制
     */
    'no-multi-assign': 'off',
    /**
     * 禁止连续多个空行
     * @fixable
     * 最多两行空白，文件开头不能有空行，文件尾最多1个空行
    */
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
    /** 禁用否定表达式 @off 没必要，有时否定表述更加清晰 */
    'no-negated-condition': 'off',
    /** 禁用三元表达式嵌套 @off 没必要 */
    'no-nested-ternary': 'off',
    /** 禁止直接 new Object() */
    'no-new-object': 'error',
    /** 禁止操作符 ++ 或 -- @off 很常见 */
    'no-plusplus': 'off',
    /** 禁止特定语法的使用 @off 没必要 */
    'no-restricted-syntax': 'off',
    /** 禁用制表符 */
    'no-tabs': 'error',
    /** 禁用三元表达式 @off 很常见 */
    'no-ternary': 'off',
    /**
     * 禁止行尾空格
     * @fixable
     */
    'no-trailing-spaces': 'error',
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
    /** 禁止属性前有空格 @fixable */
    'no-whitespace-before-property': 'error',
    /** 单行语句块的位置 @fixable */
    'nonblock-statement-body-position': ['error', 'beside', { overrides: { while: 'below'}}],
    /** 大括号内换行符需要一直 @fixable */
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    /**
     * 对象大括号前后需要空格
     * @fixable
     */
    'object-curly-spacing': ['error', 'always'],
    /**
     * 对象字面量每个属性分别换行
     * @fixable
    */
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true}],
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
     * 操作符的换行符一致性
     * @fixable
    */
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    /**
     * 块级作用域开头是否需要空行
     * @fixable
     */
    'padded-blocks': ['error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],
    /**
     * 变量申明后，必须要空行
     * @fixable
     * @off 没必要限制
     */
    'padding-line-between-statements': 'off',
    /**
     * 优先使用 `**` 代替 Math.pow()
     * @fixable
     */
    'prefer-exponentiation-operator': 'error',
    /**
     * 当使用 Object.assign 时，优先使用对象扩展符
     * @fixable
     */
    'prefer-object-spread': 'error',
    /**
     * 对象属性键名，是否可以使用引号包裹
     * @fixable
    */
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    /**
     * 字符串使用单引号包裹，除非需要转义
     * @fixable
    */
    'quotes': ['error', 'single', { avoidEscape: true }],
    /**
     * 语句结尾必须使用分号结束
     * @fixable
    */
    'semi': ['error', 'always'],
    /**
     * 分号前后空格
     * @fixable
    */
    'semi-spacing': ['error', {"before": false, "after": true}],
    /**
     * 分号位置
     * @fixable
     * 放在语句后面
     */
    'semi-style': ['error', 'last'],
    /**
     * 将对象的key，排好序
     * @off 没必要
    */
    'sort-keys': 'off',
    /**
     * 将变量申明排好序
     * @off 没必要
     */
    'sort-vars': 'off',
    /**
     * 大括号前需要一个空格
     * @fixable
     */
    'space-before-blocks': ['error', 'always'],
    /**
     * 函数小括号前是否需要空格
     * @fixable
     */
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    /**
     * 小括号内，前后空格
     * @fixable
     * 不允许有
    */
    'space-in-parens': ['error', 'never'],
    /**
     * 操作符左右必须有空格
     * @fixable
    */
    'space-infix-ops': 'error',
    /**
     * 一元操作符后必须有空格
     * @fixable
    */
   'space-unary-ops': ['error', { words: true, nonwords: false }],
    /**
     * 注释的 * 或者 // 后必须要有空格
     * @fixable
    */
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+', '*'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      }
    }],
    /**
     * switch 的 case 语句的空格
     * @fixable
     * case的冒号前不能有空格，后面必须有空格
    */
    'switch-colon-spacing': ['error', { before: false, after: true }],
    /**
     * 禁止在模板标记和它们的字面量之间有空格
     * @fixable
    */
    'template-tag-spacing': ['error', 'never'],
    /**
     * @fixable
     * 文件头禁止有 BOM（U+FEFF） 标记
     */
    'unicode-bom': ['error', 'never'],
    /**
     * 用括号包裹正则表达式
     * @fixable
     * @off 没必要
     */
    'wrap-regex': 'off'
  },
};
