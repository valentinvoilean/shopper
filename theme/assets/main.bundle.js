webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classes = __webpack_require__(299);
	
	var _classes2 = _interopRequireDefault(_classes);
	
	var _base = __webpack_require__(307);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var base = new _base2.default(_classes2.default);
	base.init();

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mediaQueries = __webpack_require__(300);
	
	var _mediaQueries2 = _interopRequireDefault(_mediaQueries);
	
	var _currencies = __webpack_require__(304);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [_mediaQueries2.default, _currencies2.default];

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(301);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _values = __webpack_require__(303);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * MediaQuery module
	 * Used to detect current media query
	 *
	 * Usage:
	 * $(window).on(MEDIA_QUERY, callback );
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
	 *    $(window).on('smMin', sayGoodbye })
	 *
	 *    or
	 *
	 *    $(window).on('smMin', function() { alert('hello'); })
	 *
	 *
	 * @type {{new()=>{_handleMQChange: ((mql, index?)), destroy: (())}}}
	 */
	var MediaQueries = function () {
	  function MediaQueries() {
	    var _this = this;
	
	    _classCallCheck(this, MediaQueries);
	
	    window.info = window.info || {};
	    info.matchedMediaQueries = info.matchedMediaQueries || [];
	
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
	
	  _createClass(MediaQueries, [{
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
	       * @private
	       */
	
	  }, {
	    key: '_handleMQChange',
	    value: function _handleMQChange(mql, breakpointName) {
	      if (mql.matches) {
	        (0, _jquery2.default)(window).triggerHandler(breakpointName);
	
	        if (breakpointName.indexOf('Min') === -1 && breakpointName.indexOf('Max') === -1) {
	          (0, _jquery2.default)(window).triggerHandler('mediaQueryChange', breakpointName);
	        }
	
	        _jquery2.default.each(info.matchedMediaQueries, function (index, value) {
	          if (!window.matchMedia(_values.MEDIA_QUERIES[value]).matches) {
	            info.matchedMediaQueries.splice(index, 1);
	          }
	        });
	
	        info.matchedMediaQueries.push(breakpointName);
	      }
	    }
	  }]);
	
	  return MediaQueries;
	}();
	
	exports.default = MediaQueries;
	;

/***/ },

/***/ 303:
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

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(301);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _mobile = __webpack_require__(305);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _desktop = __webpack_require__(306);
	
	var _desktop2 = _interopRequireDefault(_desktop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Currencies = function () {
	  function Currencies() {
	    _classCallCheck(this, Currencies);
	
	    this._addMediaQueryCallbacks();
	    this._checkCurrentBreakpoint();
	  }
	
	  _createClass(Currencies, [{
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
	      (0, _jquery2.default)(window).on('xsMax', _jquery2.default.proxy(this._onChangedToMobile, this));
	      (0, _jquery2.default)(window).on('smMin', _jquery2.default.proxy(this._onChangedToDesktop, this));
	    }
	  }, {
	    key: '_removeMediaQueryCallbacks',
	    value: function _removeMediaQueryCallbacks() {
	      (0, _jquery2.default)(window).off('xsMax', _jquery2.default.proxy(this._onChangedToMobile.bind(this)));
	      (0, _jquery2.default)(window).off('smMin', _jquery2.default.proxy(this._onChangedToDesktop.bind(this)));
	    }
	  }, {
	    key: '_checkCurrentBreakpoint',
	    value: function _checkCurrentBreakpoint() {
	      if (info && info.matchedMediaQueries && info.matchedMediaQueries.indexOf('xsMax') > -1) {
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
	
	  return Currencies;
	}();
	
	exports.default = Currencies;
	;

/***/ },

/***/ 305:
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

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(301);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    console.warn('desktop');
	    (0, _jquery2.default)(window).on('mediaQueryChange', _jquery2.default.proxy(this._onMediaQueryChange, this));
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

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(301);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Base = function () {
	  function Base(classes) {
	    _classCallCheck(this, Base);
	
	    window.info = window.info || {};
	    info.instances = info.instances || [];
	
	    this.classes = classes;
	  }
	
	  // init method
	
	
	  _createClass(Base, [{
	    key: 'init',
	    value: function init($container) {
	      var _this = this;
	
	      var deepScan = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      var _self = this;
	
	      if ($container) {
	        if ($container instanceof _jquery2.default) {
	
	          if (deepScan) {
	            // initialize all modules from the jQuery DOM element
	            $container.find('[data-ss-init]').each(function () {
	              var className = (0, _jquery2.default)(this).data('ss-init');
	              _self.checkIfClassExists((0, _jquery2.default)(this), className);
	            });
	          } else {
	            // initialize  the current element passed
	            $container.each(function () {
	              var className = (0, _jquery2.default)(this).data('ss-init');
	              if (className) {
	                _self.checkIfClassExists((0, _jquery2.default)(this), className);
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
	          return _this.initByState('onReady');
	        });
	        (0, _jquery2.default)(window).on('load', function () {
	          return _this.initByState('onLoad');
	        });
	      }
	    }
	  }, {
	    key: 'destroy',
	
	
	    //destroy method
	    value: function destroy($container) {
	      var deepScan = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      var destroyInstance = function destroyInstance() {
	        var currentInstance = (0, _jquery2.default)(this).data('ss-instance');
	        info.instances[currentInstance].destroy();
	        (0, _jquery2.default)(this).removeAttr('data-ss-instance');
	        info.instances[currentInstance] = null;
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
	    }
	  }, {
	    key: 'checkIfClassExists',
	    value: function checkIfClassExists($el, className) {
	      var classExists = false;
	
	      for (var i = 0, classesLength = this.classes.length; i < classesLength; i++) {
	        if (this.classes[i].name === className) {
	          $el.attr('data-ss-instance', info.instances.length);
	          classExists = true;
	          info.instances.push(new this.classes[i]($el));
	        }
	      }
	
	      if (!classExists) {
	        console.warn('The class ' + className + ' does not exist!');
	      }
	    }
	  }, {
	    key: 'initByState',
	    value: function initByState(state) {
	      var _self = this;
	
	      (0, _jquery2.default)(document).find('[data-ss-state="' + state + '"]').each(function () {
	        var className = (0, _jquery2.default)(this).data('ss-init');
	        _self.checkIfClassExists((0, _jquery2.default)(this), className);
	      });
	    }
	  }]);
	
	  return Base;
	}();
	
	exports.default = Base;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9tb2JpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9kZXNrdG9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9iYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFJLE9BQU8scUNBQVg7QUFDQSxNQUFLLElBQUwsRzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7OzttQkFFZSw4Qzs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5QnFCLFk7QUFFbkIsMkJBQWM7QUFBQTs7QUFBQTs7QUFDWixZQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsSUFBZSxFQUE3QjtBQUNBLFVBQUssbUJBQUwsR0FBMkIsS0FBSyxtQkFBTCxJQUE0QixFQUF2RDs7QUFFQSxzQkFBRSxJQUFGLHdCQUFzQixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3RDLFdBQUksTUFBTSxPQUFPLFVBQVAsQ0FBa0IsS0FBbEIsQ0FBVjs7QUFFQTtBQUNBO0FBQ0EsV0FBSSxXQUFKLENBQWdCLE1BQUssYUFBTCxHQUFxQixVQUFDLEdBQUQsRUFBUztBQUM1QyxlQUFLLGVBQUwsQ0FBcUIsR0FBckIsRUFB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QUFhLENBQWIsQ0FBSixDQUFvQixHQUFwQixDQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBSSxDQUFDLFdBQUwsRUFBa0I7QUFDaEIsaUJBQVEsSUFBUixnQkFBMEIsU0FBMUI7QUFDRDtBQUNGOzs7aUNBRVcsSyxFQUFPO0FBQ2pCLFdBQUksUUFBUSxJQUFaOztBQUVBLDZCQUFFLFFBQUYsRUFBWSxJQUFaLHNCQUFvQyxLQUFwQyxTQUErQyxJQUEvQyxDQUFvRCxZQUFXO0FBQzdELGFBQUksWUFBWSxzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFNBQWIsQ0FBaEI7QUFDQSxlQUFNLGtCQUFOLENBQXlCLHNCQUFFLElBQUYsQ0FBekIsRUFBa0MsU0FBbEM7QUFDRCxRQUhEO0FBSUQ7Ozs7OzttQkE3RmtCLEkiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICdjb21tb24vY2xhc3Nlcyc7XG5pbXBvcnQgQmFzZSBmcm9tICdiYXNlJztcblxubGV0IGJhc2UgPSBuZXcgQmFzZShjbGFzc2VzKTtcbmJhc2UuaW5pdCgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImltcG9ydCBNZWRpYVF1ZXJpZXMgZnJvbSAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuaW1wb3J0IEN1cnJlbmNpZXMgZnJvbSAnY29tcG9uZW50cy9jdXJyZW5jaWVzJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBNZWRpYVF1ZXJpZXMsXG4gIEN1cnJlbmNpZXNcbl07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21tb24vY2xhc3Nlcy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVN9IGZyb20gJ2NvbW1vbi92YWx1ZXMnO1xuXG4vKipcbiAqIE1lZGlhUXVlcnkgbW9kdWxlXG4gKiBVc2VkIHRvIGRldGVjdCBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gKlxuICogVXNhZ2U6XG4gKiAkKHdpbmRvdykub24oTUVESUFfUVVFUlksIGNhbGxiYWNrICk7XG4gKlxuICogV2hlcmU6XG4gKiAgICBNRURJQV9RVUVSWSBjYW4gYmUgOiAneHMnLCAnc20nLCAnbWQnLCAnbGcnLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWluJywgJ3NtTWluJywgJ21kTWluJywnbGdNaW4nLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWF4JywgJ3NtTWF4JywgJ21kTWF4JywgJ2xnTWF4J1xuICogICAgQ2FsbGJhY2s6IGZ1bmN0aW9uIG5hbWUgb3IgYW5vbnltb3VzIGZ1bmN0aW9uXG4gKlxuICogICAgZS5nLiA6XG4gKlxuICogICAgZnVuY3Rpb24gc2F5R29vZGJ5ZSA9IHsgYWxlcnQoJ2dvb2RieWUnKSB9XG4gKiAgICAkKHdpbmRvdykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJCh3aW5kb3cpLm9uKCdzbU1pbicsIGZ1bmN0aW9uKCkgeyBhbGVydCgnaGVsbG8nKTsgfSlcbiAqXG4gKlxuICogQHR5cGUge3tuZXcoKT0+e19oYW5kbGVNUUNoYW5nZTogKChtcWwsIGluZGV4PykpLCBkZXN0cm95OiAoKCkpfX19XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUXVlcmllcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgd2luZG93LmluZm8gPSB3aW5kb3cuaW5mbyB8fCB7fTtcbiAgICBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgPSBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgfHwgW107XG5cbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKTtcblxuICAgICAgLy8gdGhlIGRlZmF1bHQgbWF0Y2htZWRpYSdzIGFkZExpc3RlbmVyIG1ldGhvZCBkb2Vzbid0IHN1cHBvcnQgZXh0cmEgcGFyYW1ldGVycyxcbiAgICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIGFub3RoZXIgZXh0cmEgZnVuY3Rpb24gdGhhdCBjYW4gcGFzcyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWVcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIgPSAobXFsKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpLnJlbW92ZUxpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gaGFuZGxlIHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICogQHBhcmFtIG1xbCAtIGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAgICogQHBhcmFtIGJyZWFrcG9pbnROYW1lIC0gY3VycmVudCBicmVha3BvaW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgX2hhbmRsZU1RQ2hhbmdlKG1xbCwgYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICQod2luZG93KS50cmlnZ2VySGFuZGxlcihicmVha3BvaW50TmFtZSk7XG5cbiAgICAgIGlmIChicmVha3BvaW50TmFtZS5pbmRleE9mKCdNaW4nKSA9PT0gLTFcbiAgICAgICAgJiYgYnJlYWtwb2ludE5hbWUuaW5kZXhPZignTWF4JykgPT09IC0xKSB7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VySGFuZGxlcignbWVkaWFRdWVyeUNoYW5nZScsIGJyZWFrcG9pbnROYW1lKTtcbiAgICAgIH1cblxuICAgICAgJC5lYWNoKGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKE1FRElBX1FVRVJJRVNbdmFsdWVdKS5tYXRjaGVzKSB7XG4gICAgICAgICAgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMucHVzaChicmVha3BvaW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWlufXB4KWAsXG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHhzTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZE1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbW1vbi92YWx1ZXMuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IE1vYmlsZSBmcm9tICcuL21vYmlsZSc7XG5pbXBvcnQgRGVza3RvcCBmcm9tICcuL2Rlc2t0b3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYWRkTWVkaWFRdWVyeUNhbGxiYWNrcygpO1xuICAgIHRoaXMuX2NoZWNrQ3VycmVudEJyZWFrcG9pbnQoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlTWVkaWFRdWVyeUNhbGxiYWNrcygpO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBfYWRkTWVkaWFRdWVyeUNhbGxiYWNrcygpIHtcbiAgICAkKHdpbmRvdykub24oJ3hzTWF4JywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb01vYmlsZSwgdGhpcykpO1xuICAgICQod2luZG93KS5vbignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCwgdGhpcykpO1xuICB9XG5cbiAgX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJCh3aW5kb3cpLm9mZigneHNNYXgnLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlLmJpbmQodGhpcykpKTtcbiAgICAkKHdpbmRvdykub2ZmKCdzbU1pbicsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wLmJpbmQodGhpcykpKTtcbiAgfVxuXG4gIF9jaGVja0N1cnJlbnRCcmVha3BvaW50KCkge1xuICAgIGlmIChpbmZvICYmIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcyAmJiBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMuaW5kZXhPZigneHNNYXgnKSA+IC0xKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZWRUb01vYmlsZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkNoYW5nZWRUb0Rlc2t0b3AoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERlc2t0b3AoKTtcbiAgfVxuXG4gIF9vbkNoYW5nZWRUb01vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW9iaWxlKCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUud2FybignbW9iaWxlJyk7XG4gIH07XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Rlc3Ryb3kgbW9iaWxlJyk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9tb2JpbGUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUud2FybignZGVza3RvcCcpO1xuICAgICQod2luZG93KS5vbignbWVkaWFRdWVyeUNoYW5nZScsICQucHJveHkodGhpcy5fb25NZWRpYVF1ZXJ5Q2hhbmdlLCB0aGlzKSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUud2FybignZGVzdHJveSBkZXNrdG9wJyk7XG4gIH1cblxuICBfb25NZWRpYVF1ZXJ5Q2hhbmdlKGUsIGRhdGEpIHtcbiAgICBjb25zb2xlLndhcm4oZGF0YSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9kZXNrdG9wL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzZXMpIHtcbiAgICB3aW5kb3cuaW5mbyA9IHdpbmRvdy5pbmZvIHx8IHt9O1xuICAgIGluZm8uaW5zdGFuY2VzID0gaW5mby5pbnN0YW5jZXMgfHwgW107XG5cbiAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xuICB9XG5cbiAgLy8gaW5pdCBtZXRob2RcbiAgaW5pdCgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSB7XG4gICAgbGV0IF9zZWxmID0gdGhpcztcblxuICAgIGlmICgkY29udGFpbmVyKSB7XG4gICAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgICAvLyBpbml0aWFsaXplIGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICAgIF9zZWxmLmNoZWNrSWZDbGFzc0V4aXN0cygkKHRoaXMpLCBjbGFzc05hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGluaXRpYWxpemUgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzKCQodGhpcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB0aGlzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gdGhpcy5pbml0QnlTdGF0ZSgnb25Mb2FkJykpO1xuICAgIH1cbiAgfTtcblxuICAvL2Rlc3Ryb3kgbWV0aG9kXG4gIGRlc3Ryb3koJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkge1xuICAgIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudEluc3RhbmNlID0gJCh0aGlzKS5kYXRhKCdzcy1pbnN0YW5jZScpO1xuICAgICAgaW5mby5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnKTtcbiAgICAgIGluZm8uaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0gPSBudWxsO1xuICAgIH07XG5cbiAgICBpZiAoJGNvbnRhaW5lcikge1xuICAgICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gZGVzdHJveSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgICAkY29udGFpbmVyLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICBjaGVja0lmQ2xhc3NFeGlzdHMoJGVsLCBjbGFzc05hbWUpIHtcbiAgICBsZXQgY2xhc3NFeGlzdHMgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBjbGFzc2VzTGVuZ3RoID0gdGhpcy5jbGFzc2VzLmxlbmd0aDsgaSA8IGNsYXNzZXNMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuY2xhc3Nlc1tpXS5uYW1lID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnLCBpbmZvLmluc3RhbmNlcy5sZW5ndGgpO1xuICAgICAgICBjbGFzc0V4aXN0cyA9IHRydWU7XG4gICAgICAgIGluZm8uaW5zdGFuY2VzLnB1c2gobmV3IHRoaXMuY2xhc3Nlc1tpXSgkZWwpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNsYXNzRXhpc3RzKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBjbGFzcyAke2NsYXNzTmFtZX0gZG9lcyBub3QgZXhpc3QhYCk7XG4gICAgfVxuICB9O1xuXG4gIGluaXRCeVN0YXRlKHN0YXRlKSB7XG4gICAgbGV0IF9zZWxmID0gdGhpcztcblxuICAgICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzKCQodGhpcyksIGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==