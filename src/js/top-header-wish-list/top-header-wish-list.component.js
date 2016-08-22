import {SHARED_CLASSES} from 'js/shared/shared';
import {CLASSES, EVENT_NAMESPACE} from './top-header-wish-list.config';

export default class TopHeaderWishListComponent {
  constructor($el) {
    this.$el = $el;
    this.$link = $el.find(`.${CLASSES.link}`);

    this._calculateWidths();
    this._addEventHandlers();
  }

  destroy() {
    this._removeEventHandlers();
    this.$link
      .removeClass(`${SHARED_CLASSES.animate} ${SHARED_CLASSES.active}`)
      .addClass(SHARED_CLASSES.outsideViewport)
      .width('');
    this.$el.removeClass(SHARED_CLASSES.active);
    this.$el = null;
    this.$link = null;
  }

  _calculateWidths() {
    this.$link.attr('data-width', this.$link.outerWidth());
    this.$link.addClass(SHARED_CLASSES.collapsed)
      .removeClass(SHARED_CLASSES.outsideViewport);
  }

  _addEventHandlers() {
    if (window.Modernizr.touchevents) {
      this.$el.on(`click${EVENT_NAMESPACE}`, $.proxy(this._activateItem, this));
      $(document).on(`click${EVENT_NAMESPACE}`, $.proxy(this._deactivateItem, this));
    } else {
      this.$el.on(`mouseover${EVENT_NAMESPACE}`, $.proxy(this._activateItem, this));
      this.$el.on(`mouseout${EVENT_NAMESPACE}`, $.proxy(this._deactivateItem, this));
    }
  }

  _removeEventHandlers() {
    this.$el.off(EVENT_NAMESPACE);
    $(document).off(EVENT_NAMESPACE);
  }

  _activateItem(e) {
    if (window.Modernizr.touchevents) {
      this._preventClickFirstTime(e);
    } else {
      this._slideInLink();
    }
  }

  _deactivateItem(e) {
    if (window.Modernizr.touchevents) {
      if (!this.$el.is(e.target) // if the target of the click isn't the container...
        && this.$el.has(e.target).length === 0) // ... nor a descendant of the container
      {
        this._slideOutLink();
      }
    } else {
      this._slideOutLink();
    }
  }

  _preventClickFirstTime(e) {
    if (this.$el.hasClass(SHARED_CLASSES.active)) {
      return true;
    }
    else {
      e.preventDefault();
      this.$el.addClass(SHARED_CLASSES.active);
      this._slideInLink();
    }
  }

  _slideInLink() {
    this.$link.addClass(SHARED_CLASSES.animate);
    this.$link.innerWidth(this.$link.data('width')).removeClass(SHARED_CLASSES.collapsed);
    this.$link.addClass(SHARED_CLASSES.active);
  }

  _slideOutLink() {
    this.$el.add(this.$link).removeClass(SHARED_CLASSES.active);
    this.$link.addClass(SHARED_CLASSES.collapsed);
  }
};
