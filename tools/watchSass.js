import 'colors';
import concat from 'serial-concat-files';
import watch from 'node-watch';
import '../paths';

console.log('Watching SCSS files..'.green);

let concatFiles = () => {
  concat([
    /**
     * Breakpoints
     */
    `${__styles}/variables/_grid.scss`,

    /**
     * General Variables
     */
    `${__styles}/variables/_fonts.scss`,
    `${__styles}/variables/_colors.scss`,

    /**
     * Sass Mixins
     */
    `${__styles}/mixins/_clearfix.scss`,
    `${__styles}/mixins/_flex.scss`,
    `${__styles}/mixins/_center-block.scss`,
    `${__styles}/mixins/_grid-framework.scss`,
    `${__styles}/mixins/_grid.scss`,
    `${__styles}/mixins/_breakpoint.scss`,

    /**
     * Normalize
     */
    `${__styles}/components/core/_normalize.scss`,

    /**
     * Grid Setup
     */
    `${__styles}/components/core/_grid.scss`,
    `${__styles}/components/core/_utilities.scss`,
    `${__styles}/components/core/_responsive-utilities.scss`,

    /**
     * Base
     */
    `${__styles}/components/core/_base.scss`,

    /**
     * Header
     */
    `${__styles}/components/hamburgerIcon/_hamburgerIcon.scss`,
    `${__styles}/components/header/_header.scss`,
    `${__styles}/components/header/_headerTop.scss`,
    `${__styles}/components/header/_headerMain.scss`,
    `${__styles}/components/header/_headerBottom.scss`,
    `${__styles}/components/header/_header-my-account.scss`,
    `${__styles}/components/header/_header-wish-list.scss`
  ], `${__assets}/theme.scss.liquid`, function() {
    console.log('Finished SASS concatenation.'.green);
  });
};

watch(__styles, function (filename) {

  console.log(`${filename} changed`.blue);
  concatFiles();
});

concatFiles();
