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
	
	ss.Currencies = function (_setMediaQueryCallbac) {
	  _inherits(_class, _setMediaQueryCallbac);
	
	  function _class() {
	    _classCallCheck(this, _class);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, mediaQueriesConfig));
	
	    _jquery2.default.getScript('/services/javascripts/currencies.js', function () {
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
	}(_utils.setMediaQueryCallbacks);
	
	new ss.Currencies();

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var setMediaQueryCallbacks = exports.setMediaQueryCallbacks = function () {
	  function setMediaQueryCallbacks(mediaQueryCallbacks) {
	    _classCallCheck(this, setMediaQueryCallbacks);
	
	    this.mediaQueryCallbacks = mediaQueryCallbacks;
	    this.addCallbacksToMQEvents();
	  }
	
	  _createClass(setMediaQueryCallbacks, [{
	    key: "destroy",
	    value: function destroy() {
	      this.removeCallbacksFromMQEvents();
	    }
	  }, {
	    key: "addCallbacksToMQEvents",
	    value: function addCallbacksToMQEvents() {
	      $.each(this.mediaQueryCallbacks, function (key, value) {
	        $(ss).on(key, value);
	      });
	    }
	  }, {
	    key: "removeCallbacksFromMQEvents",
	    value: function removeCallbacksFromMQEvents() {
	      $.each(this.mediaQueryCallbacks, function (key, value) {
	        $(ss).on(key, value);
	      });
	    }
	  }]);

	  return setMediaQueryCallbacks;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(299)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7QUFHQTs7OztBQUVBLElBQUcsSUFBSDs7QUFIQTs7O0FBSkE7OztBQVNBLHVCQUFFLEVBQUYsRUFBTSxFQUFOLENBQVMsT0FBVCxFQUFrQixZQUFXO0FBQzNCLFdBQVEsSUFBUixDQUFhLE9BQWI7QUFDRCxFQUZELEU7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBTyxFQUFQLEdBQVksT0FBTyxFQUFQLElBQWEsRUFBekI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsSUFBRyxZQUFIO0FBRUUscUJBQWM7QUFBQTs7QUFBQTs7QUFDWixzQkFBRSxJQUFGLHdCQUFzQixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3RDLFdBQUksTUFBTSxPQUFPLFVBQVAsQ0FBa0IsS0FBbEIsQ0FBVjs7QUFFQTtBQUNBO0FBQ0EsV0FBSSxXQUFKLENBQWdCLE1BQUssYUFBTCxHQUFxQixVQUFDLEdBQUQsRUFBUztBQUM1QyxlQUFLLGVBQUwsQ0FBcUIsR0FBckIsRUFBMEIsS0FBMUI7QUFDRCxRQUZEOztBQUlBLGFBQUssZUFBTCxDQUFxQixHQUFyQixFQUEwQixLQUExQjtBQUNELE1BVkQ7QUFXRDs7QUFkSDtBQUFBO0FBQUEsK0JBZ0JZ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QVk7QUFDaEMsU0FBSSxrQkFBa0Isc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxhQUFiLENBQXRCO0FBQ0EsUUFBRyxTQUFILENBQWEsZUFBYixFQUE4QixPQUE5QjtBQUNBLDJCQUFFLElBQUYsRUFBUSxVQUFSLENBQW1CLGtCQUFuQjtBQUNBLFFBQUcsU0FBSCxDQUFhLGVBQWIsSUFBZ0MsSUFBaEM7QUFDRCxJQUxEOztBQU9BLE9BQUksVUFBSixFQUFnQjtBQUNkLFNBQUksc0NBQUosRUFBNkI7QUFDM0IsV0FBSSxRQUFKLEVBQWM7QUFDWjtBQUNBLG9CQUFXLElBQVgsdUJBQXNDLElBQXRDLENBQTJDLGVBQTNDO0FBQ0QsUUFIRCxNQUlLO0FBQ0g7QUFDQSxvQkFBVyxJQUFYLENBQWdCLGVBQWhCO0FBQ0Q7QUFDRixNQVRELE1BU087QUFDTCxlQUFRLEtBQVIsQ0FBYyxrREFBZDtBQUNEO0FBQ0YsSUFiRCxNQWNLO0FBQ0gsMkJBQUUsUUFBRixFQUFZLElBQVosdUJBQXVDLElBQXZDLENBQTRDLGVBQTVDO0FBQ0Q7QUFDRixFQXpCRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuaW1wb3J0ICdjb21wb25lbnRzL2N1cnJlbmN5JztcblxuLy8gaW1wb3J0IGJhc2VcbmltcG9ydCAnYmFzZS9zcyc7XG5cbnNzLmluaXQoKTtcblxuJChzcykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUud2Fybignc21NaW4nKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVN9IGZyb20gJy4vY29uZmlnJztcblxud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG4vKipcbiAqIE1lZGlhUXVlcnkgbW9kdWxlXG4gKiBVc2VkIHRvIGRldGVjdCBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gKlxuICogVXNhZ2U6XG4gKiAkKHNzKS5vbihNRURJQV9RVUVSWSwgY2FsbGJhY2sgKTtcbiAqXG4gKiBXaGVyZTpcbiAqICAgIE1FRElBX1FVRVJZIGNhbiBiZSA6ICd4cycsICdzbScsICdtZCcsICdsZycsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAneHNNaW4nLCAnc21NaW4nLCAnbWRNaW4nLCdsZ01pbicsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAneHNNYXgnLCAnc21NYXgnLCAnbWRNYXgnLCAnbGdNYXgnXG4gKiAgICBDYWxsYmFjazogZnVuY3Rpb24gbmFtZSBvciBhbm9ueW1vdXMgZnVuY3Rpb25cbiAqXG4gKiAgICBlLmcuIDpcbiAqXG4gKiAgICBmdW5jdGlvbiBzYXlHb29kYnllID0geyBhbGVydCgnZ29vZGJ5ZScpIH1cbiAqICAgICQoc3MpLm9uKCdzbU1pbicsIHNheUdvb2RieWUgfSlcbiAqXG4gKiAgICBvclxuICpcbiAqICAgICQoc3MpLm9uKCdzbU1pbicsIGZ1bmN0aW9uKCkgeyBhbGVydCgnaGVsbG8nKTsgfSlcbiAqXG4gKlxuICogQHR5cGUge3tuZXcoKT0+e19oYW5kbGVNUUNoYW5nZTogKChtcWwsIGluZGV4PykpLCBkZXN0cm95OiAoKCkpfX19XG4gKi9cbnNzLk1lZGlhUXVlcmllcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKTtcblxuICAgICAgLy8gdGhlIGRlZmF1bHQgbWF0Y2htZWRpYSdzIGFkZExpc3RlbmVyIG1ldGhvZCBkb2Vzbid0IHN1cHBvcnQgZXh0cmEgcGFyYW1ldGVycyxcbiAgICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIGFub3RoZXIgZXh0cmEgZnVuY3Rpb24gdGhhdCBjYW4gcGFzcyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWVcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIgPSAobXFsKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpLnJlbW92ZUxpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gaGFuZGxlIHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICogQHBhcmFtIG1xbCAtIGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAgICogQHBhcmFtIGluZGV4IC0gY3VycmVudCBicmVha3BvaW50XG4gICAqIEBwcml2YXRlXG4gICAgICovXG4gIF9oYW5kbGVNUUNoYW5nZShtcWwsIGluZGV4KSB7XG4gICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICAkKHNzKS50cmlnZ2VyKGluZGV4KTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lZGlhUXVlcmllcy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBWQUxVRVNfR1JJRCA9IHtcbiAgeHNNaW46IDAsXG4gIHhzTWF4OiA3NjcsXG4gIHNtTWluOiA3NjgsXG4gIHNtTWF4OiAxMDIzLFxuICBtZE1pbjogMTAyNCxcbiAgbWRNYXg6IDExOTksXG4gIGxnTWluOiAxMjAwXG59O1xuXG5leHBvcnQgY29uc3QgTUVESUFfUVVFUklFUyA9IHtcbiAgeHM6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc206IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIG1kOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBsZzogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgLFxuICB4c01pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC54c01pbn1weClgLFxuICBzbU1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weClgLFxuICBtZE1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weClgLFxuICBsZ01pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgLFxuICB4c01heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZE1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvY29uZmlnLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7c2V0TWVkaWFRdWVyeUNhbGxiYWNrc30gZnJvbSAnY29tcG9uZW50cy91dGlscyc7XG5cbndpbmRvdy5zcyA9IHdpbmRvdy5zcyB8fCB7fTtcblxubGV0IG1lZGlhUXVlcmllc0NvbmZpZyA9IHtcbiAgeHMoKSB7IGNvbnNvbGUud2FybigneHMnKTsgfSxcbiAgc20oKSB7IGNvbnNvbGUud2Fybignc20nKTsgfSxcbiAgbWQoKSB7IGNvbnNvbGUud2FybignbWQnKTsgfSxcbiAgbGcoKSB7IGNvbnNvbGUud2FybignbGcnKTsgfSxcbiAgeHNNaW4oKSB7IGNvbnNvbGUud2FybigneHNNaW4nKTsgfSxcbiAgc21NaW4oKSB7IGNvbnNvbGUud2Fybignc21NaW4nKTsgfSxcbiAgbWRNaW4oKSB7IGNvbnNvbGUud2FybignbWRNaW4nKTsgfSxcbiAgbGdNaW4oKSB7IGNvbnNvbGUud2FybignbGdNaW4nKTsgfSxcbiAgeHNNYXgoKSB7IGNvbnNvbGUud2FybigneHNNYXgnKTsgfSxcbiAgc21NYXgoKSB7IGNvbnNvbGUud2Fybignc21NYXgnKTsgfSxcbiAgbWRNYXgoKSB7IGNvbnNvbGUud2FybignbWRNYXgnKTsgfVxufTtcblxuc3MuQ3VycmVuY2llcyA9IGNsYXNzIGV4dGVuZHMgc2V0TWVkaWFRdWVyeUNhbGxiYWNrcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG1lZGlhUXVlcmllc0NvbmZpZyk7XG5cbiAgICAkLmdldFNjcmlwdCgnL3NlcnZpY2VzL2phdmFzY3JpcHRzL2N1cnJlbmNpZXMuanMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oQ3VycmVuY3kpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxufTtcblxubmV3IHNzLkN1cnJlbmNpZXMoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY3kvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY2xhc3Mgc2V0TWVkaWFRdWVyeUNhbGxiYWNrcyB7XG4gIGNvbnN0cnVjdG9yKG1lZGlhUXVlcnlDYWxsYmFja3MpIHtcbiAgICB0aGlzLm1lZGlhUXVlcnlDYWxsYmFja3MgPSBtZWRpYVF1ZXJ5Q2FsbGJhY2tzO1xuICAgIHRoaXMuYWRkQ2FsbGJhY2tzVG9NUUV2ZW50cygpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZUNhbGxiYWNrc0Zyb21NUUV2ZW50cygpO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tzVG9NUUV2ZW50cygpIHtcbiAgICAkLmVhY2godGhpcy5tZWRpYVF1ZXJ5Q2FsbGJhY2tzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAkKHNzKS5vbihrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUNhbGxiYWNrc0Zyb21NUUV2ZW50cygpIHtcbiAgICAkLmVhY2godGhpcy5tZWRpYVF1ZXJ5Q2FsbGJhY2tzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAkKHNzKS5vbihrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy91dGlscy9pbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmluc3RhbmNlcyA9IFtdO1xuXG5zcy5jaGVja0lmQ2xhc3NFeGlzdHMgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gIHRyeSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNzLWluc3RhbmNlJywgc3MuaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgc3MuaW5zdGFuY2VzLnB1c2gobmV3IHNzW2NsYXNzTmFtZV0oJCh0aGlzKSkpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICB9XG59O1xuXG5zcy5pbml0QnlTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLy8gaW5pdCBtZXRob2RcbnNzLmluaXQgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRJbnN0YW5jZSA9ICQodGhpcykuZGF0YSgnc3MtaW5zdGFuY2UnKTtcbiAgICBzcy5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNzLWluc3RhbmNlJyk7XG4gICAgc3MuaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0gPSBudWxsO1xuICB9O1xuXG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gZGVzdHJveSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL3NzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==