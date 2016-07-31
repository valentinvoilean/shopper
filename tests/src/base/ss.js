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
        this.$test1 = $(`<div data-ss-init="Class1"></div>`).appendTo(this.$container);
        this.$test2 = $(`<div data-ss-init="Class2"></div>`).appendTo(this.$container);

        ss.Class1 = class { constructor() { console.warn('test 1'); }};
        ss.Class2 = class { constructor() { console.warn('test 2'); }};
      });

      it('should create a new instance for the class passed inside the "data-ss-init" attribute', () => {
        ss.init(this.$test1);
        expect(this.$test1.data('ss-instance')).toBe(0);
      });

      it('should initialize all the modules from a jQuery DOM element', () => {
        ss.init(this.$container, true);
        expect(this.$test1.attr('data-ss-instance')).toBeTruthy();
        expect(this.$test2.attr('data-ss-instance')).toBeTruthy();
      });

      afterEach(() => {
        // ss.destroy();
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
    beforeAll(() => {
      $('body').append(`<div data-ss-init="test1" data-ss-state="onReady"></div>
                        <div data-ss-init="test2" data-ss-state="onLoad"></div>`);

      ss.test1 = {init: () => console.warn('test 1')};
      ss.test2 = {init: () => console.warn('test 2')};
      spyOn(ss.test1, 'init');
      spyOn(ss.test2, 'init');
    });

    it('should initialize the modules by the state specied in the data-ss-state attribute', () => {
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

    afterAll(() => {
      ss.test1 = null;
      ss.test2 = null;
      $('body').find('[data-ss-init]').remove();
    });
  });

  describe('Destroy Method', function() {

    beforeAll(() => {
      this.$container = $('<div class="container"></div>').appendTo($('body'));
      this.$test1 = $(`<div data-ss-init="test1"></div>`).appendTo(this.$container);
      this.$test2 = $(`<div data-ss-init="test2"></div>`).appendTo(this.$container);

      ss.test1 = {destroy: () => console.warn('test 1')};
      ss.test2 = {destroy: () => console.warn('test 1')};
      spyOn(ss.test1, 'destroy');
      spyOn(ss.test2, 'destroy');
    });

    it('should exist', () => expect(typeof ss.destroy).toBe('function'));

    it('should destroy all the modules if no param was passed', () => {
      ss.destroy();
      expect(ss.test1.destroy).toHaveBeenCalled();
      expect(ss.test2.destroy).toHaveBeenCalled();
    });

    describe('When a jQuery Element is passed', () => {

      it('should destroy the module of the jQuery Dom element if the deepscan is not activated', () => {
        ss.destroy(this.$test1);
        expect(ss.test1.destroy).toHaveBeenCalled();
      });

      it('should destroy all the modules from a jQuery DOM element', () => {
        ss.destroy(this.$container, true);
        expect(ss.test1.destroy).toHaveBeenCalled();
        expect(ss.test2.destroy).toHaveBeenCalled();
      });
    });

    it('should throw an error if the parameter is not a jQuery element', () => {
      spyOn(console, 'error');
      ss.destroy('blabla');
      expect(console.error).toHaveBeenCalledWith('The parameter passed it is not a jQuery element!');
    });

    afterAll(() => {
      this.$container.remove();
      this.$test1 = null;
      this.$test2 = null;
      ss.test1 = null;
      ss.test2 = null;
    });
  });

});
