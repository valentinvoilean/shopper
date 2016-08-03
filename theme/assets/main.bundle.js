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
	
	__webpack_require__(306);
	
	ss.init();
	
	// import base
	// import components

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _values = __webpack_require__(302);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.ss = window.ss || {};
	ss.utils = ss.utils || {};
	ss.utils.matchedMediaQueries = [];
	
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
	
	    _jquery2.default.each(_values.MEDIA_QUERIES, function (index, value) {
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
	
	      _jquery2.default.each(_values.MEDIA_QUERIES, function (index, value) {
	        window.matchMedia(value).removeListener(_this2.addMQListener);
	      });
	    }
	
	    /////////////////////
	    // Private Methods //
	    /////////////////////
	
	    /**
	     * Method to handle the media query change
	     * @param mql - current media query
	     * @param breakpointName - current breakpoint
	     * where will store the initial matched media queries
	       * @private
	       */
	
	  }, {
	    key: '_handleMQChange',
	    value: function _handleMQChange(mql, breakpointName) {
	      if (mql.matches) {
	        (0, _jquery2.default)(ss).trigger(breakpointName);
	
	        if (breakpointName.indexOf('Min') === -1 && breakpointName.indexOf('Max') === -1) {
	          (0, _jquery2.default)(ss).trigger('mediaQueryChange', breakpointName);
	        }
	
	        _jquery2.default.each(ss.utils.matchedMediaQueries, function (index, value) {
	          if (!window.matchMedia(_values.MEDIA_QUERIES[value]).matches) {
	            ss.utils.matchedMediaQueries.splice(index, 1);
	          }
	        });
	
	        ss.utils.matchedMediaQueries.push(breakpointName);
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
	  xsMin: "screen and (min-width: " + VALUES_GRID.xsMin + "px)",
	  xs: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  xsMax: "screen and (max-width: " + VALUES_GRID.xsMax + "px)",
	  smMin: "screen and (min-width: " + VALUES_GRID.smMin + "px)",
	  sm: "screen and (min-width: " + VALUES_GRID.smMin + "px) and (max-width: " + VALUES_GRID.smMax + "px)",
	  smMax: "screen and (max-width: " + VALUES_GRID.smMax + "px)",
	  mdMin: "screen and (min-width: " + VALUES_GRID.mdMin + "px)",
	  md: "screen and (min-width: " + VALUES_GRID.mdMin + "px) and (max-width: " + VALUES_GRID.mdMax + "px)",
	  mdMax: "screen and (max-width: " + VALUES_GRID.mdMax + "px)",
	  lgMin: "screen and (min-width: " + VALUES_GRID.lgMin + "px)",
	  lg: "screen and (min-width: " + VALUES_GRID.lgMin + "px)"
	};

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _mobile = __webpack_require__(304);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _desktop = __webpack_require__(305);
	
	var _desktop2 = _interopRequireDefault(_desktop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.ss.Currencies = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    this._addMediaQueryCallbacks();
	    this._checkCurrentBreakpoint();
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._removeMediaQueryCallbacks();
	      if (this.instance) {
	        this.instance.destroy();
	      }
	      this.instance = null;
	    }
	  }, {
	    key: '_addMediaQueryCallbacks',
	    value: function _addMediaQueryCallbacks() {
	      (0, _jquery2.default)(ss).on('xsMax', _jquery2.default.proxy(this._onChangedToMobile, this));
	      (0, _jquery2.default)(ss).on('smMin', _jquery2.default.proxy(this._onChangedToDesktop, this));
	    }
	  }, {
	    key: '_removeMediaQueryCallbacks',
	    value: function _removeMediaQueryCallbacks() {
	      (0, _jquery2.default)(ss).off('xsMax', _jquery2.default.proxy(this._onChangedToMobile.bind(this)));
	      (0, _jquery2.default)(ss).off('smMin', _jquery2.default.proxy(this._onChangedToDesktop.bind(this)));
	    }
	  }, {
	    key: '_checkCurrentBreakpoint',
	    value: function _checkCurrentBreakpoint() {
	      if (ss.utils && ss.utils.matchedMediaQueries && ss.utils.matchedMediaQueries.indexOf('xsMax') > -1) {
	        this._onChangedToMobile();
	      } else {
	        this._onChangedToDesktop();
	      }
	    }
	  }, {
	    key: '_onChangedToDesktop',
	    value: function _onChangedToDesktop() {
	      if (this.instance) {
	        this.instance.destroy();
	      }
	      this.instance = new _desktop2.default();
	    }
	  }, {
	    key: '_onChangedToMobile',
	    value: function _onChangedToMobile() {
	      if (this.instance) {
	        this.instance.destroy();
	      }
	      this.instance = new _mobile2.default();
	    }
	  }]);
	
	  return _class;
	}();

/***/ },

/***/ 304:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    console.warn('mobile');
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      console.warn('destroy mobile');
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    console.warn('desktop');
	    (0, _jquery2.default)(ss).on('mediaQueryChange', _jquery2.default.proxy(this._onMediaQueryChange, this));
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      console.warn('destroy desktop');
	    }
	  }, {
	    key: '_onMediaQueryChange',
	    value: function _onMediaQueryChange(e, data) {
	      console.warn(data);
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.ss = window.ss || {};
	
	ss.instances = [];
	ss.utils = ss.utils || {};
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL21vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL2Rlc2t0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2Uvc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUdBOztBQUVBLElBQUcsSUFBSDs7QUFIQTtBQUpBLHFCOzs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCO0FBQ0EsSUFBRyxLQUFILEdBQVcsR0FBRyxLQUFILElBQVksRUFBdkI7QUFDQSxJQUFHLEtBQUgsQ0FBUyxtQkFBVCxHQUErQixFQUEvQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxJQUFHLFlBQUg7QUFFRSxxQkFBYztBQUFBOztBQUFBOztBQUNaLHNCQUFFLElBQUYsd0JBQXNCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdEMsV0FBSSxNQUFNLE9BQU8sVUFBUCxDQUFrQixLQUFsQixDQUFWOztBQUVBO0FBQ0E7QUFDQSxXQUFJLFdBQUosQ0FBZ0IsTUFBSyxhQUFMLEdBQXFCLFVBQUMsR0FBRCxFQUFTO0FBQzVDLGVBQUssZUFBTCxDQUFxQixHQUFyQixFQUEwQixLQUExQjtBQUNELFFBRkQ7O0FBSUEsYUFBSyxlQUFMLENBQXFCLEdBQXJCLEVBQTBCLEtB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LFNBQUksc0NBQUosRUFBNkI7QUFDM0IsV0FBSSxRQUFKLEVBQWM7QUFDWjtBQUNBLG9CQUFXLElBQVgsdUJBQXNDLElBQXRDLENBQTJDLGVBQTNDO0FBQ0QsUUFIRCxNQUlLO0FBQ0g7QUFDQSxvQkFBVyxJQUFYLENBQWdCLGVBQWhCO0FBQ0Q7QUFDRixNQVRELE1BU087QUFDTCxlQUFRLEtBQVIsQ0FBYyxrREFBZDtBQUNEO0FBQ0YsSUFiRCxNQWNLO0FBQ0gsMkJBQUUsUUFBRixFQUFZLElBQVosdUJBQXVDLElBQXZDLENBQTRDLGVBQTVDO0FBQ0Q7QUFDRixFQXpCRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuaW1wb3J0ICdjb21wb25lbnRzL2N1cnJlbmNpZXMnO1xuXG4vLyBpbXBvcnQgYmFzZVxuaW1wb3J0ICdiYXNlL3NzJztcblxuc3MuaW5pdCgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVN9IGZyb20gJ2NvbW1vbi92YWx1ZXMnO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5zcy51dGlscyA9IHNzLnV0aWxzIHx8IHt9O1xuc3MudXRpbHMubWF0Y2hlZE1lZGlhUXVlcmllcyA9IFtdO1xuXG4vKipcbiAqIE1lZGlhUXVlcnkgbW9kdWxlXG4gKiBVc2VkIHRvIGRldGVjdCBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gKlxuICogVXNhZ2U6XG4gKiAkKHNzKS5vbihNRURJQV9RVUVSWSwgY2FsbGJhY2sgKTtcbiAqXG4gKiBXaGVyZTpcbiAqICAgIE1FRElBX1FVRVJZIGNhbiBiZSA6ICd4cycsICdzbScsICdtZCcsICdsZycsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAneHNNaW4nLCAnc21NaW4nLCAnbWRNaW4nLCdsZ01pbicsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAneHNNYXgnLCAnc21NYXgnLCAnbWRNYXgnLCAnbGdNYXgnXG4gKiAgICBDYWxsYmFjazogZnVuY3Rpb24gbmFtZSBvciBhbm9ueW1vdXMgZnVuY3Rpb25cbiAqXG4gKiAgICBlLmcuIDpcbiAqXG4gKiAgICBmdW5jdGlvbiBzYXlHb29kYnllID0geyBhbGVydCgnZ29vZGJ5ZScpIH1cbiAqICAgICQoc3MpLm9uKCdzbU1pbicsIHNheUdvb2RieWUgfSlcbiAqXG4gKiAgICBvclxuICpcbiAqICAgICQoc3MpLm9uKCdzbU1pbicsIGZ1bmN0aW9uKCkgeyBhbGVydCgnaGVsbG8nKTsgfSlcbiAqXG4gKlxuICogQHR5cGUge3tuZXcoKT0+e19oYW5kbGVNUUNoYW5nZTogKChtcWwsIGluZGV4PykpLCBkZXN0cm95OiAoKCkpfX19XG4gKi9cbnNzLk1lZGlhUXVlcmllcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKTtcblxuICAgICAgLy8gdGhlIGRlZmF1bHQgbWF0Y2htZWRpYSdzIGFkZExpc3RlbmVyIG1ldGhvZCBkb2Vzbid0IHN1cHBvcnQgZXh0cmEgcGFyYW1ldGVycyxcbiAgICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIGFub3RoZXIgZXh0cmEgZnVuY3Rpb24gdGhhdCBjYW4gcGFzcyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWVcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIgPSAobXFsKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpLnJlbW92ZUxpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gaGFuZGxlIHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICogQHBhcmFtIG1xbCAtIGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAgICogQHBhcmFtIGJyZWFrcG9pbnROYW1lIC0gY3VycmVudCBicmVha3BvaW50XG4gICAqIHdoZXJlIHdpbGwgc3RvcmUgdGhlIGluaXRpYWwgbWF0Y2hlZCBtZWRpYSBxdWVyaWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgX2hhbmRsZU1RQ2hhbmdlKG1xbCwgYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoYnJlYWtwb2ludE5hbWUpO1xuXG4gICAgICBpZiAoYnJlYWtwb2ludE5hbWUuaW5kZXhPZignTWluJykgPT09IC0xXG4gICAgICAgICYmIGJyZWFrcG9pbnROYW1lLmluZGV4T2YoJ01heCcpID09PSAtMSkge1xuICAgICAgICAkKHNzKS50cmlnZ2VyKCdtZWRpYVF1ZXJ5Q2hhbmdlJywgYnJlYWtwb2ludE5hbWUpO1xuICAgICAgfVxuXG4gICAgICAkLmVhY2goc3MudXRpbHMubWF0Y2hlZE1lZGlhUXVlcmllcywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKE1FRElBX1FVRVJJRVNbdmFsdWVdKS5tYXRjaGVzKSB7XG4gICAgICAgICAgc3MudXRpbHMubWF0Y2hlZE1lZGlhUXVlcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3MudXRpbHMubWF0Y2hlZE1lZGlhUXVlcmllcy5wdXNoKGJyZWFrcG9pbnROYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lZGlhUXVlcmllcy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBWQUxVRVNfR1JJRCA9IHtcbiAgeHNNaW46IDAsXG4gIHhzTWF4OiA3NjcsXG4gIHNtTWluOiA3NjgsXG4gIHNtTWF4OiAxMDIzLFxuICBtZE1pbjogMTAyNCxcbiAgbWRNYXg6IDExOTksXG4gIGxnTWluOiAxMjAwXG59O1xuXG5leHBvcnQgY29uc3QgTUVESUFfUVVFUklFUyA9IHtcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgeHM6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgeHNNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgc206IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIHNtTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIG1kTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KWAsXG4gIG1kOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBtZE1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBsZ01pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgLFxuICBsZzogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tbW9uL3ZhbHVlcy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vbW9iaWxlJztcbmltcG9ydCBEZXNrdG9wIGZyb20gJy4vZGVza3RvcCc7XG5cbndpbmRvdy5zcy5DdXJyZW5jaWVzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgdGhpcy5fY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIF9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQoc3MpLm9uKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUsIHRoaXMpKTtcbiAgICAkKHNzKS5vbignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCwgdGhpcykpO1xuICB9XG5cbiAgX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJChzcykub2ZmKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUuYmluZCh0aGlzKSkpO1xuICAgICQoc3MpLm9mZignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcC5iaW5kKHRoaXMpKSk7XG4gIH1cblxuICBfY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpIHtcbiAgICBpZiAoc3MudXRpbHMgJiYgc3MudXRpbHMubWF0Y2hlZE1lZGlhUXVlcmllc1xuICAgICAgJiYgc3MudXRpbHMubWF0Y2hlZE1lZGlhUXVlcmllcy5pbmRleE9mKCd4c01heCcpID4gLTEpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlZFRvRGVza3RvcCgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRGVza3RvcCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlZFRvTW9iaWxlKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb2JpbGUoKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdtb2JpbGUnKTtcbiAgfTtcblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUud2FybignZGVzdHJveSBtb2JpbGUnKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL21vYmlsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdkZXNrdG9wJyk7XG4gICAgJChzcykub24oJ21lZGlhUXVlcnlDaGFuZ2UnLCAkLnByb3h5KHRoaXMuX29uTWVkaWFRdWVyeUNoYW5nZSwgdGhpcykpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Rlc3Ryb3kgZGVza3RvcCcpO1xuICB9XG5cbiAgX29uTWVkaWFRdWVyeUNoYW5nZShlLCBkYXRhKSB7XG4gICAgY29uc29sZS53YXJuKGRhdGEpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvZGVza3RvcC9pbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbnNzLmluc3RhbmNlcyA9IFtdO1xuc3MudXRpbHMgPSBzcy51dGlscyB8fCB7fTtcblxuc3MuY2hlY2tJZkNsYXNzRXhpc3RzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICB0cnkge1xuICAgICQodGhpcykuYXR0cignZGF0YS1zcy1pbnN0YW5jZScsIHNzLmluc3RhbmNlcy5sZW5ndGgpO1xuICAgIHNzLmluc3RhbmNlcy5wdXNoKG5ldyBzc1tjbGFzc05hbWVdKCQodGhpcykpKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihgVGhlIGNsYXNzICR7Y2xhc3NOYW1lfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgfVxufTtcblxuc3MuaW5pdEJ5U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3Mtc3RhdGU9XCIke3N0YXRlfVwiXWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbi8vIGluaXQgbWV0aG9kXG5zcy5pbml0ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAvLyB3aWxsIGJlIGluaXRpYWxpemVkIGRlcGVuZGluZyBvbiB0aGUgZGF0YS1zcy1zdGF0ZSB2YWx1ZVxuICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHNzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHNzLmluaXRCeVN0YXRlKCdvbkxvYWQnKSk7XG4gIH1cbn07XG5cbi8vZGVzdHJveSBtZXRob2RcbnNzLmRlc3Ryb3kgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBsZXQgZGVzdHJveUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjdXJyZW50SW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoJ3NzLWluc3RhbmNlJyk7XG4gICAgc3MuaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0uZGVzdHJveSgpO1xuICAgICQodGhpcykucmVtb3ZlQXR0cignZGF0YS1zcy1pbnN0YW5jZScpO1xuICAgIHNzLmluc3RhbmNlc1tjdXJyZW50SW5zdGFuY2VdID0gbnVsbDtcbiAgfTtcblxuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYmFzZS9zcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=