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
	
	__webpack_require__(305);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	ss.init();
	
	// import base
	
	
	// import components
	
	
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
	 * @type {{new()=>{_handleMQChange: ((mql, index?)), destroy: (())}}}
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
	
	    /**
	     * Method to handle the media query change
	     * @param mql - current media query
	     * @param index - current breakpoint
	     * @private
	       */
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(299);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _utils = __webpack_require__(304);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	window.ss = window.ss || {};
	
	var mediaQueriesConfig = {
	  xs: function xs() {
	    console.warn('xs');
	  },
	  sm: function sm() {
	    console.warn('sm');
	  },
	  md: function md() {
	    console.warn('md');
	  },
	  lg: function lg() {
	    console.warn('lg');
	  },
	  xsMin: function xsMin() {
	    console.warn('xsMin');
	  },
	  smMin: function smMin() {
	    console.warn('smMin');
	  },
	  mdMin: function mdMin() {
	    console.warn('mdMin');
	  },
	  lgMin: function lgMin() {
	    console.warn('lgMin');
	  },
	  xsMax: function xsMax() {
	    console.warn('xsMax');
	  },
	  smMax: function smMax() {
	    console.warn('smMax');
	  },
	  mdMax: function mdMax() {
	    console.warn('mdMax');
	  }
	};
	
	ss.Currencies = function (_SetMediaQueryCallbac) {
	  _inherits(_class, _SetMediaQueryCallbac);
	
	  function _class() {
	    _classCallCheck(this, _class);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, mediaQueriesConfig));
	
	    _jquery2.default.getScript('https://cdn.shopify.com/s/javascripts/currencies.js', function () {
	      console.warn(Currency);
	    });
	    return _this;
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      _get(Object.getPrototypeOf(_class.prototype), 'destroy', this).call(this);
	    }
	  }]);
	
	  return _class;
	}(_utils.SetMediaQueryCallbacks);
	
	new ss.Currencies();

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SetMediaQueryCallbacks = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(299);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SetMediaQueryCallbacks = exports.SetMediaQueryCallbacks = function () {
	  function SetMediaQueryCallbacks(mediaQueryCallbacks) {
	    _classCallCheck(this, SetMediaQueryCallbacks);
	
	    if (mediaQueryCallbacks) {
	      this.mediaQueryCallbacks = mediaQueryCallbacks;
	      this._addCallbacksToMQEvents();
	    } else {
	      throw new Error('No configuration object passed for media query callbacks!');
	    }
	  }
	
	  _createClass(SetMediaQueryCallbacks, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._removeCallbacksFromMQEvents();
	    }
	
	    /////////////////////
	    // Private Methods //
	    /////////////////////
	
	  }, {
	    key: '_addCallbacksToMQEvents',
	    value: function _addCallbacksToMQEvents() {
	      if (this.mediaQueryCallbacks) {
	        _jquery2.default.each(this.mediaQueryCallbacks, function (key, value) {
	          (0, _jquery2.default)(ss).on(key, value);
	        });
	      }
	    }
	  }, {
	    key: '_removeCallbacksFromMQEvents',
	    value: function _removeCallbacksFromMQEvents() {
	      if (this.mediaQueryCallbacks) {
	        _jquery2.default.each(this.mediaQueryCallbacks, function (key, value) {
	          (0, _jquery2.default)(ss).off(key, value);
	        });
	      }
	    }
	  }]);

	  return SetMediaQueryCallbacks;
	}();

/***/ },

/***/ 305:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7QUFHQTs7OztBQUVBLElBQUcsSUFBSDs7QUFIQTs7O0FBSkE7OztBQVNBLHVCQUFFLEVBQUYsRUFBTSxFQUFOLENBQVMsT0FBVCxFQUFrQixZQUFXO0FBQzNCLFdBQVEsSUFBUixDQUFhLE9BQWI7QUFDRCxFQUZELEU7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBTyxFQUFQLEdBQVksT0FBTyxFQUFQLElBQWEsRUFBekI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsSUFBRyxZQUFIO0FBRUUscUJBQWM7QUFBQTs7QUFBQTs7QUFDWixzQkFBRSxJQUFGLHdCQUFzQixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3RDLFdBQUksTUFBTSxPQUFPLFVBQVAsQ0FBa0IsS0FBbEIsQ0FBVjs7QUFFQTtBQUNBO0FBQ0EsV0FBSSxXQUFKLENBQWdCLE1BQUssYUFBTCxHQUFxQixVQUFDLEdBQUQsRUFBUztBQUM1QyxlQUFLLGVBQUwsQ0FBcUIsR0FBckIsRUFBMEIsS0FBMUI7QUFDRCxRQUZEOztBQUlBLGFBQUssZUFBTCxDQUFxQixHQUFyQixFQUEwQixLQUExQjtBQUNELE1BVkQ7QUFXRDs7QUFkSDtBQUFBO0FBQUEsK0JBZ0JZ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QUFiLEVBQXFCO0FBQUEsY0FBTSxHQUFHLFdBQUgsQ0FBZSxRQUFmLENBQU47QUFBQSxNQUFyQjtBQUNEO0FBQ0YsRUE5QkQ7O0FBZ0NBO0FBQ0EsSUFBRyxPQUFILEdBQWEsVUFBQyxVQUFELEVBQWtDO0FBQUEsT0FBckIsUUFBcUIseURBQVYsS0FBVTs7QUFDN0MsT0FBSSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBWTtBQUNoQyxTQUFJLGtCQUFrQixzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGFBQWIsQ0FBdEI7QUFDQSxRQUFHLFNBQUgsQ0FBYSxlQUFiLEVBQThCLE9BQTlCO0FBQ0EsMkJBQUUsSUFBRixFQUFRLFVBQVIsQ0FBbUIsa0JBQW5CO0FBQ0EsUUFBRyxTQUFILENBQWEsZUFBYixJQUFnQyxJQUFoQztBQUNELElBTEQ7O0FBT0EsT0FBSSxVQUFKLEVBQWdCO0FBQ2QsU0FBSSxzQ0FBSixFQUE2QjtBQUMzQixXQUFJLFFBQUosRUFBYztBQUNaO0FBQ0Esb0JBQVcsSUFBWCx1QkFBc0MsSUFBdEMsQ0FBMkMsZUFBM0M7QUFDRCxRQUhELE1BSUs7QUFDSDtBQUNBLG9CQUFXLElBQVgsQ0FBZ0IsZUFBaEI7QUFDRDtBQUNGLE1BVEQsTUFTTztBQUNMLGVBQVEsS0FBUixDQUFjLGtEQUFkO0FBQ0Q7QUFDRixJQWJELE1BY0s7QUFDSCwyQkFBRSxRQUFGLEVBQVksSUFBWix1QkFBdUMsSUFBdkMsQ0FBNEMsZUFBNUM7QUFDRDtBQUNGLEVBekJELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0ICdjb21wb25lbnRzL21lZGlhUXVlcmllcyc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvY3VycmVuY3knO1xuXG4vLyBpbXBvcnQgYmFzZVxuaW1wb3J0ICdiYXNlL3NzJztcblxuc3MuaW5pdCgpO1xuXG4kKHNzKS5vbignc21NaW4nLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS53YXJuKCdzbU1pbicpO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7TUVESUFfUVVFUklFU30gZnJvbSAnLi9jb25maWcnO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbi8qKlxuICogTWVkaWFRdWVyeSBtb2R1bGVcbiAqIFVzZWQgdG8gZGV0ZWN0IGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAqXG4gKiBVc2FnZTpcbiAqICQoc3MpLm9uKE1FRElBX1FVRVJZLCBjYWxsYmFjayApO1xuICpcbiAqIFdoZXJlOlxuICogICAgTUVESUFfUVVFUlkgY2FuIGJlIDogJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01pbicsICdzbU1pbicsICdtZE1pbicsJ2xnTWluJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01heCcsICdzbU1heCcsICdtZE1heCcsICdsZ01heCdcbiAqICAgIENhbGxiYWNrOiBmdW5jdGlvbiBuYW1lIG9yIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqICAgIGUuZy4gOlxuICpcbiAqICAgIGZ1bmN0aW9uIHNheUdvb2RieWUgPSB7IGFsZXJ0KCdnb29kYnllJykgfVxuICogICAgJChzcykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJChzcykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCdoZWxsbycpOyB9KVxuICpcbiAqXG4gKiBAdHlwZSB7e25ldygpPT57X2hhbmRsZU1RQ2hhbmdlOiAoKG1xbCwgaW5kZXg/KSksIGRlc3Ryb3k6ICgoKSl9fX1cbiAqL1xuc3MuTWVkaWFRdWVyaWVzID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpO1xuXG4gICAgICAvLyB0aGUgZGVmYXVsdCBtYXRjaG1lZGlhJ3MgYWRkTGlzdGVuZXIgbWV0aG9kIGRvZXNuJ3Qgc3VwcG9ydCBleHRyYSBwYXJhbWV0ZXJzLFxuICAgICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgYW5vdGhlciBleHRyYSBmdW5jdGlvbiB0aGF0IGNhbiBwYXNzIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgbmFtZVxuICAgICAgbXFsLmFkZExpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lciA9IChtcWwpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSkucmVtb3ZlTGlzdGVuZXIodGhpcy5hZGRNUUxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBoYW5kbGUgdGhlIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICAgKiBAcGFyYW0gbXFsIC0gY3VycmVudCBtZWRpYSBxdWVyeVxuICAgKiBAcGFyYW0gaW5kZXggLSBjdXJyZW50IGJyZWFrcG9pbnRcbiAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpIHtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoaW5kZXgpO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFZBTFVFU19HUklEID0ge1xuICB4c01pbjogMCxcbiAgeHNNYXg6IDc2NyxcbiAgc21NaW46IDc2OCxcbiAgc21NYXg6IDEwMjMsXG4gIG1kTWluOiAxMDI0LFxuICBtZE1heDogMTE5OSxcbiAgbGdNaW46IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0ge1xuICB4czogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbTogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWQ6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWAsXG4gIHhzTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWlufXB4KWAsXG4gIHNtTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KWAsXG4gIG1kTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KWAsXG4gIGxnTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWAsXG4gIHhzTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIG1kTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWBcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lZGlhUXVlcmllcy9jb25maWcuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtTZXRNZWRpYVF1ZXJ5Q2FsbGJhY2tzfSBmcm9tICdjb21wb25lbnRzL3V0aWxzJztcblxud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG5sZXQgbWVkaWFRdWVyaWVzQ29uZmlnID0ge1xuICB4cygpIHsgY29uc29sZS53YXJuKCd4cycpOyB9LFxuICBzbSgpIHsgY29uc29sZS53YXJuKCdzbScpOyB9LFxuICBtZCgpIHsgY29uc29sZS53YXJuKCdtZCcpOyB9LFxuICBsZygpIHsgY29uc29sZS53YXJuKCdsZycpOyB9LFxuICB4c01pbigpIHsgY29uc29sZS53YXJuKCd4c01pbicpOyB9LFxuICBzbU1pbigpIHsgY29uc29sZS53YXJuKCdzbU1pbicpOyB9LFxuICBtZE1pbigpIHsgY29uc29sZS53YXJuKCdtZE1pbicpOyB9LFxuICBsZ01pbigpIHsgY29uc29sZS53YXJuKCdsZ01pbicpOyB9LFxuICB4c01heCgpIHsgY29uc29sZS53YXJuKCd4c01heCcpOyB9LFxuICBzbU1heCgpIHsgY29uc29sZS53YXJuKCdzbU1heCcpOyB9LFxuICBtZE1heCgpIHsgY29uc29sZS53YXJuKCdtZE1heCcpOyB9XG59O1xuXG5zcy5DdXJyZW5jaWVzID0gY2xhc3MgZXh0ZW5kcyBTZXRNZWRpYVF1ZXJ5Q2FsbGJhY2tzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobWVkaWFRdWVyaWVzQ29uZmlnKTtcblxuICAgICQuZ2V0U2NyaXB0KCdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2phdmFzY3JpcHRzL2N1cnJlbmNpZXMuanMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oQ3VycmVuY3kpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxufTtcblxubmV3IHNzLkN1cnJlbmNpZXMoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY3kvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY2xhc3MgU2V0TWVkaWFRdWVyeUNhbGxiYWNrcyB7XG4gIGNvbnN0cnVjdG9yKG1lZGlhUXVlcnlDYWxsYmFja3MpIHtcbiAgICBpZiAobWVkaWFRdWVyeUNhbGxiYWNrcykge1xuICAgICAgdGhpcy5tZWRpYVF1ZXJ5Q2FsbGJhY2tzID0gbWVkaWFRdWVyeUNhbGxiYWNrcztcbiAgICAgIHRoaXMuX2FkZENhbGxiYWNrc1RvTVFFdmVudHMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHBhc3NlZCBmb3IgbWVkaWEgcXVlcnkgY2FsbGJhY2tzIScpO1xuICAgIH1cblxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVDYWxsYmFja3NGcm9tTVFFdmVudHMoKTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgX2FkZENhbGxiYWNrc1RvTVFFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFRdWVyeUNhbGxiYWNrcykge1xuICAgICAgJC5lYWNoKHRoaXMubWVkaWFRdWVyeUNhbGxiYWNrcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgJChzcykub24oa2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlQ2FsbGJhY2tzRnJvbU1RRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLm1lZGlhUXVlcnlDYWxsYmFja3MpIHtcbiAgICAgICQuZWFjaCh0aGlzLm1lZGlhUXVlcnlDYWxsYmFja3MsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICQoc3MpLm9mZihrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy91dGlscy9pbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmluc3RhbmNlcyA9IFtdO1xuXG5zcy5jaGVja0lmQ2xhc3NFeGlzdHMgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gIHRyeSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNzLWluc3RhbmNlJywgc3MuaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgc3MuaW5zdGFuY2VzLnB1c2gobmV3IHNzW2NsYXNzTmFtZV0oJCh0aGlzKSkpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICB9XG59O1xuXG5zcy5pbml0QnlTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLy8gaW5pdCBtZXRob2RcbnNzLmluaXQgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRJbnN0YW5jZSA9ICQodGhpcykuZGF0YSgnc3MtaW5zdGFuY2UnKTtcbiAgICBzcy5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNzLWluc3RhbmNlJyk7XG4gICAgc3MuaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0gPSBudWxsO1xuICB9O1xuXG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gZGVzdHJveSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL3NzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==