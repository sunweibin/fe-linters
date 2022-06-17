/**
 * ESLint@8.14.0
 * www.eslint.org 上 Layout & Formatting 的规则集
 */

module.exports = {
  rules: {
    /**
     * 强制数组的 `[` 与 `]` 字面量符号换行
     * @fixable
     * @off
     */
    'array-bracket-newline': ['off', 'consistent'],
    /**
     * 强制给数组的 `[` 与 `]` 之间添加空格
     * @fixalbe
     * never 表示不需要
     */
    'array-bracket-spacing': ['error', 'always'],
    /**
     * 强制数组每一项换行
     * @fixable
     * @off 太严格恶心了，由开发人员自行控制展示
     */
    'array-element-newline': ['off', 'always'],
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
     * 强制块级区域的开始后和结束位置前需要空格
     * @fixable
     */
    'block-spacing': ['error', 'always'],
    /**
     * 块级区域中 `{}` 括号的样式
     * @fixable
     * 一个块的开头括号与其对应的语句或声明放在同一行上, 并且允许单行
     */
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
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
      },
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
    'comma-style': [
      'error',
      'last',

      {
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
        },
      },
    ],
    /**
     * 给计算属性添加空格
     * @fixable
     */
    'computed-property-spacing': ['error', 'never'],
    /**
     * 强制在点号之前和之后一致的换行, 链式调用点号必须跟着属性或者方法的前面
     * @fixable
     */
    'dot-location': ['error', 'property'],
    /**
     * 文件尾空行
     * @fixable
     */
    'eol-last': ['error', 'always'],
    /**
     * 禁止函数名称和调用（即`()`）之间空格
     * @fixable
     */
    'func-call-spacing': ['error', 'never'],
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
     * generator 函数的 * 符号，前不需要空格，后面必须要空格
     * @fixable
     */
    'generator-star-spacing': ['error', { before: false, after: true }],
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
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 'off',
        MemberExpression: 1,
        FunctionDeclaration: {
          body: 1,
          parameters: 'first',
        },
        FunctionExpression: {
          body: 1,
          parameters: 'first',
        },
        CallExpression: {
          arguments: 'first',
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 'first',
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: false,
      },
    ],
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
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    /**
     * 行注释的位置，放在上面
     */
    'line-comment-position': ['error', { position: 'above' }],
    /**
     * 强制统一的换行符
     * @fixable
     */
    'linebreak-style': ['error', 'unix'],
    /**
     * 强制注释都为有空行
     * @off 没必要，太严格了
     */
    'lines-around-comment': 'off',
    /**
     * 强制类的成员属性之前要有空行
     * @fixable
     */
    'lines-between-class-members': ['error', 'always'],
    /**
     * 每行最大长度
     */
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    /**
     * 一行最多申明数量
     * @off 没必要
     */
    'max-statements-per-line': 'off',
    /**
     * 多行三元表达式
     */
    'multiline-ternary': ['error', 'always-multiline'],
    /**
     * 调用无参数构造函数必须使用括号
     * @fixable
     */
    'new-parens': 'error',
    /**
     * 每一个链式调用都换行
     */
    'newline-per-chained-call': 'error',
    /**
     * 禁止不必要的括号
     * @fixable
     */
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'all' }],
    /**
     * 禁用混用空格和制表符
     */
    'no-mixed-spaces-and-tabs': 'error',
    /**
     * 禁止使用多个空格, 尾部注释可以
     * @fixable
     */
    'no-multi-spaces': 'error',
    /**
     * 禁止连续多个空行
     * @fixable
     * 最多两行空白，文件开头不能有空行，文件尾最多1个空行
     */
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
    /**
     * 禁用制表符
     */
    'no-tabs': 'error',
    /**
     * 禁止行尾空格
     * @fixable
     */
    'no-trailing-spaces': 'error',
    /**
     * 禁止属性前有空格
     * @fixable
     */
    'no-whitespace-before-property': 'error',
    /**
     * 单行语句块的位置
     * @fixable
     */
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: { while: 'below' },
      },
    ],
    /**
     * 大括号内换行符需要一直
     * @fixable
     */
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],
    /**
     * 对象大括号前后需要空格
     * @fixable
     */
    'object-curly-spacing': ['error', 'always'],
    /**
     * 对象字面量每个属性分别换行
     * @fixable
     */
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    /**
     * 操作符的换行符一致性
     * @fixable
     */
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: { '=': 'none' },
      },
    ],
    /**
     * 块级作用域开头是否需要空行
     * @fixable
     */
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    /**
     * 变量申明后，必须要空行
     * @fixable
     * @off 没必要限制
     */
    'padding-line-between-statements': 'off',
    /**
     * 字符串使用单引号包裹，除非需要转义
     * @fixable
     */
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    /**
     * 禁止扩展符(...)后面有空格
     * @fixable
     */
    'rest-spread-spacing': ['error', 'never'],
    /**
     * 语句结尾必须使用分号结束
     * @fixable
     */
    semi: ['error', 'always'],
    /**
     * 分号前后空格
     * @fixable
     */
    'semi-spacing': ['error', { before: false, after: true }],
    /**
     * 分号位置
     * @fixable
     * 放在语句后面
     */
    'semi-style': ['error', 'last'],
    /**
     * 大括号前需要一个空格
     * @fixable
     */
    'space-before-blocks': ['error', 'always'],
    /**
     * 函数小括号前是否需要空格
     * @fixable
     */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
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
     * switch 的 case 语句的空格
     * @fixable
     * case的冒号前不能有空格，后面必须有空格
     */
    'switch-colon-spacing': ['error', { before: false, after: true }],
    /**
     * `${name}` 内首尾禁止有空格
     * @fixable
     */
    'template-curly-spacing': ['error', 'never'],
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
     * 要求 IIFE 使用括号括起来
     * @fixable
     */
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    /**
     * 用括号包裹正则表达式
     * @fixable
     * @off 没必要
     */
    'wrap-regex': 'off',
    /**
     * yield* 后面必须要有空格
     * @fixable
     */
    'yield-star-spacing': ['error', 'after'],
  },
};
