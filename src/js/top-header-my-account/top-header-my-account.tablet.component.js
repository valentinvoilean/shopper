import {SHARED_CLASSES} from 'js/shared/shared';
import {CLASSES} from './top-header-my-account.config';

export default class {
  constructor($el) {
    this.$el = $el;
    this.$link = $el.find(`.${CLASSES.link}`);
    this.$leftSide = $el.find(`.${CLASSES.leftSide}`);
    this.$rightSide = $el.find(`.${CLASSES.rightSide}`);
    this.$welcomeMessage = this.$rightSide.find(`.${CLASSES.link}`);

    this.$el.addClass(SHARED_CLASSES.animate);
    this.$leftSide.addClass(SHARED_CLASSES.animate);
    this.$welcomeMessage.addClass(SHARED_CLASSES.animate);

    this._calculateWidths();
    this._addEventHandlers();
  }

  destroy() {
    this._removeEventHandlers();
    this.$el.removeClass(SHARED_CLASSES.animate);
    this.$el.removeClass(SHARED_CLASSES.active);
    this.$el = null;
  }

  _calculateWidths() {
    this.$leftSide.attr('data-width', this.$leftSide.outerWidth());
    this.$welcomeMessage.attr('data-width', this.$welcomeMessage.outerWidth());
    this.$leftSide.width(0).addClass(SHARED_CLASSES.visible);
    this.$welcomeMessage.width(this.$welcomeMessage.data('width'));
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

      this.$leftSide
        .one('transitionend', () => {
          this.$welcomeMessage.width(0);
        })
        .width(this.$leftSide.data('width'));
    }
  }

  _resetClasses(e) {
    if (!this.$el.is(e.target) // if the target of the click isn't the container...
      && this.$el.has(e.target).length === 0) // ... nor a descendant of the container
    {
      this.$leftSide
        .one('transitionend', () => {
          this.$welcomeMessage.width(this.$welcomeMessage.data('width'));
          this.$el.removeClass(SHARED_CLASSES.active);
        })
        .width(0);
    }
  }
};
