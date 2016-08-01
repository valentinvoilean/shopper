import $ from 'jquery';

// import components
import 'components/mediaQueries';

// import base
import 'base/ss';

ss.init();

$(ss).on('smMin', function() {
  console.warn('smMin');
});
