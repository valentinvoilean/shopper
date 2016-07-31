import $ from 'jquery';
import {MEDIA_QUERIES, MEDIA_QUERIES_MIN, MEDIA_QUERIES_MAX} from './config';

window.ss = window.ss || {};

for (let i = 0, keysLength = Object.keys(MEDIA_QUERIES).length; i < keysLength; i++) {
  let
    currentMinBP = Object.keys(MEDIA_QUERIES_MIN)[i],
    currentMinMQ = MEDIA_QUERIES_MIN[currentMinBP],
    nextMinBP = i < 4 ? Object.keys(MEDIA_QUERIES_MIN)[i + 1] : null,

    currentBP = Object.keys(MEDIA_QUERIES)[i],
    currentMQ = MEDIA_QUERIES[currentBP],
    previousBP = i > 0 ? Object.keys(MEDIA_QUERIES)[i - 1] : null,
    nextBP = i < 4 ? Object.keys(MEDIA_QUERIES)[i + 1] : null,


    currentMaxBP = Object.keys(MEDIA_QUERIES_MAX)[i],
    currentMaxMQ = MEDIA_QUERIES_MAX[currentMaxBP],
    previousMaxBP = i > 0 ? Object.keys(MEDIA_QUERIES_MAX)[i - 1] : null;

  // min
  if (window.matchMedia(currentMinMQ).matches) {
    if (previousMaxBP !== null) { $(ss).trigger(`${previousMaxBP}:destroy`); }
    if (nextMinBP !== null) { $(ss).trigger(`${nextMinBP}:destroy`); }
    if (previousBP !== null) { $(ss).trigger(`${previousBP}:destroy`); }
    $(ss).trigger(`${currentMinBP}:init`);
  }

  // current
  if (window.matchMedia(currentMQ).matches) {
    if (previousBP !== null) { $(ss).trigger(`${previousBP}:destroy`); }
    if (previousMaxBP !== null) { $(ss).trigger(`${previousMaxBP}:destroy`); }
    if (nextMinBP !== null) { $(ss).trigger(`${nextMinBP}:destroy`); }
    if (nextBP !== null) { $(ss).trigger(`${nextBP}:destroy`); }
    $(ss).trigger(`${currentBP}:init`);
  }

  // max
  if (window.matchMedia(currentMaxMQ).matches) {
    if (previousMaxBP !== null) { $(ss).trigger(`${previousMaxBP}:destroy`); }
    if (nextMinBP !== null) { $(ss).trigger(`${nextMinBP}:destroy`); }
    if (nextBP !== null) { $(ss).trigger(`${nextBP}:destroy`); }
    $(ss).trigger(`${currentMaxMQ}:init`);
  }
}
