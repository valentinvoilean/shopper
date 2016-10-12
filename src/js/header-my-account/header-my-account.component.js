import Mobile from './header-my-account.mobile.component';
import Tablet from './header-my-account.tablet.component';
import Desktop from './header-my-account.desktop.component';

export default class {
  constructor($el) {
    this.$el = $el;
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
    $(window).on('xs', $.proxy(this._onChangedToMobile, this));
    $(window).on('sm', $.proxy(this._onChangedToTablet, this));
    $(window).on('mdMin', $.proxy(this._onChangedToDesktop, this));
  }

  _removeMediaQueryCallbacks() {
    $(window).off('xs', $.proxy(this._onChangedToMobile, this));
    $(window).off('sm', $.proxy(this._onChangedToTablet.bind(this)));
    $(window).off('mdMin', $.proxy(this._onChangedToDesktop.bind(this)));
  }

  _checkCurrentBreakpoint() {
    if (info && info.matchedMediaQueries) {
      if (info.matchedMediaQueries.indexOf('smMin') === -1) {
        this._onChangedToMobile();
      }
      else if (info.matchedMediaQueries.indexOf('mdMin') === -1) {
        this._onChangedToTablet();
      }
      else {
        this._onChangedToDesktop();
      }
    }
  }

  _onChangedToDesktop() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = new Desktop(this.$el);
  }

  _onChangedToTablet() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = new Tablet(this.$el);
  }

  _onChangedToMobile() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = new Mobile(this.$el);
  }
};
