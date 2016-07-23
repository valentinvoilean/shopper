'use strict';

module.exports = function (gulp, plugins) {
  return () =>
    gulp.src(`${__src.sass}/*.scss`)
      .pipe(plugins.sass({
        errLogToConsole: true,
        functions: plugins.sassJspmImporter.resolve_function(__jspm),
        importer: plugins.sassJspmImporter.importer
      }))
      .pipe(plugins.rename(function (path) {
        path.extname = '.scss.liquid';
      }))
      .pipe(gulp.dest(__assets));
};
