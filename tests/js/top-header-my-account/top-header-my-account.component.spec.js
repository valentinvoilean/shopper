import TopHeaderMyAccountComponent from 'js/top-header-my-account/top-header-my-account.component';
const html = require('html!./top-header-my-account.fixture.html');

describe('Top Header My Account Component', () => {
  beforeAll(() => {
    window.Modernizr = {
      touchevents: true
    };
  });

  beforeEach(function () {
    $('body').append($(html));
  });

  it('should be a function', function () {
    expect(typeof TopHeaderMyAccountComponent).toBe('function');
  });

  it('should calculate the width of the left side & right side groups', function () {
    spyOn(TopHeaderMyAccountComponent.prototype, '_calculateWidths');
    let instance = new TopHeaderMyAccountComponent($('.myAccount'));

    expect(TopHeaderMyAccountComponent.prototype._calculateWidths).toHaveBeenCalled();
    instance.destroy();
  });

  it('should add event handlers', function () {
    spyOn(TopHeaderMyAccountComponent.prototype, '_addEventHandlers');
    let instance = new TopHeaderMyAccountComponent($('.myAccount'));

    expect(TopHeaderMyAccountComponent.prototype._addEventHandlers).toHaveBeenCalled();
    instance.destroy();
  });

  describe('On Touch Device', () => {

    describe('on touch the icon', () => {
      it('should prevent linking first time', function () {
        spyOn(TopHeaderMyAccountComponent.prototype, '_preventClickFirstTime');
        let instance = new TopHeaderMyAccountComponent($('.myAccount'));

        $('.myAccount').trigger('click');

        expect(TopHeaderMyAccountComponent.prototype._preventClickFirstTime).toHaveBeenCalled();
        instance.destroy();
      });

      it('should add the "is-active" class to the element, used as a reference for first time preventing', function () {
        let instance = new TopHeaderMyAccountComponent($('.myAccount'));
        $('.myAccount').trigger('click');
        expect($('.myAccount').hasClass('is-active')).toBeTruthy();
        instance.destroy();
      });
    });

    describe('on touch outside', () => {
      it('should deactivate the item', function () {
        spyOn(TopHeaderMyAccountComponent.prototype, '_deactivateItem');
        let instance = new TopHeaderMyAccountComponent($('.myAccount'));
        $(document).trigger('click');
        expect(TopHeaderMyAccountComponent.prototype._deactivateItem).toHaveBeenCalled();
        instance.destroy();
      });
      it('should slide out the links', function () {
        spyOn(TopHeaderMyAccountComponent.prototype, '_slideOutLeftSide');
        let instance = new TopHeaderMyAccountComponent($('.myAccount'));
        $(document).trigger('click');
        expect(TopHeaderMyAccountComponent.prototype._slideOutLeftSide).toHaveBeenCalled();
        instance.destroy();
      });
    });
  });

  describe('On Non-Touch Device', () => {
    beforeAll(() => {
      window.Modernizr = {
        touchevents: false
      };
    });

    describe('on mouse over the icon group', () => {
      describe('on mouse over the icon', () => {
        it('should show the links', () => {
          spyOn(TopHeaderMyAccountComponent.prototype, '_activateItem');
          let instance = new TopHeaderMyAccountComponent($('.myAccount'));

          $('.myAccount').trigger('mouseover');

          expect(TopHeaderMyAccountComponent.prototype._activateItem).toHaveBeenCalled();
          instance.destroy();
        });
      });

      describe('on mouse over the link', () => {
        it('should activate the link and deactivate the others', () => {
          let instance = new TopHeaderMyAccountComponent($('.myAccount'));

          let $link = $('.myAccount').find('.myAccount__link').first();
          $link.trigger('mouseover');

          expect($link.hasClass('is-active')).toBeTruthy();
          expect($link.siblings('.myAccount__link').hasClass('is-active')).toBeFalsy();
          instance.destroy();
        });
      });

    });

    describe('on mouse out the icon group', () => {
      it('should deactivate the item', function () {
        spyOn(TopHeaderMyAccountComponent.prototype, '_deactivateItem');
        let instance = new TopHeaderMyAccountComponent($('.myAccount'));
        $('.myAccount').trigger('mouseout');
        expect(TopHeaderMyAccountComponent.prototype._deactivateItem).toHaveBeenCalled();
        instance.destroy();
      });
      it('should slide out the links', function () {
        spyOn(TopHeaderMyAccountComponent.prototype, '_slideOutLeftSide');
        let instance = new TopHeaderMyAccountComponent($('.myAccount'));
        $('.myAccount').trigger('mouseout');
        expect(TopHeaderMyAccountComponent.prototype._slideOutLeftSide).toHaveBeenCalled();
        instance.destroy();
      });
    });
  });

  afterEach(function () {
    $('.myAccount').remove();
  });
});
