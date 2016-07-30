'use strict';

let Server = require('karma').Server;

module.exports = (debugMode) => {
  return () => {
    let serverSettings = {
      configFile: __base + '/karma.conf.js'
    };

    if (debugMode) {
      serverSettings.browsers = ['Chrome'];
      serverSettings.reporters = ['spec'];
      serverSettings.autoWatch = true;
      serverSettings.singleRun = false;
    }

    new Server(serverSettings).start();
  };
};
