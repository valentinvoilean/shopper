webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(4);
	
	var _app = __webpack_require__(5);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new _app2.default();
	app.init();

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(6);
	
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
	        if ($container instanceof $) {
	
	          if (deepScan) {
	            // initialize all modules from the jQuery DOM element
	            $container.find('[data-ss-init]').each(function () {
	              var className = $(this).data('ss-init');
	              _self.checkIfClassExistsOnDom($(this), className);
	            });
	          } else {
	            // initialize  the current element passed
	            $container.each(function () {
	              var className = $(this).data('ss-init');
	              if (className) {
	                _self.checkIfClassExistsOnDom($(this), className);
	              }
	            });
	          }
	        } else {
	          console.error('The parameter passed it is not a jQuery element!');
	        }
	      } else {
	        // if no param passed, all the modules from the DOM
	        // will be initialized depending on the data-ss-state value
	        $(document).ready(function () {
	          return _this.initByState('onReady');
	        });
	        $(window).on('load', function () {
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
	        var currentInstance = $(this).data('ss-instance');
	        info.instances[currentInstance].destroy();
	        $(this).removeAttr('data-ss-instance');
	        info.instances[currentInstance] = null;
	      };
	
	      if ($container) {
	        if ($container instanceof $) {
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
	        $(document).find('[data-ss-instance]').each(destroyInstance);
	      }
	    }
	  }, {
	    key: 'checkIfClassExistsOnDom',
	    value: function checkIfClassExistsOnDom($el, className) {
	      var classExists = false,
	          domClasses = this.classes.dom ? this.classes.dom : this.classes;
	
	      $.each(domClasses, function (index, value) {
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
	      var _self = this,
	          $components = void 0;
	
	      if (this.classes === _app.CLASSES) {
	        $.each(_app.CLASSES[state], function (index, value) {
	          new value();
	        });
	      }
	
	      if (state === 'onLoad') {
	        $components = $(document).find('[data-ss-state="' + state + '"]');
	      } else {
	        $components = $(document).find('[data-ss-init]:not([data-ss-state])');
	      }
	
	      $components.each(function () {
	        var className = $(this).data('ss-init');
	        _self.checkIfClassExistsOnDom($(this), className);
	      });
	    }
	  }]);
	
	  return AppComponent;
	}();
	
	exports.default = AppComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CLASSES = undefined;
	
	var _svgSprite = __webpack_require__(7);
	
	var _svgSprite2 = _interopRequireDefault(_svgSprite);
	
	var _mediaQueries = __webpack_require__(46);
	
	var _mediaQueries2 = _interopRequireDefault(_mediaQueries);
	
	var _menu = __webpack_require__(48);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _currencies = __webpack_require__(51);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	var _topHeaderMyAccount = __webpack_require__(54);
	
	var _topHeaderMyAccount2 = _interopRequireDefault(_topHeaderMyAccount);
	
	var _topHeaderWishList = __webpack_require__(56);
	
	var _topHeaderWishList2 = _interopRequireDefault(_topHeaderWishList);
	
	var _wishList = __webpack_require__(58);
	
	var _wishList2 = _interopRequireDefault(_wishList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CLASSES = exports.CLASSES = {
	  dom: { MenuComponent: _menu2.default, CurrenciesComponent: _currencies2.default, TopHeaderMyAccountComponent: _topHeaderMyAccount2.default, TopHeaderWishListComponent: _topHeaderWishList2.default },
	  onReady: { MediaQueriesComponent: _mediaQueries2.default, WishListComponent: _wishList2.default },
	  onLoad: { SVGSpriteComponent: _svgSprite2.default }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SVGSpriteComponent = function () {
	  function SVGSpriteComponent() {
	    _classCallCheck(this, SVGSpriteComponent);
	
	    var files = __webpack_require__(8);
	    files.keys().forEach(files);
	  }
	
	  _createClass(SVGSpriteComponent, [{
	    key: 'destroy',
	    value: function destroy() {
	      $('body').children('svg').remove();
	    }
	  }]);
	
	  return SVGSpriteComponent;
	}();
	
	exports.default = SVGSpriteComponent;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Twitter2.svg": 9,
		"./arrow.svg": 13,
		"./arrow2.svg": 14,
		"./bag.svg": 15,
		"./bag2.svg": 16,
		"./cart.svg": 17,
		"./close1.svg": 18,
		"./close2.svg": 19,
		"./commerce.svg": 20,
		"./favorite.svg": 21,
		"./favorite2.svg": 22,
		"./fb.svg": 23,
		"./fb2.svg": 24,
		"./google-plus.svg": 25,
		"./google-plus2.svg": 26,
		"./home.svg": 27,
		"./info.svg": 28,
		"./instagram.svg": 29,
		"./instagram2.svg": 30,
		"./linkedin.svg": 31,
		"./linkedin2.svg": 32,
		"./location.svg": 33,
		"./mail.svg": 34,
		"./mail2.svg": 35,
		"./phone1.svg": 36,
		"./phone2.svg": 37,
		"./search.svg": 38,
		"./twitter.svg": 39,
		"./user-1.svg": 40,
		"./user-2.svg": 41,
		"./wish-list-1.svg": 42,
		"./wish-list-2.svg": 43,
		"./youtube.svg": 44,
		"./youtube2.svg": 45
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
	webpackContext.id = 8;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 21 16\" id=\"Twitter2\" ><title>Twitter</title><path d=\"M18.19 4.394c.007.163.012.328.012.492 0 5.005-4.018 10.774-11.37 10.774-2.256 0-4.357-.625-6.125-1.7.313.035.63.053.953.053 1.873 0 3.595-.606 4.963-1.62C4.875 12.36 3.4 11.265 2.89 9.76c.244.045.495.07.75.07.366 0 .72-.046 1.054-.133C2.867 9.35 1.49 7.82 1.49 5.984v-.048c.54.283 1.155.454 1.81.473-1.072-.68-1.777-1.84-1.777-3.152 0-.695.196-1.346.54-1.905 1.97 2.292 4.915 3.8 8.235 3.958-.068-.277-.102-.565-.102-.863 0-2.09 1.788-3.787 3.995-3.787 1.15 0 2.187.46 2.917 1.196.91-.17 1.765-.484 2.54-.92-.302.885-.933 1.627-1.76 2.096.808-.09 1.58-.294 2.294-.596-.532.76-1.21 1.426-1.99 1.958z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "Twitter2");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(11);
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Sniffr = __webpack_require__(12);
	
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 108 198\" id=\"arrow\" ><path d=\"M101.883 197.402L.255 98.698 101.883 0l5.265 5.418-96.04 93.28 96.04 93.282\"/></symbol>";
	module.exports = sprite.add(image, "arrow");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 306 306\" id=\"arrow2\" ><path d=\"M94.35 0l-35.7 35.7L175.95 153 58.65 270.3l35.7 35.7 153-153\"/></symbol>";
	module.exports = sprite.add(image, "arrow2");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 377.582 377.582\" id=\"bag\" ><path d=\"M333.72 362.63L320.33 104.066c-.373-7.194-6.315-12.836-13.517-12.836H267.31V78.526C267.31 35.225 232.08 0 188.78 0c-43.3 0-78.523 35.226-78.523 78.525V91.23H70.75c-7.203 0-13.146 5.643-13.52 12.837L43.81 363.345c-.192 3.706 1.146 7.33 3.702 10.02 2.555 2.692 6.104 4.217 9.816 4.217h262.93c7.475 0 13.534-6.06 13.534-13.536 0-.48-.024-.952-.073-1.417zM129.54 146.02c-8.006 0-14.5-6.492-14.5-14.5s6.494-14.5 14.5-14.5c8.008 0 14.5 6.494 14.5 14.5s-6.492 14.5-14.5 14.5zm97.497-54.79h-76.51V78.526c0-21.095 17.16-38.255 38.253-38.255 21.096 0 38.257 17.16 38.257 38.255V91.23zm21.004 54.79c-8.006 0-14.5-6.492-14.5-14.5s6.494-14.5 14.5-14.5c8.008 0 14.5 6.494 14.5 14.5s-6.492 14.5-14.5 14.5z\" fill=\"#231F20\"/></symbol>";
	module.exports = sprite.add(image, "bag");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 395.025 395.025\" id=\"bag2\" ><path d=\"M357.507 380.982l-19.593-298.76c-.43-6.57-5.887-11.68-12.473-11.68h-54.69V62.5c0-34.462-28.037-62.5-62.5-62.5h-21.494c-34.462 0-62.5 28.038-62.5 62.5v8.04h-54.69c-6.586 0-12.042 5.11-12.473 11.683L37.45 381.71c-.227 3.448.986 6.837 3.35 9.36 2.364 2.525 5.666 3.955 9.124 3.955h295.18c6.902 0 12.5-5.596 12.5-12.5-.003-.52-.034-1.037-.097-1.543zM149.255 62.5c0-20.678 16.822-37.5 37.5-37.5h21.495c20.678 0 37.5 16.822 37.5 37.5v8.04h-96.495V62.5zM63.27 370.025L81.272 95.542h42.983v11.154c-8.895 4.56-15 13.818-15 24.482 0 15.164 12.336 27.5 27.5 27.5s27.5-12.336 27.5-27.5c0-10.664-6.105-19.922-15-24.482V95.542h96.495v11.154c-8.896 4.56-15 13.818-15 24.482 0 15.164 12.336 27.5 27.5 27.5s27.5-12.336 27.5-27.5c0-10.664-6.105-19.922-15-24.482V95.542h42.983l18.002 274.483H63.27z\"/></symbol>";
	module.exports = sprite.add(image, "bag2");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 48 48\" id=\"cart\" ><path d=\"M15.733 20.125c1.104 0 2-.896 2-2v-7.8C17.733 6.838 20.57 4 24.058 4c3.487 0 6.325 2.838 6.325 6.325v7.8c0 1.104.896 2 2 2s2-.896 2-2v-7.8C34.383 4.632 29.75 0 24.058 0c-5.692 0-10.324 4.632-10.324 10.325v7.8c0 1.104.895 2 2 2z\"/><path d=\"M47 15.63H36.383v2.495c0 2.206-1.794 4-4 4-2.205 0-4-1.794-4-4V15.63h-8.65v2.495c0 2.206-1.793 4-4 4s-4-1.794-4-4V15.63H1c-.552 0-.893.436-.762.972L7.235 45.1C7.658 46.702 9.343 48 11 48h26c1.658 0 3.342-1.3 3.767-2.9l6.996-28.498c.13-.537-.21-.97-.763-.97z\"/></symbol>";
	module.exports = sprite.add(image, "cart");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 455.992 455.992\" id=\"close1\" ><path d=\"M227.996 0C102.08 0 0 102.08 0 227.996 0 353.94 102.08 455.992 227.996 455.992c125.945 0 227.996-102.05 227.996-227.996C455.992 102.08 353.942 0 227.996 0zm0 425.593c-108.952 0-197.597-88.645-197.597-197.597S119.043 30.4 227.995 30.4s197.597 88.644 197.597 197.596-88.645 197.597-197.597 197.597z\"/><path d=\"M312.142 122.358l-83.538 83.568-74.965-83.568c-5.93-5.928-15.566-5.928-21.493 0-5.928 5.928-5.928 15.565 0 21.492l74.965 83.568-84.723 84.723c-5.93 5.93-5.93 15.596 0 21.493 5.927 5.928 15.564 5.928 21.49 0l83.57-83.538 74.964 83.538c5.897 5.928 15.565 5.928 21.462 0 5.928-5.898 5.928-15.565 0-21.492l-74.995-83.537 84.724-84.754c5.928-5.93 5.928-15.566 0-21.493-5.928-5.927-15.534-5.927-21.462 0z\"/></symbol>";
	module.exports = sprite.add(image, "close1");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 476.737 476.737\" id=\"close2\" ><path d=\"M238.37 0C106.725 0 0 106.726 0 238.37c0 131.674 106.726 238.368 238.37 238.368 131.674 0 238.368-106.694 238.368-238.37C476.738 106.727 370.043 0 238.368 0zm110.443 150.395l-88.578 88.61 78.407 87.338c6.198 6.198 6.198 16.304 0 22.47-6.166 6.198-16.273 6.198-22.438 0l-78.407-87.338-87.37 87.338c-6.198 6.198-16.273 6.198-22.47 0-6.198-6.166-6.198-16.273 0-22.47l88.578-88.578-78.376-87.37c-6.2-6.198-6.2-16.273 0-22.47s16.272-6.198 22.47 0l78.406 87.37 87.338-87.37c6.198-6.198 16.273-6.198 22.47 0 6.198 6.197 6.166 16.272-.03 22.47z\"/></symbol>";
	module.exports = sprite.add(image, "close2");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 30.511 30.511\" id=\"commerce\" ><path d=\"M26.818 19.037L30.425 8.24c.18-.518.044-.83-.102-1.036-.374-.527-1.143-.532-1.292-.532L8.647 6.668l-.544-2.58c-.147-.61-.58-1.19-1.456-1.19H.916c-.593 0-.916.277-.916.832v1.49c0 .537.322.677.938.677h4.837l3.702 15.717c-.588.623-.908 1.53-.908 2.378 0 1.864 1.483 3.582 3.38 3.582 1.79 0 3.13-1.677 3.35-2.677h7.21c.217 1 1.304 2.717 3.348 2.717 1.863 0 3.378-1.614 3.378-3.475 0-1.852-1.125-3.493-3.36-3.493-.928 0-2.03.5-2.542 1.25h-8.86c-.642-1-1.52-1.31-2.408-1.345l-.123-.655h13.48c1.015 0 1.215-.37 1.395-.86zm-.935 3.79c.7 0 1.27.57 1.27 1.27s-.57 1.27-1.27 1.27-1.27-.567-1.27-1.27c0-.7.57-1.27 1.27-1.27zm-12.678 1.27c0 .71-.576 1.287-1.283 1.287-.71-.002-1.286-.577-1.286-1.286s.577-1.286 1.286-1.286c.707 0 1.283.577 1.283 1.286z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "commerce");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 510 510\" id=\"favorite\" ><path d=\"M255 402.212l157.59 95.038-41.693-179.24L510 197.473l-183.37-15.734L255 12.75l-71.63 168.988L0 197.472l139.103 120.54L97.41 497.25\"/></symbol>";
	module.exports = sprite.add(image, "favorite");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 510 510\" id=\"favorite2\" ><path d=\"M510 197.472l-183.37-15.734L255 12.75l-71.63 168.988L0 197.472l139.103 120.54L97.41 497.25 255 402.186l157.59 95.064-41.692-179.24L510 197.473zM255 354.348l-95.957 57.886 25.398-109.166-84.735-73.39 111.69-9.587L255 117.173l43.605 102.918 111.69 9.588-84.712 73.39 25.398 109.165L255 354.348z\"/></symbol>";
	module.exports = sprite.add(image, "favorite2");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"fb\" ><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM31 25.7h-4.04v14.396h-5.984V25.7H18.13v-5.088h2.846v-3.29c0-2.358 1.12-6.04 6.04-6.04l4.435.016v4.94h-3.218c-.524 0-1.27.26-1.27 1.385v2.99h4.56L31 25.7z\"/></symbol>";
	module.exports = sprite.add(image, "fb");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 9 16\" id=\"fb2\" ><title>Facebook</title><path d=\"M7.827 8.166H5.61v7.494H2.32V8.166H.76v-2.65h1.562V3.805C2.322 2.577 2.937.66 5.64.66l2.435.01v2.57H6.307c-.288 0-.697.136-.697.72V5.52h2.505l-.288 2.648z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "fb2");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"google-plus\" ><path d=\"M21.5 28.94c-.16-.107-.326-.223-.5-.34-.502-.154-1.036-.234-1.583-.24h-.066c-2.513 0-4.717 1.52-4.717 3.256 0 1.89 1.89 3.367 4.3 3.367 3.178 0 4.79-1.098 4.79-3.258 0-.204-.025-.416-.076-.63-.215-.837-.984-1.36-2.147-2.155zM19.72 22.352c.602 0 1.11-.237 1.502-.687.616-.702.89-1.854.727-3.077-.286-2.186-1.85-4.006-3.48-4.053l-.065-.002c-.577 0-1.092.238-1.483.686-.607.692-.864 1.79-.705 3.01.286 2.185 1.882 4.072 3.48 4.122h.022z\"/><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zm-2.862 36.915c-.938.27-1.953.408-3.018.408-1.186 0-2.326-.136-3.39-.405-2.056-.52-3.576-1.503-4.286-2.77-.306-.55-.46-1.133-.46-1.738 0-.623.148-1.255.442-1.88 1.127-2.403 4.098-4.02 7.39-4.02h.093c-.267-.47-.396-.958-.396-1.47 0-.256.033-.516.1-.78-3.45-.08-6.034-2.607-6.034-5.94 0-2.353 1.88-4.646 4.57-5.572.806-.278 1.627-.42 2.434-.42h7.382c.25 0 .474.163.552.402.078.238-.008.5-.21.647l-1.652 1.195c-.1.07-.218.108-.34.108h-.592c.763.915 1.21 2.22 1.21 3.685 0 1.617-.818 3.146-2.307 4.31-1.15.897-1.195 1.144-1.195 1.655.014.28.815 1.198 1.7 1.823 2.058 1.456 2.824 2.885 2.824 5.27 0 2.49-1.892 4.642-4.818 5.492zm16.67-12.662c0 .32-.26.58-.58.58H33.86v4.197c0 .32-.26.58-.578.58h-1.195c-.322 0-.582-.26-.582-.58v-4.197h-4.192c-.32 0-.58-.258-.58-.58V23.06c0-.32.26-.582.58-.582h4.192v-4.193c0-.32.26-.58.582-.58h1.195c.317 0 .578.26.578.58v4.193h4.194c.32 0 .58.26.58.58v1.195z\"/></symbol>";
	module.exports = sprite.add(image, "google-plus");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 18 16\" id=\"google-plus2\" ><title>google+</title><path d=\"M7.12 10.63c-.103-.065-.208-.135-.317-.205-.32-.092-.657-.14-1.003-.145h-.042c-1.59 0-2.987.913-2.987 1.955 0 1.134 1.197 2.02 2.723 2.02 2.013 0 3.033-.658 3.033-1.954 0-.122-.016-.25-.048-.377-.136-.503-.623-.817-1.36-1.294zm.293 4.785c-.594.163-1.237.245-1.91.245-.752 0-1.474-.082-2.147-.243-1.302-.312-2.265-.902-2.714-1.663-.194-.33-.292-.68-.292-1.042 0-.374.094-.754.28-1.13.714-1.44 2.595-2.41 4.68-2.41h.058c-.17-.283-.25-.576-.25-.884 0-.153.02-.31.064-.468-2.186-.047-3.82-1.564-3.82-3.564 0-1.412 1.19-2.788 2.893-3.344.51-.167 1.03-.252 1.54-.252h4.674c.158 0 .3.098.35.24.048.144-.006.3-.135.39l-1.045.717c-.063.042-.138.064-.216.064H9.05c.483.55.766 1.334.766 2.213 0 .97-.518 1.888-1.46 2.587-.73.538-.757.686-.757.993.008.168.515.72 1.074 1.094 1.304.873 1.79 1.73 1.79 3.162-.002 1.494-1.2 2.785-3.05 3.295zm10.555-7.6c0 .193-.166.35-.368.35h-2.656v2.518c0 .192-.165.348-.366.348h-.756c-.204 0-.37-.155-.37-.347v-2.52H10.8c-.203 0-.368-.153-.368-.347V7.1c0-.192.165-.35.367-.35h2.653V4.236c0-.193.165-.348.37-.348h.755c.2 0 .366.155.366.348V6.75H17.6c.202 0 .367.157.367.35v.716zM5.99 6.676h.002c.38 0 .702-.142.95-.412.39-.42.564-1.112.46-1.846-.18-1.312-1.17-2.404-2.202-2.433h-.04c-.366 0-.692.142-.94.41-.384.417-.547 1.076-.446 1.808.18 1.31 1.192 2.444 2.203 2.474h.014z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "google-plus2");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 27.02 27.02\" id=\"home\" ><g fill=\"#030104\"><path d=\"M3.674 24.876s-.024.604.566.604l6.81-.008.01-5.58s-.095-.92.798-.92h2.826c1.056 0 .99.92.99.92l-.01 5.562h6.666c.75 0 .715-.752.715-.752v-10.29L13.65 6.056l-9.976 8.358v10.463z\"/><path d=\"M0 13.635s.847 1.56 2.694 0l11.038-9.338 10.35 9.28c2.137 1.542 2.938 0 2.938 0L13.732 1.54 0 13.635zM23.83 4.275h-2.662l.01 3.228 2.652 2.25\"/></g></symbol>";
	module.exports = sprite.add(image, "home");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 543.906 543.906\" id=\"info\" ><path d=\"M271.953 0C121.76 0 0 121.76 0 271.953s121.76 271.953 271.953 271.953 271.953-121.76 271.953-271.953S422.148 0 271.953 0zm45.04 76.316c1.056-.05 2.14-.06 3.232 0 14.724-.484 27.533 10.622 29.578 24.987 6.576 27.58-22.72 55.228-49.63 44.192-32.14-14.92-15.95-67.586 16.82-69.18zM303.74 196.318c20.874-1.327 24.518 22.964 18.013 47.592-12.695 56.583-32.455 111.403-43.175 168.442 5.178 22.523 33.575-3.312 45.72-11.558 10.33-8.213 12.125 2.083 15.638 10.71-25.776 18.058-51.687 36.447-80.395 50.99-26.97 16.362-49.048-9.07-42.32-37.393 11.128-52.84 25.776-104.88 37.736-157.563 3.737-28.468-33.728.51-44.872 7.136-8.985 11.292-13.25 3.05-16.997-7.136 29.87-21.816 60.325-48.593 93.313-65.95 6.738-3.35 12.52-4.965 17.34-5.27z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "info");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"instagram\" ><path d=\"M24.825 29.796c2.74 0 4.972-2.23 4.972-4.97 0-1.082-.354-2.08-.94-2.897-.903-1.253-2.37-2.074-4.03-2.074-1.658 0-3.125.82-4.03 2.072-.588.816-.94 1.815-.94 2.897-.003 2.74 2.228 4.97 4.968 4.97zM35.678 18.746V13.96l-.623.002-4.164.013.017 4.787\"/><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zm14.12 21.93v11.56c0 3.01-2.45 5.457-5.458 5.457H16.164c-3.01 0-5.457-2.447-5.457-5.458V16.164c0-3.01 2.447-5.457 5.457-5.457h17.323c3.01 0 5.458 2.447 5.458 5.457v5.764z\"/><path d=\"M32.55 24.826c0 4.257-3.465 7.723-7.724 7.723-4.26 0-7.722-3.467-7.722-7.724 0-1.024.204-2.003.568-2.897h-4.215v11.56c0 1.493 1.213 2.703 2.706 2.703h17.323c1.49 0 2.706-1.21 2.706-2.704V21.93h-4.217c.367.893.574 1.872.574 2.896z\"/></symbol>";
	module.exports = sprite.add(image, "instagram");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 16 16\" id=\"instagram2\" ><title>Shape</title><path d=\"M8.01 10.8c1.536 0 2.787-1.185 2.787-2.64 0-.576-.198-1.106-.527-1.54-.506-.665-1.328-1.1-2.258-1.1-.93 0-1.75.435-2.26 1.1-.328.433-.525.964-.525 1.54-.002 1.455 1.248 2.64 2.784 2.64zm6.083-5.87V2.387h-.35l-2.333.008.01 2.543 2.673-.008zm1.83 1.69v6.14c0 1.6-1.37 2.9-3.057 2.9h-9.71C1.47 15.66.1 14.36.1 12.76v-9.2c0-1.6 1.37-2.9 3.057-2.9h9.708c1.687 0 3.06 1.3 3.06 2.9v3.06zM12.34 8.16c0 2.26-1.942 4.1-4.33 4.1-2.385 0-4.326-1.84-4.326-4.1 0-.545.114-1.065.318-1.54H1.64v6.14c0 .794.68 1.437 1.517 1.437h9.707c.836 0 1.517-.643 1.517-1.436V6.62H12.02c.205.475.32.995.32 1.54z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "instagram2");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"linkedin\" ><path d=\"M29.35 21.298c-2.125 0-3.074 1.168-3.605 1.988v-1.704h-4.002c.052 1.128 0 12.04 0 12.04h4.002v-6.726c0-.36.023-.72.13-.977.29-.72.95-1.466 2.055-1.466 1.448 0 2.027 1.104 2.027 2.724v6.442h4.002v-6.905c-.002-3.696-1.977-5.417-4.61-5.417zm-3.608 2.03h-.025c.008-.014.02-.027.025-.04v.04zM15.523 21.582h4.002v12.04h-4.002z\"/><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM37.99 36.055c0 1.056-.875 1.91-1.958 1.91h-22.58c-1.08 0-1.958-.854-1.958-1.91V13.21c0-1.054.877-1.91 1.957-1.91h22.582c1.082 0 1.96.857 1.96 1.91v22.845z\"/><path d=\"M17.55 15.777c-1.367 0-2.263.898-2.263 2.08 0 1.155.87 2.08 2.21 2.08h.027c1.396 0 2.265-.925 2.265-2.08-.028-1.18-.87-2.08-2.24-2.08z\"/></symbol>";
	module.exports = sprite.add(image, "linkedin");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 17 16\" id=\"linkedin2\" ><title>linkedin</title><path d=\"M11.46 6.284c-1.26 0-1.824.657-2.14 1.118v-.958H6.947c.03.634 0 6.773 0 6.773H9.32V9.433c0-.202.015-.405.08-.55.17-.405.562-.824 1.218-.824.86 0 1.203.62 1.203 1.532v3.624h2.376V9.33c0-2.078-1.172-3.046-2.735-3.046zM9.32 7.426h-.015c.004-.008.012-.015.015-.023v.023zm-6.066-.982H5.63v6.773H3.254V6.444zm1.204-3.266c-.812 0-1.344.505-1.344 1.17 0 .65.516 1.17 1.313 1.17h.015c.83 0 1.344-.52 1.344-1.17-.016-.664-.515-1.17-1.328-1.17zm12.13 11.407c0 .595-.52 1.075-1.16 1.075H2.024c-.64 0-1.162-.48-1.162-1.075V1.735c0-.594.52-1.075 1.162-1.075h13.402c.642 0 1.162.482 1.162 1.074v12.85z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "linkedin2");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 466.583 466.582\" id=\"location\" ><path d=\"M233.292 0c-85.1 0-154.334 69.234-154.334 154.333 0 34.275 21.887 90.155 66.908 170.834 31.846 57.063 63.168 104.643 64.484 106.64l22.942 34.775 22.94-34.774c1.318-1.998 32.642-49.577 64.484-106.64 45.023-80.68 66.908-136.56 66.908-170.834C387.624 69.234 318.39 0 233.292 0zm0 233.29c-44.182 0-80-35.816-80-80s35.818-80 80-80 80 35.818 80 80-35.82 80-80 80z\"/></symbol>";
	module.exports = sprite.add(image, "location");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 79.536 79.536\" id=\"mail\" ><path d=\"M39.773 1.31L0 31.004v47.222h79.536V31.004L39.773 1.31zM28.77 22.5c1.167-2.134 2.775-3.74 4.815-4.806 2.035-1.075 4.357-1.616 6.983-1.616 2.214 0 4.19.435 5.92 1.292 1.73.87 3.046 2.094 3.968 3.687.9 1.595 1.367 3.334 1.367 5.217 0 2.247-.694 4.28-2.082 6.097-1.74 2.293-3.96 3.437-6.68 3.437-.73 0-1.278-.122-1.653-.38-.365-.262-.62-.632-.743-1.13-1.022 1.013-2.23 1.52-3.59 1.52-1.464 0-2.678-.506-3.642-1.508-.966-1.013-1.447-2.362-1.447-4.032 0-2.084.578-3.966 1.743-5.672 1.416-2.084 3.218-3.13 5.424-3.13 1.57 0 2.73.6 3.475 1.805l.33-1.467h3.5l-1.997 9.48c-.125.605-.187.985-.187 1.162 0 .228.052.38.15.497.098.11.222.165.356.165.435 0 .978-.248 1.645-.77.9-.662 1.627-1.573 2.18-2.694.555-1.13.84-2.3.84-3.508 0-2.165-.782-3.977-2.352-5.445-1.573-1.45-3.77-2.185-6.578-2.185-2.393 0-4.417.487-6.077 1.468-1.66.966-2.913 2.343-3.765 4.114-.84 1.76-1.258 3.607-1.258 5.52 0 1.856.48 3.552 1.41 5.074.946 1.534 2.26 2.642 3.957 3.346 1.696.697 3.643 1.046 5.828 1.046 2.097 0 3.91-.293 5.432-.88 1.522-.588 2.74-1.458 3.666-2.642h2.807c-.88 1.792-2.227 3.192-4.05 4.215-2.09 1.163-4.64 1.74-7.643 1.74-2.918 0-5.426-.487-7.542-1.468-2.12-.986-3.69-2.434-4.73-4.35-1.028-1.918-1.535-4.008-1.535-6.268.002-2.478.58-4.79 1.755-6.93zM2.804 31.94l29.344 19.68L2.804 74.334V31.94zm2.23 43.904l34.74-26.885L74.5 75.843H5.032zm71.695-1.51L47.39 51.62l29.34-19.68v42.393zM41.204 24.66c.466.532.7 1.296.7 2.293 0 .89-.175 1.856-.514 2.88-.333 1.035-.742 1.825-1.208 2.36-.318.375-.658.652-.992.826-.44.248-.906.37-1.41.37-.674.005-1.23-.265-1.69-.795-.45-.53-.674-1.346-.674-2.465 0-.84.158-1.805.487-2.89.33-1.087.81-1.915 1.453-2.508.647-.588 1.346-.88 2.1-.88.706.004 1.293.273 1.75.81z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "mail");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 14 14\" id=\"mail2\" ><g fill=\"#030104\"><path d=\"M7 9L5.268 7.484.316 11.73c.18.166.423.27.69.27h11.987c.267 0 .51-.104.688-.27L8.733 7.483 7 9z\"/><path d=\"M13.684 2.27c-.18-.167-.422-.27-.69-.27H1.006c-.267 0-.51.104-.69.273L7 8l6.684-5.73zM0 2.878v8.308L4.833 7.08M9.167 7.08L14 11.185v-8.31\"/></g></symbol>";
	module.exports = sprite.add(image, "mail2");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 51.413 51.413\" id=\"phone1\" ><g fill=\"#010002\"><path d=\"M25.99 12.274c8.662.085 14.09-.454 14.822 9.148h10.564c0-14.875-12.973-16.88-25.662-16.88-12.69 0-25.662 2.005-25.662 16.88h10.482c.81-9.785 6.864-9.232 15.455-9.148zM5.29 26.204c2.574 0 4.715.154 5.19-2.377.065-.344.102-.734.102-1.185H0c0 3.765 2.37 3.562 5.29 3.562zM40.88 22.642h-.1c0 .454.04.845.113 1.185.502 2.334 2.64 2.19 5.204 2.19 2.936 0 5.316.192 5.316-3.375H40.88z\"/><path d=\"M35.72 20.078v-1.496c0-.67-.772-.71-1.724-.71H32.44c-.95 0-1.72.04-1.72.71v2.29h-11v-2.29c0-.67-.772-.71-1.723-.71H16.44c-.95 0-1.72.04-1.72.71v2.802c-2.507 2.604-10.707 13.69-11.005 15.03l.004 8.956c0 .827.672 1.5 1.5 1.5h40c.826 0 1.5-.673 1.5-1.5v-9c-.296-1.303-8.494-12.383-11-14.987v-1.305zM19.176 37.62c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458 1.458.652 1.458 1.458-.653 1.458-1.458 1.458zm0-5c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458 1.458.652 1.458 1.458-.653 1.458-1.458 1.458zm0-5c-.805 0-1.458-.65-1.458-1.457 0-.805.652-1.458 1.457-1.458s1.458.653 1.458 1.458c0 .806-.653 1.458-1.458 1.458zm6 10c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458c.806 0 1.458.652 1.458 1.458s-.652 1.458-1.458 1.458zm0-5c-.805 0-1.458-.652-1.458-1.458s.652-1.458 1.457-1.458c.806 0 1.458.652 1.458 1.458s-.652 1.458-1.458 1.458zm0-5c-.805 0-1.458-.65-1.458-1.457 0-.805.652-1.458 1.457-1.458.806 0 1.458.653 1.458 1.458 0 .806-.652 1.458-1.458 1.458zm6 10c-.806 0-1.458-.652-1.458-1.458s.65-1.458 1.457-1.458 1.458.652 1.458 1.458-.652 1.458-1.458 1.458zm0-5c-.806 0-1.458-.652-1.458-1.458s.65-1.458 1.457-1.458 1.458.652 1.458 1.458-.652 1.458-1.458 1.458zm0-5c-.806 0-1.458-.65-1.458-1.457 0-.805.65-1.458 1.457-1.458s1.458.653 1.458 1.458c0 .806-.652 1.458-1.458 1.458z\"/></g></symbol>";
	module.exports = sprite.add(image, "phone1");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 578.106 578.106\" id=\"phone2\" ><path d=\"M577.83 456.128c1.225 9.385-1.635 17.545-8.568 24.48l-81.396 80.78c-3.672 4.08-8.465 7.552-14.38 10.405-5.917 2.857-11.73 4.693-17.44 5.508-.408 0-1.635.106-3.676.31-2.037.203-4.69.307-7.953.307-7.754 0-20.3-1.326-37.64-3.98s-38.556-9.18-63.646-19.583c-25.095-10.404-53.552-26.012-85.375-46.818-31.823-20.805-65.688-49.367-101.592-85.68-28.56-28.152-52.224-55.08-70.992-80.783-18.767-25.705-33.863-49.47-45.287-71.3-11.425-21.827-19.993-41.615-25.705-59.363S4.59 177.362 2.55 164.51-.306 141.56.102 134.216c.408-7.344.612-11.424.612-12.24.816-5.712 2.652-11.526 5.508-17.442s6.324-10.71 10.404-14.382L98.022 8.756c5.712-5.712 12.24-8.568 19.584-8.568 5.304 0 9.996 1.53 14.076 4.59s7.548 6.834 10.404 11.322l65.484 124.236c3.672 6.528 4.692 13.668 3.06 21.42-1.632 7.752-5.1 14.28-10.404 19.584l-29.988 29.988c-.816.816-1.53 2.142-2.142 3.978s-.918 3.366-.918 4.59c1.632 8.568 5.304 18.36 11.016 29.376 4.896 9.792 12.444 21.726 22.644 35.802s24.684 30.293 43.452 48.653c18.36 18.77 34.68 33.354 48.96 43.76 14.277 10.4 26.215 18.053 35.803 22.95 9.588 4.895 16.932 7.853 22.03 8.87l7.65 1.53c.815 0 2.144-.306 3.978-.917 1.837-.613 3.163-1.326 3.98-2.143l34.883-35.496c7.348-6.526 15.912-9.79 25.705-9.79 6.938 0 12.443 1.223 16.523 3.672h.612l118.115 69.768c8.57 5.308 13.67 12.038 15.303 20.198z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "phone2");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 488.139 488.139\" id=\"search\" ><path d=\"M290.513.004C181.378.004 92.916 88.466 92.916 197.6c0 46.967 16.477 90.043 43.836 124.03L6.156 452.196c-8.208 8.238-8.208 21.553 0 29.76 8.208 8.24 21.553 8.24 29.76 0l130.597-130.565c33.926 27.33 77.032 43.807 124.03 43.807 109.134 0 197.597-88.462 197.597-197.597S399.616.004 290.513.004zm0 364.793c-92.232 0-167.197-74.996-167.197-167.197S198.34 30.403 290.513 30.403 457.71 105.4 457.71 197.6s-74.996 167.197-167.197 167.197z\" fill=\"#010002\"/></symbol>";
	module.exports = sprite.add(image, "search");

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 49.652 49.652\" id=\"twitter\" ><path d=\"M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM35.9 19.144c.012.246.018.494.018.742 0 7.55-5.746 16.255-16.26 16.255-3.226 0-6.23-.942-8.758-2.564.447.053.902.08 1.363.08 2.678 0 5.14-.914 7.097-2.446-2.5-.046-4.61-1.698-5.338-3.97.348.067.707.104 1.074.104.52 0 1.027-.068 1.506-.2-2.614-.523-4.583-2.832-4.583-5.602v-.072c.77.427 1.65.685 2.587.714-1.532-1.023-2.54-2.773-2.54-4.755 0-1.05.28-2.03.772-2.875 2.816 3.458 7.028 5.732 11.776 5.972-.098-.42-.147-.854-.147-1.303 0-3.155 2.557-5.714 5.712-5.714 1.644 0 3.127.694 4.17 1.804 1.304-.256 2.524-.73 3.63-1.387-.43 1.335-1.332 2.454-2.515 3.162 1.157-.14 2.26-.445 3.282-.9-.763 1.144-1.732 2.15-2.85 2.954z\"/></symbol>";
	module.exports = sprite.add(image, "twitter");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 22 20\" id=\"user-1\" ><path d=\"M21 10c0-5.514-4.486-10-10-10S1 4.486 1 10c0 2.912 1.252 5.537 3.246 7.367l-.01.008.325.273c.023.018.046.033.067.05.172.143.35.28.533.41.057.043.116.085.176.127.195.133.394.26.597.38l.134.078c.223.127.45.246.684.356l.054.02c.76.354 1.57.614 2.418.767l.068.012c.263.044.53.08.8.105l.097.008c.27.022.54.036.815.036.272 0 .54-.015.808-.037l.1-.007c.27-.025.533-.06.793-.105l.07-.01c.835-.15 1.634-.404 2.384-.748l.083-.038c.224-.106.444-.22.66-.34l.158-.092c.196-.116.388-.236.575-.364l.2-.143c.16-.115.316-.234.47-.358.032-.028.07-.052.102-.08l.333-.277-.01-.01C19.735 15.564 21 12.928 21 10zM1.727 10C1.727 4.887 5.887.727 11 .727c5.113 0 9.273 4.16 9.273 9.273 0 2.755-1.21 5.232-3.124 6.932-.108-.074-.216-.14-.326-.195l-3.08-1.54c-.276-.138-.447-.416-.447-.724v-1.076c.07-.088.146-.187.224-.297.4-.563.72-1.19.95-1.863.463-.218.76-.677.76-1.196V8.754c0-.315-.115-.62-.322-.86v-1.7c.018-.19.085-1.254-.686-2.133-.67-.764-1.755-1.15-3.224-1.15-1.47 0-2.554.386-3.224 1.15-.77.88-.704 1.945-.685 2.133V7.89c-.207.24-.323.547-.323.862v1.29c0 .4.18.773.488 1.025.294 1.154.9 2.027 1.124 2.323v1.053c0 .296-.16.57-.423.712l-2.875 1.568c-.092.05-.183.108-.274.173-1.888-1.7-3.082-4.16-3.082-6.896zm14.713 7.503c-.128.092-.257.18-.388.267-.06.04-.12.078-.182.117-.172.106-.346.207-.525.3l-.118.062c-.41.21-.833.39-1.268.535l-.05.015c-.227.077-.46.144-.69.202h-.003c-.236.06-.474.107-.714.147h-.02c-.226.038-.453.065-.682.085l-.12.01c-.226.016-.453.027-.68.027-.23 0-.46-.012-.69-.03-.04-.002-.08-.004-.12-.008-.23-.02-.46-.047-.686-.084-.01 0-.02-.003-.03-.005-.48-.08-.954-.198-1.415-.353l-.044-.015c-.23-.077-.455-.164-.677-.26h-.006c-.21-.092-.416-.192-.62-.298-.026-.016-.053-.03-.08-.043-.185-.1-.367-.206-.546-.318l-.16-.103c-.165-.108-.327-.22-.486-.34-.016-.01-.032-.025-.048-.037l.035-.02 2.875-1.567c.494-.27.802-.787.802-1.35v-1.31l-.084-.1c-.008-.01-.795-.967-1.092-2.262L7.9 10.63l-.125-.08c-.175-.113-.28-.302-.28-.506v-1.29c0-.17.072-.326.203-.444l.12-.108V6.172l-.003-.048c0-.008-.108-.883.508-1.585.526-.6 1.427-.905 2.678-.905 1.246 0 2.144.302 2.67.897.617.695.516 1.586.515 1.593V8.2l.12.108c.13.117.2.275.2.444v1.29c0 .26-.175.494-.43.572l-.18.056-.057.18c-.215.666-.52 1.282-.908 1.83-.095.134-.188.253-.267.345l-.09.103v1.345c0 .586.327 1.113.85 1.375l3.08 1.54.06.03c-.04.03-.08.056-.12.085z\"/></symbol>";
	module.exports = sprite.add(image, "user-1");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 22 20\" id=\"user-2\" ><path d=\"M11.17.002C5.65-.093 1.096 4.307 1 9.828c-.052 3.13 1.343 5.945 3.566 7.816.145-.127.3-.243.474-.337l2.984-1.628c.39-.214.635-.624.635-1.07v-1.223s-.876-1.047-1.21-2.503c-.278-.18-.463-.49-.463-.84v-1.34c0-.294.13-.557.334-.74V6.028S6.923 3.02 11 3.02c4.077 0 3.68 3.01 3.68 3.01v1.933c.203.184.333.447.333.74v1.34c0 .45-.302.828-.71.954-.23.71-.56 1.386-.995 2-.11.156-.213.288-.302.39v1.254c0 .462.26.884.673 1.09l3.194 1.598c.192.096.365.217.525.352 2.154-1.797 3.546-4.483 3.598-7.51C21.093 4.65 16.693.097 11.17.003z\"/></symbol>";
	module.exports = sprite.add(image, "user-2");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 51.997 51.997\" id=\"wish-list-1\" ><path d=\"M51.91 16.242c-.758-8.354-6.67-14.415-14.07-14.415-4.93 0-9.445 2.653-11.985 6.905-2.517-4.307-6.846-6.906-11.697-6.906-7.4 0-13.313 6.06-14.07 14.415-.06.37-.307 2.312.44 5.48 1.08 4.567 3.57 8.722 7.2 12.012l18.115 16.44L44.27 33.73c3.63-3.29 6.12-7.444 7.198-12.013.748-3.167.502-5.11.443-5.478zm-2.39 5.02c-.983 4.17-3.264 7.972-6.59 10.984L25.856 47.48 9.072 32.25c-3.33-3.018-5.61-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.7l.015-.102c.65-7.32 5.73-12.632 12.083-12.632 4.687 0 8.813 2.88 10.77 7.515l.922 2.184.92-2.183c1.928-4.563 6.272-7.513 11.07-7.513 6.35 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z\"/></symbol>";
	module.exports = sprite.add(image, "wish-list-1");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 51.997 51.997\" id=\"wish-list-2\" ><path d=\"M51.91 16.242c-.758-8.354-6.67-14.415-14.07-14.415-4.93 0-9.445 2.653-11.985 6.905-2.517-4.307-6.846-6.906-11.697-6.906-7.4 0-13.313 6.06-14.07 14.415-.06.37-.307 2.312.44 5.48 1.08 4.567 3.57 8.722 7.2 12.012l18.115 16.44L44.27 33.73c3.63-3.29 6.12-7.444 7.198-12.013.748-3.167.502-5.11.443-5.478z\"/></symbol>";
	module.exports = sprite.add(image, "wish-list-2");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 97.75 97.75\" id=\"youtube\" ><path d=\"M25.676 52.482h3.875v20.973h3.667V52.482h3.947v-3.435H25.676M56.674 55.046c-1.212 0-2.343.662-3.406 1.972v-7.972h-3.295v24.41h3.295v-1.763c1.103 1.36 2.233 2.013 3.406 2.013 1.31 0 2.193-.69 2.633-2.044.22-.77.334-1.982.334-3.665v-7.242c0-1.722-.112-2.924-.333-3.655-.44-1.364-1.323-2.054-2.633-2.054zm-.33 13.21c0 1.643-.482 2.453-1.434 2.453-.54 0-1.092-.26-1.643-.812V58.814c.55-.545 1.102-.803 1.643-.803.95 0 1.434.843 1.434 2.483v7.762zM43.824 69.167c-.73 1.033-1.422 1.542-2.084 1.542-.44 0-.69-.26-.77-.772-.03-.106-.03-.508-.03-1.28v-13.39h-3.297v14.38c0 1.284.11 2.152.29 2.704.332.922 1.064 1.354 2.124 1.354 1.213 0 2.457-.732 3.767-2.234v1.984h3.298V55.268h-3.298v13.9zM46.653 38.466c1.073 0 1.588-.85 1.588-2.55v-7.732c0-1.7-.514-2.548-1.587-2.548-1.074 0-1.59.848-1.59 2.548v7.73c0 1.702.516 2.552 1.59 2.552z\"/><path d=\"M48.875 0C21.882 0 0 21.882 0 48.875S21.882 97.75 48.875 97.75 97.75 75.868 97.75 48.875 75.868 0 48.875 0zm5.436 22.86h3.322v13.532c0 .78 0 1.186.04 1.295.073.516.335.78.78.78.667 0 1.366-.516 2.105-1.56V22.86h3.33v18.38h-3.33v-2.005c-1.326 1.52-2.59 2.257-3.805 2.257-1.072 0-1.812-.435-2.146-1.365-.184-.557-.295-1.436-.295-2.733V22.86zm-12.577 5.993c0-1.965.334-3.4 1.042-4.33.92-1.257 2.218-1.885 3.878-1.885 1.668 0 2.964.628 3.885 1.885.698.928 1.032 2.365 1.032 4.33v6.436c0 1.953-.334 3.402-1.032 4.32-.92 1.255-2.217 1.882-3.885 1.882-1.66 0-2.957-.627-3.878-1.88-.708-.92-1.042-2.37-1.042-4.323v-6.437zm-8.906-12.277l2.622 9.685 2.518-9.684h3.735L37.26 31.25v9.99h-3.692v-9.99c-.335-1.77-1.074-4.362-2.26-7.802-.777-2.29-1.588-4.585-2.366-6.872h3.885zm42.36 58.485c-.67 2.9-3.04 5.04-5.895 5.36-6.763.754-13.604.758-20.42.754-6.813.004-13.658 0-20.42-.755-2.854-.32-5.226-2.46-5.892-5.36-.95-4.128-.95-8.637-.95-12.89s.01-8.76.96-12.89c.668-2.9 3.038-5.04 5.893-5.357 6.762-.755 13.606-.76 20.42-.755 6.814-.004 13.658 0 20.42.755 2.855.32 5.227 2.458 5.896 5.358.947 4.13.94 8.64.94 12.89s-.003 8.762-.954 12.89z\"/><path d=\"M67.17 55.046c-1.686 0-2.995.62-3.947 1.864-.7.92-1.018 2.342-1.018 4.285v6.37c0 1.934.357 3.366 1.06 4.277.95 1.242 2.263 1.863 3.987 1.863 1.72 0 3.072-.65 3.984-1.972.4-.584.66-1.245.77-1.975.03-.33.07-1.06.07-2.124v-.48h-3.36c0 1.32-.044 2.054-.073 2.233-.188.88-.662 1.32-1.473 1.32-1.132 0-1.686-.84-1.686-2.52V64.96h6.592v-3.767c0-1.943-.33-3.365-1.02-4.285-.92-1.242-2.232-1.862-3.886-1.862zm1.612 7.172h-3.296v-1.683c0-1.682.553-2.523 1.654-2.523 1.09 0 1.642.842 1.642 2.523v1.683z\"/></symbol>";
	module.exports = sprite.add(image, "youtube");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 14 16\" id=\"youtube2\" ><title>Youtube</title><path d=\"M1.584 8.997h.95v4.87h.898v-4.87h.966V8.2H1.584v.797zm7.594.596c-.297 0-.574.154-.834.458V8.2h-.808v5.667h.808v-.41c.27.317.547.47.834.47.32 0 .537-.16.645-.476.054-.178.082-.46.082-.85v-1.682c0-.4-.028-.678-.082-.848-.108-.317-.324-.477-.645-.477zm-.08 3.067c0 .382-.12.57-.352.57-.133 0-.268-.06-.403-.188v-2.574c.135-.127.27-.187.403-.187.233 0 .35.197.35.578v1.802zm-3.068.212c-.18.24-.348.358-.51.358-.108 0-.17-.06-.19-.18-.007-.024-.007-.117-.007-.296v-3.11h-.807v3.34c0 .298.027.5.07.627.082.215.262.316.52.316.298 0 .603-.17.924-.52v.462h.808V9.644H6.03v3.228zm.693-7.13c.263 0 .39-.197.39-.59V3.354c0-.395-.127-.59-.39-.59s-.39.196-.39.59V5.15c0 .396.127.593.39.593zM8.6 2.12h.813v3.14c0 .183 0 .277.01.302.017.12.082.18.19.18.164 0 .335-.12.516-.36V2.118h.815v4.267h-.816V5.92c-.326.354-.635.526-.933.526-.263 0-.444-.1-.526-.317-.044-.13-.07-.335-.07-.636V2.12zM5.517 3.51c0-.456.082-.79.255-1.005.226-.292.543-.437.95-.437.41 0 .726.145.952.437.17.216.253.55.253 1.006v1.495c0 .454-.082.79-.253 1.004-.226.29-.543.436-.952.436-.407 0-.724-.146-.95-.437-.173-.215-.255-.55-.255-1.005V3.51zM3.336.66l.642 2.25.617-2.25h.915L4.422 4.068v2.32h-.904v-2.32c-.083-.41-.264-1.014-.554-1.812-.19-.532-.39-1.065-.58-1.596h.952zm10.377 13.58c-.164.674-.744 1.17-1.444 1.245-1.658.175-3.334.176-5.003.175-1.67 0-3.346 0-5.003-.175-.7-.075-1.28-.57-1.443-1.245C.59 13.282.59 12.235.59 11.247c0-.987.003-2.034.235-2.993.164-.673.744-1.17 1.444-1.244 1.656-.175 3.333-.176 5.003-.175 1.67 0 3.345 0 5.002.175.7.074 1.28.57 1.444 1.244.232.96.23 2.006.23 2.993 0 .988 0 2.035-.233 2.993zM11.75 9.593c-.414 0-.734.144-.968.433-.17.213-.25.543-.25.995v1.48c0 .45.088.78.26.993.233.288.555.433.977.433.42 0 .752-.152.975-.458.098-.136.162-.29.19-.46.007-.076.016-.245.016-.492v-.11h-.822c0 .305-.01.475-.018.517-.046.204-.162.307-.36.307-.278 0-.414-.195-.414-.586v-.75h1.615v-.874c0-.45-.08-.78-.25-.995-.224-.288-.546-.432-.95-.432zm.394 1.665h-.807v-.39c0-.39.135-.586.405-.586.267 0 .402.195.402.585v.39z\" fill=\"#343434\" fill-rule=\"evenodd\"/></symbol>";
	module.exports = sprite.add(image, "youtube2");

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _shared = __webpack_require__(47);
	
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
	
	    $.each(_shared.MEDIA_QUERIES, function (index, value) {
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
	
	      $.each(_shared.MEDIA_QUERIES, function (index, value) {
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
	        $(window).triggerHandler(breakpointName);
	
	        if (breakpointName.indexOf('Min') === -1 && breakpointName.indexOf('Max') === -1) {
	          $(window).triggerHandler('mediaQueryChange', breakpointName);
	        }
	
	        $.each(info.matchedMediaQueries, function (index, value) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
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
	  xsMin: 'screen and (min-width: ' + VALUES_GRID.xsMin + 'px)',
	  xs: 'screen and (max-width: ' + VALUES_GRID.xsMax + 'px)',
	  xsMax: 'screen and (max-width: ' + VALUES_GRID.xsMax + 'px)',
	  smMin: 'screen and (min-width: ' + VALUES_GRID.smMin + 'px)',
	  sm: 'screen and (min-width: ' + VALUES_GRID.smMin + 'px) and (max-width: ' + VALUES_GRID.smMax + 'px)',
	  smMax: 'screen and (max-width: ' + VALUES_GRID.smMax + 'px)',
	  mdMin: 'screen and (min-width: ' + VALUES_GRID.mdMin + 'px)',
	  md: 'screen and (min-width: ' + VALUES_GRID.mdMin + 'px) and (max-width: ' + VALUES_GRID.mdMax + 'px)',
	  mdMax: 'screen and (max-width: ' + VALUES_GRID.mdMax + 'px)',
	  lgMin: 'screen and (min-width: ' + VALUES_GRID.lgMin + 'px)',
	  lg: 'screen and (min-width: ' + VALUES_GRID.lgMin + 'px)'
	};
	
	var SHARED_CLASSES = exports.SHARED_CLASSES = {
	  active: 'is-active',
	  expanded: 'is-expanded',
	  animate: 'is-animated',
	  visible: 'is-visible',
	  collapsed: 'is-collapsed',
	  outsideViewport: 'is-outside-viewport'
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _menuMobile = __webpack_require__(49);
	
	var _menuMobile2 = _interopRequireDefault(_menuMobile);
	
	var _menuDesktop = __webpack_require__(50);
	
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
	      $(window).on('xsMax', $.proxy(this._onChangedToMobile, this));
	      $(window).on('smMin', $.proxy(this._onChangedToDesktop, this));
	    }
	  }, {
	    key: '_removeMediaQueryCallbacks',
	    value: function _removeMediaQueryCallbacks() {
	      $(window).off('xsMax', $.proxy(this._onChangedToMobile.bind(this)));
	      $(window).off('smMin', $.proxy(this._onChangedToDesktop.bind(this)));
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	      $('.menuIcon').on('click', function () {
	        $(this).toggleClass('is-active');
	      });
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _currenciesMobile = __webpack_require__(52);
	
	var _currenciesMobile2 = _interopRequireDefault(_currenciesMobile);
	
	var _currenciesDesktop = __webpack_require__(53);
	
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
	      $(window).on('xsMax', $.proxy(this._onChangedToMobile, this));
	      $(window).on('smMin', $.proxy(this._onChangedToDesktop, this));
	    }
	  }, {
	    key: '_removeMediaQueryCallbacks',
	    value: function _removeMediaQueryCallbacks() {
	      $(window).off('xsMax', $.proxy(this._onChangedToMobile.bind(this)));
	      $(window).off('smMin', $.proxy(this._onChangedToDesktop.bind(this)));
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 52 */
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    console.warn('desktop');
	    $(window).on('mediaQueryChange', $.proxy(this._onMediaQueryChange, this));
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _shared = __webpack_require__(47);
	
	var _topHeaderMyAccount = __webpack_require__(55);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TopHeaderMyAccountComponent = function () {
	  function TopHeaderMyAccountComponent($el) {
	    _classCallCheck(this, TopHeaderMyAccountComponent);
	
	    this.$el = $el;
	    this.$link = $el.find('.' + _topHeaderMyAccount.CLASSES.link);
	    this.$leftSide = $el.find('.' + _topHeaderMyAccount.CLASSES.leftSide);
	    this.$rightSide = $el.find('.' + _topHeaderMyAccount.CLASSES.rightSide);
	    this.$welcomeMessage = this.$rightSide.find('.' + _topHeaderMyAccount.CLASSES.link);
	
	    this._calculateWidths();
	    this._addEventHandlers();
	  }
	
	  _createClass(TopHeaderMyAccountComponent, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._removeEventHandlers();
	      this.$leftSide.add(this.$welcomeMessage).removeClass(_shared.SHARED_CLASSES.animate);
	      this.$el.removeClass(_shared.SHARED_CLASSES.active);
	      this.$leftSide.add(this.$welcomeMessage).width('');
	      this.$leftSide.addClass(_shared.SHARED_CLASSES.outsideViewport);
	      this.$el = null;
	      this.$leftSide = null;
	      this.$rightSide = null;
	      this.$welcomeMessage = null;
	    }
	  }, {
	    key: '_calculateWidths',
	    value: function _calculateWidths() {
	      this.$leftSide.attr('data-width', this.$leftSide.outerWidth());
	      this.$welcomeMessage.attr('data-width', this.$welcomeMessage.outerWidth());
	      this.$leftSide.addClass(_shared.SHARED_CLASSES.collapsed).removeClass(_shared.SHARED_CLASSES.outsideViewport);
	      this.$welcomeMessage.outerWidth(this.$welcomeMessage.data('width'));
	    }
	  }, {
	    key: '_addEventHandlers',
	    value: function _addEventHandlers() {
	      if (window.Modernizr.touchevents) {
	        this.$el.on('click' + _topHeaderMyAccount.EVENT_NAMESPACE, $.proxy(this._activateItem, this));
	        $(document).on('click' + _topHeaderMyAccount.EVENT_NAMESPACE, $.proxy(this._deactivateItem, this));
	        this.$link.on('click' + _topHeaderMyAccount.EVENT_NAMESPACE, this._activateLink);
	      } else {
	        this.$el.on('mouseover' + _topHeaderMyAccount.EVENT_NAMESPACE, $.proxy(this._activateItem, this));
	        this.$el.on('mouseout' + _topHeaderMyAccount.EVENT_NAMESPACE, $.proxy(this._deactivateItem, this));
	        this.$link.on('mouseover' + _topHeaderMyAccount.EVENT_NAMESPACE, this._activateLink);
	      }
	    }
	  }, {
	    key: '_removeEventHandlers',
	    value: function _removeEventHandlers() {
	      this.$el.off(_topHeaderMyAccount.EVENT_NAMESPACE);
	      $(document).off(_topHeaderMyAccount.EVENT_NAMESPACE);
	    }
	  }, {
	    key: '_activateLink',
	    value: function _activateLink() {
	      $(this).addClass(_shared.SHARED_CLASSES.active);
	      $(this).siblings().removeClass(_shared.SHARED_CLASSES.active);
	    }
	  }, {
	    key: '_activateItem',
	    value: function _activateItem(e) {
	      if (window.Modernizr.touchevents) {
	        this._preventClickFirstTime(e);
	      } else {
	        this._slideInLeftSide();
	      }
	    }
	  }, {
	    key: '_deactivateItem',
	    value: function _deactivateItem(e) {
	      if (window.Modernizr.touchevents) {
	        if (!this.$el.is(e.target) // if the target of the click isn't the container...
	        && this.$el.has(e.target).length === 0) // ... nor a descendant of the container
	          {
	            this._slideOutLeftSide();
	          }
	      } else {
	        this._slideOutLeftSide();
	      }
	    }
	  }, {
	    key: '_preventClickFirstTime',
	    value: function _preventClickFirstTime(e) {
	      if (this.$el.hasClass(_shared.SHARED_CLASSES.active)) {
	        return true;
	      } else {
	        e.preventDefault();
	        this.$el.addClass(_shared.SHARED_CLASSES.active);
	        this._slideInLeftSide();
	      }
	    }
	  }, {
	    key: '_slideInLeftSide',
	    value: function _slideInLeftSide() {
	      var _this = this;
	
	      this.$leftSide.one('transitionend', function () {
	        _this.$welcomeMessage.addClass(_shared.SHARED_CLASSES.animate).addClass(_shared.SHARED_CLASSES.collapsed);
	      }).addClass(_shared.SHARED_CLASSES.animate).width(this.$leftSide.data('width')).removeClass(_shared.SHARED_CLASSES.collapsed);
	    }
	  }, {
	    key: '_slideOutLeftSide',
	    value: function _slideOutLeftSide() {
	      var _this2 = this;
	
	      this.$leftSide.one('transitionend', function () {
	        _this2.$welcomeMessage.removeClass(_shared.SHARED_CLASSES.collapsed);
	        _this2.$el.removeClass(_shared.SHARED_CLASSES.active);
	      }).addClass(_shared.SHARED_CLASSES.collapsed);
	    }
	  }]);
	
	  return TopHeaderMyAccountComponent;
	}();
	
	exports.default = TopHeaderMyAccountComponent;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLASSES = exports.CLASSES = {
	  link: 'myAccount__link',
	  leftSide: 'myAccount__leftSide',
	  rightSide: 'myAccount__rightSide',
	  image: 'myAccount__img'
	};
	
	var EVENT_NAMESPACE = exports.EVENT_NAMESPACE = '.topHeaderMyAccount';

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _shared = __webpack_require__(47);
	
	var _topHeaderWishList = __webpack_require__(57);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TopHeaderWishListComponent = function () {
	  function TopHeaderWishListComponent($el) {
	    _classCallCheck(this, TopHeaderWishListComponent);
	
	    this.$el = $el;
	    this.$link = $el.find('.' + _topHeaderWishList.CLASSES.link);
	
	    this._calculateWidths();
	    this._addEventHandlers();
	    this._validatePageLink();
	  }
	
	  _createClass(TopHeaderWishListComponent, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._removeEventHandlers();
	      this.$link.removeClass(_shared.SHARED_CLASSES.animate + ' ' + _shared.SHARED_CLASSES.active).addClass(_shared.SHARED_CLASSES.outsideViewport).width('');
	      this.$el.removeClass(_shared.SHARED_CLASSES.active);
	      this.$el = null;
	      this.$link = null;
	    }
	  }, {
	    key: '_validatePageLink',
	    value: function _validatePageLink() {
	      if (this.$link.attr('href').length < 1) {
	        console.warn('No WishList Page Found! Please update it inside the Customize Theme -> Header -> WishList Page');
	      }
	    }
	  }, {
	    key: '_calculateWidths',
	    value: function _calculateWidths() {
	      this.$link.attr('data-width', this.$link.outerWidth());
	      this.$link.addClass(_shared.SHARED_CLASSES.collapsed).removeClass(_shared.SHARED_CLASSES.outsideViewport);
	    }
	  }, {
	    key: '_addEventHandlers',
	    value: function _addEventHandlers() {
	      if (window.Modernizr.touchevents) {
	        this.$el.on('click' + _topHeaderWishList.EVENT_NAMESPACE, $.proxy(this._activateItem, this));
	        $(document).on('click' + _topHeaderWishList.EVENT_NAMESPACE, $.proxy(this._deactivateItem, this));
	      } else {
	        this.$el.on('mouseover' + _topHeaderWishList.EVENT_NAMESPACE, $.proxy(this._activateItem, this));
	        this.$el.on('mouseout' + _topHeaderWishList.EVENT_NAMESPACE, $.proxy(this._deactivateItem, this));
	      }
	    }
	  }, {
	    key: '_removeEventHandlers',
	    value: function _removeEventHandlers() {
	      this.$el.off(_topHeaderWishList.EVENT_NAMESPACE);
	      $(document).off(_topHeaderWishList.EVENT_NAMESPACE);
	    }
	  }, {
	    key: '_activateItem',
	    value: function _activateItem(e) {
	      if (window.Modernizr.touchevents) {
	        this._preventClickFirstTime(e);
	      } else {
	        this._slideInLink();
	      }
	    }
	  }, {
	    key: '_deactivateItem',
	    value: function _deactivateItem(e) {
	      if (window.Modernizr.touchevents) {
	        if (!this.$el.is(e.target) // if the target of the click isn't the container...
	        && this.$el.has(e.target).length === 0) // ... nor a descendant of the container
	          {
	            this._slideOutLink();
	          }
	      } else {
	        this._slideOutLink();
	      }
	    }
	  }, {
	    key: '_preventClickFirstTime',
	    value: function _preventClickFirstTime(e) {
	      if (this.$el.hasClass(_shared.SHARED_CLASSES.active)) {
	        return true;
	      } else {
	        e.preventDefault();
	        this.$el.addClass(_shared.SHARED_CLASSES.active);
	        this._slideInLink();
	      }
	    }
	  }, {
	    key: '_slideInLink',
	    value: function _slideInLink() {
	      this.$link.addClass(_shared.SHARED_CLASSES.animate);
	      this.$link.innerWidth(this.$link.data('width')).removeClass(_shared.SHARED_CLASSES.collapsed);
	      this.$link.addClass(_shared.SHARED_CLASSES.active);
	    }
	  }, {
	    key: '_slideOutLink',
	    value: function _slideOutLink() {
	      this.$el.add(this.$link).removeClass(_shared.SHARED_CLASSES.active);
	      this.$link.addClass(_shared.SHARED_CLASSES.collapsed);
	    }
	  }]);
	
	  return TopHeaderWishListComponent;
	}();
	
	exports.default = TopHeaderWishListComponent;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLASSES = exports.CLASSES = {
	  link: 'wishList__link',
	  image: 'wishList__img'
	};
	
	var EVENT_NAMESPACE = exports.EVENT_NAMESPACE = '.topHeaderWishList';

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _wishList = __webpack_require__(59);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WishListComponent = function () {
	  function WishListComponent() {
	    _classCallCheck(this, WishListComponent);
	
	    this.addEventListeners();
	  }
	
	  _createClass(WishListComponent, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.removeEventListeners();
	    }
	  }, {
	    key: 'addEventListeners',
	    value: function addEventListeners() {
	      $(document).on('click' + _wishList.EVENT_NAMESPACE, '.' + _wishList.CLASSES.button, $.proxy(this._postToWishlist, this));
	      $(document).on('click' + _wishList.EVENT_NAMESPACE, '.' + _wishList.CLASSES.removeButton, $.proxy(this._removeFromWishlist, this));
	      $(document).on('click' + _wishList.EVENT_NAMESPACE, '.' + _wishList.CLASSES.addToCart, $.proxy(this._addToCart, this));
	    }
	  }, {
	    key: 'removeEventListeners',
	    value: function removeEventListeners() {
	      $(document).off(_wishList.EVENT_NAMESPACE);
	    }
	  }, {
	    key: '_postToWishlist',
	    value: function _postToWishlist(e) {
	      var options = $(e.currentTarget).data('ss-options'),
	          postData = [{ name: 'form_type', value: 'customer' }, { name: 'contact[email]', value: options['email'] }, { name: 'contact[tags]', value: options['variantID'] }];
	
	      $.post('/contact', postData).done(function (data) {
	        return console.log(data);
	      }).fail(function () {
	        return console.warn('Something went wrong. Please try again!');
	      });
	    }
	  }, {
	    key: '_addToCart',
	    value: function _addToCart(e) {
	      var variantID = void 0;
	
	      e.preventDefault();
	      variantID = $(this).attr('data-id');
	      $('#product-select').attr('value', variantID);
	      this._removeFromWishlist($(this));
	      $('#add-variant').submit();
	    }
	  }, {
	    key: '_removeFromWishlist',
	    value: function _removeFromWishlist(e) {
	      e.preventDefault();
	      var $this = $(e.currentTarget);
	      // select parent li element
	      var $elem = $this.closest('li');
	      // get the id which is the selected variant tag
	      var tagID = $elem.attr('id');
	      var $form = $('#remove');
	
	      // set the value of the input in the form to the selected variant
	      $('#remove-value').attr('value', tagID);
	      var postData = $form.serializeArray();
	      var formURL = $form.attr('action');
	      $.ajax({
	        url: formURL,
	        type: 'POST',
	        data: postData,
	        success: function success(data, textStatus) {
	          console.warn(textStatus);
	          $elem.remove();
	          if ($('ul.wishlist li').length === 0) {
	            $('#wishlist-email-link').empty().html('<p>Your wish list is currently empty.</p>');
	          } else {
	            this._updateEmailList();
	          }
	        },
	        error: function error() {
	          $(this).append('<p>I\'m afraid that didn\'t work.</p>');
	        }
	      });
	    }
	  }, {
	    key: '_updateEmailList',
	    value: function _updateEmailList() {
	      var currentURL = window.location.protocol + '//' + window.location.host + window.location.pathname;
	      $.ajax({
	        url: currentURL,
	        type: 'GET',
	        success: function success(data, textStatus) {
	          console.warn(textStatus);
	          var newEmailLink = $(data).find('#wishlist-email-link a');
	          $('#wishlist-email-link').html(newEmailLink);
	        }
	      });
	    }
	  }, {
	    key: 'selectCallback',
	    value: function selectCallback(variant) {
	
	      // you will be using something like this if you are using Shopify's option_selection.js as a callback to
	      // update your images and stuff when the user chooses another variant from a product select element.
	      // Just add the bits below to what you already have in there. This will ensure when the customer picks another
	      // variant, the wish list form will update to the current variant.
	      //Update wishlist form
	      var $wishList = $('.js-wish-list');
	      var currentURL = window.location.protocol + '//' + window.location.host + window.location.pathname;
	      var newURL = currentURL + '?variant=' + variant.id;
	
	      $.ajax({
	        type: 'GET',
	        url: newURL,
	        success: function success(data) {
	          $wishList.empty();
	          var newData = $(data).find('.js-wish-list').html();
	          $wishList.html(newData);
	
	          // reset event listener for posting to wish list
	          this._postToWishlist();
	        }
	      });
	    }
	  }]);
	
	  return WishListComponent;
	}();
	
	exports.default = WishListComponent;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLASSES = exports.CLASSES = {
	  button: 'wishList__button',
	  removeButton: 'wishList__removeButton',
	  addToCart: 'wishList__addToCartButton'
	};
	
	var EVENT_NAMESPACE = exports.EVENT_NAMESPACE = '.wishList';

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3ZnLXNwcml0ZS9zdmctc3ByaXRlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnIG5vbnJlY3Vyc2l2ZSBcXC5zdmckIiwid2VicGFjazovLy8uL3NyYy9zdmcvVHdpdHRlcjIuc3ZnIiwid2VicGFjazovLy8uL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlLmpzIiwid2VicGFjazovLy8uL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zbmlmZnIvc3JjL3NuaWZmci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Fycm93Mi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9iYWcuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvYmFnMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9jYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Nsb3NlMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9jbG9zZTIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvY29tbWVyY2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvZmF2b3JpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvZmF2b3JpdGUyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2ZiLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2ZiMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9nb29nbGUtcGx1cy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9nb29nbGUtcGx1czIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvaG9tZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9pbmZvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2luc3RhZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9pbnN0YWdyYW0yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2xpbmtlZGluLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2xpbmtlZGluMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9sb2NhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9tYWlsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL21haWwyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3Bob25lMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9waG9uZTIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvc2VhcmNoLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3R3aXR0ZXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvdXNlci0xLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3VzZXItMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy93aXNoLWxpc3QtMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy93aXNoLWxpc3QtMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy95b3V0dWJlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3lvdXR1YmUyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVkaWEtcXVlcmllcy9tZWRpYS1xdWVyaWVzLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hhcmVkL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9tZW51LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9tZW51Lm1vYmlsZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvbWVudS5kZXNrdG9wLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VycmVuY2llcy9jdXJyZW5jaWVzLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VycmVuY2llcy9jdXJyZW5jaWVzLm1vYmlsZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5kZXNrdG9wLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9wLWhlYWRlci1teS1hY2NvdW50L3RvcC1oZWFkZXItbXktYWNjb3VudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvcC1oZWFkZXItbXktYWNjb3VudC90b3AtaGVhZGVyLW15LWFjY291bnQuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90b3AtaGVhZGVyLXdpc2gtbGlzdC90b3AtaGVhZGVyLXdpc2gtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvcC1oZWFkZXItd2lzaC1saXN0L3RvcC1oZWFkZXItd2lzaC1saXN0LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxNQUFNLG1CQUFWO0FBQ0EsS0FBSSxJQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7S0FFcUIsWTtBQUNuQix5QkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFlBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxJQUFlLEVBQTdCO0FBQ0EsVUFBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxJQUFrQixFQUFuQzs7QUFFQSxVQUFLLE9BQUwsR0FBZSxVQUFVLE9BQVYsZUFBZjtBQUNEOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7O0FDcEhEO0FBQ0E7QUFDQSw2Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw4Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSwyQzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw0Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw0Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw4Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw4Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxnRDs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxnRDs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxpRDs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSwwQzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSwyQzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxtRDs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxvRDs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw0Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSw0Qzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxpRDs7Ozs7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QUNuQyxtQkFBUSxJQUFSLENBQWEsVUFBYjtBQUNBLGVBQUksZUFBZSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsd0JBQWIsQ0FBbkI7QUFDQSxhQUFFLHNCQUFGLEVBQTBCLElBQTFCLENBQStCLFlBQS9CO0FBQ0Q7QUFQSSxRQUFQO0FBU0Q7OztvQ0FFYyxPLEVBQVM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFJLFlBQVksRUFBRSxlQUFGLENBQWhCO0FBQ0EsV0FBSSxhQUFhLE9BQU8sUUFBUCxDQUFnQixRQUFoQixHQUEyQixJQUEzQixHQUFrQyxPQUFPLFFBQVAsQ0FBZ0IsSUFBbEQsR0FBeUQsT0FBTyxRQUFQLENBQWdCLFFBQTFGO0FBQ0EsV0FBSSxTQUFTLGFBQWEsV0FBYixHQUEyQixRQUFRLEVBQWhEOztBQUVBLFNBQUUsSUFBRixDQUFPO0FBQ0wsZUFBTSxLQUREO0FBRUwsY0FBSyxNQUZBO0FBR0wsa0JBQVEsaUJBQVMsSUFBVCxFQUFlO0FBQ3JCLHFCQUFVLEtBQVY7QUFDQSxlQUFJLFVBQVUsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGVBQWIsRUFBOEIsSUFBOUIsRUFBZDtBQUNBLHFCQUFVLElBQVYsQ0FBZSxPQUFmOztBQUVBO0FBQ0EsZ0JBQUssZUFBTDtBQUNEO0FBVkksUUFBUDtBQVlEOzs7Ozs7bUJBL0drQixpQjtBQWlIcEIsRTs7Ozs7Ozs7Ozs7O0FDbkhNLEtBQU0sNEJBQVU7QUFDckIsV0FBUSxrQkFEYTtBQUVyQixpQkFBYyx3QkFGTztBQUdyQixjQUFXO0FBSFUsRUFBaEI7O0FBTUEsS0FBTSw0Q0FBa0IsV0FBeEIsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnanF1ZXJ5JztcbmltcG9ydCAnbW9kZXJuaXpyJztcbmltcG9ydCBBcHBDb21wb25lbnQgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxubGV0IGFwcCA9IG5ldyBBcHBDb21wb25lbnQoKTtcbmFwcC5pbml0KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0IHtDTEFTU0VTfSBmcm9tICcuL2FwcC5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihjbGFzc2VzKSB7XG4gICAgd2luZG93LmluZm8gPSB3aW5kb3cuaW5mbyB8fCB7fTtcbiAgICBpbmZvLmluc3RhbmNlcyA9IGluZm8uaW5zdGFuY2VzIHx8IFtdO1xuXG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcyA/IGNsYXNzZXMgOiBDTEFTU0VTO1xuICB9XG5cbiAgLy8gaW5pdCBtZXRob2RcbiAgaW5pdCgkY29udGFpbmVyLCBkZWVwU2NhbiA9IGZhbHNlKSB7XG4gICAgbGV0IF9zZWxmID0gdGhpcztcblxuICAgIGlmICgkY29udGFpbmVyKSB7XG4gICAgICBpZiAoJGNvbnRhaW5lciBpbnN0YW5jZW9mICQpIHtcblxuICAgICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgICAvLyBpbml0aWFsaXplIGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5pdF1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3NzLWluaXQnKTtcbiAgICAgICAgICAgIF9zZWxmLmNoZWNrSWZDbGFzc0V4aXN0c09uRG9tKCQodGhpcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gaW5pdGlhbGl6ZSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICBfc2VsZi5jaGVja0lmQ2xhc3NFeGlzdHNPbkRvbSgkKHRoaXMpLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFyYW1ldGVyIHBhc3NlZCBpdCBpcyBub3QgYSBqUXVlcnkgZWxlbWVudCEnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgbm8gcGFyYW0gcGFzc2VkLCBhbGwgdGhlIG1vZHVsZXMgZnJvbSB0aGUgRE9NXG4gICAgICAvLyB3aWxsIGJlIGluaXRpYWxpemVkIGRlcGVuZGluZyBvbiB0aGUgZGF0YS1zcy1zdGF0ZSB2YWx1ZVxuICAgICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4gdGhpcy5pbml0QnlTdGF0ZSgnb25SZWFkeScpKTtcbiAgICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHRoaXMuaW5pdEJ5U3RhdGUoJ29uTG9hZCcpKTtcbiAgICB9XG4gIH07XG5cbiAgLy9kZXN0cm95IG1ldGhvZFxuICBkZXN0cm95KCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpIHtcbiAgICBsZXQgZGVzdHJveUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGN1cnJlbnRJbnN0YW5jZSA9ICQodGhpcykuZGF0YSgnc3MtaW5zdGFuY2UnKTtcbiAgICAgIGluZm8uaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0uZGVzdHJveSgpO1xuICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNzLWluc3RhbmNlJyk7XG4gICAgICBpbmZvLmluc3RhbmNlc1tjdXJyZW50SW5zdGFuY2VdID0gbnVsbDtcbiAgICB9O1xuXG4gICAgaWYgKCRjb250YWluZXIpIHtcbiAgICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuICAgICAgICBpZiAoZGVlcFNjYW4pIHtcbiAgICAgICAgICAvLyBkZXN0cm95IGFsbCBtb2R1bGVzIGZyb20gdGhlIGpRdWVyeSBET00gZWxlbWVudFxuICAgICAgICAgICRjb250YWluZXIuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGRlc3Ryb3kgIHRoZSBjdXJyZW50IGVsZW1lbnQgcGFzc2VkXG4gICAgICAgICAgJGNvbnRhaW5lci5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLWluc3RhbmNlXWApLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tJZkNsYXNzRXhpc3RzT25Eb20oJGVsLCBjbGFzc05hbWUpIHtcbiAgICBsZXQgY2xhc3NFeGlzdHMgPSBmYWxzZSxcbiAgICAgIGRvbUNsYXNzZXMgPSB0aGlzLmNsYXNzZXMuZG9tID8gdGhpcy5jbGFzc2VzLmRvbSA6IHRoaXMuY2xhc3NlcztcblxuICAgICQuZWFjaChkb21DbGFzc2VzLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICBpZiAoaW5kZXggPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAkZWwuYXR0cignZGF0YS1zcy1pbnN0YW5jZScsIGluZm8uaW5zdGFuY2VzLmxlbmd0aCk7XG4gICAgICAgIGNsYXNzRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgaW5mby5pbnN0YW5jZXMucHVzaChuZXcgdmFsdWUoJGVsKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWNsYXNzRXhpc3RzKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBjbGFzcyAke2NsYXNzTmFtZX0gZG9lcyBub3QgZXhpc3QhYCk7XG4gICAgfVxuICB9O1xuXG4gIGluaXRCeVN0YXRlKHN0YXRlKSB7XG4gICAgbGV0IF9zZWxmID0gdGhpcyxcbiAgICAgICRjb21wb25lbnRzO1xuXG4gICAgaWYgKHRoaXMuY2xhc3NlcyA9PT0gQ0xBU1NFUykge1xuICAgICAgJC5lYWNoKENMQVNTRVNbc3RhdGVdLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIG5ldyB2YWx1ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlID09PSAnb25Mb2FkJykge1xuICAgICAgJGNvbXBvbmVudHMgPSAkKGRvY3VtZW50KS5maW5kKGBbZGF0YS1zcy1zdGF0ZT1cIiR7c3RhdGV9XCJdYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJGNvbXBvbmVudHMgPSAkKGRvY3VtZW50KS5maW5kKCdbZGF0YS1zcy1pbml0XTpub3QoW2RhdGEtc3Mtc3RhdGVdKScpO1xuICAgIH1cblxuICAgICRjb21wb25lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzT25Eb20oJCh0aGlzKSwgY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5jb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgU1ZHU3ByaXRlQ29tcG9uZW50IGZyb20gJy4vc3ZnLXNwcml0ZS9zdmctc3ByaXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVkaWFRdWVyaWVzQ29tcG9uZW50IGZyb20gJy4vbWVkaWEtcXVlcmllcy9tZWRpYS1xdWVyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVudUNvbXBvbmVudCBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IEN1cnJlbmNpZXNDb21wb25lbnQgZnJvbSAnLi9jdXJyZW5jaWVzL2N1cnJlbmNpZXMuY29tcG9uZW50JztcbmltcG9ydCBUb3BIZWFkZXJNeUFjY291bnRDb21wb25lbnQgZnJvbSAnLi90b3AtaGVhZGVyLW15LWFjY291bnQvdG9wLWhlYWRlci1teS1hY2NvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgVG9wSGVhZGVyV2lzaExpc3RDb21wb25lbnQgZnJvbSAnLi90b3AtaGVhZGVyLXdpc2gtbGlzdC90b3AtaGVhZGVyLXdpc2gtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFdpc2hMaXN0Q29tcG9uZW50IGZyb20gJy4vd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ0xBU1NFUyA9IHtcbiAgZG9tOiB7TWVudUNvbXBvbmVudCwgQ3VycmVuY2llc0NvbXBvbmVudCwgVG9wSGVhZGVyTXlBY2NvdW50Q29tcG9uZW50LCBUb3BIZWFkZXJXaXNoTGlzdENvbXBvbmVudH0sXG4gIG9uUmVhZHk6IHtNZWRpYVF1ZXJpZXNDb21wb25lbnQsIFdpc2hMaXN0Q29tcG9uZW50fSxcbiAgb25Mb2FkOiB7U1ZHU3ByaXRlQ29tcG9uZW50fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5jb25maWcuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdTcHJpdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgZmlsZXMgPSByZXF1aXJlLmNvbnRleHQoJ3N2Zy8nLCBmYWxzZSwgL1xcLnN2ZyQvKTtcbiAgICBmaWxlcy5rZXlzKCkuZm9yRWFjaChmaWxlcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgICQoJ2JvZHknKS5jaGlsZHJlbignc3ZnJykucmVtb3ZlKCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9zdmctc3ByaXRlL3N2Zy1zcHJpdGUuY29tcG9uZW50LmpzXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL1R3aXR0ZXIyLnN2Z1wiOiA5LFxuXHRcIi4vYXJyb3cuc3ZnXCI6IDEzLFxuXHRcIi4vYXJyb3cyLnN2Z1wiOiAxNCxcblx0XCIuL2JhZy5zdmdcIjogMTUsXG5cdFwiLi9iYWcyLnN2Z1wiOiAxNixcblx0XCIuL2NhcnQuc3ZnXCI6IDE3LFxuXHRcIi4vY2xvc2UxLnN2Z1wiOiAxOCxcblx0XCIuL2Nsb3NlMi5zdmdcIjogMTksXG5cdFwiLi9jb21tZXJjZS5zdmdcIjogMjAsXG5cdFwiLi9mYXZvcml0ZS5zdmdcIjogMjEsXG5cdFwiLi9mYXZvcml0ZTIuc3ZnXCI6IDIyLFxuXHRcIi4vZmIuc3ZnXCI6IDIzLFxuXHRcIi4vZmIyLnN2Z1wiOiAyNCxcblx0XCIuL2dvb2dsZS1wbHVzLnN2Z1wiOiAyNSxcblx0XCIuL2dvb2dsZS1wbHVzMi5zdmdcIjogMjYsXG5cdFwiLi9ob21lLnN2Z1wiOiAyNyxcblx0XCIuL2luZm8uc3ZnXCI6IDI4LFxuXHRcIi4vaW5zdGFncmFtLnN2Z1wiOiAyOSxcblx0XCIuL2luc3RhZ3JhbTIuc3ZnXCI6IDMwLFxuXHRcIi4vbGlua2VkaW4uc3ZnXCI6IDMxLFxuXHRcIi4vbGlua2VkaW4yLnN2Z1wiOiAzMixcblx0XCIuL2xvY2F0aW9uLnN2Z1wiOiAzMyxcblx0XCIuL21haWwuc3ZnXCI6IDM0LFxuXHRcIi4vbWFpbDIuc3ZnXCI6IDM1LFxuXHRcIi4vcGhvbmUxLnN2Z1wiOiAzNixcblx0XCIuL3Bob25lMi5zdmdcIjogMzcsXG5cdFwiLi9zZWFyY2guc3ZnXCI6IDM4LFxuXHRcIi4vdHdpdHRlci5zdmdcIjogMzksXG5cdFwiLi91c2VyLTEuc3ZnXCI6IDQwLFxuXHRcIi4vdXNlci0yLnN2Z1wiOiA0MSxcblx0XCIuL3dpc2gtbGlzdC0xLnN2Z1wiOiA0Mixcblx0XCIuL3dpc2gtbGlzdC0yLnN2Z1wiOiA0Myxcblx0XCIuL3lvdXR1YmUuc3ZnXCI6IDQ0LFxuXHRcIi4veW91dHViZTIuc3ZnXCI6IDQ1XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2ZyBub25yZWN1cnNpdmUgXFwuc3ZnJFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAyMSAxNlxcXCIgaWQ9XFxcIlR3aXR0ZXIyXFxcIiA+PHRpdGxlPlR3aXR0ZXI8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xOC4xOSA0LjM5NGMuMDA3LjE2My4wMTIuMzI4LjAxMi40OTIgMCA1LjAwNS00LjAxOCAxMC43NzQtMTEuMzcgMTAuNzc0LTIuMjU2IDAtNC4zNTctLjYyNS02LjEyNS0xLjcuMzEzLjAzNS42My4wNTMuOTUzLjA1MyAxLjg3MyAwIDMuNTk1LS42MDYgNC45NjMtMS42MkM0Ljg3NSAxMi4zNiAzLjQgMTEuMjY1IDIuODkgOS43NmMuMjQ0LjA0NS40OTUuMDcuNzUuMDcuMzY2IDAgLjcyLS4wNDYgMS4wNTQtLjEzM0MyLjg2NyA5LjM1IDEuNDkgNy44MiAxLjQ5IDUuOTg0di0uMDQ4Yy41NC4yODMgMS4xNTUuNDU0IDEuODEuNDczLTEuMDcyLS42OC0xLjc3Ny0xLjg0LTEuNzc3LTMuMTUyIDAtLjY5NS4xOTYtMS4zNDYuNTQtMS45MDUgMS45NyAyLjI5MiA0LjkxNSAzLjggOC4yMzUgMy45NTgtLjA2OC0uMjc3LS4xMDItLjU2NS0uMTAyLS44NjMgMC0yLjA5IDEuNzg4LTMuNzg3IDMuOTk1LTMuNzg3IDEuMTUgMCAyLjE4Ny40NiAyLjkxNyAxLjE5Ni45MS0uMTcgMS43NjUtLjQ4NCAyLjU0LS45Mi0uMzAyLjg4NS0uOTMzIDEuNjI3LTEuNzYgMi4wOTYuODA4LS4wOSAxLjU4LS4yOTQgMi4yOTQtLjU5Ni0uNTMyLjc2LTEuMjEgMS40MjYtMS45OSAxLjk1OHpcXFwiIGZpbGw9XFxcIiMzNDM0MzRcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcIlR3aXR0ZXIyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL1R3aXR0ZXIyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTcHJpdGUgPSByZXF1aXJlKCcuL3Nwcml0ZScpO1xudmFyIGdsb2JhbFNwcml0ZSA9IG5ldyBTcHJpdGUoKTtcblxuaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgZ2xvYmFsU3ByaXRlLmVsZW0gPSBnbG9iYWxTcHJpdGUucmVuZGVyKGRvY3VtZW50LmJvZHkpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBnbG9iYWxTcHJpdGUuZWxlbSA9IGdsb2JhbFNwcml0ZS5yZW5kZXIoZG9jdW1lbnQuYm9keSk7XG4gIH0sIGZhbHNlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxTcHJpdGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNuaWZmciA9IHJlcXVpcmUoJ3NuaWZmcicpO1xuXG4vKipcbiAqIExpc3Qgb2YgU1ZHIGF0dHJpYnV0ZXMgdG8gZml4IHVybCB0YXJnZXQgaW4gdGhlbVxuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG52YXIgZml4QXR0cmlidXRlcyA9IFtcbiAgJ2NsaXBQYXRoJyxcbiAgJ2NvbG9yUHJvZmlsZScsXG4gICdzcmMnLFxuICAnY3Vyc29yJyxcbiAgJ2ZpbGwnLFxuICAnZmlsdGVyJyxcbiAgJ21hcmtlcicsXG4gICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXJNaWQnLFxuICAnbWFya2VyRW5kJyxcbiAgJ21hc2snLFxuICAnc3Ryb2tlJ1xuXTtcblxuLyoqXG4gKiBRdWVyeSB0byBmaW5kJ2VtXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgZml4QXR0cmlidXRlc1F1ZXJ5ID0gJ1snICsgZml4QXR0cmlidXRlcy5qb2luKCddLFsnKSArICddJztcbi8qKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFVSSV9GVU5DX1JFR0VYID0gL151cmxcXCgoLiopXFwpJC87XG5cbi8qKlxuICogQ29udmVydCBhcnJheS1saWtlIHRvIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gYXJyYXlMaWtlXG4gKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICovXG5mdW5jdGlvbiBhcnJheUZyb20oYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgZm9yYmlkZGVuIHN5bWJvbHMgd2hpY2ggY2Fubm90IGJlIGRpcmVjdGx5IHVzZWQgaW5zaWRlIGF0dHJpYnV0ZXMgd2l0aCB1cmwoLi4uKSBjb250ZW50LlxuICogQWRkcyBsZWFkaW5nIHNsYXNoIGZvciB0aGUgYnJhY2tldHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm4ge3N0cmluZ30gZW5jb2RlZCB1cmxcbiAqL1xuZnVuY3Rpb24gZW5jb2RlVXJsRm9yRW1iZWRkaW5nKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1xcKHxcXCkvZywgXCJcXFxcJCZcIik7XG59XG5cbi8qKlxuICogUmVwbGFjZXMgcHJlZml4IGluIGB1cmwoKWAgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRVcmxQcmVmaXhcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdVcmxQcmVmaXhcbiAqL1xuZnVuY3Rpb24gYmFzZVVybFdvcmtBcm91bmQoc3ZnLCBjdXJyZW50VXJsUHJlZml4LCBuZXdVcmxQcmVmaXgpIHtcbiAgdmFyIG5vZGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoZml4QXR0cmlidXRlc1F1ZXJ5KTtcblxuICBpZiAoIW5vZGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXJyYXlGcm9tKG5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhcnJheUZyb20obm9kZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLmxvY2FsTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoZml4QXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZU5hbWUpICE9PSAtMSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBVUklfRlVOQ19SRUdFWC5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKTtcblxuICAgICAgICAvLyBEbyBub3QgdG91Y2ggdXJscyB3aXRoIHVuZXhwZWN0ZWQgcHJlZml4XG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXS5pbmRleE9mKGN1cnJlbnRVcmxQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgdmFyIHJlZmVyZW5jZVVybCA9IGVuY29kZVVybEZvckVtYmVkZGluZyhuZXdVcmxQcmVmaXggKyBtYXRjaFsxXS5zcGxpdChjdXJyZW50VXJsUHJlZml4KVsxXSk7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ3VybCgnICsgcmVmZXJlbmNlVXJsICsgJyknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBCZWNhdXNlIG9mIEZpcmVmb3ggYnVnICMzNTM1NzUgZ3JhZGllbnRzIGFuZCBwYXR0ZXJucyBkb24ndCB3b3JrIGlmIHRoZXkgYXJlIHdpdGhpbiBhIHN5bWJvbC5cbiAqIFRvIHdvcmthcm91bmQgdGhpcyB3ZSBtb3ZlIHRoZSBncmFkaWVudCBkZWZpbml0aW9uIG91dHNpZGUgdGhlIHN5bWJvbCBlbGVtZW50XG4gKiBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTM1MzU3NVxuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqL1xudmFyIEZpcmVmb3hTeW1ib2xCdWdXb3JrYXJvdW5kID0gZnVuY3Rpb24gKHN2Zykge1xuICB2YXIgZGVmcyA9IHN2Zy5xdWVyeVNlbGVjdG9yKCdkZWZzJyk7XG5cbiAgdmFyIG1vdmVUb0RlZnNFbGVtcyA9IHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wgbGluZWFyR3JhZGllbnQsIHN5bWJvbCByYWRpYWxHcmFkaWVudCwgc3ltYm9sIHBhdHRlcm4nKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG1vdmVUb0RlZnNFbGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGRlZnMuYXBwZW5kQ2hpbGQobW92ZVRvRGVmc0VsZW1zW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgREVGQVVMVF9VUklfUFJFRklYID0gJyMnO1xuXG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciB4TGlua0hyZWYgPSAneGxpbms6aHJlZic7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciB4TGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgc3ZnT3BlbmluZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cIicgKyB4TGlua05TICsgJ1wiJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIHN2Z0Nsb3NpbmcgPSAnPC9zdmc+Jztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIGNvbnRlbnRQbGFjZUhvbGRlciA9ICd7Y29udGVudH0nO1xuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIFNWRyBzcHJpdGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTcHJpdGUoKSB7XG4gIHZhciBiYXNlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF07XG4gIHZhciBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcbiAgdmFyIGJhc2VVcmwgPSBiYXNlRWxlbWVudCAmJiBiYXNlRWxlbWVudC5ocmVmO1xuICB0aGlzLnVybFByZWZpeCA9IGJhc2VVcmwgJiYgYmFzZVVybCAhPT0gY3VycmVudFVybCA/IGN1cnJlbnRVcmwgKyBERUZBVUxUX1VSSV9QUkVGSVggOiBERUZBVUxUX1VSSV9QUkVGSVg7XG5cbiAgdmFyIHNuaWZmciA9IG5ldyBTbmlmZnIoKTtcbiAgc25pZmZyLnNuaWZmKCk7XG4gIHRoaXMuYnJvd3NlciA9IHNuaWZmci5icm93c2VyO1xuICB0aGlzLmNvbnRlbnQgPSBbXTtcblxuICBpZiAodGhpcy5icm93c2VyLm5hbWUgIT09ICdpZScgJiYgYmFzZVVybCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzcHJpdGVMb2FkZXJMb2NhdGlvblVwZGF0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGN1cnJlbnRQcmVmaXggPSB0aGlzLnVybFByZWZpeDtcbiAgICAgIHZhciBuZXdVcmxQcmVmaXggPSBlLmRldGFpbC5uZXdVcmwuc3BsaXQoREVGQVVMVF9VUklfUFJFRklYKVswXSArIERFRkFVTFRfVVJJX1BSRUZJWDtcbiAgICAgIGJhc2VVcmxXb3JrQXJvdW5kKHRoaXMuc3ZnLCBjdXJyZW50UHJlZml4LCBuZXdVcmxQcmVmaXgpO1xuICAgICAgdGhpcy51cmxQcmVmaXggPSBuZXdVcmxQcmVmaXg7XG5cbiAgICAgIGlmICh0aGlzLmJyb3dzZXIubmFtZSA9PT0gJ2ZpcmVmb3gnIHx8IHRoaXMuYnJvd3Nlci5uYW1lID09PSAnZWRnZScgfHwgdGhpcy5icm93c2VyLm5hbWUgPT09ICdjaHJvbWUnICYmIHRoaXMuYnJvd3Nlci52ZXJzaW9uWzBdID49IDQ5KSB7XG4gICAgICAgIHZhciBub2RlcyA9IGFycmF5RnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1c2VbKnxocmVmXScpKTtcbiAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHZhciBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoeExpbmtIcmVmKTtcbiAgICAgICAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2YoY3VycmVudFByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoeExpbmtOUywgeExpbmtIcmVmLCBuZXdVcmxQcmVmaXggKyBocmVmLnNwbGl0KERFRkFVTFRfVVJJX1BSRUZJWClbMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5TcHJpdGUuc3R5bGVzID0gWydwb3NpdGlvbjphYnNvbHV0ZScsICd3aWR0aDowJywgJ2hlaWdodDowJywgJ3Zpc2liaWxpdHk6aGlkZGVuJ107XG5cblNwcml0ZS5zcHJpdGVUZW1wbGF0ZSA9IHN2Z09wZW5pbmcgKyAnIHN0eWxlPVwiJysgU3ByaXRlLnN0eWxlcy5qb2luKCc7JykgKydcIj48ZGVmcz4nICsgY29udGVudFBsYWNlSG9sZGVyICsgJzwvZGVmcz4nICsgc3ZnQ2xvc2luZztcblNwcml0ZS5zeW1ib2xUZW1wbGF0ZSA9IHN2Z09wZW5pbmcgKyAnPicgKyBjb250ZW50UGxhY2VIb2xkZXIgKyBzdmdDbG9zaW5nO1xuXG4vKipcbiAqIEB0eXBlIHtBcnJheTxTdHJpbmc+fVxuICovXG5TcHJpdGUucHJvdG90eXBlLmNvbnRlbnQgPSBudWxsO1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29udGVudCwgaWQpIHtcbiAgaWYgKHRoaXMuc3ZnKSB7XG4gICAgdGhpcy5hcHBlbmRTeW1ib2woY29udGVudCk7XG4gIH1cblxuICB0aGlzLmNvbnRlbnQucHVzaChjb250ZW50KTtcblxuICByZXR1cm4gREVGQVVMVF9VUklfUFJFRklYICsgaWQ7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gY29udGVudFxuICogQHBhcmFtIHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7RWxlbWVudH1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS53cmFwU1ZHID0gZnVuY3Rpb24gKGNvbnRlbnQsIHRlbXBsYXRlKSB7XG4gIHZhciBzdmdTdHJpbmcgPSB0ZW1wbGF0ZS5yZXBsYWNlKGNvbnRlbnRQbGFjZUhvbGRlciwgY29udGVudCk7XG5cbiAgdmFyIHN2ZyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3ZnU3RyaW5nLCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIChJRSwgbWF5YmUgb3RoZXIgdG9vKSB3aGljaCBhcmUgdGhyb3dpbmcgJ1dyb25nRG9jdW1lbnRFcnJvcidcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzk4MTEwMC9ob3ctZG8taS1keW5hbWljYWxseS1pbnNlcnQtYW4tc3ZnLWltYWdlLWludG8taHRtbCM3OTg2NTE5XG4gICAqL1xuICBpZiAoZG9jdW1lbnQuaW1wb3J0Tm9kZSkge1xuICAgIHN2ZyA9IGRvY3VtZW50LmltcG9ydE5vZGUoc3ZnLCB0cnVlKTtcbiAgfVxuXG4gIGlmICh0aGlzLmJyb3dzZXIubmFtZSAhPT0gJ2llJyAmJiB0aGlzLnVybFByZWZpeCkge1xuICAgIGJhc2VVcmxXb3JrQXJvdW5kKHN2ZywgREVGQVVMVF9VUklfUFJFRklYLCB0aGlzLnVybFByZWZpeCk7XG4gIH1cblxuICByZXR1cm4gc3ZnO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5hcHBlbmRTeW1ib2wgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgc3ltYm9sID0gdGhpcy53cmFwU1ZHKGNvbnRlbnQsIFNwcml0ZS5zeW1ib2xUZW1wbGF0ZSkuY2hpbGROb2Rlc1swXTtcblxuICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdkZWZzJykuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgaWYgKHRoaXMuYnJvd3Nlci5uYW1lID09PSAnZmlyZWZveCcpIHtcbiAgICBGaXJlZm94U3ltYm9sQnVnV29ya2Fyb3VuZCh0aGlzLnN2Zyk7XG4gIH1cbn07XG5cbi8qKlxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKTtcbiAgcmV0dXJuIHdyYXBwZXIuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbdGFyZ2V0XVxuICogQHBhcmFtIHtCb29sZWFufSBbcHJlcGVuZD10cnVlXVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZW5kZXJlZCBzcHJpdGUgbm9kZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHByZXBlbmQpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0IHx8IG51bGw7XG4gIHByZXBlbmQgPSB0eXBlb2YgcHJlcGVuZCA9PT0gJ2Jvb2xlYW4nID8gcHJlcGVuZCA6IHRydWU7XG5cbiAgdmFyIHN2ZyA9IHRoaXMud3JhcFNWRyh0aGlzLmNvbnRlbnQuam9pbignJyksIFNwcml0ZS5zcHJpdGVUZW1wbGF0ZSk7XG5cbiAgaWYgKHRoaXMuYnJvd3Nlci5uYW1lID09PSAnZmlyZWZveCcpIHtcbiAgICBGaXJlZm94U3ltYm9sQnVnV29ya2Fyb3VuZChzdmcpO1xuICB9XG5cbiAgaWYgKHRhcmdldCkge1xuICAgIGlmIChwcmVwZW5kICYmIHRhcmdldC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHN2ZywgdGFyZ2V0LmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnN2ZyA9IHN2ZztcblxuICByZXR1cm4gc3ZnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL3Nwcml0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24oaG9zdCkge1xuXG4gIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgIGJyb3dzZXI6IFtcbiAgICAgIFsvbXNpZSAoW1xcLlxcX1xcZF0rKS8sIFwiaWVcIl0sXG4gICAgICBbL3RyaWRlbnRcXC8uKj9ydjooW1xcLlxcX1xcZF0rKS8sIFwiaWVcIl0sXG4gICAgICBbL2ZpcmVmb3hcXC8oW1xcLlxcX1xcZF0rKS8sIFwiZmlyZWZveFwiXSxcbiAgICAgIFsvY2hyb21lXFwvKFtcXC5cXF9cXGRdKykvLCBcImNocm9tZVwiXSxcbiAgICAgIFsvdmVyc2lvblxcLyhbXFwuXFxfXFxkXSspLio/c2FmYXJpLywgXCJzYWZhcmlcIl0sXG4gICAgICBbL21vYmlsZSBzYWZhcmkgKFtcXC5cXF9cXGRdKykvLCBcInNhZmFyaVwiXSxcbiAgICAgIFsvYW5kcm9pZC4qP3ZlcnNpb25cXC8oW1xcLlxcX1xcZF0rKS4qP3NhZmFyaS8sIFwiY29tLmFuZHJvaWQuYnJvd3NlclwiXSxcbiAgICAgIFsvY3Jpb3NcXC8oW1xcLlxcX1xcZF0rKS4qP3NhZmFyaS8sIFwiY2hyb21lXCJdLFxuICAgICAgWy9vcGVyYS8sIFwib3BlcmFcIl0sXG4gICAgICBbL29wZXJhXFwvKFtcXC5cXF9cXGRdKykvLCBcIm9wZXJhXCJdLFxuICAgICAgWy9vcGVyYSAoW1xcLlxcX1xcZF0rKS8sIFwib3BlcmFcIl0sXG4gICAgICBbL29wZXJhIG1pbmkuKj92ZXJzaW9uXFwvKFtcXC5cXF9cXGRdKykvLCBcIm9wZXJhLm1pbmlcIl0sXG4gICAgICBbL29waW9zXFwvKFthLXpcXC5cXF9cXGRdKykvLCBcIm9wZXJhXCJdLFxuICAgICAgWy9ibGFja2JlcnJ5LywgXCJibGFja2JlcnJ5XCJdLFxuICAgICAgWy9ibGFja2JlcnJ5Lio/dmVyc2lvblxcLyhbXFwuXFxfXFxkXSspLywgXCJibGFja2JlcnJ5XCJdLFxuICAgICAgWy9iYlxcZCsuKj92ZXJzaW9uXFwvKFtcXC5cXF9cXGRdKykvLCBcImJsYWNrYmVycnlcIl0sXG4gICAgICBbL3JpbS4qP3ZlcnNpb25cXC8oW1xcLlxcX1xcZF0rKS8sIFwiYmxhY2tiZXJyeVwiXSxcbiAgICAgIFsvaWNld2Vhc2VsXFwvKFtcXC5cXF9cXGRdKykvLCBcImljZXdlYXNlbFwiXSxcbiAgICAgIFsvZWRnZVxcLyhbXFwuXFxkXSspLywgXCJlZGdlXCJdXG4gICAgXSxcbiAgICBvczogW1xuICAgICAgWy9saW51eCAoKShbYS16XFwuXFxfXFxkXSspLywgXCJsaW51eFwiXSxcbiAgICAgIFsvbWFjIG9zIHgvLCBcIm1hY29zXCJdLFxuICAgICAgWy9tYWMgb3MgeC4qPyhbXFwuXFxfXFxkXSspLywgXCJtYWNvc1wiXSxcbiAgICAgIFsvb3MgKFtcXC5cXF9cXGRdKykgbGlrZSBtYWMgb3MvLCBcImlvc1wiXSxcbiAgICAgIFsvb3BlbmJzZCAoKShbYS16XFwuXFxfXFxkXSspLywgXCJvcGVuYnNkXCJdLFxuICAgICAgWy9hbmRyb2lkLywgXCJhbmRyb2lkXCJdLFxuICAgICAgWy9hbmRyb2lkIChbYS16XFwuXFxfXFxkXSspOy8sIFwiYW5kcm9pZFwiXSxcbiAgICAgIFsvbW96aWxsYVxcL1thLXpcXC5cXF9cXGRdKyBcXCgoPzptb2JpbGUpfCg/OnRhYmxldCkvLCBcImZpcmVmb3hvc1wiXSxcbiAgICAgIFsvd2luZG93c1xccyooPzpudCk/XFxzKihbXFwuXFxfXFxkXSspLywgXCJ3aW5kb3dzXCJdLFxuICAgICAgWy93aW5kb3dzIHBob25lLio/KFtcXC5cXF9cXGRdKykvLCBcIndpbmRvd3MucGhvbmVcIl0sXG4gICAgICBbL3dpbmRvd3MgbW9iaWxlLywgXCJ3aW5kb3dzLm1vYmlsZVwiXSxcbiAgICAgIFsvYmxhY2tiZXJyeS8sIFwiYmxhY2tiZXJyeW9zXCJdLFxuICAgICAgWy9iYlxcZCsvLCBcImJsYWNrYmVycnlvc1wiXSxcbiAgICAgIFsvcmltLio/b3NcXHMqKFtcXC5cXF9cXGRdKykvLCBcImJsYWNrYmVycnlvc1wiXVxuICAgIF0sXG4gICAgZGV2aWNlOiBbXG4gICAgICBbL2lwYWQvLCBcImlwYWRcIl0sXG4gICAgICBbL2lwaG9uZS8sIFwiaXBob25lXCJdLFxuICAgICAgWy9sdW1pYS8sIFwibHVtaWFcIl0sXG4gICAgICBbL2h0Yy8sIFwiaHRjXCJdLFxuICAgICAgWy9uZXh1cy8sIFwibmV4dXNcIl0sXG4gICAgICBbL2dhbGF4eSBuZXh1cy8sIFwiZ2FsYXh5Lm5leHVzXCJdLFxuICAgICAgWy9ub2tpYS8sIFwibm9raWFcIl0sXG4gICAgICBbLyBndFxcLS8sIFwiZ2FsYXh5XCJdLFxuICAgICAgWy8gc21cXC0vLCBcImdhbGF4eVwiXSxcbiAgICAgIFsveGJveC8sIFwieGJveFwiXSxcbiAgICAgIFsvKD86YmJcXGQrKXwoPzpibGFja2JlcnJ5KXwoPzogcmltICkvLCBcImJsYWNrYmVycnlcIl1cbiAgICBdXG4gIH07XG5cbiAgdmFyIFVOS05PV04gPSBcIlVua25vd25cIjtcblxuICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xuXG4gIGZ1bmN0aW9uIFNuaWZmcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICBzZWxmW3Byb3BlcnR5TmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IFVOS05PV04sXG4gICAgICAgIHZlcnNpb246IFtdLFxuICAgICAgICB2ZXJzaW9uU3RyaW5nOiBVTktOT1dOXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lUHJvcGVydHkoc2VsZiwgcHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0uZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU1hdGNoZXIpIHtcbiAgICAgIHZhciBwcm9wZXJ0eVJlZ2V4ID0gcHJvcGVydHlNYXRjaGVyWzBdO1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0eU1hdGNoZXJbMV07XG5cbiAgICAgIHZhciBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaChwcm9wZXJ0eVJlZ2V4KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHNlbGZbcHJvcGVydHlOYW1lXS5uYW1lID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICBpZiAobWF0Y2hbMl0pIHtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvblN0cmluZyA9IG1hdGNoWzJdO1xuICAgICAgICAgIHNlbGZbcHJvcGVydHlOYW1lXS52ZXJzaW9uID0gW107XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvblN0cmluZyA9IG1hdGNoWzFdLnJlcGxhY2UoL18vZywgXCIuXCIpO1xuICAgICAgICAgIHNlbGZbcHJvcGVydHlOYW1lXS52ZXJzaW9uID0gcGFyc2VWZXJzaW9uKG1hdGNoWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvblN0cmluZyA9IFVOS05PV047XG4gICAgICAgICAgc2VsZltwcm9wZXJ0eU5hbWVdLnZlcnNpb24gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb25TdHJpbmcpIHtcbiAgICByZXR1cm4gdmVyc2lvblN0cmluZy5zcGxpdCgvW1xcLl9dLykubWFwKGZ1bmN0aW9uKHZlcnNpb25QYXJ0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmVyc2lvblBhcnQpO1xuICAgIH0pO1xuICB9XG5cbiAgU25pZmZyLnByb3RvdHlwZS5zbmlmZiA9IGZ1bmN0aW9uKHVzZXJBZ2VudFN0cmluZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdXNlckFnZW50ID0gKHVzZXJBZ2VudFN0cmluZyB8fCBuYXZpZ2F0b3IudXNlckFnZW50IHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICBkZXRlcm1pbmVQcm9wZXJ0eShzZWxmLCBwcm9wZXJ0eU5hbWUsIHVzZXJBZ2VudCk7XG4gICAgfSk7XG4gIH07XG5cblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNuaWZmcjtcbiAgfSBlbHNlIHtcbiAgICBob3N0LlNuaWZmciA9IG5ldyBTbmlmZnIoKTtcbiAgICBob3N0LlNuaWZmci5zbmlmZihuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgfVxufSkodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zbmlmZnIvc3JjL3NuaWZmci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTA4IDE5OFxcXCIgaWQ9XFxcImFycm93XFxcIiA+PHBhdGggZD1cXFwiTTEwMS44ODMgMTk3LjQwMkwuMjU1IDk4LjY5OCAxMDEuODgzIDBsNS4yNjUgNS40MTgtOTYuMDQgOTMuMjggOTYuMDQgOTMuMjgyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiYXJyb3dcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvYXJyb3cuc3ZnXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAzMDYgMzA2XFxcIiBpZD1cXFwiYXJyb3cyXFxcIiA+PHBhdGggZD1cXFwiTTk0LjM1IDBsLTM1LjcgMzUuN0wxNzUuOTUgMTUzIDU4LjY1IDI3MC4zbDM1LjcgMzUuNyAxNTMtMTUzXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiYXJyb3cyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Fycm93Mi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDM3Ny41ODIgMzc3LjU4MlxcXCIgaWQ9XFxcImJhZ1xcXCIgPjxwYXRoIGQ9XFxcIk0zMzMuNzIgMzYyLjYzTDMyMC4zMyAxMDQuMDY2Yy0uMzczLTcuMTk0LTYuMzE1LTEyLjgzNi0xMy41MTctMTIuODM2SDI2Ny4zMVY3OC41MjZDMjY3LjMxIDM1LjIyNSAyMzIuMDggMCAxODguNzggMGMtNDMuMyAwLTc4LjUyMyAzNS4yMjYtNzguNTIzIDc4LjUyNVY5MS4yM0g3MC43NWMtNy4yMDMgMC0xMy4xNDYgNS42NDMtMTMuNTIgMTIuODM3TDQzLjgxIDM2My4zNDVjLS4xOTIgMy43MDYgMS4xNDYgNy4zMyAzLjcwMiAxMC4wMiAyLjU1NSAyLjY5MiA2LjEwNCA0LjIxNyA5LjgxNiA0LjIxN2gyNjIuOTNjNy40NzUgMCAxMy41MzQtNi4wNiAxMy41MzQtMTMuNTM2IDAtLjQ4LS4wMjQtLjk1Mi0uMDczLTEuNDE3ek0xMjkuNTQgMTQ2LjAyYy04LjAwNiAwLTE0LjUtNi40OTItMTQuNS0xNC41czYuNDk0LTE0LjUgMTQuNS0xNC41YzguMDA4IDAgMTQuNSA2LjQ5NCAxNC41IDE0LjVzLTYuNDkyIDE0LjUtMTQuNSAxNC41em05Ny40OTctNTQuNzloLTc2LjUxVjc4LjUyNmMwLTIxLjA5NSAxNy4xNi0zOC4yNTUgMzguMjUzLTM4LjI1NSAyMS4wOTYgMCAzOC4yNTcgMTcuMTYgMzguMjU3IDM4LjI1NVY5MS4yM3ptMjEuMDA0IDU0Ljc5Yy04LjAwNiAwLTE0LjUtNi40OTItMTQuNS0xNC41czYuNDk0LTE0LjUgMTQuNS0xNC41YzguMDA4IDAgMTQuNSA2LjQ5NCAxNC41IDE0LjVzLTYuNDkyIDE0LjUtMTQuNSAxNC41elxcXCIgZmlsbD1cXFwiIzIzMUYyMFxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImJhZ1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9iYWcuc3ZnXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAzOTUuMDI1IDM5NS4wMjVcXFwiIGlkPVxcXCJiYWcyXFxcIiA+PHBhdGggZD1cXFwiTTM1Ny41MDcgMzgwLjk4MmwtMTkuNTkzLTI5OC43NmMtLjQzLTYuNTctNS44ODctMTEuNjgtMTIuNDczLTExLjY4aC01NC42OVY2Mi41YzAtMzQuNDYyLTI4LjAzNy02Mi41LTYyLjUtNjIuNWgtMjEuNDk0Yy0zNC40NjIgMC02Mi41IDI4LjAzOC02Mi41IDYyLjV2OC4wNGgtNTQuNjljLTYuNTg2IDAtMTIuMDQyIDUuMTEtMTIuNDczIDExLjY4M0wzNy40NSAzODEuNzFjLS4yMjcgMy40NDguOTg2IDYuODM3IDMuMzUgOS4zNiAyLjM2NCAyLjUyNSA1LjY2NiAzLjk1NSA5LjEyNCAzLjk1NWgyOTUuMThjNi45MDIgMCAxMi41LTUuNTk2IDEyLjUtMTIuNS0uMDAzLS41Mi0uMDM0LTEuMDM3LS4wOTctMS41NDN6TTE0OS4yNTUgNjIuNWMwLTIwLjY3OCAxNi44MjItMzcuNSAzNy41LTM3LjVoMjEuNDk1YzIwLjY3OCAwIDM3LjUgMTYuODIyIDM3LjUgMzcuNXY4LjA0aC05Ni40OTVWNjIuNXpNNjMuMjcgMzcwLjAyNUw4MS4yNzIgOTUuNTQyaDQyLjk4M3YxMS4xNTRjLTguODk1IDQuNTYtMTUgMTMuODE4LTE1IDI0LjQ4MiAwIDE1LjE2NCAxMi4zMzYgMjcuNSAyNy41IDI3LjVzMjcuNS0xMi4zMzYgMjcuNS0yNy41YzAtMTAuNjY0LTYuMTA1LTE5LjkyMi0xNS0yNC40ODJWOTUuNTQyaDk2LjQ5NXYxMS4xNTRjLTguODk2IDQuNTYtMTUgMTMuODE4LTE1IDI0LjQ4MiAwIDE1LjE2NCAxMi4zMzYgMjcuNSAyNy41IDI3LjVzMjcuNS0xMi4zMzYgMjcuNS0yNy41YzAtMTAuNjY0LTYuMTA1LTE5LjkyMi0xNS0yNC40ODJWOTUuNTQyaDQyLjk4M2wxOC4wMDIgMjc0LjQ4M0g2My4yN3pcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJiYWcyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2JhZzIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OCA0OFxcXCIgaWQ9XFxcImNhcnRcXFwiID48cGF0aCBkPVxcXCJNMTUuNzMzIDIwLjEyNWMxLjEwNCAwIDItLjg5NiAyLTJ2LTcuOEMxNy43MzMgNi44MzggMjAuNTcgNCAyNC4wNTggNGMzLjQ4NyAwIDYuMzI1IDIuODM4IDYuMzI1IDYuMzI1djcuOGMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi03LjhDMzQuMzgzIDQuNjMyIDI5Ljc1IDAgMjQuMDU4IDBjLTUuNjkyIDAtMTAuMzI0IDQuNjMyLTEwLjMyNCAxMC4zMjV2Ny44YzAgMS4xMDQuODk1IDIgMiAyelxcXCIvPjxwYXRoIGQ9XFxcIk00NyAxNS42M0gzNi4zODN2Mi40OTVjMCAyLjIwNi0xLjc5NCA0LTQgNC0yLjIwNSAwLTQtMS43OTQtNC00VjE1LjYzaC04LjY1djIuNDk1YzAgMi4yMDYtMS43OTMgNC00IDRzLTQtMS43OTQtNC00VjE1LjYzSDFjLS41NTIgMC0uODkzLjQzNi0uNzYyLjk3Mkw3LjIzNSA0NS4xQzcuNjU4IDQ2LjcwMiA5LjM0MyA0OCAxMSA0OGgyNmMxLjY1OCAwIDMuMzQyLTEuMyAzLjc2Ny0yLjlsNi45OTYtMjguNDk4Yy4xMy0uNTM3LS4yMS0uOTctLjc2My0uOTd6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiY2FydFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9jYXJ0LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDU1Ljk5MiA0NTUuOTkyXFxcIiBpZD1cXFwiY2xvc2UxXFxcIiA+PHBhdGggZD1cXFwiTTIyNy45OTYgMEMxMDIuMDggMCAwIDEwMi4wOCAwIDIyNy45OTYgMCAzNTMuOTQgMTAyLjA4IDQ1NS45OTIgMjI3Ljk5NiA0NTUuOTkyYzEyNS45NDUgMCAyMjcuOTk2LTEwMi4wNSAyMjcuOTk2LTIyNy45OTZDNDU1Ljk5MiAxMDIuMDggMzUzLjk0MiAwIDIyNy45OTYgMHptMCA0MjUuNTkzYy0xMDguOTUyIDAtMTk3LjU5Ny04OC42NDUtMTk3LjU5Ny0xOTcuNTk3UzExOS4wNDMgMzAuNCAyMjcuOTk1IDMwLjRzMTk3LjU5NyA4OC42NDQgMTk3LjU5NyAxOTcuNTk2LTg4LjY0NSAxOTcuNTk3LTE5Ny41OTcgMTk3LjU5N3pcXFwiLz48cGF0aCBkPVxcXCJNMzEyLjE0MiAxMjIuMzU4bC04My41MzggODMuNTY4LTc0Ljk2NS04My41NjhjLTUuOTMtNS45MjgtMTUuNTY2LTUuOTI4LTIxLjQ5MyAwLTUuOTI4IDUuOTI4LTUuOTI4IDE1LjU2NSAwIDIxLjQ5Mmw3NC45NjUgODMuNTY4LTg0LjcyMyA4NC43MjNjLTUuOTMgNS45My01LjkzIDE1LjU5NiAwIDIxLjQ5MyA1LjkyNyA1LjkyOCAxNS41NjQgNS45MjggMjEuNDkgMGw4My41Ny04My41MzggNzQuOTY0IDgzLjUzOGM1Ljg5NyA1LjkyOCAxNS41NjUgNS45MjggMjEuNDYyIDAgNS45MjgtNS44OTggNS45MjgtMTUuNTY1IDAtMjEuNDkybC03NC45OTUtODMuNTM3IDg0LjcyNC04NC43NTRjNS45MjgtNS45MyA1LjkyOC0xNS41NjYgMC0yMS40OTMtNS45MjgtNS45MjctMTUuNTM0LTUuOTI3LTIxLjQ2MiAwelxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImNsb3NlMVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9jbG9zZTEuc3ZnXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0NzYuNzM3IDQ3Ni43MzdcXFwiIGlkPVxcXCJjbG9zZTJcXFwiID48cGF0aCBkPVxcXCJNMjM4LjM3IDBDMTA2LjcyNSAwIDAgMTA2LjcyNiAwIDIzOC4zN2MwIDEzMS42NzQgMTA2LjcyNiAyMzguMzY4IDIzOC4zNyAyMzguMzY4IDEzMS42NzQgMCAyMzguMzY4LTEwNi42OTQgMjM4LjM2OC0yMzguMzdDNDc2LjczOCAxMDYuNzI3IDM3MC4wNDMgMCAyMzguMzY4IDB6bTExMC40NDMgMTUwLjM5NWwtODguNTc4IDg4LjYxIDc4LjQwNyA4Ny4zMzhjNi4xOTggNi4xOTggNi4xOTggMTYuMzA0IDAgMjIuNDctNi4xNjYgNi4xOTgtMTYuMjczIDYuMTk4LTIyLjQzOCAwbC03OC40MDctODcuMzM4LTg3LjM3IDg3LjMzOGMtNi4xOTggNi4xOTgtMTYuMjczIDYuMTk4LTIyLjQ3IDAtNi4xOTgtNi4xNjYtNi4xOTgtMTYuMjczIDAtMjIuNDdsODguNTc4LTg4LjU3OC03OC4zNzYtODcuMzdjLTYuMi02LjE5OC02LjItMTYuMjczIDAtMjIuNDdzMTYuMjcyLTYuMTk4IDIyLjQ3IDBsNzguNDA2IDg3LjM3IDg3LjMzOC04Ny4zN2M2LjE5OC02LjE5OCAxNi4yNzMtNi4xOTggMjIuNDcgMCA2LjE5OCA2LjE5NyA2LjE2NiAxNi4yNzItLjAzIDIyLjQ3elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImNsb3NlMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9jbG9zZTIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAzMC41MTEgMzAuNTExXFxcIiBpZD1cXFwiY29tbWVyY2VcXFwiID48cGF0aCBkPVxcXCJNMjYuODE4IDE5LjAzN0wzMC40MjUgOC4yNGMuMTgtLjUxOC4wNDQtLjgzLS4xMDItMS4wMzYtLjM3NC0uNTI3LTEuMTQzLS41MzItMS4yOTItLjUzMkw4LjY0NyA2LjY2OGwtLjU0NC0yLjU4Yy0uMTQ3LS42MS0uNTgtMS4xOS0xLjQ1Ni0xLjE5SC45MTZjLS41OTMgMC0uOTE2LjI3Ny0uOTE2LjgzMnYxLjQ5YzAgLjUzNy4zMjIuNjc3LjkzOC42NzdoNC44MzdsMy43MDIgMTUuNzE3Yy0uNTg4LjYyMy0uOTA4IDEuNTMtLjkwOCAyLjM3OCAwIDEuODY0IDEuNDgzIDMuNTgyIDMuMzggMy41ODIgMS43OSAwIDMuMTMtMS42NzcgMy4zNS0yLjY3N2g3LjIxYy4yMTcgMSAxLjMwNCAyLjcxNyAzLjM0OCAyLjcxNyAxLjg2MyAwIDMuMzc4LTEuNjE0IDMuMzc4LTMuNDc1IDAtMS44NTItMS4xMjUtMy40OTMtMy4zNi0zLjQ5My0uOTI4IDAtMi4wMy41LTIuNTQyIDEuMjVoLTguODZjLS42NDItMS0xLjUyLTEuMzEtMi40MDgtMS4zNDVsLS4xMjMtLjY1NWgxMy40OGMxLjAxNSAwIDEuMjE1LS4zNyAxLjM5NS0uODZ6bS0uOTM1IDMuNzljLjcgMCAxLjI3LjU3IDEuMjcgMS4yN3MtLjU3IDEuMjctMS4yNyAxLjI3LTEuMjctLjU2Ny0xLjI3LTEuMjdjMC0uNy41Ny0xLjI3IDEuMjctMS4yN3ptLTEyLjY3OCAxLjI3YzAgLjcxLS41NzYgMS4yODctMS4yODMgMS4yODctLjcxLS4wMDItMS4yODYtLjU3Ny0xLjI4Ni0xLjI4NnMuNTc3LTEuMjg2IDEuMjg2LTEuMjg2Yy43MDcgMCAxLjI4My41NzcgMS4yODMgMS4yODZ6XFxcIiBmaWxsPVxcXCIjMDEwMDAyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiY29tbWVyY2VcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvY29tbWVyY2Uuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1MTAgNTEwXFxcIiBpZD1cXFwiZmF2b3JpdGVcXFwiID48cGF0aCBkPVxcXCJNMjU1IDQwMi4yMTJsMTU3LjU5IDk1LjAzOC00MS42OTMtMTc5LjI0TDUxMCAxOTcuNDczbC0xODMuMzctMTUuNzM0TDI1NSAxMi43NWwtNzEuNjMgMTY4Ljk4OEwwIDE5Ny40NzJsMTM5LjEwMyAxMjAuNTRMOTcuNDEgNDk3LjI1XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiZmF2b3JpdGVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZmF2b3JpdGUuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1MTAgNTEwXFxcIiBpZD1cXFwiZmF2b3JpdGUyXFxcIiA+PHBhdGggZD1cXFwiTTUxMCAxOTcuNDcybC0xODMuMzctMTUuNzM0TDI1NSAxMi43NWwtNzEuNjMgMTY4Ljk4OEwwIDE5Ny40NzJsMTM5LjEwMyAxMjAuNTRMOTcuNDEgNDk3LjI1IDI1NSA0MDIuMTg2bDE1Ny41OSA5NS4wNjQtNDEuNjkyLTE3OS4yNEw1MTAgMTk3LjQ3M3pNMjU1IDM1NC4zNDhsLTk1Ljk1NyA1Ny44ODYgMjUuMzk4LTEwOS4xNjYtODQuNzM1LTczLjM5IDExMS42OS05LjU4N0wyNTUgMTE3LjE3M2w0My42MDUgMTAyLjkxOCAxMTEuNjkgOS41ODgtODQuNzEyIDczLjM5IDI1LjM5OCAxMDkuMTY1TDI1NSAzNTQuMzQ4elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImZhdm9yaXRlMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9mYXZvcml0ZTIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwiZmJcXFwiID48cGF0aCBkPVxcXCJNMjQuODI2IDBDMTEuMTM2IDAgMCAxMS4xMzcgMCAyNC44MjZjMCAxMy42ODggMTEuMTM3IDI0LjgyNiAyNC44MjYgMjQuODI2IDEzLjY4OCAwIDI0LjgyNi0xMS4xMzggMjQuODI2LTI0LjgyNkM0OS42NTIgMTEuMTM2IDM4LjUxNiAwIDI0LjgyNiAwek0zMSAyNS43aC00LjA0djE0LjM5NmgtNS45ODRWMjUuN0gxOC4xM3YtNS4wODhoMi44NDZ2LTMuMjljMC0yLjM1OCAxLjEyLTYuMDQgNi4wNC02LjA0bDQuNDM1LjAxNnY0Ljk0aC0zLjIxOGMtLjUyNCAwLTEuMjcuMjYtMS4yNyAxLjM4NXYyLjk5aDQuNTZMMzEgMjUuN3pcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJmYlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9mYi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDkgMTZcXFwiIGlkPVxcXCJmYjJcXFwiID48dGl0bGU+RmFjZWJvb2s8L3RpdGxlPjxwYXRoIGQ9XFxcIk03LjgyNyA4LjE2Nkg1LjYxdjcuNDk0SDIuMzJWOC4xNjZILjc2di0yLjY1aDEuNTYyVjMuODA1QzIuMzIyIDIuNTc3IDIuOTM3LjY2IDUuNjQuNjZsMi40MzUuMDF2Mi41N0g2LjMwN2MtLjI4OCAwLS42OTcuMTM2LS42OTcuNzJWNS41MmgyLjUwNWwtLjI4OCAyLjY0OHpcXFwiIGZpbGw9XFxcIiMzNDM0MzRcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImZiMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9mYjIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwiZ29vZ2xlLXBsdXNcXFwiID48cGF0aCBkPVxcXCJNMjEuNSAyOC45NGMtLjE2LS4xMDctLjMyNi0uMjIzLS41LS4zNC0uNTAyLS4xNTQtMS4wMzYtLjIzNC0xLjU4My0uMjRoLS4wNjZjLTIuNTEzIDAtNC43MTcgMS41Mi00LjcxNyAzLjI1NiAwIDEuODkgMS44OSAzLjM2NyA0LjMgMy4zNjcgMy4xNzggMCA0Ljc5LTEuMDk4IDQuNzktMy4yNTggMC0uMjA0LS4wMjUtLjQxNi0uMDc2LS42My0uMjE1LS44MzctLjk4NC0xLjM2LTIuMTQ3LTIuMTU1ek0xOS43MiAyMi4zNTJjLjYwMiAwIDEuMTEtLjIzNyAxLjUwMi0uNjg3LjYxNi0uNzAyLjg5LTEuODU0LjcyNy0zLjA3Ny0uMjg2LTIuMTg2LTEuODUtNC4wMDYtMy40OC00LjA1M2wtLjA2NS0uMDAyYy0uNTc3IDAtMS4wOTIuMjM4LTEuNDgzLjY4Ni0uNjA3LjY5Mi0uODY0IDEuNzktLjcwNSAzLjAxLjI4NiAyLjE4NSAxLjg4MiA0LjA3MiAzLjQ4IDQuMTIyaC4wMjJ6XFxcIi8+PHBhdGggZD1cXFwiTTI0LjgyNiAwQzExLjEzNiAwIDAgMTEuMTM3IDAgMjQuODI2YzAgMTMuNjg4IDExLjEzNyAyNC44MjYgMjQuODI2IDI0LjgyNiAxMy42ODggMCAyNC44MjYtMTEuMTM4IDI0LjgyNi0yNC44MjZDNDkuNjUyIDExLjEzNiAzOC41MTYgMCAyNC44MjYgMHptLTIuODYyIDM2LjkxNWMtLjkzOC4yNy0xLjk1My40MDgtMy4wMTguNDA4LTEuMTg2IDAtMi4zMjYtLjEzNi0zLjM5LS40MDUtMi4wNTYtLjUyLTMuNTc2LTEuNTAzLTQuMjg2LTIuNzctLjMwNi0uNTUtLjQ2LTEuMTMzLS40Ni0xLjczOCAwLS42MjMuMTQ4LTEuMjU1LjQ0Mi0xLjg4IDEuMTI3LTIuNDAzIDQuMDk4LTQuMDIgNy4zOS00LjAyaC4wOTNjLS4yNjctLjQ3LS4zOTYtLjk1OC0uMzk2LTEuNDcgMC0uMjU2LjAzMy0uNTE2LjEtLjc4LTMuNDUtLjA4LTYuMDM0LTIuNjA3LTYuMDM0LTUuOTQgMC0yLjM1MyAxLjg4LTQuNjQ2IDQuNTctNS41NzIuODA2LS4yNzggMS42MjctLjQyIDIuNDM0LS40Mmg3LjM4MmMuMjUgMCAuNDc0LjE2My41NTIuNDAyLjA3OC4yMzgtLjAwOC41LS4yMS42NDdsLTEuNjUyIDEuMTk1Yy0uMS4wNy0uMjE4LjEwOC0uMzQuMTA4aC0uNTkyYy43NjMuOTE1IDEuMjEgMi4yMiAxLjIxIDMuNjg1IDAgMS42MTctLjgxOCAzLjE0Ni0yLjMwNyA0LjMxLTEuMTUuODk3LTEuMTk1IDEuMTQ0LTEuMTk1IDEuNjU1LjAxNC4yOC44MTUgMS4xOTggMS43IDEuODIzIDIuMDU4IDEuNDU2IDIuODI0IDIuODg1IDIuODI0IDUuMjcgMCAyLjQ5LTEuODkyIDQuNjQyLTQuODE4IDUuNDkyem0xNi42Ny0xMi42NjJjMCAuMzItLjI2LjU4LS41OC41OEgzMy44NnY0LjE5N2MwIC4zMi0uMjYuNTgtLjU3OC41OGgtMS4xOTVjLS4zMjIgMC0uNTgyLS4yNi0uNTgyLS41OHYtNC4xOTdoLTQuMTkyYy0uMzIgMC0uNTgtLjI1OC0uNTgtLjU4VjIzLjA2YzAtLjMyLjI2LS41ODIuNTgtLjU4Mmg0LjE5MnYtNC4xOTNjMC0uMzIuMjYtLjU4LjU4Mi0uNThoMS4xOTVjLjMxNyAwIC41NzguMjYuNTc4LjU4djQuMTkzaDQuMTk0Yy4zMiAwIC41OC4yNi41OC41OHYxLjE5NXpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJnb29nbGUtcGx1c1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9nb29nbGUtcGx1cy5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE4IDE2XFxcIiBpZD1cXFwiZ29vZ2xlLXBsdXMyXFxcIiA+PHRpdGxlPmdvb2dsZSs8L3RpdGxlPjxwYXRoIGQ9XFxcIk03LjEyIDEwLjYzYy0uMTAzLS4wNjUtLjIwOC0uMTM1LS4zMTctLjIwNS0uMzItLjA5Mi0uNjU3LS4xNC0xLjAwMy0uMTQ1aC0uMDQyYy0xLjU5IDAtMi45ODcuOTEzLTIuOTg3IDEuOTU1IDAgMS4xMzQgMS4xOTcgMi4wMiAyLjcyMyAyLjAyIDIuMDEzIDAgMy4wMzMtLjY1OCAzLjAzMy0xLjk1NCAwLS4xMjItLjAxNi0uMjUtLjA0OC0uMzc3LS4xMzYtLjUwMy0uNjIzLS44MTctMS4zNi0xLjI5NHptLjI5MyA0Ljc4NWMtLjU5NC4xNjMtMS4yMzcuMjQ1LTEuOTEuMjQ1LS43NTIgMC0xLjQ3NC0uMDgyLTIuMTQ3LS4yNDMtMS4zMDItLjMxMi0yLjI2NS0uOTAyLTIuNzE0LTEuNjYzLS4xOTQtLjMzLS4yOTItLjY4LS4yOTItMS4wNDIgMC0uMzc0LjA5NC0uNzU0LjI4LTEuMTMuNzE0LTEuNDQgMi41OTUtMi40MSA0LjY4LTIuNDFoLjA1OGMtLjE3LS4yODMtLjI1LS41NzYtLjI1LS44ODQgMC0uMTUzLjAyLS4zMS4wNjQtLjQ2OC0yLjE4Ni0uMDQ3LTMuODItMS41NjQtMy44Mi0zLjU2NCAwLTEuNDEyIDEuMTktMi43ODggMi44OTMtMy4zNDQuNTEtLjE2NyAxLjAzLS4yNTIgMS41NC0uMjUyaDQuNjc0Yy4xNTggMCAuMy4wOTguMzUuMjQuMDQ4LjE0NC0uMDA2LjMtLjEzNS4zOWwtMS4wNDUuNzE3Yy0uMDYzLjA0Mi0uMTM4LjA2NC0uMjE2LjA2NEg5LjA1Yy40ODMuNTUuNzY2IDEuMzM0Ljc2NiAyLjIxMyAwIC45Ny0uNTE4IDEuODg4LTEuNDYgMi41ODctLjczLjUzOC0uNzU3LjY4Ni0uNzU3Ljk5My4wMDguMTY4LjUxNS43MiAxLjA3NCAxLjA5NCAxLjMwNC44NzMgMS43OSAxLjczIDEuNzkgMy4xNjItLjAwMiAxLjQ5NC0xLjIgMi43ODUtMy4wNSAzLjI5NXptMTAuNTU1LTcuNmMwIC4xOTMtLjE2Ni4zNS0uMzY4LjM1aC0yLjY1NnYyLjUxOGMwIC4xOTItLjE2NS4zNDgtLjM2Ni4zNDhoLS43NTZjLS4yMDQgMC0uMzctLjE1NS0uMzctLjM0N3YtMi41MkgxMC44Yy0uMjAzIDAtLjM2OC0uMTUzLS4zNjgtLjM0N1Y3LjFjMC0uMTkyLjE2NS0uMzUuMzY3LS4zNWgyLjY1M1Y0LjIzNmMwLS4xOTMuMTY1LS4zNDguMzctLjM0OGguNzU1Yy4yIDAgLjM2Ni4xNTUuMzY2LjM0OFY2Ljc1SDE3LjZjLjIwMiAwIC4zNjcuMTU3LjM2Ny4zNXYuNzE2ek01Ljk5IDYuNjc2aC4wMDJjLjM4IDAgLjcwMi0uMTQyLjk1LS40MTIuMzktLjQyLjU2NC0xLjExMi40Ni0xLjg0Ni0uMTgtMS4zMTItMS4xNy0yLjQwNC0yLjIwMi0yLjQzM2gtLjA0Yy0uMzY2IDAtLjY5Mi4xNDItLjk0LjQxLS4zODQuNDE3LS41NDcgMS4wNzYtLjQ0NiAxLjgwOC4xOCAxLjMxIDEuMTkyIDIuNDQ0IDIuMjAzIDIuNDc0aC4wMTR6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJnb29nbGUtcGx1czJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZ29vZ2xlLXBsdXMyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMjcuMDIgMjcuMDJcXFwiIGlkPVxcXCJob21lXFxcIiA+PGcgZmlsbD1cXFwiIzAzMDEwNFxcXCI+PHBhdGggZD1cXFwiTTMuNjc0IDI0Ljg3NnMtLjAyNC42MDQuNTY2LjYwNGw2LjgxLS4wMDguMDEtNS41OHMtLjA5NS0uOTIuNzk4LS45MmgyLjgyNmMxLjA1NiAwIC45OS45Mi45OS45MmwtLjAxIDUuNTYyaDYuNjY2Yy43NSAwIC43MTUtLjc1Mi43MTUtLjc1MnYtMTAuMjlMMTMuNjUgNi4wNTZsLTkuOTc2IDguMzU4djEwLjQ2M3pcXFwiLz48cGF0aCBkPVxcXCJNMCAxMy42MzVzLjg0NyAxLjU2IDIuNjk0IDBsMTEuMDM4LTkuMzM4IDEwLjM1IDkuMjhjMi4xMzcgMS41NDIgMi45MzggMCAyLjkzOCAwTDEzLjczMiAxLjU0IDAgMTMuNjM1ek0yMy44MyA0LjI3NWgtMi42NjJsLjAxIDMuMjI4IDIuNjUyIDIuMjVcXFwiLz48L2c+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiaG9tZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9ob21lLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNTQzLjkwNiA1NDMuOTA2XFxcIiBpZD1cXFwiaW5mb1xcXCIgPjxwYXRoIGQ9XFxcIk0yNzEuOTUzIDBDMTIxLjc2IDAgMCAxMjEuNzYgMCAyNzEuOTUzczEyMS43NiAyNzEuOTUzIDI3MS45NTMgMjcxLjk1MyAyNzEuOTUzLTEyMS43NiAyNzEuOTUzLTI3MS45NTNTNDIyLjE0OCAwIDI3MS45NTMgMHptNDUuMDQgNzYuMzE2YzEuMDU2LS4wNSAyLjE0LS4wNiAzLjIzMiAwIDE0LjcyNC0uNDg0IDI3LjUzMyAxMC42MjIgMjkuNTc4IDI0Ljk4NyA2LjU3NiAyNy41OC0yMi43MiA1NS4yMjgtNDkuNjMgNDQuMTkyLTMyLjE0LTE0LjkyLTE1Ljk1LTY3LjU4NiAxNi44Mi02OS4xOHpNMzAzLjc0IDE5Ni4zMThjMjAuODc0LTEuMzI3IDI0LjUxOCAyMi45NjQgMTguMDEzIDQ3LjU5Mi0xMi42OTUgNTYuNTgzLTMyLjQ1NSAxMTEuNDAzLTQzLjE3NSAxNjguNDQyIDUuMTc4IDIyLjUyMyAzMy41NzUtMy4zMTIgNDUuNzItMTEuNTU4IDEwLjMzLTguMjEzIDEyLjEyNSAyLjA4MyAxNS42MzggMTAuNzEtMjUuNzc2IDE4LjA1OC01MS42ODcgMzYuNDQ3LTgwLjM5NSA1MC45OS0yNi45NyAxNi4zNjItNDkuMDQ4LTkuMDctNDIuMzItMzcuMzkzIDExLjEyOC01Mi44NCAyNS43NzYtMTA0Ljg4IDM3LjczNi0xNTcuNTYzIDMuNzM3LTI4LjQ2OC0zMy43MjguNTEtNDQuODcyIDcuMTM2LTguOTg1IDExLjI5Mi0xMy4yNSAzLjA1LTE2Ljk5Ny03LjEzNiAyOS44Ny0yMS44MTYgNjAuMzI1LTQ4LjU5MyA5My4zMTMtNjUuOTUgNi43MzgtMy4zNSAxMi41Mi00Ljk2NSAxNy4zNC01LjI3elxcXCIgZmlsbD1cXFwiIzAxMDAwMlxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImluZm9cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvaW5mby5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ5LjY1MiA0OS42NTJcXFwiIGlkPVxcXCJpbnN0YWdyYW1cXFwiID48cGF0aCBkPVxcXCJNMjQuODI1IDI5Ljc5NmMyLjc0IDAgNC45NzItMi4yMyA0Ljk3Mi00Ljk3IDAtMS4wODItLjM1NC0yLjA4LS45NC0yLjg5Ny0uOTAzLTEuMjUzLTIuMzctMi4wNzQtNC4wMy0yLjA3NC0xLjY1OCAwLTMuMTI1LjgyLTQuMDMgMi4wNzItLjU4OC44MTYtLjk0IDEuODE1LS45NCAyLjg5Ny0uMDAzIDIuNzQgMi4yMjggNC45NyA0Ljk2OCA0Ljk3ek0zNS42NzggMTguNzQ2VjEzLjk2bC0uNjIzLjAwMi00LjE2NC4wMTMuMDE3IDQuNzg3XFxcIi8+PHBhdGggZD1cXFwiTTI0LjgyNiAwQzExLjEzNiAwIDAgMTEuMTM3IDAgMjQuODI2YzAgMTMuNjg4IDExLjEzNyAyNC44MjYgMjQuODI2IDI0LjgyNiAxMy42ODggMCAyNC44MjYtMTEuMTM4IDI0LjgyNi0yNC44MjZDNDkuNjUyIDExLjEzNiAzOC41MTYgMCAyNC44MjYgMHptMTQuMTIgMjEuOTN2MTEuNTZjMCAzLjAxLTIuNDUgNS40NTctNS40NTggNS40NTdIMTYuMTY0Yy0zLjAxIDAtNS40NTctMi40NDctNS40NTctNS40NThWMTYuMTY0YzAtMy4wMSAyLjQ0Ny01LjQ1NyA1LjQ1Ny01LjQ1N2gxNy4zMjNjMy4wMSAwIDUuNDU4IDIuNDQ3IDUuNDU4IDUuNDU3djUuNzY0elxcXCIvPjxwYXRoIGQ9XFxcIk0zMi41NSAyNC44MjZjMCA0LjI1Ny0zLjQ2NSA3LjcyMy03LjcyNCA3LjcyMy00LjI2IDAtNy43MjItMy40NjctNy43MjItNy43MjQgMC0xLjAyNC4yMDQtMi4wMDMuNTY4LTIuODk3aC00LjIxNXYxMS41NmMwIDEuNDkzIDEuMjEzIDIuNzAzIDIuNzA2IDIuNzAzaDE3LjMyM2MxLjQ5IDAgMi43MDYtMS4yMSAyLjcwNi0yLjcwNFYyMS45M2gtNC4yMTdjLjM2Ny44OTMuNTc0IDEuODcyLjU3NCAyLjg5NnpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJpbnN0YWdyYW1cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvaW5zdGFncmFtLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJpbnN0YWdyYW0yXFxcIiA+PHRpdGxlPlNoYXBlPC90aXRsZT48cGF0aCBkPVxcXCJNOC4wMSAxMC44YzEuNTM2IDAgMi43ODctMS4xODUgMi43ODctMi42NCAwLS41NzYtLjE5OC0xLjEwNi0uNTI3LTEuNTQtLjUwNi0uNjY1LTEuMzI4LTEuMS0yLjI1OC0xLjEtLjkzIDAtMS43NS40MzUtMi4yNiAxLjEtLjMyOC40MzMtLjUyNS45NjQtLjUyNSAxLjU0LS4wMDIgMS40NTUgMS4yNDggMi42NCAyLjc4NCAyLjY0em02LjA4My01Ljg3VjIuMzg3aC0uMzVsLTIuMzMzLjAwOC4wMSAyLjU0MyAyLjY3My0uMDA4em0xLjgzIDEuNjl2Ni4xNGMwIDEuNi0xLjM3IDIuOS0zLjA1NyAyLjloLTkuNzFDMS40NyAxNS42Ni4xIDE0LjM2LjEgMTIuNzZ2LTkuMmMwLTEuNiAxLjM3LTIuOSAzLjA1Ny0yLjloOS43MDhjMS42ODcgMCAzLjA2IDEuMyAzLjA2IDIuOXYzLjA2ek0xMi4zNCA4LjE2YzAgMi4yNi0xLjk0MiA0LjEtNC4zMyA0LjEtMi4zODUgMC00LjMyNi0xLjg0LTQuMzI2LTQuMSAwLS41NDUuMTE0LTEuMDY1LjMxOC0xLjU0SDEuNjR2Ni4xNGMwIC43OTQuNjggMS40MzcgMS41MTcgMS40MzdoOS43MDdjLjgzNiAwIDEuNTE3LS42NDMgMS41MTctMS40MzZWNi42MkgxMi4wMmMuMjA1LjQ3NS4zMi45OTUuMzIgMS41NHpcXFwiIGZpbGw9XFxcIiMzNDM0MzRcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImluc3RhZ3JhbTJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvaW5zdGFncmFtMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ5LjY1MiA0OS42NTJcXFwiIGlkPVxcXCJsaW5rZWRpblxcXCIgPjxwYXRoIGQ9XFxcIk0yOS4zNSAyMS4yOThjLTIuMTI1IDAtMy4wNzQgMS4xNjgtMy42MDUgMS45ODh2LTEuNzA0aC00LjAwMmMuMDUyIDEuMTI4IDAgMTIuMDQgMCAxMi4wNGg0LjAwMnYtNi43MjZjMC0uMzYuMDIzLS43Mi4xMy0uOTc3LjI5LS43Mi45NS0xLjQ2NiAyLjA1NS0xLjQ2NiAxLjQ0OCAwIDIuMDI3IDEuMTA0IDIuMDI3IDIuNzI0djYuNDQyaDQuMDAydi02LjkwNWMtLjAwMi0zLjY5Ni0xLjk3Ny01LjQxNy00LjYxLTUuNDE3em0tMy42MDggMi4wM2gtLjAyNWMuMDA4LS4wMTQuMDItLjAyNy4wMjUtLjA0di4wNHpNMTUuNTIzIDIxLjU4Mmg0LjAwMnYxMi4wNGgtNC4wMDJ6XFxcIi8+PHBhdGggZD1cXFwiTTI0LjgyNiAwQzExLjEzNiAwIDAgMTEuMTM3IDAgMjQuODI2YzAgMTMuNjg4IDExLjEzNyAyNC44MjYgMjQuODI2IDI0LjgyNiAxMy42ODggMCAyNC44MjYtMTEuMTM4IDI0LjgyNi0yNC44MjZDNDkuNjUyIDExLjEzNiAzOC41MTYgMCAyNC44MjYgMHpNMzcuOTkgMzYuMDU1YzAgMS4wNTYtLjg3NSAxLjkxLTEuOTU4IDEuOTFoLTIyLjU4Yy0xLjA4IDAtMS45NTgtLjg1NC0xLjk1OC0xLjkxVjEzLjIxYzAtMS4wNTQuODc3LTEuOTEgMS45NTctMS45MWgyMi41ODJjMS4wODIgMCAxLjk2Ljg1NyAxLjk2IDEuOTF2MjIuODQ1elxcXCIvPjxwYXRoIGQ9XFxcIk0xNy41NSAxNS43NzdjLTEuMzY3IDAtMi4yNjMuODk4LTIuMjYzIDIuMDggMCAxLjE1NS44NyAyLjA4IDIuMjEgMi4wOGguMDI3YzEuMzk2IDAgMi4yNjUtLjkyNSAyLjI2NS0yLjA4LS4wMjgtMS4xOC0uODctMi4wOC0yLjI0LTIuMDh6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwibGlua2VkaW5cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvbGlua2VkaW4uc3ZnXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNyAxNlxcXCIgaWQ9XFxcImxpbmtlZGluMlxcXCIgPjx0aXRsZT5saW5rZWRpbjwvdGl0bGU+PHBhdGggZD1cXFwiTTExLjQ2IDYuMjg0Yy0xLjI2IDAtMS44MjQuNjU3LTIuMTQgMS4xMTh2LS45NThINi45NDdjLjAzLjYzNCAwIDYuNzczIDAgNi43NzNIOS4zMlY5LjQzM2MwLS4yMDIuMDE1LS40MDUuMDgtLjU1LjE3LS40MDUuNTYyLS44MjQgMS4yMTgtLjgyNC44NiAwIDEuMjAzLjYyIDEuMjAzIDEuNTMydjMuNjI0aDIuMzc2VjkuMzNjMC0yLjA3OC0xLjE3Mi0zLjA0Ni0yLjczNS0zLjA0NnpNOS4zMiA3LjQyNmgtLjAxNWMuMDA0LS4wMDguMDEyLS4wMTUuMDE1LS4wMjN2LjAyM3ptLTYuMDY2LS45ODJINS42M3Y2Ljc3M0gzLjI1NFY2LjQ0NHptMS4yMDQtMy4yNjZjLS44MTIgMC0xLjM0NC41MDUtMS4zNDQgMS4xNyAwIC42NS41MTYgMS4xNyAxLjMxMyAxLjE3aC4wMTVjLjgzIDAgMS4zNDQtLjUyIDEuMzQ0LTEuMTctLjAxNi0uNjY0LS41MTUtMS4xNy0xLjMyOC0xLjE3em0xMi4xMyAxMS40MDdjMCAuNTk1LS41MiAxLjA3NS0xLjE2IDEuMDc1SDIuMDI0Yy0uNjQgMC0xLjE2Mi0uNDgtMS4xNjItMS4wNzVWMS43MzVjMC0uNTk0LjUyLTEuMDc1IDEuMTYyLTEuMDc1aDEzLjQwMmMuNjQyIDAgMS4xNjIuNDgyIDEuMTYyIDEuMDc0djEyLjg1elxcXCIgZmlsbD1cXFwiIzM0MzQzNFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwibGlua2VkaW4yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2xpbmtlZGluMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ2Ni41ODMgNDY2LjU4MlxcXCIgaWQ9XFxcImxvY2F0aW9uXFxcIiA+PHBhdGggZD1cXFwiTTIzMy4yOTIgMGMtODUuMSAwLTE1NC4zMzQgNjkuMjM0LTE1NC4zMzQgMTU0LjMzMyAwIDM0LjI3NSAyMS44ODcgOTAuMTU1IDY2LjkwOCAxNzAuODM0IDMxLjg0NiA1Ny4wNjMgNjMuMTY4IDEwNC42NDMgNjQuNDg0IDEwNi42NGwyMi45NDIgMzQuNzc1IDIyLjk0LTM0Ljc3NGMxLjMxOC0xLjk5OCAzMi42NDItNDkuNTc3IDY0LjQ4NC0xMDYuNjQgNDUuMDIzLTgwLjY4IDY2LjkwOC0xMzYuNTYgNjYuOTA4LTE3MC44MzRDMzg3LjYyNCA2OS4yMzQgMzE4LjM5IDAgMjMzLjI5MiAwem0wIDIzMy4yOWMtNDQuMTgyIDAtODAtMzUuODE2LTgwLTgwczM1LjgxOC04MCA4MC04MCA4MCAzNS44MTggODAgODAtMzUuODIgODAtODAgODB6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwibG9jYXRpb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvbG9jYXRpb24uc3ZnXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA3OS41MzYgNzkuNTM2XFxcIiBpZD1cXFwibWFpbFxcXCIgPjxwYXRoIGQ9XFxcIk0zOS43NzMgMS4zMUwwIDMxLjAwNHY0Ny4yMjJoNzkuNTM2VjMxLjAwNEwzOS43NzMgMS4zMXpNMjguNzcgMjIuNWMxLjE2Ny0yLjEzNCAyLjc3NS0zLjc0IDQuODE1LTQuODA2IDIuMDM1LTEuMDc1IDQuMzU3LTEuNjE2IDYuOTgzLTEuNjE2IDIuMjE0IDAgNC4xOS40MzUgNS45MiAxLjI5MiAxLjczLjg3IDMuMDQ2IDIuMDk0IDMuOTY4IDMuNjg3LjkgMS41OTUgMS4zNjcgMy4zMzQgMS4zNjcgNS4yMTcgMCAyLjI0Ny0uNjk0IDQuMjgtMi4wODIgNi4wOTctMS43NCAyLjI5My0zLjk2IDMuNDM3LTYuNjggMy40MzctLjczIDAtMS4yNzgtLjEyMi0xLjY1My0uMzgtLjM2NS0uMjYyLS42Mi0uNjMyLS43NDMtMS4xMy0xLjAyMiAxLjAxMy0yLjIzIDEuNTItMy41OSAxLjUyLTEuNDY0IDAtMi42NzgtLjUwNi0zLjY0Mi0xLjUwOC0uOTY2LTEuMDEzLTEuNDQ3LTIuMzYyLTEuNDQ3LTQuMDMyIDAtMi4wODQuNTc4LTMuOTY2IDEuNzQzLTUuNjcyIDEuNDE2LTIuMDg0IDMuMjE4LTMuMTMgNS40MjQtMy4xMyAxLjU3IDAgMi43My42IDMuNDc1IDEuODA1bC4zMy0xLjQ2N2gzLjVsLTEuOTk3IDkuNDhjLS4xMjUuNjA1LS4xODcuOTg1LS4xODcgMS4xNjIgMCAuMjI4LjA1Mi4zOC4xNS40OTcuMDk4LjExLjIyMi4xNjUuMzU2LjE2NS40MzUgMCAuOTc4LS4yNDggMS42NDUtLjc3LjktLjY2MiAxLjYyNy0xLjU3MyAyLjE4LTIuNjk0LjU1NS0xLjEzLjg0LTIuMy44NC0zLjUwOCAwLTIuMTY1LS43ODItMy45NzctMi4zNTItNS40NDUtMS41NzMtMS40NS0zLjc3LTIuMTg1LTYuNTc4LTIuMTg1LTIuMzkzIDAtNC40MTcuNDg3LTYuMDc3IDEuNDY4LTEuNjYuOTY2LTIuOTEzIDIuMzQzLTMuNzY1IDQuMTE0LS44NCAxLjc2LTEuMjU4IDMuNjA3LTEuMjU4IDUuNTIgMCAxLjg1Ni40OCAzLjU1MiAxLjQxIDUuMDc0Ljk0NiAxLjUzNCAyLjI2IDIuNjQyIDMuOTU3IDMuMzQ2IDEuNjk2LjY5NyAzLjY0MyAxLjA0NiA1LjgyOCAxLjA0NiAyLjA5NyAwIDMuOTEtLjI5MyA1LjQzMi0uODggMS41MjItLjU4OCAyLjc0LTEuNDU4IDMuNjY2LTIuNjQyaDIuODA3Yy0uODggMS43OTItMi4yMjcgMy4xOTItNC4wNSA0LjIxNS0yLjA5IDEuMTYzLTQuNjQgMS43NC03LjY0MyAxLjc0LTIuOTE4IDAtNS40MjYtLjQ4Ny03LjU0Mi0xLjQ2OC0yLjEyLS45ODYtMy42OS0yLjQzNC00LjczLTQuMzUtMS4wMjgtMS45MTgtMS41MzUtNC4wMDgtMS41MzUtNi4yNjguMDAyLTIuNDc4LjU4LTQuNzkgMS43NTUtNi45M3pNMi44MDQgMzEuOTRsMjkuMzQ0IDE5LjY4TDIuODA0IDc0LjMzNFYzMS45NHptMi4yMyA0My45MDRsMzQuNzQtMjYuODg1TDc0LjUgNzUuODQzSDUuMDMyem03MS42OTUtMS41MUw0Ny4zOSA1MS42MmwyOS4zNC0xOS42OHY0Mi4zOTN6TTQxLjIwNCAyNC42NmMuNDY2LjUzMi43IDEuMjk2LjcgMi4yOTMgMCAuODktLjE3NSAxLjg1Ni0uNTE0IDIuODgtLjMzMyAxLjAzNS0uNzQyIDEuODI1LTEuMjA4IDIuMzYtLjMxOC4zNzUtLjY1OC42NTItLjk5Mi44MjYtLjQ0LjI0OC0uOTA2LjM3LTEuNDEuMzctLjY3NC4wMDUtMS4yMy0uMjY1LTEuNjktLjc5NS0uNDUtLjUzLS42NzQtMS4zNDYtLjY3NC0yLjQ2NSAwLS44NC4xNTgtMS44MDUuNDg3LTIuODkuMzMtMS4wODcuODEtMS45MTUgMS40NTMtMi41MDguNjQ3LS41ODggMS4zNDYtLjg4IDIuMS0uODguNzA2LjAwNCAxLjI5My4yNzMgMS43NS44MXpcXFwiIGZpbGw9XFxcIiMwMTAwMDJcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJtYWlsXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL21haWwuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNCAxNFxcXCIgaWQ9XFxcIm1haWwyXFxcIiA+PGcgZmlsbD1cXFwiIzAzMDEwNFxcXCI+PHBhdGggZD1cXFwiTTcgOUw1LjI2OCA3LjQ4NC4zMTYgMTEuNzNjLjE4LjE2Ni40MjMuMjcuNjkuMjdoMTEuOTg3Yy4yNjcgMCAuNTEtLjEwNC42ODgtLjI3TDguNzMzIDcuNDgzIDcgOXpcXFwiLz48cGF0aCBkPVxcXCJNMTMuNjg0IDIuMjdjLS4xOC0uMTY3LS40MjItLjI3LS42OS0uMjdIMS4wMDZjLS4yNjcgMC0uNTEuMTA0LS42OS4yNzNMNyA4bDYuNjg0LTUuNzN6TTAgMi44Nzh2OC4zMDhMNC44MzMgNy4wOE05LjE2NyA3LjA4TDE0IDExLjE4NXYtOC4zMVxcXCIvPjwvZz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJtYWlsMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9tYWlsMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDUxLjQxMyA1MS40MTNcXFwiIGlkPVxcXCJwaG9uZTFcXFwiID48ZyBmaWxsPVxcXCIjMDEwMDAyXFxcIj48cGF0aCBkPVxcXCJNMjUuOTkgMTIuMjc0YzguNjYyLjA4NSAxNC4wOS0uNDU0IDE0LjgyMiA5LjE0OGgxMC41NjRjMC0xNC44NzUtMTIuOTczLTE2Ljg4LTI1LjY2Mi0xNi44OC0xMi42OSAwLTI1LjY2MiAyLjAwNS0yNS42NjIgMTYuODhoMTAuNDgyYy44MS05Ljc4NSA2Ljg2NC05LjIzMiAxNS40NTUtOS4xNDh6TTUuMjkgMjYuMjA0YzIuNTc0IDAgNC43MTUuMTU0IDUuMTktMi4zNzcuMDY1LS4zNDQuMTAyLS43MzQuMTAyLTEuMTg1SDBjMCAzLjc2NSAyLjM3IDMuNTYyIDUuMjkgMy41NjJ6TTQwLjg4IDIyLjY0MmgtLjFjMCAuNDU0LjA0Ljg0NS4xMTMgMS4xODUuNTAyIDIuMzM0IDIuNjQgMi4xOSA1LjIwNCAyLjE5IDIuOTM2IDAgNS4zMTYuMTkyIDUuMzE2LTMuMzc1SDQwLjg4elxcXCIvPjxwYXRoIGQ9XFxcIk0zNS43MiAyMC4wNzh2LTEuNDk2YzAtLjY3LS43NzItLjcxLTEuNzI0LS43MUgzMi40NGMtLjk1IDAtMS43Mi4wNC0xLjcyLjcxdjIuMjloLTExdi0yLjI5YzAtLjY3LS43NzItLjcxLTEuNzIzLS43MUgxNi40NGMtLjk1IDAtMS43Mi4wNC0xLjcyLjcxdjIuODAyYy0yLjUwNyAyLjYwNC0xMC43MDcgMTMuNjktMTEuMDA1IDE1LjAzbC4wMDQgOC45NTZjMCAuODI3LjY3MiAxLjUgMS41IDEuNWg0MGMuODI2IDAgMS41LS42NzMgMS41LTEuNXYtOWMtLjI5Ni0xLjMwMy04LjQ5NC0xMi4zODMtMTEtMTQuOTg3di0xLjMwNXpNMTkuMTc2IDM3LjYyYy0uODA1IDAtMS40NTgtLjY1Mi0xLjQ1OC0xLjQ1OHMuNjUyLTEuNDU4IDEuNDU3LTEuNDU4IDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OC0uNjUzIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDUgMC0xLjQ1OC0uNjUyLTEuNDU4LTEuNDU4cy42NTItMS40NTggMS40NTctMS40NTggMS40NTguNjUyIDEuNDU4IDEuNDU4LS42NTMgMS40NTgtMS40NTggMS40NTh6bTAtNWMtLjgwNSAwLTEuNDU4LS42NS0xLjQ1OC0xLjQ1NyAwLS44MDUuNjUyLTEuNDU4IDEuNDU3LTEuNDU4czEuNDU4LjY1MyAxLjQ1OCAxLjQ1OGMwIC44MDYtLjY1MyAxLjQ1OC0xLjQ1OCAxLjQ1OHptNiAxMGMtLjgwNSAwLTEuNDU4LS42NTItMS40NTgtMS40NThzLjY1Mi0xLjQ1OCAxLjQ1Ny0xLjQ1OGMuODA2IDAgMS40NTguNjUyIDEuNDU4IDEuNDU4cy0uNjUyIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDUgMC0xLjQ1OC0uNjUyLTEuNDU4LTEuNDU4cy42NTItMS40NTggMS40NTctMS40NThjLjgwNiAwIDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OHMtLjY1MiAxLjQ1OC0xLjQ1OCAxLjQ1OHptMC01Yy0uODA1IDAtMS40NTgtLjY1LTEuNDU4LTEuNDU3IDAtLjgwNS42NTItMS40NTggMS40NTctMS40NTguODA2IDAgMS40NTguNjUzIDEuNDU4IDEuNDU4IDAgLjgwNi0uNjUyIDEuNDU4LTEuNDU4IDEuNDU4em02IDEwYy0uODA2IDAtMS40NTgtLjY1Mi0xLjQ1OC0xLjQ1OHMuNjUtMS40NTggMS40NTctMS40NTggMS40NTguNjUyIDEuNDU4IDEuNDU4LS42NTIgMS40NTgtMS40NTggMS40NTh6bTAtNWMtLjgwNiAwLTEuNDU4LS42NTItMS40NTgtMS40NThzLjY1LTEuNDU4IDEuNDU3LTEuNDU4IDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OC0uNjUyIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDYgMC0xLjQ1OC0uNjUtMS40NTgtMS40NTcgMC0uODA1LjY1LTEuNDU4IDEuNDU3LTEuNDU4czEuNDU4LjY1MyAxLjQ1OCAxLjQ1OGMwIC44MDYtLjY1MiAxLjQ1OC0xLjQ1OCAxLjQ1OHpcXFwiLz48L2c+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwicGhvbmUxXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3Bob25lMS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDU3OC4xMDYgNTc4LjEwNlxcXCIgaWQ9XFxcInBob25lMlxcXCIgPjxwYXRoIGQ9XFxcIk01NzcuODMgNDU2LjEyOGMxLjIyNSA5LjM4NS0xLjYzNSAxNy41NDUtOC41NjggMjQuNDhsLTgxLjM5NiA4MC43OGMtMy42NzIgNC4wOC04LjQ2NSA3LjU1Mi0xNC4zOCAxMC40MDUtNS45MTcgMi44NTctMTEuNzMgNC42OTMtMTcuNDQgNS41MDgtLjQwOCAwLTEuNjM1LjEwNi0zLjY3Ni4zMS0yLjAzNy4yMDMtNC42OS4zMDctNy45NTMuMzA3LTcuNzU0IDAtMjAuMy0xLjMyNi0zNy42NC0zLjk4cy0zOC41NTYtOS4xOC02My42NDYtMTkuNTgzYy0yNS4wOTUtMTAuNDA0LTUzLjU1Mi0yNi4wMTItODUuMzc1LTQ2LjgxOC0zMS44MjMtMjAuODA1LTY1LjY4OC00OS4zNjctMTAxLjU5Mi04NS42OC0yOC41Ni0yOC4xNTItNTIuMjI0LTU1LjA4LTcwLjk5Mi04MC43ODMtMTguNzY3LTI1LjcwNS0zMy44NjMtNDkuNDctNDUuMjg3LTcxLjMtMTEuNDI1LTIxLjgyNy0xOS45OTMtNDEuNjE1LTI1LjcwNS01OS4zNjNTNC41OSAxNzcuMzYyIDIuNTUgMTY0LjUxLS4zMDYgMTQxLjU2LjEwMiAxMzQuMjE2Yy40MDgtNy4zNDQuNjEyLTExLjQyNC42MTItMTIuMjQuODE2LTUuNzEyIDIuNjUyLTExLjUyNiA1LjUwOC0xNy40NDJzNi4zMjQtMTAuNzEgMTAuNDA0LTE0LjM4Mkw5OC4wMjIgOC43NTZjNS43MTItNS43MTIgMTIuMjQtOC41NjggMTkuNTg0LTguNTY4IDUuMzA0IDAgOS45OTYgMS41MyAxNC4wNzYgNC41OXM3LjU0OCA2LjgzNCAxMC40MDQgMTEuMzIybDY1LjQ4NCAxMjQuMjM2YzMuNjcyIDYuNTI4IDQuNjkyIDEzLjY2OCAzLjA2IDIxLjQyLTEuNjMyIDcuNzUyLTUuMSAxNC4yOC0xMC40MDQgMTkuNTg0bC0yOS45ODggMjkuOTg4Yy0uODE2LjgxNi0xLjUzIDIuMTQyLTIuMTQyIDMuOTc4cy0uOTE4IDMuMzY2LS45MTggNC41OWMxLjYzMiA4LjU2OCA1LjMwNCAxOC4zNiAxMS4wMTYgMjkuMzc2IDQuODk2IDkuNzkyIDEyLjQ0NCAyMS43MjYgMjIuNjQ0IDM1LjgwMnMyNC42ODQgMzAuMjkzIDQzLjQ1MiA0OC42NTNjMTguMzYgMTguNzcgMzQuNjggMzMuMzU0IDQ4Ljk2IDQzLjc2IDE0LjI3NyAxMC40IDI2LjIxNSAxOC4wNTMgMzUuODAzIDIyLjk1IDkuNTg4IDQuODk1IDE2LjkzMiA3Ljg1MyAyMi4wMyA4Ljg3bDcuNjUgMS41M2MuODE1IDAgMi4xNDQtLjMwNiAzLjk3OC0uOTE3IDEuODM3LS42MTMgMy4xNjMtMS4zMjYgMy45OC0yLjE0M2wzNC44ODMtMzUuNDk2YzcuMzQ4LTYuNTI2IDE1LjkxMi05Ljc5IDI1LjcwNS05Ljc5IDYuOTM4IDAgMTIuNDQzIDEuMjIzIDE2LjUyMyAzLjY3MmguNjEybDExOC4xMTUgNjkuNzY4YzguNTcgNS4zMDggMTMuNjcgMTIuMDM4IDE1LjMwMyAyMC4xOTh6XFxcIiBmaWxsPVxcXCIjMDEwMDAyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwicGhvbmUyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3Bob25lMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ4OC4xMzkgNDg4LjEzOVxcXCIgaWQ9XFxcInNlYXJjaFxcXCIgPjxwYXRoIGQ9XFxcIk0yOTAuNTEzLjAwNEMxODEuMzc4LjAwNCA5Mi45MTYgODguNDY2IDkyLjkxNiAxOTcuNmMwIDQ2Ljk2NyAxNi40NzcgOTAuMDQzIDQzLjgzNiAxMjQuMDNMNi4xNTYgNDUyLjE5NmMtOC4yMDggOC4yMzgtOC4yMDggMjEuNTUzIDAgMjkuNzYgOC4yMDggOC4yNCAyMS41NTMgOC4yNCAyOS43NiAwbDEzMC41OTctMTMwLjU2NWMzMy45MjYgMjcuMzMgNzcuMDMyIDQzLjgwNyAxMjQuMDMgNDMuODA3IDEwOS4xMzQgMCAxOTcuNTk3LTg4LjQ2MiAxOTcuNTk3LTE5Ny41OTdTMzk5LjYxNi4wMDQgMjkwLjUxMy4wMDR6bTAgMzY0Ljc5M2MtOTIuMjMyIDAtMTY3LjE5Ny03NC45OTYtMTY3LjE5Ny0xNjcuMTk3UzE5OC4zNCAzMC40MDMgMjkwLjUxMyAzMC40MDMgNDU3LjcxIDEwNS40IDQ1Ny43MSAxOTcuNnMtNzQuOTk2IDE2Ny4xOTctMTY3LjE5NyAxNjcuMTk3elxcXCIgZmlsbD1cXFwiIzAxMDAwMlxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcInNlYXJjaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9zZWFyY2guc3ZnXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwidHdpdHRlclxcXCIgPjxwYXRoIGQ9XFxcIk0yNC44MjYgMEMxMS4xMzYgMCAwIDExLjEzNyAwIDI0LjgyNmMwIDEzLjY4OCAxMS4xMzcgMjQuODI2IDI0LjgyNiAyNC44MjYgMTMuNjg4IDAgMjQuODI2LTExLjEzOCAyNC44MjYtMjQuODI2QzQ5LjY1MiAxMS4xMzYgMzguNTE2IDAgMjQuODI2IDB6TTM1LjkgMTkuMTQ0Yy4wMTIuMjQ2LjAxOC40OTQuMDE4Ljc0MiAwIDcuNTUtNS43NDYgMTYuMjU1LTE2LjI2IDE2LjI1NS0zLjIyNiAwLTYuMjMtLjk0Mi04Ljc1OC0yLjU2NC40NDcuMDUzLjkwMi4wOCAxLjM2My4wOCAyLjY3OCAwIDUuMTQtLjkxNCA3LjA5Ny0yLjQ0Ni0yLjUtLjA0Ni00LjYxLTEuNjk4LTUuMzM4LTMuOTcuMzQ4LjA2Ny43MDcuMTA0IDEuMDc0LjEwNC41MiAwIDEuMDI3LS4wNjggMS41MDYtLjItMi42MTQtLjUyMy00LjU4My0yLjgzMi00LjU4My01LjYwMnYtLjA3MmMuNzcuNDI3IDEuNjUuNjg1IDIuNTg3LjcxNC0xLjUzMi0xLjAyMy0yLjU0LTIuNzczLTIuNTQtNC43NTUgMC0xLjA1LjI4LTIuMDMuNzcyLTIuODc1IDIuODE2IDMuNDU4IDcuMDI4IDUuNzMyIDExLjc3NiA1Ljk3Mi0uMDk4LS40Mi0uMTQ3LS44NTQtLjE0Ny0xLjMwMyAwLTMuMTU1IDIuNTU3LTUuNzE0IDUuNzEyLTUuNzE0IDEuNjQ0IDAgMy4xMjcuNjk0IDQuMTcgMS44MDQgMS4zMDQtLjI1NiAyLjUyNC0uNzMgMy42My0xLjM4Ny0uNDMgMS4zMzUtMS4zMzIgMi40NTQtMi41MTUgMy4xNjIgMS4xNTctLjE0IDIuMjYtLjQ0NSAzLjI4Mi0uOS0uNzYzIDEuMTQ0LTEuNzMyIDIuMTUtMi44NSAyLjk1NHpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ0d2l0dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3R3aXR0ZXIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAyMiAyMFxcXCIgaWQ9XFxcInVzZXItMVxcXCIgPjxwYXRoIGQ9XFxcIk0yMSAxMGMwLTUuNTE0LTQuNDg2LTEwLTEwLTEwUzEgNC40ODYgMSAxMGMwIDIuOTEyIDEuMjUyIDUuNTM3IDMuMjQ2IDcuMzY3bC0uMDEuMDA4LjMyNS4yNzNjLjAyMy4wMTguMDQ2LjAzMy4wNjcuMDUuMTcyLjE0My4zNS4yOC41MzMuNDEuMDU3LjA0My4xMTYuMDg1LjE3Ni4xMjcuMTk1LjEzMy4zOTQuMjYuNTk3LjM4bC4xMzQuMDc4Yy4yMjMuMTI3LjQ1LjI0Ni42ODQuMzU2bC4wNTQuMDJjLjc2LjM1NCAxLjU3LjYxNCAyLjQxOC43NjdsLjA2OC4wMTJjLjI2My4wNDQuNTMuMDguOC4xMDVsLjA5Ny4wMDhjLjI3LjAyMi41NC4wMzYuODE1LjAzNi4yNzIgMCAuNTQtLjAxNS44MDgtLjAzN2wuMS0uMDA3Yy4yNy0uMDI1LjUzMy0uMDYuNzkzLS4xMDVsLjA3LS4wMWMuODM1LS4xNSAxLjYzNC0uNDA0IDIuMzg0LS43NDhsLjA4My0uMDM4Yy4yMjQtLjEwNi40NDQtLjIyLjY2LS4zNGwuMTU4LS4wOTJjLjE5Ni0uMTE2LjM4OC0uMjM2LjU3NS0uMzY0bC4yLS4xNDNjLjE2LS4xMTUuMzE2LS4yMzQuNDctLjM1OC4wMzItLjAyOC4wNy0uMDUyLjEwMi0uMDhsLjMzMy0uMjc3LS4wMS0uMDFDMTkuNzM1IDE1LjU2NCAyMSAxMi45MjggMjEgMTB6TTEuNzI3IDEwQzEuNzI3IDQuODg3IDUuODg3LjcyNyAxMSAuNzI3YzUuMTEzIDAgOS4yNzMgNC4xNiA5LjI3MyA5LjI3MyAwIDIuNzU1LTEuMjEgNS4yMzItMy4xMjQgNi45MzItLjEwOC0uMDc0LS4yMTYtLjE0LS4zMjYtLjE5NWwtMy4wOC0xLjU0Yy0uMjc2LS4xMzgtLjQ0Ny0uNDE2LS40NDctLjcyNHYtMS4wNzZjLjA3LS4wODguMTQ2LS4xODcuMjI0LS4yOTcuNC0uNTYzLjcyLTEuMTkuOTUtMS44NjMuNDYzLS4yMTguNzYtLjY3Ny43Ni0xLjE5NlY4Ljc1NGMwLS4zMTUtLjExNS0uNjItLjMyMi0uODZ2LTEuN2MuMDE4LS4xOS4wODUtMS4yNTQtLjY4Ni0yLjEzMy0uNjctLjc2NC0xLjc1NS0xLjE1LTMuMjI0LTEuMTUtMS40NyAwLTIuNTU0LjM4Ni0zLjIyNCAxLjE1LS43Ny44OC0uNzA0IDEuOTQ1LS42ODUgMi4xMzNWNy44OWMtLjIwNy4yNC0uMzIzLjU0Ny0uMzIzLjg2MnYxLjI5YzAgLjQuMTguNzczLjQ4OCAxLjAyNS4yOTQgMS4xNTQuOSAyLjAyNyAxLjEyNCAyLjMyM3YxLjA1M2MwIC4yOTYtLjE2LjU3LS40MjMuNzEybC0yLjg3NSAxLjU2OGMtLjA5Mi4wNS0uMTgzLjEwOC0uMjc0LjE3My0xLjg4OC0xLjctMy4wODItNC4xNi0zLjA4Mi02Ljg5NnptMTQuNzEzIDcuNTAzYy0uMTI4LjA5Mi0uMjU3LjE4LS4zODguMjY3LS4wNi4wNC0uMTIuMDc4LS4xODIuMTE3LS4xNzIuMTA2LS4zNDYuMjA3LS41MjUuM2wtLjExOC4wNjJjLS40MS4yMS0uODMzLjM5LTEuMjY4LjUzNWwtLjA1LjAxNWMtLjIyNy4wNzctLjQ2LjE0NC0uNjkuMjAyaC0uMDAzYy0uMjM2LjA2LS40NzQuMTA3LS43MTQuMTQ3aC0uMDJjLS4yMjYuMDM4LS40NTMuMDY1LS42ODIuMDg1bC0uMTIuMDFjLS4yMjYuMDE2LS40NTMuMDI3LS42OC4wMjctLjIzIDAtLjQ2LS4wMTItLjY5LS4wMy0uMDQtLjAwMi0uMDgtLjAwNC0uMTItLjAwOC0uMjMtLjAyLS40Ni0uMDQ3LS42ODYtLjA4NC0uMDEgMC0uMDItLjAwMy0uMDMtLjAwNS0uNDgtLjA4LS45NTQtLjE5OC0xLjQxNS0uMzUzbC0uMDQ0LS4wMTVjLS4yMy0uMDc3LS40NTUtLjE2NC0uNjc3LS4yNmgtLjAwNmMtLjIxLS4wOTItLjQxNi0uMTkyLS42Mi0uMjk4LS4wMjYtLjAxNi0uMDUzLS4wMy0uMDgtLjA0My0uMTg1LS4xLS4zNjctLjIwNi0uNTQ2LS4zMThsLS4xNi0uMTAzYy0uMTY1LS4xMDgtLjMyNy0uMjItLjQ4Ni0uMzQtLjAxNi0uMDEtLjAzMi0uMDI1LS4wNDgtLjAzN2wuMDM1LS4wMiAyLjg3NS0xLjU2N2MuNDk0LS4yNy44MDItLjc4Ny44MDItMS4zNXYtMS4zMWwtLjA4NC0uMWMtLjAwOC0uMDEtLjc5NS0uOTY3LTEuMDkyLTIuMjYyTDcuOSAxMC42M2wtLjEyNS0uMDhjLS4xNzUtLjExMy0uMjgtLjMwMi0uMjgtLjUwNnYtMS4yOWMwLS4xNy4wNzItLjMyNi4yMDMtLjQ0NGwuMTItLjEwOFY2LjE3MmwtLjAwMy0uMDQ4YzAtLjAwOC0uMTA4LS44ODMuNTA4LTEuNTg1LjUyNi0uNiAxLjQyNy0uOTA1IDIuNjc4LS45MDUgMS4yNDYgMCAyLjE0NC4zMDIgMi42Ny44OTcuNjE3LjY5NS41MTYgMS41ODYuNTE1IDEuNTkzVjguMmwuMTIuMTA4Yy4xMy4xMTcuMi4yNzUuMi40NDR2MS4yOWMwIC4yNi0uMTc1LjQ5NC0uNDMuNTcybC0uMTguMDU2LS4wNTcuMThjLS4yMTUuNjY2LS41MiAxLjI4Mi0uOTA4IDEuODMtLjA5NS4xMzQtLjE4OC4yNTMtLjI2Ny4zNDVsLS4wOS4xMDN2MS4zNDVjMCAuNTg2LjMyNyAxLjExMy44NSAxLjM3NWwzLjA4IDEuNTQuMDYuMDNjLS4wNC4wMy0uMDguMDU2LS4xMi4wODV6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwidXNlci0xXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3VzZXItMS5zdmdcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDIyIDIwXFxcIiBpZD1cXFwidXNlci0yXFxcIiA+PHBhdGggZD1cXFwiTTExLjE3LjAwMkM1LjY1LS4wOTMgMS4wOTYgNC4zMDcgMSA5LjgyOGMtLjA1MiAzLjEzIDEuMzQzIDUuOTQ1IDMuNTY2IDcuODE2LjE0NS0uMTI3LjMtLjI0My40NzQtLjMzN2wyLjk4NC0xLjYyOGMuMzktLjIxNC42MzUtLjYyNC42MzUtMS4wN3YtMS4yMjNzLS44NzYtMS4wNDctMS4yMS0yLjUwM2MtLjI3OC0uMTgtLjQ2My0uNDktLjQ2My0uODR2LTEuMzRjMC0uMjk0LjEzLS41NTcuMzM0LS43NFY2LjAyOFM2LjkyMyAzLjAyIDExIDMuMDJjNC4wNzcgMCAzLjY4IDMuMDEgMy42OCAzLjAxdjEuOTMzYy4yMDMuMTg0LjMzMy40NDcuMzMzLjc0djEuMzRjMCAuNDUtLjMwMi44MjgtLjcxLjk1NC0uMjMuNzEtLjU2IDEuMzg2LS45OTUgMi0uMTEuMTU2LS4yMTMuMjg4LS4zMDIuMzl2MS4yNTRjMCAuNDYyLjI2Ljg4NC42NzMgMS4wOWwzLjE5NCAxLjU5OGMuMTkyLjA5Ni4zNjUuMjE3LjUyNS4zNTIgMi4xNTQtMS43OTcgMy41NDYtNC40ODMgMy41OTgtNy41MUMyMS4wOTMgNC42NSAxNi42OTMuMDk3IDExLjE3LjAwM3pcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ1c2VyLTJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvdXNlci0yLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNTEuOTk3IDUxLjk5N1xcXCIgaWQ9XFxcIndpc2gtbGlzdC0xXFxcIiA+PHBhdGggZD1cXFwiTTUxLjkxIDE2LjI0MmMtLjc1OC04LjM1NC02LjY3LTE0LjQxNS0xNC4wNy0xNC40MTUtNC45MyAwLTkuNDQ1IDIuNjUzLTExLjk4NSA2LjkwNS0yLjUxNy00LjMwNy02Ljg0Ni02LjkwNi0xMS42OTctNi45MDYtNy40IDAtMTMuMzEzIDYuMDYtMTQuMDcgMTQuNDE1LS4wNi4zNy0uMzA3IDIuMzEyLjQ0IDUuNDggMS4wOCA0LjU2NyAzLjU3IDguNzIyIDcuMiAxMi4wMTJsMTguMTE1IDE2LjQ0TDQ0LjI3IDMzLjczYzMuNjMtMy4yOSA2LjEyLTcuNDQ0IDcuMTk4LTEyLjAxMy43NDgtMy4xNjcuNTAyLTUuMTEuNDQzLTUuNDc4em0tMi4zOSA1LjAyYy0uOTgzIDQuMTctMy4yNjQgNy45NzItNi41OSAxMC45ODRMMjUuODU2IDQ3LjQ4IDkuMDcyIDMyLjI1Yy0zLjMzLTMuMDE4LTUuNjEtNi44MTgtNi41OTYtMTAuOTktLjcwOC0yLjk5Ny0uNDE3LTQuNjktLjQxNi00LjdsLjAxNS0uMTAyYy42NS03LjMyIDUuNzMtMTIuNjMyIDEyLjA4My0xMi42MzIgNC42ODcgMCA4LjgxMyAyLjg4IDEwLjc3IDcuNTE1bC45MjIgMi4xODQuOTItMi4xODNjMS45MjgtNC41NjMgNi4yNzItNy41MTMgMTEuMDctNy41MTMgNi4zNSAwIDExLjQzMyA1LjMxMyAxMi4wOTYgMTIuNzI3LjAwMi4wMTYuMjkzIDEuNzEtLjQxNSA0LjcwN3pcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ3aXNoLWxpc3QtMVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy93aXNoLWxpc3QtMS5zdmdcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDUxLjk5NyA1MS45OTdcXFwiIGlkPVxcXCJ3aXNoLWxpc3QtMlxcXCIgPjxwYXRoIGQ9XFxcIk01MS45MSAxNi4yNDJjLS43NTgtOC4zNTQtNi42Ny0xNC40MTUtMTQuMDctMTQuNDE1LTQuOTMgMC05LjQ0NSAyLjY1My0xMS45ODUgNi45MDUtMi41MTctNC4zMDctNi44NDYtNi45MDYtMTEuNjk3LTYuOTA2LTcuNCAwLTEzLjMxMyA2LjA2LTE0LjA3IDE0LjQxNS0uMDYuMzctLjMwNyAyLjMxMi40NCA1LjQ4IDEuMDggNC41NjcgMy41NyA4LjcyMiA3LjIgMTIuMDEybDE4LjExNSAxNi40NEw0NC4yNyAzMy43M2MzLjYzLTMuMjkgNi4xMi03LjQ0NCA3LjE5OC0xMi4wMTMuNzQ4LTMuMTY3LjUwMi01LjExLjQ0My01LjQ3OHpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ3aXNoLWxpc3QtMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy93aXNoLWxpc3QtMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDk3Ljc1IDk3Ljc1XFxcIiBpZD1cXFwieW91dHViZVxcXCIgPjxwYXRoIGQ9XFxcIk0yNS42NzYgNTIuNDgyaDMuODc1djIwLjk3M2gzLjY2N1Y1Mi40ODJoMy45NDd2LTMuNDM1SDI1LjY3Nk01Ni42NzQgNTUuMDQ2Yy0xLjIxMiAwLTIuMzQzLjY2Mi0zLjQwNiAxLjk3MnYtNy45NzJoLTMuMjk1djI0LjQxaDMuMjk1di0xLjc2M2MxLjEwMyAxLjM2IDIuMjMzIDIuMDEzIDMuNDA2IDIuMDEzIDEuMzEgMCAyLjE5My0uNjkgMi42MzMtMi4wNDQuMjItLjc3LjMzNC0xLjk4Mi4zMzQtMy42NjV2LTcuMjQyYzAtMS43MjItLjExMi0yLjkyNC0uMzMzLTMuNjU1LS40NC0xLjM2NC0xLjMyMy0yLjA1NC0yLjYzMy0yLjA1NHptLS4zMyAxMy4yMWMwIDEuNjQzLS40ODIgMi40NTMtMS40MzQgMi40NTMtLjU0IDAtMS4wOTItLjI2LTEuNjQzLS44MTJWNTguODE0Yy41NS0uNTQ1IDEuMTAyLS44MDMgMS42NDMtLjgwMy45NSAwIDEuNDM0Ljg0MyAxLjQzNCAyLjQ4M3Y3Ljc2MnpNNDMuODI0IDY5LjE2N2MtLjczIDEuMDMzLTEuNDIyIDEuNTQyLTIuMDg0IDEuNTQyLS40NCAwLS42OS0uMjYtLjc3LS43NzItLjAzLS4xMDYtLjAzLS41MDgtLjAzLTEuMjh2LTEzLjM5aC0zLjI5N3YxNC4zOGMwIDEuMjg0LjExIDIuMTUyLjI5IDIuNzA0LjMzMi45MjIgMS4wNjQgMS4zNTQgMi4xMjQgMS4zNTQgMS4yMTMgMCAyLjQ1Ny0uNzMyIDMuNzY3LTIuMjM0djEuOTg0aDMuMjk4VjU1LjI2OGgtMy4yOTh2MTMuOXpNNDYuNjUzIDM4LjQ2NmMxLjA3MyAwIDEuNTg4LS44NSAxLjU4OC0yLjU1di03LjczMmMwLTEuNy0uNTE0LTIuNTQ4LTEuNTg3LTIuNTQ4LTEuMDc0IDAtMS41OS44NDgtMS41OSAyLjU0OHY3LjczYzAgMS43MDIuNTE2IDIuNTUyIDEuNTkgMi41NTJ6XFxcIi8+PHBhdGggZD1cXFwiTTQ4Ljg3NSAwQzIxLjg4MiAwIDAgMjEuODgyIDAgNDguODc1UzIxLjg4MiA5Ny43NSA0OC44NzUgOTcuNzUgOTcuNzUgNzUuODY4IDk3Ljc1IDQ4Ljg3NSA3NS44NjggMCA0OC44NzUgMHptNS40MzYgMjIuODZoMy4zMjJ2MTMuNTMyYzAgLjc4IDAgMS4xODYuMDQgMS4yOTUuMDczLjUxNi4zMzUuNzguNzguNzguNjY3IDAgMS4zNjYtLjUxNiAyLjEwNS0xLjU2VjIyLjg2aDMuMzN2MTguMzhoLTMuMzN2LTIuMDA1Yy0xLjMyNiAxLjUyLTIuNTkgMi4yNTctMy44MDUgMi4yNTctMS4wNzIgMC0xLjgxMi0uNDM1LTIuMTQ2LTEuMzY1LS4xODQtLjU1Ny0uMjk1LTEuNDM2LS4yOTUtMi43MzNWMjIuODZ6bS0xMi41NzcgNS45OTNjMC0xLjk2NS4zMzQtMy40IDEuMDQyLTQuMzMuOTItMS4yNTcgMi4yMTgtMS44ODUgMy44NzgtMS44ODUgMS42NjggMCAyLjk2NC42MjggMy44ODUgMS44ODUuNjk4LjkyOCAxLjAzMiAyLjM2NSAxLjAzMiA0LjMzdjYuNDM2YzAgMS45NTMtLjMzNCAzLjQwMi0xLjAzMiA0LjMyLS45MiAxLjI1NS0yLjIxNyAxLjg4Mi0zLjg4NSAxLjg4Mi0xLjY2IDAtMi45NTctLjYyNy0zLjg3OC0xLjg4LS43MDgtLjkyLTEuMDQyLTIuMzctMS4wNDItNC4zMjN2LTYuNDM3em0tOC45MDYtMTIuMjc3bDIuNjIyIDkuNjg1IDIuNTE4LTkuNjg0aDMuNzM1TDM3LjI2IDMxLjI1djkuOTloLTMuNjkydi05Ljk5Yy0uMzM1LTEuNzctMS4wNzQtNC4zNjItMi4yNi03LjgwMi0uNzc3LTIuMjktMS41ODgtNC41ODUtMi4zNjYtNi44NzJoMy44ODV6bTQyLjM2IDU4LjQ4NWMtLjY3IDIuOS0zLjA0IDUuMDQtNS44OTUgNS4zNi02Ljc2My43NTQtMTMuNjA0Ljc1OC0yMC40Mi43NTQtNi44MTMuMDA0LTEzLjY1OCAwLTIwLjQyLS43NTUtMi44NTQtLjMyLTUuMjI2LTIuNDYtNS44OTItNS4zNi0uOTUtNC4xMjgtLjk1LTguNjM3LS45NS0xMi44OXMuMDEtOC43Ni45Ni0xMi44OWMuNjY4LTIuOSAzLjAzOC01LjA0IDUuODkzLTUuMzU3IDYuNzYyLS43NTUgMTMuNjA2LS43NiAyMC40Mi0uNzU1IDYuODE0LS4wMDQgMTMuNjU4IDAgMjAuNDIuNzU1IDIuODU1LjMyIDUuMjI3IDIuNDU4IDUuODk2IDUuMzU4Ljk0NyA0LjEzLjk0IDguNjQuOTQgMTIuODlzLS4wMDMgOC43NjItLjk1NCAxMi44OXpcXFwiLz48cGF0aCBkPVxcXCJNNjcuMTcgNTUuMDQ2Yy0xLjY4NiAwLTIuOTk1LjYyLTMuOTQ3IDEuODY0LS43LjkyLTEuMDE4IDIuMzQyLTEuMDE4IDQuMjg1djYuMzdjMCAxLjkzNC4zNTcgMy4zNjYgMS4wNiA0LjI3Ny45NSAxLjI0MiAyLjI2MyAxLjg2MyAzLjk4NyAxLjg2MyAxLjcyIDAgMy4wNzItLjY1IDMuOTg0LTEuOTcyLjQtLjU4NC42Ni0xLjI0NS43Ny0xLjk3NS4wMy0uMzMuMDctMS4wNi4wNy0yLjEyNHYtLjQ4aC0zLjM2YzAgMS4zMi0uMDQ0IDIuMDU0LS4wNzMgMi4yMzMtLjE4OC44OC0uNjYyIDEuMzItMS40NzMgMS4zMi0xLjEzMiAwLTEuNjg2LS44NC0xLjY4Ni0yLjUyVjY0Ljk2aDYuNTkydi0zLjc2N2MwLTEuOTQzLS4zMy0zLjM2NS0xLjAyLTQuMjg1LS45Mi0xLjI0Mi0yLjIzMi0xLjg2Mi0zLjg4Ni0xLjg2MnptMS42MTIgNy4xNzJoLTMuMjk2di0xLjY4M2MwLTEuNjgyLjU1My0yLjUyMyAxLjY1NC0yLjUyMyAxLjA5IDAgMS42NDIuODQyIDEuNjQyIDIuNTIzdjEuNjgzelxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcInlvdXR1YmVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcveW91dHViZS5zdmdcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE0IDE2XFxcIiBpZD1cXFwieW91dHViZTJcXFwiID48dGl0bGU+WW91dHViZTwvdGl0bGU+PHBhdGggZD1cXFwiTTEuNTg0IDguOTk3aC45NXY0Ljg3aC44OTh2LTQuODdoLjk2NlY4LjJIMS41ODR2Ljc5N3ptNy41OTQuNTk2Yy0uMjk3IDAtLjU3NC4xNTQtLjgzNC40NThWOC4yaC0uODA4djUuNjY3aC44MDh2LS40MWMuMjcuMzE3LjU0Ny40Ny44MzQuNDcuMzIgMCAuNTM3LS4xNi42NDUtLjQ3Ni4wNTQtLjE3OC4wODItLjQ2LjA4Mi0uODV2LTEuNjgyYzAtLjQtLjAyOC0uNjc4LS4wODItLjg0OC0uMTA4LS4zMTctLjMyNC0uNDc3LS42NDUtLjQ3N3ptLS4wOCAzLjA2N2MwIC4zODItLjEyLjU3LS4zNTIuNTctLjEzMyAwLS4yNjgtLjA2LS40MDMtLjE4OHYtMi41NzRjLjEzNS0uMTI3LjI3LS4xODcuNDAzLS4xODcuMjMzIDAgLjM1LjE5Ny4zNS41Nzh2MS44MDJ6bS0zLjA2OC4yMTJjLS4xOC4yNC0uMzQ4LjM1OC0uNTEuMzU4LS4xMDggMC0uMTctLjA2LS4xOS0uMTgtLjAwNy0uMDI0LS4wMDctLjExNy0uMDA3LS4yOTZ2LTMuMTFoLS44MDd2My4zNGMwIC4yOTguMDI3LjUuMDcuNjI3LjA4Mi4yMTUuMjYyLjMxNi41Mi4zMTYuMjk4IDAgLjYwMy0uMTcuOTI0LS41MnYuNDYyaC44MDhWOS42NDRINi4wM3YzLjIyOHptLjY5My03LjEzYy4yNjMgMCAuMzktLjE5Ny4zOS0uNTlWMy4zNTRjMC0uMzk1LS4xMjctLjU5LS4zOS0uNTlzLS4zOS4xOTYtLjM5LjU5VjUuMTVjMCAuMzk2LjEyNy41OTMuMzkuNTkzek04LjYgMi4xMmguODEzdjMuMTRjMCAuMTgzIDAgLjI3Ny4wMS4zMDIuMDE3LjEyLjA4Mi4xOC4xOS4xOC4xNjQgMCAuMzM1LS4xMi41MTYtLjM2VjIuMTE4aC44MTV2NC4yNjdoLS44MTZWNS45MmMtLjMyNi4zNTQtLjYzNS41MjYtLjkzMy41MjYtLjI2MyAwLS40NDQtLjEtLjUyNi0uMzE3LS4wNDQtLjEzLS4wNy0uMzM1LS4wNy0uNjM2VjIuMTJ6TTUuNTE3IDMuNTFjMC0uNDU2LjA4Mi0uNzkuMjU1LTEuMDA1LjIyNi0uMjkyLjU0My0uNDM3Ljk1LS40MzcuNDEgMCAuNzI2LjE0NS45NTIuNDM3LjE3LjIxNi4yNTMuNTUuMjUzIDEuMDA2djEuNDk1YzAgLjQ1NC0uMDgyLjc5LS4yNTMgMS4wMDQtLjIyNi4yOS0uNTQzLjQzNi0uOTUyLjQzNi0uNDA3IDAtLjcyNC0uMTQ2LS45NS0uNDM3LS4xNzMtLjIxNS0uMjU1LS41NS0uMjU1LTEuMDA1VjMuNTF6TTMuMzM2LjY2bC42NDIgMi4yNS42MTctMi4yNWguOTE1TDQuNDIyIDQuMDY4djIuMzJoLS45MDR2LTIuMzJjLS4wODMtLjQxLS4yNjQtMS4wMTQtLjU1NC0xLjgxMi0uMTktLjUzMi0uMzktMS4wNjUtLjU4LTEuNTk2aC45NTJ6bTEwLjM3NyAxMy41OGMtLjE2NC42NzQtLjc0NCAxLjE3LTEuNDQ0IDEuMjQ1LTEuNjU4LjE3NS0zLjMzNC4xNzYtNS4wMDMuMTc1LTEuNjcgMC0zLjM0NiAwLTUuMDAzLS4xNzUtLjctLjA3NS0xLjI4LS41Ny0xLjQ0My0xLjI0NUMuNTkgMTMuMjgyLjU5IDEyLjIzNS41OSAxMS4yNDdjMC0uOTg3LjAwMy0yLjAzNC4yMzUtMi45OTMuMTY0LS42NzMuNzQ0LTEuMTcgMS40NDQtMS4yNDQgMS42NTYtLjE3NSAzLjMzMy0uMTc2IDUuMDAzLS4xNzUgMS42NyAwIDMuMzQ1IDAgNS4wMDIuMTc1LjcuMDc0IDEuMjguNTcgMS40NDQgMS4yNDQuMjMyLjk2LjIzIDIuMDA2LjIzIDIuOTkzIDAgLjk4OCAwIDIuMDM1LS4yMzMgMi45OTN6TTExLjc1IDkuNTkzYy0uNDE0IDAtLjczNC4xNDQtLjk2OC40MzMtLjE3LjIxMy0uMjUuNTQzLS4yNS45OTV2MS40OGMwIC40NS4wODguNzguMjYuOTkzLjIzMy4yODguNTU1LjQzMy45NzcuNDMzLjQyIDAgLjc1Mi0uMTUyLjk3NS0uNDU4LjA5OC0uMTM2LjE2Mi0uMjkuMTktLjQ2LjAwNy0uMDc2LjAxNi0uMjQ1LjAxNi0uNDkydi0uMTFoLS44MjJjMCAuMzA1LS4wMS40NzUtLjAxOC41MTctLjA0Ni4yMDQtLjE2Mi4zMDctLjM2LjMwNy0uMjc4IDAtLjQxNC0uMTk1LS40MTQtLjU4NnYtLjc1aDEuNjE1di0uODc0YzAtLjQ1LS4wOC0uNzgtLjI1LS45OTUtLjIyNC0uMjg4LS41NDYtLjQzMi0uOTUtLjQzMnptLjM5NCAxLjY2NWgtLjgwN3YtLjM5YzAtLjM5LjEzNS0uNTg2LjQwNS0uNTg2LjI2NyAwIC40MDIuMTk1LjQwMi41ODV2LjM5elxcXCIgZmlsbD1cXFwiIzM0MzQzNFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwieW91dHViZTJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcveW91dHViZTIuc3ZnXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7TUVESUFfUVVFUklFU30gZnJvbSAnanMvc2hhcmVkL3NoYXJlZCc7XG5cbi8qKlxuICogTWVkaWFRdWVyeSBtb2R1bGVcbiAqIFVzZWQgdG8gZGV0ZWN0IGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAqXG4gKiBVc2FnZTpcbiAqICQod2luZG93KS5vbihNRURJQV9RVUVSWSwgY2FsbGJhY2sgKTtcbiAqXG4gKiBXaGVyZTpcbiAqICAgIE1FRElBX1FVRVJZIGNhbiBiZSA6ICd4cycsICdzbScsICdtZCcsICdsZycsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAneHNNaW4nLCAnc21NaW4nLCAnbWRNaW4nLCdsZ01pbicsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAneHNNYXgnLCAnc21NYXgnLCAnbWRNYXgnLCAnbGdNYXgnXG4gKiAgICBDYWxsYmFjazogZnVuY3Rpb24gbmFtZSBvciBhbm9ueW1vdXMgZnVuY3Rpb25cbiAqXG4gKiAgICBlLmcuIDpcbiAqXG4gKiAgICBmdW5jdGlvbiBzYXlHb29kYnllID0geyBhbGVydCgnZ29vZGJ5ZScpIH1cbiAqICAgICQod2luZG93KS5vbignc21NaW4nLCBzYXlHb29kYnllIH0pXG4gKlxuICogICAgb3JcbiAqXG4gKiAgICAkKHdpbmRvdykub24oJ3NtTWluJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCdoZWxsbycpOyB9KVxuICpcbiAqXG4gKiBAdHlwZSB7e25ldygpPT57X2hhbmRsZU1RQ2hhbmdlOiAoKG1xbCwgaW5kZXg/KSksIGRlc3Ryb3k6ICgoKSl9fX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFRdWVyaWVzQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3aW5kb3cuaW5mbyA9IHdpbmRvdy5pbmZvIHx8IHt9O1xuICAgIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcyA9IGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcyB8fCBbXTtcblxuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEodmFsdWUpO1xuXG4gICAgICAvLyB0aGUgZGVmYXVsdCBtYXRjaG1lZGlhJ3MgYWRkTGlzdGVuZXIgbWV0aG9kIGRvZXNuJ3Qgc3VwcG9ydCBleHRyYSBwYXJhbWV0ZXJzLFxuICAgICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgYW5vdGhlciBleHRyYSBmdW5jdGlvbiB0aGF0IGNhbiBwYXNzIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgbmFtZVxuICAgICAgbXFsLmFkZExpc3RlbmVyKHRoaXMuYWRkTVFMaXN0ZW5lciA9IChtcWwpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlTVFDaGFuZ2UobXFsLCBpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgICQuZWFjaChNRURJQV9RVUVSSUVTLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSkucmVtb3ZlTGlzdGVuZXIodGhpcy5hZGRNUUxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBoYW5kbGUgdGhlIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICAgKiBAcGFyYW0gbXFsIC0gY3VycmVudCBtZWRpYSBxdWVyeVxuICAgKiBAcGFyYW0gYnJlYWtwb2ludE5hbWUgLSBjdXJyZW50IGJyZWFrcG9pbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICBfaGFuZGxlTVFDaGFuZ2UobXFsLCBicmVha3BvaW50TmFtZSkge1xuICAgIGlmIChtcWwubWF0Y2hlcykge1xuICAgICAgJCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKGJyZWFrcG9pbnROYW1lKTtcblxuICAgICAgaWYgKGJyZWFrcG9pbnROYW1lLmluZGV4T2YoJ01pbicpID09PSAtMVxuICAgICAgICAmJiBicmVha3BvaW50TmFtZS5pbmRleE9mKCdNYXgnKSA9PT0gLTEpIHtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdtZWRpYVF1ZXJ5Q2hhbmdlJywgYnJlYWtwb2ludE5hbWUpO1xuICAgICAgfVxuXG4gICAgICAkLmVhY2goaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghd2luZG93Lm1hdGNoTWVkaWEoTUVESUFfUVVFUklFU1t2YWx1ZV0pLm1hdGNoZXMpIHtcbiAgICAgICAgICBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcy5wdXNoKGJyZWFrcG9pbnROYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tZWRpYS1xdWVyaWVzL21lZGlhLXF1ZXJpZXMuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFZBTFVFU19HUklEID0ge1xuICB4c01pbjogMCxcbiAgeHNNYXg6IDc2NyxcbiAgc21NaW46IDc2OCxcbiAgc21NYXg6IDEwMjMsXG4gIG1kTWluOiAxMDI0LFxuICBtZE1heDogMTE5OSxcbiAgbGdNaW46IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0ge1xuICB4c01pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC54c01pbn1weClgLFxuICB4czogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICB4c01heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC54c01heH1weClgLFxuICBzbU1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weClgLFxuICBzbTogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgc21NYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQuc21NYXh9cHgpYCxcbiAgbWRNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpYCxcbiAgbWQ6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIG1kTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELm1kTWF4fXB4KWAsXG4gIGxnTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWAsXG4gIGxnOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELmxnTWlufXB4KWBcbn07XG5cbmV4cG9ydCBjb25zdCBTSEFSRURfQ0xBU1NFUyA9IHtcbiAgYWN0aXZlOiAnaXMtYWN0aXZlJyxcbiAgZXhwYW5kZWQ6ICdpcy1leHBhbmRlZCcsXG4gIGFuaW1hdGU6ICdpcy1hbmltYXRlZCcsXG4gIHZpc2libGU6ICdpcy12aXNpYmxlJyxcbiAgY29sbGFwc2VkOiAnaXMtY29sbGFwc2VkJyxcbiAgb3V0c2lkZVZpZXdwb3J0OiAnaXMtb3V0c2lkZS12aWV3cG9ydCdcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9zaGFyZWQvc2hhcmVkLmpzXG4gKiovIiwiaW1wb3J0IE1vYmlsZSBmcm9tICcuL21lbnUubW9iaWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgRGVza3RvcCBmcm9tICcuL21lbnUuZGVza3RvcC5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYWRkTWVkaWFRdWVyeUNhbGxiYWNrcygpO1xuICAgIHRoaXMuX2NoZWNrQ3VycmVudEJyZWFrcG9pbnQoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlTWVkaWFRdWVyeUNhbGxiYWNrcygpO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBfYWRkTWVkaWFRdWVyeUNhbGxiYWNrcygpIHtcbiAgICAkKHdpbmRvdykub24oJ3hzTWF4JywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb01vYmlsZSwgdGhpcykpO1xuICAgICQod2luZG93KS5vbignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCwgdGhpcykpO1xuICB9XG5cbiAgX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJCh3aW5kb3cpLm9mZigneHNNYXgnLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlLmJpbmQodGhpcykpKTtcbiAgICAkKHdpbmRvdykub2ZmKCdzbU1pbicsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wLmJpbmQodGhpcykpKTtcbiAgfVxuXG4gIF9jaGVja0N1cnJlbnRCcmVha3BvaW50KCkge1xuICAgIGlmIChpbmZvICYmIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcyAmJiBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMuaW5kZXhPZigneHNNYXgnKSA+IC0xKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZWRUb01vYmlsZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkNoYW5nZWRUb0Rlc2t0b3AoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERlc2t0b3AoKTtcbiAgfVxuXG4gIF9vbkNoYW5nZWRUb01vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW9iaWxlKCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tZW51L21lbnUuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hZGRFdmVudEhhbmRsZXJzKCk7XG4gIH07XG5cbiAgZGVzdHJveSgpIHtcbiAgfTtcblxuICBfYWRkRXZlbnRIYW5kbGVycygpIHtcbiAgICAkKCcubWVudUljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tZW51L21lbnUubW9iaWxlLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgZGVzdHJveSgpIHtcbiAgfVxuXG4gIF9vbk1lZGlhUXVlcnlDaGFuZ2UoKSB7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21lbnUvbWVudS5kZXNrdG9wLmNvbXBvbmVudC5qc1xuICoqLyIsImltcG9ydCBNb2JpbGUgZnJvbSAnLi9jdXJyZW5jaWVzLm1vYmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IERlc2t0b3AgZnJvbSAnLi9jdXJyZW5jaWVzLmRlc2t0b3AuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVuY2llc0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FkZE1lZGlhUXVlcnlDYWxsYmFja3MoKTtcbiAgICB0aGlzLl9jaGVja0N1cnJlbnRCcmVha3BvaW50KCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgX2FkZE1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJCh3aW5kb3cpLm9uKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUsIHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ3NtTWluJywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AsIHRoaXMpKTtcbiAgfVxuXG4gIF9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQod2luZG93KS5vZmYoJ3hzTWF4JywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb01vYmlsZS5iaW5kKHRoaXMpKSk7XG4gICAgJCh3aW5kb3cpLm9mZignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcC5iaW5kKHRoaXMpKSk7XG4gIH1cblxuICBfY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpIHtcbiAgICBpZiAoaW5mbyAmJiBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgJiYgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLmluZGV4T2YoJ3hzTWF4JykgPiAtMSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfb25DaGFuZ2VkVG9EZXNrdG9wKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEZXNrdG9wKCk7XG4gIH1cblxuICBfb25DaGFuZ2VkVG9Nb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vYmlsZSgpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY3VycmVuY2llcy9jdXJyZW5jaWVzLmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdtb2JpbGUnKTtcbiAgfTtcblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUud2FybignZGVzdHJveSBtb2JpbGUnKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY3VycmVuY2llcy9jdXJyZW5jaWVzLm1vYmlsZS5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUud2FybignZGVza3RvcCcpO1xuICAgICQod2luZG93KS5vbignbWVkaWFRdWVyeUNoYW5nZScsICQucHJveHkodGhpcy5fb25NZWRpYVF1ZXJ5Q2hhbmdlLCB0aGlzKSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnNvbGUud2FybignZGVzdHJveSBkZXNrdG9wJyk7XG4gIH1cblxuICBfb25NZWRpYVF1ZXJ5Q2hhbmdlKGUsIGRhdGEpIHtcbiAgICBjb25zb2xlLndhcm4oZGF0YSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5kZXNrdG9wLmNvbXBvbmVudC5qc1xuICoqLyIsImltcG9ydCB7U0hBUkVEX0NMQVNTRVN9IGZyb20gJ2pzL3NoYXJlZC9zaGFyZWQnO1xuaW1wb3J0IHtDTEFTU0VTLCBFVkVOVF9OQU1FU1BBQ0V9IGZyb20gJy4vdG9wLWhlYWRlci1teS1hY2NvdW50LmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEhlYWRlck15QWNjb3VudENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuJGxpbmsgPSAkZWwuZmluZChgLiR7Q0xBU1NFUy5saW5rfWApO1xuICAgIHRoaXMuJGxlZnRTaWRlID0gJGVsLmZpbmQoYC4ke0NMQVNTRVMubGVmdFNpZGV9YCk7XG4gICAgdGhpcy4kcmlnaHRTaWRlID0gJGVsLmZpbmQoYC4ke0NMQVNTRVMucmlnaHRTaWRlfWApO1xuICAgIHRoaXMuJHdlbGNvbWVNZXNzYWdlID0gdGhpcy4kcmlnaHRTaWRlLmZpbmQoYC4ke0NMQVNTRVMubGlua31gKTtcblxuICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuX2FkZEV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuJGxlZnRTaWRlLmFkZCh0aGlzLiR3ZWxjb21lTWVzc2FnZSkucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYW5pbWF0ZSk7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgICB0aGlzLiRsZWZ0U2lkZS5hZGQodGhpcy4kd2VsY29tZU1lc3NhZ2UpLndpZHRoKCcnKTtcbiAgICB0aGlzLiRsZWZ0U2lkZS5hZGRDbGFzcyhTSEFSRURfQ0xBU1NFUy5vdXRzaWRlVmlld3BvcnQpO1xuICAgIHRoaXMuJGVsID0gbnVsbDtcbiAgICB0aGlzLiRsZWZ0U2lkZSA9IG51bGw7XG4gICAgdGhpcy4kcmlnaHRTaWRlID0gbnVsbDtcbiAgICB0aGlzLiR3ZWxjb21lTWVzc2FnZSA9IG51bGw7XG4gIH1cblxuICBfY2FsY3VsYXRlV2lkdGhzKCkge1xuICAgIHRoaXMuJGxlZnRTaWRlLmF0dHIoJ2RhdGEtd2lkdGgnLCB0aGlzLiRsZWZ0U2lkZS5vdXRlcldpZHRoKCkpO1xuICAgIHRoaXMuJHdlbGNvbWVNZXNzYWdlLmF0dHIoJ2RhdGEtd2lkdGgnLCB0aGlzLiR3ZWxjb21lTWVzc2FnZS5vdXRlcldpZHRoKCkpO1xuICAgIHRoaXMuJGxlZnRTaWRlLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmNvbGxhcHNlZCkucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMub3V0c2lkZVZpZXdwb3J0KTtcbiAgICB0aGlzLiR3ZWxjb21lTWVzc2FnZS5vdXRlcldpZHRoKHRoaXMuJHdlbGNvbWVNZXNzYWdlLmRhdGEoJ3dpZHRoJykpO1xuICB9XG5cbiAgX2FkZEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgaWYgKHdpbmRvdy5Nb2Rlcm5penIudG91Y2hldmVudHMpIHtcbiAgICAgIHRoaXMuJGVsLm9uKGBjbGljayR7RVZFTlRfTkFNRVNQQUNFfWAsICQucHJveHkodGhpcy5fYWN0aXZhdGVJdGVtLCB0aGlzKSk7XG4gICAgICAkKGRvY3VtZW50KS5vbihgY2xpY2ske0VWRU5UX05BTUVTUEFDRX1gLCAkLnByb3h5KHRoaXMuX2RlYWN0aXZhdGVJdGVtLCB0aGlzKSk7XG4gICAgICB0aGlzLiRsaW5rLm9uKGBjbGljayR7RVZFTlRfTkFNRVNQQUNFfWAsIHRoaXMuX2FjdGl2YXRlTGluayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsLm9uKGBtb3VzZW92ZXIke0VWRU5UX05BTUVTUEFDRX1gLCAkLnByb3h5KHRoaXMuX2FjdGl2YXRlSXRlbSwgdGhpcykpO1xuICAgICAgdGhpcy4kZWwub24oYG1vdXNlb3V0JHtFVkVOVF9OQU1FU1BBQ0V9YCwgJC5wcm94eSh0aGlzLl9kZWFjdGl2YXRlSXRlbSwgdGhpcykpO1xuICAgICAgdGhpcy4kbGluay5vbihgbW91c2VvdmVyJHtFVkVOVF9OQU1FU1BBQ0V9YCwgdGhpcy5fYWN0aXZhdGVMaW5rKTtcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICB0aGlzLiRlbC5vZmYoRVZFTlRfTkFNRVNQQUNFKTtcbiAgICAkKGRvY3VtZW50KS5vZmYoRVZFTlRfTkFNRVNQQUNFKTtcbiAgfVxuXG4gIF9hY3RpdmF0ZUxpbmsoKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcyhTSEFSRURfQ0xBU1NFUy5hY3RpdmUpO1xuICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhTSEFSRURfQ0xBU1NFUy5hY3RpdmUpO1xuICB9XG5cbiAgX2FjdGl2YXRlSXRlbShlKSB7XG4gICAgaWYgKHdpbmRvdy5Nb2Rlcm5penIudG91Y2hldmVudHMpIHtcbiAgICAgIHRoaXMuX3ByZXZlbnRDbGlja0ZpcnN0VGltZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xpZGVJbkxlZnRTaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2RlYWN0aXZhdGVJdGVtKGUpIHtcbiAgICBpZiAod2luZG93Lk1vZGVybml6ci50b3VjaGV2ZW50cykge1xuICAgICAgaWYgKCF0aGlzLiRlbC5pcyhlLnRhcmdldCkgLy8gaWYgdGhlIHRhcmdldCBvZiB0aGUgY2xpY2sgaXNuJ3QgdGhlIGNvbnRhaW5lci4uLlxuICAgICAgICAmJiB0aGlzLiRlbC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgLy8gLi4uIG5vciBhIGRlc2NlbmRhbnQgb2YgdGhlIGNvbnRhaW5lclxuICAgICAge1xuICAgICAgICB0aGlzLl9zbGlkZU91dExlZnRTaWRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NsaWRlT3V0TGVmdFNpZGUoKTtcbiAgICB9XG4gIH1cblxuICBfcHJldmVudENsaWNrRmlyc3RUaW1lKGUpIHtcbiAgICBpZiAodGhpcy4kZWwuaGFzQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgICAgIHRoaXMuX3NsaWRlSW5MZWZ0U2lkZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9zbGlkZUluTGVmdFNpZGUoKSB7XG4gICAgdGhpcy4kbGVmdFNpZGVcbiAgICAgIC5vbmUoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJHdlbGNvbWVNZXNzYWdlXG4gICAgICAgICAgLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmFuaW1hdGUpXG4gICAgICAgICAgLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmNvbGxhcHNlZCk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmFuaW1hdGUpXG4gICAgICAud2lkdGgodGhpcy4kbGVmdFNpZGUuZGF0YSgnd2lkdGgnKSlcbiAgICAgIC5yZW1vdmVDbGFzcyhTSEFSRURfQ0xBU1NFUy5jb2xsYXBzZWQpO1xuICB9XG5cbiAgX3NsaWRlT3V0TGVmdFNpZGUoKSB7XG4gICAgdGhpcy4kbGVmdFNpZGVcbiAgICAgIC5vbmUoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJHdlbGNvbWVNZXNzYWdlLnJlbW92ZUNsYXNzKFNIQVJFRF9DTEFTU0VTLmNvbGxhcHNlZCk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKFNIQVJFRF9DTEFTU0VTLmFjdGl2ZSk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmNvbGxhcHNlZCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy90b3AtaGVhZGVyLW15LWFjY291bnQvdG9wLWhlYWRlci1teS1hY2NvdW50LmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBDTEFTU0VTID0ge1xuICBsaW5rOiAnbXlBY2NvdW50X19saW5rJyxcbiAgbGVmdFNpZGU6ICdteUFjY291bnRfX2xlZnRTaWRlJyxcbiAgcmlnaHRTaWRlOiAnbXlBY2NvdW50X19yaWdodFNpZGUnLFxuICBpbWFnZTogJ215QWNjb3VudF9faW1nJ1xufTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVTUEFDRSA9ICcudG9wSGVhZGVyTXlBY2NvdW50JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3RvcC1oZWFkZXItbXktYWNjb3VudC90b3AtaGVhZGVyLW15LWFjY291bnQuY29uZmlnLmpzXG4gKiovIiwiaW1wb3J0IHtTSEFSRURfQ0xBU1NFU30gZnJvbSAnanMvc2hhcmVkL3NoYXJlZCc7XG5pbXBvcnQge0NMQVNTRVMsIEVWRU5UX05BTUVTUEFDRX0gZnJvbSAnLi90b3AtaGVhZGVyLXdpc2gtbGlzdC5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BIZWFkZXJXaXNoTGlzdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuJGxpbmsgPSAkZWwuZmluZChgLiR7Q0xBU1NFUy5saW5rfWApO1xuXG4gICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgdGhpcy5fYWRkRXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuX3ZhbGlkYXRlUGFnZUxpbmsoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuJGxpbmtcbiAgICAgIC5yZW1vdmVDbGFzcyhgJHtTSEFSRURfQ0xBU1NFUy5hbmltYXRlfSAke1NIQVJFRF9DTEFTU0VTLmFjdGl2ZX1gKVxuICAgICAgLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLm91dHNpZGVWaWV3cG9ydClcbiAgICAgIC53aWR0aCgnJyk7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgICB0aGlzLiRlbCA9IG51bGw7XG4gICAgdGhpcy4kbGluayA9IG51bGw7XG4gIH1cblxuICBfdmFsaWRhdGVQYWdlTGluaygpIHtcbiAgICBpZiAodGhpcy4kbGluay5hdHRyKCdocmVmJykubGVuZ3RoIDwgMSkge1xuICAgICAgY29uc29sZS53YXJuKCdObyBXaXNoTGlzdCBQYWdlIEZvdW5kISBQbGVhc2UgdXBkYXRlIGl0IGluc2lkZSB0aGUgQ3VzdG9taXplIFRoZW1lIC0+IEhlYWRlciAtPiBXaXNoTGlzdCBQYWdlJyk7XG4gICAgfVxuICB9XG5cbiAgX2NhbGN1bGF0ZVdpZHRocygpIHtcbiAgICB0aGlzLiRsaW5rLmF0dHIoJ2RhdGEtd2lkdGgnLCB0aGlzLiRsaW5rLm91dGVyV2lkdGgoKSk7XG4gICAgdGhpcy4kbGluay5hZGRDbGFzcyhTSEFSRURfQ0xBU1NFUy5jb2xsYXBzZWQpXG4gICAgICAucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMub3V0c2lkZVZpZXdwb3J0KTtcbiAgfVxuXG4gIF9hZGRFdmVudEhhbmRsZXJzKCkge1xuICAgIGlmICh3aW5kb3cuTW9kZXJuaXpyLnRvdWNoZXZlbnRzKSB7XG4gICAgICB0aGlzLiRlbC5vbihgY2xpY2ske0VWRU5UX05BTUVTUEFDRX1gLCAkLnByb3h5KHRoaXMuX2FjdGl2YXRlSXRlbSwgdGhpcykpO1xuICAgICAgJChkb2N1bWVudCkub24oYGNsaWNrJHtFVkVOVF9OQU1FU1BBQ0V9YCwgJC5wcm94eSh0aGlzLl9kZWFjdGl2YXRlSXRlbSwgdGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbC5vbihgbW91c2VvdmVyJHtFVkVOVF9OQU1FU1BBQ0V9YCwgJC5wcm94eSh0aGlzLl9hY3RpdmF0ZUl0ZW0sIHRoaXMpKTtcbiAgICAgIHRoaXMuJGVsLm9uKGBtb3VzZW91dCR7RVZFTlRfTkFNRVNQQUNFfWAsICQucHJveHkodGhpcy5fZGVhY3RpdmF0ZUl0ZW0sIHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICB0aGlzLiRlbC5vZmYoRVZFTlRfTkFNRVNQQUNFKTtcbiAgICAkKGRvY3VtZW50KS5vZmYoRVZFTlRfTkFNRVNQQUNFKTtcbiAgfVxuXG4gIF9hY3RpdmF0ZUl0ZW0oZSkge1xuICAgIGlmICh3aW5kb3cuTW9kZXJuaXpyLnRvdWNoZXZlbnRzKSB7XG4gICAgICB0aGlzLl9wcmV2ZW50Q2xpY2tGaXJzdFRpbWUoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NsaWRlSW5MaW5rKCk7XG4gICAgfVxuICB9XG5cbiAgX2RlYWN0aXZhdGVJdGVtKGUpIHtcbiAgICBpZiAod2luZG93Lk1vZGVybml6ci50b3VjaGV2ZW50cykge1xuICAgICAgaWYgKCF0aGlzLiRlbC5pcyhlLnRhcmdldCkgLy8gaWYgdGhlIHRhcmdldCBvZiB0aGUgY2xpY2sgaXNuJ3QgdGhlIGNvbnRhaW5lci4uLlxuICAgICAgICAmJiB0aGlzLiRlbC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgLy8gLi4uIG5vciBhIGRlc2NlbmRhbnQgb2YgdGhlIGNvbnRhaW5lclxuICAgICAge1xuICAgICAgICB0aGlzLl9zbGlkZU91dExpbmsoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xpZGVPdXRMaW5rKCk7XG4gICAgfVxuICB9XG5cbiAgX3ByZXZlbnRDbGlja0ZpcnN0VGltZShlKSB7XG4gICAgaWYgKHRoaXMuJGVsLmhhc0NsYXNzKFNIQVJFRF9DTEFTU0VTLmFjdGl2ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuJGVsLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmFjdGl2ZSk7XG4gICAgICB0aGlzLl9zbGlkZUluTGluaygpO1xuICAgIH1cbiAgfVxuXG4gIF9zbGlkZUluTGluaygpIHtcbiAgICB0aGlzLiRsaW5rLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmFuaW1hdGUpO1xuICAgIHRoaXMuJGxpbmsuaW5uZXJXaWR0aCh0aGlzLiRsaW5rLmRhdGEoJ3dpZHRoJykpLnJlbW92ZUNsYXNzKFNIQVJFRF9DTEFTU0VTLmNvbGxhcHNlZCk7XG4gICAgdGhpcy4kbGluay5hZGRDbGFzcyhTSEFSRURfQ0xBU1NFUy5hY3RpdmUpO1xuICB9XG5cbiAgX3NsaWRlT3V0TGluaygpIHtcbiAgICB0aGlzLiRlbC5hZGQodGhpcy4kbGluaykucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgICB0aGlzLiRsaW5rLmFkZENsYXNzKFNIQVJFRF9DTEFTU0VTLmNvbGxhcHNlZCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy90b3AtaGVhZGVyLXdpc2gtbGlzdC90b3AtaGVhZGVyLXdpc2gtbGlzdC5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgQ0xBU1NFUyA9IHtcbiAgbGluazogJ3dpc2hMaXN0X19saW5rJyxcbiAgaW1hZ2U6ICd3aXNoTGlzdF9faW1nJ1xufTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVTUEFDRSA9ICcudG9wSGVhZGVyV2lzaExpc3QnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvdG9wLWhlYWRlci13aXNoLWxpc3QvdG9wLWhlYWRlci13aXNoLWxpc3QuY29uZmlnLmpzXG4gKiovIiwiaW1wb3J0IHtDTEFTU0VTLCBFVkVOVF9OQU1FU1BBQ0V9IGZyb20gJy4vd2lzaC1saXN0LmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpc2hMaXN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAkKGRvY3VtZW50KS5vbihgY2xpY2ske0VWRU5UX05BTUVTUEFDRX1gLCBgLiR7Q0xBU1NFUy5idXR0b259YCwgJC5wcm94eSh0aGlzLl9wb3N0VG9XaXNobGlzdCwgdGhpcykpO1xuICAgICQoZG9jdW1lbnQpLm9uKGBjbGljayR7RVZFTlRfTkFNRVNQQUNFfWAsIGAuJHtDTEFTU0VTLnJlbW92ZUJ1dHRvbn1gLCAkLnByb3h5KHRoaXMuX3JlbW92ZUZyb21XaXNobGlzdCwgdGhpcykpO1xuICAgICQoZG9jdW1lbnQpLm9uKGBjbGljayR7RVZFTlRfTkFNRVNQQUNFfWAsIGAuJHtDTEFTU0VTLmFkZFRvQ2FydH1gLCAkLnByb3h5KHRoaXMuX2FkZFRvQ2FydCwgdGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJChkb2N1bWVudCkub2ZmKEVWRU5UX05BTUVTUEFDRSk7XG4gIH1cblxuICBfcG9zdFRvV2lzaGxpc3QoZSkge1xuICAgIGxldFxuICAgICAgb3B0aW9ucyA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCdzcy1vcHRpb25zJyksXG4gICAgICBwb3N0RGF0YSA9IFtcbiAgICAgICAge25hbWU6ICdmb3JtX3R5cGUnLCB2YWx1ZTogJ2N1c3RvbWVyJ30sXG4gICAgICAgIHtuYW1lOiAnY29udGFjdFtlbWFpbF0nLCB2YWx1ZTogb3B0aW9uc1snZW1haWwnXX0sXG4gICAgICAgIHtuYW1lOiAnY29udGFjdFt0YWdzXScsIHZhbHVlOiBvcHRpb25zWyd2YXJpYW50SUQnXX1cbiAgICAgIF07XG5cbiAgICAkLnBvc3QoJy9jb250YWN0JywgcG9zdERhdGEpXG4gICAgICAuZG9uZSgoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgICAuZmFpbCgoKSA9PiBjb25zb2xlLndhcm4oJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIScpKTtcbiAgfVxuXG4gIF9hZGRUb0NhcnQoZSkge1xuICAgIGxldCB2YXJpYW50SUQ7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyaWFudElEID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XG4gICAgJCgnI3Byb2R1Y3Qtc2VsZWN0JykuYXR0cigndmFsdWUnLCB2YXJpYW50SUQpO1xuICAgIHRoaXMuX3JlbW92ZUZyb21XaXNobGlzdCgkKHRoaXMpKTtcbiAgICAkKCcjYWRkLXZhcmlhbnQnKS5zdWJtaXQoKTtcbiAgfVxuXG4gIF9yZW1vdmVGcm9tV2lzaGxpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgJHRoaXMgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgLy8gc2VsZWN0IHBhcmVudCBsaSBlbGVtZW50XG4gICAgbGV0ICRlbGVtID0gJHRoaXMuY2xvc2VzdCgnbGknKTtcbiAgICAvLyBnZXQgdGhlIGlkIHdoaWNoIGlzIHRoZSBzZWxlY3RlZCB2YXJpYW50IHRhZ1xuICAgIGxldCB0YWdJRCA9ICRlbGVtLmF0dHIoJ2lkJyk7XG4gICAgbGV0ICRmb3JtID0gJCgnI3JlbW92ZScpO1xuXG4gICAgLy8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgaW4gdGhlIGZvcm0gdG8gdGhlIHNlbGVjdGVkIHZhcmlhbnRcbiAgICAkKCcjcmVtb3ZlLXZhbHVlJykuYXR0cigndmFsdWUnLCB0YWdJRCk7XG4gICAgbGV0IHBvc3REYXRhID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcbiAgICBsZXQgZm9ybVVSTCA9ICRmb3JtLmF0dHIoJ2FjdGlvbicpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmwgOiBmb3JtVVJMLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YSA6IHBvc3REYXRhLFxuICAgICAgc3VjY2VzczpmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybih0ZXh0U3RhdHVzKTtcbiAgICAgICAgJGVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIGlmICgkKCd1bC53aXNobGlzdCBsaScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICQoJyN3aXNobGlzdC1lbWFpbC1saW5rJykuZW1wdHkoKS5odG1sKCc8cD5Zb3VyIHdpc2ggbGlzdCBpcyBjdXJyZW50bHkgZW1wdHkuPC9wPicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUVtYWlsTGlzdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFwcGVuZChgPHA+SSdtIGFmcmFpZCB0aGF0IGRpZG4ndCB3b3JrLjwvcD5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVFbWFpbExpc3QoKSB7XG4gICAgbGV0IGN1cnJlbnRVUkwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogY3VycmVudFVSTCxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHRleHRTdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKHRleHRTdGF0dXMpO1xuICAgICAgICBsZXQgbmV3RW1haWxMaW5rID0gJChkYXRhKS5maW5kKCcjd2lzaGxpc3QtZW1haWwtbGluayBhJyk7XG4gICAgICAgICQoJyN3aXNobGlzdC1lbWFpbC1saW5rJykuaHRtbChuZXdFbWFpbExpbmspO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0Q2FsbGJhY2sodmFyaWFudCkge1xuXG4gICAgLy8geW91IHdpbGwgYmUgdXNpbmcgc29tZXRoaW5nIGxpa2UgdGhpcyBpZiB5b3UgYXJlIHVzaW5nIFNob3BpZnkncyBvcHRpb25fc2VsZWN0aW9uLmpzIGFzIGEgY2FsbGJhY2sgdG9cbiAgICAvLyB1cGRhdGUgeW91ciBpbWFnZXMgYW5kIHN0dWZmIHdoZW4gdGhlIHVzZXIgY2hvb3NlcyBhbm90aGVyIHZhcmlhbnQgZnJvbSBhIHByb2R1Y3Qgc2VsZWN0IGVsZW1lbnQuXG4gICAgLy8gSnVzdCBhZGQgdGhlIGJpdHMgYmVsb3cgdG8gd2hhdCB5b3UgYWxyZWFkeSBoYXZlIGluIHRoZXJlLiBUaGlzIHdpbGwgZW5zdXJlIHdoZW4gdGhlIGN1c3RvbWVyIHBpY2tzIGFub3RoZXJcbiAgICAvLyB2YXJpYW50LCB0aGUgd2lzaCBsaXN0IGZvcm0gd2lsbCB1cGRhdGUgdG8gdGhlIGN1cnJlbnQgdmFyaWFudC5cbiAgICAvL1VwZGF0ZSB3aXNobGlzdCBmb3JtXG4gICAgbGV0ICR3aXNoTGlzdCA9ICQoJy5qcy13aXNoLWxpc3QnKTtcbiAgICBsZXQgY3VycmVudFVSTCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBsZXQgbmV3VVJMID0gY3VycmVudFVSTCArICc/dmFyaWFudD0nICsgdmFyaWFudC5pZDtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHVybDogbmV3VVJMLFxuICAgICAgc3VjY2VzczpmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICR3aXNoTGlzdC5lbXB0eSgpO1xuICAgICAgICBsZXQgbmV3RGF0YSA9ICQoZGF0YSkuZmluZCgnLmpzLXdpc2gtbGlzdCcpLmh0bWwoKTtcbiAgICAgICAgJHdpc2hMaXN0Lmh0bWwobmV3RGF0YSk7XG5cbiAgICAgICAgLy8gcmVzZXQgZXZlbnQgbGlzdGVuZXIgZm9yIHBvc3RpbmcgdG8gd2lzaCBsaXN0XG4gICAgICAgIHRoaXMuX3Bvc3RUb1dpc2hsaXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IENMQVNTRVMgPSB7XG4gIGJ1dHRvbjogJ3dpc2hMaXN0X19idXR0b24nLFxuICByZW1vdmVCdXR0b246ICd3aXNoTGlzdF9fcmVtb3ZlQnV0dG9uJyxcbiAgYWRkVG9DYXJ0OiAnd2lzaExpc3RfX2FkZFRvQ2FydEJ1dHRvbidcbn07XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9OQU1FU1BBQ0UgPSAnLndpc2hMaXN0JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29uZmlnLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==