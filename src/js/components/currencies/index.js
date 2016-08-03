import $ from 'jquery';
import Mobile from './mobile';
import Desktop from './desktop';

window.ss.Currencies = class {
  constructor() {
    this._addMediaQueryCallbacks();
    this._checkCurrentBreakpoint();
  }

  destroy() {
    this._removeMediaQueryCallbacks();
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = null;
  }

  _addMediaQueryCallbacks() {
    $(ss).on('xsMax', $.proxy(this._onChangedToMobile, this));
    $(ss).on('smMin', $.proxy(this._onChangedToDesktop, this));
  }

  _removeMediaQueryCallbacks() {
    $(ss).off('xsMax', $.proxy(this._onChangedToMobile.bind(this)));
    $(ss).off('smMin', $.proxy(this._onChangedToDesktop.bind(this)));
  }

  _checkCurrentBreakpoint() {
    if (ss.utils && ss.utils.matchedMediaQueries
      && ss.utils.matchedMediaQueries.indexOf('xsMax') > -1) {
      this._onChangedToMobile();
    }
    else {
      this._onChangedToDesktop();
    }
  }

  _onChangedToDesktop() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = new Desktop();
  }

  _onChangedToMobile() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = new Mobile();
  }
};
