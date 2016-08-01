import 'base/ss';
import $ from 'jquery';

describe('SS', () => {

  describe('Namespacing', () => {
    it('should be an object', () => expect(typeof ss).toBe('object'));
  });

  describe('Init & Destroy', function() {
    beforeEach(() => {
      this.$container = $('<div class="container"></div>').appendTo($('body'));
      this.$test1 = $('<div data-ss-init="Class1" data-ss-state="onReady"></div>').appendTo(this.$container);
      this.$test2 = $('<div data-ss-init="Class2" data-ss-state="onLoad"></div>').appendTo(this.$container);

      ss.Class1 = class { destroy() {}; }; // eslint-disable-line
      ss.Class2 = class { destroy() {}; }; // eslint-disable-line
    });

    describe('Init', () => {
      it('should exist', () => expect(typeof ss.init).toBe('function'));

      describe('When a jQuery Element is passed', () => {

        it('should create a new instance for the class passed inside the "data-ss-init" attribute', () => {
          ss.init(this.$test1);
          expect(this.$test1.data('ss-instance')).toBe(0);
        });

        it('should initialize all the classes from a jQuery DOM element', () => {
          ss.init(this.$container, true);
          expect(this.$test1.attr('data-ss-instance')).toBeTruthy();
          expect(this.$test2.attr('data-ss-instance')).toBeTruthy();
        });
      });

      it('should initialize the modules by the state specied in the data-ss-state attribute', () => {
        ss.initByState('onReady');
        expect(this.$test1.attr('data-ss-instance')).toBeTruthy();
        ss.initByState('onLoad');
        expect(this.$test2.attr('data-ss-instance')).toBeTruthy();
      });

      it('should throw an error if the parameter is not a jQuery element', () => {
        spyOn(console, 'error');
        ss.init('blabla');
        expect(console.error).toHaveBeenCalledWith('The parameter passed it is not a jQuery element!');
      });

      it('should throw a warning if a module does not exist', () => {
        this.$test3 = $('<div data-ss-init="Class3" data-ss-state="onReady"></div>').appendTo(this.$container);
        spyOn(console, 'warn');
        ss.initByState('onReady');
        expect(console.warn).toHaveBeenCalledWith('The class Class3 does not exist!');
      });
    });

    describe('Destroy Method', () => {
      beforeEach(() => {
        ss.init(this.$container, true);
      });

      it('should exist', () => expect(typeof ss.destroy).toBe('function'));

      it('should destroy all the modules if no param was passed', () => {
        ss.destroy();
        expect(this.$test1.attr('data-ss-instance')).toBeFalsy();
        expect(this.$test2.attr('data-ss-instance')).toBeFalsy();
      });

      describe('When a jQuery Element is passed', () => {

        it('should destroy the module of the jQuery Dom element if the deepscan is not activated', () => {
          ss.destroy(this.$test1);
          expect(this.$test1.attr('data-ss-instance')).toBeFalsy();
        });

        it('should destroy all the modules from a jQuery DOM element', () => {
          ss.destroy(this.$container, true);
          expect(this.$test1.attr('data-ss-instance')).toBeFalsy();
          expect(this.$test2.attr('data-ss-instance')).toBeFalsy();
        });
      });

      it('should throw an error if the parameter is not a jQuery element', () => {
        spyOn(console, 'error');
        ss.destroy('blabla');
        expect(console.error).toHaveBeenCalledWith('The parameter passed it is not a jQuery element!');
      });

    });

    afterEach(() => {
      this.$container.remove();
    });
  });
});
