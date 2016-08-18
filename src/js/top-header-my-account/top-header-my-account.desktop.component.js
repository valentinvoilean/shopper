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
    this.$leftSide.removeClass(SHARED_CLASSES.animate);
    this.$welcomeMessage.removeClass(SHARED_CLASSES.animate);
    this.$el.removeClass(SHARED_CLASSES.active);
    this.$leftSide.width('');
    this.$welcomeMessage.width('');
    this.$el = null;
    this.$leftSide = null;
    this.$rightSide = null;
    this.$welcomeMessage = null;
  }

  _calculateWidths() {
    this.$leftSide.attr('data-width', this.$leftSide.outerWidth());
    this.$welcomeMessage.attr('data-width', this.$welcomeMessage.outerWidth());
    this.$leftSide.width(0).addClass(SHARED_CLASSES.visible);
    this.$welcomeMessage.width(this.$welcomeMessage.data('width'));
  }

  _addEventHandlers() {
    this.$el.on('mouseover', $.proxy(this._activateItem, this));
    this.$el.on('mouseout', $.proxy(this._resetClasses, this));
    this.$link.on('mouseover', this._activateLink);
  }

  _removeEventHandlers() {
    this.$el.off('mouseover', $.proxy(this._activateItem, this));
    this.$el.off('mouseout', $.proxy(this._resetClasses, this));
    $($link).off('click', $.proxy(this._activateLink, this));
  }

  _activateLink() {
    $(this).addClass(SHARED_CLASSES.active);
    $(this).siblings().removeClass(SHARED_CLASSES.active);
  }

  _activateItem() {
    this.$leftSide
      .one('transitionend', () => {
        this.$welcomeMessage.width(0);
      })
      .width(this.$leftSide.data('width'));
  }

  _resetClasses() {
    this.$leftSide
      .one('transitionend', () => {
        this.$welcomeMessage.width(this.$welcomeMessage.data('width'));
        this.$el.removeClass(SHARED_CLASSES.active);
      })
      .width(0);
  }
};
