const { eslint, lintMerge } = require('./lib');

module.exports = lintMerge(eslint, {
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
});
