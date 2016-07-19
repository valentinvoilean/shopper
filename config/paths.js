'use strict';

module.exports = function (projectDir) {
  // Build global paths
  global.__base = projectDir || __base;
  global.__dist = `${__base}/dist`;
  global.__config = `${__base}/config`;
  global.__gulpTasks = `${__config}/gulp-tasks`;
  global.__assets = `${__dist}/assets`;
  global.__src = {
    sass: `${__base}/src/sass`,
    js: `${__base}/src/js`
  };
};
