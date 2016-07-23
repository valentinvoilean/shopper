'use strict';

module.exports = function (gulp) {
  return () => {
    gulp.watch(`${__src.sass}/**/*.*`, ['sass']);
    gulp.watch(`${__src.js}/**/*.*`, ['lint', 'createBundle']);
  };
};
