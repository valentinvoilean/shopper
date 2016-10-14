'use strict';

module.exports = function (gulp, plugins) {
    return () =>
        plugins.watch(`${__src.js}/**/*.*`, (file) => {
            plugins.util.log(`Modified JS file: ${file.path}`);
            plugins.runSequence('createBundle');
        });
};
