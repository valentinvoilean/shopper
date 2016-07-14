'use strict';

module.exports = function (projectDir) {
    // Build global paths
    global.__base = projectDir || __base;
    global.__src = `${__base}/src`;
    global.__theme = `${__base}/theme`;
    global.__config = `${__base}/config`;

    return {
        sass: {
            src: `${__src}/sass`,
            dest: `${__theme}/assets`
        },
        js: {
            src: `${__src}/js`,
            dest: `${__theme}/assets`
        },
        tasks: `${__config}/gulp-tasks`
    };
};