export class setMediaQueryCallbacks {
  constructor(mediaQueryCallbacks) {
    this.mediaQueryCallbacks = mediaQueryCallbacks;
    this.addCallbacksToMQEvents();
  }

  destroy() {
    this.removeCallbacksFromMQEvents();
  }

  addCallbacksToMQEvents() {
    $.each(this.mediaQueryCallbacks, function(key, value) {
      $(ss).on(key, value);
    });
  }

  removeCallbacksFromMQEvents() {
    $.each(this.mediaQueryCallbacks, function(key, value) {
      $(ss).on(key, value);
    });
  }
}
