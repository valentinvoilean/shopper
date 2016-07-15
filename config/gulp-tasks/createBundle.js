'use strict';

module.exports = function (gulp, plugins) {
  return () =>
    gulp.src(`${__src.js}/main.js`)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.jspm({selfExecutingBundle: true}))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(__assets));
};
