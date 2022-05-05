// 将改源码保存到 Chrome 的 Sources 中
// 然后打开 https://eslint.org/docs/rules
// 运行后，在 Chrome 的 console 面板得到所有 ESLint 规则

// 获取Eslint大类的title和dom的id
function getEslintGroups() {
  const titleNodeList = document.querySelectorAll('article.container > h2');
  const eslintGroups = [];
  for (const titleNode of titleNodeList) {
    const eslintGroupDesc = titleNode.nextSibling.nodeValue;
    const eslintGroup = { title: titleNode.innerText, id: titleNode.id, desc: eslintGroupDesc };
    eslintGroups.push(eslintGroup);
  }
  return eslintGroups;
}

function parseRuleTR(ruleLineNode) {
  const rule = {};
  const [recommendedTD, fixableTD, titleTD, descTD] = ruleLineNode.querySelectorAll('td');
  rule.recommend = !!recommendedTD.querySelector('span[title="recommended"]');
  rule.fixable = !!fixableTD.querySelector('span[title="fixable"]');
  rule.title = titleTD.innerText;
  rule.desc = descTD.innerText;
  return rule;
}

// 找到每一类下的所有eslint规则
function getRulesByGroupId(groupId) {
  const ruleTable = document.querySelector(`#${groupId}~table.rule-list`);
  const ruleLines = ruleTable.querySelectorAll('tr');
  const eslintRules = [];
  for (const ruleLineNode of ruleLines) {
    const eslintRule = parseRuleTR(ruleLineNode);
    eslintRules.push(eslintRule);
  }
  return eslintRules;
}

function getAllEslintRules() {
  const eslintGroupRules = [];
  const eslintGroups = getEslintGroups();
  for (const eslintGroup of eslintGroups) {
    if (eslintGroup.id !== 'deprecated' && eslintGroup.id !== 'removed') {
      const eslintRules = getRulesByGroupId(eslintGroup.id);
      eslintGroupRules.push({
        ...eslintGroup,
        rules: eslintRules,
      });
    }
  }

  return eslintGroupRules;
}

console.warn(JSON.stringify(getAllEslintRules(), null, 2));
