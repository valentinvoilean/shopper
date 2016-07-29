import enquire from 'enquire.js';
import {MEDIA_QUERIES} from 'config/mediaQueries';

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
