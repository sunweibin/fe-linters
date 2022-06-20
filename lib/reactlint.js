/**
 * Dobby ReactList 规则集合
 * 在 React 应用中的代码校验，包括 react/jsx-a11y/react-hooks
 *
 * @fixable 表示此配置支持通过 --fix 来修正
 * @off     表示关闭此 eslint 规则，并且后面说明关闭的原因
 * @warn    表示该规则允许，但是会报警告
 */

module.exports = {
  extends: [
    require.resolve('./eslint'),
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    /**
     * 布尔值属性强制使用 is 等开头
     * @off 没必要
     */
    'react/boolean-prop-naming': 'off',
    /**
     * <button> 组件必须要有 type 属性
     * @off 太严格，没必要
     */
    'react/button-has-type': 'off',
    /**
     * 确保 defaultProps 中的任何 props 都具有非必需的类型定义
     */
    'react/default-props-match-prop-types': 'error',
    /**
     * 强制 props, state, context 使用解构进行取值
     * @fixable
     * @off 太严格
     */
    'react/destructuring-assignment': 'off',
    /**
     * React 组件必须要有 displayName
     */
    'react/display-name': 'error',
    /**
     * 禁止 className，style 等属性
     * @off 太严格
     */
    'react/forbid-component-props': 'off',
    /**
     * 禁止给 div 等元素传递 id 等属性
     * @off 太严格
     */
    'react/forbid-dom-props': 'off',
    /**
     * 禁用某些元素
     * @off 太严格
     */
    'react/forbid-elements': 'off',
    /**
     * 禁止使用外部组件的 propsTypes 定义
     */
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    /**
     * 禁用某些 PropTypes 定义
     * @off 没必要
     */
    'react/forbid-prop-types': 'off',
    /**
     * 强制函数组件的写法
     * @fixable
     * @off 太严格
     */
    'react/function-component-definition': 'off',
    /**
     * 前置 useState 的值和setter通过解构对称出现
     * @off 太严格
     */
    'react/hook-use-state': 'off',
    /**
     * 强制检查React 中 iframe 标签是否存在 sandbox 属性，并且其值是否正确
     */
    'react/iframe-missing-sandbox': 'warn',
    /**
     * this.setState 中不使用 this.state
     */
    'react/no-access-state-in-setstate': 'error',
    /**
     * 相邻的行内元素用空格隔开
     * @off 没必要
     */
    'react/no-adjacent-inline-elements': 'off',
    /**
     * 禁用数组的下标索引作为组件的 Key
     */
    'react/no-array-index-key': 'error',
    /**
     * 生命周期函数不需要使用箭头函数
     */
    'react/no-arrow-function-lifecycle': 'error',
    /**
     * 禁止使用 children 的 porps, 因为每一个 React 组件默认会有一个 childern 的属性
     */
    'react/no-children-prop': 'error',
    /**
     * 禁止使用 dangerouslySetInnerHTML 属性
     * 有时候就是要使用，禁用不现实，给 warn 提示下
     */
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'warn',
    /**
     * 禁止使用 React 已经过期的相关声明周期函数
     */
    'react/no-deprecated': 'error',
    /**
     * 禁止在 componentDidMount 生命周期函数内直接使用 this.setState
     */
    'react/no-did-mount-set-state': 'error',
    /**
     * 禁止在 componentDidUpdate 声明周期函数中直接使用使用 this.setState
     */
    'react/no-did-update-set-state': 'error',
    /**
     * 禁止直接使用 this.state 来修改组件状态
     */
    'react/no-direct-mutation-state': 'error',
    /**
     * 禁用 findDOMNode 函数
     * 有时不可避免，用个 warn 提示下
     */
    'react/no-find-dom-node': 'warn',
    /**
     * 避免不合法的 html 属性
     */
    'react/no-invalid-html-attribute': 'error',
    /**
     * 禁止使用 isMounted 属性，ES6 中不可用
     */
    'react/no-is-mounted': 'error',
    /**
     * 一个文件只能有一个组件
     */
    'react/no-multi-comp': 'error',
    /**
     * 禁止 React 元素使用 namespace
     */
    'react/no-namespace': 'error',
    /**
     * 如果 React 组件继承 PureComponent 就不需要写 shouldComponentUpdate 生命周期函数
     */
    'react/no-redundant-should-component-update': 'error',
    /**
     * 禁止使用 ReactDOM.render 的返回值
     */
    'react/no-render-return-value': 'error',
    /**
     * 对于直接使用 props 中的值，不需要初始化到 state;
     */
    'react/no-set-state': 'error',
    /**
     * ref 必须使用 React.createRef 新的 API
     */
    'react/no-string-refs': 'error',
    /**
     * Function 组件中禁止出现 this
     */
    'react/no-this-in-sfc': 'error',
    /**
     * 防止一些 React 的 API 名称写错别字
     */
    'react/no-typos': 'error',
    /**
     * 禁止出现无效的字符，比如 html 的 箭头等
     */
    'react/no-unescaped-entities': 'error',
    /**
     * 禁止未知的属性，比如 class, for 等，需要使用他们的转化后的属性如 class->className for -> htmlFor
     * @fixable
     */
    'react/no-unknown-property': 'error',
    /**
     * 禁止使用 unsafe 的生命周期函数
     */
    'react/no-unsafe': 'error',
    /**
     * 禁止使用嵌套的不稳定组件
     */
    'react/no-unstable-nested-components': 'error',
    /**
     * 避免未使用的的 class 组件方法
     */
    'react/no-unused-class-component-methods': 'error',
    /**
     * 避免未使用的 propsTypes 定义
     */
    'react/no-unused-prop-types': 'error',
    /**
     * 避免未使用的 state 值
     */
    'react/no-unused-state': 'error',
    /**
     * 禁止在 componentWillUpdate 生命周期中出现 setState
     */
    'react/no-will-update-set-state': 'error',
    /**
     * 优先使用 ES6 的方式创建组件
     */
    'eact/prefer-es6-class': 'error',
    /**
     * @off 太严格，没必要
     */
    'react/prefer-exact-props': 'off',
    /**
     * props 为只读属性，不能修改
     * @fixable
     */
    'react/prefer-read-only-props': 'error',
    /**
     * 优先无状态的函数组件
     * @off 没必要，由开发人员自己去控制
     */
    'react/prefer-stateless-function': 'off',
    /**
     * 防止在 React 组件定义中缺少 props 验证
     */
    'react/prop-types': 'error',
    /**
     * 防止缺少 import React from 'react';
     */
    'react/react-in-jsx-scope': 'error',
    /**
     * 为每个不是必需道具的道具强制执行 defaultProps 定义
     */
    'react/require-default-props': 'error',
    /**
     * 使用 React.Component 创建的组件必须要有 shouldComponentUpdate 生命周期函数
     */
    'react/require-optimization': 'error',
    /**
     * render 函数必须要有 return 返回值
     */
    'react/require-render-return': 'error',
    /**
     * 没有子组件的必须使用自关闭标签 <XXXX />
     */
    'react/self-closing-comp': 'error',
    /**
     * 强制组件方法排序
     * @fixable
     */
    'react/sort-comp': 'error',
    /**
     * @off 太严格，没必要
     */
    'react/sort-prop-types': 'off',
    /**
     * 强制 state 放到 constructor 中去，而不是使用新的 ES 特性
     * @example
     * class Foo extends React.Component {
     *   constructor(props) {
     *     super(props)
     *     this.state = { bar: 0 }
     *   }
     *   render() {
     *     return <div>Foo</div>
     *   }
     * }
     */
    'react/state-in-constructor': ['error', 'always'],
    /**
     * 静态属性放置位置，必须在 ES6 Class 内部
     * @off 没必要，由开发人员自行控制
     */
    'react/static-property-placement': 'off',
    /**
     * 要求 React 组件的 style 的值必须是一个对象
     */
    'react/style-prop-object': 'error',
    /**
     * 禁止给 <img /> 、<br /> 等标签子组件
     */
    'react/void-dom-elements-no-children': 'error',

    // 以下是 eslint-plugin-react插件下的 jsx 相关规则
    /**
     * 在 JSX 中强制布尔属性表示法
     * @fixable
     */
    'react/jsx-boolean-value': 'error',
    /**
     * @off 无关紧要
     */
    'react/jsx-child-element-spacing': 'off',
    /**
     * JSX标签的右括号位置
     * @fixable
     */
    'react/jsx-closing-bracket-location': 'error',
    /**
     * JSX闭合标签的位置
     * @fixable
     */
    'react/jsx-closing-tag-location': 'error',
    /**
     * props 和 children 中是否禁止不必要的花括号
     * @fixable
     * @example
     * <App prop="Hello world" attr="foo">xxxxx</APP>
     */
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],
    /**
     * 在 JSX 属性和表达式中的花括号中强制换行
     * @fixable
     */
    'react/jsx-curly-newline': 'error',
    /**
     * 在 JSX 属性和表达式中强制或禁止大括号内的空格
     * @fixable
     */
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true, allowMultiline: false }],
    /**
     * 在 JSX 属性中强制或禁止等号周围的空格
     * @fixable
     */
    'react/jsx-equals-spacing': ['error', 'never'],
    /**
     * 限制包含 jsx 语法的文件名称
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.js', 'jsx', '.tsx'] }],
    /**
     * 配置第一个属性的位置
     * @fixable
     */
    'react/jsx-first-prop-new-line': 'error',
    /**
     * React.Fragment 强制使用简写法 <> ... </>
     * @fixable
     * @example
     * <>
     *  <App />
     * </>
     */
    'react/jsx-fragments': 'error',
    /**
     * 在 JSX 中强制执行事件处理程序命名约定
     * @off 没必要，CR 的时候可以控制
     */
    'react/jsx-handler-names': 'off',
    /**
     * JSX 的缩进
     * @fixable
     */
    'react/jsx-indent': ['error', 2],
    /**
     * JSX 属性的缩进
     * @fixable
     */
    'react/jsx-indent-props': ['error', 2],
    /**
     * 检查JSX的key属性
     */
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    /**
     * JSX 嵌套深度
     * @off 太严格没必要
     */
    'react/jsx-max-depth': 'off',
    /**
     * 一行最多放几个JSX属性
     * @fixable
     */
    'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
    /**
     * 要求或阻止在 jsx 元素和表达式之后换行
     * @fixable
     */
    'react/jsx-newline': ['error', { prevent: true }],
    /**
     * JSX 属性上禁止使用 箭头函数或者 .bind函数
     * @off 经常会用到
     */
    'react/jsx-no-bind': 'off',
    /**
     * 防止注释作为文本节点插入,必须使用 React 的注释方式
     */
    'react/jsx-no-comment-textnodes': 'error',
    /**
     * 此规则防止将不稳定的值（即对象标识）用作 Context.Provider 的值。
     */
    'react/jsx-no-constructed-context-values': 'error',
    /**
     * 禁止重复的 props
     */
    'react/jsx-no-duplicate-props': 'error',
    /**
     * web 中对于假值是可以默认为 false
     * @fixable
     * @off
     */
    'react/jsx-no-leaked-render': 'off',
    /**
     * 避免字符串字面量
     * @off 经常出现，没必要控制
     */
    'react/jsx-no-literals': 'off',
    /**
     * 禁止使用 javascript: URLs
     */
    'react/jsx-no-script-url': 'error',
    /**
     * 防止使用 unsafe target='_blank'
     * @fixable
     */
    'react/jsx-no-target-blank': 'error',
    /**
     * 禁止 JSX 中未声明的变量
     */
    'react/jsx-no-undef': 'error',
    /**
     * 禁止不必要的 React.Fragment
     * @fixable
     */
    'react/jsx-no-useless-fragment': 'error',
    /**
     * 限制一行一个JSX 元素
     * @fixable
     * @off 没必要
     */
    'react/jsx-one-expression-per-line': 'off',
    /**
     * 对用户定义的 JSX 组件实施 PascalCase
     */
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    /**
     * 禁止内联 JSX 道具之间有多个空格
     * @fixable
     */
    'react/jsx-props-no-multi-spaces': 'error',
    /**
     * JSX 的属性禁止使用 ...扩展符
     * @off 很常见
     */
    'react/jsx-props-no-spreading': 'off',
    /**
     * 强制 defaultProps 按照字母顺序排序
     * @off 没必要
     */
    'react/jsx-sort-default-props': 'off',
    /**
     * 强制 props 按照字母顺序排序
     * @fixable
     * @off 没必要
     */
    'react/jsx-sort-props': 'off',
    /**
     * JSX 有括号之前有空格
     * @fixable
     */
    'react/jsx-space-before-closing': 'error',
    /**
     * 校验 JSX 开括号和右括号内和周围的空格
     * @fixable
     */
    'react/jsx-tag-spacing': 'error',
    /**
     * 防止 React 被标记为未使用
     */
    'react/jsx-uses-react': 'error',
    /**
     * @off eslint 默认就有该规则 no-unused-vars
     */
    'react/jsx-uses-vars': 'off',
    /**
     * 防止多行 JSX 周围缺少括号
     * @fixable
     */
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-lin',
      },
    ],
    // ## 以下是 eslint-plugi-jsx-a11y 插件的规则集
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
  },
};
