import $ from 'jquery';
import {setMediaQueryCallbacks} from 'components/utils';

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

ss.Currencies = class extends setMediaQueryCallbacks {
  constructor() {
    super(mediaQueriesConfig);

    $.getScript('/services/javascripts/currencies.js', function () {
      console.warn(Currency);
    });
  }

  destroy() {
    super.destroy();
  }

};

new ss.Currencies();
