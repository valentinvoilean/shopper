'use strict';

module.exports = function (gulp, plugins) {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  let config = {
    mode: {
      symbol: true      // Activate the «symbol» mode
    }
  };

  return () =>
    gulp.src(`${__src.svg}/*.svg`)
      .pipe(plugins.svgSprite(config))
      .pipe(plugins.rename(function (path) {
        path.dirname = '';
        path.basename = 'svg-sprite';
        path.extname = '.liquid';
      }))
      .pipe(gulp.dest(`${__theme}/snippets`));
};
