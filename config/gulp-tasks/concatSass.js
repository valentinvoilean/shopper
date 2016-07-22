'use strict';

module.exports = function (gulp, plugins) {
  return () =>
    gulp.src(`${__src.sass}/*.*`)
      .pipe(plugins.shopifySass())
      .pipe(gulp.dest(__assets));
};
