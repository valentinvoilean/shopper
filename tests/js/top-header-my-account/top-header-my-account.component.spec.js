import TopHeaderMyAccountComponent from 'js/top-header-my-account/top-header-my-account.component';

describe('Top Header My Account Component', () => {
  it('should be a function', function () {
    expect(typeof TopHeaderMyAccountComponent).toBe('function');
  });

  describe('On Touch Device', () => {
    it('should call the touch init method', function () {
      window.Modernizr = {
        touchevents: true
      };

      spyOn(TopHeaderMyAccountComponent.prototype, '_initOnTouchDevice');
      let instance = new TopHeaderMyAccountComponent($('#headerTopRight'));

      expect(TopHeaderMyAccountComponent.prototype._initOnTouchDevice).toHaveBeenCalled();
      instance.destroy();
    });

    describe('When the user is Logged Out', () => {
      beforeEach(function () {
        let html = require("html!./top-header-my-account.fixture--logged-out.html");
        $('body').append($(html));
      });

      describe('on touch the icon', () => {
        it('should show the links', function () {
          expect(true).toBe(false);
        });
      });

      describe('on touch outside', () => {
        it('should hide the links', function () {
          expect(true).toBe(false);
        });
      });

      afterEach(function () {
        $('.myAccount').remove();
      });
    });

    describe('When the user is Logged In', () => {
      describe('on touch the icon', () => {
        it('should hide the welcome message', function () {
          expect(true).toBe(false);
        });

        it('should show the links', function () {
          expect(true).toBe(false);
        });
      });

      describe('on touch outside', () => {
        it('should hide the links', function () {
          expect(true).toBe(false);
        });

        it('should show the welcome message', function () {
          expect(true).toBe(false);
        });
      });
    });
  });

  describe('On Non-Touch Device', () => {
    it('should call the non-touch init method', function () {
      window.Modernizr = {
        touchevents: false
      };

      spyOn(TopHeaderMyAccountComponent.prototype, '_init');
      let instance = new TopHeaderMyAccountComponent($('#headerTopRight'));

      expect(TopHeaderMyAccountComponent.prototype._init).toHaveBeenCalled();
      instance.destroy();
    });

    describe('When the user is Logged In', () => {
      describe('on mouse over the icon group', () => {
        describe('on mouse over the icon', () => {
          it('should hide the welcome message', function () {
            expect(true).toBe(false);
          });

          it('should show the links', function () {
            expect(true).toBe(false);
          });

          it('should activate the first link', function () {
            expect(true).toBe(false);
          });
        });

        describe('on mouse over the link', () => {
          it('should activate the link', function () {
            expect(true).toBe(false);
          });
          it('should deactivate the other links', function () {
            expect(true).toBe(false);
          });
        })

      });

      describe('on mouse out the icon group', () => {
        it('should hide the links', function () {
          expect(true).toBe(false);
        });

        it('should activate the first link and deactivate the rest of links', function () {
          expect(true).toBe(false);
        });

        it('should show the welcome message', function () {
          expect(true).toBe(false);
        });
      });
    });

    describe('When the user is Logged Out', () => {
      describe('on mouse over the icon group', () => {
        describe('on mouse over the icon', () => {
          it('should show the links', function () {
            expect(true).toBe(false);
          });

          it('should activate the first link', function () {
            expect(true).toBe(false);
          });
        });

        describe('on mouse over the link', () => {
          it('should activate the link', function () {
            expect(true).toBe(false);
          });
          it('should deactivate the other links', function () {
            expect(true).toBe(false);
          });
        })

      });

      describe('on mouse out the icon group', () => {
        it('should hide the links', function () {
          expect(true).toBe(false);
        });

        it('should activate the first link and deactivate the rest of links', function () {
          expect(true).toBe(false);
        });

      });
    });
  });
});
