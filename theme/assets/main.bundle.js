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
	
	var _base = __webpack_require__(312);
	
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
	
	var _svgSprite = __webpack_require__(300);
	
	var _svgSprite2 = _interopRequireDefault(_svgSprite);
	
	var _mediaQueries = __webpack_require__(304);
	
	var _mediaQueries2 = _interopRequireDefault(_mediaQueries);
	
	var _menu = __webpack_require__(306);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _currencies = __webpack_require__(309);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [_svgSprite2.default, _mediaQueries2.default, _menu2.default, _currencies2.default];

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
	
	var _config = __webpack_require__(303);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SVGSprite = function () {
	  function SVGSprite($el) {
	    var _this = this;
	
	    _classCallCheck(this, SVGSprite);
	
	    this.$el = $el;
	    this.link = this.$el.data(_config.ATTRIBUTES.options);
	
	    _jquery2.default.get(this.link, function (data) {
	      _this.$svg = (0, _jquery2.default)(data).find('svg');
	      _this.$el.append(_this.$svg);
	    }).fail(function () {
	      throw new Error(_config.VALUES.errorMessage);
	    });
	  }
	
	  _createClass(SVGSprite, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.$el.empty();
	    }
	  }]);
	
	  return SVGSprite;
	}();
	
	exports.default = SVGSprite;
	;

/***/ },

/***/ 303:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ATTRIBUTES = exports.ATTRIBUTES = {
	  options: 'ss-options'
	};
	
	var VALUES = exports.VALUES = {
	  errorMessage: 'Error loading the SVG sprite'
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
	
	var _values = __webpack_require__(305);
	
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

/***/ 305:
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

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(301);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _mobile = __webpack_require__(307);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _desktop = __webpack_require__(308);
	
	var _desktop2 = _interopRequireDefault(_desktop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = function () {
	  function Menu() {
	    _classCallCheck(this, Menu);
	
	    this._addMediaQueryCallbacks();
	    this._checkCurrentBreakpoint();
	  }
	
	  _createClass(Menu, [{
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
	
	  return Menu;
	}();
	
	exports.default = Menu;
	;

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
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    this._addEventHandlers();
	  }
	
	  _createClass(_class, [{
	    key: 'destroy',
	    value: function destroy() {}
	  }, {
	    key: '_addEventHandlers',
	    value: function _addEventHandlers() {
	      (0, _jquery2.default)('.menuIcon').on('click', function () {
	        (0, _jquery2.default)(this).toggleClass('is-active');
	      });
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },

/***/ 308:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	  }
	
	  _createClass(_class, [{
	    key: "destroy",
	    value: function destroy() {}
	  }, {
	    key: "_onMediaQueryChange",
	    value: function _onMediaQueryChange(e, data) {}
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(301);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _mobile = __webpack_require__(310);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _desktop = __webpack_require__(311);
	
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

/***/ 310:
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

/***/ 311:
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

/***/ 312:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3ZnU3ByaXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N2Z1Nwcml0ZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVkaWFRdWVyaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9tb2JpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9kZXNrdG9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2N1cnJlbmNpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9tb2JpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9kZXNrdG9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9iYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFJLE9BQU8scUNBQVg7QUFDQSxNQUFLLElBQUwsRzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7bUJBRWUsbUY7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7O0FBQ0E7Ozs7OztLQUVxQixTO0FBRW5CLHNCQUFZLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZixVQUFLLEdBQUws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NUM7QUFDRDtBQUNGOzs7d0NBRWtCLEcsRUFBSyxTLEVBQVc7QUFDakMsV0FBSSxjQUFjLEtBQWxCOztBQUVBLFlBQUssSUFBSSxJQUFJLENBQVIsRUFBVyxnQkFBZ0IsS0FBSyxPQUFMLENBQWEsTUFBN0MsRUFBcUQsSUFBSSxhQUF6RCxFQUF3RSxHQUF4RSxFQUE2RTtBQUMzRSxhQUFJLEtBQUssT0FBTCxDQUFhLENBQWIsRUFBZ0IsSUFBaEIsS0FBeUIsU0FBN0IsRUFBd0M7QUFDdEMsZUFBSSxJQUFKLENBQVMsa0JBQVQsRUFBNkIsS0FBSyxTQUFMLENBQWUsTUFBNUM7QUFDQSx5QkFBYyxJQUFkO0FBQ0EsZ0JBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBSSxLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQUosQ0FBb0IsR0FBcEIsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFdBQUksQ0FBQyxXQUFMLEVBQWtCO0FBQ2hCLGlCQUFRLElBQVIsZ0JBQTBCLFNBQTFCO0FBQ0Q7QUFDRjs7O2lDQUVXLEssRUFBTztBQUNqQixXQUFJLFFBQVEsSUFBWjs7QUFFQSw2QkFBRSxRQUFGLEVBQVksSUFBWixzQkFBb0MsS0FBcEMsU0FBK0MsSUFBL0MsQ0FBb0QsWUFBVztBQUM3RCxhQUFJLFlBQVksc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxTQUFiLENBQWhCO0FBQ0EsZUFBTSxrQkFBTixDQUF5QixzQkFBRSxJQUFGLENBQXpCLEVBQWtDLFNBQWxDO0FBQ0QsUUFIRDtBQUlEOzs7Ozs7bUJBN0ZrQixJIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnY29tbW9uL2NsYXNzZXMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnYmFzZSc7XG5cbmxldCBiYXNlID0gbmV3IEJhc2UoY2xhc3Nlcyk7XG5iYXNlLmluaXQoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanNcbiAqKi8iLCJpbXBvcnQgU1ZHU3ByaXRlIGZyb20gJ2NvbXBvbmVudHMvc3ZnU3ByaXRlJztcbmltcG9ydCBNZWRpYVF1ZXJpZXMgZnJvbSAnY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnY29tcG9uZW50cy9tZW51JztcbmltcG9ydCBDdXJyZW5jaWVzIGZyb20gJ2NvbXBvbmVudHMvY3VycmVuY2llcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgU1ZHU3ByaXRlLFxuICBNZWRpYVF1ZXJpZXMsXG4gIE1lbnUsXG4gIEN1cnJlbmNpZXNcbl07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21tb24vY2xhc3Nlcy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge1ZBTFVFUywgQVRUUklCVVRFU30gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdTcHJpdGUge1xuXG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMubGluayA9IHRoaXMuJGVsLmRhdGEoQVRUUklCVVRFUy5vcHRpb25zKTtcblxuICAgICQuZ2V0KHRoaXMubGluaywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuJHN2ZyA9ICQoZGF0YSkuZmluZCgnc3ZnJyk7XG4gICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kc3ZnKTtcblxuICAgIH0pLmZhaWwoKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoVkFMVUVTLmVycm9yTWVzc2FnZSk7IH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLiRlbC5lbXB0eSgpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9zdmdTcHJpdGUvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgQVRUUklCVVRFUyA9IHtcbiAgb3B0aW9uczogJ3NzLW9wdGlvbnMnXG59O1xuXG5leHBvcnQgY29uc3QgVkFMVUVTID0ge1xuICBlcnJvck1lc3NhZ2U6ICdFcnJvciBsb2FkaW5nIHRoZSBTVkcgc3ByaXRlJ1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvc3ZnU3ByaXRlL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVN9IGZyb20gJ2NvbW1vbi92YWx1ZXMnO1xuXG4vKipcbiAqIE1lZGlhUXVlcnkgbW9kdWxlXG4gKiBVc2VkIHRvIGRldGVjdCBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gKlxuICogVXNhZ2U6XG4gKiAkKHdpbmRvdykub24oTUVESUFfUVVFUlksIGNhbGxiYWNrICk7XG4gKlxuICogV2hlcmU6XG4gKiAgICBNRURJQV9RVUVSWSBjYW4gYmUgOiAneHMnLCAnc20nLCAnbWQnLCAnbGcnLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWluJywgJ3NtTWluJywgJ21kTWluJywnbGdNaW4nLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWF4JywgJ3NtTWF4JywgJ21kTWF4JywgJ2xnTWF4J1xuICogICAgQ2FsbGJhY2s6IGZ1bmN0aW9uIG5hbWUgb3IgYW5vbnltb3VzIGZ1bmN0aW9uXG4gKlxuICogICAgZS5nLiA6XG4gKlxuICogICAgZnVuY3Rpb24gc2F5R29vZGJ5ZSA9IHsgYWxlcnQoJ2dvb2RieWUnKSB9XG4gKiAgICAkKHdpbmRvdykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJCh3aW5kb3cpLm9uKCdzbU1pbicsIGZ1bmN0aW9uKCkgeyBhbGVydCgnaGVsbG8nKTsgfSlcbiAqXG4gKlxuICogQHR5cGUge3tuZXcoKT0+e19oYW5kbGVNUUNoYW5nZTogKChtcWwsIGluZGV4PykpLCBkZXN0cm95OiAoKCkpfX19XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUXVlcmllcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgd2luZG93LmluZm8gPSB3aW5kb3cuaW5mbyB8fCB7fTtcbiAgICBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgPSBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgfHwgW107XG5cbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKTtcblxuICAgICAgLy8gdGhlIGRlZmF1bHQgbWF0Y2htZWRpYSdzIGFkZExpc3RlbmVyIG1ldGhvZCBkb2Vzbid0IHN1cHBvcnQgZXh0cmEgcGFyYW1ldGVycyxcbiAgICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIGFub3RoZXIgZXh0cmEgZnVuY3Rpb24gdGhhdCBjYW4gcGFzcyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWVcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIgPSAobXFsKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpLnJlbW92ZUxpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gaGFuZGxlIHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICogQHBhcmFtIG1xbCAtIGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAgICogQHBhcmFtIGJyZWFrcG9pbnROYW1lIC0gY3VycmVudCBicmVha3BvaW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgX2hhbmRsZU1RQ2hhbmdlKG1xbCwgYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICQod2luZG93KS50cmlnZ2VySGFuZGxlcihicmVha3BvaW50TmFtZSk7XG5cbiAgICAgIGlmIChicmVha3BvaW50TmFtZS5pbmRleE9mKCdNaW4nKSA9PT0gLTFcbiAgICAgICAgJiYgYnJlYWtwb2ludE5hbWUuaW5kZXhPZignTWF4JykgPT09IC0xKSB7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VySGFuZGxlcignbWVkaWFRdWVyeUNoYW5nZScsIGJyZWFrcG9pbnROYW1lKTtcbiAgICAgIH1cblxuICAgICAgJC5lYWNoKGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKE1FRElBX1FVRVJJRVNbdmFsdWVdKS5tYXRjaGVzKSB7XG4gICAgICAgICAgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMucHVzaChicmVha3BvaW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9tZWRpYVF1ZXJpZXMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWlufXB4KWAsXG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHhzTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZE1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbW1vbi92YWx1ZXMuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IE1vYmlsZSBmcm9tICcuL21vYmlsZSc7XG5pbXBvcnQgRGVza3RvcCBmcm9tICcuL2Rlc2t0b3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYWRkTWVkaWFRdWVyeUNhbGxiYWNrcygpO1xuICAgIHRoaXMuX2NoZWNrQ3VycmVudEJyZWFrcG9pbnQoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlTWVkaWFRdWVyeUNhbGxiYWNrcygpO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBfYWRkTWVkaWFRdWVyeUNhbGxiYWNrcygpIHtcbiAgICAkKHdpbmRvdykub24oJ3hzTWF4JywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb01vYmlsZSwgdGhpcykpO1xuICAgICQod2luZG93KS5vbignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCwgdGhpcykpO1xuICB9XG5cbiAgX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJCh3aW5kb3cpLm9mZigneHNNYXgnLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlLmJpbmQodGhpcykpKTtcbiAgICAkKHdpbmRvdykub2ZmKCdzbU1pbicsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wLmJpbmQodGhpcykpKTtcbiAgfVxuXG4gIF9jaGVja0N1cnJlbnRCcmVha3BvaW50KCkge1xuICAgIGlmIChpbmZvICYmIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcyAmJiBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMuaW5kZXhPZigneHNNYXgnKSA+IC0xKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZWRUb01vYmlsZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkNoYW5nZWRUb0Rlc2t0b3AoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERlc2t0b3AoKTtcbiAgfVxuXG4gIF9vbkNoYW5nZWRUb01vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW9iaWxlKCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lbnUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FkZEV2ZW50SGFuZGxlcnMoKTtcbiAgfTtcblxuICBkZXN0cm95KCkge1xuICB9O1xuXG4gIF9hZGRFdmVudEhhbmRsZXJzKCkge1xuICAgICQoJy5tZW51SWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9tb2JpbGUvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgfVxuXG4gIF9vbk1lZGlhUXVlcnlDaGFuZ2UoZSwgZGF0YSkge1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL21lbnUvZGVza3RvcC9pbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vbW9iaWxlJztcbmltcG9ydCBEZXNrdG9wIGZyb20gJy4vZGVza3RvcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbmNpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgdGhpcy5fY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIF9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQod2luZG93KS5vbigneHNNYXgnLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlLCB0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzbU1pbicsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wLCB0aGlzKSk7XG4gIH1cblxuICBfcmVtb3ZlTWVkaWFRdWVyeUNhbGxiYWNrcygpIHtcbiAgICAkKHdpbmRvdykub2ZmKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUuYmluZCh0aGlzKSkpO1xuICAgICQod2luZG93KS5vZmYoJ3NtTWluJywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgX2NoZWNrQ3VycmVudEJyZWFrcG9pbnQoKSB7XG4gICAgaWYgKGluZm8gJiYgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzICYmIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcy5pbmRleE9mKCd4c01heCcpID4gLTEpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlZFRvRGVza3RvcCgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRGVza3RvcCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlZFRvTW9iaWxlKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb2JpbGUoKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY3VycmVuY2llcy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdtb2JpbGUnKTtcbiAgfTtcblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUud2FybignZGVzdHJveSBtb2JpbGUnKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL21vYmlsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdkZXNrdG9wJyk7XG4gICAgJCh3aW5kb3cpLm9uKCdtZWRpYVF1ZXJ5Q2hhbmdlJywgJC5wcm94eSh0aGlzLl9vbk1lZGlhUXVlcnlDaGFuZ2UsIHRoaXMpKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc29sZS53YXJuKCdkZXN0cm95IGRlc2t0b3AnKTtcbiAgfVxuXG4gIF9vbk1lZGlhUXVlcnlDaGFuZ2UoZSwgZGF0YSkge1xuICAgIGNvbnNvbGUud2FybihkYXRhKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jdXJyZW5jaWVzL2Rlc2t0b3AvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoY2xhc3Nlcykge1xuICAgIHdpbmRvdy5pbmZvID0gd2luZG93LmluZm8gfHwge307XG4gICAgaW5mby5pbnN0YW5jZXMgPSBpbmZvLmluc3RhbmNlcyB8fCBbXTtcblxuICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XG4gIH1cblxuICAvLyBpbml0IG1ldGhvZFxuICBpbml0KCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCRjb250YWluZXIpIHtcbiAgICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzKCQodGhpcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gaW5pdGlhbGl6ZSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICBfc2VsZi5jaGVja0lmQ2xhc3NFeGlzdHMoJCh0aGlzKSwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vIHBhcmFtIHBhc3NlZCwgYWxsIHRoZSBtb2R1bGVzIGZyb20gdGhlIERPTVxuICAgICAgLy8gd2lsbCBiZSBpbml0aWFsaXplZCBkZXBlbmRpbmcgb24gdGhlIGRhdGEtc3Mtc3RhdGUgdmFsdWVcbiAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHRoaXMuaW5pdEJ5U3RhdGUoJ29uUmVhZHknKSk7XG4gICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB0aGlzLmluaXRCeVN0YXRlKCdvbkxvYWQnKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vZGVzdHJveSBtZXRob2RcbiAgZGVzdHJveSgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSB7XG4gICAgbGV0IGRlc3Ryb3lJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjdXJyZW50SW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoJ3NzLWluc3RhbmNlJyk7XG4gICAgICBpbmZvLmluc3RhbmNlc1tjdXJyZW50SW5zdGFuY2VdLmRlc3Ryb3koKTtcbiAgICAgICQodGhpcykucmVtb3ZlQXR0cignZGF0YS1zcy1pbnN0YW5jZScpO1xuICAgICAgaW5mby5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXSA9IG51bGw7XG4gICAgfTtcblxuICAgIGlmICgkY29udGFpbmVyKSB7XG4gICAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcbiAgICAgICAgaWYgKGRlZXBTY2FuKSB7XG4gICAgICAgICAgLy8gZGVzdHJveSBhbGwgbW9kdWxlcyBmcm9tIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgICAkY29udGFpbmVyLmZpbmQoYFtkYXRhLXNzLWluc3RhbmNlXWApLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBkZXN0cm95ICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAgICRjb250YWluZXIuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgfVxuICB9O1xuXG4gIGNoZWNrSWZDbGFzc0V4aXN0cygkZWwsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc0V4aXN0cyA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGNsYXNzZXNMZW5ndGggPSB0aGlzLmNsYXNzZXMubGVuZ3RoOyBpIDwgY2xhc3Nlc0xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jbGFzc2VzW2ldLm5hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAkZWwuYXR0cignZGF0YS1zcy1pbnN0YW5jZScsIGluZm8uaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgICAgIGNsYXNzRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgaW5mby5pbnN0YW5jZXMucHVzaChuZXcgdGhpcy5jbGFzc2VzW2ldKCRlbCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2xhc3NFeGlzdHMpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIGNsYXNzICR7Y2xhc3NOYW1lfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgICB9XG4gIH07XG5cbiAgaW5pdEJ5U3RhdGUoc3RhdGUpIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuXG4gICAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3Mtc3RhdGU9XCIke3N0YXRlfVwiXWApLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICBfc2VsZi5jaGVja0lmQ2xhc3NFeGlzdHMoJCh0aGlzKSwgY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Jhc2UvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9