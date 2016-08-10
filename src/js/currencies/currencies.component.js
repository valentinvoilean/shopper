import $ from 'jquery';
import Mobile from './currencies.mobile.component';
import Desktop from './currencies.desktop.component';

export default class CurrenciesComponent {
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
    $(window).on('xsMax', $.proxy(this._onChangedToMobile, this));
    $(window).on('smMin', $.proxy(this._onChangedToDesktop, this));
  }

  _removeMediaQueryCallbacks() {
    $(window).off('xsMax', $.proxy(this._onChangedToMobile.bind(this)));
    $(window).off('smMin', $.proxy(this._onChangedToDesktop.bind(this)));
  }

  _checkCurrentBreakpoint() {
    if (info && info.matchedMediaQueries && info.matchedMediaQueries.indexOf('xsMax') > -1) {
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
