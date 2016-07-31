webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(299);
	
	__webpack_require__(303);
	
	// import components
	ss.init();
	
	// import base

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _config = __webpack_require__(302);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.ss = window.ss || {};
	
	ss.mediaQueries = function () {
	
	  var _ = {},
	      _triggerMinBPEvents = function _triggerMinBPEvents() {
	    if (_.previousMaxBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.previousMaxBP + ':destroy');
	    }
	    if (_.nextMinBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.nextMinBP + ':destroy');
	    }
	    if (_.previousBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.previousBP + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(_.currentMinBP + ':init');
	  },
	      _triggerCurrentBPEvents = function _triggerCurrentBPEvents() {
	    if (_.previousBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.previousBP + ':destroy');
	    }
	    if (_.previousMaxBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.previousMaxBP + ':destroy');
	    }
	    if (_.nextMinBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.nextMinBP + ':destroy');
	    }
	    if (_.nextBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.nextBP + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(_.currentBP + ':init');
	  },
	      _triggerMaxBPEvents = function _triggerMaxBPEvents() {
	    if (_.previousMaxBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.previousMaxBP + ':destroy');
	    }
	    if (_.nextMinBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.nextMinBP + ':destroy');
	    }
	    if (_.nextBP !== null) {
	      (0, _jquery2.default)(ss).trigger(_.nextBP + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(_.currentMaxBP + ':init');
	  },
	      _addEventListeners = function _addEventListeners() {
	    window.matchMedia(_.currentMinMQ).addListener(_triggerMinBPEvents);
	    window.matchMedia(_.currentMQ).addListener(_triggerCurrentBPEvents);
	    window.matchMedia(_.currentMaxMQ).addListener(_triggerMaxBPEvents);
	  },
	      _removeEventListeners = function _removeEventListeners() {
	    window.matchMedia(_.currentMinMQ).removeListener(_triggerMinBPEvents);
	    window.matchMedia(_.currentMQ).removeListener(_triggerCurrentBPEvents);
	    window.matchMedia(_.currentMaxMQ).removeListener(_triggerMaxBPEvents);
	  },
	      _checkCurrentMediaQuery = function _checkCurrentMediaQuery() {
	    if (window.matchMedia(_.currentMinMQ).matches) {
	      _triggerMinBPEvents();
	    }
	
	    if (window.matchMedia(_.currentMQ).matches) {
	      _triggerCurrentBPEvents();
	    }
	
	    if (window.matchMedia(_.currentMaxMQ).matches) {
	      _triggerMaxBPEvents();
	    }
	  },
	      _updateValues = function _updateValues(i) {
	    _.currentMinBP = Object.keys(_config.MEDIA_QUERIES_MIN)[i];
	    _.currentMinMQ = _config.MEDIA_QUERIES_MIN[_.currentMinBP];
	    _.nextMinBP = i < 3 ? Object.keys(_config.MEDIA_QUERIES_MIN)[i + 1] : null;
	
	    _.currentBP = Object.keys(_config.MEDIA_QUERIES)[i];
	    _.currentMQ = _config.MEDIA_QUERIES[_.currentBP];
	    _.previousBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES)[i - 1] : null;
	    _.nextBP = i < 3 ? Object.keys(_config.MEDIA_QUERIES)[i + 1] : null;
	
	    _.currentMaxBP = Object.keys(_config.MEDIA_QUERIES_MAX)[i];
	    _.currentMaxMQ = _config.MEDIA_QUERIES_MAX[_.currentMaxBP];
	    _.previousMaxBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES_MAX)[i - 1] : null;
	  };
	
	  return {
	    init: function init() {
	      for (var i = 0, keysLength = Object.keys(_config.MEDIA_QUERIES).length; i < keysLength; i++) {
	        _updateValues(i);
	        _addEventListeners();
	        _checkCurrentMediaQuery();
	      }
	    },
	    destroy: function destroy() {
	      for (var i = 0, keysLength = Object.keys(_config.MEDIA_QUERIES).length; i < keysLength; i++) {
	        _updateValues();
	        _removeEventListeners();
	      }
	
	      _ = null;
	    }
	  };
	}();

/***/ },

/***/ 302:
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
	
	var VALUES = exports.VALUES = {
	  outOfIndex: -1
	};
	
	var MEDIA_QUERIES = exports.MEDIA_QUERIES = {
	  xs: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  sm: "screen and (min-width: " + VALUES_GRID.smMin + "px) and (max-width: " + VALUES_GRID.smMax + "px)",
	  md: "screen and (min-width: " + VALUES_GRID.mdMin + "px) and (max-width: " + VALUES_GRID.mdMax + "px)",
	  lg: "screen and (min-width: " + VALUES_GRID.lgMin + "px)"
	};
	
	var MEDIA_QUERIES_MIN = exports.MEDIA_QUERIES_MIN = {
	  xsMin: "screen and (min-width: " + VALUES_GRID.xsMin + "px)",
	  smMin: "screen and (min-width: " + VALUES_GRID.smMin + "px)",
	  mdMin: "screen and (min-width: " + VALUES_GRID.mdMin + "px)",
	  lgMin: "screen and (min-width: " + VALUES_GRID.lgMin + "px)"
	};
	
	var MEDIA_QUERIES_MAX = exports.MEDIA_QUERIES_MAX = {
	  xsMax: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  smMax: "screen and (max-width: " + VALUES_GRID.smMax + "px)",
	  mdMax: "screen and (max-width: " + VALUES_GRID.mdMax + "px)",
	  lgMax: "screen and (min-width: " + VALUES_GRID.xsMin + "px)"
	};

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.ss = window.ss || {};
	
	ss.checkIfModuleExists = function (moduleName, cb) {
	  try {
	    ss[moduleName][cb]((0, _jquery2.default)(this));
	  } catch (e) {
	    console.warn('The module ' + moduleName + ' does not exist!');
	  }
	};
	
	ss.initByState = function (state) {
	  (0, _jquery2.default)(document).find('[data-ss-state="' + state + '"]').each(function () {
	    var moduleName = (0, _jquery2.default)(this).data('ss-init');
	    ss.checkIfModuleExists.call(this, moduleName, 'init');
	  });
	};
	
	// init method
	ss.init = function ($container) {
	  var deepScan = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  if ($container) {
	    if ($container instanceof _jquery2.default) {
	
	      if (deepScan) {
	        // initialize all modules from the jQuery DOM element
	        $container.find('[data-ss-init]').each(function () {
	          var moduleName = (0, _jquery2.default)(this).data('ss-init');
	          ss.checkIfModuleExists.call(this, moduleName, 'init');
	        });
	      } else {
	        // initialize  the current element passed
	        $container.each(function () {
	          var moduleName = (0, _jquery2.default)(this).data('ss-init');
	          if (moduleName) {
	            ss.checkIfModuleExists.call(this, moduleName, 'init');
	          }
	        });
	      }
	    } else {
	      console.error('The parameter passed it is not a jQuery element!');
	    }
	  } else {
	    // if no param passed, all the modules from the DOM
	    // will be initialized depending on the data-ss-state value
	    (0, _jquery2.default)(document).ready(function () {
	      return ss.initByState('onReady');
	    });
	    (0, _jquery2.default)(window).on('load', function () {
	      return ss.initByState('onLoad');
	    });
	  }
	};
	
	//destroy method
	ss.destroy = function ($container) {
	  var deepScan = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  if ($container) {
	    if ($container instanceof _jquery2.default) {
	      if (deepScan) {
	        // destroy all modules from the jQuery DOM element
	        $container.find('[data-ss-init]').each(function () {
	          var moduleName = (0, _jquery2.default)(this).data('ss-init');
	          ss.checkIfModuleExists.call(this, moduleName, 'destroy');
	        });
	      } else {
	        // destroy  the current element passed
	        $container.each(function () {
	          var moduleName = (0, _jquery2.default)(this).data('ss-init');
	          if (moduleName) {
	            ss.checkIfModuleExists.call(this, moduleName, 'destroy');
	          }
	        });
	      }
	    } else {
	      console.error('The parameter passed it is not a jQuery element!');
	    }
	  } else {
	    (0, _jquery2.default)('body').find('[data-ss-init]').each(function () {
	      var moduleName = (0, _jquery2.default)(this).data('ss-init');
	      ss.checkIfModuleExists.call(this, moduleName, 'destroy');
	    });
	  }
	};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBSkE7QUFNQSxJQUFHLElBQUg7O0FBSEEsZTs7Ozs7Ozs7O0FDSEE7Ozs7QUFDQTs7OztBQUVBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCOztBQUVBLElBQUcsWUFBSCxHQUFtQixZQUFZOztBQUU3QixPQUNFLElBQUksRUFETjtBQUFBLE9BR0Usc0JBQXNCLFNBQXRCLG1CQUFzQixHQUFNO0FBQzFCLFNBQUksRUFBRSxhQUFGLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCLDZCQUFFLEVBQUYsRUFBTSxPQUFOLENBQWlCLEVBQUUsYUFBbkI7QUFDRDtBQUNELFNBQUksRUFBRSxTQUFGLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3hCLDZCQUFFLEVBQUYsRUFBTSxPQUFOLENBQWlCLEVBQUUsU0FBbkI7QUFDRDtBQUNELFNBQUksRUFBRSxVQUFGLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLDZCQUFFLEVBQUYsRUFBTSxPQUFOLENBQWlCLEVBQUUsVUFBbkI7QUFDRDtBQUNELDJCQUFFLEVBQUYsRUFBTSxPQUFOLENBQWlCLEVBQUUsWUFBbkI7QUFDRCxJQWRIO0FBQUEsT0FnQkUsMEJBQTBCLFNBQTFCLHVCQUEwQixHQUFNO0FBQzlCLFNBQUksRUFBRSxVQUFGLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLDZCQUFFLEVBQUYsRUFBTSxPQUFOLENBQWlCLEVBQUUsVUFBbkI7QUFDRDtBQUNELFNBQUksRUFBRSxhQUFGLEtBQW9CLElBQXhCLEVB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NEIsSUFBNUIsRUFBa0MsVUFBbEMsRUFBOEMsU0FBOUM7QUFDRCxVQUhEO0FBSUQsUUFORCxNQU9LO0FBQ0g7QUFDQSxvQkFBVyxJQUFYLENBQWdCLFlBQVk7QUFDMUIsZUFBSSxhQUFhLHNCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsU0FBYixDQUFqQjtBQUNBLGVBQUksVUFBSixFQUFnQjtBQUNkLGdCQUFHLG1CQUFILENBQXVCLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLFVBQWxDLEVBQThDLFNBQTlDO0FBQ0Q7QUFDRixVQUxEO0FBTUQ7QUFFRixNQWxCRCxNQWtCTztBQUNMLGVBQVEsS0FBUixDQUFjLGtEQUFkO0FBQ0Q7QUFDRixJQXRCRCxNQXVCSztBQUNILDJCQUFFLE1BQUYsRUFBVSxJQUFWLG1CQUFpQyxJQUFqQyxDQUFzQyxZQUFZO0FBQ2hELFdBQUksYUFBYSxzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFNBQWIsQ0FBakI7QUFDQSxVQUFHLG1CQUFILENBQXVCLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLFVBQWxDLEVBQThDLFNBQTlDO0FBQ0QsTUFIRDtBQUlEO0FBRUYsRUEvQkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgJ2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzJztcblxuLy8gaW1wb3J0IGJhc2VcbmltcG9ydCAnYmFzZS9zcyc7XG5cbnNzLmluaXQoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtNRURJQV9RVUVSSUVTLCBNRURJQV9RVUVSSUVTX01JTiwgTUVESUFfUVVFUklFU19NQVh9IGZyb20gJy4vY29uZmlnJztcblxud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG5zcy5tZWRpYVF1ZXJpZXMgPSAoZnVuY3Rpb24gKCkge1xuXG4gIGxldFxuICAgIF8gPSB7fSxcblxuICAgIF90cmlnZ2VyTWluQlBFdmVudHMgPSAoKSA9PiB7XG4gICAgICBpZiAoXy5wcmV2aW91c01heEJQICE9PSBudWxsKSB7XG4gICAgICAgICQoc3MpLnRyaWdnZXIoYCR7Xy5wcmV2aW91c01heEJQfTpkZXN0cm95YCk7XG4gICAgICB9XG4gICAgICBpZiAoXy5uZXh0TWluQlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLm5leHRNaW5CUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgaWYgKF8ucHJldmlvdXNCUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ucHJldmlvdXNCUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgJChzcykudHJpZ2dlcihgJHtfLmN1cnJlbnRNaW5CUH06aW5pdGApO1xuICAgIH0sXG5cbiAgICBfdHJpZ2dlckN1cnJlbnRCUEV2ZW50cyA9ICgpID0+IHtcbiAgICAgIGlmIChfLnByZXZpb3VzQlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLnByZXZpb3VzQlB9OmRlc3Ryb3lgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLnByZXZpb3VzTWF4QlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLm5leHRNaW5CUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgICB9XG4gICAgICBpZiAoXy5uZXh0QlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLm5leHRCUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgJChzcykudHJpZ2dlcihgJHtfLmN1cnJlbnRCUH06aW5pdGApO1xuICAgIH0sXG5cbiAgICBfdHJpZ2dlck1heEJQRXZlbnRzID0gKCkgPT4ge1xuICAgICAgaWYgKF8ucHJldmlvdXNNYXhCUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ucHJldmlvdXNNYXhCUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgaWYgKF8ubmV4dE1pbkJQICE9PSBudWxsKSB7XG4gICAgICAgICQoc3MpLnRyaWdnZXIoYCR7Xy5uZXh0TWluQlB9OmRlc3Ryb3lgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLm5leHRCUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ubmV4dEJQfTpkZXN0cm95YCk7XG4gICAgICB9XG4gICAgICAkKHNzKS50cmlnZ2VyKGAke18uY3VycmVudE1heEJQfTppbml0YCk7XG4gICAgfSxcblxuICAgIF9hZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1pbk1RKS5hZGRMaXN0ZW5lcihfdHJpZ2dlck1pbkJQRXZlbnRzKTtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1RKS5hZGRMaXN0ZW5lcihfdHJpZ2dlckN1cnJlbnRCUEV2ZW50cyk7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShfLmN1cnJlbnRNYXhNUSkuYWRkTGlzdGVuZXIoX3RyaWdnZXJNYXhCUEV2ZW50cyk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1pbk1RKS5yZW1vdmVMaXN0ZW5lcihfdHJpZ2dlck1pbkJQRXZlbnRzKTtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1RKS5yZW1vdmVMaXN0ZW5lcihfdHJpZ2dlckN1cnJlbnRCUEV2ZW50cyk7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShfLmN1cnJlbnRNYXhNUSkucmVtb3ZlTGlzdGVuZXIoX3RyaWdnZXJNYXhCUEV2ZW50cyk7XG4gICAgfSxcblxuICAgIF9jaGVja0N1cnJlbnRNZWRpYVF1ZXJ5ID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1pbk1RKS5tYXRjaGVzKSB7XG4gICAgICAgIF90cmlnZ2VyTWluQlBFdmVudHMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1RKS5tYXRjaGVzKSB7XG4gICAgICAgIF90cmlnZ2VyQ3VycmVudEJQRXZlbnRzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShfLmN1cnJlbnRNYXhNUSkubWF0Y2hlcykge1xuICAgICAgICBfdHJpZ2dlck1heEJQRXZlbnRzKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVWYWx1ZXMgPSAoaSkgPT4ge1xuICAgICAgXy5jdXJyZW50TWluQlAgPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTX01JTilbaV07XG4gICAgICBfLmN1cnJlbnRNaW5NUSA9IE1FRElBX1FVRVJJRVNfTUlOW18uY3VycmVudE1pbkJQXTtcbiAgICAgIF8ubmV4dE1pbkJQID0gaSA8IDMgPyBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTX01JTilbaSArIDFdIDogbnVsbDtcblxuICAgICAgXy5jdXJyZW50QlAgPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTKVtpXTtcbiAgICAgIF8uY3VycmVudE1RID0gTUVESUFfUVVFUklFU1tfLmN1cnJlbnRCUF07XG4gICAgICBfLnByZXZpb3VzQlAgPSBpID4gMCA/IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpW2kgLSAxXSA6IG51bGw7XG4gICAgICBfLm5leHRCUCA9IGkgPCAzID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUylbaSArIDFdIDogbnVsbDtcblxuICAgICAgXy5jdXJyZW50TWF4QlAgPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTX01BWClbaV07XG4gICAgICBfLmN1cnJlbnRNYXhNUSA9IE1FRElBX1FVRVJJRVNfTUFYW18uY3VycmVudE1heEJQXTtcbiAgICAgIF8ucHJldmlvdXNNYXhCUCA9IGkgPiAwID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFU19NQVgpW2kgLSAxXSA6IG51bGw7XG4gICAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwga2V5c0xlbmd0aCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpLmxlbmd0aDsgaSA8IGtleXNMZW5ndGg7IGkrKykge1xuICAgICAgICBfdXBkYXRlVmFsdWVzKGkpO1xuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgX2NoZWNrQ3VycmVudE1lZGlhUXVlcnkoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwga2V5c0xlbmd0aCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpLmxlbmd0aDsgaSA8IGtleXNMZW5ndGg7IGkrKykge1xuICAgICAgICBfdXBkYXRlVmFsdWVzKCk7XG4gICAgICAgIF9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgfVxuXG4gICAgICBfID0gbnVsbDtcbiAgICB9XG4gIH07XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IFZBTFVFUyA9IHtcbiAgb3V0T2ZJbmRleDogLTFcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0ge1xuICB4czogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbTogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWQ6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWBcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTX01JTiA9IHtcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVNfTUFYID0ge1xuICB4c01heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZE1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBsZ01heDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC54c01pbn1weClgXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvY29uZmlnLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbndpbmRvdy5zcyA9IHdpbmRvdy5zcyB8fCB7fTtcblxuc3MuY2hlY2tJZk1vZHVsZUV4aXN0cyA9IGZ1bmN0aW9uIChtb2R1bGVOYW1lLCBjYikge1xuICB0cnkge1xuICAgIHNzW21vZHVsZU5hbWVdW2NiXSgkKHRoaXMpKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihgVGhlIG1vZHVsZSAke21vZHVsZU5hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICB9XG59O1xuXG5zcy5pbml0QnlTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICBzcy5jaGVja0lmTW9kdWxlRXhpc3RzLmNhbGwodGhpcywgbW9kdWxlTmFtZSwgJ2luaXQnKTtcbiAgfSk7XG59O1xuXG4vLyBpbml0IG1ldGhvZFxuc3MuaW5pdCA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG5cbiAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAvLyBpbml0aWFsaXplIGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluaXRdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBzcy5jaGVja0lmTW9kdWxlRXhpc3RzLmNhbGwodGhpcywgbW9kdWxlTmFtZSwgJ2luaXQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIGlmIChtb2R1bGVOYW1lKSB7XG4gICAgICAgICAgICBzcy5jaGVja0lmTW9kdWxlRXhpc3RzLmNhbGwodGhpcywgbW9kdWxlTmFtZSwgJ2luaXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAvLyB3aWxsIGJlIGluaXRpYWxpemVkIGRlcGVuZGluZyBvbiB0aGUgZGF0YS1zcy1zdGF0ZSB2YWx1ZVxuICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHNzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHNzLmluaXRCeVN0YXRlKCdvbkxvYWQnKSk7XG4gIH1cbn07XG5cbi8vZGVzdHJveSBtZXRob2RcbnNzLmRlc3Ryb3kgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnZGVzdHJveScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBkZXN0cm95ICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnZGVzdHJveScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgICQoJ2JvZHknKS5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnZGVzdHJveScpO1xuICAgIH0pO1xuICB9XG5cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL3NzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==