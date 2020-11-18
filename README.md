# fe-linters
一个包含 prettier，eslint，stylelint 等代码规范校验的配置文件合集

简化 ESLint, StyleLint, commitLint, preetier 等工具的使用

## 功能点

- [x] ESLint
- [ ] StyleLint
- [ ] commitLint
- [x] prettier

## 安装

```bash
yarn add @sunweibin/linters
```

## 使用

### eslint [rules](/lib/eslint.js)

项目根目录创建 `.eslintrc.js`

```js
const { eslint } = require('@sunweibin/linters');

module.exports = eslint;
```
