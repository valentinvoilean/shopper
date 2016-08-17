import {MEDIA_QUERIES} from 'js/shared/shared';

/**
 * MediaQuery module
 * Used to detect current media query
 *
 * Usage:
 * $(window).on(MEDIA_QUERY, callback );
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
 *    $(window).on('smMin', sayGoodbye })
 *
 *    or
 *
 *    $(window).on('smMin', function() { alert('hello'); })
 *
 *
 * @type {{new()=>{_handleMQChange: ((mql, index?)), destroy: (())}}}
 */
export default class MediaQueriesComponent {

  constructor() {
    window.info = window.info || {};
    info.matchedMediaQueries = info.matchedMediaQueries || [];

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

  /**
   * Method to handle the media query change
   * @param mql - current media query
   * @param breakpointName - current breakpoint
     * @private
     */
  _handleMQChange(mql, breakpointName) {
    if (mql.matches) {
      $(window).triggerHandler(breakpointName);

      if (breakpointName.indexOf('Min') === -1
        && breakpointName.indexOf('Max') === -1) {
        $(window).triggerHandler('mediaQueryChange', breakpointName);
      }

      $.each(info.matchedMediaQueries, (index, value) => {
        if (!window.matchMedia(MEDIA_QUERIES[value]).matches) {
          info.matchedMediaQueries.splice(index, 1);
        }
      });

      info.matchedMediaQueries.push(breakpointName);
    }
  }
};
