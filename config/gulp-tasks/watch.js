'use strict';

module.exports = function (gulp) {
  return () => {
    gulp.watch(`${__src.sass}/**/*.scss.liquid`, ['concatSass']);
    gulp.watch(`${__src.js}/**/*.js`, ['lint', 'createBundle']);
  };
};
