export default class {
  constructor() {
    this._addEventHandlers();
  };

  destroy() {
  };

  _addEventHandlers() {
    $('.menuIcon').on('click', function() {
      $(this).toggleClass('is-active');
    });
  }
}
