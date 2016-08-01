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
      mql.addListener((mql)=> this._handleOrientationChange(mql, index));
      this._handleOrientationChange(mql, index);
    });
  }

  destroy() {
    $.each(MEDIA_QUERIES, (index, value) => {
      window.matchMedia(value).removeListener();
    });
  }

  /////////////////////
  // Private Methods //
  /////////////////////

  _handleOrientationChange(mql, index) {
    if (mql.matches) {
      $(ss).trigger(index);
    }
  }
};
