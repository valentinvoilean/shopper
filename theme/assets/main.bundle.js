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
	
	__webpack_require__(302);
	
	// import components
	ss.init();
	
	// import base

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _config = __webpack_require__(300);
	
	var _enquire = __webpack_require__(301);
	
	var _enquire2 = _interopRequireDefault(_enquire);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var oldMediaQuery = void 0,
	    registerBreakpoints = function registerBreakpoints(mqs) {
	  var _loop = function _loop(i, mqsLength) {
	    _enquire2.default.register(_config.MEDIA_QUERIES[mqs[i]], function () {
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

/***/ 300:
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

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(303);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBSkE7QUFNQSxJQUFHLElBQUg7O0FBSEEsZTs7Ozs7Ozs7O0FDSEE7O0FBQ0E7Ozs7OztBQUVBLEtBQ0Usc0JBREY7QUFBQSxLQUdFLHNCQUFzQixTQUF0QixtQkFBc0IsQ0FBQyxHQUFELEVBQVM7QUFBQSw4QkFDcEIsQ0FEb0IsRUFDYixTQURhO0FBRTNCLHVCQUNHLFFBREgsQ0FDWSxzQkFBYyxJQUFJLENBQUosQ0FBZCxDQURaLEVBQ21DLFlBQU07QUFDckMsV0FBSSxpQkFBaUIsa0JBQWtCLElBQUksQ0FBSixDQUF2QyxFQUErQztBQUM3QyxpQkFBUSxJQUFSLGNBQXdCLGFBQXhCO0FBQ0Q7O0FBRUQsdUJBQWdCLElBQUksQ0FBSixDQUFoQjs7QUFFQSxlQUFRLElBQVIsV0FBcUIsYUFBckI7QUFDRCxNQVRILEVBU0ssSUFUTDtBQUYyQjs7QUFDN0IsUUFBSyxJQUFJLElBQUksQ0FBUixFQUFXLFlBQVksSUFBSSxNQUFoQyxFQUF3QyxJQUFJLFNBQTVDLEVBQXVELEdBQXZELEVBQTREO0FBQUEsV0FBbkQsQ0FBbUQsRUFBNUMsU0FBNEM7QUFXM0Q7QUFDRixFQWhCSDs7QUFrQkEscUJBQW9CLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQXBCLEU7Ozs7Ozs7Ozs7OztBQ3JCTyxLQUFNLG9DQUFjO0FBQ3pCLFVBQU8sQ0FEa0I7QUFFekIsVUFBTyxHQUZrQjtBQUd6QixVQUFPLEdBSGtCO0FBSXpCLFVBQU8sSUFK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ZCxTQUFJLHNDQUFKLEVBQTZCO0FBQzNCLFdBQUksUUFBSixFQUFjO0FBQ1o7QUFDQSxvQkFBVyxJQUFYLG1CQUFrQyxJQUFsQyxDQUF1QyxZQUFZO0FBQ2pELGVBQUksYUFBYSxzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFNBQWIsQ0FBakI7QUFDQSxjQUFHLG1CQUFILENBQXVCLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLFVBQWxDLEVBQThDLFNBQTlDO0FBQ0QsVUFIRDtBQUlELFFBTkQsTUFPSztBQUNIO0FBQ0Esb0JBQVcsSUFBWCxDQUFnQixZQUFZO0FBQzFCLGVBQUksYUFBYSxzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFNBQWIsQ0FBakI7QUFDQSxlQUFJLFVBQUosRUFBZ0I7QUFDZCxnQkFBRyxtQkFBSCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixFQUFrQyxVQUFsQyxFQUE4QyxTQUE5QztBQUNEO0FBQ0YsVUFMRDtBQU1EO0FBRUYsTUFsQkQsTUFrQk87QUFDTCxlQUFRLEtBQVIsQ0FBYyxrREFBZDtBQUNEO0FBQ0YsSUF0QkQsTUF1Qks7QUFDSCwyQkFBRSxNQUFGLEVBQVUsSUFBVixtQkFBaUMsSUFBakMsQ0FBc0MsWUFBWTtBQUNoRCxXQUFJLGFBQWEsc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxTQUFiLENBQWpCO0FBQ0EsVUFBRyxtQkFBSCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixFQUFrQyxVQUFsQyxFQUE4QyxTQUE5QztBQUNELE1BSEQ7QUFJRDtBQUVGLEVBL0JELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0ICdjb21wb25lbnRzL21lZGlhUXVlcmllcyc7XG5cbi8vIGltcG9ydCBiYXNlXG5pbXBvcnQgJ2Jhc2Uvc3MnO1xuXG5zcy5pbml0KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0IHtNRURJQV9RVUVSSUVTfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgZW5xdWlyZSBmcm9tICdlbnF1aXJlLmpzJztcblxubGV0XG4gIG9sZE1lZGlhUXVlcnksXG5cbiAgcmVnaXN0ZXJCcmVha3BvaW50cyA9IChtcXMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMCwgbXFzTGVuZ3RoID0gbXFzLmxlbmd0aDsgaSA8IG1xc0xlbmd0aDsgaSsrKSB7XG4gICAgICBlbnF1aXJlXG4gICAgICAgIC5yZWdpc3RlcihNRURJQV9RVUVSSUVTW21xc1tpXV0sICgpID0+IHtcbiAgICAgICAgICBpZiAob2xkTWVkaWFRdWVyeSAmJiBvbGRNZWRpYVF1ZXJ5ICE9PSBtcXNbaV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgZGVzdHJveSAke29sZE1lZGlhUXVlcnl9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2xkTWVkaWFRdWVyeSA9IG1xc1tpXTtcblxuICAgICAgICAgIGNvbnNvbGUud2FybihgaW5pdCAke29sZE1lZGlhUXVlcnl9YCk7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cbiAgfTtcblxucmVnaXN0ZXJCcmVha3BvaW50cyhbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJ10pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHhzTWluOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHhzTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBzbU1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmNoZWNrSWZNb2R1bGVFeGlzdHMgPSBmdW5jdGlvbiAobW9kdWxlTmFtZSwgY2IpIHtcbiAgdHJ5IHtcbiAgICBzc1ttb2R1bGVOYW1lXVtjYl0oJCh0aGlzKSk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oYFRoZSBtb2R1bGUgJHttb2R1bGVOYW1lfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgfVxufTtcblxuc3MuaW5pdEJ5U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgJCgnYm9keScpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICB9KTtcbn07XG5cbi8vIGluaXQgbWV0aG9kXG5zcy5pbml0ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgIHNzLmNoZWNrSWZNb2R1bGVFeGlzdHMuY2FsbCh0aGlzLCBtb2R1bGVOYW1lLCAnaW5pdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAobW9kdWxlTmFtZSkge1xuICAgICAgICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgJCgnYm9keScpLmZpbmQoYFtkYXRhLXNzLWluaXRdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbW9kdWxlTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgc3MuY2hlY2tJZk1vZHVsZUV4aXN0cy5jYWxsKHRoaXMsIG1vZHVsZU5hbWUsICdkZXN0cm95Jyk7XG4gICAgfSk7XG4gIH1cblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Jhc2Uvc3MuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9