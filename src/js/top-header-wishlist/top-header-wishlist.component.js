import {SHARED_CLASSES} from 'js/shared/shared';
import {CLASSES} from './top-header-wishlist.config';

export default class TopHeaderWishlistComponent {
  constructor($el) {
    this.$el = $el;
    this.$link = $el.find(`.${CLASSES.link}`);

    // We add the animation class after initialization because
    // if we want to destroy it later to not wait until the animation finishes
    this.$link.addClass(SHARED_CLASSES.animate);

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
    this.$link.width(0).removeClass(SHARED_CLASSES.outsideViewport);
  }

  _addEventHandlers() {
    if (window.Modernizr.touchevents) {
      this.$el.on('click', $.proxy(this._activateItem, this));
      $(document).on('click', $.proxy(this._deactivateItem, this));
    } else {
      this.$el.on('mouseover', $.proxy(this._activateItem, this));
      this.$el.on('mouseout', $.proxy(this._deactivateItem, this));
    }
  }

  _removeEventHandlers() {
    if (window.Modernizr.touchevents) {
      this.$el.off('click', $.proxy(this._activateItem, this));
      $(document).off('click', $.proxy(this._deactivateItem, this));
    } else {
      this.$el.off('mouseover', $.proxy(this._activateItem, this));
      this.$el.off('mouseout', $.proxy(this._deactivateItem, this));
    }
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
    this.$link.width(this.$link.data('width'));
    this.$link.addClass(SHARED_CLASSES.active);
  }

  _slideOutLeftSide() {
    this.$el.add(this.$link).removeClass(SHARED_CLASSES.active);
    this.$link.width(0);
  }
};
