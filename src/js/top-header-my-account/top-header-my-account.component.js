import {SHARED_CLASSES} from 'js/shared/shared';
import {CLASSES, EVENT_NAMESPACE} from './top-header-my-account.config';

export default class TopHeaderMyAccountComponent {
  constructor($el) {
    this.$el = $el;
    this.$link = $el.find(`.${CLASSES.link}`);
    this.$leftSide = $el.find(`.${CLASSES.leftSide}`);
    this.$rightSide = $el.find(`.${CLASSES.rightSide}`);
    this.$welcomeMessage = this.$rightSide.find(`.${CLASSES.link}`);

    this._calculateWidths();
    this._addEventHandlers();
  }

  destroy() {
    this._removeEventHandlers();
    this.$leftSide.add(this.$welcomeMessage).removeClass(SHARED_CLASSES.animate);
    this.$el.removeClass(SHARED_CLASSES.active);
    this.$leftSide.add(this.$welcomeMessage).width('');
    this.$leftSide.addClass(SHARED_CLASSES.outsideViewport);
    this.$el = null;
    this.$leftSide = null;
    this.$rightSide = null;
    this.$welcomeMessage = null;
  }

  _calculateWidths() {
    this.$leftSide.attr('data-width', this.$leftSide.outerWidth());
    this.$welcomeMessage.attr('data-width', this.$welcomeMessage.outerWidth());
    this.$leftSide.addClass(SHARED_CLASSES.collapsed).removeClass(SHARED_CLASSES.outsideViewport);
    this.$welcomeMessage.outerWidth(this.$welcomeMessage.data('width'));
  }

  _addEventHandlers() {
    if (window.Modernizr.touchevents) {
      this.$el.on(`click${EVENT_NAMESPACE}`, $.proxy(this._activateItem, this));
      $(document).on(`click${EVENT_NAMESPACE}`, $.proxy(this._deactivateItem, this));
      this.$link.on(`click${EVENT_NAMESPACE}`, this._activateLink);
    } else {
      this.$el.on(`mouseover${EVENT_NAMESPACE}`, $.proxy(this._activateItem, this));
      this.$el.on(`mouseout${EVENT_NAMESPACE}`, $.proxy(this._deactivateItem, this));
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

  _activateItem(e) {
    if (window.Modernizr.touchevents) {
      this._preventClickFirstTime(e);
    } else {
      this._slideInLeftSide();
    }
  }

  _deactivateItem(e) {
    if (window.Modernizr.touchevents) {
      if (!this.$el.is(e.target) // if the target of the click isn't the container...
        && this.$el.has(e.target).length === 0) // ... nor a descendant of the container
      {
        this._slideOutLeftSide();
      }
    } else {
      this._slideOutLeftSide();
    }
  }

  _preventClickFirstTime(e) {
    if (this.$el.hasClass(SHARED_CLASSES.active)) {
      return true;
    }
    else {
      e.preventDefault();
      this.$el.addClass(SHARED_CLASSES.active);
      this._slideInLeftSide();
    }
  }

  _slideInLeftSide() {
    this.$leftSide
      .one('transitionend', () => {
        this.$welcomeMessage
          .addClass(SHARED_CLASSES.animate)
          .addClass(SHARED_CLASSES.collapsed);
      })
      .addClass(SHARED_CLASSES.animate)
      .width(this.$leftSide.data('width'))
      .removeClass(SHARED_CLASSES.collapsed);
  }

  _slideOutLeftSide() {
    this.$leftSide
      .one('transitionend', () => {
        this.$welcomeMessage.removeClass(SHARED_CLASSES.collapsed);
        this.$el.removeClass(SHARED_CLASSES.active);
      })
      .addClass(SHARED_CLASSES.collapsed);
  }
};
