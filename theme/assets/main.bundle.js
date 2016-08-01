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
	      mql.addListener(function (mql) {
	        return _this._handleOrientationChange(mql, index);
	      });
	      _this._handleOrientationChange(mql, index);
	    });
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      _jquery2.default.each(_config.MEDIA_QUERIES, function (index, value) {
	        window.matchMedia(value).removeListener();
	      });
	    }
	
	    /////////////////////
	    // Private Methods //
	    /////////////////////
	
	  }, {
	    key: '_handleOrientationChange',
	    value: function _handleOrientationChange(mql, index) {
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
	    console.error(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFHQTs7OztBQUpBO0FBTUEsSUFBRyxJQUFIOztBQUhBOzs7QUFLQSx1QkFBRSxFQUFGLEVBQU0sRUFBTixDQUFTLE9BQVQsRUFBa0IsWUFBVztBQUMzQixXQUFRLElBQVIsQ0FBYSxPQUFiO0FBQ0QsRUFGRCxFOzs7Ozs7Ozs7OztBQ1ZBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxJQUFHLFlBQUg7QUFFRSxxQkFBYztBQUFBOztBQUFBOztBQUNaLHNCQUFFLElBQUYsd0JBQXNCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdEMsV0FBSSxNQUFNLE9BQU8sVUFBUCxDQUFrQixLQUFsQixDQUFWO0FBQ0EsV0FBSSxXQUFKLENBQWdCLFVBQUMsR0FBRDtBQUFBLGdCQUFRLE1BQUssd0JBQUwsQ0FBOEIsR0FBOUIsRUFBbUMsS0FBbkMsQ0FBUjtBQUFBLFFBQWhCO0FBQ0EsYUFBSyx3QkFBTCxDQUE4QixHQUE5QixFQUFtQyxLQUFuQztBQUNELE1BSkQ7QUFLRDs7QUFSSDtBQUFBO0FBQUEsK0JBVVk7QUFDUix3QkFBRSxJQUFGLHdCQUFzQixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3RDLGdCQUFPLFVBQVAsQ0FBa0IsS0FBbEIsRUFBeUIsY0FBekI7QUFDRCxRQUZEO0FBR0Q7O0FBRUQ7QUFDQTtBQUNBOztBQWxC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QUFRLEtBQVIsQ0FBYyxrREFBZDtBQUNEO0FBQ0YsSUF2QkQsTUF1Qk87QUFDTDtBQUNBO0FBQ0EsMkJBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0I7QUFBQSxjQUFNLEdBQUcsV0FBSCxDQUFlLFNBQWYsQ0FBTjtBQUFBLE1BQWxCO0FBQ0EsMkJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxNQUFiLEVBQXFCO0FBQUEsY0FBTSxHQUFHLFdBQUgsQ0FBZSxRQUFmLENBQU47QUFBQSxNQUFyQjtBQUNEO0FBQ0YsRUE5QkQ7O0FBZ0NBO0FBQ0EsSUFBRyxPQUFILEdBQWEsVUFBQyxVQUFELEVBQWtDO0FBQUEsT0FBckIsUUFBcUIseURBQVYsS0FBVTs7QUFDN0MsT0FBSSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBWTtBQUNoQyxTQUFJLGtCQUFrQixzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGFBQWIsQ0FBdEI7QUFDQSxRQUFHLFNBQUgsQ0FBYSxlQUFiLEVBQThCLE9BQTlCO0FBQ0EsMkJBQUUsSUFBRixFQUFRLFVBQVIsQ0FBbUIsa0JBQW5CO0FBQ0EsUUFBRyxTQUFILENBQWEsZUFBYixJQUFnQyxJQUFoQztBQUNELElBTEQ7O0FBT0EsT0FBSSxVQUFKLEVBQWdCO0FBQ2QsU0FBSSxzQ0FBSixFQUE2QjtBQUMzQixXQUFJLFFBQUosRUFBYztBQUNaO0FBQ0Esb0JBQVcsSUFBWCx1QkFBc0MsSUFBdEMsQ0FBMkMsZUFBM0M7QUFDRCxRQUhELE1BSUs7QUFDSDtBQUNBLG9CQUFXLElBQVgsQ0FBZ0IsZUFBaEI7QUFDRDtBQUNGLE1BVEQsTUFTTztBQUNMLGVBQVEsS0FBUixDQUFjLGtEQUFkO0FBQ0Q7QUFDRixJQWJELE1BY0s7QUFDSCwyQkFBRSxRQUFGLEVBQVksSUFBWix1QkFBdUMsSUFBdkMsQ0FBNEMsZUFBNUM7QUFDRDtBQUNGLEVBekJELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0ICdjb21wb25lbnRzL21lZGlhUXVlcmllcyc7XG5cbi8vIGltcG9ydCBiYXNlXG5pbXBvcnQgJ2Jhc2Uvc3MnO1xuXG5zcy5pbml0KCk7XG5cbiQoc3MpLm9uKCdzbU1pbicsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLndhcm4oJ3NtTWluJyk7IFxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7TUVESUFfUVVFUklFU30gZnJvbSAnLi9jb25maWcnO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbi8qKlxuICogTWVkaWFRdWVyeSBtb2R1bGVcbiAqIFVzZWQgdG8gZGV0ZWN0IGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAqXG4gKiBVc2FnZTpcbiAqICQoc3MpLm9uKE1FRElBX1FVRVJZLCBjYWxsYmFjayApO1xuICpcbiAqIFdoZXJlOlxuICogICAgTUVESUFfUVVFUlkgY2FuIGJlIDogJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01pbicsICdzbU1pbicsICdtZE1pbicsJ2xnTWluJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01heCcsICdzbU1heCcsICdtZE1heCcsICdsZ01heCdcbiAqICAgIENhbGxiYWNrOiBmdW5jdGlvbiBuYW1lIG9yIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqICAgIGUuZy4gOlxuICpcbiAqICAgIGZ1bmN0aW9uIHNheUdvb2RieWUgPSB7IGFsZXJ0KCdnb29kYnllJykgfVxuICogICAgJChzcykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJChzcykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCdoZWxsbycpOyB9KVxuICpcbiAqXG4gKiBAdHlwZSB7e25ldygpPT57X2hhbmRsZU9yaWVudGF0aW9uQ2hhbmdlOiAoKG1xbCwgaW5kZXg/KSksIGRlc3Ryb3k6ICgoKSl9fX1cbiAqL1xuXG5zcy5NZWRpYVF1ZXJpZXMgPSBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIoKG1xbCk9PiB0aGlzLl9oYW5kbGVPcmllbnRhdGlvbkNoYW5nZShtcWwsIGluZGV4KSk7XG4gICAgICB0aGlzLl9oYW5kbGVPcmllbnRhdGlvbkNoYW5nZShtcWwsIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKS5yZW1vdmVMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByaXZhdGUgTWV0aG9kcyAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBfaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UobXFsLCBpbmRleCkge1xuICAgIGlmIChtcWwubWF0Y2hlcykge1xuICAgICAgJChzcykudHJpZ2dlcihpbmRleCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc21NYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmluc3RhbmNlcyA9IFtdO1xuXG5zcy5jaGVja0lmQ2xhc3NFeGlzdHMgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gIHRyeSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNzLWluc3RhbmNlJywgc3MuaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgc3MuaW5zdGFuY2VzLnB1c2gobmV3IHNzW2NsYXNzTmFtZV0oJCh0aGlzKSkpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gIH1cbn07XG5cbnNzLmluaXRCeVN0YXRlID0gKHN0YXRlKSA9PiB7XG4gICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vLyBpbml0IG1ldGhvZFxuc3MuaW5pdCA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG5cbiAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAvLyBpbml0aWFsaXplIGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluaXRdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgbm8gcGFyYW0gcGFzc2VkLCBhbGwgdGhlIG1vZHVsZXMgZnJvbSB0aGUgRE9NXG4gICAgLy8gd2lsbCBiZSBpbml0aWFsaXplZCBkZXBlbmRpbmcgb24gdGhlIGRhdGEtc3Mtc3RhdGUgdmFsdWVcbiAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBzcy5pbml0QnlTdGF0ZSgnb25SZWFkeScpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiBzcy5pbml0QnlTdGF0ZSgnb25Mb2FkJykpO1xuICB9XG59O1xuXG4vL2Rlc3Ryb3kgbWV0aG9kXG5zcy5kZXN0cm95ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgbGV0IGRlc3Ryb3lJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudEluc3RhbmNlID0gJCh0aGlzKS5kYXRhKCdzcy1pbnN0YW5jZScpO1xuICAgIHNzLmluc3RhbmNlc1tjdXJyZW50SW5zdGFuY2VdLmRlc3Ryb3koKTtcbiAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnKTtcbiAgICBzcy5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXSA9IG51bGw7XG4gIH07XG5cbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcbiAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAvLyBkZXN0cm95IGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluc3RhbmNlXWApLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBkZXN0cm95ICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLWluc3RhbmNlXWApLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Jhc2Uvc3MuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9