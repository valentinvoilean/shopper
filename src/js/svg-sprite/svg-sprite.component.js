export default class SVGSpriteComponent {
  constructor() {
    let files = require.context('svg/', false, /\.svg$/);
    files.keys().forEach(files);
  }

  destroy() {
    $('body').children('svg').remove();
  }
};
