import $ from 'jquery';

export class SetMediaQueryCallbacks {
  constructor(mediaQueryCallbacks) {
    if (mediaQueryCallbacks) {
      this.mediaQueryCallbacks = mediaQueryCallbacks;
      this._addCallbacksToMQEvents();
    }
    else {
      throw new Error('No configuration object passed for media query callbacks!');
    }

  }

  destroy() {
    this._removeCallbacksFromMQEvents();
  }

  /////////////////////
  // Private Methods //
  /////////////////////

  _addCallbacksToMQEvents() {
    if (this.mediaQueryCallbacks) {
      $.each(this.mediaQueryCallbacks, function (key, value) {
        $(ss).on(key, value);
      });
    }
  }

  _removeCallbacksFromMQEvents() {
    if (this.mediaQueryCallbacks) {
      $.each(this.mediaQueryCallbacks, function (key, value) {
        $(ss).off(key, value);
      });
    }
  }
}
