import MediaQueries from 'components/mediaQueries';
import {MEDIA_QUERIES} from 'common/values';

describe('Media Queries', function () {

  beforeEach(() => {
    spyOn(MediaQueries.prototype, '_handleMQChange');
    this.instance = new MediaQueries();
  });

  it('should be a function', function () {
    expect(typeof MediaQueries).toBe('function');
  });

  it('should contain the destroy method', () => {
    expect(typeof this.instance.destroy).toBe('function');
  });

  it('should call the handleMQChange method for each existing media query', () => {
    expect(MediaQueries.prototype._handleMQChange).toHaveBeenCalledTimes(Object.keys(MEDIA_QUERIES).length);
  });

  beforeEach(() => {
    this.instance.destroy();
  });
});
