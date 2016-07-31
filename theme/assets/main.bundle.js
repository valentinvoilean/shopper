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
	
	ss.detectMediaQuery = function () {
	
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
	    (0, _jquery2.default)(ss).trigger(_.currentMaxMQ + ':init');
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
	      _updateValues = function _updateValues() {
	    for (var i = 0, keysLength = Object.keys(_config.MEDIA_QUERIES).length; i < keysLength; i++) {
	
	      _.currentMinBP = Object.keys(_config.MEDIA_QUERIES_MIN)[i];
	      _.currentMinMQ = _config.MEDIA_QUERIES_MIN[_.currentMinBP];
	      _.nextMinBP = i < 4 ? Object.keys(_config.MEDIA_QUERIES_MIN)[i + 1] : null;
	
	      _.currentBP = Object.keys(_config.MEDIA_QUERIES)[i];
	      _.currentMQ = _config.MEDIA_QUERIES[_.currentBP];
	      _.previousBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES)[i - 1] : null;
	      _.nextBP = i < 4 ? Object.keys(_config.MEDIA_QUERIES)[i + 1] : null;
	
	      _.currentMaxBP = Object.keys(_config.MEDIA_QUERIES_MAX)[i];
	      _.currentMaxMQ = _config.MEDIA_QUERIES_MAX[_.currentMaxBP];
	      _.previousMaxBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES_MAX)[i - 1] : null;
	    }
	  };
	
	  return {
	    init: function init() {
	      for (var i = 0, keysLength = Object.keys(_config.MEDIA_QUERIES).length; i < keysLength; i++) {
	        _updateValues();
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
	};

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
	
	console.log(MEDIA_QUERIES);

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
	  (0, _jquery2.default)('body').find('[data-ss-state="' + state + '"]').each(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBSkE7QUFNQSxJQUFHLElBQUg7O0FBSEEsZTs7Ozs7Ozs7O0FDSEE7Ozs7QUFDQTs7OztBQUVBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCOztBQUVBLElBQUcsZ0JBQUgsR0FBc0IsWUFBWTs7QUFFaEMsT0FDRSxJQUFJLEVBRE47QUFBQSxPQUdFLHNCQUFzQixTQUF0QixtQkFBc0IsR0FBTTtBQUMxQixTQUFJLEVBQUUsYUFBRixLQUFvQixJQUF4QixFQUE4QjtBQUM1Qiw2QkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixFQUFFLGFBQW5CO0FBQ0Q7QUFDRCxTQUFJLEVBQUUsU0FBRixLQUFnQixJQUFwQixFQUEwQjtBQUN4Qiw2QkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixFQUFFLFNBQW5CO0FBQ0Q7QUFDRCxTQUFJLEVBQUUsVUFBRixLQUFpQixJQUFyQixFQUEyQjtBQUN6Qiw2QkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixFQUFFLFVBQW5CO0FBQ0Q7QUFDRCwyQkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixFQUFFLFlBQW5CO0FBQ0QsSUFkSDtBQUFBLE9BZ0JFLDBCQUEwQixTQUExQix1QkFBMEIsR0FBTTtBQUM5QixTQUFJLEVBQUUsVUFBRixLQUFpQixJQUFyQixFQUEyQjtBQUN6Qiw2QkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixFQUFFLFVBQW5CO0FBQ0Q7QUFDRCxTQUFJLEVBQUUsYUFBRixLQUFvQixJQUF4QixF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QWxDLENBQXVDLFlBQVk7QUFDakQsZUFBSSxhQUFhLHNCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsU0FBYixDQUFqQjtBQUNBLGNBQUcsbUJBQUgsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsVUFBbEMsRUFBOEMsU0FBOUM7QUFDRCxVQUhEO0FBSUQsUUFORCxNQU9LO0FBQ0g7QUFDQSxvQkFBVyxJQUFYLENBQWdCLFlBQVk7QUFDMUIsZUFBSSxhQUFhLHNCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsU0FBYixDQUFqQjtBQUNBLGVBQUksVUFBSixFQUFnQjtBQUNkLGdCQUFHLG1CQUFILENBQXVCLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLFVBQWxDLEVBQThDLFNBQTlDO0FBQ0Q7QUFDRixVQUxEO0FBTUQ7QUFFRixNQWxCRCxNQWtCTztBQUNMLGVBQVEsS0FBUixDQUFjLGtEQUFkO0FBQ0Q7QUFDRixJQXRCRCxNQXVCSztBQUNILDJCQUFFLE1BQUYsRUFBVSxJQUFWLG1CQUFpQyxJQUFqQyxDQUFzQyxZQUFZO0FBQ2hELFdBQUksYUFBYSxzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFNBQWIsQ0FBakI7QUFDQSxVQUFHLG1CQUFILENBQXVCLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLFVBQWxDLEVBQThDLFNBQTlDO0FBQ0QsTUFIRDtBQUlEO0FBRUYsRUEvQkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgJ2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzJztcblxuLy8gaW1wb3J0IGJhc2VcbmltcG9ydCAnYmFzZS9zcyc7XG5cbnNzLmluaXQoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtNRURJQV9RVUVSSUVTLCBNRURJQV9RVUVSSUVTX01JTiwgTUVESUFfUVVFUklFU19NQVh9IGZyb20gJy4vY29uZmlnJztcblxud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG5zcy5kZXRlY3RNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuXG4gIGxldFxuICAgIF8gPSB7fSxcblxuICAgIF90cmlnZ2VyTWluQlBFdmVudHMgPSAoKSA9PiB7XG4gICAgICBpZiAoXy5wcmV2aW91c01heEJQICE9PSBudWxsKSB7XG4gICAgICAgICQoc3MpLnRyaWdnZXIoYCR7Xy5wcmV2aW91c01heEJQfTpkZXN0cm95YCk7XG4gICAgICB9XG4gICAgICBpZiAoXy5uZXh0TWluQlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLm5leHRNaW5CUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgaWYgKF8ucHJldmlvdXNCUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ucHJldmlvdXNCUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgJChzcykudHJpZ2dlcihgJHtfLmN1cnJlbnRNaW5CUH06aW5pdGApO1xuICAgIH0sXG5cbiAgICBfdHJpZ2dlckN1cnJlbnRCUEV2ZW50cyA9ICgpID0+IHtcbiAgICAgIGlmIChfLnByZXZpb3VzQlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLnByZXZpb3VzQlB9OmRlc3Ryb3lgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLnByZXZpb3VzTWF4QlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLm5leHRNaW5CUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgICB9XG4gICAgICBpZiAoXy5uZXh0QlAgIT09IG51bGwpIHtcbiAgICAgICAgJChzcykudHJpZ2dlcihgJHtfLm5leHRCUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgJChzcykudHJpZ2dlcihgJHtfLmN1cnJlbnRCUH06aW5pdGApO1xuICAgIH0sXG5cbiAgICBfdHJpZ2dlck1heEJQRXZlbnRzID0gKCkgPT4ge1xuICAgICAgaWYgKF8ucHJldmlvdXNNYXhCUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ucHJldmlvdXNNYXhCUH06ZGVzdHJveWApO1xuICAgICAgfVxuICAgICAgaWYgKF8ubmV4dE1pbkJQICE9PSBudWxsKSB7XG4gICAgICAgICQoc3MpLnRyaWdnZXIoYCR7Xy5uZXh0TWluQlB9OmRlc3Ryb3lgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLm5leHRCUCAhPT0gbnVsbCkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKGAke18ubmV4dEJQfTpkZXN0cm95YCk7XG4gICAgICB9XG4gICAgICAkKHNzKS50cmlnZ2VyKGAke18uY3VycmVudE1heE1RfTppbml0YCk7XG4gICAgfSxcblxuICAgIF9hZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1pbk1RKS5hZGRMaXN0ZW5lcihfdHJpZ2dlck1pbkJQRXZlbnRzKTtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1RKS5hZGRMaXN0ZW5lcihfdHJpZ2dlckN1cnJlbnRCUEV2ZW50cyk7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShfLmN1cnJlbnRNYXhNUSkuYWRkTGlzdGVuZXIoX3RyaWdnZXJNYXhCUEV2ZW50cyk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1pbk1RKS5yZW1vdmVMaXN0ZW5lcihfdHJpZ2dlck1pbkJQRXZlbnRzKTtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1RKS5yZW1vdmVMaXN0ZW5lcihfdHJpZ2dlckN1cnJlbnRCUEV2ZW50cyk7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShfLmN1cnJlbnRNYXhNUSkucmVtb3ZlTGlzdGVuZXIoX3RyaWdnZXJNYXhCUEV2ZW50cyk7XG4gICAgfSxcblxuICAgIF9jaGVja0N1cnJlbnRNZWRpYVF1ZXJ5ID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1pbk1RKS5tYXRjaGVzKSB7XG4gICAgICAgIF90cmlnZ2VyTWluQlBFdmVudHMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKF8uY3VycmVudE1RKS5tYXRjaGVzKSB7XG4gICAgICAgIF90cmlnZ2VyQ3VycmVudEJQRXZlbnRzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShfLmN1cnJlbnRNYXhNUSkubWF0Y2hlcykge1xuICAgICAgICBfdHJpZ2dlck1heEJQRXZlbnRzKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwga2V5c0xlbmd0aCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpLmxlbmd0aDsgaSA8IGtleXNMZW5ndGg7IGkrKykge1xuXG4gICAgICAgIF8uY3VycmVudE1pbkJQID0gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFU19NSU4pW2ldO1xuICAgICAgICBfLmN1cnJlbnRNaW5NUSA9IE1FRElBX1FVRVJJRVNfTUlOW18uY3VycmVudE1pbkJQXTtcbiAgICAgICAgXy5uZXh0TWluQlAgPSBpIDwgNCA/IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVNfTUlOKVtpICsgMV0gOiBudWxsO1xuXG4gICAgICAgIF8uY3VycmVudEJQID0gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUylbaV07XG4gICAgICAgIF8uY3VycmVudE1RID0gTUVESUFfUVVFUklFU1tfLmN1cnJlbnRCUF07XG4gICAgICAgIF8ucHJldmlvdXNCUCA9IGkgPiAwID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUylbaSAtIDFdIDogbnVsbDtcbiAgICAgICAgXy5uZXh0QlAgPSBpIDwgNCA/IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpW2kgKyAxXSA6IG51bGw7XG5cbiAgICAgICAgXy5jdXJyZW50TWF4QlAgPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTX01BWClbaV07XG4gICAgICAgIF8uY3VycmVudE1heE1RID0gTUVESUFfUVVFUklFU19NQVhbXy5jdXJyZW50TWF4QlBdO1xuICAgICAgICBfLnByZXZpb3VzTWF4QlAgPSBpID4gMCA/IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVNfTUFYKVtpIC0gMV0gOiBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0KCkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGtleXNMZW5ndGggPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTKS5sZW5ndGg7IGkgPCBrZXlzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3VwZGF0ZVZhbHVlcygpO1xuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgX2NoZWNrQ3VycmVudE1lZGlhUXVlcnkoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwga2V5c0xlbmd0aCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpLmxlbmd0aDsgaSA8IGtleXNMZW5ndGg7IGkrKykge1xuICAgICAgICBfdXBkYXRlVmFsdWVzKCk7XG4gICAgICAgIF9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgfVxuXG4gICAgICBfID0gbnVsbDtcbiAgICB9XG4gIH07XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IFZBTFVFUyA9IHtcbiAgb3V0T2ZJbmRleDogLTFcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0ge1xuICB4czogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbTogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWQ6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWBcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTX01JTiA9IHtcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVNfTUFYID0ge1xuICB4c01heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZE1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBsZ01heDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC54c01pbn1weClgXG59O1xuXG5jb25zb2xlLmxvZyhNRURJQV9RVUVSSUVTKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmNoZWNrSWZNb2R1bGVFeGlzdHMgPSBmdW5jdGlvbiAobW9kdWxlTmFtZSwgY2IpIHtcbiAgdHJ5IHtcbiAgICBzc1ttb2R1bGVOYW1lXVtjYl0oJCh0aGlzKSk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oYFRoZSBtb2R1bGUgJHttb2R1bGVOYW1lfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgfVxufTtcblxuc3MuaW5pdEJ5U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgJCgnYm9keScpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICB9KTtcbn07XG5cbi8vIGluaXQgbWV0aG9kXG5zcy5pbml0ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAobW9kdWxlTmFtZSkge1xuICAgICAgICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgJCgnYm9keScpLmZpbmQoYFtkYXRhLXNzLWluaXRdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgfSk7XG4gIH1cblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Jhc2Uvc3MuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9