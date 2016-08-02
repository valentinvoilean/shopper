'use strict';

let Server = require('karma').Server;

module.exports = function (debugMode) {
  return () => {
    let serverSettings = {
      configFile:  debugMode ? `${__base}/karma.conf.debug.js` : `${__base}/karma.conf.js`
    };

    new Server(serverSettings).start();
  };
};
