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
	
	for (var i = 0, keysLength = Object.keys(_config.MEDIA_QUERIES).length; i < keysLength; i++) {
	  var currentMinBP = Object.keys(_config.MEDIA_QUERIES_MIN)[i],
	      currentMinMQ = _config.MEDIA_QUERIES_MIN[currentMinBP],
	      nextMinBP = i < 4 ? Object.keys(_config.MEDIA_QUERIES_MIN)[i + 1] : null,
	      currentBP = Object.keys(_config.MEDIA_QUERIES)[i],
	      currentMQ = _config.MEDIA_QUERIES[currentBP],
	      previousBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES)[i - 1] : null,
	      nextBP = i < 4 ? Object.keys(_config.MEDIA_QUERIES)[i + 1] : null,
	      currentMaxBP = Object.keys(_config.MEDIA_QUERIES_MAX)[i],
	      currentMaxMQ = _config.MEDIA_QUERIES_MAX[currentMaxBP],
	      previousMaxBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES_MAX)[i - 1] : null;
	
	  // min
	  if (window.matchMedia(currentMinMQ).matches) {
	    if (previousMaxBP !== null) {
	      (0, _jquery2.default)(ss).trigger(previousMaxBP + ':destroy');
	    }
	    if (nextMinBP !== null) {
	      (0, _jquery2.default)(ss).trigger(nextMinBP + ':destroy');
	    }
	    if (previousBP !== null) {
	      (0, _jquery2.default)(ss).trigger(previousBP + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(currentMinBP + ':init');
	  }
	
	  // current
	  if (window.matchMedia(currentMQ).matches) {
	    if (previousBP !== null) {
	      (0, _jquery2.default)(ss).trigger(previousBP + ':destroy');
	    }
	    if (previousMaxBP !== null) {
	      (0, _jquery2.default)(ss).trigger(previousMaxBP + ':destroy');
	    }
	    if (nextMinBP !== null) {
	      (0, _jquery2.default)(ss).trigger(nextMinBP + ':destroy');
	    }
	    if (nextBP !== null) {
	      (0, _jquery2.default)(ss).trigger(nextBP + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(currentBP + ':init');
	  }
	
	  // max
	  if (window.matchMedia(currentMaxMQ).matches) {
	    if (previousMaxBP !== null) {
	      (0, _jquery2.default)(ss).trigger(previousMaxBP + ':destroy');
	    }
	    if (nextMinBP !== null) {
	      (0, _jquery2.default)(ss).trigger(nextMinBP + ':destroy');
	    }
	    if (nextBP !== null) {
	      (0, _jquery2.default)(ss).trigger(nextBP + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(currentMaxMQ + ':init');
	  }
	}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBSkE7QUFNQSxJQUFHLElBQUg7O0FBSEEsZTs7Ozs7Ozs7O0FDSEE7Ozs7QUFDQTs7OztBQUVBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCOztBQUVBLE1BQUssSUFBSSxJQUFJLENBQVIsRUFBVyxhQUFhLE9BQU8sSUFBUCx3QkFBMkIsTUFBeEQsRUFBZ0UsSUFBSSxVQUFwRSxFQUFnRixHQUFoRixFQUFxRjtBQUNuRixPQUNFLGVBQWUsT0FBTyxJQUFQLDRCQUErQixDQUEvQixDQURqQjtBQUFBLE9BRUUsZUFBZSwwQkFBa0IsWUFBbEIsQ0FGakI7QUFBQSxPQUdFLFlBQVksSUFBSSxDQUFKLEdBQVEsT0FBTyxJQUFQLDRCQUErQixJQUFJLENBQW5DLENBQVIsR0FBZ0QsSUFIOUQ7QUFBQSxPQUtFLFlBQVksT0FBTyxJQUFQLHdCQUEyQixDQUEzQixDQUxkO0FBQUEsT0FNRSxZQUFZLHNCQUFjLFNBQWQsQ0FOZDtBQUFBLE9BT0UsYUFBYSxJQUFJLENBQUosR0FBUSxPQUFPLElBQVAsd0JBQTJCLElBQUksQ0FBL0IsQ0FBUixHQUE0QyxJQVAzRDtBQUFBLE9BUUUsU0FBUyxJQUFJLENBQUosR0FBUSxPQUFPLElBQVAsd0JBQTJCLElBQUksQ0FBL0IsQ0FBUixHQUE0QyxJQVJ2RDtBQUFBLE9BV0UsZUFBZSxPQUFPLElBQVAsNEJBQStCLENBQS9CLENBWGpCO0FBQUEsT0FZRSxlQUFlLDBCQUFrQixZQUFsQixDQVpqQjtBQUFBLE9B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QWQ7QUFDRDtBQUNGLElBdEJELE1BdUJLO0FBQ0gsMkJBQUUsTUFBRixFQUFVLElBQVYsbUJBQWlDLElBQWpDLENBQXNDLFlBQVk7QUFDaEQsV0FBSSxhQUFhLHNCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsU0FBYixDQUFqQjtBQUNBLFVBQUcsbUJBQUgsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsVUFBbEMsRUFBOEMsU0FBOUM7QUFDRCxNQUhEO0FBSUQ7QUFFRixFQS9CRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuXG4vLyBpbXBvcnQgYmFzZVxuaW1wb3J0ICdiYXNlL3NzJztcblxuc3MuaW5pdCgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVMsIE1FRElBX1FVRVJJRVNfTUlOLCBNRURJQV9RVUVSSUVTX01BWH0gZnJvbSAnLi9jb25maWcnO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbmZvciAobGV0IGkgPSAwLCBrZXlzTGVuZ3RoID0gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUykubGVuZ3RoOyBpIDwga2V5c0xlbmd0aDsgaSsrKSB7XG4gIGxldFxuICAgIGN1cnJlbnRNaW5CUCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVNfTUlOKVtpXSxcbiAgICBjdXJyZW50TWluTVEgPSBNRURJQV9RVUVSSUVTX01JTltjdXJyZW50TWluQlBdLFxuICAgIG5leHRNaW5CUCA9IGkgPCA0ID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFU19NSU4pW2kgKyAxXSA6IG51bGwsXG5cbiAgICBjdXJyZW50QlAgPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTKVtpXSxcbiAgICBjdXJyZW50TVEgPSBNRURJQV9RVUVSSUVTW2N1cnJlbnRCUF0sXG4gICAgcHJldmlvdXNCUCA9IGkgPiAwID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUylbaSAtIDFdIDogbnVsbCxcbiAgICBuZXh0QlAgPSBpIDwgNCA/IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpW2kgKyAxXSA6IG51bGwsXG5cblxuICAgIGN1cnJlbnRNYXhCUCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVNfTUFYKVtpXSxcbiAgICBjdXJyZW50TWF4TVEgPSBNRURJQV9RVUVSSUVTX01BWFtjdXJyZW50TWF4QlBdLFxuICAgIHByZXZpb3VzTWF4QlAgPSBpID4gMCA/IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVNfTUFYKVtpIC0gMV0gOiBudWxsO1xuXG4gIC8vIG1pblxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoY3VycmVudE1pbk1RKS5tYXRjaGVzKSB7XG4gICAgaWYgKHByZXZpb3VzTWF4QlAgIT09IG51bGwpIHsgJChzcykudHJpZ2dlcihgJHtwcmV2aW91c01heEJQfTpkZXN0cm95YCk7IH1cbiAgICBpZiAobmV4dE1pbkJQICE9PSBudWxsKSB7ICQoc3MpLnRyaWdnZXIoYCR7bmV4dE1pbkJQfTpkZXN0cm95YCk7IH1cbiAgICBpZiAocHJldmlvdXNCUCAhPT0gbnVsbCkgeyAkKHNzKS50cmlnZ2VyKGAke3ByZXZpb3VzQlB9OmRlc3Ryb3lgKTsgfVxuICAgICQoc3MpLnRyaWdnZXIoYCR7Y3VycmVudE1pbkJQfTppbml0YCk7XG4gIH1cblxuICAvLyBjdXJyZW50XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShjdXJyZW50TVEpLm1hdGNoZXMpIHtcbiAgICBpZiAocHJldmlvdXNCUCAhPT0gbnVsbCkgeyAkKHNzKS50cmlnZ2VyKGAke3ByZXZpb3VzQlB9OmRlc3Ryb3lgKTsgfVxuICAgIGlmIChwcmV2aW91c01heEJQICE9PSBudWxsKSB7ICQoc3MpLnRyaWdnZXIoYCR7cHJldmlvdXNNYXhCUH06ZGVzdHJveWApOyB9XG4gICAgaWYgKG5leHRNaW5CUCAhPT0gbnVsbCkgeyAkKHNzKS50cmlnZ2VyKGAke25leHRNaW5CUH06ZGVzdHJveWApOyB9XG4gICAgaWYgKG5leHRCUCAhPT0gbnVsbCkgeyAkKHNzKS50cmlnZ2VyKGAke25leHRCUH06ZGVzdHJveWApOyB9XG4gICAgJChzcykudHJpZ2dlcihgJHtjdXJyZW50QlB9OmluaXRgKTtcbiAgfVxuXG4gIC8vIG1heFxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoY3VycmVudE1heE1RKS5tYXRjaGVzKSB7XG4gICAgaWYgKHByZXZpb3VzTWF4QlAgIT09IG51bGwpIHsgJChzcykudHJpZ2dlcihgJHtwcmV2aW91c01heEJQfTpkZXN0cm95YCk7IH1cbiAgICBpZiAobmV4dE1pbkJQICE9PSBudWxsKSB7ICQoc3MpLnRyaWdnZXIoYCR7bmV4dE1pbkJQfTpkZXN0cm95YCk7IH1cbiAgICBpZiAobmV4dEJQICE9PSBudWxsKSB7ICQoc3MpLnRyaWdnZXIoYCR7bmV4dEJQfTpkZXN0cm95YCk7IH1cbiAgICAkKHNzKS50cmlnZ2VyKGAke2N1cnJlbnRNYXhNUX06aW5pdGApOyBcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IFZBTFVFUyA9IHtcbiAgb3V0T2ZJbmRleDogLTFcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0ge1xuICB4czogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbTogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWQ6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWBcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTX01JTiA9IHtcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVNfTUFYID0ge1xuICB4c01heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZE1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBsZ01heDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC54c01pbn1weClgXG59O1xuXG5jb25zb2xlLmxvZyhNRURJQV9RVUVSSUVTKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmNoZWNrSWZNb2R1bGVFeGlzdHMgPSBmdW5jdGlvbiAobW9kdWxlTmFtZSwgY2IpIHtcbiAgdHJ5IHtcbiAgICBzc1ttb2R1bGVOYW1lXVtjYl0oJCh0aGlzKSk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oYFRoZSBtb2R1bGUgJHttb2R1bGVOYW1lfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgfVxufTtcblxuc3MuaW5pdEJ5U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgJCgnYm9keScpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICB9KTtcbn07XG5cbi8vIGluaXQgbWV0aG9kXG5zcy5pbml0ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAobW9kdWxlTmFtZSkge1xuICAgICAgICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgJCgnYm9keScpLmZpbmQoYFtkYXRhLXNzLWluaXRdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgfSk7XG4gIH1cblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Jhc2Uvc3MuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9