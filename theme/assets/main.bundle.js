webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(299);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _enquire = __webpack_require__(301);

	var _enquire2 = _interopRequireDefault(_enquire);

	var _mediaQueries = __webpack_require__(302);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.ss = window.ss || {};

	(0, _jquery2.default)('.breadcrumb').css('color', 'red');
	console.warn('merge sigurr');

	var oldMediaQuery = void 0,
	    registerBreakpoints = function registerBreakpoints(mqs) {
	  var _loop = function _loop(i, mqsLength) {
	    _enquire2.default.register(_mediaQueries.MEDIA_QUERIES[mqs[i]], function () {
	      if (oldMediaQuery && oldMediaQuery !== mqs[i]) {
	        console.warn('destroy ' + oldMediaQuery);
	      }

	      oldMediaQuery = mqs[i];

	      console.warn('init ' + oldMediaQuery);
	    }, true);
	  };

	  for (var i = 0, mqsLength = mqs.length; i < mqsLength; i++) {
	    _loop(i, mqsLength);
	  }
	};

	registerBreakpoints(['xs', 'sm', 'md', 'lg']);

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MEDIA_QUERIES = undefined;

	var _values = __webpack_require__(303);

	var MEDIA_QUERIES = exports.MEDIA_QUERIES = {
	  xs: 'screen and (max-width: ' + _values.VALUES_GRID.xsMax + 'px)',
	  xsMin: 'screen and (max-width: ' + _values.VALUES_GRID.xsMax + 'px)',
	  xsMax: 'screen and (max-width: ' + _values.VALUES_GRID.xsMax + 'px)',
	  sm: 'screen and (min-width: ' + _values.VALUES_GRID.smMin + 'px) and (max-width: ' + _values.VALUES_GRID.smMax + 'px)',
	  smMin: 'screen and (min-width: ' + _values.VALUES_GRID.smMin + 'px)',
	  smMax: 'screen and (max-width: ' + _values.VALUES_GRID.smMax + 'px)',
	  md: 'screen and (min-width: ' + _values.VALUES_GRID.mdMin + 'px) and (max-width: ' + _values.VALUES_GRID.mdMax + 'px)',
	  mdMin: 'screen and (min-width: ' + _values.VALUES_GRID.mdMin + 'px)',
	  mdMax: 'screen and (max-width: ' + _values.VALUES_GRID.mdMax + 'px)',
	  lg: 'screen and (min-width: ' + _values.VALUES_GRID.lgMin + 'px)',
	  lgMin: 'screen and (min-width: ' + _values.VALUES_GRID.lgMin + 'px)'
	};

/***/ },

/***/ 303:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VALUES_GRID = exports.VALUES_GRID = {
	  xsMin: 0,
	  xsMax: 767,
	  smMin: 768,
	  smMax: 1023,
	  mdMin: 1024,
	  mdMax: 1199,
	  lgMin: 1200
	};

/***/ }

});