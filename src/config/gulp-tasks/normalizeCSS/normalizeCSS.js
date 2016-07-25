'use strict';

module.exports = function (gulp, plugins) {
  return () =>
    gulp.src(`${__dirname}/*.scss`)
      .pipe(plugins.sass({
        outputStyle: 'compressed',
        errLogToConsole: true,
        functions: plugins.sassJspmImporter.resolve_function(__jspm),
        importer: plugins.sassJspmImporter.importer
      }))
      .pipe(plugins.rename(function (path) {
        path.dirname += '/components';
        path.basename = '_normalize';
        path.extname = '.scss';
      }))
      .pipe(gulp.dest(__src.sass));
};
