'use strict';

module.exports = function (projectDir) {
    // Build global paths
    global.__base = projectDir || __base;
    global.__src = `${__base}/src`;
    global.__dest = `${__base}/dest`;
    global.__config = `${__base}/config`;

    return {
        sass: {
            src: `${__src}/sass`,
            dest: `${__dest}/assets`
        },
        theme: `${__dest}/+(assets|layout|config|snippets|templates|locales)`,
        tasks: `${__config}/gulp-tasks`
    };
};