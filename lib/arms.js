/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * @file:     arms实例
 * @authors:  chuck.ql <kunqian434@gmail.com>
 * @date      18/10/23
 */
'use strict';


const assert = require('assert');
const Arms = require('@alicloud/arms-2018-10-15');
module.exports = app => {
  app.addSingleton('arms', createArms);
};

/**
 * @param  {Object} config   框架处理之后的配置项，如果应用配置了多个 arms 实例，会将每一个配置项分别传入并调用多次 createArms
 * @param  {Application} app 当前的应用
 * @return {Object}          返回创建的 arms 实例
 */
function createArms(config, app) {
  assert(config && config.accessKeyId && config.secretAccessKey && config.endpoint);
  // 创建实例
  const client = new Arms(config);
  // 做启动应用前的检查
  app.beforeStart(async () => {
    app.coreLogger.info('[egg-arms] init instance success.');
  });
  return client;
}
