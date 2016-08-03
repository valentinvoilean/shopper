import 'components/mediaQueries';
import {SetMediaQueryCallbacks} from 'components/utils';
import $ from 'jquery';

describe('Set Media Query Callback class', function () {

  it('should be a function', () => expect(typeof SetMediaQueryCallbacks).toBe('function'));

  describe('On Initialization', () => {

    describe('If no parameter passed', function () {
      it('should throw an error', () => {
        expect(() => new SetMediaQueryCallbacks())
          .toThrow(new Error('No configuration object passed for media query callbacks!'));
      });
    });

    describe('If parameter passed', function () {
      beforeEach(() => {
        this.MQ_CONFIG = {
          xs() { console.warn('xs'); },
          sm() { console.warn('sm'); }
        };
        spyOn($.fn, 'on');
        this.instance = new SetMediaQueryCallbacks(this.MQ_CONFIG);
      });

      it('should update the "mediaQueryCallbacks" with the given configuration', () => {
        expect(this.instance.mediaQueryCallbacks).toBe(this.MQ_CONFIG);
      });

      it('should listen to mediaQuery events', () => {
        expect($.fn.on).toHaveBeenCalledTimes(Object.keys(this.MQ_CONFIG).length);
      });

      afterEach(() => {
        this.instance.destroy();
      });
    });
  });

  describe('On Destroy', function() {
    it('should stop listening to mediaQuery events', () => {
      this.MQ_CONFIG = {
        xs() { console.warn('xs'); },
        sm() { console.warn('sm'); }
      };
      spyOn($.fn, 'off');
      this.instance = new SetMediaQueryCallbacks(this.MQ_CONFIG);
      this.instance.destroy();

      expect($.fn.off).toHaveBeenCalledTimes(Object.keys(this.MQ_CONFIG).length);
    });
  });
});
