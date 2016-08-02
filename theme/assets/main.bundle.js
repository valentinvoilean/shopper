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
	
	__webpack_require__(301);
	
	__webpack_require__(303);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import components
	ss.init();
	
	// import base
	
	
	(0, _jquery2.default)(ss).on('smMin', function () {
	  console.warn('smMin');
	});

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(299);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _config = __webpack_require__(302);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.ss = window.ss || {};
	
	/**
	 * MediaQuery module
	 * Used to detect current media query
	 *
	 * Usage:
	 * $(ss).on(MEDIA_QUERY, callback );
	 *
	 * Where:
	 *    MEDIA_QUERY can be : 'xs', 'sm', 'md', 'lg',
	 *                         'xsMin', 'smMin', 'mdMin','lgMin',
	 *                         'xsMax', 'smMax', 'mdMax', 'lgMax'
	 *    Callback: function name or anonymous function
	 *
	 *    e.g. :
	 *
	 *    function sayGoodbye = { alert('goodbye') }
	 *    $(ss).on('smMin', sayGoodbye })
	 *
	 *    or
	 *
	 *    $(ss).on('smMin', function() { alert('hello'); })
	 *
	 *
	 * @type {{new()=>{_handleOrientationChange: ((mql, index?)), destroy: (())}}}
	 */
	
	ss.MediaQueries = function () {
	  function _class() {
	    var _this = this;
	
	    _classCallCheck(this, _class);
	
	    _jquery2.default.each(_config.MEDIA_QUERIES, function (index, value) {
	      var mql = window.matchMedia(value);
	
	      // the default matchmedia's addListener method doesn't support extra parameters,
	      // therefore we need another extra function that can pass the current breakpoint name
	      mql.addListener(_this.addMQListener = function (mql) {
	        _this._handleMQChange(mql, index);
	      });
	
	      _this._handleMQChange(mql, index);
	    });
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      var _this2 = this;
	
	      _jquery2.default.each(_config.MEDIA_QUERIES, function (index, value) {
	        window.matchMedia(value).removeListener(_this2.addMQListener);
	      });
	    }
	
	    /////////////////////
	    // Private Methods //
	    /////////////////////
	
	  }, {
	    key: '_handleMQChange',
	    value: function _handleMQChange(mql, index) {
	      if (mql.matches) {
	        (0, _jquery2.default)(ss).trigger(index);
	      }
	    }
	  }]);
	
	  return _class;
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
	
	var MEDIA_QUERIES = exports.MEDIA_QUERIES = {
	  xs: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  sm: "screen and (min-width: " + VALUES_GRID.smMin + "px) and (max-width: " + VALUES_GRID.smMax + "px)",
	  md: "screen and (min-width: " + VALUES_GRID.mdMin + "px) and (max-width: " + VALUES_GRID.mdMax + "px)",
	  lg: "screen and (min-width: " + VALUES_GRID.lgMin + "px)",
	  xsMin: "screen and (min-width: " + VALUES_GRID.xsMin + "px)",
	  smMin: "screen and (min-width: " + VALUES_GRID.smMin + "px)",
	  mdMin: "screen and (min-width: " + VALUES_GRID.mdMin + "px)",
	  lgMin: "screen and (min-width: " + VALUES_GRID.lgMin + "px)",
	  xsMax: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  smMax: "screen and (max-width: " + VALUES_GRID.smMax + "px)",
	  mdMax: "screen and (max-width: " + VALUES_GRID.mdMax + "px)"
	};

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(299);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.ss = window.ss || {};
	
	ss.instances = [];
	
	ss.checkIfClassExists = function (className) {
	  try {
	    (0, _jquery2.default)(this).attr('data-ss-instance', ss.instances.length);
	    ss.instances.push(new ss[className]((0, _jquery2.default)(this)));
	  } catch (e) {
	    console.warn('The class ' + className + ' does not exist!');
	  }
	};
	
	ss.initByState = function (state) {
	  (0, _jquery2.default)(document).find('[data-ss-state="' + state + '"]').each(function () {
	    var className = (0, _jquery2.default)(this).data('ss-init');
	    ss.checkIfClassExists.call(this, className);
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
	          var className = (0, _jquery2.default)(this).data('ss-init');
	          ss.checkIfClassExists.call(this, className);
	        });
	      } else {
	        // initialize  the current element passed
	        $container.each(function () {
	          var className = (0, _jquery2.default)(this).data('ss-init');
	          if (className) {
	            ss.checkIfClassExists.call(this, className);
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
	
	  var destroyInstance = function destroyInstance() {
	    var currentInstance = (0, _jquery2.default)(this).data('ss-instance');
	    ss.instances[currentInstance].destroy();
	    (0, _jquery2.default)(this).removeAttr('data-ss-instance');
	    ss.instances[currentInstance] = null;
	  };
	
	  if ($container) {
	    if ($container instanceof _jquery2.default) {
	      if (deepScan) {
	        // destroy all modules from the jQuery DOM element
	        $container.find('[data-ss-instance]').each(destroyInstance);
	      } else {
	        // destroy  the current element passed
	        $container.each(destroyInstance);
	      }
	    } else {
	      console.error('The parameter passed it is not a jQuery element!');
	    }
	  } else {
	    (0, _jquery2.default)(document).find('[data-ss-instance]').each(destroyInstance);
	  }
	};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFHQTs7OztBQUpBO0FBTUEsSUFBRyxJQUFIOztBQUhBOzs7QUFLQSx1QkFBRSxFQUFGLEVBQU0sRUFBTixDQUFTLE9BQVQsRUFBa0IsWUFBVztBQUMzQixXQUFRLElBQVIsQ0FBYSxPQUFiO0FBQ0QsRUFGRCxFOzs7Ozs7Ozs7OztBQ1ZBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxJQUFHLFlBQUg7QUFFRSxxQkFBYztBQUFBOztBQUFBOztBQUNaLHNCQUFFLElBQUYsd0JBQXNCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdEMsV0FBSSxNQUFNLE9BQU8sVUFBUCxDQUFrQixLQUFsQixDQUFWOztBQUVBO0FBQ0E7QUFDQSxXQUFJLFdBQUosQ0FBZ0IsTUFBSyxhQUFMLEdBQXFCLFVBQUMsR0FBRCxFQUFTO0FBQzVDLGVBQUssZUFBTCxDQUFxQixHQUFyQixFQUEwQixLQUExQjtBQUNELFFBRkQ7O0FBSUEsYUFBSyxlQUFMLENBQXFCLEdBQXJCLEVBQTBCLEtBQTFCO0FBQ0QsTUFWRDtBQVdEOztBQWRIO0FBQUE7QUFBQSwrQkFnQlk7QUFBQTs7QUFDUix3QkFBRSxJQUFGLHdCQUFzQixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3RDLGdCQUFPLFVBQVAsQ0FBa0IsS0FBbEIsRUFBeUIsY0FBekIsQ0FBd0MsT0FB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blxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuXG4vLyBpbXBvcnQgYmFzZVxuaW1wb3J0ICdiYXNlL3NzJztcblxuc3MuaW5pdCgpO1xuXG4kKHNzKS5vbignc21NaW4nLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS53YXJuKCdzbU1pbicpO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7TUVESUFfUVVFUklFU30gZnJvbSAnLi9jb25maWcnO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbi8qKlxuICogTWVkaWFRdWVyeSBtb2R1bGVcbiAqIFVzZWQgdG8gZGV0ZWN0IGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAqXG4gKiBVc2FnZTpcbiAqICQoc3MpLm9uKE1FRElBX1FVRVJZLCBjYWxsYmFjayApO1xuICpcbiAqIFdoZXJlOlxuICogICAgTUVESUFfUVVFUlkgY2FuIGJlIDogJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01pbicsICdzbU1pbicsICdtZE1pbicsJ2xnTWluJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01heCcsICdzbU1heCcsICdtZE1heCcsICdsZ01heCdcbiAqICAgIENhbGxiYWNrOiBmdW5jdGlvbiBuYW1lIG9yIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqICAgIGUuZy4gOlxuICpcbiAqICAgIGZ1bmN0aW9uIHNheUdvb2RieWUgPSB7IGFsZXJ0KCdnb29kYnllJykgfVxuICogICAgJChzcykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJChzcykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCdoZWxsbycpOyB9KVxuICpcbiAqXG4gKiBAdHlwZSB7e25ldygpPT57X2hhbmRsZU9yaWVudGF0aW9uQ2hhbmdlOiAoKG1xbCwgaW5kZXg/KSksIGRlc3Ryb3k6ICgoKSl9fX1cbiAqL1xuXG5zcy5NZWRpYVF1ZXJpZXMgPSBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSk7XG5cbiAgICAgIC8vIHRoZSBkZWZhdWx0IG1hdGNobWVkaWEncyBhZGRMaXN0ZW5lciBtZXRob2QgZG9lc24ndCBzdXBwb3J0IGV4dHJhIHBhcmFtZXRlcnMsXG4gICAgICAvLyB0aGVyZWZvcmUgd2UgbmVlZCBhbm90aGVyIGV4dHJhIGZ1bmN0aW9uIHRoYXQgY2FuIHBhc3MgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBuYW1lXG4gICAgICBtcWwuYWRkTGlzdGVuZXIodGhpcy5hZGRNUUxpc3RlbmVyID0gKG1xbCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVNUUNoYW5nZShtcWwsIGluZGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVNUUNoYW5nZShtcWwsIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKS5yZW1vdmVMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByaXZhdGUgTWV0aG9kcyAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBfaGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCkge1xuICAgIGlmIChtcWwubWF0Y2hlcykge1xuICAgICAgJChzcykudHJpZ2dlcihpbmRleCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc21NYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmluc3RhbmNlcyA9IFtdO1xuXG5zcy5jaGVja0lmQ2xhc3NFeGlzdHMgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gIHRyeSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNzLWluc3RhbmNlJywgc3MuaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgc3MuaW5zdGFuY2VzLnB1c2gobmV3IHNzW2NsYXNzTmFtZV0oJCh0aGlzKSkpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICB9XG59O1xuXG5zcy5pbml0QnlTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLy8gaW5pdCBtZXRob2RcbnNzLmluaXQgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRJbnN0YW5jZSA9ICQodGhpcykuZGF0YSgnc3MtaW5zdGFuY2UnKTtcbiAgICBzcy5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNzLWluc3RhbmNlJyk7XG4gICAgc3MuaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0gPSBudWxsO1xuICB9O1xuXG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gZGVzdHJveSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL3NzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==