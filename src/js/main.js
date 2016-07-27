window.ss = window.ss || {};

import 'babel-polyfill';
import $ from 'jquery';
import enquire from 'enquire.js';
import {MEDIA_QUERIES} from 'config/mediaQueries';

$('#site-title').css('color', 'red');
console.warn('merge');

let
  oldMediaQuery,

  registerBreakpoints = (mqs) => {
    for (let i = 0, mqsLength = mqs.length; i < mqsLength; i++) {
      enquire
        .register(MEDIA_QUERIES[mqs[i]], () => {
          if (oldMediaQuery && oldMediaQuery !== mqs[i]) {
            console.warn(`destroy ${oldMediaQuery}`);
          }

          oldMediaQuery = mqs[i];

          console.warn(`init ${oldMediaQuery}`);
        }, true);
    }
  };

registerBreakpoints(['xs', 'sm', 'md', 'lg']);
