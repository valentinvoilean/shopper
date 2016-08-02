import $ from 'jquery';
import {MEDIA_QUERIES} from './config';

window.ss = window.ss || {};

/**
 * MediaQuery module
 * Used to detect current media query
 *
 * Usage:
 * $(ss).on(MEDIA_QUERY, callback );
 *
 * Where:
 *    MEDIA_QUERY can be : 'xs', 'sm', 'md', 'lg',
 *                         'xsMin', 'smMin', 'mdMin','lgMin',
 *                         'xsMax', 'smMax', 'mdMax', 'lgMax'
 *    Callback: function name or anonymous function
 *
 *    e.g. :
 *
 *    function sayGoodbye = { alert('goodbye') }
 *    $(ss).on('smMin', sayGoodbye })
 *
 *    or
 *
 *    $(ss).on('smMin', function() { alert('hello'); })
 *
 *
 * @type {{new()=>{_handleOrientationChange: ((mql, index?)), destroy: (())}}}
 */

ss.MediaQueries = class {

  constructor() {
    $.each(MEDIA_QUERIES, (index, value) => {
      let mql = window.matchMedia(value);

      // the default matchmedia's addListener method doesn't support extra parameters,
      // therefore we need another extra function that can pass the current breakpoint name
      mql.addListener(this.addMQListener = (mql) => {
        this._handleMQChange(mql, index);
      });

      this._handleMQChange(mql, index);
    });
  }

  destroy() {
    $.each(MEDIA_QUERIES, (index, value) => {
      window.matchMedia(value).removeListener(this.addMQListener);
    });
  }

  /////////////////////
  // Private Methods //
  /////////////////////

  _handleMQChange(mql, index) {
    if (mql.matches) {
      $(ss).trigger(index);
    }
  }
};
