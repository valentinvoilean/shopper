import 'components/mediaQueries';
import {MEDIA_QUERIES} from 'components/mediaQueries/config';

describe('Media Queries', function () {

  beforeEach(() => {
    spyOn(ss.MediaQueries.prototype, '_handleMQChange');
    this.instance = new ss.MediaQueries();
  });

  it('should be a function', function () {
    expect(typeof ss.MediaQueries).toBe('function');
  });

  it('should contain the destroy method', () => {
    expect(typeof this.instance.destroy).toBe('function');
  });

  it('should call the handleMQChange method for each existing media query', () => {
    expect(ss.MediaQueries.prototype._handleMQChange).toHaveBeenCalledTimes(Object.keys(MEDIA_QUERIES).length);
  });

  beforeEach(() => {
    this.instance.destroy();
  });
});
