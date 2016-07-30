import $ from 'jquery';
import {MEDIA_QUERIES, VALUES} from './config';

let
  lastMinMQ,
  lastMaxMQ,
  lastMQ;

window.ss = window.ss || {};

function submitEvents(mq) {
  if (mq.indexOf('Min') !== VALUES.outOfIndex) {
    if (lastMinMQ) {
      $(ss).trigger(`${lastMinMQ}:destroy`);
    }
    $(ss).trigger(`${mq}:init`);
    lastMinMQ = mq;

  } else if (mq.indexOf('Max') !== VALUES.outOfIndex) {
    if (lastMaxMQ) {
      $(ss).trigger(`${lastMaxMQ}:destroy`);
    }
    $(ss).trigger(`${mq}:init`);
    lastMaxMQ = mq;

  } else {
    if (lastMQ) {
      $(ss).trigger(`${lastMQ}:destroy`);
    }
    $(ss).trigger(`${mq}:init`);
    lastMQ = mq;
  }
}

$.each(MEDIA_QUERIES, function (key, value) {
  if (window.matchMedia(value).matches) {
    submitEvents(key);
  }

  window.matchMedia(value).addListener(() => {
    submitEvents(key);
  });
});

$(ss).on('smMin:init', function() {
  console.warn('smMin initialized');
});
