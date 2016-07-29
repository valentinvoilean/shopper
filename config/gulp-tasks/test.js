'use strict';

let Server = require('karma').Server;

module.exports = () => {
  new Server({
    configFile: __base + '/karma.conf.js',
    singleRun: true
  }).start();
};
