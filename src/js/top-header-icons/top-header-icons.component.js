import {CLASSES} from './top-header-icons.config';

export default class TopHeaderIconsComponent {
  constructor($el) {
    this.$el = $el;
    this.$iconGroup = this.$el.find(`.${CLASSES.iconGroup}`);

      if (Modernizr.touchevents) {
        this._initOnTouchDevice();
      } else {
        this._init();
      }
  }

  destroy() {
  }

  _init() {
    console.log('not touch');
  }

  _initOnTouchDevice() {
    alert('touch');
  }
};
