'use strict';

module.exports = function (projectDir) {
  // Build global paths
  global.__base = projectDir || __base;
  global.__npm = `${__base}/node_modules/`;
  global.__theme = `${__base}/theme`;
  global.__config = `${__base}/config`;
  global.__gulpTasks = `${__config}/gulp-tasks`;
  global.__assets = `${__theme}/assets`;
  global.__tests = `${__base}/tests/src`;
  global.__src = {
    sass: `${__base}/src/sass`,
    js: `${__base}/src/js`,
    svg: `${__base}/src/svg`
  };
};
