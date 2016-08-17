import Tablet from './top-header-my-account.tablet.component';
import Desktop from './top-header-my-account.desktop.component';

export default class TopHeaderMyAccountComponent {
  constructor($el) {
    this.$el = $el;

    if (Modernizr.touchevents) {
      this.instance = new Tablet(this.$el);
    } else {
      this.instance = new Desktop(this.$el);
    }
  }

  destroy() {
    this.instance.destroy();
    this.$el = null;
  }
};
