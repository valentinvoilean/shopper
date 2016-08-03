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
	
	      _this._handleMQChange(mql, index, true);
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
	     * @param index - current breakpoint
	     * @param setInitMQ - if is true, will update the ss.utils.initMediaQueries
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
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _mobile = __webpack_require__(304);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _desktop = __webpack_require__(305);
	
	var _desktop2 = _interopRequireDefault(_desktop);
	
	var _values = __webpack_require__(302);
	
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
	      if (window.matchMedia(_values.MEDIA_QUERIES.xsMax).matches) {
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
	
	    console.warn('desktop');
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {
	      console.warn('destroy desktop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL21vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL2Rlc2t0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2Uvc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUdBOztBQUVBLElBQUcsSUFBSDs7QUFIQTtBQUpBLHFCOzs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQU8sRUFBUCxHQUFZLE9BQU8sRUFBUCxJQUFhLEVBQXpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLElBQUcsWUFBSDtBQUVFLHFCQUFjO0FBQUE7O0FBQUE7O0FBQ1osc0JBQUUsSUFBRix3QkFBc0IsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN0QyxXQUFJLE1BQU0sT0FBTyxVQUFQLENBQWtCLEtBQWxCLENBQVY7O0FBRUE7QUFDQTtBQUNBLFdBQUksV0FBSixDQUFnQixNQUFLLGFBQUwsR0FBcUIsVUFBQyxHQUFELEVBQVM7QUFDNUMsZUFBSyxlQUFMLENBQXFCLEdBQXJCLEVBQTBCLEtBQTFCO0FBQ0QsUUFGRDs7QUFJQSxhQUFLLGVBQUwsQ0FBcUIsR0FBckIsRUFBMEIsS0FBMUIsRUFBaUMsSUFBakM7QUFDRCxNQVZEO0FBV0Q7O0FBZEg7QUFBQTtBQUFBLCtCQWdCWTtBQUFBOztBQUNSLHdCQUFFLElBQUYsd0JB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SSxrQkFBa0Isc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxhQUFiLENBQXRCO0FBQ0EsUUFBRyxTQUFILENBQWEsZUFBYixFQUE4QixPQUE5QjtBQUNBLDJCQUFFLElBQUYsRUFBUSxVQUFSLENBQW1CLGtCQUFuQjtBQUNBLFFBQUcsU0FBSCxDQUFhLGVBQWIsSUFBZ0MsSUFBaEM7QUFDRCxJQUxEOztBQU9BLE9BQUksVUFBSixFQUFnQjtBQUNkLFNBQUksc0NBQUosRUFBNkI7QUFDM0IsV0FBSSxRQUFKLEVBQWM7QUFDWjtBQUNBLG9CQUFXLElBQVgsdUJBQXNDLElBQXRDLENBQTJDLGVBQTNDO0FBQ0QsUUFIRCxNQUlLO0FBQ0g7QUFDQSxvQkFBVyxJQUFYLENBQWdCLGVBQWhCO0FBQ0Q7QUFDRixNQVRELE1BU087QUFDTCxlQUFRLEtBQVIsQ0FBYyxrREFBZDtBQUNEO0FBQ0YsSUFiRCxNQWNLO0FBQ0gsMkJBQUUsUUFBRixFQUFZLElBQVosdUJBQXVDLElBQXZDLENBQTRDLGVBQTVDO0FBQ0Q7QUFDRixFQXpCRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuaW1wb3J0ICdjb21wb25lbnRzL2N1cnJlbmNpZXMnO1xuXG4vLyBpbXBvcnQgYmFzZVxuaW1wb3J0ICdiYXNlL3NzJztcblxuc3MuaW5pdCgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVN9IGZyb20gJ2NvbW1vbi92YWx1ZXMnO1xuXG53aW5kb3cuc3MgPSB3aW5kb3cuc3MgfHwge307XG5cbi8qKlxuICogTWVkaWFRdWVyeSBtb2R1bGVcbiAqIFVzZWQgdG8gZGV0ZWN0IGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAqXG4gKiBVc2FnZTpcbiAqICQoc3MpLm9uKE1FRElBX1FVRVJZLCBjYWxsYmFjayApO1xuICpcbiAqIFdoZXJlOlxuICogICAgTUVESUFfUVVFUlkgY2FuIGJlIDogJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01pbicsICdzbU1pbicsICdtZE1pbicsJ2xnTWluJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01heCcsICdzbU1heCcsICdtZE1heCcsICdsZ01heCdcbiAqICAgIENhbGxiYWNrOiBmdW5jdGlvbiBuYW1lIG9yIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqICAgIGUuZy4gOlxuICpcbiAqICAgIGZ1bmN0aW9uIHNheUdvb2RieWUgPSB7IGFsZXJ0KCdnb29kYnllJykgfVxuICogICAgJChzcykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJChzcykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCdoZWxsbycpOyB9KVxuICpcbiAqXG4gKiBAdHlwZSB7e25ldygpPT57X2hhbmRsZU1RQ2hhbmdlOiAoKG1xbCwgaW5kZXg/KSksIGRlc3Ryb3k6ICgoKSl9fX1cbiAqL1xuc3MuTWVkaWFRdWVyaWVzID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpO1xuXG4gICAgICAvLyB0aGUgZGVmYXVsdCBtYXRjaG1lZGlhJ3MgYWRkTGlzdGVuZXIgbWV0aG9kIGRvZXNuJ3Qgc3VwcG9ydCBleHRyYSBwYXJhbWV0ZXJzLFxuICAgICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgYW5vdGhlciBleHRyYSBmdW5jdGlvbiB0aGF0IGNhbiBwYXNzIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgbmFtZVxuICAgICAgbXFsLmFkZExpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lciA9IChtcWwpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSkucmVtb3ZlTGlzdGVuZXIodGhpcy5hZGRNUUxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBoYW5kbGUgdGhlIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICAgKiBAcGFyYW0gbXFsIC0gY3VycmVudCBtZWRpYSBxdWVyeVxuICAgKiBAcGFyYW0gaW5kZXggLSBjdXJyZW50IGJyZWFrcG9pbnRcbiAgICogQHBhcmFtIHNldEluaXRNUSAtIGlmIGlzIHRydWUsIHdpbGwgdXBkYXRlIHRoZSBzcy51dGlscy5pbml0TWVkaWFRdWVyaWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpIHtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICQoc3MpLnRyaWdnZXIoaW5kZXgpO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFZBTFVFU19HUklEID0ge1xuICB4c01pbjogMCxcbiAgeHNNYXg6IDc2NyxcbiAgc21NaW46IDc2OCxcbiAgc21NYXg6IDEwMjMsXG4gIG1kTWluOiAxMDI0LFxuICBtZE1heDogMTE5OSxcbiAgbGdNaW46IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0ge1xuICB4czogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbTogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWQ6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWAsXG4gIHhzTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWlufXB4KWAsXG4gIHNtTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KWAsXG4gIG1kTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KWAsXG4gIGxnTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWAsXG4gIHhzTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIG1kTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWBcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21tb24vdmFsdWVzLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi9tb2JpbGUnO1xuaW1wb3J0IERlc2t0b3AgZnJvbSAnLi9kZXNrdG9wJztcbmltcG9ydCB7TUVESUFfUVVFUklFU30gZnJvbSAnY29tbW9uL3ZhbHVlcyc7XG5cbndpbmRvdy5zcy5DdXJyZW5jaWVzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgdGhpcy5fY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIF9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQoc3MpLm9uKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUsIHRoaXMpKTtcbiAgICAkKHNzKS5vbignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCwgdGhpcykpO1xuICB9XG5cbiAgX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJChzcykub2ZmKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUuYmluZCh0aGlzKSkpO1xuICAgICQoc3MpLm9mZignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcC5iaW5kKHRoaXMpKSk7XG4gIH1cblxuICBfY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoTUVESUFfUVVFUklFUy54c01heCkubWF0Y2hlcykge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfb25DaGFuZ2VkVG9EZXNrdG9wKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEZXNrdG9wKCk7XG4gIH1cblxuICBfb25DaGFuZ2VkVG9Nb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vYmlsZSgpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLndhcm4oJ21vYmlsZScpO1xuICB9O1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc29sZS53YXJuKCdkZXN0cm95IG1vYmlsZScpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvbW9iaWxlL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Rlc2t0b3AnKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc29sZS53YXJuKCdkZXN0cm95IGRlc2t0b3AnKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL2Rlc2t0b3AvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LnNzID0gd2luZG93LnNzIHx8IHt9O1xuXG5zcy5pbnN0YW5jZXMgPSBbXTtcbnNzLnV0aWxzID0gc3MudXRpbHMgfHwge307XG5cbnNzLmNoZWNrSWZDbGFzc0V4aXN0cyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgdHJ5IHtcbiAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnLCBzcy5pbnN0YW5jZXMubGVuZ3RoKTtcbiAgICBzcy5pbnN0YW5jZXMucHVzaChuZXcgc3NbY2xhc3NOYW1lXSgkKHRoaXMpKSk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oYFRoZSBjbGFzcyAke2NsYXNzTmFtZX0gZG9lcyBub3QgZXhpc3QhYCk7XG4gIH1cbn07XG5cbnNzLmluaXRCeVN0YXRlID0gKHN0YXRlKSA9PiB7XG4gICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgc3MuY2hlY2tJZkNsYXNzRXhpc3RzLmNhbGwodGhpcywgY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vLyBpbml0IG1ldGhvZFxuc3MuaW5pdCA9ICgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSA9PiB7XG4gIGlmICgkY29udGFpbmVyKSB7XG4gICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG5cbiAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAvLyBpbml0aWFsaXplIGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluaXRdYCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICRjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHNzLmNoZWNrSWZDbGFzc0V4aXN0cy5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgbm8gcGFyYW0gcGFzc2VkLCBhbGwgdGhlIG1vZHVsZXMgZnJvbSB0aGUgRE9NXG4gICAgLy8gd2lsbCBiZSBpbml0aWFsaXplZCBkZXBlbmRpbmcgb24gdGhlIGRhdGEtc3Mtc3RhdGUgdmFsdWVcbiAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBzcy5pbml0QnlTdGF0ZSgnb25SZWFkeScpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiBzcy5pbml0QnlTdGF0ZSgnb25Mb2FkJykpO1xuICB9XG59O1xuXG4vL2Rlc3Ryb3kgbWV0aG9kXG5zcy5kZXN0cm95ID0gKCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpID0+IHtcbiAgbGV0IGRlc3Ryb3lJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudEluc3RhbmNlID0gJCh0aGlzKS5kYXRhKCdzcy1pbnN0YW5jZScpO1xuICAgIHNzLmluc3RhbmNlc1tjdXJyZW50SW5zdGFuY2VdLmRlc3Ryb3koKTtcbiAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnKTtcbiAgICBzcy5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXSA9IG51bGw7XG4gIH07XG5cbiAgaWYgKCRjb250YWluZXIpIHtcbiAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcbiAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAvLyBkZXN0cm95IGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluc3RhbmNlXWApLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBkZXN0cm95ICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAkY29udGFpbmVyLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLWluc3RhbmNlXWApLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Jhc2Uvc3MuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9