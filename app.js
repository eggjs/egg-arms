'use strict';
const arms = require('./lib/arms');
module.exports = app => {
  if (app.config.arms) arms(app);
};
