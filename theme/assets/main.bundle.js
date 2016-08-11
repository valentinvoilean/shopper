webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(299);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new _app2.default();
	app.init();

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _app = __webpack_require__(302);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AppComponent = function () {
	  function AppComponent(classes) {
	    _classCallCheck(this, AppComponent);
	
	    window.info = window.info || {};
	    info.instances = info.instances || [];
	
	    this.classes = classes ? classes : _app.CLASSES;
	  }
	
	  // init method
	
	
	  _createClass(AppComponent, [{
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
	              _self.checkIfClassExistsOnDom((0, _jquery2.default)(this), className);
	            });
	          } else {
	            // initialize  the current element passed
	            $container.each(function () {
	              var className = (0, _jquery2.default)(this).data('ss-init');
	              if (className) {
	                _self.checkIfClassExistsOnDom((0, _jquery2.default)(this), className);
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
	    key: 'checkIfClassExistsOnDom',
	    value: function checkIfClassExistsOnDom($el, className) {
	      var classExists = false,
	          domClasses = this.classes.dom ? this.classes.dom : this.classes;
	
	      _jquery2.default.each(domClasses, function (index, value) {
	        if (index === className) {
	          $el.attr('data-ss-instance', info.instances.length);
	          classExists = true;
	          info.instances.push(new value($el));
	        }
	      });
	
	      if (!classExists) {
	        console.warn('The class ' + className + ' does not exist!');
	      }
	    }
	  }, {
	    key: 'initByState',
	    value: function initByState(state) {
	      var _self = this;
	
	      if (this.classes === _app.CLASSES) {
	        _jquery2.default.each(_app.CLASSES[state], function (index, value) {
	          new value();
	        });
	      }
	
	      (0, _jquery2.default)(document).find('[data-ss-state="' + state + '"]').each(function () {
	        var className = (0, _jquery2.default)(this).data('ss-init');
	        _self.checkIfClassExistsOnDom((0, _jquery2.default)(this), className);
	      });
	    }
	  }]);
	
	  return AppComponent;
	}();
	
	exports.default = AppComponent;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CLASSES = undefined;
	
	var _svgSprite = __webpack_require__(303);
	
	var _svgSprite2 = _interopRequireDefault(_svgSprite);
	
	var _mediaQueries = __webpack_require__(340);
	
	var _mediaQueries2 = _interopRequireDefault(_mediaQueries);
	
	var _menu = __webpack_require__(342);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _currencies = __webpack_require__(345);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CLASSES = exports.CLASSES = {
	  dom: { MenuComponent: _menu2.default, CurrenciesComponent: _currencies2.default },
	  onReady: { MediaQueriesComponent: _mediaQueries2.default },
	  onLoad: { SVGSpriteComponent: _svgSprite2.default }
	};

/***/ },

/***/ 303:
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
	
	var SVGSpriteComponent = function () {
	  function SVGSpriteComponent() {
	    _classCallCheck(this, SVGSpriteComponent);
	
	    var files = __webpack_require__(304);
	    files.keys().forEach(files);
	  }
	
	  _createClass(SVGSpriteComponent, [{
	    key: 'destroy',
	    value: function destroy() {
	      (0, _jquery2.default)('body').children('svg').remove();
	    }
	  }]);
	
	  return SVGSpriteComponent;
	}();
	
	exports.default = SVGSpriteComponent;
	;

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Twitter2.svg": 305,
		"./arrow.svg": 309,
		"./arrow2.svg": 310,
		"./bag.svg": 311,
		"./bag2.svg": 312,
		"./cart.svg": 313,
		"./close1.svg": 314,
		"./close2.svg": 315,
		"./commerce.svg": 316,
		"./favorite.svg": 317,
		"./favorite2.svg": 318,
		"./fb.svg": 319,
		"./fb2.svg": 320,
		"./google-plus.svg": 321,
		"./google-plus2.svg": 322,
		"./heart.svg": 323,
		"./home.svg": 324,
		"./info.svg": 325,
		"./instagram.svg": 326,
		"./instagram2.svg": 327,
		"./linkedin.svg": 328,
		"./linkedin2.svg": 329,
		"./location.svg": 330,
		"./mail.svg": 331,
		"./mail2.svg": 332,
		"./phone1.svg": 333,
		"./phone2.svg": 334,
		"./search.svg": 335,
		"./twitter.svg": 336,
		"./wishlist.svg": 337,
		"./youtube.svg": 338,
		"./youtube2.svg": 339
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 304;


/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 21 16\" id=\"Twitter2\" ><title>Twitter</title><path d=\"M18.19 4.394c.007.163.012.328.012.492 0 5.005-4.018 10.774-11.37 10.774-2.256 0-4.357-.625-6.125-1.7.313.035.63.053.953.053 1.873 0 3.595-.606 4.963-1.62C4.875 12.36 3.4 11.265 2.89 9.76c.244.045.495.07.75.07.366 0 .72-.046 1.054-.133C2.867 9.35 1.49 7.82 1.49 5.984v-.048c.54.283 1.155.454 1.81.473-1.072-.68-1.777-1.84-1.777-3.152 0-.695.196-1.346.54-1.905 1.97 2.292 4.915 3.8 8.235 3.958-.068-.277-.102-.565-.102-.863 0-2.09 1.788-3.787 3.995-3.787 1.15 0 2.187.46 2.917 1.196.91-.17 1.765-.484 2.54-.92-.302.885-.933 1.627-1.76 2.096.808-.09 1.58-.294 2.294-.596-.532.76-1.21 1.426-1.99 1.958z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "Twitter2");

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(307);
	var globalSprite = new Sprite();
	
	if (document.body) {
	  globalSprite.elem = globalSprite.render(document.body);
	} else {
	  document.addEventListener('DOMContentLoaded', function () {
	    globalSprite.elem = globalSprite.render(document.body);
	  }, false);
	}
	
	module.exports = globalSprite;


/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	var Sniffr = __webpack_require__(308);
	
	/**
	 * List of SVG attributes to fix url target in them
	 * @type {string[]}
	 */
	var fixAttributes = [
	  'clipPath',
	  'colorProfile',
	  'src',
	  'cursor',
	  'fill',
	  'filter',
	  'marker',
	  'markerStart',
	  'markerMid',
	  'markerEnd',
	  'mask',
	  'stroke'
	];
	
	/**
	 * Query to find'em
	 * @type {string}
	 */
	var fixAttributesQuery = '[' + fixAttributes.join('],[') + ']';
	/**
	 * @type {RegExp}
	 */
	var URI_FUNC_REGEX = /^url\((.*)\)$/;
	
	/**
	 * Convert array-like to array
	 * @param {Object} arrayLike
	 * @returns {Array.<*>}
	 */
	function arrayFrom(arrayLike) {
	  return Array.prototype.slice.call(arrayLike, 0);
	}
	
	/**
	 * Handles forbidden symbols which cannot be directly used inside attributes with url(...) content.
	 * Adds leading slash for the brackets
	 * @param {string} url
	 * @return {string} encoded url
	 */
	function encodeUrlForEmbedding(url) {
	  return url.replace(/\(|\)/g, "\\$&");
	}
	
	/**
	 * Replaces prefix in `url()` functions
	 * @param {Element} svg
	 * @param {string} currentUrlPrefix
	 * @param {string} newUrlPrefix
	 */
	function baseUrlWorkAround(svg, currentUrlPrefix, newUrlPrefix) {
	  var nodes = svg.querySelectorAll(fixAttributesQuery);
	
	  if (!nodes) {
	    return;
	  }
	
	  arrayFrom(nodes).forEach(function (node) {
	    if (!node.attributes) {
	      return;
	    }
	
	    arrayFrom(node.attributes).forEach(function (attribute) {
	      var attributeName = attribute.localName.toLowerCase();
	
	      if (fixAttributes.indexOf(attributeName) !== -1) {
	        var match = URI_FUNC_REGEX.exec(node.getAttribute(attributeName));
	
	        // Do not touch urls with unexpected prefix
	        if (match && match[1].indexOf(currentUrlPrefix) === 0) {
	          var referenceUrl = encodeUrlForEmbedding(newUrlPrefix + match[1].split(currentUrlPrefix)[1]);
	          node.setAttribute(attributeName, 'url(' + referenceUrl + ')');
	        }
	      }
	    });
	  });
	}
	
	/**
	 * Because of Firefox bug #353575 gradients and patterns don't work if they are within a symbol.
	 * To workaround this we move the gradient definition outside the symbol element
	 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
	 * @param {Element} svg
	 */
	var FirefoxSymbolBugWorkaround = function (svg) {
	  var defs = svg.querySelector('defs');
	
	  var moveToDefsElems = svg.querySelectorAll('symbol linearGradient, symbol radialGradient, symbol pattern');
	  for (var i = 0, len = moveToDefsElems.length; i < len; i++) {
	    defs.appendChild(moveToDefsElems[i]);
	  }
	};
	
	/**
	 * @type {string}
	 */
	var DEFAULT_URI_PREFIX = '#';
	
	/**
	 * @type {string}
	 */
	var xLinkHref = 'xlink:href';
	/**
	 * @type {string}
	 */
	var xLinkNS = 'http://www.w3.org/1999/xlink';
	/**
	 * @type {string}
	 */
	var svgOpening = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + xLinkNS + '"';
	/**
	 * @type {string}
	 */
	var svgClosing = '</svg>';
	/**
	 * @type {string}
	 */
	var contentPlaceHolder = '{content}';
	
	/**
	 * Representation of SVG sprite
	 * @constructor
	 */
	function Sprite() {
	  var baseElement = document.getElementsByTagName('base')[0];
	  var currentUrl = window.location.href.split('#')[0];
	  var baseUrl = baseElement && baseElement.href;
	  this.urlPrefix = baseUrl && baseUrl !== currentUrl ? currentUrl + DEFAULT_URI_PREFIX : DEFAULT_URI_PREFIX;
	
	  var sniffr = new Sniffr();
	  sniffr.sniff();
	  this.browser = sniffr.browser;
	  this.content = [];
	
	  if (this.browser.name !== 'ie' && baseUrl) {
	    window.addEventListener('spriteLoaderLocationUpdated', function (e) {
	      var currentPrefix = this.urlPrefix;
	      var newUrlPrefix = e.detail.newUrl.split(DEFAULT_URI_PREFIX)[0] + DEFAULT_URI_PREFIX;
	      baseUrlWorkAround(this.svg, currentPrefix, newUrlPrefix);
	      this.urlPrefix = newUrlPrefix;
	
	      if (this.browser.name === 'firefox' || this.browser.name === 'edge' || this.browser.name === 'chrome' && this.browser.version[0] >= 49) {
	        var nodes = arrayFrom(document.querySelectorAll('use[*|href]'));
	        nodes.forEach(function (node) {
	          var href = node.getAttribute(xLinkHref);
	          if (href && href.indexOf(currentPrefix) === 0) {
	            node.setAttributeNS(xLinkNS, xLinkHref, newUrlPrefix + href.split(DEFAULT_URI_PREFIX)[1]);
	          }
	        });
	      }
	    }.bind(this));
	  }
	}
	
	Sprite.styles = ['position:absolute', 'width:0', 'height:0', 'visibility:hidden'];
	
	Sprite.spriteTemplate = svgOpening + ' style="'+ Sprite.styles.join(';') +'"><defs>' + contentPlaceHolder + '</defs>' + svgClosing;
	Sprite.symbolTemplate = svgOpening + '>' + contentPlaceHolder + svgClosing;
	
	/**
	 * @type {Array<String>}
	 */
	Sprite.prototype.content = null;
	
	/**
	 * @param {String} content
	 * @param {String} id
	 */
	Sprite.prototype.add = function (content, id) {
	  if (this.svg) {
	    this.appendSymbol(content);
	  }
	
	  this.content.push(content);
	
	  return DEFAULT_URI_PREFIX + id;
	};
	
	/**
	 *
	 * @param content
	 * @param template
	 * @returns {Element}
	 */
	Sprite.prototype.wrapSVG = function (content, template) {
	  var svgString = template.replace(contentPlaceHolder, content);
	
	  var svg = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;
	
	  /**
	   * Fix for browser (IE, maybe other too) which are throwing 'WrongDocumentError'
	   * if you insert an element which is not part of the document
	   * @see http://stackoverflow.com/questions/7981100/how-do-i-dynamically-insert-an-svg-image-into-html#7986519
	   */
	  if (document.importNode) {
	    svg = document.importNode(svg, true);
	  }
	
	  if (this.browser.name !== 'ie' && this.urlPrefix) {
	    baseUrlWorkAround(svg, DEFAULT_URI_PREFIX, this.urlPrefix);
	  }
	
	  return svg;
	};
	
	Sprite.prototype.appendSymbol = function (content) {
	  var symbol = this.wrapSVG(content, Sprite.symbolTemplate).childNodes[0];
	
	  this.svg.querySelector('defs').appendChild(symbol);
	  if (this.browser.name === 'firefox') {
	    FirefoxSymbolBugWorkaround(this.svg);
	  }
	};
	
	/**
	 * @returns {String}
	 */
	Sprite.prototype.toString = function () {
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(this.render());
	  return wrapper.innerHTML;
	};
	
	/**
	 * @param {HTMLElement} [target]
	 * @param {Boolean} [prepend=true]
	 * @returns {HTMLElement} Rendered sprite node
	 */
	Sprite.prototype.render = function (target, prepend) {
	  target = target || null;
	  prepend = typeof prepend === 'boolean' ? prepend : true;
	
	  var svg = this.wrapSVG(this.content.join(''), Sprite.spriteTemplate);
	
	  if (this.browser.name === 'firefox') {
	    FirefoxSymbolBugWorkaround(svg);
	  }
	
	  if (target) {
	    if (prepend && target.childNodes[0]) {
	      target.insertBefore(svg, target.childNodes[0]);
	    } else {
	      target.appendChild(svg);
	    }
	  }
	
	  this.svg = svg;
	
	  return svg;
	};
	
	module.exports = Sprite;


/***/ },

/***/ 308:
/***/ function(module, exports) {

	(function(host) {
	
	  var properties = {
	    browser: [
	      [/msie ([\.\_\d]+)/, "ie"],
	      [/trident\/.*?rv:([\.\_\d]+)/, "ie"],
	      [/firefox\/([\.\_\d]+)/, "firefox"],
	      [/chrome\/([\.\_\d]+)/, "chrome"],
	      [/version\/([\.\_\d]+).*?safari/, "safari"],
	      [/mobile safari ([\.\_\d]+)/, "safari"],
	      [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"],
	      [/crios\/([\.\_\d]+).*?safari/, "chrome"],
	      [/opera/, "opera"],
	      [/opera\/([\.\_\d]+)/, "opera"],
	      [/opera ([\.\_\d]+)/, "opera"],
	      [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"],
	      [/opios\/([a-z\.\_\d]+)/, "opera"],
	      [/blackberry/, "blackberry"],
	      [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"],
	      [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"],
	      [/rim.*?version\/([\.\_\d]+)/, "blackberry"],
	      [/iceweasel\/([\.\_\d]+)/, "iceweasel"],
	      [/edge\/([\.\d]+)/, "edge"]
	    ],
	    os: [
	      [/linux ()([a-z\.\_\d]+)/, "linux"],
	      [/mac os x/, "macos"],
	      [/mac os x.*?([\.\_\d]+)/, "macos"],
	      [/os ([\.\_\d]+) like mac os/, "ios"],
	      [/openbsd ()([a-z\.\_\d]+)/, "openbsd"],
	      [/android/, "android"],
	      [/android ([a-z\.\_\d]+);/, "android"],
	      [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"],
	      [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"],
	      [/windows phone.*?([\.\_\d]+)/, "windows.phone"],
	      [/windows mobile/, "windows.mobile"],
	      [/blackberry/, "blackberryos"],
	      [/bb\d+/, "blackberryos"],
	      [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]
	    ],
	    device: [
	      [/ipad/, "ipad"],
	      [/iphone/, "iphone"],
	      [/lumia/, "lumia"],
	      [/htc/, "htc"],
	      [/nexus/, "nexus"],
	      [/galaxy nexus/, "galaxy.nexus"],
	      [/nokia/, "nokia"],
	      [/ gt\-/, "galaxy"],
	      [/ sm\-/, "galaxy"],
	      [/xbox/, "xbox"],
	      [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]
	    ]
	  };
	
	  var UNKNOWN = "Unknown";
	
	  var propertyNames = Object.keys(properties);
	
	  function Sniffr() {
	    var self = this;
	
	    propertyNames.forEach(function(propertyName) {
	      self[propertyName] = {
	        name: UNKNOWN,
	        version: [],
	        versionString: UNKNOWN
	      };
	    });
	  }
	
	  function determineProperty(self, propertyName, userAgent) {
	    properties[propertyName].forEach(function(propertyMatcher) {
	      var propertyRegex = propertyMatcher[0];
	      var propertyValue = propertyMatcher[1];
	
	      var match = userAgent.match(propertyRegex);
	
	      if (match) {
	        self[propertyName].name = propertyValue;
	
	        if (match[2]) {
	          self[propertyName].versionString = match[2];
	          self[propertyName].version = [];
	        } else if (match[1]) {
	          self[propertyName].versionString = match[1].replace(/_/g, ".");
	          self[propertyName].version = parseVersion(match[1]);
	        } else {
	          self[propertyName].versionString = UNKNOWN;
	          self[propertyName].version = [];
	        }
	      }
	    });
	  }
	
	  function parseVersion(versionString) {
	    return versionString.split(/[\._]/).map(function(versionPart) {
	      return parseInt(versionPart);
	    });
	  }
	
	  Sniffr.prototype.sniff = function(userAgentString) {
	    var self = this;
	    var userAgent = (userAgentString || navigator.userAgent || "").toLowerCase();
	
	    propertyNames.forEach(function(propertyName) {
	      determineProperty(self, propertyName, userAgent);
	    });
	  };
	
	
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Sniffr;
	  } else {
	    host.Sniffr = new Sniffr();
	    host.Sniffr.sniff(navigator.userAgent);
	  }
	})(this);


/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 200.387 200.387\" id=\"arrow\" ><path d=\"M5.504 154.45L0 149.1 100.197 45.938l100.19 103.164-5.494 5.347-94.696-97.503\"/><path d=\"M100.197 45.938L0 149.102l5.504 5.347 94.693-97.503 94.696 97.502 5.494-5.348\"/></symbol>";
	module.exports = sprite.add(image, "arrow");

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 197.402 197.402\" id=\"arrow2\" ><path fill=\"#010002\" d=\"M146.883 197.402L45.255 98.698 146.883 0l5.265 5.418-96.04 93.28 96.04 93.282\"/></symbol>";
	module.exports = sprite.add(image, "arrow2");

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 377.582 377.582\" id=\"bag\" ><path d=\"M333.72 362.63L320.33 104.066c-.373-7.194-6.315-12.836-13.517-12.836H267.31V78.526C267.31 35.225 232.08 0 188.78 0c-43.3 0-78.523 35.226-78.523 78.525V91.23H70.75c-7.203 0-13.146 5.643-13.52 12.837L43.81 363.345c-.192 3.706 1.146 7.33 3.702 10.02 2.555 2.692 6.104 4.217 9.816 4.217h262.93c7.475 0 13.534-6.06 13.534-13.536 0-.48-.024-.952-.073-1.417zM129.54 146.02c-8.006 0-14.5-6.492-14.5-14.5s6.494-14.5 14.5-14.5c8.008 0 14.5 6.494 14.5 14.5s-6.492 14.5-14.5 14.5zm97.497-54.79h-76.51V78.526c0-21.095 17.16-38.255 38.253-38.255 21.096 0 38.257 17.16 38.257 38.255V91.23zm21.004 54.79c-8.006 0-14.5-6.492-14.5-14.5s6.494-14.5 14.5-14.5c8.008 0 14.5 6.494 14.5 14.5s-6.492 14.5-14.5 14.5z\" fill=\"#231F20\"/></symbol>";
	module.exports = sprite.add(image, "bag");

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 395.025 395.025\" id=\"bag2\" ><path d=\"M357.507 380.982l-19.593-298.76c-.43-6.57-5.887-11.68-12.473-11.68h-54.69V62.5c0-34.462-28.037-62.5-62.5-62.5h-21.494c-34.462 0-62.5 28.038-62.5 62.5v8.04h-54.69c-6.586 0-12.042 5.11-12.473 11.683L37.45 381.71c-.227 3.448.986 6.837 3.35 9.36 2.364 2.525 5.666 3.955 9.124 3.955h295.18c6.902 0 12.5-5.596 12.5-12.5-.003-.52-.034-1.037-.097-1.543zM149.255 62.5c0-20.678 16.822-37.5 37.5-37.5h21.495c20.678 0 37.5 16.822 37.5 37.5v8.04h-96.495V62.5zM63.27 370.025L81.272 95.542h42.983v11.154c-8.895 4.56-15 13.818-15 24.482 0 15.164 12.336 27.5 27.5 27.5s27.5-12.336 27.5-27.5c0-10.664-6.105-19.922-15-24.482V95.542h96.495v11.154c-8.896 4.56-15 13.818-15 24.482 0 15.164 12.336 27.5 27.5 27.5s27.5-12.336 27.5-27.5c0-10.664-6.105-19.922-15-24.482V95.542h42.983l18.002 274.483H63.27z\"/></symbol>";
	module.exports = sprite.add(image, "bag2");

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 48 48\" id=\"cart\" ><path d=\"M15.733 20.125c1.104 0 2-.896 2-2v-7.8C17.733 6.838 20.57 4 24.058 4c3.487 0 6.325 2.838 6.325 6.325v7.8c0 1.104.896 2 2 2s2-.896 2-2v-7.8C34.383 4.632 29.75 0 24.058 0c-5.692 0-10.324 4.632-10.324 10.325v7.8c0 1.104.895 2 2 2z\"/><path d=\"M47 15.63H36.383v2.495c0 2.206-1.794 4-4 4-2.205 0-4-1.794-4-4V15.63h-8.65v2.495c0 2.206-1.793 4-4 4s-4-1.794-4-4V15.63H1c-.552 0-.893.436-.762.972L7.235 45.1C7.658 46.702 9.343 48 11 48h26c1.658 0 3.342-1.3 3.767-2.9l6.996-28.498c.13-.537-.21-.97-.763-.97z\"/></symbol>";
	module.exports = sprite.add(image, "cart");

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 455.992 455.992\" id=\"close1\" ><path d=\"M227.996 0C102.08 0 0 102.08 0 227.996 0 353.94 102.08 455.992 227.996 455.992c125.945 0 227.996-102.05 227.996-227.996C455.992 102.08 353.942 0 227.996 0zm0 425.593c-108.952 0-197.597-88.645-197.597-197.597S119.043 30.4 227.995 30.4s197.597 88.644 197.597 197.596-88.645 197.597-197.597 197.597z\"/><path d=\"M312.142 122.358l-83.538 83.568-74.965-83.568c-5.93-5.928-15.566-5.928-21.493 0-5.928 5.928-5.928 15.565 0 21.492l74.965 83.568-84.723 84.723c-5.93 5.93-5.93 15.596 0 21.493 5.927 5.928 15.564 5.928 21.49 0l83.57-83.538 74.964 83.538c5.897 5.928 15.565 5.928 21.462 0 5.928-5.898 5.928-15.565 0-21.492l-74.995-83.537 84.724-84.754c5.928-5.93 5.928-15.566 0-21.493-5.928-5.927-15.534-5.927-21.462 0z\"/></symbol>";
	module.exports = sprite.add(image, "close1");

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 476.737 476.737\" id=\"close2\" ><path d=\"M238.37 0C106.725 0 0 106.726 0 238.37c0 131.674 106.726 238.368 238.37 238.368 131.674 0 238.368-106.694 238.368-238.37C476.738 106.727 370.043 0 238.368 0zm110.443 150.395l-88.578 88.61 78.407 87.338c6.198 6.198 6.198 16.304 0 22.47-6.166 6.198-16.273 6.198-22.438 0l-78.407-87.338-87.37 87.338c-6.198 6.198-16.273 6.198-22.47 0-6.198-6.166-6.198-16.273 0-22.47l88.578-88.578-78.376-87.37c-6.2-6.198-6.2-16.273 0-22.47s16.272-6.198 22.47 0l78.406 87.37 87.338-87.37c6.198-6.198 16.273-6.198 22.47 0 6.198 6.197 6.166 16.272-.03 22.47z\"/></symbol>";
	module.exports = sprite.add(image, "close2");

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 30.511 30.511\" id=\"commerce\" ><path d=\"M26.818 19.037L30.425 8.24c.18-.518.044-.83-.102-1.036-.374-.527-1.143-.532-1.292-.532L8.647 6.668l-.544-2.58c-.147-.61-.58-1.19-1.456-1.19H.916c-.593 0-.916.277-.916.832v1.49c0 .537.322.677.938.677h4.837l3.702 15.717c-.588.623-.908 1.53-.908 2.378 0 1.864 1.483 3.582 3.38 3.582 1.79 0 3.13-1.677 3.35-2.677h7.21c.217 1 1.304 2.717 3.348 2.717 1.863 0 3.378-1.614 3.378-3.475 0-1.852-1.125-3.493-3.36-3.493-.928 0-2.03.5-2.542 1.25h-8.86c-.642-1-1.52-1.31-2.408-1.345l-.123-.655h13.48c1.015 0 1.215-.37 1.395-.86zm-.935 3.79c.7 0 1.27.57 1.27 1.27s-.57 1.27-1.27 1.27-1.27-.567-1.27-1.27c0-.7.57-1.27 1.27-1.27zm-12.678 1.27c0 .71-.576 1.287-1.283 1.287-.71-.002-1.286-.577-1.286-1.286s.577-1.286 1.286-1.286c.707 0 1.283.577 1.283 1.286z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "commerce");

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 510 510\" id=\"favorite\" ><path d=\"M255 402.212l157.59 95.038-41.693-179.24L510 197.473l-183.37-15.734L255 12.75l-71.63 168.988L0 197.472l139.103 120.54L97.41 497.25\"/></symbol>";
	module.exports = sprite.add(image, "favorite");

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 510 510\" id=\"favorite2\" ><path d=\"M510 197.472l-183.37-15.734L255 12.75l-71.63 168.988L0 197.472l139.103 120.54L97.41 497.25 255 402.186l157.59 95.064-41.692-179.24L510 197.473zM255 354.348l-95.957 57.886 25.398-109.166-84.735-73.39 111.69-9.587L255 117.173l43.605 102.918 111.69 9.588-84.712 73.39 25.398 109.165L255 354.348z\"/></symbol>";
	module.exports = sprite.add(image, "favorite2");

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"fb\" ><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM31 25.7h-4.04v14.396h-5.984V25.7H18.13v-5.088h2.846v-3.29c0-2.358 1.12-6.04 6.04-6.04l4.435.016v4.94h-3.218c-.524 0-1.27.26-1.27 1.385v2.99h4.56L31 25.7z\"/></symbol>";
	module.exports = sprite.add(image, "fb");

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 9 16\" id=\"fb2\" ><title>Facebook</title><path d=\"M7.827 8.166H5.61v7.494H2.32V8.166H.76v-2.65h1.562V3.805C2.322 2.577 2.937.66 5.64.66l2.435.01v2.57H6.307c-.288 0-.697.136-.697.72V5.52h2.505l-.288 2.648z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "fb2");

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"google-plus\" ><path d=\"M21.5 28.94c-.16-.107-.326-.223-.5-.34-.502-.154-1.036-.234-1.583-.24h-.066c-2.513 0-4.717 1.52-4.717 3.256 0 1.89 1.89 3.367 4.3 3.367 3.178 0 4.79-1.098 4.79-3.258 0-.204-.025-.416-.076-.63-.215-.837-.984-1.36-2.147-2.155zM19.72 22.352c.602 0 1.11-.237 1.502-.687.616-.702.89-1.854.727-3.077-.286-2.186-1.85-4.006-3.48-4.053l-.065-.002c-.577 0-1.092.238-1.483.686-.607.692-.864 1.79-.705 3.01.286 2.185 1.882 4.072 3.48 4.122h.022z\"/><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zm-2.862 36.915c-.938.27-1.953.408-3.018.408-1.186 0-2.326-.136-3.39-.405-2.056-.52-3.576-1.503-4.286-2.77-.306-.55-.46-1.133-.46-1.738 0-.623.148-1.255.442-1.88 1.127-2.403 4.098-4.02 7.39-4.02h.093c-.267-.47-.396-.958-.396-1.47 0-.256.033-.516.1-.78-3.45-.08-6.034-2.607-6.034-5.94 0-2.353 1.88-4.646 4.57-5.572.806-.278 1.627-.42 2.434-.42h7.382c.25 0 .474.163.552.402.078.238-.008.5-.21.647l-1.652 1.195c-.1.07-.218.108-.34.108h-.592c.763.915 1.21 2.22 1.21 3.685 0 1.617-.818 3.146-2.307 4.31-1.15.897-1.195 1.144-1.195 1.655.014.28.815 1.198 1.7 1.823 2.058 1.456 2.824 2.885 2.824 5.27 0 2.49-1.892 4.642-4.818 5.492zm16.67-12.662c0 .32-.26.58-.58.58H33.86v4.197c0 .32-.26.58-.578.58h-1.195c-.322 0-.582-.26-.582-.58v-4.197h-4.192c-.32 0-.58-.258-.58-.58V23.06c0-.32.26-.582.58-.582h4.192v-4.193c0-.32.26-.58.582-.58h1.195c.317 0 .578.26.578.58v4.193h4.194c.32 0 .58.26.58.58v1.195z\"/></symbol>";
	module.exports = sprite.add(image, "google-plus");

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 18 16\" id=\"google-plus2\" ><title>google+</title><path d=\"M7.12 10.63c-.103-.065-.208-.135-.317-.205-.32-.092-.657-.14-1.003-.145h-.042c-1.59 0-2.987.913-2.987 1.955 0 1.134 1.197 2.02 2.723 2.02 2.013 0 3.033-.658 3.033-1.954 0-.122-.016-.25-.048-.377-.136-.503-.623-.817-1.36-1.294zm.293 4.785c-.594.163-1.237.245-1.91.245-.752 0-1.474-.082-2.147-.243-1.302-.312-2.265-.902-2.714-1.663-.194-.33-.292-.68-.292-1.042 0-.374.094-.754.28-1.13.714-1.44 2.595-2.41 4.68-2.41h.058c-.17-.283-.25-.576-.25-.884 0-.153.02-.31.064-.468-2.186-.047-3.82-1.564-3.82-3.564 0-1.412 1.19-2.788 2.893-3.344.51-.167 1.03-.252 1.54-.252h4.674c.158 0 .3.098.35.24.048.144-.006.3-.135.39l-1.045.717c-.063.042-.138.064-.216.064H9.05c.483.55.766 1.334.766 2.213 0 .97-.518 1.888-1.46 2.587-.73.538-.757.686-.757.993.008.168.515.72 1.074 1.094 1.304.873 1.79 1.73 1.79 3.162-.002 1.494-1.2 2.785-3.05 3.295zm10.555-7.6c0 .193-.166.35-.368.35h-2.656v2.518c0 .192-.165.348-.366.348h-.756c-.204 0-.37-.155-.37-.347v-2.52H10.8c-.203 0-.368-.153-.368-.347V7.1c0-.192.165-.35.367-.35h2.653V4.236c0-.193.165-.348.37-.348h.755c.2 0 .366.155.366.348V6.75H17.6c.202 0 .367.157.367.35v.716zM5.99 6.676h.002c.38 0 .702-.142.95-.412.39-.42.564-1.112.46-1.846-.18-1.312-1.17-2.404-2.202-2.433h-.04c-.366 0-.692.142-.94.41-.384.417-.547 1.076-.446 1.808.18 1.31 1.192 2.444 2.203 2.474h.014z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "google-plus2");

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 16 15\" id=\"heart\" >&lt;<path d=\"M7.643 14.438l-1.07-1.07C2.6 9.852 0 7.483 0 4.578 0 2.208 1.834.375 4.203.375c1.3 0 2.6.61 3.44 1.605.84-.994 2.14-1.605 3.44-1.605 2.368 0 4.202 1.834 4.202 4.203 0 2.905-2.598 5.274-6.572 8.79l-1.07 1.07z\"/></symbol>";
	module.exports = sprite.add(image, "heart");

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 27.02 27.02\" id=\"home\" ><g fill=\"#030104\"><path d=\"M3.674 24.876s-.024.604.566.604l6.81-.008.01-5.58s-.095-.92.798-.92h2.826c1.056 0 .99.92.99.92l-.01 5.562h6.666c.75 0 .715-.752.715-.752v-10.29L13.65 6.056l-9.976 8.358v10.463z\"/><path d=\"M0 13.635s.847 1.56 2.694 0l11.038-9.338 10.35 9.28c2.137 1.542 2.938 0 2.938 0L13.732 1.54 0 13.635zM23.83 4.275h-2.662l.01 3.228 2.652 2.25\"/></g></symbol>";
	module.exports = sprite.add(image, "home");

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 543.906 543.906\" id=\"info\" ><path d=\"M271.953 0C121.76 0 0 121.76 0 271.953s121.76 271.953 271.953 271.953 271.953-121.76 271.953-271.953S422.148 0 271.953 0zm45.04 76.316c1.056-.05 2.14-.06 3.232 0 14.724-.484 27.533 10.622 29.578 24.987 6.576 27.58-22.72 55.228-49.63 44.192-32.14-14.92-15.95-67.586 16.82-69.18zM303.74 196.318c20.874-1.327 24.518 22.964 18.013 47.592-12.695 56.583-32.455 111.403-43.175 168.442 5.178 22.523 33.575-3.312 45.72-11.558 10.33-8.213 12.125 2.083 15.638 10.71-25.776 18.058-51.687 36.447-80.395 50.99-26.97 16.362-49.048-9.07-42.32-37.393 11.128-52.84 25.776-104.88 37.736-157.563 3.737-28.468-33.728.51-44.872 7.136-8.985 11.292-13.25 3.05-16.997-7.136 29.87-21.816 60.325-48.593 93.313-65.95 6.738-3.35 12.52-4.965 17.34-5.27z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "info");

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"instagram\" ><path d=\"M24.825 29.796c2.74 0 4.972-2.23 4.972-4.97 0-1.082-.354-2.08-.94-2.897-.903-1.253-2.37-2.074-4.03-2.074-1.658 0-3.125.82-4.03 2.072-.588.816-.94 1.815-.94 2.897-.003 2.74 2.228 4.97 4.968 4.97zM35.678 18.746V13.96l-.623.002-4.164.013.017 4.787\"/><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zm14.12 21.93v11.56c0 3.01-2.45 5.457-5.458 5.457H16.164c-3.01 0-5.457-2.447-5.457-5.458V16.164c0-3.01 2.447-5.457 5.457-5.457h17.323c3.01 0 5.458 2.447 5.458 5.457v5.764z\"/><path d=\"M32.55 24.826c0 4.257-3.465 7.723-7.724 7.723-4.26 0-7.722-3.467-7.722-7.724 0-1.024.204-2.003.568-2.897h-4.215v11.56c0 1.493 1.213 2.703 2.706 2.703h17.323c1.49 0 2.706-1.21 2.706-2.704V21.93h-4.217c.367.893.574 1.872.574 2.896z\"/></symbol>";
	module.exports = sprite.add(image, "instagram");

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 16 16\" id=\"instagram2\" ><title>Shape</title><path d=\"M8.01 10.8c1.536 0 2.787-1.185 2.787-2.64 0-.576-.198-1.106-.527-1.54-.506-.665-1.328-1.1-2.258-1.1-.93 0-1.75.435-2.26 1.1-.328.433-.525.964-.525 1.54-.002 1.455 1.248 2.64 2.784 2.64zm6.083-5.87V2.387h-.35l-2.333.008.01 2.543 2.673-.008zm1.83 1.69v6.14c0 1.6-1.37 2.9-3.057 2.9h-9.71C1.47 15.66.1 14.36.1 12.76v-9.2c0-1.6 1.37-2.9 3.057-2.9h9.708c1.687 0 3.06 1.3 3.06 2.9v3.06zM12.34 8.16c0 2.26-1.942 4.1-4.33 4.1-2.385 0-4.326-1.84-4.326-4.1 0-.545.114-1.065.318-1.54H1.64v6.14c0 .794.68 1.437 1.517 1.437h9.707c.836 0 1.517-.643 1.517-1.436V6.62H12.02c.205.475.32.995.32 1.54z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "instagram2");

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"linkedin\" ><path d=\"M29.35 21.298c-2.125 0-3.074 1.168-3.605 1.988v-1.704h-4.002c.052 1.128 0 12.04 0 12.04h4.002v-6.726c0-.36.023-.72.13-.977.29-.72.95-1.466 2.055-1.466 1.448 0 2.027 1.104 2.027 2.724v6.442h4.002v-6.905c-.002-3.696-1.977-5.417-4.61-5.417zm-3.608 2.03h-.025c.008-.014.02-.027.025-.04v.04zM15.523 21.582h4.002v12.04h-4.002z\"/><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM37.99 36.055c0 1.056-.875 1.91-1.958 1.91h-22.58c-1.08 0-1.958-.854-1.958-1.91V13.21c0-1.054.877-1.91 1.957-1.91h22.582c1.082 0 1.96.857 1.96 1.91v22.845z\"/><path d=\"M17.55 15.777c-1.367 0-2.263.898-2.263 2.08 0 1.155.87 2.08 2.21 2.08h.027c1.396 0 2.265-.925 2.265-2.08-.028-1.18-.87-2.08-2.24-2.08z\"/></symbol>";
	module.exports = sprite.add(image, "linkedin");

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 17 16\" id=\"linkedin2\" ><title>linkedin</title><path d=\"M11.46 6.284c-1.26 0-1.824.657-2.14 1.118v-.958H6.947c.03.634 0 6.773 0 6.773H9.32V9.433c0-.202.015-.405.08-.55.17-.405.562-.824 1.218-.824.86 0 1.203.62 1.203 1.532v3.624h2.376V9.33c0-2.078-1.172-3.046-2.735-3.046zM9.32 7.426h-.015c.004-.008.012-.015.015-.023v.023zm-6.066-.982H5.63v6.773H3.254V6.444zm1.204-3.266c-.812 0-1.344.505-1.344 1.17 0 .65.516 1.17 1.313 1.17h.015c.83 0 1.344-.52 1.344-1.17-.016-.664-.515-1.17-1.328-1.17zm12.13 11.407c0 .595-.52 1.075-1.16 1.075H2.024c-.64 0-1.162-.48-1.162-1.075V1.735c0-.594.52-1.075 1.162-1.075h13.402c.642 0 1.162.482 1.162 1.074v12.85z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "linkedin2");

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 466.583 466.582\" id=\"location\" ><path d=\"M233.292 0c-85.1 0-154.334 69.234-154.334 154.333 0 34.275 21.887 90.155 66.908 170.834 31.846 57.063 63.168 104.643 64.484 106.64l22.942 34.775 22.94-34.774c1.318-1.998 32.642-49.577 64.484-106.64 45.023-80.68 66.908-136.56 66.908-170.834C387.624 69.234 318.39 0 233.292 0zm0 233.29c-44.182 0-80-35.816-80-80s35.818-80 80-80 80 35.818 80 80-35.82 80-80 80z\"/></symbol>";
	module.exports = sprite.add(image, "location");

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 79.536 79.536\" id=\"mail\" ><path d=\"M39.773 1.31L0 31.004v47.222h79.536V31.004L39.773 1.31zM28.77 22.5c1.167-2.134 2.775-3.74 4.815-4.806 2.035-1.075 4.357-1.616 6.983-1.616 2.214 0 4.19.435 5.92 1.292 1.73.87 3.046 2.094 3.968 3.687.9 1.595 1.367 3.334 1.367 5.217 0 2.247-.694 4.28-2.082 6.097-1.74 2.293-3.96 3.437-6.68 3.437-.73 0-1.278-.122-1.653-.38-.365-.262-.62-.632-.743-1.13-1.022 1.013-2.23 1.52-3.59 1.52-1.464 0-2.678-.506-3.642-1.508-.966-1.013-1.447-2.362-1.447-4.032 0-2.084.578-3.966 1.743-5.672 1.416-2.084 3.218-3.13 5.424-3.13 1.57 0 2.73.6 3.475 1.805l.33-1.467h3.5l-1.997 9.48c-.125.605-.187.985-.187 1.162 0 .228.052.38.15.497.098.11.222.165.356.165.435 0 .978-.248 1.645-.77.9-.662 1.627-1.573 2.18-2.694.555-1.13.84-2.3.84-3.508 0-2.165-.782-3.977-2.352-5.445-1.573-1.45-3.77-2.185-6.578-2.185-2.393 0-4.417.487-6.077 1.468-1.66.966-2.913 2.343-3.765 4.114-.84 1.76-1.258 3.607-1.258 5.52 0 1.856.48 3.552 1.41 5.074.946 1.534 2.26 2.642 3.957 3.346 1.696.697 3.643 1.046 5.828 1.046 2.097 0 3.91-.293 5.432-.88 1.522-.588 2.74-1.458 3.666-2.642h2.807c-.88 1.792-2.227 3.192-4.05 4.215-2.09 1.163-4.64 1.74-7.643 1.74-2.918 0-5.426-.487-7.542-1.468-2.12-.986-3.69-2.434-4.73-4.35-1.028-1.918-1.535-4.008-1.535-6.268.002-2.478.58-4.79 1.755-6.93zM2.804 31.94l29.344 19.68L2.804 74.334V31.94zm2.23 43.904l34.74-26.885L74.5 75.843H5.032zm71.695-1.51L47.39 51.62l29.34-19.68v42.393zM41.204 24.66c.466.532.7 1.296.7 2.293 0 .89-.175 1.856-.514 2.88-.333 1.035-.742 1.825-1.208 2.36-.318.375-.658.652-.992.826-.44.248-.906.37-1.41.37-.674.005-1.23-.265-1.69-.795-.45-.53-.674-1.346-.674-2.465 0-.84.158-1.805.487-2.89.33-1.087.81-1.915 1.453-2.508.647-.588 1.346-.88 2.1-.88.706.004 1.293.273 1.75.81z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "mail");

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 14 14\" id=\"mail2\" ><g fill=\"#030104\"><path d=\"M7 9L5.268 7.484.316 11.73c.18.166.423.27.69.27h11.987c.267 0 .51-.104.688-.27L8.733 7.483 7 9z\"/><path d=\"M13.684 2.27c-.18-.167-.422-.27-.69-.27H1.006c-.267 0-.51.104-.69.273L7 8l6.684-5.73zM0 2.878v8.308L4.833 7.08M9.167 7.08L14 11.185v-8.31\"/></g></symbol>";
	module.exports = sprite.add(image, "mail2");

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 51.413 51.413\" id=\"phone1\" ><g fill=\"#010002\"><path d=\"M25.99 12.274c8.662.085 14.09-.454 14.822 9.148h10.564c0-14.875-12.973-16.88-25.662-16.88-12.69 0-25.662 2.005-25.662 16.88h10.482c.81-9.785 6.864-9.232 15.455-9.148zM5.29 26.204c2.574 0 4.715.154 5.19-2.377.065-.344.102-.734.102-1.185H0c0 3.765 2.37 3.562 5.29 3.562zM40.88 22.642h-.1c0 .454.04.845.113 1.185.502 2.334 2.64 2.19 5.204 2.19 2.936 0 5.316.192 5.316-3.375H40.88z\"/><path d=\"M35.72 20.078v-1.496c0-.67-.772-.71-1.724-.71H32.44c-.95 0-1.72.04-1.72.71v2.29h-11v-2.29c0-.67-.772-.71-1.723-.71H16.44c-.95 0-1.72.04-1.72.71v2.802c-2.507 2.604-10.707 13.69-11.005 15.03l.004 8.956c0 .827.672 1.5 1.5 1.5h40c.826 0 1.5-.673 1.5-1.5v-9c-.296-1.303-8.494-12.383-11-14.987v-1.305zM19.176 37.62c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458 1.458.652 1.458 1.458-.653 1.458-1.458 1.458zm0-5c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458 1.458.652 1.458 1.458-.653 1.458-1.458 1.458zm0-5c-.805 0-1.458-.65-1.458-1.457 0-.805.652-1.458 1.457-1.458s1.458.653 1.458 1.458c0 .806-.653 1.458-1.458 1.458zm6 10c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458c.806 0 1.458.652 1.458 1.458s-.652 1.458-1.458 1.458zm0-5c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458c.806 0 1.458.652 1.458 1.458s-.652 1.458-1.458 1.458zm0-5c-.805 0-1.458-.65-1.458-1.457 0-.805.652-1.458 1.457-1.458.806 0 1.458.653 1.458 1.458 0 .806-.652 1.458-1.458 1.458zm6 10c-.806 0-1.458-.652-1.458-1.458s.65-1.458 1.457-1.458 1.458.652 1.458 1.458-.652 1.458-1.458 1.458zm0-5c-.806 0-1.458-.652-1.458-1.458s.65-1.458 1.457-1.458 1.458.652 1.458 1.458-.652 1.458-1.458 1.458zm0-5c-.806 0-1.458-.65-1.458-1.457 0-.805.65-1.458 1.457-1.458s1.458.653 1.458 1.458c0 .806-.652 1.458-1.458 1.458z\"/></g></symbol>";
	module.exports = sprite.add(image, "phone1");

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 578.106 578.106\" id=\"phone2\" ><path d=\"M577.83 456.128c1.225 9.385-1.635 17.545-8.568 24.48l-81.396 80.78c-3.672 4.08-8.465 7.552-14.38 10.405-5.917 2.857-11.73 4.693-17.44 5.508-.408 0-1.635.106-3.676.31-2.037.203-4.69.307-7.953.307-7.754 0-20.3-1.326-37.64-3.98s-38.556-9.18-63.646-19.583c-25.095-10.404-53.552-26.012-85.375-46.818-31.823-20.805-65.688-49.367-101.592-85.68-28.56-28.152-52.224-55.08-70.992-80.783-18.767-25.705-33.863-49.47-45.287-71.3-11.425-21.827-19.993-41.615-25.705-59.363S4.59 177.362 2.55 164.51-.306 141.56.102 134.216c.408-7.344.612-11.424.612-12.24.816-5.712 2.652-11.526 5.508-17.442s6.324-10.71 10.404-14.382L98.022 8.756c5.712-5.712 12.24-8.568 19.584-8.568 5.304 0 9.996 1.53 14.076 4.59s7.548 6.834 10.404 11.322l65.484 124.236c3.672 6.528 4.692 13.668 3.06 21.42-1.632 7.752-5.1 14.28-10.404 19.584l-29.988 29.988c-.816.816-1.53 2.142-2.142 3.978s-.918 3.366-.918 4.59c1.632 8.568 5.304 18.36 11.016 29.376 4.896 9.792 12.444 21.726 22.644 35.802s24.684 30.293 43.452 48.653c18.36 18.77 34.68 33.354 48.96 43.76 14.277 10.4 26.215 18.053 35.803 22.95 9.588 4.895 16.932 7.853 22.03 8.87l7.65 1.53c.815 0 2.144-.306 3.978-.917 1.837-.613 3.163-1.326 3.98-2.143l34.883-35.496c7.348-6.526 15.912-9.79 25.705-9.79 6.938 0 12.443 1.223 16.523 3.672h.612l118.115 69.768c8.57 5.308 13.67 12.038 15.303 20.198z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "phone2");

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 488.139 488.139\" id=\"search\" ><path d=\"M290.513.004C181.378.004 92.916 88.466 92.916 197.6c0 46.967 16.477 90.043 43.836 124.03L6.156 452.196c-8.208 8.238-8.208 21.553 0 29.76 8.208 8.24 21.553 8.24 29.76 0l130.597-130.565c33.926 27.33 77.032 43.807 124.03 43.807 109.134 0 197.597-88.462 197.597-197.597S399.616.004 290.513.004zm0 364.793c-92.232 0-167.197-74.996-167.197-167.197S198.34 30.403 290.513 30.403 457.71 105.4 457.71 197.6s-74.996 167.197-167.197 167.197z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "search");

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"twitter\" ><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM35.9 19.144c.012.246.018.494.018.742 0 7.55-5.746 16.255-16.26 16.255-3.226 0-6.23-.942-8.758-2.564.447.053.902.08 1.363.08 2.678 0 5.14-.914 7.097-2.446-2.5-.046-4.61-1.698-5.338-3.97.348.067.707.104 1.074.104.52 0 1.027-.068 1.506-.2-2.614-.523-4.583-2.832-4.583-5.602v-.072c.77.427 1.65.685 2.587.714-1.532-1.023-2.54-2.773-2.54-4.755 0-1.05.28-2.03.772-2.875 2.816 3.458 7.028 5.732 11.776 5.972-.098-.42-.147-.854-.147-1.303 0-3.155 2.557-5.714 5.712-5.714 1.644 0 3.127.694 4.17 1.804 1.304-.256 2.524-.73 3.63-1.387-.43 1.335-1.332 2.454-2.515 3.162 1.157-.14 2.26-.445 3.282-.9-.763 1.144-1.732 2.15-2.85 2.954z\"/></symbol>";
	module.exports = sprite.add(image, "twitter");

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 44.569 44.569\" id=\"wishlist\" ><path d=\"M11.698 1.74c3.11 0 5.65 1.047 7.603 2.856 1.255 1.16 2.255 2.62 2.985 4.317.73-1.698 1.73-3.16 2.968-4.317 1.952-1.81 4.508-2.857 7.62-2.857 3.237 0 6.157 1.316 8.268 3.427 2.128 2.127 3.43 5.047 3.43 8.27 0 5.54-6.064 12.03-10.366 16.62-.778.824-1.492 1.586-2.143 2.316l-8.935 10.08c-.413.46-1.11.507-1.57.094-.05-.032-.08-.063-.112-.095l-8.936-10.08c-.587-.65-1.35-1.46-2.174-2.348C6.03 25.437 0 18.994 0 13.437c0-3.222 1.317-6.143 3.428-8.27 2.127-2.11 5.048-3.428 8.27-3.428zm6.095 4.49c-1.54-1.428-3.57-2.253-6.095-2.253-2.603 0-4.968 1.063-6.682 2.778s-2.778 4.08-2.778 6.682c0 4.682 5.682 10.746 9.73 15.063.794.84 1.54 1.635 2.206 2.397l8.11 9.143 8.112-9.143c.603-.667 1.365-1.492 2.19-2.365 4.032-4.317 9.746-10.412 9.746-15.095 0-2.603-1.063-4.968-2.762-6.682-1.714-1.714-4.08-2.778-6.698-2.778-2.524 0-4.555.825-6.095 2.254-1.682 1.556-2.825 3.858-3.38 6.62-.08.444-.414.81-.89.905-.603.127-1.19-.254-1.317-.873-.556-2.762-1.7-5.08-3.397-6.65z\" fill=\"#1E201D\"/></symbol>";
	module.exports = sprite.add(image, "wishlist");

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 97.75 97.75\" id=\"youtube\" ><path d=\"M25.676 52.482h3.875v20.973h3.667V52.482h3.947v-3.435H25.676M56.674 55.046c-1.212 0-2.343.662-3.406 1.972v-7.972h-3.295v24.41h3.295v-1.763c1.103 1.36 2.233 2.013 3.406 2.013 1.31 0 2.193-.69 2.633-2.044.22-.77.334-1.982.334-3.665v-7.242c0-1.722-.112-2.924-.333-3.655-.44-1.364-1.323-2.054-2.633-2.054zm-.33 13.21c0 1.643-.482 2.453-1.434 2.453-.54 0-1.092-.26-1.643-.812V58.814c.55-.545 1.102-.803 1.643-.803.95 0 1.434.843 1.434 2.483v7.762zM43.824 69.167c-.73 1.033-1.422 1.542-2.084 1.542-.44 0-.69-.26-.77-.772-.03-.106-.03-.508-.03-1.28v-13.39h-3.297v14.38c0 1.284.11 2.152.29 2.704.332.922 1.064 1.354 2.124 1.354 1.213 0 2.457-.732 3.767-2.234v1.984h3.298V55.268h-3.298v13.9zM46.653 38.466c1.073 0 1.588-.85 1.588-2.55v-7.732c0-1.7-.514-2.548-1.587-2.548-1.074 0-1.59.848-1.59 2.548v7.73c0 1.702.516 2.552 1.59 2.552z\"/><path d=\"M48.875 0C21.882 0 0 21.882 0 48.875S21.882 97.75 48.875 97.75 97.75 75.868 97.75 48.875 75.868 0 48.875 0zm5.436 22.86h3.322v13.532c0 .78 0 1.186.04 1.295.073.516.335.78.78.78.667 0 1.366-.516 2.105-1.56V22.86h3.33v18.38h-3.33v-2.005c-1.326 1.52-2.59 2.257-3.805 2.257-1.072 0-1.812-.435-2.146-1.365-.184-.557-.295-1.436-.295-2.733V22.86zm-12.577 5.993c0-1.965.334-3.4 1.042-4.33.92-1.257 2.218-1.885 3.878-1.885 1.668 0 2.964.628 3.885 1.885.698.928 1.032 2.365 1.032 4.33v6.436c0 1.953-.334 3.402-1.032 4.32-.92 1.255-2.217 1.882-3.885 1.882-1.66 0-2.957-.627-3.878-1.88-.708-.92-1.042-2.37-1.042-4.323v-6.437zm-8.906-12.277l2.622 9.685 2.518-9.684h3.735L37.26 31.25v9.99h-3.692v-9.99c-.335-1.77-1.074-4.362-2.26-7.802-.777-2.29-1.588-4.585-2.366-6.872h3.885zm42.36 58.485c-.67 2.9-3.04 5.04-5.895 5.36-6.763.754-13.604.758-20.42.754-6.813.004-13.658 0-20.42-.755-2.854-.32-5.226-2.46-5.892-5.36-.95-4.128-.95-8.637-.95-12.89s.01-8.76.96-12.89c.668-2.9 3.038-5.04 5.893-5.357 6.762-.755 13.606-.76 20.42-.755 6.814-.004 13.658 0 20.42.755 2.855.32 5.227 2.458 5.896 5.358.947 4.13.94 8.64.94 12.89s-.003 8.762-.954 12.89z\"/><path d=\"M67.17 55.046c-1.686 0-2.995.62-3.947 1.864-.7.92-1.018 2.342-1.018 4.285v6.37c0 1.934.357 3.366 1.06 4.277.95 1.242 2.263 1.863 3.987 1.863 1.72 0 3.072-.65 3.984-1.972.4-.584.66-1.245.77-1.975.03-.33.07-1.06.07-2.124v-.48h-3.36c0 1.32-.044 2.054-.073 2.233-.188.88-.662 1.32-1.473 1.32-1.132 0-1.686-.84-1.686-2.52V64.96h6.592v-3.767c0-1.943-.33-3.365-1.02-4.285-.92-1.242-2.232-1.862-3.886-1.862zm1.612 7.172h-3.296v-1.683c0-1.682.553-2.523 1.654-2.523 1.09 0 1.642.842 1.642 2.523v1.683z\"/></symbol>";
	module.exports = sprite.add(image, "youtube");

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(306);
	var image = "<symbol viewBox=\"0 0 14 16\" id=\"youtube2\" ><title>Youtube</title><path d=\"M1.584 8.997h.95v4.87h.898v-4.87h.966V8.2H1.584v.797zm7.594.596c-.297 0-.574.154-.834.458V8.2h-.808v5.667h.808v-.41c.27.317.547.47.834.47.32 0 .537-.16.645-.476.054-.178.082-.46.082-.85v-1.682c0-.4-.028-.678-.082-.848-.108-.317-.324-.477-.645-.477zm-.08 3.067c0 .382-.12.57-.352.57-.133 0-.268-.06-.403-.188v-2.574c.135-.127.27-.187.403-.187.233 0 .35.197.35.578v1.802zm-3.068.212c-.18.24-.348.358-.51.358-.108 0-.17-.06-.19-.18-.007-.024-.007-.117-.007-.296v-3.11h-.807v3.34c0 .298.027.5.07.627.082.215.262.316.52.316.298 0 .603-.17.924-.52v.462h.808V9.644H6.03v3.228zm.693-7.13c.263 0 .39-.197.39-.59V3.354c0-.395-.127-.59-.39-.59s-.39.196-.39.59V5.15c0 .396.127.593.39.593zM8.6 2.12h.813v3.14c0 .183 0 .277.01.302.017.12.082.18.19.18.164 0 .335-.12.516-.36V2.118h.815v4.267h-.816V5.92c-.326.354-.635.526-.933.526-.263 0-.444-.1-.526-.317-.044-.13-.07-.335-.07-.636V2.12zM5.517 3.51c0-.456.082-.79.255-1.005.226-.292.543-.437.95-.437.41 0 .726.145.952.437.17.216.253.55.253 1.006v1.495c0 .454-.082.79-.253 1.004-.226.29-.543.436-.952.436-.407 0-.724-.146-.95-.437-.173-.215-.255-.55-.255-1.005V3.51zM3.336.66l.642 2.25.617-2.25h.915L4.422 4.068v2.32h-.904v-2.32c-.083-.41-.264-1.014-.554-1.812-.19-.532-.39-1.065-.58-1.596h.952zm10.377 13.58c-.164.674-.744 1.17-1.444 1.245-1.658.175-3.334.176-5.003.175-1.67 0-3.346 0-5.003-.175-.7-.075-1.28-.57-1.443-1.245C.59 13.282.59 12.235.59 11.247c0-.987.003-2.034.235-2.993.164-.673.744-1.17 1.444-1.244 1.656-.175 3.333-.176 5.003-.175 1.67 0 3.345 0 5.002.175.7.074 1.28.57 1.444 1.244.232.96.23 2.006.23 2.993 0 .988 0 2.035-.233 2.993zM11.75 9.593c-.414 0-.734.144-.968.433-.17.213-.25.543-.25.995v1.48c0 .45.088.78.26.993.233.288.555.433.977.433.42 0 .752-.152.975-.458.098-.136.162-.29.19-.46.007-.076.016-.245.016-.492v-.11h-.822c0 .305-.01.475-.018.517-.046.204-.162.307-.36.307-.278 0-.414-.195-.414-.586v-.75h1.615v-.874c0-.45-.08-.78-.25-.995-.224-.288-.546-.432-.95-.432zm.394 1.665h-.807v-.39c0-.39.135-.586.405-.586.267 0 .402.195.402.585v.39z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "youtube2");

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _shared = __webpack_require__(341);
	
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
	var MediaQueriesComponent = function () {
	  function MediaQueriesComponent() {
	    var _this = this;
	
	    _classCallCheck(this, MediaQueriesComponent);
	
	    window.info = window.info || {};
	    info.matchedMediaQueries = info.matchedMediaQueries || [];
	
	    _jquery2.default.each(_shared.MEDIA_QUERIES, function (index, value) {
	      var mql = window.matchMedia(value);
	
	      // the default matchmedia's addListener method doesn't support extra parameters,
	      // therefore we need another extra function that can pass the current breakpoint name
	      mql.addListener(_this.addMQListener = function (mql) {
	        _this._handleMQChange(mql, index);
	      });
	
	      _this._handleMQChange(mql, index);
	    });
	  }
	
	  _createClass(MediaQueriesComponent, [{
	    key: 'destroy',
	    value: function destroy() {
	      var _this2 = this;
	
	      _jquery2.default.each(_shared.MEDIA_QUERIES, function (index, value) {
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
	          if (!window.matchMedia(_shared.MEDIA_QUERIES[value]).matches) {
	            info.matchedMediaQueries.splice(index, 1);
	          }
	        });
	
	        info.matchedMediaQueries.push(breakpointName);
	      }
	    }
	  }]);
	
	  return MediaQueriesComponent;
	}();
	
	exports.default = MediaQueriesComponent;
	;

/***/ },

/***/ 341:
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

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _menuMobile = __webpack_require__(343);
	
	var _menuMobile2 = _interopRequireDefault(_menuMobile);
	
	var _menuDesktop = __webpack_require__(344);
	
	var _menuDesktop2 = _interopRequireDefault(_menuDesktop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MenuComponent = function () {
	  function MenuComponent() {
	    _classCallCheck(this, MenuComponent);
	
	    this._addMediaQueryCallbacks();
	    this._checkCurrentBreakpoint();
	  }
	
	  _createClass(MenuComponent, [{
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
	      this.instance = new _menuDesktop2.default();
	    }
	  }, {
	    key: '_onChangedToMobile',
	    value: function _onChangedToMobile() {
	      if (this.instance) {
	        this.instance.destroy();
	      }
	      this.instance = new _menuMobile2.default();
	    }
	  }]);
	
	  return MenuComponent;
	}();
	
	exports.default = MenuComponent;
	;

/***/ },

/***/ 343:
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

/***/ 344:
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
	    value: function _onMediaQueryChange() {}
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(300);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _currenciesMobile = __webpack_require__(346);
	
	var _currenciesMobile2 = _interopRequireDefault(_currenciesMobile);
	
	var _currenciesDesktop = __webpack_require__(347);
	
	var _currenciesDesktop2 = _interopRequireDefault(_currenciesDesktop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CurrenciesComponent = function () {
	  function CurrenciesComponent() {
	    _classCallCheck(this, CurrenciesComponent);
	
	    this._addMediaQueryCallbacks();
	    this._checkCurrentBreakpoint();
	  }
	
	  _createClass(CurrenciesComponent, [{
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
	      this.instance = new _currenciesDesktop2.default();
	    }
	  }, {
	    key: '_onChangedToMobile',
	    value: function _onChangedToMobile() {
	      if (this.instance) {
	        this.instance.destroy();
	      }
	      this.instance = new _currenciesMobile2.default();
	    }
	  }]);
	
	  return CurrenciesComponent;
	}();
	
	exports.default = CurrenciesComponent;
	;

/***/ },

/***/ 346:
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

/***/ 347:
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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3ZnLXNwcml0ZS9zdmctc3ByaXRlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnIG5vbnJlY3Vyc2l2ZSBcXC5zdmckIiwid2VicGFjazovLy8uL3NyYy9zdmcvVHdpdHRlcjIuc3ZnIiwid2VicGFjazovLy8uL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlLmpzIiwid2VicGFjazovLy8uL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zbmlmZnIvc3JjL3NuaWZmci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Fycm93Mi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9iYWcuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvYmFnMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9jYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Nsb3NlMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9jbG9zZTIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvY29tbWVyY2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvZmF2b3JpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvZmF2b3JpdGUyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2ZiLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2ZiMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9nb29nbGUtcGx1cy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9nb29nbGUtcGx1czIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvaGVhcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvaG9tZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9pbmZvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2luc3RhZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9pbnN0YWdyYW0yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2xpbmtlZGluLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2xpbmtlZGluMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9sb2NhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9tYWlsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL21haWwyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3Bob25lMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9waG9uZTIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvc2VhcmNoLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3R3aXR0ZXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvd2lzaGxpc3Quc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcveW91dHViZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy95b3V0dWJlMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lZGlhLXF1ZXJpZXMvbWVkaWEtcXVlcmllcy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NoYXJlZC9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvbWVudS5tb2JpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L21lbnUuZGVza3RvcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5tb2JpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXJyZW5jaWVzL2N1cnJlbmNpZXMuZGVza3RvcC5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxLQUFJLE1BQU0sbUJBQVY7QUFDQSxLQUFJLElBQUosRzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7QUFDQTs7Ozs7O0tBRXFCLFk7QUFDbkIseUJBQVksT0FBWixFQUFxQjtBQUFBOztBQUNuQixZQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsSUFBZSxFQUE3QjtBQUNBLFVBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbkM7O0FBRUEsVUFBSyxPQUFMLEdBQWUsVUFBVSxPQUFWLGVBQWY7QUFDRDs7QUFFRDs7Ozs7MEJBQ0ssVSxFQUE4QjtBQUFBOztBQUFBLFdBQWxCLFFBQWtCLHlEQUFQLEtBQU87O0FBQ2pDLFdBQUksUUFBUSxJQUFaOztBQUVBLFdBQUksVUFBSixFQUFnQjtBQUNkLGFBQUksc0NBQUosRUFBNkI7O0FBRTNCLGVBQUksUUFBSixFQUFjO0FBQ1o7QUFDQSx3QkFBVyxJQUFYLG1CQUFrQyxJQUFsQyxDQUF1QyxZQUFZO0FBQ2pELG1CQUFJLFlBQVksc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxTQUFiLENBQWhCO0FBQ0EscUJBQU0sdUJBQU4sQ0FBOEIsc0JBQUUsSUFBRixDQUE5QixFQUF1QyxTQUF2QztBQUNELGNBSEQ7QUFJRCxZQU5ELE1BT0s7QUFDSDtBQUNBLHdCQUFXLElBQVgsQ0FBZ0IsWUFBWTtBQUMxQixtQkFBSSxZQUFZLHNCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsU0FBYixDQUFoQjtBQUNBLG1CQUFJLFNBQUosRUFBZTtBQUNiLHVCQUFNLHVCQUFOLENBQThCLHNCQUFFLElBQUYsQ0FBOUIsRUFBdUMsU0FBdkM7QUFDRDtBQUNGLGNB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Q25CLGNBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2pRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7OztBQ3BIRDtBQUNBO0FBQ0EsNkM7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSwyQzs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0EsNEM7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBLDRDOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw4Qzs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0EsOEM7Ozs7Ozs7O0FDRkE7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WUFBSyxRQUFMLEdBQWdCLGdDQUFoQjtBQUNEOzs7Ozs7bUJBN0NrQixtQjtBQThDcEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRDLHFCQUFjO0FBQUE7O0FBQ1osYUFBUSxJQUFSLENBQWEsUUFBYjtBQUNEOzs7OytCQUVTO0FBQ1IsZUFBUSxJQUFSLENBQWEsZ0JBQWI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEg7Ozs7Ozs7OztBQUdFLHFCQUFjO0FBQUE7O0FBQ1osYUFBUSxJQUFSLENBQWEsU0FBYjtBQUNBLDJCQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsa0JBQWIsRUFBaUMsaUJBQUUsS0FBRixDQUFRLEtBQUssbUJBQWIsRUFBa0MsSUFBbEMsQ0FBakM7QUFDRDs7OzsrQkFFUztBQUNSLGVBQVEsSUFBUixDQUFhLGlCQUFiO0FBQ0Q7Ozt5Q0FFbUIsQyxFQUFHLEksRUFBTTtBQUMzQixlQUFRLElBQVIsQ0FBYSxJQUFiO0FBQ0QiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmxldCBhcHAgPSBuZXcgQXBwQ29tcG9uZW50KCk7XG5hcHAuaW5pdCgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge0NMQVNTRVN9IGZyb20gJy4vYXBwLmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzZXMpIHtcbiAgICB3aW5kb3cuaW5mbyA9IHdpbmRvdy5pbmZvIHx8IHt9O1xuICAgIGluZm8uaW5zdGFuY2VzID0gaW5mby5pbnN0YW5jZXMgfHwgW107XG5cbiAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzID8gY2xhc3NlcyA6IENMQVNTRVM7XG4gIH1cblxuICAvLyBpbml0IG1ldGhvZFxuICBpbml0KCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCRjb250YWluZXIpIHtcbiAgICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzT25Eb20oJCh0aGlzKSwgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAgICRjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIF9zZWxmLmNoZWNrSWZDbGFzc0V4aXN0c09uRG9tKCQodGhpcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB0aGlzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gdGhpcy5pbml0QnlTdGF0ZSgnb25Mb2FkJykpO1xuICAgIH1cbiAgfTtcblxuICAvL2Rlc3Ryb3kgbWV0aG9kXG4gIGRlc3Ryb3koJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkge1xuICAgIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudEluc3RhbmNlID0gJCh0aGlzKS5kYXRhKCdzcy1pbnN0YW5jZScpO1xuICAgICAgaW5mby5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnKTtcbiAgICAgIGluZm8uaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0gPSBudWxsO1xuICAgIH07XG5cbiAgICBpZiAoJGNvbnRhaW5lcikge1xuICAgICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gZGVzdHJveSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgICAkY29udGFpbmVyLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICBjaGVja0lmQ2xhc3NFeGlzdHNPbkRvbSgkZWwsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc0V4aXN0cyA9IGZhbHNlLFxuICAgICAgZG9tQ2xhc3NlcyA9IHRoaXMuY2xhc3Nlcy5kb20gPyB0aGlzLmNsYXNzZXMuZG9tIDogdGhpcy5jbGFzc2VzO1xuXG4gICAgJC5lYWNoKGRvbUNsYXNzZXMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgaWYgKGluZGV4ID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnLCBpbmZvLmluc3RhbmNlcy5sZW5ndGgpO1xuICAgICAgICBjbGFzc0V4aXN0cyA9IHRydWU7XG4gICAgICAgIGluZm8uaW5zdGFuY2VzLnB1c2gobmV3IHZhbHVlKCRlbCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFjbGFzc0V4aXN0cykge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICAgIH1cbiAgfTtcblxuICBpbml0QnlTdGF0ZShzdGF0ZSkge1xuICAgIGxldCBfc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5jbGFzc2VzID09PSBDTEFTU0VTKSB7XG4gICAgICAkLmVhY2goQ0xBU1NFU1tzdGF0ZV0sIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBuZXcgdmFsdWUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzT25Eb20oJCh0aGlzKSwgY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5jb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgU1ZHU3ByaXRlQ29tcG9uZW50IGZyb20gJy4vc3ZnLXNwcml0ZS9zdmctc3ByaXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVkaWFRdWVyaWVzQ29tcG9uZW50IGZyb20gJy4vbWVkaWEtcXVlcmllcy9tZWRpYS1xdWVyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVudUNvbXBvbmVudCBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IEN1cnJlbmNpZXNDb21wb25lbnQgZnJvbSAnLi9jdXJyZW5jaWVzL2N1cnJlbmNpZXMuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENMQVNTRVMgPSB7XG4gIGRvbToge01lbnVDb21wb25lbnQsIEN1cnJlbmNpZXNDb21wb25lbnR9LFxuICBvblJlYWR5OiB7TWVkaWFRdWVyaWVzQ29tcG9uZW50fSxcbiAgb25Mb2FkOiB7U1ZHU3ByaXRlQ29tcG9uZW50fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5jb25maWcuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdTcHJpdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgZmlsZXMgPSByZXF1aXJlLmNvbnRleHQoJ3N2Zy8nLCBmYWxzZSwgL1xcLnN2ZyQvKTtcbiAgICBmaWxlcy5rZXlzKCkuZm9yRWFjaChmaWxlcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgICQoJ2JvZHknKS5jaGlsZHJlbignc3ZnJykucmVtb3ZlKCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9zdmctc3ByaXRlL3N2Zy1zcHJpdGUuY29tcG9uZW50LmpzXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL1R3aXR0ZXIyLnN2Z1wiOiAzMDUsXG5cdFwiLi9hcnJvdy5zdmdcIjogMzA5LFxuXHRcIi4vYXJyb3cyLnN2Z1wiOiAzMTAsXG5cdFwiLi9iYWcuc3ZnXCI6IDMxMSxcblx0XCIuL2JhZzIuc3ZnXCI6IDMxMixcblx0XCIuL2NhcnQuc3ZnXCI6IDMxMyxcblx0XCIuL2Nsb3NlMS5zdmdcIjogMzE0LFxuXHRcIi4vY2xvc2UyLnN2Z1wiOiAzMTUsXG5cdFwiLi9jb21tZXJjZS5zdmdcIjogMzE2LFxuXHRcIi4vZmF2b3JpdGUuc3ZnXCI6IDMxNyxcblx0XCIuL2Zhdm9yaXRlMi5zdmdcIjogMzE4LFxuXHRcIi4vZmIuc3ZnXCI6IDMxOSxcblx0XCIuL2ZiMi5zdmdcIjogMzIwLFxuXHRcIi4vZ29vZ2xlLXBsdXMuc3ZnXCI6IDMyMSxcblx0XCIuL2dvb2dsZS1wbHVzMi5zdmdcIjogMzIyLFxuXHRcIi4vaGVhcnQuc3ZnXCI6IDMyMyxcblx0XCIuL2hvbWUuc3ZnXCI6IDMyNCxcblx0XCIuL2luZm8uc3ZnXCI6IDMyNSxcblx0XCIuL2luc3RhZ3JhbS5zdmdcIjogMzI2LFxuXHRcIi4vaW5zdGFncmFtMi5zdmdcIjogMzI3LFxuXHRcIi4vbGlua2VkaW4uc3ZnXCI6IDMyOCxcblx0XCIuL2xpbmtlZGluMi5zdmdcIjogMzI5LFxuXHRcIi4vbG9jYXRpb24uc3ZnXCI6IDMzMCxcblx0XCIuL21haWwuc3ZnXCI6IDMzMSxcblx0XCIuL21haWwyLnN2Z1wiOiAzMzIsXG5cdFwiLi9waG9uZTEuc3ZnXCI6IDMzMyxcblx0XCIuL3Bob25lMi5zdmdcIjogMzM0LFxuXHRcIi4vc2VhcmNoLnN2Z1wiOiAzMzUsXG5cdFwiLi90d2l0dGVyLnN2Z1wiOiAzMzYsXG5cdFwiLi93aXNobGlzdC5zdmdcIjogMzM3LFxuXHRcIi4veW91dHViZS5zdmdcIjogMzM4LFxuXHRcIi4veW91dHViZTIuc3ZnXCI6IDMzOVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzMDQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2ZyBub25yZWN1cnNpdmUgXFwuc3ZnJFxuICoqIG1vZHVsZSBpZCA9IDMwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDIxIDE2XFxcIiBpZD1cXFwiVHdpdHRlcjJcXFwiID48dGl0bGU+VHdpdHRlcjwvdGl0bGU+PHBhdGggZD1cXFwiTTE4LjE5IDQuMzk0Yy4wMDcuMTYzLjAxMi4zMjguMDEyLjQ5MiAwIDUuMDA1LTQuMDE4IDEwLjc3NC0xMS4zNyAxMC43NzQtMi4yNTYgMC00LjM1Ny0uNjI1LTYuMTI1LTEuNy4zMTMuMDM1LjYzLjA1My45NTMuMDUzIDEuODczIDAgMy41OTUtLjYwNiA0Ljk2My0xLjYyQzQuODc1IDEyLjM2IDMuNCAxMS4yNjUgMi44OSA5Ljc2Yy4yNDQuMDQ1LjQ5NS4wNy43NS4wNy4zNjYgMCAuNzItLjA0NiAxLjA1NC0uMTMzQzIuODY3IDkuMzUgMS40OSA3LjgyIDEuNDkgNS45ODR2LS4wNDhjLjU0LjI4MyAxLjE1NS40NTQgMS44MS40NzMtMS4wNzItLjY4LTEuNzc3LTEuODQtMS43NzctMy4xNTIgMC0uNjk1LjE5Ni0xLjM0Ni41NC0xLjkwNSAxLjk3IDIuMjkyIDQuOTE1IDMuOCA4LjIzNSAzLjk1OC0uMDY4LS4yNzctLjEwMi0uNTY1LS4xMDItLjg2MyAwLTIuMDkgMS43ODgtMy43ODcgMy45OTUtMy43ODcgMS4xNSAwIDIuMTg3LjQ2IDIuOTE3IDEuMTk2LjkxLS4xNyAxLjc2NS0uNDg0IDIuNTQtLjkyLS4zMDIuODg1LS45MzMgMS42MjctMS43NiAyLjA5Ni44MDgtLjA5IDEuNTgtLjI5NCAyLjI5NC0uNTk2LS41MzIuNzYtMS4yMSAxLjQyNi0xLjk5IDEuOTU4elxcXCIgZmlsbD1cXFwiIzM0MzQzNFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiVHdpdHRlcjJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvVHdpdHRlcjIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU3ByaXRlID0gcmVxdWlyZSgnLi9zcHJpdGUnKTtcbnZhciBnbG9iYWxTcHJpdGUgPSBuZXcgU3ByaXRlKCk7XG5cbmlmIChkb2N1bWVudC5ib2R5KSB7XG4gIGdsb2JhbFNwcml0ZS5lbGVtID0gZ2xvYmFsU3ByaXRlLnJlbmRlcihkb2N1bWVudC5ib2R5KTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZ2xvYmFsU3ByaXRlLmVsZW0gPSBnbG9iYWxTcHJpdGUucmVuZGVyKGRvY3VtZW50LmJvZHkpO1xuICB9LCBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsU3ByaXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU25pZmZyID0gcmVxdWlyZSgnc25pZmZyJyk7XG5cbi8qKlxuICogTGlzdCBvZiBTVkcgYXR0cmlidXRlcyB0byBmaXggdXJsIHRhcmdldCBpbiB0aGVtXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbnZhciBmaXhBdHRyaWJ1dGVzID0gW1xuICAnY2xpcFBhdGgnLFxuICAnY29sb3JQcm9maWxlJyxcbiAgJ3NyYycsXG4gICdjdXJzb3InLFxuICAnZmlsbCcsXG4gICdmaWx0ZXInLFxuICAnbWFya2VyJyxcbiAgJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlck1pZCcsXG4gICdtYXJrZXJFbmQnLFxuICAnbWFzaycsXG4gICdzdHJva2UnXG5dO1xuXG4vKipcbiAqIFF1ZXJ5IHRvIGZpbmQnZW1cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBmaXhBdHRyaWJ1dGVzUXVlcnkgPSAnWycgKyBmaXhBdHRyaWJ1dGVzLmpvaW4oJ10sWycpICsgJ10nO1xuLyoqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgVVJJX0ZVTkNfUkVHRVggPSAvXnVybFxcKCguKilcXCkkLztcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5LWxpa2UgdG8gYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBhcnJheUxpa2VcbiAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gKi9cbmZ1bmN0aW9uIGFycmF5RnJvbShhcnJheUxpa2UpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgMCk7XG59XG5cbi8qKlxuICogSGFuZGxlcyBmb3JiaWRkZW4gc3ltYm9scyB3aGljaCBjYW5ub3QgYmUgZGlyZWN0bHkgdXNlZCBpbnNpZGUgYXR0cmlidXRlcyB3aXRoIHVybCguLi4pIGNvbnRlbnQuXG4gKiBBZGRzIGxlYWRpbmcgc2xhc2ggZm9yIHRoZSBicmFja2V0c1xuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybiB7c3RyaW5nfSBlbmNvZGVkIHVybFxuICovXG5mdW5jdGlvbiBlbmNvZGVVcmxGb3JFbWJlZGRpbmcodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFwofFxcKS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlcyBwcmVmaXggaW4gYHVybCgpYCBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudFVybFByZWZpeFxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1VybFByZWZpeFxuICovXG5mdW5jdGlvbiBiYXNlVXJsV29ya0Fyb3VuZChzdmcsIGN1cnJlbnRVcmxQcmVmaXgsIG5ld1VybFByZWZpeCkge1xuICB2YXIgbm9kZXMgPSBzdmcucXVlcnlTZWxlY3RvckFsbChmaXhBdHRyaWJ1dGVzUXVlcnkpO1xuXG4gIGlmICghbm9kZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhcnJheUZyb20obm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUuYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFycmF5RnJvbShub2RlLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubG9jYWxOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmIChmaXhBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlTmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IFVSSV9GVU5DX1JFR0VYLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpO1xuXG4gICAgICAgIC8vIERvIG5vdCB0b3VjaCB1cmxzIHdpdGggdW5leHBlY3RlZCBwcmVmaXhcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdLmluZGV4T2YoY3VycmVudFVybFByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICB2YXIgcmVmZXJlbmNlVXJsID0gZW5jb2RlVXJsRm9yRW1iZWRkaW5nKG5ld1VybFByZWZpeCArIG1hdGNoWzFdLnNwbGl0KGN1cnJlbnRVcmxQcmVmaXgpWzFdKTtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCAndXJsKCcgKyByZWZlcmVuY2VVcmwgKyAnKScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEJlY2F1c2Ugb2YgRmlyZWZveCBidWcgIzM1MzU3NSBncmFkaWVudHMgYW5kIHBhdHRlcm5zIGRvbid0IHdvcmsgaWYgdGhleSBhcmUgd2l0aGluIGEgc3ltYm9sLlxuICogVG8gd29ya2Fyb3VuZCB0aGlzIHdlIG1vdmUgdGhlIGdyYWRpZW50IGRlZmluaXRpb24gb3V0c2lkZSB0aGUgc3ltYm9sIGVsZW1lbnRcbiAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICovXG52YXIgRmlyZWZveFN5bWJvbEJ1Z1dvcmthcm91bmQgPSBmdW5jdGlvbiAoc3ZnKSB7XG4gIHZhciBkZWZzID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2RlZnMnKTtcblxuICB2YXIgbW92ZVRvRGVmc0VsZW1zID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCBsaW5lYXJHcmFkaWVudCwgc3ltYm9sIHJhZGlhbEdyYWRpZW50LCBzeW1ib2wgcGF0dGVybicpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbW92ZVRvRGVmc0VsZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgZGVmcy5hcHBlbmRDaGlsZChtb3ZlVG9EZWZzRWxlbXNbaV0pO1xuICB9XG59O1xuXG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBERUZBVUxUX1VSSV9QUkVGSVggPSAnIyc7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIHhMaW5rSHJlZiA9ICd4bGluazpocmVmJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIHhMaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBzdmdPcGVuaW5nID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiJyArIHhMaW5rTlMgKyAnXCInO1xuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgc3ZnQ2xvc2luZyA9ICc8L3N2Zz4nO1xuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgY29udGVudFBsYWNlSG9sZGVyID0gJ3tjb250ZW50fSc7XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgU1ZHIHNwcml0ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNwcml0ZSgpIHtcbiAgdmFyIGJhc2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXTtcbiAgdmFyIGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xuICB2YXIgYmFzZVVybCA9IGJhc2VFbGVtZW50ICYmIGJhc2VFbGVtZW50LmhyZWY7XG4gIHRoaXMudXJsUHJlZml4ID0gYmFzZVVybCAmJiBiYXNlVXJsICE9PSBjdXJyZW50VXJsID8gY3VycmVudFVybCArIERFRkFVTFRfVVJJX1BSRUZJWCA6IERFRkFVTFRfVVJJX1BSRUZJWDtcblxuICB2YXIgc25pZmZyID0gbmV3IFNuaWZmcigpO1xuICBzbmlmZnIuc25pZmYoKTtcbiAgdGhpcy5icm93c2VyID0gc25pZmZyLmJyb3dzZXI7XG4gIHRoaXMuY29udGVudCA9IFtdO1xuXG4gIGlmICh0aGlzLmJyb3dzZXIubmFtZSAhPT0gJ2llJyAmJiBiYXNlVXJsKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Nwcml0ZUxvYWRlckxvY2F0aW9uVXBkYXRlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY3VycmVudFByZWZpeCA9IHRoaXMudXJsUHJlZml4O1xuICAgICAgdmFyIG5ld1VybFByZWZpeCA9IGUuZGV0YWlsLm5ld1VybC5zcGxpdChERUZBVUxUX1VSSV9QUkVGSVgpWzBdICsgREVGQVVMVF9VUklfUFJFRklYO1xuICAgICAgYmFzZVVybFdvcmtBcm91bmQodGhpcy5zdmcsIGN1cnJlbnRQcmVmaXgsIG5ld1VybFByZWZpeCk7XG4gICAgICB0aGlzLnVybFByZWZpeCA9IG5ld1VybFByZWZpeDtcblxuICAgICAgaWYgKHRoaXMuYnJvd3Nlci5uYW1lID09PSAnZmlyZWZveCcgfHwgdGhpcy5icm93c2VyLm5hbWUgPT09ICdlZGdlJyB8fCB0aGlzLmJyb3dzZXIubmFtZSA9PT0gJ2Nocm9tZScgJiYgdGhpcy5icm93c2VyLnZlcnNpb25bMF0gPj0gNDkpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gYXJyYXlGcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VzZVsqfGhyZWZdJykpO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgdmFyIGhyZWYgPSBub2RlLmdldEF0dHJpYnV0ZSh4TGlua0hyZWYpO1xuICAgICAgICAgIGlmIChocmVmICYmIGhyZWYuaW5kZXhPZihjdXJyZW50UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyh4TGlua05TLCB4TGlua0hyZWYsIG5ld1VybFByZWZpeCArIGhyZWYuc3BsaXQoREVGQVVMVF9VUklfUFJFRklYKVsxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG59XG5cblNwcml0ZS5zdHlsZXMgPSBbJ3Bvc2l0aW9uOmFic29sdXRlJywgJ3dpZHRoOjAnLCAnaGVpZ2h0OjAnLCAndmlzaWJpbGl0eTpoaWRkZW4nXTtcblxuU3ByaXRlLnNwcml0ZVRlbXBsYXRlID0gc3ZnT3BlbmluZyArICcgc3R5bGU9XCInKyBTcHJpdGUuc3R5bGVzLmpvaW4oJzsnKSArJ1wiPjxkZWZzPicgKyBjb250ZW50UGxhY2VIb2xkZXIgKyAnPC9kZWZzPicgKyBzdmdDbG9zaW5nO1xuU3ByaXRlLnN5bWJvbFRlbXBsYXRlID0gc3ZnT3BlbmluZyArICc+JyArIGNvbnRlbnRQbGFjZUhvbGRlciArIHN2Z0Nsb3Npbmc7XG5cbi8qKlxuICogQHR5cGUge0FycmF5PFN0cmluZz59XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuY29udGVudCA9IG51bGw7XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb250ZW50LCBpZCkge1xuICBpZiAodGhpcy5zdmcpIHtcbiAgICB0aGlzLmFwcGVuZFN5bWJvbChjb250ZW50KTtcbiAgfVxuXG4gIHRoaXMuY29udGVudC5wdXNoKGNvbnRlbnQpO1xuXG4gIHJldHVybiBERUZBVUxUX1VSSV9QUkVGSVggKyBpZDtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjb250ZW50XG4gKiBAcGFyYW0gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fVxuICovXG5TcHJpdGUucHJvdG90eXBlLndyYXBTVkcgPSBmdW5jdGlvbiAoY29udGVudCwgdGVtcGxhdGUpIHtcbiAgdmFyIHN2Z1N0cmluZyA9IHRlbXBsYXRlLnJlcGxhY2UoY29udGVudFBsYWNlSG9sZGVyLCBjb250ZW50KTtcblxuICB2YXIgc3ZnID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgKElFLCBtYXliZSBvdGhlciB0b28pIHdoaWNoIGFyZSB0aHJvd2luZyAnV3JvbmdEb2N1bWVudEVycm9yJ1xuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83OTgxMTAwL2hvdy1kby1pLWR5bmFtaWNhbGx5LWluc2VydC1hbi1zdmctaW1hZ2UtaW50by1odG1sIzc5ODY1MTlcbiAgICovXG4gIGlmIChkb2N1bWVudC5pbXBvcnROb2RlKSB7XG4gICAgc3ZnID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShzdmcsIHRydWUpO1xuICB9XG5cbiAgaWYgKHRoaXMuYnJvd3Nlci5uYW1lICE9PSAnaWUnICYmIHRoaXMudXJsUHJlZml4KSB7XG4gICAgYmFzZVVybFdvcmtBcm91bmQoc3ZnLCBERUZBVUxUX1VSSV9QUkVGSVgsIHRoaXMudXJsUHJlZml4KTtcbiAgfVxuXG4gIHJldHVybiBzdmc7XG59O1xuXG5TcHJpdGUucHJvdG90eXBlLmFwcGVuZFN5bWJvbCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBzeW1ib2wgPSB0aGlzLndyYXBTVkcoY29udGVudCwgU3ByaXRlLnN5bWJvbFRlbXBsYXRlKS5jaGlsZE5vZGVzWzBdO1xuXG4gIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2RlZnMnKS5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICBpZiAodGhpcy5icm93c2VyLm5hbWUgPT09ICdmaXJlZm94Jykge1xuICAgIEZpcmVmb3hTeW1ib2xCdWdXb3JrYXJvdW5kKHRoaXMuc3ZnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5TcHJpdGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpO1xuICByZXR1cm4gd3JhcHBlci5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFt0YXJnZXRdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmVwZW5kPXRydWVdXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJlbmRlcmVkIHNwcml0ZSBub2RlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHRhcmdldCwgcHJlcGVuZCkge1xuICB0YXJnZXQgPSB0YXJnZXQgfHwgbnVsbDtcbiAgcHJlcGVuZCA9IHR5cGVvZiBwcmVwZW5kID09PSAnYm9vbGVhbicgPyBwcmVwZW5kIDogdHJ1ZTtcblxuICB2YXIgc3ZnID0gdGhpcy53cmFwU1ZHKHRoaXMuY29udGVudC5qb2luKCcnKSwgU3ByaXRlLnNwcml0ZVRlbXBsYXRlKTtcblxuICBpZiAodGhpcy5icm93c2VyLm5hbWUgPT09ICdmaXJlZm94Jykge1xuICAgIEZpcmVmb3hTeW1ib2xCdWdXb3JrYXJvdW5kKHN2Zyk7XG4gIH1cblxuICBpZiAodGFyZ2V0KSB7XG4gICAgaWYgKHByZXBlbmQgJiYgdGFyZ2V0LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUoc3ZnLCB0YXJnZXQuY2hpbGROb2Rlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdmcpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuc3ZnID0gc3ZnO1xuXG4gIHJldHVybiBzdmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvc3ByaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24oaG9zdCkge1xuXG4gIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgIGJyb3dzZXI6IFtcbiAgICAgIFsvbXNpZSAoW1xcLlxcX1xcZF0rKS8sIFwiaWVcIl0sXG4gICAgICBbL3RyaWRlbnRcXC8uKj9ydjooW1xcLlxcX1xcZF0rKS8sIFwiaWVcIl0sXG4gICAgICBbL2ZpcmVmb3hcXC8oW1xcLlxcX1xcZF0rKS8sIFwiZmlyZWZveFwiXSxcbiAgICAgIFsvY2hyb21lXFwvKFtcXC5cXF9cXGRdKykvLCBcImNocm9tZVwiXSxcbiAgICAgIFsvdmVyc2lvblxcLyhbXFwuXFxfXFxkXSspLio/c2FmYXJpLywgXCJzYWZhcmlcIl0sXG4gICAgICBbL21vYmlsZSBzYWZhcmkgKFtcXC5cXF9cXGRdKykvLCBcInNhZmFyaVwiXSxcbiAgICAgIFsvYW5kcm9pZC4qP3ZlcnNpb25cXC8oW1xcLlxcX1xcZF0rKS4qP3NhZmFyaS8sIFwiY29tLmFuZHJvaWQuYnJvd3NlclwiXSxcbiAgICAgIFsvY3Jpb3NcXC8oW1xcLlxcX1xcZF0rKS4qP3NhZmFyaS8sIFwiY2hyb21lXCJdLFxuICAgICAgWy9vcGVyYS8sIFwib3BlcmFcIl0sXG4gICAgICBbL29wZXJhXFwvKFtcXC5cXF9cXGRdKykvLCBcIm9wZXJhXCJdLFxuICAgICAgWy9vcGVyYSAoW1xcLlxcX1xcZF0rKS8sIFwib3BlcmFcIl0sXG4gICAgICBbL29wZXJhIG1pbmkuKj92ZXJzaW9uXFwvKFtcXC5cXF9cXGRdKykvLCBcIm9wZXJhLm1pbmlcIl0sXG4gICAgICBbL29waW9zXFwvKFthLXpcXC5cXF9cXGRdKykvLCBcIm9wZXJhXCJdLFxuICAgICAgWy9ibGFja2JlcnJ5LywgXCJibGFja2JlcnJ5XCJdLFxuICAgICAgWy9ibGFja2JlcnJ5Lio/dmVyc2lvblxcLyhbXFwuXFxfXFxkXSspLywgXCJibGFja2JlcnJ5XCJdLFxuICAgICAgWy9iYlxcZCsuKj92ZXJzaW9uXFwvKFtcXC5cXF9cXGRdKykvLCBcImJsYWNrYmVycnlcIl0sXG4gICAgICBbL3JpbS4qP3ZlcnNpb25cXC8oW1xcLlxcX1xcZF0rKS8sIFwiYmxhY2tiZXJyeVwiXSxcbiAgICAgIFsvaWNld2Vhc2VsXFwvKFtcXC5cXF9cXGRdKykvLCBcImljZXdlYXNlbFwiXSxcbiAgICAgIFsvZWRnZVxcLyhbXFwuXFxkXSspLywgXCJlZGdlXCJdXG4gICAgXSxcbiAgICBvczogW1xuICAgICAgWy9saW51eCAoKShbYS16XFwuXFxfXFxkXSspLywgXCJsaW51eFwiXSxcbiAgICAgIFsvbWFjIG9zIHgvLCBcIm1hY29zXCJdLFxuICAgICAgWy9tYWMgb3MgeC4qPyhbXFwuXFxfXFxkXSspLywgXCJtYWNvc1wiXSxcbiAgICAgIFsvb3MgKFtcXC5cXF9cXGRdKykgbGlrZSBtYWMgb3MvLCBcImlvc1wiXSxcbiAgICAgIFsvb3BlbmJzZCAoKShbYS16XFwuXFxfXFxkXSspLywgXCJvcGVuYnNkXCJdLFxuICAgICAgWy9hbmRyb2lkLywgXCJhbmRyb2lkXCJdLFxuICAgICAgWy9hbmRyb2lkIChbYS16XFwuXFxfXFxkXSspOy8sIFwiYW5kcm9pZFwiXSxcbiAgICAgIFsvbW96aWxsYVxcL1thLXpcXC5cXF9cXGRdKyBcXCgoPzptb2JpbGUpfCg/OnRhYmxldCkvLCBcImZpcmVmb3hvc1wiXSxcbiAgICAgIFsvd2luZG93c1xccyooPzpudCk/XFxzKihbXFwuXFxfXFxkXSspLywgXCJ3aW5kb3dzXCJdLFxuICAgICAgWy93aW5kb3dzIHBob25lLio/KFtcXC5cXF9cXGRdKykvLCBcIndpbmRvd3MucGhvbmVcIl0sXG4gICAgICBbL3dpbmRvd3MgbW9iaWxlLywgXCJ3aW5kb3dzLm1vYmlsZVwiXSxcbiAgICAgIFsvYmxhY2tiZXJyeS8sIFwiYmxhY2tiZXJyeW9zXCJdLFxuICAgICAgWy9iYlxcZCsvLCBcImJsYWNrYmVycnlvc1wiXSxcbiAgICAgIFsvcmltLio/b3NcXHMqKFtcXC5cXF9cXGRdKykvLCBcImJsYWNrYmVycnlvc1wiXVxuICAgIF0sXG4gICAgZGV2aWNlOiBbXG4gICAgICBbL2lwYWQvLCBcImlwYWRcIl0sXG4gICAgICBbL2lwaG9uZS8sIFwiaXBob25lXCJdLFxuICAgICAgWy9sdW1pYS8sIFwibHVtaWFcIl0sXG4gICAgICBbL2h0Yy8sIFwiaHRjXCJdLFxuICAgICAgWy9uZXh1cy8sIFwibmV4dXNcIl0sXG4gICAgICBbL2dhbGF4eSBuZXh1cy8sIFwiZ2FsYXh5Lm5leHVzXCJdLFxuICAgICAgWy9ub2tpYS8sIFwibm9raWFcIl0sXG4gICAgICBbLyBndFxcLS8sIFwiZ2FsYXh5XCJdLFxuICAgICAgWy8gc21cXC0vLCBcImdhbGF4eVwiXSxcbiAgICAgIFsveGJveC8sIFwieGJveFwiXSxcbiAgICAgIFsvKD86YmJcXGQrKXwoPzpibGFja2JlcnJ5KXwoPzogcmltICkvLCBcImJsYWNrYmVycnlcIl1cbiAgICBdXG4gIH07XG5cbiAgdmFyIFVOS05PV04gPSBcIlVua25vd25cIjtcblxuICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xuXG4gIGZ1bmN0aW9uIFNuaWZmcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICBzZWxmW3Byb3BlcnR5TmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IFVOS05PV04sXG4gICAgICAgIHZlcnNpb246IFtdLFxuICAgICAgICB2ZXJzaW9uU3RyaW5nOiBVTktOT1dOXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lUHJvcGVydHkoc2VsZiwgcHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0uZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU1hdGNoZXIpIHtcbiAgICAgIHZhciBwcm9wZXJ0eVJlZ2V4ID0gcHJvcGVydHlNYXRjaGVyWzBdO1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0eU1hdGNoZXJbMV07XG5cbiAgICAgIHZhciBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaChwcm9wZXJ0eVJlZ2V4KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHNlbGZbcHJvcGVydHlOYW1lXS5uYW1lID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICBpZiAobWF0Y2hbMl0pIHtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvblN0cmluZyA9IG1hdGNoWzJdO1xuICAgICAgICAgIHNlbGZbcHJvcGVydHlOYW1lXS52ZXJzaW9uID0gW107XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvblN0cmluZyA9IG1hdGNoWzFdLnJlcGxhY2UoL18vZywgXCIuXCIpO1xuICAgICAgICAgIHNlbGZbcHJvcGVydHlOYW1lXS52ZXJzaW9uID0gcGFyc2VWZXJzaW9uKG1hdGNoWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvblN0cmluZyA9IFVOS05PV047XG4gICAgICAgICAgc2VsZltwcm9wZXJ0eU5hbWVdLnZlcnNpb24gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb25TdHJpbmcpIHtcbiAgICByZXR1cm4gdmVyc2lvblN0cmluZy5zcGxpdCgvW1xcLl9dLykubWFwKGZ1bmN0aW9uKHZlcnNpb25QYXJ0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmVyc2lvblBhcnQpO1xuICAgIH0pO1xuICB9XG5cbiAgU25pZmZyLnByb3RvdHlwZS5zbmlmZiA9IGZ1bmN0aW9uKHVzZXJBZ2VudFN0cmluZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdXNlckFnZW50ID0gKHVzZXJBZ2VudFN0cmluZyB8fCBuYXZpZ2F0b3IudXNlckFnZW50IHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICBkZXRlcm1pbmVQcm9wZXJ0eShzZWxmLCBwcm9wZXJ0eU5hbWUsIHVzZXJBZ2VudCk7XG4gICAgfSk7XG4gIH07XG5cblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNuaWZmcjtcbiAgfSBlbHNlIHtcbiAgICBob3N0LlNuaWZmciA9IG5ldyBTbmlmZnIoKTtcbiAgICBob3N0LlNuaWZmci5zbmlmZihuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgfVxufSkodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zbmlmZnIvc3JjL3NuaWZmci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDIwMC4zODcgMjAwLjM4N1xcXCIgaWQ9XFxcImFycm93XFxcIiA+PHBhdGggZD1cXFwiTTUuNTA0IDE1NC40NUwwIDE0OS4xIDEwMC4xOTcgNDUuOTM4bDEwMC4xOSAxMDMuMTY0LTUuNDk0IDUuMzQ3LTk0LjY5Ni05Ny41MDNcXFwiLz48cGF0aCBkPVxcXCJNMTAwLjE5NyA0NS45MzhMMCAxNDkuMTAybDUuNTA0IDUuMzQ3IDk0LjY5My05Ny41MDMgOTQuNjk2IDk3LjUwMiA1LjQ5NC01LjM0OFxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImFycm93XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Fycm93LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE5Ny40MDIgMTk3LjQwMlxcXCIgaWQ9XFxcImFycm93MlxcXCIgPjxwYXRoIGZpbGw9XFxcIiMwMTAwMDJcXFwiIGQ9XFxcIk0xNDYuODgzIDE5Ny40MDJMNDUuMjU1IDk4LjY5OCAxNDYuODgzIDBsNS4yNjUgNS40MTgtOTYuMDQgOTMuMjggOTYuMDQgOTMuMjgyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiYXJyb3cyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Fycm93Mi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAzNzcuNTgyIDM3Ny41ODJcXFwiIGlkPVxcXCJiYWdcXFwiID48cGF0aCBkPVxcXCJNMzMzLjcyIDM2Mi42M0wzMjAuMzMgMTA0LjA2NmMtLjM3My03LjE5NC02LjMxNS0xMi44MzYtMTMuNTE3LTEyLjgzNkgyNjcuMzFWNzguNTI2QzI2Ny4zMSAzNS4yMjUgMjMyLjA4IDAgMTg4Ljc4IDBjLTQzLjMgMC03OC41MjMgMzUuMjI2LTc4LjUyMyA3OC41MjVWOTEuMjNINzAuNzVjLTcuMjAzIDAtMTMuMTQ2IDUuNjQzLTEzLjUyIDEyLjgzN0w0My44MSAzNjMuMzQ1Yy0uMTkyIDMuNzA2IDEuMTQ2IDcuMzMgMy43MDIgMTAuMDIgMi41NTUgMi42OTIgNi4xMDQgNC4yMTcgOS44MTYgNC4yMTdoMjYyLjkzYzcuNDc1IDAgMTMuNTM0LTYuMDYgMTMuNTM0LTEzLjUzNiAwLS40OC0uMDI0LS45NTItLjA3My0xLjQxN3pNMTI5LjU0IDE0Ni4wMmMtOC4wMDYgMC0xNC41LTYuNDkyLTE0LjUtMTQuNXM2LjQ5NC0xNC41IDE0LjUtMTQuNWM4LjAwOCAwIDE0LjUgNi40OTQgMTQuNSAxNC41cy02LjQ5MiAxNC41LTE0LjUgMTQuNXptOTcuNDk3LTU0Ljc5aC03Ni41MVY3OC41MjZjMC0yMS4wOTUgMTcuMTYtMzguMjU1IDM4LjI1My0zOC4yNTUgMjEuMDk2IDAgMzguMjU3IDE3LjE2IDM4LjI1NyAzOC4yNTVWOTEuMjN6bTIxLjAwNCA1NC43OWMtOC4wMDYgMC0xNC41LTYuNDkyLTE0LjUtMTQuNXM2LjQ5NC0xNC41IDE0LjUtMTQuNWM4LjAwOCAwIDE0LjUgNi40OTQgMTQuNSAxNC41cy02LjQ5MiAxNC41LTE0LjUgMTQuNXpcXFwiIGZpbGw9XFxcIiMyMzFGMjBcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJiYWdcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvYmFnLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDM5NS4wMjUgMzk1LjAyNVxcXCIgaWQ9XFxcImJhZzJcXFwiID48cGF0aCBkPVxcXCJNMzU3LjUwNyAzODAuOTgybC0xOS41OTMtMjk4Ljc2Yy0uNDMtNi41Ny01Ljg4Ny0xMS42OC0xMi40NzMtMTEuNjhoLTU0LjY5VjYyLjVjMC0zNC40NjItMjguMDM3LTYyLjUtNjIuNS02Mi41aC0yMS40OTRjLTM0LjQ2MiAwLTYyLjUgMjguMDM4LTYyLjUgNjIuNXY4LjA0aC01NC42OWMtNi41ODYgMC0xMi4wNDIgNS4xMS0xMi40NzMgMTEuNjgzTDM3LjQ1IDM4MS43MWMtLjIyNyAzLjQ0OC45ODYgNi44MzcgMy4zNSA5LjM2IDIuMzY0IDIuNTI1IDUuNjY2IDMuOTU1IDkuMTI0IDMuOTU1aDI5NS4xOGM2LjkwMiAwIDEyLjUtNS41OTYgMTIuNS0xMi41LS4wMDMtLjUyLS4wMzQtMS4wMzctLjA5Ny0xLjU0M3pNMTQ5LjI1NSA2Mi41YzAtMjAuNjc4IDE2LjgyMi0zNy41IDM3LjUtMzcuNWgyMS40OTVjMjAuNjc4IDAgMzcuNSAxNi44MjIgMzcuNSAzNy41djguMDRoLTk2LjQ5NVY2Mi41ek02My4yNyAzNzAuMDI1TDgxLjI3MiA5NS41NDJoNDIuOTgzdjExLjE1NGMtOC44OTUgNC41Ni0xNSAxMy44MTgtMTUgMjQuNDgyIDAgMTUuMTY0IDEyLjMzNiAyNy41IDI3LjUgMjcuNXMyNy41LTEyLjMzNiAyNy41LTI3LjVjMC0xMC42NjQtNi4xMDUtMTkuOTIyLTE1LTI0LjQ4MlY5NS41NDJoOTYuNDk1djExLjE1NGMtOC44OTYgNC41Ni0xNSAxMy44MTgtMTUgMjQuNDgyIDAgMTUuMTY0IDEyLjMzNiAyNy41IDI3LjUgMjcuNXMyNy41LTEyLjMzNiAyNy41LTI3LjVjMC0xMC42NjQtNi4xMDUtMTkuOTIyLTE1LTI0LjQ4MlY5NS41NDJoNDIuOTgzbDE4LjAwMiAyNzQuNDgzSDYzLjI3elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImJhZzJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvYmFnMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OCA0OFxcXCIgaWQ9XFxcImNhcnRcXFwiID48cGF0aCBkPVxcXCJNMTUuNzMzIDIwLjEyNWMxLjEwNCAwIDItLjg5NiAyLTJ2LTcuOEMxNy43MzMgNi44MzggMjAuNTcgNCAyNC4wNTggNGMzLjQ4NyAwIDYuMzI1IDIuODM4IDYuMzI1IDYuMzI1djcuOGMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi03LjhDMzQuMzgzIDQuNjMyIDI5Ljc1IDAgMjQuMDU4IDBjLTUuNjkyIDAtMTAuMzI0IDQuNjMyLTEwLjMyNCAxMC4zMjV2Ny44YzAgMS4xMDQuODk1IDIgMiAyelxcXCIvPjxwYXRoIGQ9XFxcIk00NyAxNS42M0gzNi4zODN2Mi40OTVjMCAyLjIwNi0xLjc5NCA0LTQgNC0yLjIwNSAwLTQtMS43OTQtNC00VjE1LjYzaC04LjY1djIuNDk1YzAgMi4yMDYtMS43OTMgNC00IDRzLTQtMS43OTQtNC00VjE1LjYzSDFjLS41NTIgMC0uODkzLjQzNi0uNzYyLjk3Mkw3LjIzNSA0NS4xQzcuNjU4IDQ2LjcwMiA5LjM0MyA0OCAxMSA0OGgyNmMxLjY1OCAwIDMuMzQyLTEuMyAzLjc2Ny0yLjlsNi45OTYtMjguNDk4Yy4xMy0uNTM3LS4yMS0uOTctLjc2My0uOTd6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiY2FydFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9jYXJ0LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ1NS45OTIgNDU1Ljk5MlxcXCIgaWQ9XFxcImNsb3NlMVxcXCIgPjxwYXRoIGQ9XFxcIk0yMjcuOTk2IDBDMTAyLjA4IDAgMCAxMDIuMDggMCAyMjcuOTk2IDAgMzUzLjk0IDEwMi4wOCA0NTUuOTkyIDIyNy45OTYgNDU1Ljk5MmMxMjUuOTQ1IDAgMjI3Ljk5Ni0xMDIuMDUgMjI3Ljk5Ni0yMjcuOTk2QzQ1NS45OTIgMTAyLjA4IDM1My45NDIgMCAyMjcuOTk2IDB6bTAgNDI1LjU5M2MtMTA4Ljk1MiAwLTE5Ny41OTctODguNjQ1LTE5Ny41OTctMTk3LjU5N1MxMTkuMDQzIDMwLjQgMjI3Ljk5NSAzMC40czE5Ny41OTcgODguNjQ0IDE5Ny41OTcgMTk3LjU5Ni04OC42NDUgMTk3LjU5Ny0xOTcuNTk3IDE5Ny41OTd6XFxcIi8+PHBhdGggZD1cXFwiTTMxMi4xNDIgMTIyLjM1OGwtODMuNTM4IDgzLjU2OC03NC45NjUtODMuNTY4Yy01LjkzLTUuOTI4LTE1LjU2Ni01LjkyOC0yMS40OTMgMC01LjkyOCA1LjkyOC01LjkyOCAxNS41NjUgMCAyMS40OTJsNzQuOTY1IDgzLjU2OC04NC43MjMgODQuNzIzYy01LjkzIDUuOTMtNS45MyAxNS41OTYgMCAyMS40OTMgNS45MjcgNS45MjggMTUuNTY0IDUuOTI4IDIxLjQ5IDBsODMuNTctODMuNTM4IDc0Ljk2NCA4My41MzhjNS44OTcgNS45MjggMTUuNTY1IDUuOTI4IDIxLjQ2MiAwIDUuOTI4LTUuODk4IDUuOTI4LTE1LjU2NSAwLTIxLjQ5MmwtNzQuOTk1LTgzLjUzNyA4NC43MjQtODQuNzU0YzUuOTI4LTUuOTMgNS45MjgtMTUuNTY2IDAtMjEuNDkzLTUuOTI4LTUuOTI3LTE1LjUzNC01LjkyNy0yMS40NjIgMHpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJjbG9zZTFcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvY2xvc2UxLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ3Ni43MzcgNDc2LjczN1xcXCIgaWQ9XFxcImNsb3NlMlxcXCIgPjxwYXRoIGQ9XFxcIk0yMzguMzcgMEMxMDYuNzI1IDAgMCAxMDYuNzI2IDAgMjM4LjM3YzAgMTMxLjY3NCAxMDYuNzI2IDIzOC4zNjggMjM4LjM3IDIzOC4zNjggMTMxLjY3NCAwIDIzOC4zNjgtMTA2LjY5NCAyMzguMzY4LTIzOC4zN0M0NzYuNzM4IDEwNi43MjcgMzcwLjA0MyAwIDIzOC4zNjggMHptMTEwLjQ0MyAxNTAuMzk1bC04OC41NzggODguNjEgNzguNDA3IDg3LjMzOGM2LjE5OCA2LjE5OCA2LjE5OCAxNi4zMDQgMCAyMi40Ny02LjE2NiA2LjE5OC0xNi4yNzMgNi4xOTgtMjIuNDM4IDBsLTc4LjQwNy04Ny4zMzgtODcuMzcgODcuMzM4Yy02LjE5OCA2LjE5OC0xNi4yNzMgNi4xOTgtMjIuNDcgMC02LjE5OC02LjE2Ni02LjE5OC0xNi4yNzMgMC0yMi40N2w4OC41NzgtODguNTc4LTc4LjM3Ni04Ny4zN2MtNi4yLTYuMTk4LTYuMi0xNi4yNzMgMC0yMi40N3MxNi4yNzItNi4xOTggMjIuNDcgMGw3OC40MDYgODcuMzcgODcuMzM4LTg3LjM3YzYuMTk4LTYuMTk4IDE2LjI3My02LjE5OCAyMi40NyAwIDYuMTk4IDYuMTk3IDYuMTY2IDE2LjI3Mi0uMDMgMjIuNDd6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiY2xvc2UyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Nsb3NlMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAzMC41MTEgMzAuNTExXFxcIiBpZD1cXFwiY29tbWVyY2VcXFwiID48cGF0aCBkPVxcXCJNMjYuODE4IDE5LjAzN0wzMC40MjUgOC4yNGMuMTgtLjUxOC4wNDQtLjgzLS4xMDItMS4wMzYtLjM3NC0uNTI3LTEuMTQzLS41MzItMS4yOTItLjUzMkw4LjY0NyA2LjY2OGwtLjU0NC0yLjU4Yy0uMTQ3LS42MS0uNTgtMS4xOS0xLjQ1Ni0xLjE5SC45MTZjLS41OTMgMC0uOTE2LjI3Ny0uOTE2LjgzMnYxLjQ5YzAgLjUzNy4zMjIuNjc3LjkzOC42NzdoNC44MzdsMy43MDIgMTUuNzE3Yy0uNTg4LjYyMy0uOTA4IDEuNTMtLjkwOCAyLjM3OCAwIDEuODY0IDEuNDgzIDMuNTgyIDMuMzggMy41ODIgMS43OSAwIDMuMTMtMS42NzcgMy4zNS0yLjY3N2g3LjIxYy4yMTcgMSAxLjMwNCAyLjcxNyAzLjM0OCAyLjcxNyAxLjg2MyAwIDMuMzc4LTEuNjE0IDMuMzc4LTMuNDc1IDAtMS44NTItMS4xMjUtMy40OTMtMy4zNi0zLjQ5My0uOTI4IDAtMi4wMy41LTIuNTQyIDEuMjVoLTguODZjLS42NDItMS0xLjUyLTEuMzEtMi40MDgtMS4zNDVsLS4xMjMtLjY1NWgxMy40OGMxLjAxNSAwIDEuMjE1LS4zNyAxLjM5NS0uODZ6bS0uOTM1IDMuNzljLjcgMCAxLjI3LjU3IDEuMjcgMS4yN3MtLjU3IDEuMjctMS4yNyAxLjI3LTEuMjctLjU2Ny0xLjI3LTEuMjdjMC0uNy41Ny0xLjI3IDEuMjctMS4yN3ptLTEyLjY3OCAxLjI3YzAgLjcxLS41NzYgMS4yODctMS4yODMgMS4yODctLjcxLS4wMDItMS4yODYtLjU3Ny0xLjI4Ni0xLjI4NnMuNTc3LTEuMjg2IDEuMjg2LTEuMjg2Yy43MDcgMCAxLjI4My41NzcgMS4yODMgMS4yODZ6XFxcIiBmaWxsPVxcXCIjMDEwMDAyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiY29tbWVyY2VcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvY29tbWVyY2Uuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNTEwIDUxMFxcXCIgaWQ9XFxcImZhdm9yaXRlXFxcIiA+PHBhdGggZD1cXFwiTTI1NSA0MDIuMjEybDE1Ny41OSA5NS4wMzgtNDEuNjkzLTE3OS4yNEw1MTAgMTk3LjQ3M2wtMTgzLjM3LTE1LjczNEwyNTUgMTIuNzVsLTcxLjYzIDE2OC45ODhMMCAxOTcuNDcybDEzOS4xMDMgMTIwLjU0TDk3LjQxIDQ5Ny4yNVxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImZhdm9yaXRlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Zhdm9yaXRlLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDUxMCA1MTBcXFwiIGlkPVxcXCJmYXZvcml0ZTJcXFwiID48cGF0aCBkPVxcXCJNNTEwIDE5Ny40NzJsLTE4My4zNy0xNS43MzRMMjU1IDEyLjc1bC03MS42MyAxNjguOTg4TDAgMTk3LjQ3MmwxMzkuMTAzIDEyMC41NEw5Ny40MSA0OTcuMjUgMjU1IDQwMi4xODZsMTU3LjU5IDk1LjA2NC00MS42OTItMTc5LjI0TDUxMCAxOTcuNDczek0yNTUgMzU0LjM0OGwtOTUuOTU3IDU3Ljg4NiAyNS4zOTgtMTA5LjE2Ni04NC43MzUtNzMuMzkgMTExLjY5LTkuNTg3TDI1NSAxMTcuMTczbDQzLjYwNSAxMDIuOTE4IDExMS42OSA5LjU4OC04NC43MTIgNzMuMzkgMjUuMzk4IDEwOS4xNjVMMjU1IDM1NC4zNDh6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiZmF2b3JpdGUyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Zhdm9yaXRlMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwiZmJcXFwiID48cGF0aCBkPVxcXCJNMjQuODI2IDBDMTEuMTM2IDAgMCAxMS4xMzcgMCAyNC44MjZjMCAxMy42ODggMTEuMTM3IDI0LjgyNiAyNC44MjYgMjQuODI2IDEzLjY4OCAwIDI0LjgyNi0xMS4xMzggMjQuODI2LTI0LjgyNkM0OS42NTIgMTEuMTM2IDM4LjUxNiAwIDI0LjgyNiAwek0zMSAyNS43aC00LjA0djE0LjM5NmgtNS45ODRWMjUuN0gxOC4xM3YtNS4wODhoMi44NDZ2LTMuMjljMC0yLjM1OCAxLjEyLTYuMDQgNi4wNC02LjA0bDQuNDM1LjAxNnY0Ljk0aC0zLjIxOGMtLjUyNCAwLTEuMjcuMjYtMS4yNyAxLjM4NXYyLjk5aDQuNTZMMzEgMjUuN3pcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJmYlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9mYi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA5IDE2XFxcIiBpZD1cXFwiZmIyXFxcIiA+PHRpdGxlPkZhY2Vib29rPC90aXRsZT48cGF0aCBkPVxcXCJNNy44MjcgOC4xNjZINS42MXY3LjQ5NEgyLjMyVjguMTY2SC43NnYtMi42NWgxLjU2MlYzLjgwNUMyLjMyMiAyLjU3NyAyLjkzNy42NiA1LjY0LjY2bDIuNDM1LjAxdjIuNTdINi4zMDdjLS4yODggMC0uNjk3LjEzNi0uNjk3LjcyVjUuNTJoMi41MDVsLS4yODggMi42NDh6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJmYjJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZmIyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ5LjY1MiA0OS42NTJcXFwiIGlkPVxcXCJnb29nbGUtcGx1c1xcXCIgPjxwYXRoIGQ9XFxcIk0yMS41IDI4Ljk0Yy0uMTYtLjEwNy0uMzI2LS4yMjMtLjUtLjM0LS41MDItLjE1NC0xLjAzNi0uMjM0LTEuNTgzLS4yNGgtLjA2NmMtMi41MTMgMC00LjcxNyAxLjUyLTQuNzE3IDMuMjU2IDAgMS44OSAxLjg5IDMuMzY3IDQuMyAzLjM2NyAzLjE3OCAwIDQuNzktMS4wOTggNC43OS0zLjI1OCAwLS4yMDQtLjAyNS0uNDE2LS4wNzYtLjYzLS4yMTUtLjgzNy0uOTg0LTEuMzYtMi4xNDctMi4xNTV6TTE5LjcyIDIyLjM1MmMuNjAyIDAgMS4xMS0uMjM3IDEuNTAyLS42ODcuNjE2LS43MDIuODktMS44NTQuNzI3LTMuMDc3LS4yODYtMi4xODYtMS44NS00LjAwNi0zLjQ4LTQuMDUzbC0uMDY1LS4wMDJjLS41NzcgMC0xLjA5Mi4yMzgtMS40ODMuNjg2LS42MDcuNjkyLS44NjQgMS43OS0uNzA1IDMuMDEuMjg2IDIuMTg1IDEuODgyIDQuMDcyIDMuNDggNC4xMjJoLjAyMnpcXFwiLz48cGF0aCBkPVxcXCJNMjQuODI2IDBDMTEuMTM2IDAgMCAxMS4xMzcgMCAyNC44MjZjMCAxMy42ODggMTEuMTM3IDI0LjgyNiAyNC44MjYgMjQuODI2IDEzLjY4OCAwIDI0LjgyNi0xMS4xMzggMjQuODI2LTI0LjgyNkM0OS42NTIgMTEuMTM2IDM4LjUxNiAwIDI0LjgyNiAwem0tMi44NjIgMzYuOTE1Yy0uOTM4LjI3LTEuOTUzLjQwOC0zLjAxOC40MDgtMS4xODYgMC0yLjMyNi0uMTM2LTMuMzktLjQwNS0yLjA1Ni0uNTItMy41NzYtMS41MDMtNC4yODYtMi43Ny0uMzA2LS41NS0uNDYtMS4xMzMtLjQ2LTEuNzM4IDAtLjYyMy4xNDgtMS4yNTUuNDQyLTEuODggMS4xMjctMi40MDMgNC4wOTgtNC4wMiA3LjM5LTQuMDJoLjA5M2MtLjI2Ny0uNDctLjM5Ni0uOTU4LS4zOTYtMS40NyAwLS4yNTYuMDMzLS41MTYuMS0uNzgtMy40NS0uMDgtNi4wMzQtMi42MDctNi4wMzQtNS45NCAwLTIuMzUzIDEuODgtNC42NDYgNC41Ny01LjU3Mi44MDYtLjI3OCAxLjYyNy0uNDIgMi40MzQtLjQyaDcuMzgyYy4yNSAwIC40NzQuMTYzLjU1Mi40MDIuMDc4LjIzOC0uMDA4LjUtLjIxLjY0N2wtMS42NTIgMS4xOTVjLS4xLjA3LS4yMTguMTA4LS4zNC4xMDhoLS41OTJjLjc2My45MTUgMS4yMSAyLjIyIDEuMjEgMy42ODUgMCAxLjYxNy0uODE4IDMuMTQ2LTIuMzA3IDQuMzEtMS4xNS44OTctMS4xOTUgMS4xNDQtMS4xOTUgMS42NTUuMDE0LjI4LjgxNSAxLjE5OCAxLjcgMS44MjMgMi4wNTggMS40NTYgMi44MjQgMi44ODUgMi44MjQgNS4yNyAwIDIuNDktMS44OTIgNC42NDItNC44MTggNS40OTJ6bTE2LjY3LTEyLjY2MmMwIC4zMi0uMjYuNTgtLjU4LjU4SDMzLjg2djQuMTk3YzAgLjMyLS4yNi41OC0uNTc4LjU4aC0xLjE5NWMtLjMyMiAwLS41ODItLjI2LS41ODItLjU4di00LjE5N2gtNC4xOTJjLS4zMiAwLS41OC0uMjU4LS41OC0uNThWMjMuMDZjMC0uMzIuMjYtLjU4Mi41OC0uNTgyaDQuMTkydi00LjE5M2MwLS4zMi4yNi0uNTguNTgyLS41OGgxLjE5NWMuMzE3IDAgLjU3OC4yNi41NzguNTh2NC4xOTNoNC4xOTRjLjMyIDAgLjU4LjI2LjU4LjU4djEuMTk1elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImdvb2dsZS1wbHVzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2dvb2dsZS1wbHVzLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE4IDE2XFxcIiBpZD1cXFwiZ29vZ2xlLXBsdXMyXFxcIiA+PHRpdGxlPmdvb2dsZSs8L3RpdGxlPjxwYXRoIGQ9XFxcIk03LjEyIDEwLjYzYy0uMTAzLS4wNjUtLjIwOC0uMTM1LS4zMTctLjIwNS0uMzItLjA5Mi0uNjU3LS4xNC0xLjAwMy0uMTQ1aC0uMDQyYy0xLjU5IDAtMi45ODcuOTEzLTIuOTg3IDEuOTU1IDAgMS4xMzQgMS4xOTcgMi4wMiAyLjcyMyAyLjAyIDIuMDEzIDAgMy4wMzMtLjY1OCAzLjAzMy0xLjk1NCAwLS4xMjItLjAxNi0uMjUtLjA0OC0uMzc3LS4xMzYtLjUwMy0uNjIzLS44MTctMS4zNi0xLjI5NHptLjI5MyA0Ljc4NWMtLjU5NC4xNjMtMS4yMzcuMjQ1LTEuOTEuMjQ1LS43NTIgMC0xLjQ3NC0uMDgyLTIuMTQ3LS4yNDMtMS4zMDItLjMxMi0yLjI2NS0uOTAyLTIuNzE0LTEuNjYzLS4xOTQtLjMzLS4yOTItLjY4LS4yOTItMS4wNDIgMC0uMzc0LjA5NC0uNzU0LjI4LTEuMTMuNzE0LTEuNDQgMi41OTUtMi40MSA0LjY4LTIuNDFoLjA1OGMtLjE3LS4yODMtLjI1LS41NzYtLjI1LS44ODQgMC0uMTUzLjAyLS4zMS4wNjQtLjQ2OC0yLjE4Ni0uMDQ3LTMuODItMS41NjQtMy44Mi0zLjU2NCAwLTEuNDEyIDEuMTktMi43ODggMi44OTMtMy4zNDQuNTEtLjE2NyAxLjAzLS4yNTIgMS41NC0uMjUyaDQuNjc0Yy4xNTggMCAuMy4wOTguMzUuMjQuMDQ4LjE0NC0uMDA2LjMtLjEzNS4zOWwtMS4wNDUuNzE3Yy0uMDYzLjA0Mi0uMTM4LjA2NC0uMjE2LjA2NEg5LjA1Yy40ODMuNTUuNzY2IDEuMzM0Ljc2NiAyLjIxMyAwIC45Ny0uNTE4IDEuODg4LTEuNDYgMi41ODctLjczLjUzOC0uNzU3LjY4Ni0uNzU3Ljk5My4wMDguMTY4LjUxNS43MiAxLjA3NCAxLjA5NCAxLjMwNC44NzMgMS43OSAxLjczIDEuNzkgMy4xNjItLjAwMiAxLjQ5NC0xLjIgMi43ODUtMy4wNSAzLjI5NXptMTAuNTU1LTcuNmMwIC4xOTMtLjE2Ni4zNS0uMzY4LjM1aC0yLjY1NnYyLjUxOGMwIC4xOTItLjE2NS4zNDgtLjM2Ni4zNDhoLS43NTZjLS4yMDQgMC0uMzctLjE1NS0uMzctLjM0N3YtMi41MkgxMC44Yy0uMjAzIDAtLjM2OC0uMTUzLS4zNjgtLjM0N1Y3LjFjMC0uMTkyLjE2NS0uMzUuMzY3LS4zNWgyLjY1M1Y0LjIzNmMwLS4xOTMuMTY1LS4zNDguMzctLjM0OGguNzU1Yy4yIDAgLjM2Ni4xNTUuMzY2LjM0OFY2Ljc1SDE3LjZjLjIwMiAwIC4zNjcuMTU3LjM2Ny4zNXYuNzE2ek01Ljk5IDYuNjc2aC4wMDJjLjM4IDAgLjcwMi0uMTQyLjk1LS40MTIuMzktLjQyLjU2NC0xLjExMi40Ni0xLjg0Ni0uMTgtMS4zMTItMS4xNy0yLjQwNC0yLjIwMi0yLjQzM2gtLjA0Yy0uMzY2IDAtLjY5Mi4xNDItLjk0LjQxLS4zODQuNDE3LS41NDcgMS4wNzYtLjQ0NiAxLjgwOC4xOCAxLjMxIDEuMTkyIDIuNDQ0IDIuMjAzIDIuNDc0aC4wMTR6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJnb29nbGUtcGx1czJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZ29vZ2xlLXBsdXMyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE1XFxcIiBpZD1cXFwiaGVhcnRcXFwiID4mbHQ7PHBhdGggZD1cXFwiTTcuNjQzIDE0LjQzOGwtMS4wNy0xLjA3QzIuNiA5Ljg1MiAwIDcuNDgzIDAgNC41NzggMCAyLjIwOCAxLjgzNC4zNzUgNC4yMDMuMzc1YzEuMyAwIDIuNi42MSAzLjQ0IDEuNjA1Ljg0LS45OTQgMi4xNC0xLjYwNSAzLjQ0LTEuNjA1IDIuMzY4IDAgNC4yMDIgMS44MzQgNC4yMDIgNC4yMDMgMCAyLjkwNS0yLjU5OCA1LjI3NC02LjU3MiA4Ljc5bC0xLjA3IDEuMDd6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiaGVhcnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvaGVhcnQuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMjcuMDIgMjcuMDJcXFwiIGlkPVxcXCJob21lXFxcIiA+PGcgZmlsbD1cXFwiIzAzMDEwNFxcXCI+PHBhdGggZD1cXFwiTTMuNjc0IDI0Ljg3NnMtLjAyNC42MDQuNTY2LjYwNGw2LjgxLS4wMDguMDEtNS41OHMtLjA5NS0uOTIuNzk4LS45MmgyLjgyNmMxLjA1NiAwIC45OS45Mi45OS45MmwtLjAxIDUuNTYyaDYuNjY2Yy43NSAwIC43MTUtLjc1Mi43MTUtLjc1MnYtMTAuMjlMMTMuNjUgNi4wNTZsLTkuOTc2IDguMzU4djEwLjQ2M3pcXFwiLz48cGF0aCBkPVxcXCJNMCAxMy42MzVzLjg0NyAxLjU2IDIuNjk0IDBsMTEuMDM4LTkuMzM4IDEwLjM1IDkuMjhjMi4xMzcgMS41NDIgMi45MzggMCAyLjkzOCAwTDEzLjczMiAxLjU0IDAgMTMuNjM1ek0yMy44MyA0LjI3NWgtMi42NjJsLjAxIDMuMjI4IDIuNjUyIDIuMjVcXFwiLz48L2c+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiaG9tZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9ob21lLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDU0My45MDYgNTQzLjkwNlxcXCIgaWQ9XFxcImluZm9cXFwiID48cGF0aCBkPVxcXCJNMjcxLjk1MyAwQzEyMS43NiAwIDAgMTIxLjc2IDAgMjcxLjk1M3MxMjEuNzYgMjcxLjk1MyAyNzEuOTUzIDI3MS45NTMgMjcxLjk1My0xMjEuNzYgMjcxLjk1My0yNzEuOTUzUzQyMi4xNDggMCAyNzEuOTUzIDB6bTQ1LjA0IDc2LjMxNmMxLjA1Ni0uMDUgMi4xNC0uMDYgMy4yMzIgMCAxNC43MjQtLjQ4NCAyNy41MzMgMTAuNjIyIDI5LjU3OCAyNC45ODcgNi41NzYgMjcuNTgtMjIuNzIgNTUuMjI4LTQ5LjYzIDQ0LjE5Mi0zMi4xNC0xNC45Mi0xNS45NS02Ny41ODYgMTYuODItNjkuMTh6TTMwMy43NCAxOTYuMzE4YzIwLjg3NC0xLjMyNyAyNC41MTggMjIuOTY0IDE4LjAxMyA0Ny41OTItMTIuNjk1IDU2LjU4My0zMi40NTUgMTExLjQwMy00My4xNzUgMTY4LjQ0MiA1LjE3OCAyMi41MjMgMzMuNTc1LTMuMzEyIDQ1LjcyLTExLjU1OCAxMC4zMy04LjIxMyAxMi4xMjUgMi4wODMgMTUuNjM4IDEwLjcxLTI1Ljc3NiAxOC4wNTgtNTEuNjg3IDM2LjQ0Ny04MC4zOTUgNTAuOTktMjYuOTcgMTYuMzYyLTQ5LjA0OC05LjA3LTQyLjMyLTM3LjM5MyAxMS4xMjgtNTIuODQgMjUuNzc2LTEwNC44OCAzNy43MzYtMTU3LjU2MyAzLjczNy0yOC40NjgtMzMuNzI4LjUxLTQ0Ljg3MiA3LjEzNi04Ljk4NSAxMS4yOTItMTMuMjUgMy4wNS0xNi45OTctNy4xMzYgMjkuODctMjEuODE2IDYwLjMyNS00OC41OTMgOTMuMzEzLTY1Ljk1IDYuNzM4LTMuMzUgMTIuNTItNC45NjUgMTcuMzQtNS4yN3pcXFwiIGZpbGw9XFxcIiMwMTAwMDJcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJpbmZvXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2luZm8uc3ZnXG4gKiogbW9kdWxlIGlkID0gMzI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDkuNjUyIDQ5LjY1MlxcXCIgaWQ9XFxcImluc3RhZ3JhbVxcXCIgPjxwYXRoIGQ9XFxcIk0yNC44MjUgMjkuNzk2YzIuNzQgMCA0Ljk3Mi0yLjIzIDQuOTcyLTQuOTcgMC0xLjA4Mi0uMzU0LTIuMDgtLjk0LTIuODk3LS45MDMtMS4yNTMtMi4zNy0yLjA3NC00LjAzLTIuMDc0LTEuNjU4IDAtMy4xMjUuODItNC4wMyAyLjA3Mi0uNTg4LjgxNi0uOTQgMS44MTUtLjk0IDIuODk3LS4wMDMgMi43NCAyLjIyOCA0Ljk3IDQuOTY4IDQuOTd6TTM1LjY3OCAxOC43NDZWMTMuOTZsLS42MjMuMDAyLTQuMTY0LjAxMy4wMTcgNC43ODdcXFwiLz48cGF0aCBkPVxcXCJNMjQuODI2IDBDMTEuMTM2IDAgMCAxMS4xMzcgMCAyNC44MjZjMCAxMy42ODggMTEuMTM3IDI0LjgyNiAyNC44MjYgMjQuODI2IDEzLjY4OCAwIDI0LjgyNi0xMS4xMzggMjQuODI2LTI0LjgyNkM0OS42NTIgMTEuMTM2IDM4LjUxNiAwIDI0LjgyNiAwem0xNC4xMiAyMS45M3YxMS41NmMwIDMuMDEtMi40NSA1LjQ1Ny01LjQ1OCA1LjQ1N0gxNi4xNjRjLTMuMDEgMC01LjQ1Ny0yLjQ0Ny01LjQ1Ny01LjQ1OFYxNi4xNjRjMC0zLjAxIDIuNDQ3LTUuNDU3IDUuNDU3LTUuNDU3aDE3LjMyM2MzLjAxIDAgNS40NTggMi40NDcgNS40NTggNS40NTd2NS43NjR6XFxcIi8+PHBhdGggZD1cXFwiTTMyLjU1IDI0LjgyNmMwIDQuMjU3LTMuNDY1IDcuNzIzLTcuNzI0IDcuNzIzLTQuMjYgMC03LjcyMi0zLjQ2Ny03LjcyMi03LjcyNCAwLTEuMDI0LjIwNC0yLjAwMy41NjgtMi44OTdoLTQuMjE1djExLjU2YzAgMS40OTMgMS4yMTMgMi43MDMgMi43MDYgMi43MDNoMTcuMzIzYzEuNDkgMCAyLjcwNi0xLjIxIDIuNzA2LTIuNzA0VjIxLjkzaC00LjIxN2MuMzY3Ljg5My41NzQgMS44NzIuNTc0IDIuODk2elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImluc3RhZ3JhbVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9pbnN0YWdyYW0uc3ZnXG4gKiogbW9kdWxlIGlkID0gMzI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJpbnN0YWdyYW0yXFxcIiA+PHRpdGxlPlNoYXBlPC90aXRsZT48cGF0aCBkPVxcXCJNOC4wMSAxMC44YzEuNTM2IDAgMi43ODctMS4xODUgMi43ODctMi42NCAwLS41NzYtLjE5OC0xLjEwNi0uNTI3LTEuNTQtLjUwNi0uNjY1LTEuMzI4LTEuMS0yLjI1OC0xLjEtLjkzIDAtMS43NS40MzUtMi4yNiAxLjEtLjMyOC40MzMtLjUyNS45NjQtLjUyNSAxLjU0LS4wMDIgMS40NTUgMS4yNDggMi42NCAyLjc4NCAyLjY0em02LjA4My01Ljg3VjIuMzg3aC0uMzVsLTIuMzMzLjAwOC4wMSAyLjU0MyAyLjY3My0uMDA4em0xLjgzIDEuNjl2Ni4xNGMwIDEuNi0xLjM3IDIuOS0zLjA1NyAyLjloLTkuNzFDMS40NyAxNS42Ni4xIDE0LjM2LjEgMTIuNzZ2LTkuMmMwLTEuNiAxLjM3LTIuOSAzLjA1Ny0yLjloOS43MDhjMS42ODcgMCAzLjA2IDEuMyAzLjA2IDIuOXYzLjA2ek0xMi4zNCA4LjE2YzAgMi4yNi0xLjk0MiA0LjEtNC4zMyA0LjEtMi4zODUgMC00LjMyNi0xLjg0LTQuMzI2LTQuMSAwLS41NDUuMTE0LTEuMDY1LjMxOC0xLjU0SDEuNjR2Ni4xNGMwIC43OTQuNjggMS40MzcgMS41MTcgMS40MzdoOS43MDdjLjgzNiAwIDEuNTE3LS42NDMgMS41MTctMS40MzZWNi42MkgxMi4wMmMuMjA1LjQ3NS4zMi45OTUuMzIgMS41NHpcXFwiIGZpbGw9XFxcIiMzNDM0MzRcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImluc3RhZ3JhbTJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvaW5zdGFncmFtMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwibGlua2VkaW5cXFwiID48cGF0aCBkPVxcXCJNMjkuMzUgMjEuMjk4Yy0yLjEyNSAwLTMuMDc0IDEuMTY4LTMuNjA1IDEuOTg4di0xLjcwNGgtNC4wMDJjLjA1MiAxLjEyOCAwIDEyLjA0IDAgMTIuMDRoNC4wMDJ2LTYuNzI2YzAtLjM2LjAyMy0uNzIuMTMtLjk3Ny4yOS0uNzIuOTUtMS40NjYgMi4wNTUtMS40NjYgMS40NDggMCAyLjAyNyAxLjEwNCAyLjAyNyAyLjcyNHY2LjQ0Mmg0LjAwMnYtNi45MDVjLS4wMDItMy42OTYtMS45NzctNS40MTctNC42MS01LjQxN3ptLTMuNjA4IDIuMDNoLS4wMjVjLjAwOC0uMDE0LjAyLS4wMjcuMDI1LS4wNHYuMDR6TTE1LjUyMyAyMS41ODJoNC4wMDJ2MTIuMDRoLTQuMDAyelxcXCIvPjxwYXRoIGQ9XFxcIk0yNC44MjYgMEMxMS4xMzYgMCAwIDExLjEzNyAwIDI0LjgyNmMwIDEzLjY4OCAxMS4xMzcgMjQuODI2IDI0LjgyNiAyNC44MjYgMTMuNjg4IDAgMjQuODI2LTExLjEzOCAyNC44MjYtMjQuODI2QzQ5LjY1MiAxMS4xMzYgMzguNTE2IDAgMjQuODI2IDB6TTM3Ljk5IDM2LjA1NWMwIDEuMDU2LS44NzUgMS45MS0xLjk1OCAxLjkxaC0yMi41OGMtMS4wOCAwLTEuOTU4LS44NTQtMS45NTgtMS45MVYxMy4yMWMwLTEuMDU0Ljg3Ny0xLjkxIDEuOTU3LTEuOTFoMjIuNTgyYzEuMDgyIDAgMS45Ni44NTcgMS45NiAxLjkxdjIyLjg0NXpcXFwiLz48cGF0aCBkPVxcXCJNMTcuNTUgMTUuNzc3Yy0xLjM2NyAwLTIuMjYzLjg5OC0yLjI2MyAyLjA4IDAgMS4xNTUuODcgMi4wOCAyLjIxIDIuMDhoLjAyN2MxLjM5NiAwIDIuMjY1LS45MjUgMi4yNjUtMi4wOC0uMDI4LTEuMTgtLjg3LTIuMDgtMi4yNC0yLjA4elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImxpbmtlZGluXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2xpbmtlZGluLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE3IDE2XFxcIiBpZD1cXFwibGlua2VkaW4yXFxcIiA+PHRpdGxlPmxpbmtlZGluPC90aXRsZT48cGF0aCBkPVxcXCJNMTEuNDYgNi4yODRjLTEuMjYgMC0xLjgyNC42NTctMi4xNCAxLjExOHYtLjk1OEg2Ljk0N2MuMDMuNjM0IDAgNi43NzMgMCA2Ljc3M0g5LjMyVjkuNDMzYzAtLjIwMi4wMTUtLjQwNS4wOC0uNTUuMTctLjQwNS41NjItLjgyNCAxLjIxOC0uODI0Ljg2IDAgMS4yMDMuNjIgMS4yMDMgMS41MzJ2My42MjRoMi4zNzZWOS4zM2MwLTIuMDc4LTEuMTcyLTMuMDQ2LTIuNzM1LTMuMDQ2ek05LjMyIDcuNDI2aC0uMDE1Yy4wMDQtLjAwOC4wMTItLjAxNS4wMTUtLjAyM3YuMDIzem0tNi4wNjYtLjk4Mkg1LjYzdjYuNzczSDMuMjU0VjYuNDQ0em0xLjIwNC0zLjI2NmMtLjgxMiAwLTEuMzQ0LjUwNS0xLjM0NCAxLjE3IDAgLjY1LjUxNiAxLjE3IDEuMzEzIDEuMTdoLjAxNWMuODMgMCAxLjM0NC0uNTIgMS4zNDQtMS4xNy0uMDE2LS42NjQtLjUxNS0xLjE3LTEuMzI4LTEuMTd6bTEyLjEzIDExLjQwN2MwIC41OTUtLjUyIDEuMDc1LTEuMTYgMS4wNzVIMi4wMjRjLS42NCAwLTEuMTYyLS40OC0xLjE2Mi0xLjA3NVYxLjczNWMwLS41OTQuNTItMS4wNzUgMS4xNjItMS4wNzVoMTMuNDAyYy42NDIgMCAxLjE2Mi40ODIgMS4xNjIgMS4wNzR2MTIuODV6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJsaW5rZWRpbjJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvbGlua2VkaW4yLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ2Ni41ODMgNDY2LjU4MlxcXCIgaWQ9XFxcImxvY2F0aW9uXFxcIiA+PHBhdGggZD1cXFwiTTIzMy4yOTIgMGMtODUuMSAwLTE1NC4zMzQgNjkuMjM0LTE1NC4zMzQgMTU0LjMzMyAwIDM0LjI3NSAyMS44ODcgOTAuMTU1IDY2LjkwOCAxNzAuODM0IDMxLjg0NiA1Ny4wNjMgNjMuMTY4IDEwNC42NDMgNjQuNDg0IDEwNi42NGwyMi45NDIgMzQuNzc1IDIyLjk0LTM0Ljc3NGMxLjMxOC0xLjk5OCAzMi42NDItNDkuNTc3IDY0LjQ4NC0xMDYuNjQgNDUuMDIzLTgwLjY4IDY2LjkwOC0xMzYuNTYgNjYuOTA4LTE3MC44MzRDMzg3LjYyNCA2OS4yMzQgMzE4LjM5IDAgMjMzLjI5MiAwem0wIDIzMy4yOWMtNDQuMTgyIDAtODAtMzUuODE2LTgwLTgwczM1LjgxOC04MCA4MC04MCA4MCAzNS44MTggODAgODAtMzUuODIgODAtODAgODB6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwibG9jYXRpb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvbG9jYXRpb24uc3ZnXG4gKiogbW9kdWxlIGlkID0gMzMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNzkuNTM2IDc5LjUzNlxcXCIgaWQ9XFxcIm1haWxcXFwiID48cGF0aCBkPVxcXCJNMzkuNzczIDEuMzFMMCAzMS4wMDR2NDcuMjIyaDc5LjUzNlYzMS4wMDRMMzkuNzczIDEuMzF6TTI4Ljc3IDIyLjVjMS4xNjctMi4xMzQgMi43NzUtMy43NCA0LjgxNS00LjgwNiAyLjAzNS0xLjA3NSA0LjM1Ny0xLjYxNiA2Ljk4My0xLjYxNiAyLjIxNCAwIDQuMTkuNDM1IDUuOTIgMS4yOTIgMS43My44NyAzLjA0NiAyLjA5NCAzLjk2OCAzLjY4Ny45IDEuNTk1IDEuMzY3IDMuMzM0IDEuMzY3IDUuMjE3IDAgMi4yNDctLjY5NCA0LjI4LTIuMDgyIDYuMDk3LTEuNzQgMi4yOTMtMy45NiAzLjQzNy02LjY4IDMuNDM3LS43MyAwLTEuMjc4LS4xMjItMS42NTMtLjM4LS4zNjUtLjI2Mi0uNjItLjYzMi0uNzQzLTEuMTMtMS4wMjIgMS4wMTMtMi4yMyAxLjUyLTMuNTkgMS41Mi0xLjQ2NCAwLTIuNjc4LS41MDYtMy42NDItMS41MDgtLjk2Ni0xLjAxMy0xLjQ0Ny0yLjM2Mi0xLjQ0Ny00LjAzMiAwLTIuMDg0LjU3OC0zLjk2NiAxLjc0My01LjY3MiAxLjQxNi0yLjA4NCAzLjIxOC0zLjEzIDUuNDI0LTMuMTMgMS41NyAwIDIuNzMuNiAzLjQ3NSAxLjgwNWwuMzMtMS40NjdoMy41bC0xLjk5NyA5LjQ4Yy0uMTI1LjYwNS0uMTg3Ljk4NS0uMTg3IDEuMTYyIDAgLjIyOC4wNTIuMzguMTUuNDk3LjA5OC4xMS4yMjIuMTY1LjM1Ni4xNjUuNDM1IDAgLjk3OC0uMjQ4IDEuNjQ1LS43Ny45LS42NjIgMS42MjctMS41NzMgMi4xOC0yLjY5NC41NTUtMS4xMy44NC0yLjMuODQtMy41MDggMC0yLjE2NS0uNzgyLTMuOTc3LTIuMzUyLTUuNDQ1LTEuNTczLTEuNDUtMy43Ny0yLjE4NS02LjU3OC0yLjE4NS0yLjM5MyAwLTQuNDE3LjQ4Ny02LjA3NyAxLjQ2OC0xLjY2Ljk2Ni0yLjkxMyAyLjM0My0zLjc2NSA0LjExNC0uODQgMS43Ni0xLjI1OCAzLjYwNy0xLjI1OCA1LjUyIDAgMS44NTYuNDggMy41NTIgMS40MSA1LjA3NC45NDYgMS41MzQgMi4yNiAyLjY0MiAzLjk1NyAzLjM0NiAxLjY5Ni42OTcgMy42NDMgMS4wNDYgNS44MjggMS4wNDYgMi4wOTcgMCAzLjkxLS4yOTMgNS40MzItLjg4IDEuNTIyLS41ODggMi43NC0xLjQ1OCAzLjY2Ni0yLjY0MmgyLjgwN2MtLjg4IDEuNzkyLTIuMjI3IDMuMTkyLTQuMDUgNC4yMTUtMi4wOSAxLjE2My00LjY0IDEuNzQtNy42NDMgMS43NC0yLjkxOCAwLTUuNDI2LS40ODctNy41NDItMS40NjgtMi4xMi0uOTg2LTMuNjktMi40MzQtNC43My00LjM1LTEuMDI4LTEuOTE4LTEuNTM1LTQuMDA4LTEuNTM1LTYuMjY4LjAwMi0yLjQ3OC41OC00Ljc5IDEuNzU1LTYuOTN6TTIuODA0IDMxLjk0bDI5LjM0NCAxOS42OEwyLjgwNCA3NC4zMzRWMzEuOTR6bTIuMjMgNDMuOTA0bDM0Ljc0LTI2Ljg4NUw3NC41IDc1Ljg0M0g1LjAzMnptNzEuNjk1LTEuNTFMNDcuMzkgNTEuNjJsMjkuMzQtMTkuNjh2NDIuMzkzek00MS4yMDQgMjQuNjZjLjQ2Ni41MzIuNyAxLjI5Ni43IDIuMjkzIDAgLjg5LS4xNzUgMS44NTYtLjUxNCAyLjg4LS4zMzMgMS4wMzUtLjc0MiAxLjgyNS0xLjIwOCAyLjM2LS4zMTguMzc1LS42NTguNjUyLS45OTIuODI2LS40NC4yNDgtLjkwNi4zNy0xLjQxLjM3LS42NzQuMDA1LTEuMjMtLjI2NS0xLjY5LS43OTUtLjQ1LS41My0uNjc0LTEuMzQ2LS42NzQtMi40NjUgMC0uODQuMTU4LTEuODA1LjQ4Ny0yLjg5LjMzLTEuMDg3LjgxLTEuOTE1IDEuNDUzLTIuNTA4LjY0Ny0uNTg4IDEuMzQ2LS44OCAyLjEtLjg4LjcwNi4wMDQgMS4yOTMuMjczIDEuNzUuODF6XFxcIiBmaWxsPVxcXCIjMDEwMDAyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwibWFpbFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9tYWlsLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE0IDE0XFxcIiBpZD1cXFwibWFpbDJcXFwiID48ZyBmaWxsPVxcXCIjMDMwMTA0XFxcIj48cGF0aCBkPVxcXCJNNyA5TDUuMjY4IDcuNDg0LjMxNiAxMS43M2MuMTguMTY2LjQyMy4yNy42OS4yN2gxMS45ODdjLjI2NyAwIC41MS0uMTA0LjY4OC0uMjdMOC43MzMgNy40ODMgNyA5elxcXCIvPjxwYXRoIGQ9XFxcIk0xMy42ODQgMi4yN2MtLjE4LS4xNjctLjQyMi0uMjctLjY5LS4yN0gxLjAwNmMtLjI2NyAwLS41MS4xMDQtLjY5LjI3M0w3IDhsNi42ODQtNS43M3pNMCAyLjg3OHY4LjMwOEw0LjgzMyA3LjA4TTkuMTY3IDcuMDhMMTQgMTEuMTg1di04LjMxXFxcIi8+PC9nPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcIm1haWwyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL21haWwyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9TaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDUxLjQxMyA1MS40MTNcXFwiIGlkPVxcXCJwaG9uZTFcXFwiID48ZyBmaWxsPVxcXCIjMDEwMDAyXFxcIj48cGF0aCBkPVxcXCJNMjUuOTkgMTIuMjc0YzguNjYyLjA4NSAxNC4wOS0uNDU0IDE0LjgyMiA5LjE0OGgxMC41NjRjMC0xNC44NzUtMTIuOTczLTE2Ljg4LTI1LjY2Mi0xNi44OC0xMi42OSAwLTI1LjY2MiAyLjAwNS0yNS42NjIgMTYuODhoMTAuNDgyYy44MS05Ljc4NSA2Ljg2NC05LjIzMiAxNS40NTUtOS4xNDh6TTUuMjkgMjYuMjA0YzIuNTc0IDAgNC43MTUuMTU0IDUuMTktMi4zNzcuMDY1LS4zNDQuMTAyLS43MzQuMTAyLTEuMTg1SDBjMCAzLjc2NSAyLjM3IDMuNTYyIDUuMjkgMy41NjJ6TTQwLjg4IDIyLjY0MmgtLjFjMCAuNDU0LjA0Ljg0NS4xMTMgMS4xODUuNTAyIDIuMzM0IDIuNjQgMi4xOSA1LjIwNCAyLjE5IDIuOTM2IDAgNS4zMTYuMTkyIDUuMzE2LTMuMzc1SDQwLjg4elxcXCIvPjxwYXRoIGQ9XFxcIk0zNS43MiAyMC4wNzh2LTEuNDk2YzAtLjY3LS43NzItLjcxLTEuNzI0LS43MUgzMi40NGMtLjk1IDAtMS43Mi4wNC0xLjcyLjcxdjIuMjloLTExdi0yLjI5YzAtLjY3LS43NzItLjcxLTEuNzIzLS43MUgxNi40NGMtLjk1IDAtMS43Mi4wNC0xLjcyLjcxdjIuODAyYy0yLjUwNyAyLjYwNC0xMC43MDcgMTMuNjktMTEuMDA1IDE1LjAzbC4wMDQgOC45NTZjMCAuODI3LjY3MiAxLjUgMS41IDEuNWg0MGMuODI2IDAgMS41LS42NzMgMS41LTEuNXYtOWMtLjI5Ni0xLjMwMy04LjQ5NC0xMi4zODMtMTEtMTQuOTg3di0xLjMwNXpNMTkuMTc2IDM3LjYyYy0uODA1IDAtMS40NTgtLjY1Mi0xLjQ1OC0xLjQ1OHMuNjUyLTEuNDU4IDEuNDU3LTEuNDU4IDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OC0uNjUzIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDUgMC0xLjQ1OC0uNjUyLTEuNDU4LTEuNDU4cy42NTItMS40NTggMS40NTctMS40NTggMS40NTguNjUyIDEuNDU4IDEuNDU4LS42NTMgMS40NTgtMS40NTggMS40NTh6bTAtNWMtLjgwNSAwLTEuNDU4LS42NS0xLjQ1OC0xLjQ1NyAwLS44MDUuNjUyLTEuNDU4IDEuNDU3LTEuNDU4czEuNDU4LjY1MyAxLjQ1OCAxLjQ1OGMwIC44MDYtLjY1MyAxLjQ1OC0xLjQ1OCAxLjQ1OHptNiAxMGMtLjgwNSAwLTEuNDU4LS42NTItMS40NTgtMS40NThzLjY1Mi0xLjQ1OCAxLjQ1Ny0xLjQ1OGMuODA2IDAgMS40NTguNjUyIDEuNDU4IDEuNDU4cy0uNjUyIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDUgMC0xLjQ1OC0uNjUyLTEuNDU4LTEuNDU4cy42NTItMS40NTggMS40NTctMS40NThjLjgwNiAwIDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OHMtLjY1MiAxLjQ1OC0xLjQ1OCAxLjQ1OHptMC01Yy0uODA1IDAtMS40NTgtLjY1LTEuNDU4LTEuNDU3IDAtLjgwNS42NTItMS40NTggMS40NTctMS40NTguODA2IDAgMS40NTguNjUzIDEuNDU4IDEuNDU4IDAgLjgwNi0uNjUyIDEuNDU4LTEuNDU4IDEuNDU4em02IDEwYy0uODA2IDAtMS40NTgtLjY1Mi0xLjQ1OC0xLjQ1OHMuNjUtMS40NTggMS40NTctMS40NTggMS40NTguNjUyIDEuNDU4IDEuNDU4LS42NTIgMS40NTgtMS40NTggMS40NTh6bTAtNWMtLjgwNiAwLTEuNDU4LS42NTItMS40NTgtMS40NThzLjY1LTEuNDU4IDEuNDU3LTEuNDU4IDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OC0uNjUyIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDYgMC0xLjQ1OC0uNjUtMS40NTgtMS40NTcgMC0uODA1LjY1LTEuNDU4IDEuNDU3LTEuNDU4czEuNDU4LjY1MyAxLjQ1OCAxLjQ1OGMwIC44MDYtLjY1MiAxLjQ1OC0xLjQ1OCAxLjQ1OHpcXFwiLz48L2c+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwicGhvbmUxXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3Bob25lMS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1NzguMTA2IDU3OC4xMDZcXFwiIGlkPVxcXCJwaG9uZTJcXFwiID48cGF0aCBkPVxcXCJNNTc3LjgzIDQ1Ni4xMjhjMS4yMjUgOS4zODUtMS42MzUgMTcuNTQ1LTguNTY4IDI0LjQ4bC04MS4zOTYgODAuNzhjLTMuNjcyIDQuMDgtOC40NjUgNy41NTItMTQuMzggMTAuNDA1LTUuOTE3IDIuODU3LTExLjczIDQuNjkzLTE3LjQ0IDUuNTA4LS40MDggMC0xLjYzNS4xMDYtMy42NzYuMzEtMi4wMzcuMjAzLTQuNjkuMzA3LTcuOTUzLjMwNy03Ljc1NCAwLTIwLjMtMS4zMjYtMzcuNjQtMy45OHMtMzguNTU2LTkuMTgtNjMuNjQ2LTE5LjU4M2MtMjUuMDk1LTEwLjQwNC01My41NTItMjYuMDEyLTg1LjM3NS00Ni44MTgtMzEuODIzLTIwLjgwNS02NS42ODgtNDkuMzY3LTEwMS41OTItODUuNjgtMjguNTYtMjguMTUyLTUyLjIyNC01NS4wOC03MC45OTItODAuNzgzLTE4Ljc2Ny0yNS43MDUtMzMuODYzLTQ5LjQ3LTQ1LjI4Ny03MS4zLTExLjQyNS0yMS44MjctMTkuOTkzLTQxLjYxNS0yNS43MDUtNTkuMzYzUzQuNTkgMTc3LjM2MiAyLjU1IDE2NC41MS0uMzA2IDE0MS41Ni4xMDIgMTM0LjIxNmMuNDA4LTcuMzQ0LjYxMi0xMS40MjQuNjEyLTEyLjI0LjgxNi01LjcxMiAyLjY1Mi0xMS41MjYgNS41MDgtMTcuNDQyczYuMzI0LTEwLjcxIDEwLjQwNC0xNC4zODJMOTguMDIyIDguNzU2YzUuNzEyLTUuNzEyIDEyLjI0LTguNTY4IDE5LjU4NC04LjU2OCA1LjMwNCAwIDkuOTk2IDEuNTMgMTQuMDc2IDQuNTlzNy41NDggNi44MzQgMTAuNDA0IDExLjMyMmw2NS40ODQgMTI0LjIzNmMzLjY3MiA2LjUyOCA0LjY5MiAxMy42NjggMy4wNiAyMS40Mi0xLjYzMiA3Ljc1Mi01LjEgMTQuMjgtMTAuNDA0IDE5LjU4NGwtMjkuOTg4IDI5Ljk4OGMtLjgxNi44MTYtMS41MyAyLjE0Mi0yLjE0MiAzLjk3OHMtLjkxOCAzLjM2Ni0uOTE4IDQuNTljMS42MzIgOC41NjggNS4zMDQgMTguMzYgMTEuMDE2IDI5LjM3NiA0Ljg5NiA5Ljc5MiAxMi40NDQgMjEuNzI2IDIyLjY0NCAzNS44MDJzMjQuNjg0IDMwLjI5MyA0My40NTIgNDguNjUzYzE4LjM2IDE4Ljc3IDM0LjY4IDMzLjM1NCA0OC45NiA0My43NiAxNC4yNzcgMTAuNCAyNi4yMTUgMTguMDUzIDM1LjgwMyAyMi45NSA5LjU4OCA0Ljg5NSAxNi45MzIgNy44NTMgMjIuMDMgOC44N2w3LjY1IDEuNTNjLjgxNSAwIDIuMTQ0LS4zMDYgMy45NzgtLjkxNyAxLjgzNy0uNjEzIDMuMTYzLTEuMzI2IDMuOTgtMi4xNDNsMzQuODgzLTM1LjQ5NmM3LjM0OC02LjUyNiAxNS45MTItOS43OSAyNS43MDUtOS43OSA2LjkzOCAwIDEyLjQ0MyAxLjIyMyAxNi41MjMgMy42NzJoLjYxMmwxMTguMTE1IDY5Ljc2OGM4LjU3IDUuMzA4IDEzLjY3IDEyLjAzOCAxNS4zMDMgMjAuMTk4elxcXCIgZmlsbD1cXFwiIzAxMDAwMlxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcInBob25lMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9waG9uZTIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDg4LjEzOSA0ODguMTM5XFxcIiBpZD1cXFwic2VhcmNoXFxcIiA+PHBhdGggZD1cXFwiTTI5MC41MTMuMDA0QzE4MS4zNzguMDA0IDkyLjkxNiA4OC40NjYgOTIuOTE2IDE5Ny42YzAgNDYuOTY3IDE2LjQ3NyA5MC4wNDMgNDMuODM2IDEyNC4wM0w2LjE1NiA0NTIuMTk2Yy04LjIwOCA4LjIzOC04LjIwOCAyMS41NTMgMCAyOS43NiA4LjIwOCA4LjI0IDIxLjU1MyA4LjI0IDI5Ljc2IDBsMTMwLjU5Ny0xMzAuNTY1YzMzLjkyNiAyNy4zMyA3Ny4wMzIgNDMuODA3IDEyNC4wMyA0My44MDcgMTA5LjEzNCAwIDE5Ny41OTctODguNDYyIDE5Ny41OTctMTk3LjU5N1MzOTkuNjE2LjAwNCAyOTAuNTEzLjAwNHptMCAzNjQuNzkzYy05Mi4yMzIgMC0xNjcuMTk3LTc0Ljk5Ni0xNjcuMTk3LTE2Ny4xOTdTMTk4LjM0IDMwLjQwMyAyOTAuNTEzIDMwLjQwMyA0NTcuNzEgMTA1LjQgNDU3LjcxIDE5Ny42cy03NC45OTYgMTY3LjE5Ny0xNjcuMTk3IDE2Ny4xOTd6XFxcIiBmaWxsPVxcXCIjMDEwMDAyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwic2VhcmNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3NlYXJjaC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwidHdpdHRlclxcXCIgPjxwYXRoIGQ9XFxcIk0yNC44MjYgMEMxMS4xMzYgMCAwIDExLjEzNyAwIDI0LjgyNmMwIDEzLjY4OCAxMS4xMzcgMjQuODI2IDI0LjgyNiAyNC44MjYgMTMuNjg4IDAgMjQuODI2LTExLjEzOCAyNC44MjYtMjQuODI2QzQ5LjY1MiAxMS4xMzYgMzguNTE2IDAgMjQuODI2IDB6TTM1LjkgMTkuMTQ0Yy4wMTIuMjQ2LjAxOC40OTQuMDE4Ljc0MiAwIDcuNTUtNS43NDYgMTYuMjU1LTE2LjI2IDE2LjI1NS0zLjIyNiAwLTYuMjMtLjk0Mi04Ljc1OC0yLjU2NC40NDcuMDUzLjkwMi4wOCAxLjM2My4wOCAyLjY3OCAwIDUuMTQtLjkxNCA3LjA5Ny0yLjQ0Ni0yLjUtLjA0Ni00LjYxLTEuNjk4LTUuMzM4LTMuOTcuMzQ4LjA2Ny43MDcuMTA0IDEuMDc0LjEwNC41MiAwIDEuMDI3LS4wNjggMS41MDYtLjItMi42MTQtLjUyMy00LjU4My0yLjgzMi00LjU4My01LjYwMnYtLjA3MmMuNzcuNDI3IDEuNjUuNjg1IDIuNTg3LjcxNC0xLjUzMi0xLjAyMy0yLjU0LTIuNzczLTIuNTQtNC43NTUgMC0xLjA1LjI4LTIuMDMuNzcyLTIuODc1IDIuODE2IDMuNDU4IDcuMDI4IDUuNzMyIDExLjc3NiA1Ljk3Mi0uMDk4LS40Mi0uMTQ3LS44NTQtLjE0Ny0xLjMwMyAwLTMuMTU1IDIuNTU3LTUuNzE0IDUuNzEyLTUuNzE0IDEuNjQ0IDAgMy4xMjcuNjk0IDQuMTcgMS44MDQgMS4zMDQtLjI1NiAyLjUyNC0uNzMgMy42My0xLjM4Ny0uNDMgMS4zMzUtMS4zMzIgMi40NTQtMi41MTUgMy4xNjIgMS4xNTctLjE0IDIuMjYtLjQ0NSAzLjI4Mi0uOS0uNzYzIDEuMTQ0LTEuNzMyIDIuMTUtMi44NSAyLjk1NHpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ0d2l0dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3R3aXR0ZXIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDQuNTY5IDQ0LjU2OVxcXCIgaWQ9XFxcIndpc2hsaXN0XFxcIiA+PHBhdGggZD1cXFwiTTExLjY5OCAxLjc0YzMuMTEgMCA1LjY1IDEuMDQ3IDcuNjAzIDIuODU2IDEuMjU1IDEuMTYgMi4yNTUgMi42MiAyLjk4NSA0LjMxNy43My0xLjY5OCAxLjczLTMuMTYgMi45NjgtNC4zMTcgMS45NTItMS44MSA0LjUwOC0yLjg1NyA3LjYyLTIuODU3IDMuMjM3IDAgNi4xNTcgMS4zMTYgOC4yNjggMy40MjcgMi4xMjggMi4xMjcgMy40MyA1LjA0NyAzLjQzIDguMjcgMCA1LjU0LTYuMDY0IDEyLjAzLTEwLjM2NiAxNi42Mi0uNzc4LjgyNC0xLjQ5MiAxLjU4Ni0yLjE0MyAyLjMxNmwtOC45MzUgMTAuMDhjLS40MTMuNDYtMS4xMS41MDctMS41Ny4wOTQtLjA1LS4wMzItLjA4LS4wNjMtLjExMi0uMDk1bC04LjkzNi0xMC4wOGMtLjU4Ny0uNjUtMS4zNS0xLjQ2LTIuMTc0LTIuMzQ4QzYuMDMgMjUuNDM3IDAgMTguOTk0IDAgMTMuNDM3YzAtMy4yMjIgMS4zMTctNi4xNDMgMy40MjgtOC4yNyAyLjEyNy0yLjExIDUuMDQ4LTMuNDI4IDguMjctMy40Mjh6bTYuMDk1IDQuNDljLTEuNTQtMS40MjgtMy41Ny0yLjI1My02LjA5NS0yLjI1My0yLjYwMyAwLTQuOTY4IDEuMDYzLTYuNjgyIDIuNzc4cy0yLjc3OCA0LjA4LTIuNzc4IDYuNjgyYzAgNC42ODIgNS42ODIgMTAuNzQ2IDkuNzMgMTUuMDYzLjc5NC44NCAxLjU0IDEuNjM1IDIuMjA2IDIuMzk3bDguMTEgOS4xNDMgOC4xMTItOS4xNDNjLjYwMy0uNjY3IDEuMzY1LTEuNDkyIDIuMTktMi4zNjUgNC4wMzItNC4zMTcgOS43NDYtMTAuNDEyIDkuNzQ2LTE1LjA5NSAwLTIuNjAzLTEuMDYzLTQuOTY4LTIuNzYyLTYuNjgyLTEuNzE0LTEuNzE0LTQuMDgtMi43NzgtNi42OTgtMi43NzgtMi41MjQgMC00LjU1NS44MjUtNi4wOTUgMi4yNTQtMS42ODIgMS41NTYtMi44MjUgMy44NTgtMy4zOCA2LjYyLS4wOC40NDQtLjQxNC44MS0uODkuOTA1LS42MDMuMTI3LTEuMTktLjI1NC0xLjMxNy0uODczLS41NTYtMi43NjItMS43LTUuMDgtMy4zOTctNi42NXpcXFwiIGZpbGw9XFxcIiMxRTIwMURcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ3aXNobGlzdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy93aXNobGlzdC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvU2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA5Ny43NSA5Ny43NVxcXCIgaWQ9XFxcInlvdXR1YmVcXFwiID48cGF0aCBkPVxcXCJNMjUuNjc2IDUyLjQ4MmgzLjg3NXYyMC45NzNoMy42NjdWNTIuNDgyaDMuOTQ3di0zLjQzNUgyNS42NzZNNTYuNjc0IDU1LjA0NmMtMS4yMTIgMC0yLjM0My42NjItMy40MDYgMS45NzJ2LTcuOTcyaC0zLjI5NXYyNC40MWgzLjI5NXYtMS43NjNjMS4xMDMgMS4zNiAyLjIzMyAyLjAxMyAzLjQwNiAyLjAxMyAxLjMxIDAgMi4xOTMtLjY5IDIuNjMzLTIuMDQ0LjIyLS43Ny4zMzQtMS45ODIuMzM0LTMuNjY1di03LjI0MmMwLTEuNzIyLS4xMTItMi45MjQtLjMzMy0zLjY1NS0uNDQtMS4zNjQtMS4zMjMtMi4wNTQtMi42MzMtMi4wNTR6bS0uMzMgMTMuMjFjMCAxLjY0My0uNDgyIDIuNDUzLTEuNDM0IDIuNDUzLS41NCAwLTEuMDkyLS4yNi0xLjY0My0uODEyVjU4LjgxNGMuNTUtLjU0NSAxLjEwMi0uODAzIDEuNjQzLS44MDMuOTUgMCAxLjQzNC44NDMgMS40MzQgMi40ODN2Ny43NjJ6TTQzLjgyNCA2OS4xNjdjLS43MyAxLjAzMy0xLjQyMiAxLjU0Mi0yLjA4NCAxLjU0Mi0uNDQgMC0uNjktLjI2LS43Ny0uNzcyLS4wMy0uMTA2LS4wMy0uNTA4LS4wMy0xLjI4di0xMy4zOWgtMy4yOTd2MTQuMzhjMCAxLjI4NC4xMSAyLjE1Mi4yOSAyLjcwNC4zMzIuOTIyIDEuMDY0IDEuMzU0IDIuMTI0IDEuMzU0IDEuMjEzIDAgMi40NTctLjczMiAzLjc2Ny0yLjIzNHYxLjk4NGgzLjI5OFY1NS4yNjhoLTMuMjk4djEzLjl6TTQ2LjY1MyAzOC40NjZjMS4wNzMgMCAxLjU4OC0uODUgMS41ODgtMi41NXYtNy43MzJjMC0xLjctLjUxNC0yLjU0OC0xLjU4Ny0yLjU0OC0xLjA3NCAwLTEuNTkuODQ4LTEuNTkgMi41NDh2Ny43M2MwIDEuNzAyLjUxNiAyLjU1MiAxLjU5IDIuNTUyelxcXCIvPjxwYXRoIGQ9XFxcIk00OC44NzUgMEMyMS44ODIgMCAwIDIxLjg4MiAwIDQ4Ljg3NVMyMS44ODIgOTcuNzUgNDguODc1IDk3Ljc1IDk3Ljc1IDc1Ljg2OCA5Ny43NSA0OC44NzUgNzUuODY4IDAgNDguODc1IDB6bTUuNDM2IDIyLjg2aDMuMzIydjEzLjUzMmMwIC43OCAwIDEuMTg2LjA0IDEuMjk1LjA3My41MTYuMzM1Ljc4Ljc4Ljc4LjY2NyAwIDEuMzY2LS41MTYgMi4xMDUtMS41NlYyMi44NmgzLjMzdjE4LjM4aC0zLjMzdi0yLjAwNWMtMS4zMjYgMS41Mi0yLjU5IDIuMjU3LTMuODA1IDIuMjU3LTEuMDcyIDAtMS44MTItLjQzNS0yLjE0Ni0xLjM2NS0uMTg0LS41NTctLjI5NS0xLjQzNi0uMjk1LTIuNzMzVjIyLjg2em0tMTIuNTc3IDUuOTkzYzAtMS45NjUuMzM0LTMuNCAxLjA0Mi00LjMzLjkyLTEuMjU3IDIuMjE4LTEuODg1IDMuODc4LTEuODg1IDEuNjY4IDAgMi45NjQuNjI4IDMuODg1IDEuODg1LjY5OC45MjggMS4wMzIgMi4zNjUgMS4wMzIgNC4zM3Y2LjQzNmMwIDEuOTUzLS4zMzQgMy40MDItMS4wMzIgNC4zMi0uOTIgMS4yNTUtMi4yMTcgMS44ODItMy44ODUgMS44ODItMS42NiAwLTIuOTU3LS42MjctMy44NzgtMS44OC0uNzA4LS45Mi0xLjA0Mi0yLjM3LTEuMDQyLTQuMzIzdi02LjQzN3ptLTguOTA2LTEyLjI3N2wyLjYyMiA5LjY4NSAyLjUxOC05LjY4NGgzLjczNUwzNy4yNiAzMS4yNXY5Ljk5aC0zLjY5MnYtOS45OWMtLjMzNS0xLjc3LTEuMDc0LTQuMzYyLTIuMjYtNy44MDItLjc3Ny0yLjI5LTEuNTg4LTQuNTg1LTIuMzY2LTYuODcyaDMuODg1em00Mi4zNiA1OC40ODVjLS42NyAyLjktMy4wNCA1LjA0LTUuODk1IDUuMzYtNi43NjMuNzU0LTEzLjYwNC43NTgtMjAuNDIuNzU0LTYuODEzLjAwNC0xMy42NTggMC0yMC40Mi0uNzU1LTIuODU0LS4zMi01LjIyNi0yLjQ2LTUuODkyLTUuMzYtLjk1LTQuMTI4LS45NS04LjYzNy0uOTUtMTIuODlzLjAxLTguNzYuOTYtMTIuODljLjY2OC0yLjkgMy4wMzgtNS4wNCA1Ljg5My01LjM1NyA2Ljc2Mi0uNzU1IDEzLjYwNi0uNzYgMjAuNDItLjc1NSA2LjgxNC0uMDA0IDEzLjY1OCAwIDIwLjQyLjc1NSAyLjg1NS4zMiA1LjIyNyAyLjQ1OCA1Ljg5NiA1LjM1OC45NDcgNC4xMy45NCA4LjY0Ljk0IDEyLjg5cy0uMDAzIDguNzYyLS45NTQgMTIuODl6XFxcIi8+PHBhdGggZD1cXFwiTTY3LjE3IDU1LjA0NmMtMS42ODYgMC0yLjk5NS42Mi0zLjk0NyAxLjg2NC0uNy45Mi0xLjAxOCAyLjM0Mi0xLjAxOCA0LjI4NXY2LjM3YzAgMS45MzQuMzU3IDMuMzY2IDEuMDYgNC4yNzcuOTUgMS4yNDIgMi4yNjMgMS44NjMgMy45ODcgMS44NjMgMS43MiAwIDMuMDcyLS42NSAzLjk4NC0xLjk3Mi40LS41ODQuNjYtMS4yNDUuNzctMS45NzUuMDMtLjMzLjA3LTEuMDYuMDctMi4xMjR2LS40OGgtMy4zNmMwIDEuMzItLjA0NCAyLjA1NC0uMDczIDIuMjMzLS4xODguODgtLjY2MiAxLjMyLTEuNDczIDEuMzItMS4xMzIgMC0xLjY4Ni0uODQtMS42ODYtMi41MlY2NC45Nmg2LjU5MnYtMy43NjdjMC0xLjk0My0uMzMtMy4zNjUtMS4wMi00LjI4NS0uOTItMS4yNDItMi4yMzItMS44NjItMy44ODYtMS44NjJ6bTEuNjEyIDcuMTcyaC0zLjI5NnYtMS42ODNjMC0xLjY4Mi41NTMtMi41MjMgMS42NTQtMi41MjMgMS4wOSAwIDEuNjQyLjg0MiAxLjY0MiAyLjUyM3YxLjY4M3pcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ5b3V0dWJlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3lvdXR1YmUuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL1Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTQgMTZcXFwiIGlkPVxcXCJ5b3V0dWJlMlxcXCIgPjx0aXRsZT5Zb3V0dWJlPC90aXRsZT48cGF0aCBkPVxcXCJNMS41ODQgOC45OTdoLjk1djQuODdoLjg5OHYtNC44N2guOTY2VjguMkgxLjU4NHYuNzk3em03LjU5NC41OTZjLS4yOTcgMC0uNTc0LjE1NC0uODM0LjQ1OFY4LjJoLS44MDh2NS42NjdoLjgwOHYtLjQxYy4yNy4zMTcuNTQ3LjQ3LjgzNC40Ny4zMiAwIC41MzctLjE2LjY0NS0uNDc2LjA1NC0uMTc4LjA4Mi0uNDYuMDgyLS44NXYtMS42ODJjMC0uNC0uMDI4LS42NzgtLjA4Mi0uODQ4LS4xMDgtLjMxNy0uMzI0LS40NzctLjY0NS0uNDc3em0tLjA4IDMuMDY3YzAgLjM4Mi0uMTIuNTctLjM1Mi41Ny0uMTMzIDAtLjI2OC0uMDYtLjQwMy0uMTg4di0yLjU3NGMuMTM1LS4xMjcuMjctLjE4Ny40MDMtLjE4Ny4yMzMgMCAuMzUuMTk3LjM1LjU3OHYxLjgwMnptLTMuMDY4LjIxMmMtLjE4LjI0LS4zNDguMzU4LS41MS4zNTgtLjEwOCAwLS4xNy0uMDYtLjE5LS4xOC0uMDA3LS4wMjQtLjAwNy0uMTE3LS4wMDctLjI5NnYtMy4xMWgtLjgwN3YzLjM0YzAgLjI5OC4wMjcuNS4wNy42MjcuMDgyLjIxNS4yNjIuMzE2LjUyLjMxNi4yOTggMCAuNjAzLS4xNy45MjQtLjUydi40NjJoLjgwOFY5LjY0NEg2LjAzdjMuMjI4em0uNjkzLTcuMTNjLjI2MyAwIC4zOS0uMTk3LjM5LS41OVYzLjM1NGMwLS4zOTUtLjEyNy0uNTktLjM5LS41OXMtLjM5LjE5Ni0uMzkuNTlWNS4xNWMwIC4zOTYuMTI3LjU5My4zOS41OTN6TTguNiAyLjEyaC44MTN2My4xNGMwIC4xODMgMCAuMjc3LjAxLjMwMi4wMTcuMTIuMDgyLjE4LjE5LjE4LjE2NCAwIC4zMzUtLjEyLjUxNi0uMzZWMi4xMThoLjgxNXY0LjI2N2gtLjgxNlY1LjkyYy0uMzI2LjM1NC0uNjM1LjUyNi0uOTMzLjUyNi0uMjYzIDAtLjQ0NC0uMS0uNTI2LS4zMTctLjA0NC0uMTMtLjA3LS4zMzUtLjA3LS42MzZWMi4xMnpNNS41MTcgMy41MWMwLS40NTYuMDgyLS43OS4yNTUtMS4wMDUuMjI2LS4yOTIuNTQzLS40MzcuOTUtLjQzNy40MSAwIC43MjYuMTQ1Ljk1Mi40MzcuMTcuMjE2LjI1My41NS4yNTMgMS4wMDZ2MS40OTVjMCAuNDU0LS4wODIuNzktLjI1MyAxLjAwNC0uMjI2LjI5LS41NDMuNDM2LS45NTIuNDM2LS40MDcgMC0uNzI0LS4xNDYtLjk1LS40MzctLjE3My0uMjE1LS4yNTUtLjU1LS4yNTUtMS4wMDVWMy41MXpNMy4zMzYuNjZsLjY0MiAyLjI1LjYxNy0yLjI1aC45MTVMNC40MjIgNC4wNjh2Mi4zMmgtLjkwNHYtMi4zMmMtLjA4My0uNDEtLjI2NC0xLjAxNC0uNTU0LTEuODEyLS4xOS0uNTMyLS4zOS0xLjA2NS0uNTgtMS41OTZoLjk1MnptMTAuMzc3IDEzLjU4Yy0uMTY0LjY3NC0uNzQ0IDEuMTctMS40NDQgMS4yNDUtMS42NTguMTc1LTMuMzM0LjE3Ni01LjAwMy4xNzUtMS42NyAwLTMuMzQ2IDAtNS4wMDMtLjE3NS0uNy0uMDc1LTEuMjgtLjU3LTEuNDQzLTEuMjQ1Qy41OSAxMy4yODIuNTkgMTIuMjM1LjU5IDExLjI0N2MwLS45ODcuMDAzLTIuMDM0LjIzNS0yLjk5My4xNjQtLjY3My43NDQtMS4xNyAxLjQ0NC0xLjI0NCAxLjY1Ni0uMTc1IDMuMzMzLS4xNzYgNS4wMDMtLjE3NSAxLjY3IDAgMy4zNDUgMCA1LjAwMi4xNzUuNy4wNzQgMS4yOC41NyAxLjQ0NCAxLjI0NC4yMzIuOTYuMjMgMi4wMDYuMjMgMi45OTMgMCAuOTg4IDAgMi4wMzUtLjIzMyAyLjk5M3pNMTEuNzUgOS41OTNjLS40MTQgMC0uNzM0LjE0NC0uOTY4LjQzMy0uMTcuMjEzLS4yNS41NDMtLjI1Ljk5NXYxLjQ4YzAgLjQ1LjA4OC43OC4yNi45OTMuMjMzLjI4OC41NTUuNDMzLjk3Ny40MzMuNDIgMCAuNzUyLS4xNTIuOTc1LS40NTguMDk4LS4xMzYuMTYyLS4yOS4xOS0uNDYuMDA3LS4wNzYuMDE2LS4yNDUuMDE2LS40OTJ2LS4xMWgtLjgyMmMwIC4zMDUtLjAxLjQ3NS0uMDE4LjUxNy0uMDQ2LjIwNC0uMTYyLjMwNy0uMzYuMzA3LS4yNzggMC0uNDE0LS4xOTUtLjQxNC0uNTg2di0uNzVoMS42MTV2LS44NzRjMC0uNDUtLjA4LS43OC0uMjUtLjk5NS0uMjI0LS4yODgtLjU0Ni0uNDMyLS45NS0uNDMyem0uMzk0IDEuNjY1aC0uODA3di0uMzljMC0uMzkuMTM1LS41ODYuNDA1LS41ODYuMjY3IDAgLjQwMi4xOTUuNDAyLjU4NXYuMzl6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ5b3V0dWJlMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy95b3V0dWJlMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge01FRElBX1FVRVJJRVN9IGZyb20gJ2pzL3NoYXJlZC9zaGFyZWQnO1xuXG4vKipcbiAqIE1lZGlhUXVlcnkgbW9kdWxlXG4gKiBVc2VkIHRvIGRldGVjdCBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gKlxuICogVXNhZ2U6XG4gKiAkKHdpbmRvdykub24oTUVESUFfUVVFUlksIGNhbGxiYWNrICk7XG4gKlxuICogV2hlcmU6XG4gKiAgICBNRURJQV9RVUVSWSBjYW4gYmUgOiAneHMnLCAnc20nLCAnbWQnLCAnbGcnLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWluJywgJ3NtTWluJywgJ21kTWluJywnbGdNaW4nLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgJ3hzTWF4JywgJ3NtTWF4JywgJ21kTWF4JywgJ2xnTWF4J1xuICogICAgQ2FsbGJhY2s6IGZ1bmN0aW9uIG5hbWUgb3IgYW5vbnltb3VzIGZ1bmN0aW9uXG4gKlxuICogICAgZS5nLiA6XG4gKlxuICogICAgZnVuY3Rpb24gc2F5R29vZGJ5ZSA9IHsgYWxlcnQoJ2dvb2RieWUnKSB9XG4gKiAgICAkKHdpbmRvdykub24oJ3NtTWluJywgc2F5R29vZGJ5ZSB9KVxuICpcbiAqICAgIG9yXG4gKlxuICogICAgJCh3aW5kb3cpLm9uKCdzbU1pbicsIGZ1bmN0aW9uKCkgeyBhbGVydCgnaGVsbG8nKTsgfSlcbiAqXG4gKlxuICogQHR5cGUge3tuZXcoKT0+e19oYW5kbGVNUUNoYW5nZTogKChtcWwsIGluZGV4PykpLCBkZXN0cm95OiAoKCkpfX19XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUXVlcmllc0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgd2luZG93LmluZm8gPSB3aW5kb3cuaW5mbyB8fCB7fTtcbiAgICBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgPSBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgfHwgW107XG5cbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKTtcblxuICAgICAgLy8gdGhlIGRlZmF1bHQgbWF0Y2htZWRpYSdzIGFkZExpc3RlbmVyIG1ldGhvZCBkb2Vzbid0IHN1cHBvcnQgZXh0cmEgcGFyYW1ldGVycyxcbiAgICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIGFub3RoZXIgZXh0cmEgZnVuY3Rpb24gdGhhdCBjYW4gcGFzcyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWVcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIgPSAobXFsKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZU1RQ2hhbmdlKG1xbCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAkLmVhY2goTUVESUFfUVVFUklFUywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpLnJlbW92ZUxpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gaGFuZGxlIHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICogQHBhcmFtIG1xbCAtIGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAgICogQHBhcmFtIGJyZWFrcG9pbnROYW1lIC0gY3VycmVudCBicmVha3BvaW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgX2hhbmRsZU1RQ2hhbmdlKG1xbCwgYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICQod2luZG93KS50cmlnZ2VySGFuZGxlcihicmVha3BvaW50TmFtZSk7XG5cbiAgICAgIGlmIChicmVha3BvaW50TmFtZS5pbmRleE9mKCdNaW4nKSA9PT0gLTFcbiAgICAgICAgJiYgYnJlYWtwb2ludE5hbWUuaW5kZXhPZignTWF4JykgPT09IC0xKSB7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VySGFuZGxlcignbWVkaWFRdWVyeUNoYW5nZScsIGJyZWFrcG9pbnROYW1lKTtcbiAgICAgIH1cblxuICAgICAgJC5lYWNoKGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKE1FRElBX1FVRVJJRVNbdmFsdWVdKS5tYXRjaGVzKSB7XG4gICAgICAgICAgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMucHVzaChicmVha3BvaW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWVkaWEtcXVlcmllcy9tZWRpYS1xdWVyaWVzLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBWQUxVRVNfR1JJRCA9IHtcbiAgeHNNaW46IDAsXG4gIHhzTWF4OiA3NjcsXG4gIHNtTWluOiA3NjgsXG4gIHNtTWF4OiAxMDIzLFxuICBtZE1pbjogMTAyNCxcbiAgbWRNYXg6IDExOTksXG4gIGxnTWluOiAxMjAwXG59O1xuXG5leHBvcnQgY29uc3QgTUVESUFfUVVFUklFUyA9IHtcbiAgeHNNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNaW59cHgpYCxcbiAgeHM6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgeHNNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQueHNNYXh9cHgpYCxcbiAgc21NaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpYCxcbiAgc206IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIHNtTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWF4fXB4KWAsXG4gIG1kTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KWAsXG4gIG1kOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBtZE1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1heH1weClgLFxuICBsZ01pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgLFxuICBsZzogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5sZ01pbn1weClgXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvc2hhcmVkL3NoYXJlZC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vbWVudS5tb2JpbGUuY29tcG9uZW50JztcbmltcG9ydCBEZXNrdG9wIGZyb20gJy4vbWVudS5kZXNrdG9wLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgdGhpcy5fY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIF9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQod2luZG93KS5vbigneHNNYXgnLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlLCB0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzbU1pbicsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wLCB0aGlzKSk7XG4gIH1cblxuICBfcmVtb3ZlTWVkaWFRdWVyeUNhbGxiYWNrcygpIHtcbiAgICAkKHdpbmRvdykub2ZmKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUuYmluZCh0aGlzKSkpO1xuICAgICQod2luZG93KS5vZmYoJ3NtTWluJywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgX2NoZWNrQ3VycmVudEJyZWFrcG9pbnQoKSB7XG4gICAgaWYgKGluZm8gJiYgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzICYmIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcy5pbmRleE9mKCd4c01heCcpID4gLTEpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlZFRvRGVza3RvcCgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRGVza3RvcCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlZFRvTW9iaWxlKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb2JpbGUoKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21lbnUvbWVudS5jb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FkZEV2ZW50SGFuZGxlcnMoKTtcbiAgfTtcblxuICBkZXN0cm95KCkge1xuICB9O1xuXG4gIF9hZGRFdmVudEhhbmRsZXJzKCkge1xuICAgICQoJy5tZW51SWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21lbnUvbWVudS5tb2JpbGUuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBkZXN0cm95KCkge1xuICB9XG5cbiAgX29uTWVkaWFRdWVyeUNoYW5nZSgpIHtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWVudS9tZW51LmRlc2t0b3AuY29tcG9uZW50LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi9jdXJyZW5jaWVzLm1vYmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IERlc2t0b3AgZnJvbSAnLi9jdXJyZW5jaWVzLmRlc2t0b3AuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVuY2llc0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FkZE1lZGlhUXVlcnlDYWxsYmFja3MoKTtcbiAgICB0aGlzLl9jaGVja0N1cnJlbnRCcmVha3BvaW50KCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgX2FkZE1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJCh3aW5kb3cpLm9uKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUsIHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ3NtTWluJywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AsIHRoaXMpKTtcbiAgfVxuXG4gIF9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQod2luZG93KS5vZmYoJ3hzTWF4JywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb01vYmlsZS5iaW5kKHRoaXMpKSk7XG4gICAgJCh3aW5kb3cpLm9mZignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcC5iaW5kKHRoaXMpKSk7XG4gIH1cblxuICBfY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpIHtcbiAgICBpZiAoaW5mbyAmJiBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgJiYgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLmluZGV4T2YoJ3hzTWF4JykgPiAtMSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfb25DaGFuZ2VkVG9EZXNrdG9wKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEZXNrdG9wKCk7XG4gIH1cblxuICBfb25DaGFuZ2VkVG9Nb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vYmlsZSgpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY3VycmVuY2llcy9jdXJyZW5jaWVzLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdtb2JpbGUnKTtcbiAgfTtcblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUud2FybignZGVzdHJveSBtb2JpbGUnKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY3VycmVuY2llcy9jdXJyZW5jaWVzLm1vYmlsZS5jb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUud2FybignZGVza3RvcCcpO1xuICAgICQod2luZG93KS5vbignbWVkaWFRdWVyeUNoYW5nZScsICQucHJveHkodGhpcy5fb25NZWRpYVF1ZXJ5Q2hhbmdlLCB0aGlzKSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUud2FybignZGVzdHJveSBkZXNrdG9wJyk7XG4gIH1cblxuICBfb25NZWRpYVF1ZXJ5Q2hhbmdlKGUsIGRhdGEpIHtcbiAgICBjb25zb2xlLndhcm4oZGF0YSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5kZXNrdG9wLmNvbXBvbmVudC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=