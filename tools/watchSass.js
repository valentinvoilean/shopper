import 'colors';
import concat from 'serial-concat-files';
import watch from 'node-watch';

require('../config/paths')(`${__dirname}/../`);

console.log('Watching SCSS files..'.green);

let concatFiles = () => {
  concat([
    /**
     * Breakpoints
     */
    `${__src.sass}/variables/_grid.scss`,

    /**
     * General Variables
     */
    `${__src.sass}/variables/_fonts.scss`,
    `${__src.sass}/variables/_colors.scss`,

    /**
     * Sass Mixins
     */
    `${__src.sass}/mixins/_clearfix.scss`,
    `${__src.sass}/mixins/_flex.scss`,
    `${__src.sass}/mixins/_center-block.scss`,
    `${__src.sass}/mixins/_grid-framework.scss`,
    `${__src.sass}/mixins/_grid.scss`,
    `${__src.sass}/mixins/_breakpoint.scss`,

    /**
     * Normalize
     */
    `${__src.sass}/components/core/_normalize.scss`,

    /**
     * Grid Setup
     */
    `${__src.sass}/components/core/_grid.scss`,
    `${__src.sass}/components/core/_utilities.scss`,
    `${__src.sass}/components/core/_responsive-utilities.scss`,

    /**
     * Base
     */
    `${__src.sass}/components/core/_base.scss`,

    /**
     * Header
     */
    `${__src.sass}/components/hamburgerIcon/_hamburgerIcon.scss`,
    `${__src.sass}/components/header/_header.scss`,
    `${__src.sass}/components/header/_headerTop.scss`,
    `${__src.sass}/components/header/_headerMain.scss`,
    `${__src.sass}/components/header/_headerBottom.scss`,
    `${__src.sass}/components/header/_header-my-account.scss`,
    `${__src.sass}/components/header/_header-wish-list.scss`
  ], `${__assets}/theme.scss.liquid`, function() {
    console.log('Finished SASS concatenation.'.green);
  });
};

watch(__src.sass, function (filename) {

  console.log(`${filename} changed`.blue);
  concatFiles();
});

concatFiles();
