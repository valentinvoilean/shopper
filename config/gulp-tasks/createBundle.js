'use strict';

module.exports = function (gulp, plugins) {
  return () =>
    gulp.src(`${__src.js}/main.js`)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.webpack(require(`${__base}/webpack.config.js`)))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(plugins.rename(function (path) {
        path.extname = '.js.liquid';
      }))
      .pipe(gulp.dest(__assets));
};
