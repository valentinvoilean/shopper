import {SHARED_CLASSES} from 'js/shared/shared';
import {CLASSES} from './top-header-my-account.config';

export default class {
  constructor($el) {
    this.$el = $el;
    this.$link = $el.find(`.${CLASSES.link}`);
    this.$el.addClass(SHARED_CLASSES.animate);

    this._addEventHandlers();
  }

  destroy() {
    this._removeEventHandlers();
    this.$el.removeClass(SHARED_CLASSES.animate);
    this.$el.removeClass(SHARED_CLASSES.active);
    this.$el = null;
  }

  _addEventHandlers() {
    this.$el.on('click', $.proxy(this._activateItem, this));
    $(document).on('click', $.proxy(this._resetClasses, this));
    this.$link.on('click', this._activateLink);
  }

  _removeEventHandlers() {
    this.$el.off('click', $.proxy(this._activateItem, this));
    $(document).off('click', $.proxy(this._deactivateItem, this));
  }

  _activateLink(e) {
    $(this).addClass(SHARED_CLASSES.active);
    $(this).siblings().removeClass(SHARED_CLASSES.active);
    e.stopPropagation();
  }

  _activateItem(e) {
    this._preventLinkOnFirstClick(e);
  }

  _deactivateItem(e) {
    this._resetClasses(e);
  }

  _preventLinkOnFirstClick(e) {
    if (this.$el.hasClass(SHARED_CLASSES.active)) {
      return true;
    }
    else {
      e.preventDefault();
      this.$el.addClass(SHARED_CLASSES.active);

      this.$el.find('.myAccount__leftSide')
        .addClass(SHARED_CLASSES.animate)
        .one('transitionend', () => {
          this.$el
            .find('.myAccount__rightSide')
            .find('.myAccount__link')
            .addClass(SHARED_CLASSES.animate)
            .removeClass(SHARED_CLASSES.expanded);
        })
        .addClass(SHARED_CLASSES.expanded);
    }
  }

  _resetClasses(e) {
    if (!this.$el.is(e.target) // if the target of the click isn't the container...
      && this.$el.has(e.target).length === 0) // ... nor a descendant of the container
    {
      this.$el.find('.myAccount__leftSide')
        .one('transitionend', () => {
          this.$el
            .find('.myAccount__rightSide')
            .find('.myAccount__link')
            .addClass(SHARED_CLASSES.expanded);

          this.$el.removeClass(SHARED_CLASSES.active);
        })
        .removeClass(SHARED_CLASSES.expanded);
    }
  }
};
