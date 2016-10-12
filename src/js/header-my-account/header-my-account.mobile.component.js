import {SHARED_CLASSES} from 'js/shared/shared';
import {CLASSES, EVENT_NAMESPACE} from './header-my-account.config';

export default class {
  constructor($el) {
    this.$el = $el;
    this.$link = $el.find(`.${CLASSES.link}`);

    this.settings = {
      linksActions: '{{ settings.my_account_link_action_mobile }}'
    };

    this._addEventHandlers();
  }

  destroy() {
    this._removeEventHandlers();
    this.$el.removeClass(SHARED_CLASSES.active);
    this.$el = null;
  }

  _addEventHandlers() {
    if (window.Modernizr.touchevents) {
      this.$link.on(`click${EVENT_NAMESPACE}`, this._activateLink);
    } else {
      this.$link.on(`mouseover${EVENT_NAMESPACE}`, this._activateLink);
    }
  }

  _removeEventHandlers() {
    this.$el.off(EVENT_NAMESPACE);
    $(document).off(EVENT_NAMESPACE);
  }

  _activateLink() {
    $(this).addClass(SHARED_CLASSES.active);
    $(this).siblings().removeClass(SHARED_CLASSES.active);
  }
};
