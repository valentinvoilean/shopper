'use strict';

let dirs = require('./dirs');

module.exports = {
    sass: {
        src: `${this.src}/sass`,
        dest: `${this.dest}/assets`
    },
    tasks: `${this.config}/gulp-tasks`
};