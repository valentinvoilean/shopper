import $ from 'jquery';

window.ss = window.ss || {};

let mediaQueriesConfig = {
  xs() { console.warn('xs'); },
  sm() { console.warn('sm'); },
  md() { console.warn('md'); },
  lg() { console.warn('lg'); },
  xsMin() { console.warn('xsMin'); },
  smMin() { console.warn('smMin'); },
  mdMin() { console.warn('mdMin'); },
  lgMin() { console.warn('lgMin'); },
  xsMax() { console.warn('xsMax'); },
  smMax() { console.warn('smMax'); },
  mdMax() { console.warn('mdMax'); }
};


class setMediaQueryCallbacks {
  constructor(mediaQueriesConfig) {
    this.MQ_CONFIG = mediaQueriesConfig;
    this.addCallbacksToMQEvents();
  }

  destroy() {
    this.removeCallbacksFromMQEvents();
  }

  addCallbacksToMQEvents() {
    $.each(this.MQ_CONFIG, function(key, value) {
      $(ss).on(key, value);
    });
  }

  removeCallbacksFromMQEvents() {
    $.each(this.MQ_CONFIG, function(key, value) {
      $(ss).on(key, value);
    });
  }
}

ss.Currencies = class extends setMediaQueryCallbacks {
  constructor() {
    $.getScript('/services/javascripts/currencies.js', function () {
      console.warn(Currency);
    });
    super(mediaQueriesConfig);
  }

  destroy() {
    super.destroy();
  }

};

new ss.Currencies();
