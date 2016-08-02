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
	
	__webpack_require__(304);
	
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
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(299);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	var setMediaQueryCallbacks = function () {
	  function setMediaQueryCallbacks(mediaQueriesConfig) {
	    _classCallCheck(this, setMediaQueryCallbacks);
	
	    this.MQ_CONFIG = mediaQueriesConfig;
	    this.addCallbacksToMQEvents();
	  }
	
	  _createClass(setMediaQueryCallbacks, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.removeCallbacksFromMQEvents();
	    }
	  }, {
	    key: 'addCallbacksToMQEvents',
	    value: function addCallbacksToMQEvents() {
	      _jquery2.default.each(this.MQ_CONFIG, function (key, value) {
	        (0, _jquery2.default)(ss).on(key, value);
	      });
	    }
	  }, {
	    key: 'removeCallbacksFromMQEvents',
	    value: function removeCallbacksFromMQEvents() {
	      _jquery2.default.each(this.MQ_CONFIG, function (key, value) {
	        (0, _jquery2.default)(ss).on(key, value);
	      });
	    }
	  }]);
	
	  return setMediaQueryCallbacks;
	}();
	
	ss.Currencies = function (_setMediaQueryCallbac) {
	  _inherits(_class, _setMediaQueryCallbac);
	
	  function _class() {
	    _classCallCheck(this, _class);
	
	    _jquery2.default.getScript('/services/javascripts/currencies.js', function () {
	      console.warn(Currency);
	    });
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, mediaQueriesConfig));
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      _get(Object.getPrototypeOf(_class.prototype), 'destroy', this).call(this);
	    }
	  }]);
	
	  return _class;
	}(setMediaQueryCallbacks);
	
	new ss.Currencies();

/***/ },

/***/ 304:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7QUFHQTs7OztBQUVBLElBQUcsSUFBSDs7QUFIQTs7O0FBSkE7OztBQVNBLHVCQUFFLEVBQUYsRUFBTSxFQUFOLENBQVMsT0FBVCxFQUFrQixZQUFXO0FBQzNCLFdBQVEsSUFBUixDQUFhLE9BQWI7QUFDRCxFQUZELEU7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBTyxFQUFQLEdBQVksT0FBTyxFQUFQLElBQWEsRUFBekI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsSUFBRyxZQUFIO0FBRUUscUJBQWM7QUFBQTs7QUFBQTs7QUFDWixzQkFBRSxJQUFGLHdCQUFzQixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3RDLFdBQUksTUFBTSxPQUFPLFVBQVAsQ0FBa0IsS0FBbEIsQ0FBVjs7QUFFQTtBQUNBO0FBQ0EsV0FBSSxXQUFKLENBQWdCLE1BQUssYUFBTCxHQUFxQixVQUFDLEdBQUQsRUFBUztBQUM1QyxlQUFLLGVBQUwsQ0FBcUIsR0FBckIsRUFBMEIsS0FBMUI7QUFDRCxRQUZEOztBQUlBLGFBQUssZUFBTCxDQUFxQixHQUFyQixFQUEwQixLQUExQjtBQUNELE1BVkQ7QUFXRDs7QUFkSDtBQUFBO0FBQUEsK0JBZ0JZO0FBQUE7O0FBQ1Isd0JBQUUsSUFBRix3QkFBc0IsVUFBQyxLQUFELEVBQVEsS0FB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SCxDQUFhLGVBQWIsRUFBOEIsT0FBOUI7QUFDQSwyQkFBRSxJQUFGLEVBQVEsVUFBUixDQUFtQixrQkFBbkI7QUFDQSxRQUFHLFNBQUgsQ0FBYSxlQUFiLElBQWdDLElBQWhDO0FBQ0QsSUFMRDs7QUFPQSxPQUFJLFVBQUosRUFBZ0I7QUFDZCxTQUFJLHNDQUFKLEVBQTZCO0FBQzNCLFdBQUksUUFBSixFQUFjO0FBQ1o7QUFDQSxvQkFBVyxJQUFYLHVCQUFzQyxJQUF0QyxDQUEyQyxlQUEzQztBQUNELFFBSEQsTUFJSztBQUNIO0FBQ0Esb0JBQVcsSUFBWCxDQUFnQixlQUFoQjtBQUNEO0FBQ0YsTUFURCxNQVNPO0FBQ0wsZUFBUSxLQUFSLENBQWMsa0RBQWQ7QUFDRDtBQUNGLElBYkQsTUFjSztBQUNILDJCQUFFLFFBQUYsRUFBWSxJQUFaLHVCQUF1QyxJQUF2QyxDQUE0QyxlQUE1QztBQUNEO0FBQ0YsRUF6QkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgJ2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzJztcbmltcG9ydCAnY29tcG9uZW50cy9jdXJyZW5jeSc7XG5cbi8vIGltcG9ydCBiYXNlXG5pbXBvcnQgJ2Jhc2Uvc3MnO1xuXG5zcy5pbml0KCk7XG5cbiQoc3MpLm9uKCdzbU1pbicsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLndhcm4oJ3NtTWluJyk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtNRURJQV9RVUVSSUVTfSBmcm9tICcuL2NvbmZpZyc7XG5cbndpbmRvdy5zcyA9IHdpbmRvdy5zcyB8fCB7fTtcblxuLyoqXG4gKiBNZWRpYVF1ZXJ5IG1vZHVsZVxuICogVXNlZCB0byBkZXRlY3QgY3VycmVudCBtZWRpYSBxdWVyeVxuICpcbiAqIFVzYWdlOlxuICogJChzcykub24oTUVESUFfUVVFUlksIGNhbGxiYWNrICk7XG4gKlxuICogV2hlcmU6XG4gKiAgICBNRURJQV9RVUVSWSBjYW4gYmUgOiAneHMnLCAnc20nLCAnbWQnLCAnbGcnLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWluJywgJ3NtTWluJywgJ21kTWluJywnbGdNaW4nLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWF4JywgJ3NtTWF4JywgJ21kTWF4JywgJ2xnTWF4J1xuICogICAgQ2FsbGJhY2s6IGZ1bmN0aW9uIG5hbWUgb3IgYW5vbnltb3VzIGZ1bmN0aW9uXG4gKlxuICogICAgZS5nLiA6XG4gKlxuICogICAgZnVuY3Rpb24gc2F5R29vZGJ5ZSA9IHsgYWxlcnQoJ2dvb2RieWUnKSB9XG4gKiAgICAkKHNzKS5vbignc21NaW4nLCBzYXlHb29kYnllIH0pXG4gKlxuICogICAgb3JcbiAqXG4gKiAgICAkKHNzKS5vbignc21NaW4nLCBmdW5jdGlvbigpIHsgYWxlcnQoJ2hlbGxvJyk7IH0pXG4gKlxuICpcbiAqIEB0eXBlIHt7bmV3KCk9PntfaGFuZGxlTVFDaGFuZ2U6ICgobXFsLCBpbmRleD8pKSwgZGVzdHJveTogKCgpKX19fVxuICovXG5zcy5NZWRpYVF1ZXJpZXMgPSBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSk7XG5cbiAgICAgIC8vIHRoZSBkZWZhdWx0IG1hdGNobWVkaWEncyBhZGRMaXN0ZW5lciBtZXRob2QgZG9lc24ndCBzdXBwb3J0IGV4dHJhIHBhcmFtZXRlcnMsXG4gICAgICAvLyB0aGVyZWZvcmUgd2UgbmVlZCBhbm90aGVyIGV4dHJhIGZ1bmN0aW9uIHRoYXQgY2FuIHBhc3MgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBuYW1lXG4gICAgICBtcWwuYWRkTGlzdGVuZXIodGhpcy5hZGRNUUxpc3RlbmVyID0gKG1xbCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVNUUNoYW5nZShtcWwsIGluZGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVNUUNoYW5nZShtcWwsIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKS5yZW1vdmVMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByaXZhdGUgTWV0aG9kcyAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGhhbmRsZSB0aGUgbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAqIEBwYXJhbSBtcWwgLSBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gICAqIEBwYXJhbSBpbmRleCAtIGN1cnJlbnQgYnJlYWtwb2ludFxuICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICBfaGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCkge1xuICAgIGlmIChtcWwubWF0Y2hlcykge1xuICAgICAgJChzcykudHJpZ2dlcihpbmRleCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc21NYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbndpbmRvdy5zcyA9IHdpbmRvdy5zcyB8fCB7fTtcblxubGV0IG1lZGlhUXVlcmllc0NvbmZpZyA9IHtcbiAgeHMoKSB7IGNvbnNvbGUud2FybigneHMnKTsgfSxcbiAgc20oKSB7IGNvbnNvbGUud2Fybignc20nKTsgfSxcbiAgbWQoKSB7IGNvbnNvbGUud2FybignbWQnKTsgfSxcbiAgbGcoKSB7IGNvbnNvbGUud2FybignbGcnKTsgfSxcbiAgeHNNaW4oKSB7IGNvbnNvbGUud2FybigneHNNaW4nKTsgfSxcbiAgc21NaW4oKSB7IGNvbnNvbGUud2Fybignc21NaW4nKTsgfSxcbiAgbWRNaW4oKSB7IGNvbnNvbGUud2FybignbWRNaW4nKTsgfSxcbiAgbGdNaW4oKSB7IGNvbnNvbGUud2FybignbGdNaW4nKTsgfSxcbiAgeHNNYXgoKSB7IGNvbnNvbGUud2FybigneHNNYXgnKTsgfSxcbiAgc21NYXgoKSB7IGNvbnNvbGUud2Fybignc21NYXgnKTsgfSxcbiAgbWRNYXgoKSB7IGNvbnNvbGUud2FybignbWRNYXgnKTsgfVxufTtcblxuXG5jbGFzcyBzZXRNZWRpYVF1ZXJ5Q2FsbGJhY2tzIHtcbiAgY29uc3RydWN0b3IobWVkaWFRdWVyaWVzQ29uZmlnKSB7XG4gICAgdGhpcy5NUV9DT05GSUcgPSBtZWRpYVF1ZXJpZXNDb25maWc7XG4gICAgdGhpcy5hZGRDYWxsYmFja3NUb01RRXZlbnRzKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzRnJvbU1RRXZlbnRzKCk7XG4gIH1cblxuICBhZGRDYWxsYmFja3NUb01RRXZlbnRzKCkge1xuICAgICQuZWFjaCh0aGlzLk1RX0NPTkZJRywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgJChzcykub24oa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVDYWxsYmFja3NGcm9tTVFFdmVudHMoKSB7XG4gICAgJC5lYWNoKHRoaXMuTVFfQ09ORklHLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAkKHNzKS5vbihrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5zcy5DdXJyZW5jaWVzID0gY2xhc3MgZXh0ZW5kcyBzZXRNZWRpYVF1ZXJ5Q2FsbGJhY2tzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJC5nZXRTY3JpcHQoJy9zZXJ2aWNlcy9qYXZhc2NyaXB0cy9jdXJyZW5jaWVzLmpzJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKEN1cnJlbmN5KTtcbiAgICB9KTtcbiAgICBzdXBlcihtZWRpYVF1ZXJpZXNDb25maWcpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxufTtcblxubmV3IHNzLkN1cnJlbmNpZXMoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY3kvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG5zcy5pbnN0YW5jZXMgPSBbXTtcblxuc3MuY2hlY2tJZkNsYXNzRXhpc3RzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICB0cnkge1xuICAgICQodGhpcykuYXR0cignZGF0YS1zcy1pbnN0YW5jZScsIHNzLmluc3RhbmNlcy5sZW5ndGgpO1xuICAgIHNzLmluc3RhbmNlcy5wdXNoKG5ldyBzc1tjbGFzc05hbWVdKCQodGhpcykpKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihgVGhlIGNsYXNzICR7Y2xhc3NOYW1lfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgfVxufTtcblxuc3MuaW5pdEJ5U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3Mtc3RhdGU9XCIke3N0YXRlfVwiXWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbi8vIGluaXQgbWV0aG9kXG5zcy5pbml0ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAvLyB3aWxsIGJlIGluaXRpYWxpemVkIGRlcGVuZGluZyBvbiB0aGUgZGF0YS1zcy1zdGF0ZSB2YWx1ZVxuICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHNzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHNzLmluaXRCeVN0YXRlKCdvbkxvYWQnKSk7XG4gIH1cbn07XG5cbi8vZGVzdHJveSBtZXRob2RcbnNzLmRlc3Ryb3kgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBsZXQgZGVzdHJveUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjdXJyZW50SW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoJ3NzLWluc3RhbmNlJyk7XG4gICAgc3MuaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0uZGVzdHJveSgpO1xuICAgICQodGhpcykucmVtb3ZlQXR0cignZGF0YS1zcy1pbnN0YW5jZScpO1xuICAgIHNzLmluc3RhbmNlc1tjdXJyZW50SW5zdGFuY2VdID0gbnVsbDtcbiAgfTtcblxuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYmFzZS9zcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=