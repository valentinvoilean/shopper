import $ from 'jquery';

window.ss = window.ss || {};

ss.Currencies = class {
  constructor() {
    $.getScript('/services/javascripts/currencies.js', function () {
      console.warn(Currency);
    });

  }

};

new ss.Currencies();
