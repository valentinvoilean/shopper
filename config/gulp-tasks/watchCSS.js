'use strict';

module.exports = function (gulp, plugins) {
    return () =>
        plugins.watch(`${__src.sass}/**/*.*`, (file) => {
            plugins.util.log(`Modified SASS file: ${file.path}`);
            plugins.runSequence('concatSass');
        });
};
