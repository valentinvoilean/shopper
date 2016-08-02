import $ from 'jquery';

// import components
import 'components/mediaQueries';
import 'components/currency';

// import base
import 'base/ss';

ss.init();

$(ss).on('smMin', function() {
  console.warn('smMin');
});
