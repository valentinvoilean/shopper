import MediaQueriesComponent from 'js/media-queries/media-queries.component';
import {MEDIA_QUERIES} from 'js/shared/shared';

describe('Media Queries', function () {

  beforeEach(() => {
    spyOn(MediaQueriesComponent.prototype, '_handleMQChange');
    this.instance = new MediaQueriesComponent();
  });

  it('should be a function', function () {
    expect(typeof MediaQueriesComponent).toBe('function');
  });

  it('should contain the destroy method', () => {
    expect(typeof this.instance.destroy).toBe('function');
  });

  it('should call the handleMQChange method for each existing media query', () => {
    expect(MediaQueriesComponent.prototype._handleMQChange).toHaveBeenCalledTimes(Object.keys(MEDIA_QUERIES).length);
  });

  beforeEach(() => {
    this.instance.destroy();
  });
});
