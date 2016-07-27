'use strict';

module.exports = function (gulp, plugins) {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return () =>
    gulp.src([
      `${__base}/gulp.js`,
      `${__base}/src/**/*.js`,
      `${__base}/tests/**/*.js`,
      `${__base}/config/**/*.js`
    ])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
      .pipe(plugins.cached('linting'))
      .pipe(plugins.eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(plugins.eslint.format());
};
