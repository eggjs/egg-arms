'use strict';
const arms = require('./lib/arms');
module.exports = agent => {
  if (agent.config.arms) arms(agent);
};

