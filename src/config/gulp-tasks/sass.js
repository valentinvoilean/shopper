'use strict';

module.exports = function (gulp, plugins) {
  return () =>
    gulp.src(`${__src.sass}/*.scss`)
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.rename(function (path) {
      path.extname = '.scss.liquid';
    }))
    .pipe(gulp.dest(__assets));
};
