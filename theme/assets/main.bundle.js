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
	
	var _config = __webpack_require__(302);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.ss = window.ss || {};
	ss.utils = ss.utils || {};
	ss.utils.initMediaQueries = [];
	
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
	
	      _this._handleMQChange(mql, index, true);
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
	
	    /**
	     * Method to handle the media query change
	     * @param mql - current media query
	     * @param index - current breakpoint
	     * @param setInitMQ - if is true, will update the ss.utils.initMediaQueries
	       * @private
	       */
	
	  }, {
	    key: '_handleMQChange',
	    value: function _handleMQChange(mql, index) {
	      var setInitMQ = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      if (mql.matches) {
	        (0, _jquery2.default)(ss).trigger(index);
	
	        if (setInitMQ) {
	          ss.utils.initMediaQueries.push(index);
	        }
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
	      if (ss.utils && ss.utils.initMediaQueries) {
	        if (ss.utils.initMediaQueries.indexOf('xsMax') > -1) {
	          this._onChangedToMobile();
	        } else {
	          this._onChangedToDesktop();
	        }
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
	
	    console.log('mobile');
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      console.log('destroy mobile');
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

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
	
	    console.log('desktop');
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      console.log('destroy desktop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvbW9iaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvZGVza3RvcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9zcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBRUEsSUFBRyxJQUFIOztBQUhBO0FBSkEscUI7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBTyxFQUFQLEdBQVksT0FBTyxFQUFQLElBQWEsRUFBekI7QUFDQSxJQUFHLEtBQUgsR0FBVyxHQUFHLEtBQUgsSUFBWSxFQUF2QjtBQUNBLElBQUcsS0FBSCxDQUFTLGdCQUFULEdBQTRCLEVBQTVCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLElBQUcsWUFBSDtBQUVFLHFCQUFjO0FBQUE7O0FBQUE7O0FBQ1osc0JBQUUsSUFBRix3QkFBc0IsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN0QyxXQUFJLE1BQU0sT0FBTyxVQUFQLENBQWtCLEtBQWxCLENBQVY7O0FBRUE7QUFDQTtBQUNBLFdBQUksV0FBSixDQUFnQixNQUFLLGFBQUwsR0FBcUIsVUFBQyxHQUFELEVBQVM7QUFDNUMsZUFBSyxlQUFMLENBQXFCLEdBQXJCLEVBQTBCLEtBQTFCO0FBQ0QsUUFGRDs7QUFJQSxhQUFLLGVBQUwsQ0FB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RSxRQUFGLEVBQVksS0FBWixDQUFrQjtBQUFBLGNBQU0sR0FBRyxXQUFILENBQWUsU0FBZixDQUFOO0FBQUEsTUFBbEI7QUFDQSwyQkFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLE1BQWIsRUFBcUI7QUFBQSxjQUFNLEdBQUcsV0FBSCxDQUFlLFFBQWYsQ0FBTjtBQUFBLE1BQXJCO0FBQ0Q7QUFDRixFQTlCRDs7QUFnQ0E7QUFDQSxJQUFHLE9BQUgsR0FBYSxVQUFDLFVBQUQsRUFBa0M7QUFBQSxPQUFyQixRQUFxQix5REFBVixLQUFVOztBQUM3QyxPQUFJLGtCQUFrQixTQUFsQixlQUFrQixHQUFZO0FBQ2hDLFNBQUksa0JBQWtCLHNCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsYUFBYixDQUF0QjtBQUNBLFFBQUcsU0FBSCxDQUFhLGVBQWIsRUFBOEIsT0FBOUI7QUFDQSwyQkFBRSxJQUFGLEVBQVEsVUFBUixDQUFtQixrQkFBbkI7QUFDQSxRQUFHLFNBQUgsQ0FBYSxlQUFiLElBQWdDLElBQWhDO0FBQ0QsSUFMRDs7QUFPQSxPQUFJLFVBQUosRUFBZ0I7QUFDZCxTQUFJLHNDQUFKLEVBQTZCO0FBQzNCLFdBQUksUUFBSixFQUFjO0FBQ1o7QUFDQSxvQkFBVyxJQUFYLHVCQUFzQyxJQUF0QyxDQUEyQyxlQUEzQztBQUNELFFBSEQsTUFJSztBQUNIO0FBQ0Esb0JBQVcsSUFBWCxDQUFnQixlQUFoQjtBQUNEO0FBQ0YsTUFURCxNQVNPO0FBQ0wsZUFBUSxLQUFSLENBQWMsa0RBQWQ7QUFDRDtBQUNGLElBYkQsTUFjSztBQUNILDJCQUFFLFFBQUYsRUFBWSxJQUFaLHVCQUF1QyxJQUF2QyxDQUE0QyxlQUE1QztBQUNEO0FBQ0YsRUF6QkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgJ2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzJztcbmltcG9ydCAnY29tcG9uZW50cy9jdXJyZW5jaWVzJztcblxuLy8gaW1wb3J0IGJhc2VcbmltcG9ydCAnYmFzZS9zcyc7XG5cbnNzLmluaXQoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtNRURJQV9RVUVSSUVTfSBmcm9tICcuL2NvbmZpZyc7XG5cbndpbmRvdy5zcyA9IHdpbmRvdy5zcyB8fCB7fTtcbnNzLnV0aWxzID0gc3MudXRpbHMgfHwge307XG5zcy51dGlscy5pbml0TWVkaWFRdWVyaWVzID0gW107XG5cbi8qKlxuICogTWVkaWFRdWVyeSBtb2R1bGVcbiAqIFVzZWQgdG8gZGV0ZWN0IGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAqXG4gKiBVc2FnZTpcbiAqICQoc3MpLm9uKE1FRElBX1FVRVJZLCBjYWxsYmFjayApO1xuICpcbiAqIFdoZXJlOlxuICogICAgTUVESUFfUVVFUlkgY2FuIGJlIDogJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01pbicsICdzbU1pbicsICdtZE1pbicsJ2xnTWluJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01heCcsICdzbU1heCcsICdtZE1heCcsICdsZ01heCdcbiAqICAgIENhbGxiYWNrOiBmdW5jdGlvbiBuYW1lIG9yIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqICAgIGUuZy4gOlxuICpcbiAqICAgIGZ1bmN0aW9uIHNheUdvb2RieWUgPSB7IGFsZXJ0KCdnb29kYnllJykgfVxuICogICAgJChzcykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJChzcykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCdoZWxsbycpOyB9KVxuICpcbiAqXG4gKiBAdHlwZSB7e25ldygpPT57X2hhbmRsZU1RQ2hhbmdlOiAoKG1xbCwgaW5kZXg/KSksIGRlc3Ryb3k6ICgoKSl9fX1cbiAqL1xuc3MuTWVkaWFRdWVyaWVzID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpO1xuXG4gICAgICAvLyB0aGUgZGVmYXVsdCBtYXRjaG1lZGlhJ3MgYWRkTGlzdGVuZXIgbWV0aG9kIGRvZXNuJ3Qgc3VwcG9ydCBleHRyYSBwYXJhbWV0ZXJzLFxuICAgICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgYW5vdGhlciBleHRyYSBmdW5jdGlvbiB0aGF0IGNhbiBwYXNzIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgbmFtZVxuICAgICAgbXFsLmFkZExpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lciA9IChtcWwpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSkucmVtb3ZlTGlzdGVuZXIodGhpcy5hZGRNUUxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBoYW5kbGUgdGhlIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICAgKiBAcGFyYW0gbXFsIC0gY3VycmVudCBtZWRpYSBxdWVyeVxuICAgKiBAcGFyYW0gaW5kZXggLSBjdXJyZW50IGJyZWFrcG9pbnRcbiAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGhhbmRsZSB0aGUgbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAqIEBwYXJhbSBtcWwgLSBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gICAqIEBwYXJhbSBpbmRleCAtIGN1cnJlbnQgYnJlYWtwb2ludFxuICAgKiBAcGFyYW0gc2V0SW5pdE1RIC0gaWYgaXMgdHJ1ZSwgd2lsbCB1cGRhdGUgdGhlIHNzLnV0aWxzLmluaXRNZWRpYVF1ZXJpZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICBfaGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCwgc2V0SW5pdE1RID0gZmFsc2UpIHtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoaW5kZXgpO1xuXG4gICAgICBpZiAoc2V0SW5pdE1RKSB7XG4gICAgICAgIHNzLnV0aWxzLmluaXRNZWRpYVF1ZXJpZXMucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgeHNNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc21NYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vbW9iaWxlJztcbmltcG9ydCBEZXNrdG9wIGZyb20gJy4vZGVza3RvcCc7XG5cbndpbmRvdy5zcy5DdXJyZW5jaWVzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgdGhpcy5fY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIF9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQoc3MpLm9uKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUsIHRoaXMpKTtcbiAgICAkKHNzKS5vbignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCwgdGhpcykpO1xuICB9XG5cbiAgX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJChzcykub2ZmKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUuYmluZCh0aGlzKSkpO1xuICAgICQoc3MpLm9mZignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcC5iaW5kKHRoaXMpKSk7IFxuICB9XG5cbiAgX2NoZWNrQ3VycmVudEJyZWFrcG9pbnQoKSB7XG4gICAgaWYgKHNzLnV0aWxzICYmIHNzLnV0aWxzLmluaXRNZWRpYVF1ZXJpZXMpIHtcbiAgICAgIGlmIChzcy51dGlscy5pbml0TWVkaWFRdWVyaWVzLmluZGV4T2YoJ3hzTWF4JykgPiAtMSkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZWRUb01vYmlsZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbkNoYW5nZWRUb0Rlc2t0b3AoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERlc2t0b3AoKTtcbiAgfVxuXG4gIF9vbkNoYW5nZWRUb01vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW9iaWxlKCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdtb2JpbGUnKTtcbiAgfTtcblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IG1vYmlsZScpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvbW9iaWxlL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZGVza3RvcCcpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZygnZGVzdHJveSBkZXNrdG9wJyk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9kZXNrdG9wL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbndpbmRvdy5zcyA9IHdpbmRvdy5zcyB8fCB7fTtcblxuc3MuaW5zdGFuY2VzID0gW107XG5zcy51dGlscyA9IHNzLnV0aWxzIHx8IHt9O1xuXG5zcy5jaGVja0lmQ2xhc3NFeGlzdHMgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gIHRyeSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNzLWluc3RhbmNlJywgc3MuaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgc3MuaW5zdGFuY2VzLnB1c2gobmV3IHNzW2NsYXNzTmFtZV0oJCh0aGlzKSkpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICB9XG59O1xuXG5zcy5pbml0QnlTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLy8gaW5pdCBtZXRob2RcbnNzLmluaXQgPSAoJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkgPT4ge1xuICBpZiAoJGNvbnRhaW5lcikge1xuICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBzcy5jaGVja0lmQ2xhc3NFeGlzdHMuY2FsbCh0aGlzLCBjbGFzc05hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gc3MuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgfVxufTtcblxuLy9kZXN0cm95IG1ldGhvZFxuc3MuZGVzdHJveSA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRJbnN0YW5jZSA9ICQodGhpcykuZGF0YSgnc3MtaW5zdGFuY2UnKTtcbiAgICBzcy5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNzLWluc3RhbmNlJyk7XG4gICAgc3MuaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0gPSBudWxsO1xuICB9O1xuXG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gZGVzdHJveSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgJGNvbnRhaW5lci5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9iYXNlL3NzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==