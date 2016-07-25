'use strict';

module.exports = function (gulp) {
  return () => {
    gulp.watch(`${__src.sass}/**/*.*`, ['concatSass']);
    gulp.watch(`${__src.js}/**/*.*`, ['lint', 'createBundle']);
  };
};
