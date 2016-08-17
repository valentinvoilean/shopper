export default class {
  constructor() {
    console.warn('desktop');
    $(window).on('mediaQueryChange', $.proxy(this._onMediaQueryChange, this));
  }

  destroy() {
    console.warn('destroy desktop');
  }

  _onMediaQueryChange(e, data) {
    console.warn(data);
  }
}
