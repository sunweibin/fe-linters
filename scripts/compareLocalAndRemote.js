#!/usr/bin/env node

// 比较本地包与远程 ESLint.org 上的规则集差异
const chalk = require('chalk');
const _ = require('lodash');
const fs = require('fs');
const remoteAllRules = require('./eslintOrgAllRules');

const diff_mapping = [
  {
    title: 'Possible Errors',
    local: '../lib/rules/possible-errors.js',
    remote: 'possible-errors',
  },
  {
    title: 'Best Practices',
    local: '../lib/rules/best-practices.js',
    remote: 'best-practices',
  },
  {
    title: 'Strict Mode',
    local: '../lib/rules/strict.js',
    remote: 'strict-mode',
  },
  {
    title: 'Variables',
    local: '../lib/rules/variables.js',
    remote: 'variables',
  },
  {
    title: 'Stylistic Issues',
    local: '../lib/rules/stylistic-issues.js',
    remote: 'stylistic-issues',
  },
  {
    title: 'ECMAScript 6',
    local: '../lib/rules/es6.js',
    remote: 'ecmascript-6',
  },
];

const result = {};

function getRemoteGroupRulesKey(groupId) {
  const ruleGroup = remoteAllRules.find(group => group.id === groupId);
  return ruleGroup.rules.map(rule => rule.title);
}

diff_mapping.forEach((item) => {
  const { title, local, remote } = item;

  console.log(chalk.yellowBright('********** '+ title + ' **********'));

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
    console.log('【删除/过期】：' + keysInLocalNotRemote.join('、') + '\n')
  }

  console.log(chalk.green('在remote中，但是不在本地lib中有如下:'));
  if (_.isEmpty(keysInRemoteNotLocal)) {
    console.log('【新增】：无\n');
  } else {
    console.log('【新增】：' + keysInRemoteNotLocal.join('、') + '\n')
  }

  console.log(chalk.yellowBright('********** '+ title + ' **********'));
  console.log('\n');
});
