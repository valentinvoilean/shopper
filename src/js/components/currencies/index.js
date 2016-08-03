import $ from 'jquery';
import {SetMediaQueryCallbacks} from 'components/utils';

import Mobile from './mobile';
import Desktop from './desktop';

window.ss.Currencies = class extends SetMediaQueryCallbacks {
  constructor() {
    super();

    this.mediaQueryCallbacks = {
      xsMax: this._onChangedToMobile,
      smMin: this._onChangedToDesktop
    };

    this._addCallbacksToMQEvents();

    $.getScript('https://cdn.shopify.com/s/javascripts/currencies.js', function () {
      console.warn(Currency);
    });
  }

  destroy() {
    super.destroy();
    this.instance.destroy();
    this.instance = null;
  }

  _onChangedToDesktop() {
    this.instance.destroy();
    this.instance = new Desktop();
  }

  _onChangedToMobile() {
    this.instance.destroy();
    this.instance = new Mobile();
  }

};
