import 'base/ss';
import $ from 'jquery';

describe('SS', () => {

  describe('Namespacing', () => {
    it('should be an object', () => expect(typeof ss).toBe('object'));
  });

  describe('Init Method', () => {
    it('should exist', () => expect(typeof ss.init).toBe('function'));

    describe('When a jQuery Element is passed', function() {

      beforeEach(() => {
        this.$container = $('<div class="container"></div>').appendTo($('body'));
        this.$test1 = $(`<div data-ss-init="test1"></div>`).appendTo(this.$container);
        this.$test2 = $(`<div data-ss-init="test2"></div>`).appendTo(this.$container);

        ss.test1 = {init: () => console.warn('test 1')};
        ss.test2 = {init: () => console.warn('test 1')};
        spyOn(ss.test1, 'init');
        spyOn(ss.test2, 'init');
      });

      it('should initialize the module of the jQuery Dom element if the deepscan is not activated', () => {
        ss.init(this.$test1);
        expect(ss.test1.init).toHaveBeenCalled();
      });

      it('should initialize all the modules from a jQuery DOM element', () => {
        ss.init(this.$container, true);
        expect(ss.test1.init).toHaveBeenCalled();
        expect(ss.test2.init).toHaveBeenCalled();
      });

      afterEach(() => {
        this.$container.remove();
        this.$test1 = null;
        this.$test2 = null;
        ss.test1 = null;
        ss.test2 = null;
      });

    });

    it('should throw an error if the parameter is not a jQuery element', () => {
      spyOn(console, 'error');
      ss.init('blabla');
      expect(console.error).toHaveBeenCalledWith('The parameter passed it is not a jQuery element!');
    });
  });

  describe('Init By State', () => {
    beforeEach(() => {
      $('body').append(`<div data-ss-init="test1" data-ss-state="onReady"></div>
                        <div data-ss-init="test2" data-ss-state="onLoad"></div>`);

      ss.test1 = {init: () => console.warn('test 1')};
      ss.test2 = {init: () => console.warn('test 2')};
      spyOn(ss.test1, 'init');
      spyOn(ss.test2, 'init');
    });

    it('should initialize the modules by the state specied in the data-ss-state attribute', () => {
      //test
      ss.initByState('onReady');
      expect(ss.test1.init).toHaveBeenCalled();
      ss.initByState('onLoad');
      expect(ss.test2.init).toHaveBeenCalled();
    });

    it('should throw a warning if a module does not exist', () => {
      $('body').append(`<div data-ss-init="test3" data-ss-state="onReady"></div>`);

      spyOn(console, 'warn');
      ss.initByState('onReady');
      expect(console.warn).toHaveBeenCalledWith('The module test3 does not exist!');
    });

    afterEach(() => {
      // destroy
      ss.test1 = null;
      ss.test2 = null;
      $('body').find('[data-ss-init]').remove();
    });
  });

  describe('Destroy Method', () => {
    it('should exist', () => expect(typeof ss.destroy).toBe('function'));

    it('should throw a warning if the the module does not exist', () => {
      spyOn(console, 'warn');
      ss.destroy('blabla2');
      expect(console.warn).toHaveBeenCalledWith('The module blabla2 does not exist!');
    });

    it('should destroy the module name passed as parameter', () => {
      ss.test1 = {destroy: () => console.warn('test 1')};
      spyOn(ss.test1, 'destroy');
      ss.destroy('test1');
      expect(ss.test1.destroy).toHaveBeenCalled();
      ss.test1 = null;
    });

    describe('Destroy all methods', () => {
      beforeEach(() => {
        $('body').append(`<div data-ss-init="test1" data-ss-state="onReady"></div>
                          <div data-ss-init="test2" data-ss-state="onLoad"></div>`);

        ss.test1 = {destroy: () => console.warn('test 1')};
        ss.test2 = {destroy: () => console.warn('test 2')};
        spyOn(ss.test1, 'destroy');
        spyOn(ss.test2, 'destroy');
      });

      it('should destroy all the modules if was not specified one', () => {
        ss.destroy();
        expect(ss.test1.destroy).toHaveBeenCalled();
        expect(ss.test2.destroy).toHaveBeenCalled();
      });

      it('should throw a warning if a module does not exist', () => {
        $('body').append(`<div data-ss-init="test3" data-ss-state="onReady"></div>`);

        spyOn(console, 'warn');
        ss.destroy();
        expect(console.warn).toHaveBeenCalledWith('The module test3 does not exist!');
      });

      afterEach(() => {
        // destroy
        ss.test1 = null;
        ss.test2 = null;
        $('body').find('[data-ss-init]').remove();
      });
    });
  });
});
