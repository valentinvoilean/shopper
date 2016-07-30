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
	
	var lastMinMQ = void 0,
	    lastMaxMQ = void 0,
	    lastMQ = void 0;
	
	window.ss = window.ss || {};
	
	function submitEvents(mq) {
	  if (mq.indexOf('Min') !== _config.VALUES.outOfIndex) {
	    if (lastMinMQ) {
	      (0, _jquery2.default)(ss).trigger(lastMinMQ + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(mq + ':init');
	    lastMinMQ = mq;
	  } else if (mq.indexOf('Max') !== _config.VALUES.outOfIndex) {
	    if (lastMaxMQ) {
	      (0, _jquery2.default)(ss).trigger(lastMaxMQ + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(mq + ':init');
	    lastMaxMQ = mq;
	  } else {
	    if (lastMQ) {
	      (0, _jquery2.default)(ss).trigger(lastMQ + ':destroy');
	    }
	    (0, _jquery2.default)(ss).trigger(mq + ':init');
	    lastMQ = mq;
	  }
	}
	
	_jquery2.default.each(_config.MEDIA_QUERIES, function (key, value) {
	  if (window.matchMedia(value).matches) {
	    submitEvents(key);
	  }
	
	  window.matchMedia(value).addListener(function () {
	    submitEvents(key);
	  });
	});
	
	(0, _jquery2.default)(ss).on('smMin:init', function () {
	  console.warn('smMin initialized');
	});

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
	  xsMin: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  xsMax: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  sm: "screen and (min-width: " + VALUES_GRID.smMin + "px) and (max-width: " + VALUES_GRID.smMax + "px)",
	  smMin: "screen and (min-width: " + VALUES_GRID.smMin + "px)",
	  smMax: "screen and (max-width: " + VALUES_GRID.smMax + "px)",
	  md: "screen and (min-width: " + VALUES_GRID.mdMin + "px) and (max-width: " + VALUES_GRID.mdMax + "px)",
	  mdMin: "screen and (min-width: " + VALUES_GRID.mdMin + "px)",
	  mdMax: "screen and (max-width: " + VALUES_GRID.mdMax + "px)",
	  lg: "screen and (min-width: " + VALUES_GRID.lgMin + "px)",
	  lgMin: "screen and (min-width: " + VALUES_GRID.lgMin + "px)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBSkE7QUFNQSxJQUFHLElBQUg7O0FBSEEsZTs7Ozs7Ozs7O0FDSEE7Ozs7QUFDQTs7OztBQUVBLEtBQ0Usa0JBREY7QUFBQSxLQUVFLGtCQUZGO0FBQUEsS0FHRSxlQUhGOztBQUtBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCOztBQUVBLFVBQVMsWUFBVCxDQUFzQixFQUF0QixFQUEwQjtBQUN4QixPQUFJLEdBQUcsT0FBSCxDQUFXLEtBQVgsTUFBc0IsZUFBTyxVQUFqQyxFQUE2QztBQUMzQyxTQUFJLFNBQUosRUFBZTtBQUNiLDZCQUFFLEVBQUYsRUFBTSxPQUFOLENBQWlCLFNBQWpCO0FBQ0Q7QUFDRCwyQkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixFQUFqQjtBQUNBLGlCQUFZLEVBQVo7QUFFRCxJQVBELE1BT08sSUFBSSxHQUFHLE9BQUgsQ0FBVyxLQUFYLE1BQXNCLGVBQU8sVUFBakMsRUFBNkM7QUFDbEQsU0FBSSxTQUFKLEVBQWU7QUFDYiw2QkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixTQUFqQjtBQUNEO0FBQ0QsMkJBQUUsRUFBRixFQUFNLE9BQU4sQ0FBaUIsRUFBakI7QUFDQSxpQkFBWSxFQUFaO0FBRUQsSUFQTSxNQU9BO0FBQ0wsU0FBSSxNQUFKLEVBQVk7QUFDViw2QkFBRSxFQUFGLEVBQU0sT0FBTixDQUFpQixNQUFqQjtBQUNEO0FBQ0QsMkJBQUUsRUFBRixFQUFNLE9BQU4sQ0FBaUIsRUFBakI7QUFDQSxj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QVIsQ0FBYyxrREFBZDtBQUNEO0FBQ0YsSUF0QkQsTUF1Qks7QUFDSCwyQkFBRSxNQUFGLEVBQVUsSUFBVixtQkFBaUMsSUFBakMsQ0FBc0MsWUFBWTtBQUNoRCxXQUFJLGFBQWEsc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxTQUFiLENBQWpCO0FBQ0EsVUFBRyxtQkFBSCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixFQUFrQyxVQUFsQyxFQUE4QyxTQUE5QztBQUNELE1BSEQ7QUFJRDtBQUVGLEVBL0JELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0ICdjb21wb25lbnRzL21lZGlhUXVlcmllcyc7XG5cbi8vIGltcG9ydCBiYXNlXG5pbXBvcnQgJ2Jhc2Uvc3MnO1xuXG5zcy5pbml0KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7TUVESUFfUVVFUklFUywgVkFMVUVTfSBmcm9tICcuL2NvbmZpZyc7XG5cbmxldFxuICBsYXN0TWluTVEsXG4gIGxhc3RNYXhNUSxcbiAgbGFzdE1RO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbmZ1bmN0aW9uIHN1Ym1pdEV2ZW50cyhtcSkge1xuICBpZiAobXEuaW5kZXhPZignTWluJykgIT09IFZBTFVFUy5vdXRPZkluZGV4KSB7XG4gICAgaWYgKGxhc3RNaW5NUSkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHtsYXN0TWluTVF9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgJChzcykudHJpZ2dlcihgJHttcX06aW5pdGApO1xuICAgIGxhc3RNaW5NUSA9IG1xO1xuXG4gIH0gZWxzZSBpZiAobXEuaW5kZXhPZignTWF4JykgIT09IFZBTFVFUy5vdXRPZkluZGV4KSB7XG4gICAgaWYgKGxhc3RNYXhNUSkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHtsYXN0TWF4TVF9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgJChzcykudHJpZ2dlcihgJHttcX06aW5pdGApO1xuICAgIGxhc3RNYXhNUSA9IG1xO1xuXG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhc3RNUSkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHtsYXN0TVF9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgJChzcykudHJpZ2dlcihgJHttcX06aW5pdGApO1xuICAgIGxhc3RNUSA9IG1xO1xuICB9XG59XG5cbiQuZWFjaChNRURJQV9RVUVSSUVTLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAod2luZG93Lm1hdGNoTWVkaWEodmFsdWUpLm1hdGNoZXMpIHtcbiAgICBzdWJtaXRFdmVudHMoa2V5KTtcbiAgfVxuXG4gIHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgc3VibWl0RXZlbnRzKGtleSk7XG4gIH0pO1xufSk7XG5cbiQoc3MpLm9uKCdzbU1pbjppbml0JywgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUud2Fybignc21NaW4gaW5pdGlhbGl6ZWQnKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IFZBTFVFUyA9IHtcbiAgb3V0T2ZJbmRleDogLTFcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0ge1xuICB4czogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICB4c01pbjogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICB4c01heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbTogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgc21NYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWQ6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIG1kTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KWAsXG4gIG1kTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWAsXG4gIGxnTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWBcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lZGlhUXVlcmllcy9jb25maWcuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG5zcy5jaGVja0lmTW9kdWxlRXhpc3RzID0gZnVuY3Rpb24gKG1vZHVsZU5hbWUsIGNiKSB7XG4gIHRyeSB7XG4gICAgc3NbbW9kdWxlTmFtZV1bY2JdKCQodGhpcykpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgbW9kdWxlICR7bW9kdWxlTmFtZX0gZG9lcyBub3QgZXhpc3QhYCk7XG4gIH1cbn07XG5cbnNzLmluaXRCeVN0YXRlID0gKHN0YXRlKSA9PiB7XG4gICQoJ2JvZHknKS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICBzcy5jaGVja0lmTW9kdWxlRXhpc3RzLmNhbGwodGhpcywgbW9kdWxlTmFtZSwgJ2luaXQnKTtcbiAgfSk7XG59O1xuXG4vLyBpbml0IG1ldGhvZFxuc3MuaW5pdCA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG5cbiAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAvLyBpbml0aWFsaXplIGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluaXRdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBzcy5jaGVja0lmTW9kdWxlRXhpc3RzLmNhbGwodGhpcywgbW9kdWxlTmFtZSwgJ2luaXQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIGlmIChtb2R1bGVOYW1lKSB7XG4gICAgICAgICAgICBzcy5jaGVja0lmTW9kdWxlRXhpc3RzLmNhbGwodGhpcywgbW9kdWxlTmFtZSwgJ2luaXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAvLyB3aWxsIGJlIGluaXRpYWxpemVkIGRlcGVuZGluZyBvbiB0aGUgZGF0YS1zcy1zdGF0ZSB2YWx1ZVxuICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHNzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHNzLmluaXRCeVN0YXRlKCdvbkxvYWQnKSk7XG4gIH1cbn07XG5cbi8vZGVzdHJveSBtZXRob2RcbnNzLmRlc3Ryb3kgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnZGVzdHJveScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBkZXN0cm95ICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnZGVzdHJveScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgICQoJ2JvZHknKS5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnZGVzdHJveScpO1xuICAgIH0pO1xuICB9XG5cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL3NzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==