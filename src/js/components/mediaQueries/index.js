import $ from 'jquery';
import {MEDIA_QUERIES} from 'common/values';

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
 * @type {{new()=>{_handleMQChange: ((mql, index?)), destroy: (())}}}
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

      this._handleMQChange(mql, index, true);
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

  /**
   * Method to handle the media query change
   * @param mql - current media query
   * @param breakpointName - current breakpoint
     * @private
     */
  _handleMQChange(mql, breakpointName) {
    if (mql.matches) {
      $(ss).trigger(breakpointName);

      if (breakpointName.indexOf('Min') === -1
        && breakpointName.indexOf('Max') === -1) {
        $(ss).trigger('mediaQueryChange', breakpointName);
      }
    }
  }
};
