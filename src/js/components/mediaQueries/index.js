import $ from 'jquery';
import {MEDIA_QUERIES, MEDIA_QUERIES_MIN, MEDIA_QUERIES_MAX} from './config';

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
 * @type {{init, destroy}}
 */

ss.MediaQueries = class {

  constructor() {
    this.mediaQueries = {};
    this.breakpoints = {};

    for (let i = 0, keysLength = Object.keys(MEDIA_QUERIES).length; i < keysLength; i++) {
      this._updateValues(i);
      this._addEventListeners();
      this._checkCurrentMediaQuery();
    }
  }

  destroy() {
    for (let i = 0, keysLength = Object.keys(MEDIA_QUERIES).length; i < keysLength; i++) {
      this._updateValues();
      this._removeEventListeners();
    }
  }

  /////////////////////
  // Private Methods //
  /////////////////////

  _addEventListeners() {
    let _self = this;
    window.matchMedia(this.mediaQueries.currentMinMQ).addListener(() => _self._triggerMinBPEvents);
    window.matchMedia(this.mediaQueries.currentMQ).addListener(() => _self._triggerCurrentBPEvents());
    window.matchMedia(this.mediaQueries.currentMaxMQ).addListener(() => _self._triggerMaxBPEvents);
  }

  _removeEventListeners() {
    let _self = this;
    window.matchMedia(this.mediaQueries.currentMinMQ).removeListener(() => _self._triggerMinBPEvents);
    window.matchMedia(this.mediaQueries.currentMQ).removeListener(() => _self._triggerCurrentBPEvents());
    window.matchMedia(this.mediaQueries.currentMaxMQ).removeListener(() => _self._triggerMaxBPEvents);
  }

  _triggerMinBPEvents() {
    if (this.breakpoints.previousMaxBP !== null) {
      $(ss).trigger(`${this.breakpoints.previousMaxBP}:destroy`);
      console.log(`${this.breakpoints.previousMaxBP}:destroy`);
    }
    if (this.breakpoints.nextMinBP !== null) {
      $(ss).trigger(`${this.breakpoints.nextMinBP}:destroy`);
      console.log(`${this.breakpoints.nextMinBP}:destroy`);
    }
    if (this.breakpoints.previousBP !== null) {
      $(ss).trigger(`${this.breakpoints.previousBP}:destroy`);
      console.log(`${this.breakpoints.previousBP}:destroy`);
    }
    $(ss).trigger(`${this.breakpoints.currentMinBP}`);
    console.log(`${this.breakpoints.currentMinBP}`);
  }

  _triggerCurrentBPEvents() {
    if (this.breakpoints.previousBP !== null) {
      $(ss).trigger(`${this.breakpoints.previousBP}:destroy`);
      console.log(`${this.breakpoints.previousBP}:destroy`);
    }
    if (this.breakpoints.previousMaxBP !== null) {
      $(ss).trigger(`${this.breakpoints.previousMaxBP}:destroy`);
      console.log(`${this.breakpoints.previousMaxBP}:destroy`);
    }
    if (this.breakpoints.nextMinBP !== null) {
      $(ss).trigger(`${this.breakpoints.nextMinBP}:destroy`);
      console.log(`${this.breakpoints.nextMinBP}:destroy`);
    }
    if (this.breakpoints.nextBP !== null) {
      $(ss).trigger(`${this.breakpoints.nextBP}:destroy`);
      console.log(`${this.breakpoints.nextBP}:destroy`);
    }
    $(ss).trigger(`${this.breakpoints.currentBP}`);
    console.log(`${this.breakpoints.currentBP}`);
  }

  _triggerMaxBPEvents() {
    if (this.breakpoints.previousMaxBP !== null) {
      $(ss).trigger(`${this.breakpoints.previousMaxBP}:destroy`);
      console.log(`${this.breakpoints.previousMaxBP}:destroy`);
    }
    if (this.breakpoints.nextMinBP !== null) {
      $(ss).trigger(`${this.breakpoints.nextMinBP}:destroy`);
      console.log(`${this.breakpoints.nextMinBP}:destroy`);
    }
    if (this.breakpoints.nextBP !== null) {
      $(ss).trigger(`${this.breakpoints.nextBP}:destroy`);
      console.log(`${this.breakpoints.nextBP}:destroy`);
    }
    $(ss).trigger(`${this.breakpoints.currentMaxBP}`);
    console.log(`${this.breakpoints.currentMaxBP}`);
  }

  _checkCurrentMediaQuery() {
    if (window.matchMedia(this.mediaQueries.currentMinMQ).matches) {
      //this._triggerMinBPEvents();
    }

    if (window.matchMedia(this.mediaQueries.currentMQ).matches) {
      this._triggerCurrentBPEvents();
    }

    if (window.matchMedia(this.mediaQueries.currentMaxMQ).matches) {
      //this._triggerMaxBPEvents();
    }
  }

  _updateValues(i) {
    this.breakpoints.currentMinBP = Object.keys(MEDIA_QUERIES_MIN)[i];
    this.mediaQueries.currentMinMQ = MEDIA_QUERIES_MIN[this.breakpoints.currentMinBP];
    this.breakpoints.nextMinBP = i < 3 ? Object.keys(MEDIA_QUERIES_MIN)[i + 1] : null;

    this.breakpoints.currentBP = Object.keys(MEDIA_QUERIES)[i];
    this.mediaQueries.currentMQ = MEDIA_QUERIES[this.breakpoints.currentBP];
    this.breakpoints.previousBP = i > 0 ? Object.keys(MEDIA_QUERIES)[i - 1] : null;
    this.breakpoints.nextBP = i < 3 ? Object.keys(MEDIA_QUERIES)[i + 1] : null;

    this.breakpoints.currentMaxBP = Object.keys(MEDIA_QUERIES_MAX)[i];
    this.mediaQueries.currentMaxMQ = MEDIA_QUERIES_MAX[this.breakpoints.currentMaxBP];
    this.breakpoints.previousMaxBP = i > 0 ? Object.keys(MEDIA_QUERIES_MAX)[i - 1] : null;
  }
};

$(ss).on('xsMin', function() {console.log('merge')});

