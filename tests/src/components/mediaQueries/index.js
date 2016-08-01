import 'components/mediaQueries';

describe('Media Queries', () => {

  it('should be a function', function () {
    expect(typeof ss.MediaQueries).toBe('function');
  });

  describe('Structure', function() {

    it('should contain the mediaQueries & breakpoints objects', function () {
      let mediaQueries = new ss.MediaQueries();
      expect(typeof mediaQueries.mediaQueries).toBe('object');
      expect(typeof mediaQueries.breakpoints).toBe('object');
    });
  });

});
