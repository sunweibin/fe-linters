#!/usr/bin/env node

// 比较本地包与远程 ESLint.org 上的规则集差异
const chalk = require('chalk');
const _ = require('lodash');
// const fs = require('fs');
const remoteAllRules = require('./eslintOrgAllRules');

const DIFF_MAPPING = [
  {
    title: 'Possible Problems',
    local: '../lib/eslintRules/possible-problems.js',
    remote: 'possible-problems',
  },
  {
    title: 'Suggestions',
    local: '../lib/eslintRules/suggestions.js',
    remote: 'suggestions',
  },
  {
    title: 'Layout & Formatting',
    local: '../lib/eslintRules/layout-formatting.js',
    remote: 'layout--formatting',
  },
];

const result = {};

function getRemoteGroupRulesKey(groupId) {
  const ruleGroup = remoteAllRules.find((group) => group.id === groupId);
  return ruleGroup.rules.map((rule) => rule.title);
}

DIFF_MAPPING.forEach((item) => {
  const {
    title, local, remote,
  } = item;

  console.log(chalk.yellowBright(`********** ${title} **********`));

  // 获取本地 lib 中的相应分组所有规则的 key 集合
  const localRuleKeys = Object.keys(require(local).rules);
  // 获取 eslint.org 上的相应的分组的最新的规则的 key 集合
  const remoteRuleKeys = getRemoteGroupRulesKey(remote);
  // 找出哪些既不在 本地 lib 中，也不在 remote 上的 key
  const keysInLocalNotRemote = _.difference(localRuleKeys, remoteRuleKeys);
  const keysInRemoteNotLocal = _.difference(remoteRuleKeys, localRuleKeys);

  console.log(chalk.green('在本地lib中，但是不在remote中有如下:'));
  if (_.isEmpty(keysInLocalNotRemote)) {
    console.log('【删除/过期】：无 \n');
  } else {
    console.log(`【删除/过期】：${keysInLocalNotRemote.join('、')}\n`);
  }

  console.log(chalk.green('在remote中，但是不在本地lib中有如下:'));
  if (_.isEmpty(keysInRemoteNotLocal)) {
    console.log('【新增】：无\n');
  } else {
    console.log(`【新增】：${keysInRemoteNotLocal.join('、')}\n`);
  }

  console.log(chalk.yellowBright(`********** ${title} **********`));
  console.log('\n');
});
