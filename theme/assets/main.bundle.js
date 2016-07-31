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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBSkE7QUFNQSxJQUFHLElBQUg7O0FBSEEsZTs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUNBOzs7Ozs7QUFFQSxRQUFPLEVBQVAsR0FBWSxPQUFPLEVBQVAsSUFBYSxFQUF6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsSUFBRyxZQUFIO0FBRUUscUJBQWM7QUFBQTs7QUFDWixVQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxVQUFLLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsVUFBSyxJQUFJLElBQUksQ0FBUixFQUFXLGFBQWEsT0FBTyxJQUFQLHdCQUEyQixNQUF4RCxFQUFnRSxJQUFJLFVBQXBFLEVBQWdGLEdBQWhGLEVBQXFGO0FBQ25GLFlBQUssYUFBTCxDQUFtQixDQUFuQjtBQUNBLFlBQUssa0JBQUw7QUFDQSxZQUFLLHVCQUFMO0FBQ0Q7QUFDRjs7QUFYSDtBQUFBO0FBQUEsK0JBYVk7QUFDUixZQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsYUFBYSxPQUFPLElBQVAsd0JBQTJCLE1BQXhELEVBQWdFLElBQUksVUFBcEUsRUFBZ0YsR0FBaEYsRUFBcUY7QUFDbkYsY0FBSyxhQUFMO0FBQ0EsY0FBSyxxQkFBTDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBOztBQXRCRjtBQUFBO0FBQUEsMENBd0J1QjtBQUNuQixXQUFJLFFBQVEsSUFBWjtBQUNBLGNBQU8sVUFBUCxDQUFrQixLQUFLLFlBQUwsQ0FBa0IsWUFBcEMsRUFBa0QsV0FB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QU1EO0FBRUYsTUFuQkQsTUFtQk87QUFDTCxlQUFRLEtBQVIsQ0FBYyxrREFBZDtBQUNEO0FBQ0YsSUF2QkQsTUF1Qk87QUFDTDtBQUNBO0FBQ0EsMkJBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0I7QUFBQSxjQUFNLEdBQUcsV0FBSCxDQUFlLFNBQWYsQ0FBTjtBQUFBLE1BQWxCO0FBQ0EsMkJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxNQUFiLEVBQXFCO0FBQUEsY0FBTSxHQUFHLFdBQUgsQ0FBZSxRQUFmLENBQU47QUFBQSxNQUFyQjtBQUNEO0FBQ0YsRUE5QkQ7O0FBZ0NBO0FBQ0EsSUFBRyxPQUFILEdBQWEsVUFBQyxVQUFELEVBQWtDO0FBQUEsT0FBckIsUUFBcUIseURBQVYsS0FBVTs7QUFDN0MsT0FBSSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBWTtBQUNoQyxTQUFJLGtCQUFrQixzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGdCQUFiLENBQXRCO0FBQ0EsUUFBRyxTQUFILENBQWEsZUFBYixFQUE4QixPQUE5QjtBQUNBLDJCQUFFLElBQUYsRUFBUSxVQUFSLENBQW1CLGtCQUFuQjtBQUNELElBSkQ7O0FBTUEsT0FBSSxVQUFKLEVBQWdCO0FBQ2QsU0FBSSxzQ0FBSixFQUE2QjtBQUMzQixXQUFJLFFBQUosRUFBYztBQUNaO0FBQ0Esb0JBQVcsSUFBWCx1QkFBc0MsSUFBdEMsQ0FBMkMsZUFBM0M7QUFDRCxRQUhELE1BSUs7QUFDSDtBQUNBLG9CQUFXLElBQVgsQ0FBZ0IsZUFBaEI7QUFDRDtBQUVGLE1BVkQsTUFVTztBQUNMLGVBQVEsS0FBUixDQUFjLGtEQUFkO0FBQ0Q7QUFDRixJQWRELE1BZUs7QUFDSCwyQkFBRSxRQUFGLEVBQVksSUFBWix1QkFBdUMsSUFBdkMsQ0FBNEMsZUFBNUM7QUFDRDtBQUNGLEVBekJELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0ICdjb21wb25lbnRzL21lZGlhUXVlcmllcyc7XG5cbi8vIGltcG9ydCBiYXNlXG5pbXBvcnQgJ2Jhc2Uvc3MnO1xuXG5zcy5pbml0KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7TUVESUFfUVVFUklFUywgTUVESUFfUVVFUklFU19NSU4sIE1FRElBX1FVRVJJRVNfTUFYfSBmcm9tICcuL2NvbmZpZyc7XG5cbndpbmRvdy5zcyA9IHdpbmRvdy5zcyB8fCB7fTtcblxuLyoqXG4gKiBNZWRpYVF1ZXJ5IG1vZHVsZVxuICogVXNlZCB0byBkZXRlY3QgY3VycmVudCBtZWRpYSBxdWVyeVxuICpcbiAqIFVzYWdlOlxuICogJChzcykub24oTUVESUFfUVVFUlksIGNhbGxiYWNrICk7XG4gKlxuICogV2hlcmU6XG4gKiAgICBNRURJQV9RVUVSWSBjYW4gYmUgOiAneHMnLCAnc20nLCAnbWQnLCAnbGcnLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWluJywgJ3NtTWluJywgJ21kTWluJywnbGdNaW4nLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWF4JywgJ3NtTWF4JywgJ21kTWF4JywgJ2xnTWF4J1xuICogICAgQ2FsbGJhY2s6IGZ1bmN0aW9uIG5hbWUgb3IgYW5vbnltb3VzIGZ1bmN0aW9uXG4gKlxuICogICAgZS5nLiA6XG4gKlxuICogICAgZnVuY3Rpb24gc2F5R29vZGJ5ZSA9IHsgYWxlcnQoJ2dvb2RieWUnKSB9XG4gKiAgICAkKHNzKS5vbignc21NaW4nLCBzYXlHb29kYnllIH0pXG4gKlxuICogICAgb3JcbiAqXG4gKiAgICAkKHNzKS5vbignc21NaW4nLCBmdW5jdGlvbigpIHsgYWxlcnQoJ2hlbGxvJyk7IH0pXG4gKlxuICpcbiAqIEB0eXBlIHt7aW5pdCwgZGVzdHJveX19XG4gKi9cblxuc3MuTWVkaWFRdWVyaWVzID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVkaWFRdWVyaWVzID0ge307XG4gICAgdGhpcy5icmVha3BvaW50cyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGtleXNMZW5ndGggPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTKS5sZW5ndGg7IGkgPCBrZXlzTGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlcyhpKTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLl9jaGVja0N1cnJlbnRNZWRpYVF1ZXJ5KCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwga2V5c0xlbmd0aCA9IE9iamVjdC5rZXlzKE1FRElBX1FVRVJJRVMpLmxlbmd0aDsgaSA8IGtleXNMZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fdXBkYXRlVmFsdWVzKCk7XG4gICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgd2luZG93Lm1hdGNoTWVkaWEodGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1pbk1RKS5hZGRMaXN0ZW5lcigoKSA9PiBfc2VsZi5fdHJpZ2dlck1pbkJQRXZlbnRzKTtcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLm1lZGlhUXVlcmllcy5jdXJyZW50TVEpLmFkZExpc3RlbmVyKCgpID0+IF9zZWxmLl90cmlnZ2VyQ3VycmVudEJQRXZlbnRzKCkpO1xuICAgIHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNYXhNUSkuYWRkTGlzdGVuZXIoKCkgPT4gX3NlbGYuX3RyaWdnZXJNYXhCUEV2ZW50cyk7XG4gIH1cblxuICBfcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLm1lZGlhUXVlcmllcy5jdXJyZW50TWluTVEpLnJlbW92ZUxpc3RlbmVyKCgpID0+IF9zZWxmLl90cmlnZ2VyTWluQlBFdmVudHMpO1xuICAgIHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNUSkucmVtb3ZlTGlzdGVuZXIoKCkgPT4gX3NlbGYuX3RyaWdnZXJDdXJyZW50QlBFdmVudHMoKSk7XG4gICAgd2luZG93Lm1hdGNoTWVkaWEodGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1heE1RKS5yZW1vdmVMaXN0ZW5lcigoKSA9PiBfc2VsZi5fdHJpZ2dlck1heEJQRXZlbnRzKTtcbiAgfVxuXG4gIF90cmlnZ2VyTWluQlBFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMucHJldmlvdXNNYXhCUCAhPT0gbnVsbCkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMucHJldmlvdXNNYXhCUH06ZGVzdHJveWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5uZXh0TWluQlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5uZXh0TWluQlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzQlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5wcmV2aW91c0JQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzQlB9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRNaW5CUH1gKTtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRNaW5CUH1gKTtcbiAgfVxuXG4gIF90cmlnZ2VyQ3VycmVudEJQRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzQlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5wcmV2aW91c0JQfTpkZXN0cm95YCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzQlB9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMucHJldmlvdXNNYXhCUCAhPT0gbnVsbCkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMucHJldmlvdXNNYXhCUH06ZGVzdHJveWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5uZXh0TWluQlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5uZXh0TWluQlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLm5leHRCUCAhPT0gbnVsbCkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLm5leHRCUH06ZGVzdHJveWApO1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5icmVha3BvaW50cy5uZXh0QlB9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRCUH1gKTtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRCUH1gKTtcbiAgfVxuXG4gIF90cmlnZ2VyTWF4QlBFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMucHJldmlvdXNNYXhCUCAhPT0gbnVsbCkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLnByZXZpb3VzTWF4QlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMucHJldmlvdXNNYXhCUH06ZGVzdHJveWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5uZXh0TWluQlAgIT09IG51bGwpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYCR7dGhpcy5icmVha3BvaW50cy5uZXh0TWluQlB9OmRlc3Ryb3lgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQfTpkZXN0cm95YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLm5leHRCUCAhPT0gbnVsbCkge1xuICAgICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLm5leHRCUH06ZGVzdHJveWApO1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5icmVha3BvaW50cy5uZXh0QlB9OmRlc3Ryb3lgKTtcbiAgICB9XG4gICAgJChzcykudHJpZ2dlcihgJHt0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRNYXhCUH1gKTtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRNYXhCUH1gKTtcbiAgfVxuXG4gIF9jaGVja0N1cnJlbnRNZWRpYVF1ZXJ5KCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLm1lZGlhUXVlcmllcy5jdXJyZW50TWluTVEpLm1hdGNoZXMpIHtcbiAgICAgIC8vdGhpcy5fdHJpZ2dlck1pbkJQRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMubWVkaWFRdWVyaWVzLmN1cnJlbnRNUSkubWF0Y2hlcykge1xuICAgICAgdGhpcy5fdHJpZ2dlckN1cnJlbnRCUEV2ZW50cygpO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLm1lZGlhUXVlcmllcy5jdXJyZW50TWF4TVEpLm1hdGNoZXMpIHtcbiAgICAgIC8vdGhpcy5fdHJpZ2dlck1heEJQRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVZhbHVlcyhpKSB7XG4gICAgdGhpcy5icmVha3BvaW50cy5jdXJyZW50TWluQlAgPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTX01JTilbaV07XG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1pbk1RID0gTUVESUFfUVVFUklFU19NSU5bdGhpcy5icmVha3BvaW50cy5jdXJyZW50TWluQlBdO1xuICAgIHRoaXMuYnJlYWtwb2ludHMubmV4dE1pbkJQID0gaSA8IDMgPyBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTX01JTilbaSArIDFdIDogbnVsbDtcblxuICAgIHRoaXMuYnJlYWtwb2ludHMuY3VycmVudEJQID0gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFUylbaV07XG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1RID0gTUVESUFfUVVFUklFU1t0aGlzLmJyZWFrcG9pbnRzLmN1cnJlbnRCUF07XG4gICAgdGhpcy5icmVha3BvaW50cy5wcmV2aW91c0JQID0gaSA+IDAgPyBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTKVtpIC0gMV0gOiBudWxsO1xuICAgIHRoaXMuYnJlYWtwb2ludHMubmV4dEJQID0gaSA8IDMgPyBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTKVtpICsgMV0gOiBudWxsO1xuXG4gICAgdGhpcy5icmVha3BvaW50cy5jdXJyZW50TWF4QlAgPSBPYmplY3Qua2V5cyhNRURJQV9RVUVSSUVTX01BWClbaV07XG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMuY3VycmVudE1heE1RID0gTUVESUFfUVVFUklFU19NQVhbdGhpcy5icmVha3BvaW50cy5jdXJyZW50TWF4QlBdO1xuICAgIHRoaXMuYnJlYWtwb2ludHMucHJldmlvdXNNYXhCUCA9IGkgPiAwID8gT2JqZWN0LmtleXMoTUVESUFfUVVFUklFU19NQVgpW2kgLSAxXSA6IG51bGw7XG4gIH1cbn07XG5cbiQoc3MpLm9uKCd4c01pbicsIGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKCdtZXJnZScpfSk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFZBTFVFU19HUklEID0ge1xuICB4c01pbjogMCxcbiAgeHNNYXg6IDc2NyxcbiAgc21NaW46IDc2OCxcbiAgc21NYXg6IDEwMjMsXG4gIG1kTWluOiAxMDI0LFxuICBtZE1heDogMTE5OSxcbiAgbGdNaW46IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBWQUxVRVMgPSB7XG4gIG91dE9mSW5kZXg6IC0xXG59O1xuXG5leHBvcnQgY29uc3QgTUVESUFfUVVFUklFUyA9IHtcbiAgeHM6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc206IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIG1kOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBsZzogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgXG59O1xuXG5leHBvcnQgY29uc3QgTUVESUFfUVVFUklFU19NSU4gPSB7XG4gIHhzTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWlufXB4KWAsXG4gIHNtTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KWAsXG4gIG1kTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KWAsXG4gIGxnTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWBcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTX01BWCA9IHtcbiAgeHNNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc21NYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGdNYXg6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmluc3RhbmNlcyA9IFtdO1xuXG5zcy5jaGVja0lmQ2xhc3NFeGlzdHMgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gIHRyeSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNzLWluc3RhbmNlJywgc3MuaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgc3MuaW5zdGFuY2VzLnB1c2gobmV3IHNzW2NsYXNzTmFtZV0oJCh0aGlzKSkpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICB9XG59O1xuXG5zcy5pbml0QnlTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLy8gaW5pdCBtZXRob2RcbnNzLmluaXQgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRJbnN0YW5jZSA9ICQodGhpcykuZGF0YSgnc3Mtc3MtaW5zdGFuY2UnKTtcbiAgICBzcy5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNzLWluc3RhbmNlJyk7XG4gIH07XG5cbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcbiAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAvLyBkZXN0cm95IGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluc3RhbmNlXWApLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBkZXN0cm95ICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYmFzZS9zcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=