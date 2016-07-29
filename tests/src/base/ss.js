import 'base/ss';
import $ from 'jquery';

describe('SS', () => {

  describe('Namespacing', () => {
    it('should be an object', () => expect(typeof ss).toBe('object'));
  });

  describe('Init Method', () => {
    it('should exist', () => expect(typeof ss.init).toBe('function'));

    it('should initialize the module name passed as parameter', function() {
      ss.test1 = { init: () => console.warn ('test 1') };
      spyOn(ss.test1, 'init');
      ss.init('test1');
      expect(ss.test1.init).toHaveBeenCalled();
      ss.test1 = null;
    });
  });

  describe('Init By State', () => {
    it('should initialize the modules by the state specied in the data-ss-state attribute', function() {
      //init
      $('body').append(`<div data-ss-init="test1" data-ss-state="onReady"></div>
                        <div data-ss-init="test2" data-ss-state="onLoad"></div>`);

      ss.test1 = { init: () => console.warn ('test 1') };
      ss.test2 = { init: () => console.warn ('test 2') };
      spyOn(ss.test1, 'init');
      spyOn(ss.test2, 'init');

      //test
      ss.initByState('onReady');
      expect(ss.test1.init).toHaveBeenCalled();
      ss.initByState('onLoad');
      expect(ss.test2.init).toHaveBeenCalled();

      // destroy
      ss.test1 = null;
      ss.test2 = null;
      $('body').find('[data-ss-init]').remove();
    });
  });

  describe('Destroy Method', () => {
    it('should exist', () => expect(typeof ss.destroy).toBe('function'));

    it('should destroy the module name passed as parameter', function() {
      ss.test1 = { destroy: () => console.warn ('test 1') };
      spyOn(ss.test1, 'destroy');
      ss.destroy('test1');
      expect(ss.test1.destroy).toHaveBeenCalled();
      ss.test1 = null;
    });

    it('should destroy all the modules if was not specified one', function() {
      $('body').append(`<div data-ss-init="test1" data-ss-state="onReady"></div>
                        <div data-ss-init="test2" data-ss-state="onLoad"></div>`);
      ss.test1 = { destroy: () => console.warn ('test 1') };
      ss.test2 = { destroy: () => console.warn ('test 2') };
      spyOn(ss.test1, 'destroy');
      spyOn(ss.test2, 'destroy');
      ss.destroy();
      expect(ss.test1.destroy).toHaveBeenCalled();
      expect(ss.test2.destroy).toHaveBeenCalled();
      ss.test1 = null;
      ss.test2 = null;
      $('body').find('[data-ss-init]').remove();
    });
  });
});
