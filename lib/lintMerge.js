module.exports = function (target, source) {
  const lintConfig = JSON.parse(JSON.stringify(target));

  Object.keys(source).forEach((key) => {
    const sourceValue = source[key];
    const type = Object.prototype.toString.call(sourceValue);

    if (type === '[object Array]') {
      lintConfig[key] = [...target[key], ...sourceValue];
    } else if (type === '[object Object]') {
      lintConfig[key] = { ...target[key], ...sourceValue };
    } else {
      lintConfig[key] = sourceValue;
    }
  });

  return lintConfig;
};
