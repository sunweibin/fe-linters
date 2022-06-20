/**
 * Dobby ReactList 规则集合
 * 在 React 应用中的代码校验，包括 react/jsx-a11y/react-hooks
 *
 * @fixable 表示此配置支持通过 --fix 来修正
 * @off     表示关闭此 eslint 规则，并且后面说明关闭的原因
 * @warn    表示该规则允许，但是会报警告
 */

module.exports = {
  extends: [require.resolve('./base')],
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
    '	react/no-redundant-should-component-update': 'error',
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


    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/alt-text': 'warn',
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

    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
  },
};
