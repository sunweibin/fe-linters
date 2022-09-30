// 将改源码保存到 Chrome 的 Sources 中
// 然后打开 https://eslint.org/docs/latest/rules/
// 运行后，在 Chrome 的 console 面板得到所有 ESLint 规则

// 获取Eslint大类的title和dom的id
function getEslintGroups() {
  const titleNodeList = document.querySelectorAll('#main >.docs-main__content > h2');
  const eslintGroups = [];
  for (const titleNode of titleNodeList) {
    const eslintGroupDesc = titleNode.nextElementSibling.innerText;
    eslintGroups.push({
      title: titleNode.innerText,
      id: titleNode.id,
      desc: eslintGroupDesc,
    });
  }
  return eslintGroups;
}

function parseRules(ruleArticleNode) {
  const title = ruleArticleNode.querySelector('.rule__name').innerText;
  const desc = ruleArticleNode.querySelector('.rule__description').innerText;
  const [recommendNode, fixableNode] = ruleArticleNode.querySelectorAll('.rule__categories > .rule__categories__type');
  const recommend = recommendNode.getAttribute('aria-hidden') !== 'true';
  const fixable = fixableNode.getAttribute('aria-hidden') !== 'true';
  return {
    title,
    desc,
    recommend,
    fixable,
  };
}

// 找到每一类下的所有eslint规则
function getRulesByGroupId(groupId) {
  const allRulArticle = document.querySelectorAll(`#${groupId}~article.rule`);
  const eslintRules = [];
  let isLastArticle = false;
  for (const ruleArticle of allRulArticle) {
    if (isLastArticle) {
      break;
    }
    if (ruleArticle.tagName === 'ARTICLE') {
      const eslintRule = parseRules(ruleArticle);
      eslintRules.push(eslintRule);
    }

    if (ruleArticle.nextElementSibling.tagName === 'H2') {
      isLastArticle = true;
    }
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
