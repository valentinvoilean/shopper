import TopHeaderIconsComponent from 'js/top-header-icons/top-header-icons.component';

describe('Top Header Icons Component', () => {
  it('should be a function', function () {
    expect(typeof TopHeaderIconsComponent).toBe('function');
  });

  beforeEach(function () {
    let html = require("html!./top-header-icons.fixture.html");
    $('body').append($(html));
  });

  describe('On Touch Device', () => {
    it('should call the touch init method', function () {
      window.Modernizr = {
        touchevents: true
      };

      spyOn(TopHeaderIconsComponent.prototype, '_initOnTouchDevice');
      let instance = new TopHeaderIconsComponent($('#headerTopRight'));

      expect(TopHeaderIconsComponent.prototype._initOnTouchDevice).toHaveBeenCalled();
      instance.destroy();
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

    describe('When the user is Logged Out', () => {
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
    });
  });

  describe('On Non-Touch Device', () => {
    it('should call the non-touch init method', function () {
      window.Modernizr = {
        touchevents: false
      };

      spyOn(TopHeaderIconsComponent.prototype, '_init');
      let instance = new TopHeaderIconsComponent($('#headerTopRight'));

      expect(TopHeaderIconsComponent.prototype._init).toHaveBeenCalled();
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
