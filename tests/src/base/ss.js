import 'base/ss';
import $ from 'jquery';

describe('SS', () => {

  describe('Namespacing', () => {
    it('should be an object', () => expect(typeof ss).toBe('object'));
  });

  describe('Init Method', () => {
    it('should exist', () => expect(typeof ss.init).toBe('function'));

    it('should initialize the module name passed as parameter', function () {
      ss.test1 = {init: () => console.warn('test 1')};
      spyOn(ss.test1, 'init');
      ss.init('test1');
      expect(ss.test1.init).toHaveBeenCalled();
      ss.test1 = null;
    });

    it('should throw a warning if the the module does not exist', function () {
      spyOn(console, 'warn');
      ss.init('blabla');
      expect(console.warn).toHaveBeenCalledWith('The module blabla does not exist!');
    });
  });

  describe('Init By State', () => {
    beforeEach(function () {
      $('body').append(`<div data-ss-init="test1" data-ss-state="onReady"></div>
                        <div data-ss-init="test2" data-ss-state="onLoad"></div>`);

      ss.test1 = {init: () => console.warn('test 1')};
      ss.test2 = {init: () => console.warn('test 2')};
      spyOn(ss.test1, 'init');
      spyOn(ss.test2, 'init');
    });

    it('should initialize the modules by the state specied in the data-ss-state attribute', function () {
      //test
      ss.initByState('onReady');
      expect(ss.test1.init).toHaveBeenCalled();
      ss.initByState('onLoad');
      expect(ss.test2.init).toHaveBeenCalled();
    });

    it('should throw a warning if a module does not exist', function () {
      $('body').append(`<div data-ss-init="test3" data-ss-state="onReady"></div>`);

      spyOn(console, 'warn');
      ss.initByState('onReady');
      expect(console.warn).toHaveBeenCalledWith('The module test3 does not exist!');
    });

    afterEach(function () {
      // destroy
      ss.test1 = null;
      ss.test2 = null;
      $('body').find('[data-ss-init]').remove();
    });
  });

  describe('Destroy Method', () => {
    it('should exist', () => expect(typeof ss.destroy).toBe('function'));

    it('should throw a warning if the the module does not exist', function () {
      spyOn(console, 'warn');
      ss.destroy('blabla2');
      expect(console.warn).toHaveBeenCalledWith('The module blabla2 does not exist!');
    });

    it('should destroy the module name passed as parameter', function () {
      ss.test1 = {destroy: () => console.warn('test 1')};
      spyOn(ss.test1, 'destroy');
      ss.destroy('test1');
      expect(ss.test1.destroy).toHaveBeenCalled();
      ss.test1 = null;
    });

    describe('Destroy all methods', () => {
      beforeEach(function () {
        $('body').append(`<div data-ss-init="test1" data-ss-state="onReady"></div>
                          <div data-ss-init="test2" data-ss-state="onLoad"></div>`);

        ss.test1 = {destroy: () => console.warn('test 1')};
        ss.test2 = {destroy: () => console.warn('test 2')};
        spyOn(ss.test1, 'destroy');
        spyOn(ss.test2, 'destroy');
      });

      it('should destroy all the modules if was not specified one', function () {
        ss.destroy();
        expect(ss.test1.destroy).toHaveBeenCalled();
        expect(ss.test2.destroy).toHaveBeenCalled();
      });

      it('should throw a warning if a module does not exist', function () {
        $('body').append(`<div data-ss-init="test3" data-ss-state="onReady"></div>`);

        spyOn(console, 'warn');
        ss.destroy();
        expect(console.warn).toHaveBeenCalledWith('The module test3 does not exist!');
      });

      afterEach(function () {
        // destroy
        ss.test1 = null;
        ss.test2 = null;
        $('body').find('[data-ss-init]').remove();
      });
    });
  });
});
