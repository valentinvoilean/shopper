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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
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
	 * @type {{init, destroy}}
	 */
	
	ss.MediaQueries = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    this.mediaQueries = {};
	    this.breakpoints = {};
	
	    for (var i = 0, keysLength = Object.keys(_config.MEDIA_QUERIES).length; i < keysLength; i++) {
	      this._updateValues(i);
	      this._addEventListeners();
	      this._checkCurrentMediaQuery();
	    }
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      for (var i = 0, keysLength = Object.keys(_config.MEDIA_QUERIES).length; i < keysLength; i++) {
	        this._updateValues();
	        this._removeEventListeners();
	      }
	    }
	
	    /////////////////////
	    // Private Methods //
	    /////////////////////
	
	  }, {
	    key: '_addEventListeners',
	    value: function _addEventListeners() {
	      var _self = this;
	      window.matchMedia(this.mediaQueries.currentMinMQ).addListener(function () {
	        return _self._triggerMinBPEvents;
	      });
	      window.matchMedia(this.mediaQueries.currentMQ).addListener(function () {
	        return _self._triggerCurrentBPEvents();
	      });
	      window.matchMedia(this.mediaQueries.currentMaxMQ).addListener(function () {
	        return _self._triggerMaxBPEvents;
	      });
	    }
	  }, {
	    key: '_removeEventListeners',
	    value: function _removeEventListeners() {
	      var _self = this;
	      window.matchMedia(this.mediaQueries.currentMinMQ).removeListener(function () {
	        return _self._triggerMinBPEvents;
	      });
	      window.matchMedia(this.mediaQueries.currentMQ).removeListener(function () {
	        return _self._triggerCurrentBPEvents();
	      });
	      window.matchMedia(this.mediaQueries.currentMaxMQ).removeListener(function () {
	        return _self._triggerMaxBPEvents;
	      });
	    }
	  }, {
	    key: '_triggerMinBPEvents',
	    value: function _triggerMinBPEvents() {
	      if (this.breakpoints.previousMaxBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.previousMaxBP + ':destroy');
	        console.log(this.breakpoints.previousMaxBP + ':destroy');
	      }
	      if (this.breakpoints.nextMinBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.nextMinBP + ':destroy');
	        console.log(this.breakpoints.nextMinBP + ':destroy');
	      }
	      if (this.breakpoints.previousBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.previousBP + ':destroy');
	        console.log(this.breakpoints.previousBP + ':destroy');
	      }
	      (0, _jquery2.default)(ss).trigger('' + this.breakpoints.currentMinBP);
	      console.log('' + this.breakpoints.currentMinBP);
	    }
	  }, {
	    key: '_triggerCurrentBPEvents',
	    value: function _triggerCurrentBPEvents() {
	      if (this.breakpoints.previousBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.previousBP + ':destroy');
	        console.log(this.breakpoints.previousBP + ':destroy');
	      }
	      if (this.breakpoints.previousMaxBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.previousMaxBP + ':destroy');
	        console.log(this.breakpoints.previousMaxBP + ':destroy');
	      }
	      if (this.breakpoints.nextMinBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.nextMinBP + ':destroy');
	        console.log(this.breakpoints.nextMinBP + ':destroy');
	      }
	      if (this.breakpoints.nextBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.nextBP + ':destroy');
	        console.log(this.breakpoints.nextBP + ':destroy');
	      }
	      (0, _jquery2.default)(ss).trigger('' + this.breakpoints.currentBP);
	      console.log('' + this.breakpoints.currentBP);
	    }
	  }, {
	    key: '_triggerMaxBPEvents',
	    value: function _triggerMaxBPEvents() {
	      if (this.breakpoints.previousMaxBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.previousMaxBP + ':destroy');
	        console.log(this.breakpoints.previousMaxBP + ':destroy');
	      }
	      if (this.breakpoints.nextMinBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.nextMinBP + ':destroy');
	        console.log(this.breakpoints.nextMinBP + ':destroy');
	      }
	      if (this.breakpoints.nextBP !== null) {
	        (0, _jquery2.default)(ss).trigger(this.breakpoints.nextBP + ':destroy');
	        console.log(this.breakpoints.nextBP + ':destroy');
	      }
	      (0, _jquery2.default)(ss).trigger('' + this.breakpoints.currentMaxBP);
	      console.log('' + this.breakpoints.currentMaxBP);
	    }
	  }, {
	    key: '_checkCurrentMediaQuery',
	    value: function _checkCurrentMediaQuery() {
	      if (window.matchMedia(this.mediaQueries.currentMinMQ).matches) {
	        //this._triggerMinBPEvents();
	      }
	
	      if (window.matchMedia(this.mediaQueries.currentMQ).matches) {
	        this._triggerCurrentBPEvents();
	      }
	
	      if (window.matchMedia(this.mediaQueries.currentMaxMQ).matches) {
	        //this._triggerMaxBPEvents();
	      }
	    }
	  }, {
	    key: '_updateValues',
	    value: function _updateValues(i) {
	      this.breakpoints.currentMinBP = Object.keys(_config.MEDIA_QUERIES_MIN)[i];
	      this.mediaQueries.currentMinMQ = _config.MEDIA_QUERIES_MIN[this.breakpoints.currentMinBP];
	      this.breakpoints.nextMinBP = i < 3 ? Object.keys(_config.MEDIA_QUERIES_MIN)[i + 1] : null;
	
	      this.breakpoints.currentBP = Object.keys(_config.MEDIA_QUERIES)[i];
	      this.mediaQueries.currentMQ = _config.MEDIA_QUERIES[this.breakpoints.currentBP];
	      this.breakpoints.previousBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES)[i - 1] : null;
	      this.breakpoints.nextBP = i < 3 ? Object.keys(_config.MEDIA_QUERIES)[i + 1] : null;
	
	      this.breakpoints.currentMaxBP = Object.keys(_config.MEDIA_QUERIES_MAX)[i];
	      this.mediaQueries.currentMaxMQ = _config.MEDIA_QUERIES_MAX[this.breakpoints.currentMaxBP];
	      this.breakpoints.previousMaxBP = i > 0 ? Object.keys(_config.MEDIA_QUERIES_MAX)[i - 1] : null;
	    }
	  }]);
	
	  return _class;
	}();
	
	(0, _jquery2.default)(ss).on('xsMin', function () {
	  console.log('merge');
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
	    var currentInstance = (0, _jquery2.default)(this).data('ss-ss-instance');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBSkE7QUFNQSxJQUFHLElBQUg7O0FBSEEsZTs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUNBOzs7Ozs7QUFFQSxRQUFPLEVBQVAsR0FBWSxPQUFPLEVBQVAsSUFBYSxFQUF6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsSUFBRyxZQUFIO0FBRUUscUJBQWM7QUFBQTs7QUFDWixVQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxVQUFLLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsVUFBSyxJQUFJLElBQUksQ0FBUixFQUFXLGFBQWEsT0FBTyxJQUFQLHdCQUEyQixNQUF4RCxFQUFnRSxJQUFJLFVBQXBFLEVBQWdGLEdBQWhGLEVBQXFGO0FBQ25GLFlBQUssYUFBTCxDQUFtQixDQUFuQjtBQUNBLFlBQUssa0JBQUw7QUFDQSxZQUFLLHVCQUFMO0FBQ0Q7QUFDRjs7QUFYSDtBQUFBO0FBQUEsK0JBYVk7QUFDUixZQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsYUFBYSxPQUFPLElBQVAsd0JBQTJCLE1BQXhELEVBQWdFLElBQUksVUFBcEUsRUFBZ0YsR0FBaEYsRUFBcUY7QUFDbkYsY0FBSyxhQUFMO0FBQ0EsY0FBSyxxQkFBTDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBOztBQXRCRjtBQUFBO0FBQUEsMENBd0J1QjtBQUNuQixXQUFJLFFBQVEsSUFBWjtBQUNBLGNBQU8sVUFBUCxDQUFrQixLQUFLLFlBQUwsQ0FBa0IsWUFBcEMsRUFBa0QsV0FB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bmVudHNcbmltcG9ydCAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuXG4vLyBpbXBvcnQgYmFzZVxuaW1wb3J0ICdiYXNlL3NzJztcblxuc3MuaW5pdCgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVMsIE1FRElBX1FVRVJJRVNfTUlOLCBNRURJQV9RVUVSSUVTX01BWH0gZnJvbSAnLi9jb25maWcnO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbi8qKlxuICogTWVkaWFRdWVyeSBtb2R1bGVcbiAqIFVzZWQgdG8gZGV0ZWN0IGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAqXG4gKiBVc2FnZTpcbiAqICQoc3MpLm9uKE1FRElBX1FVRVJZLCBjYWxsYmFjayApO1xuICpcbiAqIFdoZXJlOlxuICogICAgTUVESUFfUVVFUlkgY2FuIGJlIDogJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01pbicsICdzbU1pbicsICdtZE1pbicsJ2xnTWluJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01heCcsICdzbU1heCcsICdtZE1heCcsICdsZ01heCdcbiAqICAgIENhbGxiYWNrOiBmdW5jdGlvbiBuYW1lIG9yIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqICAgIGUuZy4gOlxuICpcbiAqICAgIGZ1bmN0aW9uIHNheUdvb2RieWUgPSB7IGFsZXJ0KCdnb29kYnllJykgfVxuICogICAgJChzcykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJChzcykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCdoZWxsbycpOyB9KVxuICpcbiAqXG4gKiBAdHlwZSB7e2luaXQsIGRlc3Ryb3l9fVxuICovXG5cbnNzLk1lZGlhUXVlcmllcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IHt9O1xuICAgIHRoaXMuYnJlYWtwb2ludHMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBrZXlzTGVuZ3RoID0gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUykubGVuZ3RoOyBpIDwga2V5c0xlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZXMoaSk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5fY2hlY2tDdXJyZW50TWVkaWFRdWVyeSgpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGtleXNMZW5ndGggPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTKS5sZW5ndGg7IGkgPCBrZXlzTGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlcygpO1xuICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgIHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNaW5NUSkuYWRkTGlzdGVuZXIoKCkgPT4gX3NlbGYuX3RyaWdnZXJNaW5CUEV2ZW50cyk7XG4gICAgd2luZG93Lm1hdGNoTWVkaWEodGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1RKS5hZGRMaXN0ZW5lcigoKSA9PiBfc2VsZi5fdHJpZ2dlckN1cnJlbnRCUEV2ZW50cygpKTtcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLm1lZGlhUXVlcmllcy5jdXJyZW50TWF4TVEpLmFkZExpc3RlbmVyKCgpID0+IF9zZWxmLl90cmlnZ2VyTWF4QlBFdmVudHMpO1xuICB9XG5cbiAgX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgd2luZG93Lm1hdGNoTWVkaWEodGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1pbk1RKS5yZW1vdmVMaXN0ZW5lcigoKSA9PiBfc2VsZi5fdHJpZ2dlck1pbkJQRXZlbnRzKTtcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLm1lZGlhUXVlcmllcy5jdXJyZW50TVEpLnJlbW92ZUxpc3RlbmVyKCgpID0+IF9zZWxmLl90cmlnZ2VyQ3VycmVudEJQRXZlbnRzKCkpO1xuICAgIHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNYXhNUSkucmVtb3ZlTGlzdGVuZXIoKCkgPT4gX3NlbGYuX3RyaWdnZXJNYXhCUEV2ZW50cyk7XG4gIH1cblxuICBfdHJpZ2dlck1pbkJQRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5wcmV2aW91c01heEJQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQICE9PSBudWxsKSB7XG4gICAgICAkKHNzKS50cmlnZ2VyKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLm5leHRNaW5CUH06ZGVzdHJveWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5wcmV2aW91c0JQICE9PSBudWxsKSB7XG4gICAgICAkKHNzKS50cmlnZ2VyKGAke3RoaXMuYnJlYWtwb2ludHMucHJldmlvdXNCUH06ZGVzdHJveWApO1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5icmVha3BvaW50cy5wcmV2aW91c0JQfTpkZXN0cm95YCk7XG4gICAgfVxuICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5jdXJyZW50TWluQlB9YCk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5icmVha3BvaW50cy5jdXJyZW50TWluQlB9YCk7XG4gIH1cblxuICBfdHJpZ2dlckN1cnJlbnRCUEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5wcmV2aW91c0JQICE9PSBudWxsKSB7XG4gICAgICAkKHNzKS50cmlnZ2VyKGAke3RoaXMuYnJlYWtwb2ludHMucHJldmlvdXNCUH06ZGVzdHJveWApO1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5icmVha3BvaW50cy5wcmV2aW91c0JQfTpkZXN0cm95YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5wcmV2aW91c01heEJQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQICE9PSBudWxsKSB7XG4gICAgICAkKHNzKS50cmlnZ2VyKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLm5leHRNaW5CUH06ZGVzdHJveWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5uZXh0QlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5uZXh0QlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dEJQfTpkZXN0cm95YCk7XG4gICAgfVxuICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5jdXJyZW50QlB9YCk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5icmVha3BvaW50cy5jdXJyZW50QlB9YCk7XG4gIH1cblxuICBfdHJpZ2dlck1heEJQRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5wcmV2aW91c01heEJQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQICE9PSBudWxsKSB7XG4gICAgICAkKHNzKS50cmlnZ2VyKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLm5leHRNaW5CUH06ZGVzdHJveWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5uZXh0QlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5uZXh0QlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dEJQfTpkZXN0cm95YCk7XG4gICAgfVxuICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5jdXJyZW50TWF4QlB9YCk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5icmVha3BvaW50cy5jdXJyZW50TWF4QlB9YCk7XG4gIH1cblxuICBfY2hlY2tDdXJyZW50TWVkaWFRdWVyeSgpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEodGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1pbk1RKS5tYXRjaGVzKSB7XG4gICAgICAvL3RoaXMuX3RyaWdnZXJNaW5CUEV2ZW50cygpO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLm1lZGlhUXVlcmllcy5jdXJyZW50TVEpLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJDdXJyZW50QlBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEodGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1heE1RKS5tYXRjaGVzKSB7XG4gICAgICAvL3RoaXMuX3RyaWdnZXJNYXhCUEV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVWYWx1ZXMoaSkge1xuICAgIHRoaXMuYnJlYWtwb2ludHMuY3VycmVudE1pbkJQID0gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFU19NSU4pW2ldO1xuICAgIHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNaW5NUSA9IE1FRElBX1FVRVJJRVNfTUlOW3RoaXMuYnJlYWtwb2ludHMuY3VycmVudE1pbkJQXTtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLm5leHRNaW5CUCA9IGkgPCAzID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFU19NSU4pW2kgKyAxXSA6IG51bGw7XG5cbiAgICB0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRCUCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpW2ldO1xuICAgIHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNUSA9IE1FRElBX1FVRVJJRVNbdGhpcy5icmVha3BvaW50cy5jdXJyZW50QlBdO1xuICAgIHRoaXMuYnJlYWtwb2ludHMucHJldmlvdXNCUCA9IGkgPiAwID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUylbaSAtIDFdIDogbnVsbDtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLm5leHRCUCA9IGkgPCAzID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUylbaSArIDFdIDogbnVsbDtcblxuICAgIHRoaXMuYnJlYWtwb2ludHMuY3VycmVudE1heEJQID0gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFU19NQVgpW2ldO1xuICAgIHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNYXhNUSA9IE1FRElBX1FVRVJJRVNfTUFYW3RoaXMuYnJlYWtwb2ludHMuY3VycmVudE1heEJQXTtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlAgPSBpID4gMCA/IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVNfTUFYKVtpIC0gMV0gOiBudWxsO1xuICB9XG59O1xuXG4kKHNzKS5vbigneHNNaW4nLCBmdW5jdGlvbigpIHtjb25zb2xlLmxvZygnbWVyZ2UnKX0pO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lZGlhUXVlcmllcy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBWQUxVRVNfR1JJRCA9IHtcbiAgeHNNaW46IDAsXG4gIHhzTWF4OiA3NjcsXG4gIHNtTWluOiA3NjgsXG4gIHNtTWF4OiAxMDIzLFxuICBtZE1pbjogMTAyNCxcbiAgbWRNYXg6IDExOTksXG4gIGxnTWluOiAxMjAwXG59O1xuXG5leHBvcnQgY29uc3QgVkFMVUVTID0ge1xuICBvdXRPZkluZGV4OiAtMVxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVNfTUlOID0ge1xuICB4c01pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC54c01pbn1weClgLFxuICBzbU1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weClgLFxuICBtZE1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weClgLFxuICBsZ01pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgXG59O1xuXG5leHBvcnQgY29uc3QgTUVESUFfUVVFUklFU19NQVggPSB7XG4gIHhzTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIG1kTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnTWF4OiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWlufXB4KWBcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lZGlhUXVlcmllcy9jb25maWcuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG5zcy5pbnN0YW5jZXMgPSBbXTtcblxuc3MuY2hlY2tJZkNsYXNzRXhpc3RzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICB0cnkge1xuICAgICQodGhpcykuYXR0cignZGF0YS1zcy1pbnN0YW5jZScsIHNzLmluc3RhbmNlcy5sZW5ndGgpO1xuICAgIHNzLmluc3RhbmNlcy5wdXNoKG5ldyBzc1tjbGFzc05hbWVdKCQodGhpcykpKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihgVGhlIGNsYXNzICR7Y2xhc3NOYW1lfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgfVxufTtcblxuc3MuaW5pdEJ5U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3Mtc3RhdGU9XCIke3N0YXRlfVwiXWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbi8vIGluaXQgbWV0aG9kXG5zcy5pbml0ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAvLyB3aWxsIGJlIGluaXRpYWxpemVkIGRlcGVuZGluZyBvbiB0aGUgZGF0YS1zcy1zdGF0ZSB2YWx1ZVxuICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHNzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHNzLmluaXRCeVN0YXRlKCdvbkxvYWQnKSk7XG4gIH1cbn07XG5cbi8vZGVzdHJveSBtZXRob2RcbnNzLmRlc3Ryb3kgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBsZXQgZGVzdHJveUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjdXJyZW50SW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoJ3NzLXNzLWluc3RhbmNlJyk7XG4gICAgc3MuaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0uZGVzdHJveSgpO1xuICAgICQodGhpcykucmVtb3ZlQXR0cignZGF0YS1zcy1pbnN0YW5jZScpO1xuICAgIHNzLmluc3RhbmNlc1tjdXJyZW50SW5zdGFuY2VdID0gbnVsbDtcbiAgfTtcblxuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL3NzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==