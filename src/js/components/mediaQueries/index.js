import $ from 'jquery';
import {MEDIA_QUERIES, MEDIA_QUERIES_MIN, MEDIA_QUERIES_MAX} from './config';

window.ss = window.ss || {};

ss.mediaQueries = (function () {

  let
    _ = {},

    _triggerMinBPEvents = () => {
      if (_.previousMaxBP !== null) {
        $(ss).trigger(`${_.previousMaxBP}:destroy`);
      }
      if (_.nextMinBP !== null) {
        $(ss).trigger(`${_.nextMinBP}:destroy`);
      }
      if (_.previousBP !== null) {
        $(ss).trigger(`${_.previousBP}:destroy`);
      }
      $(ss).trigger(`${_.currentMinBP}:init`);
    },

    _triggerCurrentBPEvents = () => {
      if (_.previousBP !== null) {
        $(ss).trigger(`${_.previousBP}:destroy`);
      }
      if (_.previousMaxBP !== null) {
        $(ss).trigger(`${_.previousMaxBP}:destroy`);
      }
      if (_.nextMinBP !== null) {
        $(ss).trigger(`${_.nextMinBP}:destroy`);
      }
      if (_.nextBP !== null) {
        $(ss).trigger(`${_.nextBP}:destroy`);
      }
      $(ss).trigger(`${_.currentBP}:init`);
    },

    _triggerMaxBPEvents = () => {
      if (_.previousMaxBP !== null) {
        $(ss).trigger(`${_.previousMaxBP}:destroy`);
      }
      if (_.nextMinBP !== null) {
        $(ss).trigger(`${_.nextMinBP}:destroy`);
      }
      if (_.nextBP !== null) {
        $(ss).trigger(`${_.nextBP}:destroy`);
      }
      $(ss).trigger(`${_.currentMaxBP}:init`);
    },

    _addEventListeners = () => {
      window.matchMedia(_.currentMinMQ).addListener(_triggerMinBPEvents);
      window.matchMedia(_.currentMQ).addListener(_triggerCurrentBPEvents);
      window.matchMedia(_.currentMaxMQ).addListener(_triggerMaxBPEvents);
    },

    _removeEventListeners = () => {
      window.matchMedia(_.currentMinMQ).removeListener(_triggerMinBPEvents);
      window.matchMedia(_.currentMQ).removeListener(_triggerCurrentBPEvents);
      window.matchMedia(_.currentMaxMQ).removeListener(_triggerMaxBPEvents);
    },

    _checkCurrentMediaQuery = () => {
      if (window.matchMedia(_.currentMinMQ).matches) {
        _triggerMinBPEvents();
      }

      if (window.matchMedia(_.currentMQ).matches) {
        _triggerCurrentBPEvents();
      }

      if (window.matchMedia(_.currentMaxMQ).matches) {
        _triggerMaxBPEvents();
      }
    },

    _updateValues = (i) => {
      _.currentMinBP = Object.keys(MEDIA_QUERIES_MIN)[i];
      _.currentMinMQ = MEDIA_QUERIES_MIN[_.currentMinBP];
      _.nextMinBP = i < 3 ? Object.keys(MEDIA_QUERIES_MIN)[i + 1] : null;

      _.currentBP = Object.keys(MEDIA_QUERIES)[i];
      _.currentMQ = MEDIA_QUERIES[_.currentBP];
      _.previousBP = i > 0 ? Object.keys(MEDIA_QUERIES)[i - 1] : null;
      _.nextBP = i < 3 ? Object.keys(MEDIA_QUERIES)[i + 1] : null;

      _.currentMaxBP = Object.keys(MEDIA_QUERIES_MAX)[i];
      _.currentMaxMQ = MEDIA_QUERIES_MAX[_.currentMaxBP];
      _.previousMaxBP = i > 0 ? Object.keys(MEDIA_QUERIES_MAX)[i - 1] : null;
    };

  return {
    init() {
      for (let i = 0, keysLength = Object.keys(MEDIA_QUERIES).length; i < keysLength; i++) {
        _updateValues(i);
        _addEventListeners();
        _checkCurrentMediaQuery();
      }
    },
    destroy() {
      for (let i = 0, keysLength = Object.keys(MEDIA_QUERIES).length; i < keysLength; i++) {
        _updateValues();
        _removeEventListeners();
      }

      _ = null;
    }
  };
})();
