'use strict';

module.exports = function (gulp, plugins) {
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
        path.extname = '.svg.liquid';
      }))
      .pipe(gulp.dest(__assets));
};
