import AppComponent from 'js/app.component.js';

describe('AppComponent', () => {

  it('should be a class', () => expect(typeof AppComponent).toBe('function'));

  describe('Init & Destroy', function() {
    beforeEach(() => {
      this.$container = $('<div class="container"></div>').appendTo($('body'));
      this.$test1 = $('<div data-ss-init="Class1"></div>').appendTo(this.$container);
      this.$test2 = $('<div data-ss-init="Class2" data-ss-state="onLoad"></div>').appendTo(this.$container);

      class Class1 { destroy() {}; } // eslint-disable-line
      class Class2 { destroy() {}; } // eslint-disable-line

      let classes = {Class1, Class2};
      this.instance = new AppComponent(classes);
    });

    describe('Init', () => {
      it('should exist', () => expect(typeof this.instance.init).toBe('function'));

      describe('When a jQuery Element is passed', () => {

        it('should create a new instance for the class passed inside the "data-ss-init" attribute', () => {
          this.instance.init(this.$test1);
          expect(this.$test1.data('ss-instance')).toBe(0);
        });

        it('should initialize all the classes from a jQuery DOM element', () => {
          this.instance.init(this.$container, true);
          expect(this.$test1.attr('data-ss-instance')).toBeTruthy();
          expect(this.$test2.attr('data-ss-instance')).toBeTruthy();
        });
      });

      it('should initialize the modules by the state specied in the data-ss-state attribute', () => {
        this.instance.initByState('onReady');
        expect(this.$test1.attr('data-ss-instance')).toBeTruthy();
        this.instance.initByState('onLoad');
        expect(this.$test2.attr('data-ss-instance')).toBeTruthy();
      });

      it('should throw an error if the parameter is not a jQuery element', () => {
        spyOn(console, 'error');
        this.instance.init('blabla');
        expect(console.error).toHaveBeenCalledWith('The parameter passed it is not a jQuery element!');
      });

      it('should throw a warning if a class does not exist', () => {
        this.$test3 = $('<div data-ss-init="Class3"></div>').appendTo(this.$container);
        spyOn(console, 'warn');
        this.instance.initByState('onReady');
        expect(console.warn).toHaveBeenCalledWith('The class Class3 does not exist!');
      });
    });

    describe('Destroy Method', () => {
      beforeEach(() => {
        this.instance.init(this.$container, true);
      });

      it('should exist', () => expect(typeof this.instance.destroy).toBe('function'));

      it('should destroy all the modules if no param was passed', () => {
        this.instance.destroy();
        expect(this.$test1.attr('data-ss-instance')).toBeFalsy();
        expect(this.$test2.attr('data-ss-instance')).toBeFalsy();
      });

      describe('When a jQuery Element is passed', () => {

        it('should destroy the module of the jQuery Dom element if the deepscan is not activated', () => {
          this.instance.destroy(this.$test1);
          expect(this.$test1.attr('data-ss-instance')).toBeFalsy();
        });

        it('should destroy all the modules from a jQuery DOM element', () => {
          this.instance.destroy(this.$container, true);
          expect(this.$test1.attr('data-ss-instance')).toBeFalsy();
          expect(this.$test2.attr('data-ss-instance')).toBeFalsy();
        });
      });

      it('should throw an error if the parameter is not a jQuery element', () => {
        spyOn(console, 'error');
        this.instance.destroy('blabla');
        expect(console.error).toHaveBeenCalledWith('The parameter passed it is not a jQuery element!');
      });

    });

    afterEach(() => {
      this.$container.remove();
    });
  });
});
