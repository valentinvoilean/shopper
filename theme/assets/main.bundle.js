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
	      var _self = this;
	
	      if (this.classes === _app.CLASSES) {
	        $.each(_app.CLASSES[state], function (index, value) {
	          new value();
	        });
	      }
	
	      $(document).find('[data-ss-state="' + state + '"]').each(function () {
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CLASSES = exports.CLASSES = {
	  dom: { MenuComponent: _menu2.default, CurrenciesComponent: _currencies2.default, TopHeaderMyAccountComponent: _topHeaderMyAccount2.default },
	  onReady: { MediaQueriesComponent: _mediaQueries2.default },
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
		"./wishlist-1.svg": 42,
		"./wishlist-2.svg": 43,
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
	var image = "<symbol viewBox=\"0 0 20 20\" id=\"user-1\" ><path d=\"M20 10c0-5.514-4.486-10-10-10S0 4.486 0 10c0 2.912 1.252 5.537 3.246 7.367l-.01.008.325.273c.022.018.045.033.066.05.172.143.35.28.533.41.057.043.116.085.176.127.195.133.394.26.597.38l.134.078c.223.127.45.246.684.356l.053.022c.76.353 1.57.613 2.418.766l.068.012c.263.045.53.082.8.106l.097.008c.27.022.54.036.815.036.272 0 .54-.014.808-.036l.1-.007c.27-.025.533-.06.793-.105l.07-.012c.835-.15 1.634-.403 2.384-.747l.083-.038c.224-.106.444-.22.66-.34l.158-.092c.196-.116.388-.236.575-.364l.2-.143c.16-.115.316-.234.47-.358.032-.028.07-.052.102-.08l.333-.277-.01-.01C18.735 15.564 20 12.928 20 10zM.727 10C.727 4.887 4.887.727 10 .727c5.113 0 9.273 4.16 9.273 9.273 0 2.755-1.21 5.232-3.124 6.932-.107-.074-.215-.14-.325-.195l-3.08-1.54c-.276-.138-.447-.416-.447-.724v-1.076c.07-.088.146-.187.224-.297.4-.563.718-1.19.95-1.863.462-.218.76-.677.76-1.196V8.753c0-.315-.116-.62-.323-.86V6.193c.018-.19.085-1.254-.686-2.133-.67-.764-1.755-1.15-3.224-1.15-1.47 0-2.554.386-3.224 1.15-.77.88-.704 1.945-.685 2.133V7.89c-.206.24-.322.547-.322.862v1.29c0 .4.18.773.488 1.025.294 1.154.9 2.027 1.124 2.323v1.053c0 .296-.16.57-.422.712l-2.875 1.568c-.092.05-.183.108-.274.173C1.92 15.196.726 12.736.726 10zm14.713 7.503c-.128.092-.257.18-.388.267-.06.04-.12.078-.182.117-.172.106-.346.207-.525.3l-.118.062c-.41.21-.833.39-1.268.536l-.048.015c-.228.077-.46.144-.692.202h-.002c-.236.06-.474.107-.714.147-.007 0-.013 0-.02.002-.226.037-.453.064-.682.084l-.12.01c-.227.016-.454.027-.682.027-.23 0-.46-.012-.69-.03-.04-.002-.078-.004-.118-.008-.23-.02-.46-.047-.687-.084-.01 0-.02-.003-.03-.005-.48-.08-.954-.198-1.415-.353l-.043-.015c-.23-.077-.455-.164-.677-.26h-.005c-.21-.092-.416-.192-.62-.298-.026-.015-.053-.028-.08-.042-.185-.1-.367-.206-.546-.318l-.16-.102c-.165-.108-.327-.22-.486-.34-.016-.01-.032-.025-.048-.037l.035-.02 2.876-1.567c.494-.27.802-.787.802-1.35v-1.31l-.084-.1c-.008-.01-.795-.967-1.092-2.262l-.033-.143-.125-.08c-.175-.113-.28-.302-.28-.506V8.753c0-.17.072-.327.203-.445l.12-.108V6.172l-.003-.048c0-.008-.108-.883.508-1.585.525-.6 1.426-.904 2.677-.904 1.246 0 2.144.302 2.67.897.617.695.516 1.586.515 1.593L13.182 8.2l.12.108c.13.117.202.275.202.444v1.29c0 .26-.176.494-.43.572l-.18.056-.058.18c-.215.666-.52 1.282-.908 1.83-.095.134-.188.253-.267.345l-.09.103v1.345c0 .586.326 1.113.85 1.375l3.08 1.54.058.03c-.04.03-.08.056-.118.085z\"/></symbol>";
	module.exports = sprite.add(image, "user-1");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 54 47\" id=\"user-2\" ><path d=\"M27.953.004c-14.633-.25-26.7 11.41-26.95 26.043C.863 34.344 4.56 41.8 10.45 46.76c.385-.336.798-.644 1.257-.894l7.907-4.313c1.037-.566 1.683-1.653 1.683-2.835v-3.24s-2.32-2.776-3.206-6.633c-.734-.475-1.226-1.296-1.226-2.23v-3.547c0-.78.347-1.477.886-1.965v-5.126S16.695 8 27.5 8s9.75 7.977 9.75 7.977v5.126c.54.488.885 1.185.885 1.965v3.546c0 1.192-.8 2.195-1.886 2.53-.607 1.88-1.48 3.674-2.634 5.304-.29.41-.563.76-.8 1.03V38.8c0 1.223.69 2.342 1.784 2.888l8.468 4.233c.508.256.967.577 1.39.934 5.71-4.762 9.4-11.882 9.536-19.9.252-14.633-11.407-26.7-26.04-26.95z\"/></symbol>";
	module.exports = sprite.add(image, "user-2");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 51.997 51.997\" id=\"wishlist-1\" ><path d=\"M51.91 16.242c-.758-8.354-6.67-14.415-14.07-14.415-4.93 0-9.445 2.653-11.985 6.905-2.517-4.307-6.846-6.906-11.697-6.906-7.4 0-13.313 6.06-14.07 14.415-.06.37-.307 2.312.44 5.48 1.08 4.567 3.57 8.722 7.2 12.012l18.115 16.44L44.27 33.73c3.63-3.29 6.12-7.444 7.198-12.013.748-3.167.502-5.11.443-5.478zm-2.39 5.02c-.983 4.17-3.264 7.972-6.59 10.984L25.856 47.48 9.072 32.25c-3.33-3.018-5.61-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.7l.015-.102c.65-7.32 5.73-12.632 12.083-12.632 4.687 0 8.813 2.88 10.77 7.515l.922 2.184.92-2.183c1.928-4.563 6.272-7.513 11.07-7.513 6.35 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z\"/></symbol>";
	module.exports = sprite.add(image, "wishlist-1");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(10);
	var image = "<symbol viewBox=\"0 0 51.997 51.997\" id=\"wishlist-2\" ><path d=\"M51.91 16.242c-.758-8.354-6.67-14.415-14.07-14.415-4.93 0-9.445 2.653-11.985 6.905-2.517-4.307-6.846-6.906-11.697-6.906-7.4 0-13.313 6.06-14.07 14.415-.06.37-.307 2.312.44 5.48 1.08 4.567 3.57 8.722 7.2 12.012l18.115 16.44L44.27 33.73c3.63-3.29 6.12-7.444 7.198-12.013.748-3.167.502-5.11.443-5.478z\"/></symbol>";
	module.exports = sprite.add(image, "wishlist-2");

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
	  collapsed: 'is-collapsed'
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
	
	    // We add the animation class after initialization because
	    // if we want to destroy it later to not wait until the animation finishes
	    this.$el.addClass(_shared.SHARED_CLASSES.animate);
	    this.$leftSide.addClass(_shared.SHARED_CLASSES.animate);
	    this.$welcomeMessage.addClass(_shared.SHARED_CLASSES.animate);
	
	    this._calculateWidths();
	    this._addEventHandlers();
	  }
	
	  _createClass(TopHeaderMyAccountComponent, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._removeEventHandlers();
	      this.$el.add(this.$leftSide).add(this.$welcomeMessage).removeClass(_shared.SHARED_CLASSES.animate);
	      this.$el.removeClass(_shared.SHARED_CLASSES.active);
	      this.$leftSide.add(this.$welcomeMessage).width('');
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
	      this.$leftSide.width(0).addClass(_shared.SHARED_CLASSES.visible);
	      this.$welcomeMessage.outerWidth(this.$welcomeMessage.data('width'));
	    }
	  }, {
	    key: '_addEventHandlers',
	    value: function _addEventHandlers() {
	      if (Modernizr.touchevents) {
	        this.$el.on('click', $.proxy(this._activateItem, this));
	        $(document).on('click', $.proxy(this._deactivateItem, this));
	        this.$link.on('click', this._activateLink);
	      } else {
	        this.$el.on('mouseover', $.proxy(this._activateItem, this));
	        this.$el.on('mouseout', $.proxy(this._deactivateItem, this));
	        this.$link.on('mouseover', this._activateLink);
	      }
	    }
	  }, {
	    key: '_removeEventHandlers',
	    value: function _removeEventHandlers() {
	      if (Modernizr.touchevents) {
	        this.$el.off('click', $.proxy(this._activateItem, this));
	        $(document).off('click', $.proxy(this._deactivateItem, this));
	        this.$link.off('click', this._activateLink);
	      } else {
	        this.$el.off('mouseover', $.proxy(this._activateItem, this));
	        this.$el.off('mouseout', $.proxy(this._deactivateItem, this));
	        this.$link.off('mouseover', this._activateLink);
	      }
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
	      if (Modernizr.touchevents) {
	        this._preventClickFirstTime(e);
	      } else {
	        this._slideInLeftSide();
	      }
	    }
	  }, {
	    key: '_deactivateItem',
	    value: function _deactivateItem(e) {
	      if (Modernizr.touchevents) {
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
	        _this.$welcomeMessage.addClass(_shared.SHARED_CLASSES.collapsed);
	      }).width(this.$leftSide.data('width'));
	    }
	  }, {
	    key: '_slideOutLeftSide',
	    value: function _slideOutLeftSide() {
	      var _this2 = this;
	
	      this.$leftSide.one('transitionend', function () {
	        _this2.$welcomeMessage.removeClass(_shared.SHARED_CLASSES.collapsed);
	        _this2.$el.removeClass(_shared.SHARED_CLASSES.active);
	      }).width(0);
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

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3ZnLXNwcml0ZS9zdmctc3ByaXRlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnIG5vbnJlY3Vyc2l2ZSBcXC5zdmckIiwid2VicGFjazovLy8uL3NyYy9zdmcvVHdpdHRlcjIuc3ZnIiwid2VicGFjazovLy8uL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlLmpzIiwid2VicGFjazovLy8uL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zbmlmZnIvc3JjL3NuaWZmci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Fycm93Mi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9iYWcuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvYmFnMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9jYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2Nsb3NlMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9jbG9zZTIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvY29tbWVyY2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvZmF2b3JpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvZmF2b3JpdGUyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2ZiLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2ZiMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9nb29nbGUtcGx1cy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9nb29nbGUtcGx1czIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvaG9tZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9pbmZvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2luc3RhZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9pbnN0YWdyYW0yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2xpbmtlZGluLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL2xpbmtlZGluMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9sb2NhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9tYWlsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL21haWwyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3Bob25lMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy9waG9uZTIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvc2VhcmNoLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3R3aXR0ZXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcvdXNlci0xLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3VzZXItMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy93aXNobGlzdC0xLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3dpc2hsaXN0LTIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdmcveW91dHViZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy95b3V0dWJlMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lZGlhLXF1ZXJpZXMvbWVkaWEtcXVlcmllcy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NoYXJlZC9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvbWVudS5tb2JpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L21lbnUuZGVza3RvcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5tb2JpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXJyZW5jaWVzL2N1cnJlbmNpZXMuZGVza3RvcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvcC1oZWFkZXItbXktYWNjb3VudC90b3AtaGVhZGVyLW15LWFjY291bnQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90b3AtaGVhZGVyLW15LWFjY291bnQvdG9wLWhlYWRlci1teS1hY2NvdW50LmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLEtBQUksTUFBTSxtQkFBVjtBQUNBLEtBQUksSUFBSixHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0tBRXFCLFk7QUFDbkIseUJBQVksT0FBWixFQUFxQjtBQUFBOztBQUNuQixZQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsSUFBZSxFQUE3QjtBQUNBLFVBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbkM7O0FBRUEsVUFBSyxPQUFMLEdBQWUsVUFBVSxPQUFWLGVBQWY7QUFDRDs7QUFFRDs7Ozs7MEJBQ0ssVSxFQUE4QjtBQUFBOztBQUFBLFdBQWxCLFFBQWtCLHlEQUFQLEtBQU87O0FBQ2pDLFdBQUksUUFBUSxJQUFaOztBQUVBLFdBQUksVUFBSixFQUFnQjtBQUNkLGFBQUksc0JBQXNCLENBQTFCLEVBQTZCOztBQUUzQixlQUFJLFFBQUosRUFBYztBQUNaO0FBQ0Esd0JBQVcsSUFBWCxtQkFBa0MsSUFBbEMsQ0FBdUMsWUFBWTtBQUNqRCxtQkFBSSxZQUFZLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxTQUFiLENBQWhCO0FBQ0EscUJBQU0s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QUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7Ozs7QUNwSEQ7QUFDQTtBQUNBLDZDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDJDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDRDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDRDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGdEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGdEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGlEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDBDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDJDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLG1EOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLG9EOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDRDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDRDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGlEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGtEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGdEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGlEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGdEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDRDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDZDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLCtDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLDhDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGtEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGtEOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLCtDOzs7Ozs7O0FDRkE7QUFDQTtBQUNBLGdEOzs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TCxDQUFxQixRQUFyQixDQUE4Qix1QkFBZSxTQUE3QztBQUNELFFBSEgsRUFJRyxLQUpILENBSVMsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixPQUFwQixDQUpUO0FBS0Q7Ozt5Q0FFbUI7QUFBQTs7QUFDbEIsWUFBSyxTQUFMLENBQ0csR0FESCxDQUNPLGVBRFAsRUFDd0IsWUFBTTtBQUMxQixnQkFBSyxlQUFMLENBQXFCLFdBQXJCLENBQWlDLHVCQUFlLFNBQWhEO0FBQ0EsZ0JBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsdUJBQWUsTUFBcEM7QUFDRCxRQUpILEVBS0csS0FMSCxDQUtTLENBTFQ7QUFNRDs7Ozs7O21CQS9Ha0IsMkI7QUFnSHBCLEU7Ozs7Ozs7Ozs7OztBQ25ITSxLQUFNLDRCQUFVO0FBQ3JCLFNBQU0saUJBRGU7QUFFckIsYUFBVSxxQkFGVztBQUdyQixjQUFXLHNCQUhVO0FBSXJCLFVBQU87QUFKYyxFQUFoQixDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqcXVlcnknO1xuaW1wb3J0ICdtb2Rlcm5penInO1xuaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5sZXQgYXBwID0gbmV3IEFwcENvbXBvbmVudCgpO1xuYXBwLmluaXQoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanNcbiAqKi8iLCJpbXBvcnQge0NMQVNTRVN9IGZyb20gJy4vYXBwLmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzZXMpIHtcbiAgICB3aW5kb3cuaW5mbyA9IHdpbmRvdy5pbmZvIHx8IHt9O1xuICAgIGluZm8uaW5zdGFuY2VzID0gaW5mby5pbnN0YW5jZXMgfHwgW107XG5cbiAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzID8gY2xhc3NlcyA6IENMQVNTRVM7XG4gIH1cblxuICAvLyBpbml0IG1ldGhvZFxuICBpbml0KCRjb250YWluZXIsIGRlZXBTY2FuID0gZmFsc2UpIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCRjb250YWluZXIpIHtcbiAgICAgIGlmICgkY29udGFpbmVyIGluc3RhbmNlb2YgJCkge1xuXG4gICAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAgIC8vIGluaXRpYWxpemUgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbml0XWApLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzT25Eb20oJCh0aGlzKSwgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBpbml0aWFsaXplICB0aGUgY3VycmVudCBlbGVtZW50IHBhc3NlZFxuICAgICAgICAgICRjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJCh0aGlzKS5kYXRhKCdzcy1pbml0Jyk7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIF9zZWxmLmNoZWNrSWZDbGFzc0V4aXN0c09uRG9tKCQodGhpcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgcGFzc2VkIGl0IGlzIG5vdCBhIGpRdWVyeSBlbGVtZW50IScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBubyBwYXJhbSBwYXNzZWQsIGFsbCB0aGUgbW9kdWxlcyBmcm9tIHRoZSBET01cbiAgICAgIC8vIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZGVwZW5kaW5nIG9uIHRoZSBkYXRhLXNzLXN0YXRlIHZhbHVlXG4gICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB0aGlzLmluaXRCeVN0YXRlKCdvblJlYWR5JykpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4gdGhpcy5pbml0QnlTdGF0ZSgnb25Mb2FkJykpO1xuICAgIH1cbiAgfTtcblxuICAvL2Rlc3Ryb3kgbWV0aG9kXG4gIGRlc3Ryb3koJGNvbnRhaW5lciwgZGVlcFNjYW4gPSBmYWxzZSkge1xuICAgIGxldCBkZXN0cm95SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudEluc3RhbmNlID0gJCh0aGlzKS5kYXRhKCdzcy1pbnN0YW5jZScpO1xuICAgICAgaW5mby5pbnN0YW5jZXNbY3VycmVudEluc3RhbmNlXS5kZXN0cm95KCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnKTtcbiAgICAgIGluZm8uaW5zdGFuY2VzW2N1cnJlbnRJbnN0YW5jZV0gPSBudWxsO1xuICAgIH07XG5cbiAgICBpZiAoJGNvbnRhaW5lcikge1xuICAgICAgaWYgKCRjb250YWluZXIgaW5zdGFuY2VvZiAkKSB7XG4gICAgICAgIGlmIChkZWVwU2Nhbikge1xuICAgICAgICAgIC8vIGRlc3Ryb3kgYWxsIG1vZHVsZXMgZnJvbSB0aGUgalF1ZXJ5IERPTSBlbGVtZW50XG4gICAgICAgICAgJGNvbnRhaW5lci5maW5kKGBbZGF0YS1zcy1pbnN0YW5jZV1gKS5lYWNoKGRlc3Ryb3lJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gZGVzdHJveSAgdGhlIGN1cnJlbnQgZWxlbWVudCBwYXNzZWRcbiAgICAgICAgICAkY29udGFpbmVyLmVhY2goZGVzdHJveUluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhcmFtZXRlciBwYXNzZWQgaXQgaXMgbm90IGEgalF1ZXJ5IGVsZW1lbnQhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJChkb2N1bWVudCkuZmluZChgW2RhdGEtc3MtaW5zdGFuY2VdYCkuZWFjaChkZXN0cm95SW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICBjaGVja0lmQ2xhc3NFeGlzdHNPbkRvbSgkZWwsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc0V4aXN0cyA9IGZhbHNlLFxuICAgICAgZG9tQ2xhc3NlcyA9IHRoaXMuY2xhc3Nlcy5kb20gPyB0aGlzLmNsYXNzZXMuZG9tIDogdGhpcy5jbGFzc2VzO1xuXG4gICAgJC5lYWNoKGRvbUNsYXNzZXMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgaWYgKGluZGV4ID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3MtaW5zdGFuY2UnLCBpbmZvLmluc3RhbmNlcy5sZW5ndGgpO1xuICAgICAgICBjbGFzc0V4aXN0cyA9IHRydWU7XG4gICAgICAgIGluZm8uaW5zdGFuY2VzLnB1c2gobmV3IHZhbHVlKCRlbCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFjbGFzc0V4aXN0cykge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgY2xhc3MgJHtjbGFzc05hbWV9IGRvZXMgbm90IGV4aXN0IWApO1xuICAgIH1cbiAgfTtcblxuICBpbml0QnlTdGF0ZShzdGF0ZSkge1xuICAgIGxldCBfc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5jbGFzc2VzID09PSBDTEFTU0VTKSB7XG4gICAgICAkLmVhY2goQ0xBU1NFU1tzdGF0ZV0sIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBuZXcgdmFsdWUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLXNzLXN0YXRlPVwiJHtzdGF0ZX1cIl1gKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzTmFtZSA9ICQodGhpcykuZGF0YSgnc3MtaW5pdCcpO1xuICAgICAgX3NlbGYuY2hlY2tJZkNsYXNzRXhpc3RzT25Eb20oJCh0aGlzKSwgY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5jb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgU1ZHU3ByaXRlQ29tcG9uZW50IGZyb20gJy4vc3ZnLXNwcml0ZS9zdmctc3ByaXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVkaWFRdWVyaWVzQ29tcG9uZW50IGZyb20gJy4vbWVkaWEtcXVlcmllcy9tZWRpYS1xdWVyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVudUNvbXBvbmVudCBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IEN1cnJlbmNpZXNDb21wb25lbnQgZnJvbSAnLi9jdXJyZW5jaWVzL2N1cnJlbmNpZXMuY29tcG9uZW50JztcbmltcG9ydCBUb3BIZWFkZXJNeUFjY291bnRDb21wb25lbnQgZnJvbSAnLi90b3AtaGVhZGVyLW15LWFjY291bnQvdG9wLWhlYWRlci1teS1hY2NvdW50LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDTEFTU0VTID0ge1xuICBkb206IHtNZW51Q29tcG9uZW50LCBDdXJyZW5jaWVzQ29tcG9uZW50LCBUb3BIZWFkZXJNeUFjY291bnRDb21wb25lbnR9LFxuICBvblJlYWR5OiB7TWVkaWFRdWVyaWVzQ29tcG9uZW50fSxcbiAgb25Mb2FkOiB7U1ZHU3ByaXRlQ29tcG9uZW50fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5jb25maWcuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdTcHJpdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgZmlsZXMgPSByZXF1aXJlLmNvbnRleHQoJ3N2Zy8nLCBmYWxzZSwgL1xcLnN2ZyQvKTtcbiAgICBmaWxlcy5rZXlzKCkuZm9yRWFjaChmaWxlcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgICQoJ2JvZHknKS5jaGlsZHJlbignc3ZnJykucmVtb3ZlKCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9zdmctc3ByaXRlL3N2Zy1zcHJpdGUuY29tcG9uZW50LmpzXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL1R3aXR0ZXIyLnN2Z1wiOiA5LFxuXHRcIi4vYXJyb3cuc3ZnXCI6IDEzLFxuXHRcIi4vYXJyb3cyLnN2Z1wiOiAxNCxcblx0XCIuL2JhZy5zdmdcIjogMTUsXG5cdFwiLi9iYWcyLnN2Z1wiOiAxNixcblx0XCIuL2NhcnQuc3ZnXCI6IDE3LFxuXHRcIi4vY2xvc2UxLnN2Z1wiOiAxOCxcblx0XCIuL2Nsb3NlMi5zdmdcIjogMTksXG5cdFwiLi9jb21tZXJjZS5zdmdcIjogMjAsXG5cdFwiLi9mYXZvcml0ZS5zdmdcIjogMjEsXG5cdFwiLi9mYXZvcml0ZTIuc3ZnXCI6IDIyLFxuXHRcIi4vZmIuc3ZnXCI6IDIzLFxuXHRcIi4vZmIyLnN2Z1wiOiAyNCxcblx0XCIuL2dvb2dsZS1wbHVzLnN2Z1wiOiAyNSxcblx0XCIuL2dvb2dsZS1wbHVzMi5zdmdcIjogMjYsXG5cdFwiLi9ob21lLnN2Z1wiOiAyNyxcblx0XCIuL2luZm8uc3ZnXCI6IDI4LFxuXHRcIi4vaW5zdGFncmFtLnN2Z1wiOiAyOSxcblx0XCIuL2luc3RhZ3JhbTIuc3ZnXCI6IDMwLFxuXHRcIi4vbGlua2VkaW4uc3ZnXCI6IDMxLFxuXHRcIi4vbGlua2VkaW4yLnN2Z1wiOiAzMixcblx0XCIuL2xvY2F0aW9uLnN2Z1wiOiAzMyxcblx0XCIuL21haWwuc3ZnXCI6IDM0LFxuXHRcIi4vbWFpbDIuc3ZnXCI6IDM1LFxuXHRcIi4vcGhvbmUxLnN2Z1wiOiAzNixcblx0XCIuL3Bob25lMi5zdmdcIjogMzcsXG5cdFwiLi9zZWFyY2guc3ZnXCI6IDM4LFxuXHRcIi4vdHdpdHRlci5zdmdcIjogMzksXG5cdFwiLi91c2VyLTEuc3ZnXCI6IDQwLFxuXHRcIi4vdXNlci0yLnN2Z1wiOiA0MSxcblx0XCIuL3dpc2hsaXN0LTEuc3ZnXCI6IDQyLFxuXHRcIi4vd2lzaGxpc3QtMi5zdmdcIjogNDMsXG5cdFwiLi95b3V0dWJlLnN2Z1wiOiA0NCxcblx0XCIuL3lvdXR1YmUyLnN2Z1wiOiA0NVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA4O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcgbm9ucmVjdXJzaXZlIFxcLnN2ZyRcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMjEgMTZcXFwiIGlkPVxcXCJUd2l0dGVyMlxcXCIgPjx0aXRsZT5Ud2l0dGVyPC90aXRsZT48cGF0aCBkPVxcXCJNMTguMTkgNC4zOTRjLjAwNy4xNjMuMDEyLjMyOC4wMTIuNDkyIDAgNS4wMDUtNC4wMTggMTAuNzc0LTExLjM3IDEwLjc3NC0yLjI1NiAwLTQuMzU3LS42MjUtNi4xMjUtMS43LjMxMy4wMzUuNjMuMDUzLjk1My4wNTMgMS44NzMgMCAzLjU5NS0uNjA2IDQuOTYzLTEuNjJDNC44NzUgMTIuMzYgMy40IDExLjI2NSAyLjg5IDkuNzZjLjI0NC4wNDUuNDk1LjA3Ljc1LjA3LjM2NiAwIC43Mi0uMDQ2IDEuMDU0LS4xMzNDMi44NjcgOS4zNSAxLjQ5IDcuODIgMS40OSA1Ljk4NHYtLjA0OGMuNTQuMjgzIDEuMTU1LjQ1NCAxLjgxLjQ3My0xLjA3Mi0uNjgtMS43NzctMS44NC0xLjc3Ny0zLjE1MiAwLS42OTUuMTk2LTEuMzQ2LjU0LTEuOTA1IDEuOTcgMi4yOTIgNC45MTUgMy44IDguMjM1IDMuOTU4LS4wNjgtLjI3Ny0uMTAyLS41NjUtLjEwMi0uODYzIDAtMi4wOSAxLjc4OC0zLjc4NyAzLjk5NS0zLjc4NyAxLjE1IDAgMi4xODcuNDYgMi45MTcgMS4xOTYuOTEtLjE3IDEuNzY1LS40ODQgMi41NC0uOTItLjMwMi44ODUtLjkzMyAxLjYyNy0xLjc2IDIuMDk2LjgwOC0uMDkgMS41OC0uMjk0IDIuMjk0LS41OTYtLjUzMi43Ni0xLjIxIDEuNDI2LTEuOTkgMS45NTh6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJUd2l0dGVyMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9Ud2l0dGVyMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU3ByaXRlID0gcmVxdWlyZSgnLi9zcHJpdGUnKTtcbnZhciBnbG9iYWxTcHJpdGUgPSBuZXcgU3ByaXRlKCk7XG5cbmlmIChkb2N1bWVudC5ib2R5KSB7XG4gIGdsb2JhbFNwcml0ZS5lbGVtID0gZ2xvYmFsU3ByaXRlLnJlbmRlcihkb2N1bWVudC5ib2R5KTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZ2xvYmFsU3ByaXRlLmVsZW0gPSBnbG9iYWxTcHJpdGUucmVuZGVyKGRvY3VtZW50LmJvZHkpO1xuICB9LCBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsU3ByaXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTbmlmZnIgPSByZXF1aXJlKCdzbmlmZnInKTtcblxuLyoqXG4gKiBMaXN0IG9mIFNWRyBhdHRyaWJ1dGVzIHRvIGZpeCB1cmwgdGFyZ2V0IGluIHRoZW1cbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xudmFyIGZpeEF0dHJpYnV0ZXMgPSBbXG4gICdjbGlwUGF0aCcsXG4gICdjb2xvclByb2ZpbGUnLFxuICAnc3JjJyxcbiAgJ2N1cnNvcicsXG4gICdmaWxsJyxcbiAgJ2ZpbHRlcicsXG4gICdtYXJrZXInLFxuICAnbWFya2VyU3RhcnQnLFxuICAnbWFya2VyTWlkJyxcbiAgJ21hcmtlckVuZCcsXG4gICdtYXNrJyxcbiAgJ3N0cm9rZSdcbl07XG5cbi8qKlxuICogUXVlcnkgdG8gZmluZCdlbVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIGZpeEF0dHJpYnV0ZXNRdWVyeSA9ICdbJyArIGZpeEF0dHJpYnV0ZXMuam9pbignXSxbJykgKyAnXSc7XG4vKipcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBVUklfRlVOQ19SRUdFWCA9IC9edXJsXFwoKC4qKVxcKSQvO1xuXG4vKipcbiAqIENvbnZlcnQgYXJyYXktbGlrZSB0byBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IGFycmF5TGlrZVxuICogQHJldHVybnMge0FycmF5LjwqPn1cbiAqL1xuZnVuY3Rpb24gYXJyYXlGcm9tKGFycmF5TGlrZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlMaWtlLCAwKTtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGZvcmJpZGRlbiBzeW1ib2xzIHdoaWNoIGNhbm5vdCBiZSBkaXJlY3RseSB1c2VkIGluc2lkZSBhdHRyaWJ1dGVzIHdpdGggdXJsKC4uLikgY29udGVudC5cbiAqIEFkZHMgbGVhZGluZyBzbGFzaCBmb3IgdGhlIGJyYWNrZXRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGVuY29kZWQgdXJsXG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVybEZvckVtYmVkZGluZyh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9cXCh8XFwpL2csIFwiXFxcXCQmXCIpO1xufVxuXG4vKipcbiAqIFJlcGxhY2VzIHByZWZpeCBpbiBgdXJsKClgIGZ1bmN0aW9uc1xuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50VXJsUHJlZml4XG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3VXJsUHJlZml4XG4gKi9cbmZ1bmN0aW9uIGJhc2VVcmxXb3JrQXJvdW5kKHN2ZywgY3VycmVudFVybFByZWZpeCwgbmV3VXJsUHJlZml4KSB7XG4gIHZhciBub2RlcyA9IHN2Zy5xdWVyeVNlbGVjdG9yQWxsKGZpeEF0dHJpYnV0ZXNRdWVyeSk7XG5cbiAgaWYgKCFub2Rlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFycmF5RnJvbShub2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXJyYXlGcm9tKG5vZGUuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5sb2NhbE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKGZpeEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGVOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gVVJJX0ZVTkNfUkVHRVguZXhlYyhub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRvdWNoIHVybHMgd2l0aCB1bmV4cGVjdGVkIHByZWZpeFxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0uaW5kZXhPZihjdXJyZW50VXJsUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgIHZhciByZWZlcmVuY2VVcmwgPSBlbmNvZGVVcmxGb3JFbWJlZGRpbmcobmV3VXJsUHJlZml4ICsgbWF0Y2hbMV0uc3BsaXQoY3VycmVudFVybFByZWZpeClbMV0pO1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsICd1cmwoJyArIHJlZmVyZW5jZVVybCArICcpJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQmVjYXVzZSBvZiBGaXJlZm94IGJ1ZyAjMzUzNTc1IGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gKiBUbyB3b3JrYXJvdW5kIHRoaXMgd2UgbW92ZSB0aGUgZ3JhZGllbnQgZGVmaW5pdGlvbiBvdXRzaWRlIHRoZSBzeW1ib2wgZWxlbWVudFxuICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zNTM1NzVcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKi9cbnZhciBGaXJlZm94U3ltYm9sQnVnV29ya2Fyb3VuZCA9IGZ1bmN0aW9uIChzdmcpIHtcbiAgdmFyIGRlZnMgPSBzdmcucXVlcnlTZWxlY3RvcignZGVmcycpO1xuXG4gIHZhciBtb3ZlVG9EZWZzRWxlbXMgPSBzdmcucXVlcnlTZWxlY3RvckFsbCgnc3ltYm9sIGxpbmVhckdyYWRpZW50LCBzeW1ib2wgcmFkaWFsR3JhZGllbnQsIHN5bWJvbCBwYXR0ZXJuJyk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtb3ZlVG9EZWZzRWxlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBkZWZzLmFwcGVuZENoaWxkKG1vdmVUb0RlZnNFbGVtc1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIERFRkFVTFRfVVJJX1BSRUZJWCA9ICcjJztcblxuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgeExpbmtIcmVmID0gJ3hsaW5rOmhyZWYnO1xuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgeExpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIHN2Z09wZW5pbmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCInICsgeExpbmtOUyArICdcIic7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBzdmdDbG9zaW5nID0gJzwvc3ZnPic7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBjb250ZW50UGxhY2VIb2xkZXIgPSAne2NvbnRlbnR9JztcblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBTVkcgc3ByaXRlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3ByaXRlKCkge1xuICB2YXIgYmFzZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdO1xuICB2YXIgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XG4gIHZhciBiYXNlVXJsID0gYmFzZUVsZW1lbnQgJiYgYmFzZUVsZW1lbnQuaHJlZjtcbiAgdGhpcy51cmxQcmVmaXggPSBiYXNlVXJsICYmIGJhc2VVcmwgIT09IGN1cnJlbnRVcmwgPyBjdXJyZW50VXJsICsgREVGQVVMVF9VUklfUFJFRklYIDogREVGQVVMVF9VUklfUFJFRklYO1xuXG4gIHZhciBzbmlmZnIgPSBuZXcgU25pZmZyKCk7XG4gIHNuaWZmci5zbmlmZigpO1xuICB0aGlzLmJyb3dzZXIgPSBzbmlmZnIuYnJvd3NlcjtcbiAgdGhpcy5jb250ZW50ID0gW107XG5cbiAgaWYgKHRoaXMuYnJvd3Nlci5uYW1lICE9PSAnaWUnICYmIGJhc2VVcmwpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3ByaXRlTG9hZGVyTG9jYXRpb25VcGRhdGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjdXJyZW50UHJlZml4ID0gdGhpcy51cmxQcmVmaXg7XG4gICAgICB2YXIgbmV3VXJsUHJlZml4ID0gZS5kZXRhaWwubmV3VXJsLnNwbGl0KERFRkFVTFRfVVJJX1BSRUZJWClbMF0gKyBERUZBVUxUX1VSSV9QUkVGSVg7XG4gICAgICBiYXNlVXJsV29ya0Fyb3VuZCh0aGlzLnN2ZywgY3VycmVudFByZWZpeCwgbmV3VXJsUHJlZml4KTtcbiAgICAgIHRoaXMudXJsUHJlZml4ID0gbmV3VXJsUHJlZml4O1xuXG4gICAgICBpZiAodGhpcy5icm93c2VyLm5hbWUgPT09ICdmaXJlZm94JyB8fCB0aGlzLmJyb3dzZXIubmFtZSA9PT0gJ2VkZ2UnIHx8IHRoaXMuYnJvd3Nlci5uYW1lID09PSAnY2hyb21lJyAmJiB0aGlzLmJyb3dzZXIudmVyc2lvblswXSA+PSA0OSkge1xuICAgICAgICB2YXIgbm9kZXMgPSBhcnJheUZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndXNlWyp8aHJlZl0nKSk7XG4gICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKHhMaW5rSHJlZik7XG4gICAgICAgICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKGN1cnJlbnRQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKHhMaW5rTlMsIHhMaW5rSHJlZiwgbmV3VXJsUHJlZml4ICsgaHJlZi5zcGxpdChERUZBVUxUX1VSSV9QUkVGSVgpWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn1cblxuU3ByaXRlLnN0eWxlcyA9IFsncG9zaXRpb246YWJzb2x1dGUnLCAnd2lkdGg6MCcsICdoZWlnaHQ6MCcsICd2aXNpYmlsaXR5OmhpZGRlbiddO1xuXG5TcHJpdGUuc3ByaXRlVGVtcGxhdGUgPSBzdmdPcGVuaW5nICsgJyBzdHlsZT1cIicrIFNwcml0ZS5zdHlsZXMuam9pbignOycpICsnXCI+PGRlZnM+JyArIGNvbnRlbnRQbGFjZUhvbGRlciArICc8L2RlZnM+JyArIHN2Z0Nsb3Npbmc7XG5TcHJpdGUuc3ltYm9sVGVtcGxhdGUgPSBzdmdPcGVuaW5nICsgJz4nICsgY29udGVudFBsYWNlSG9sZGVyICsgc3ZnQ2xvc2luZztcblxuLyoqXG4gKiBAdHlwZSB7QXJyYXk8U3RyaW5nPn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5jb250ZW50ID0gbnVsbDtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNvbnRlbnQsIGlkKSB7XG4gIGlmICh0aGlzLnN2Zykge1xuICAgIHRoaXMuYXBwZW5kU3ltYm9sKGNvbnRlbnQpO1xuICB9XG5cbiAgdGhpcy5jb250ZW50LnB1c2goY29udGVudCk7XG5cbiAgcmV0dXJuIERFRkFVTFRfVVJJX1BSRUZJWCArIGlkO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGNvbnRlbnRcbiAqIEBwYXJhbSB0ZW1wbGF0ZVxuICogQHJldHVybnMge0VsZW1lbnR9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUud3JhcFNWRyA9IGZ1bmN0aW9uIChjb250ZW50LCB0ZW1wbGF0ZSkge1xuICB2YXIgc3ZnU3RyaW5nID0gdGVtcGxhdGUucmVwbGFjZShjb250ZW50UGxhY2VIb2xkZXIsIGNvbnRlbnQpO1xuXG4gIHZhciBzdmcgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN2Z1N0cmluZywgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciAoSUUsIG1heWJlIG90aGVyIHRvbykgd2hpY2ggYXJlIHRocm93aW5nICdXcm9uZ0RvY3VtZW50RXJyb3InXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc5ODExMDAvaG93LWRvLWktZHluYW1pY2FsbHktaW5zZXJ0LWFuLXN2Zy1pbWFnZS1pbnRvLWh0bWwjNzk4NjUxOVxuICAgKi9cbiAgaWYgKGRvY3VtZW50LmltcG9ydE5vZGUpIHtcbiAgICBzdmcgPSBkb2N1bWVudC5pbXBvcnROb2RlKHN2ZywgdHJ1ZSk7XG4gIH1cblxuICBpZiAodGhpcy5icm93c2VyLm5hbWUgIT09ICdpZScgJiYgdGhpcy51cmxQcmVmaXgpIHtcbiAgICBiYXNlVXJsV29ya0Fyb3VuZChzdmcsIERFRkFVTFRfVVJJX1BSRUZJWCwgdGhpcy51cmxQcmVmaXgpO1xuICB9XG5cbiAgcmV0dXJuIHN2Zztcbn07XG5cblNwcml0ZS5wcm90b3R5cGUuYXBwZW5kU3ltYm9sID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIHN5bWJvbCA9IHRoaXMud3JhcFNWRyhjb250ZW50LCBTcHJpdGUuc3ltYm9sVGVtcGxhdGUpLmNoaWxkTm9kZXNbMF07XG5cbiAgdGhpcy5zdmcucXVlcnlTZWxlY3RvcignZGVmcycpLmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gIGlmICh0aGlzLmJyb3dzZXIubmFtZSA9PT0gJ2ZpcmVmb3gnKSB7XG4gICAgRmlyZWZveFN5bWJvbEJ1Z1dvcmthcm91bmQodGhpcy5zdmcpO1xuICB9XG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoKSk7XG4gIHJldHVybiB3cmFwcGVyLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3RhcmdldF1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXBlbmQ9dHJ1ZV1cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmVuZGVyZWQgc3ByaXRlIG5vZGVcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAodGFyZ2V0LCBwcmVwZW5kKSB7XG4gIHRhcmdldCA9IHRhcmdldCB8fCBudWxsO1xuICBwcmVwZW5kID0gdHlwZW9mIHByZXBlbmQgPT09ICdib29sZWFuJyA/IHByZXBlbmQgOiB0cnVlO1xuXG4gIHZhciBzdmcgPSB0aGlzLndyYXBTVkcodGhpcy5jb250ZW50LmpvaW4oJycpLCBTcHJpdGUuc3ByaXRlVGVtcGxhdGUpO1xuXG4gIGlmICh0aGlzLmJyb3dzZXIubmFtZSA9PT0gJ2ZpcmVmb3gnKSB7XG4gICAgRmlyZWZveFN5bWJvbEJ1Z1dvcmthcm91bmQoc3ZnKTtcbiAgfVxuXG4gIGlmICh0YXJnZXQpIHtcbiAgICBpZiAocHJlcGVuZCAmJiB0YXJnZXQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShzdmcsIHRhcmdldC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5zdmcgPSBzdmc7XG5cbiAgcmV0dXJuIHN2Zztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3ByaXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9zcHJpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiKGZ1bmN0aW9uKGhvc3QpIHtcblxuICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICBicm93c2VyOiBbXG4gICAgICBbL21zaWUgKFtcXC5cXF9cXGRdKykvLCBcImllXCJdLFxuICAgICAgWy90cmlkZW50XFwvLio/cnY6KFtcXC5cXF9cXGRdKykvLCBcImllXCJdLFxuICAgICAgWy9maXJlZm94XFwvKFtcXC5cXF9cXGRdKykvLCBcImZpcmVmb3hcIl0sXG4gICAgICBbL2Nocm9tZVxcLyhbXFwuXFxfXFxkXSspLywgXCJjaHJvbWVcIl0sXG4gICAgICBbL3ZlcnNpb25cXC8oW1xcLlxcX1xcZF0rKS4qP3NhZmFyaS8sIFwic2FmYXJpXCJdLFxuICAgICAgWy9tb2JpbGUgc2FmYXJpIChbXFwuXFxfXFxkXSspLywgXCJzYWZhcmlcIl0sXG4gICAgICBbL2FuZHJvaWQuKj92ZXJzaW9uXFwvKFtcXC5cXF9cXGRdKykuKj9zYWZhcmkvLCBcImNvbS5hbmRyb2lkLmJyb3dzZXJcIl0sXG4gICAgICBbL2NyaW9zXFwvKFtcXC5cXF9cXGRdKykuKj9zYWZhcmkvLCBcImNocm9tZVwiXSxcbiAgICAgIFsvb3BlcmEvLCBcIm9wZXJhXCJdLFxuICAgICAgWy9vcGVyYVxcLyhbXFwuXFxfXFxkXSspLywgXCJvcGVyYVwiXSxcbiAgICAgIFsvb3BlcmEgKFtcXC5cXF9cXGRdKykvLCBcIm9wZXJhXCJdLFxuICAgICAgWy9vcGVyYSBtaW5pLio/dmVyc2lvblxcLyhbXFwuXFxfXFxkXSspLywgXCJvcGVyYS5taW5pXCJdLFxuICAgICAgWy9vcGlvc1xcLyhbYS16XFwuXFxfXFxkXSspLywgXCJvcGVyYVwiXSxcbiAgICAgIFsvYmxhY2tiZXJyeS8sIFwiYmxhY2tiZXJyeVwiXSxcbiAgICAgIFsvYmxhY2tiZXJyeS4qP3ZlcnNpb25cXC8oW1xcLlxcX1xcZF0rKS8sIFwiYmxhY2tiZXJyeVwiXSxcbiAgICAgIFsvYmJcXGQrLio/dmVyc2lvblxcLyhbXFwuXFxfXFxkXSspLywgXCJibGFja2JlcnJ5XCJdLFxuICAgICAgWy9yaW0uKj92ZXJzaW9uXFwvKFtcXC5cXF9cXGRdKykvLCBcImJsYWNrYmVycnlcIl0sXG4gICAgICBbL2ljZXdlYXNlbFxcLyhbXFwuXFxfXFxkXSspLywgXCJpY2V3ZWFzZWxcIl0sXG4gICAgICBbL2VkZ2VcXC8oW1xcLlxcZF0rKS8sIFwiZWRnZVwiXVxuICAgIF0sXG4gICAgb3M6IFtcbiAgICAgIFsvbGludXggKCkoW2EtelxcLlxcX1xcZF0rKS8sIFwibGludXhcIl0sXG4gICAgICBbL21hYyBvcyB4LywgXCJtYWNvc1wiXSxcbiAgICAgIFsvbWFjIG9zIHguKj8oW1xcLlxcX1xcZF0rKS8sIFwibWFjb3NcIl0sXG4gICAgICBbL29zIChbXFwuXFxfXFxkXSspIGxpa2UgbWFjIG9zLywgXCJpb3NcIl0sXG4gICAgICBbL29wZW5ic2QgKCkoW2EtelxcLlxcX1xcZF0rKS8sIFwib3BlbmJzZFwiXSxcbiAgICAgIFsvYW5kcm9pZC8sIFwiYW5kcm9pZFwiXSxcbiAgICAgIFsvYW5kcm9pZCAoW2EtelxcLlxcX1xcZF0rKTsvLCBcImFuZHJvaWRcIl0sXG4gICAgICBbL21vemlsbGFcXC9bYS16XFwuXFxfXFxkXSsgXFwoKD86bW9iaWxlKXwoPzp0YWJsZXQpLywgXCJmaXJlZm94b3NcIl0sXG4gICAgICBbL3dpbmRvd3NcXHMqKD86bnQpP1xccyooW1xcLlxcX1xcZF0rKS8sIFwid2luZG93c1wiXSxcbiAgICAgIFsvd2luZG93cyBwaG9uZS4qPyhbXFwuXFxfXFxkXSspLywgXCJ3aW5kb3dzLnBob25lXCJdLFxuICAgICAgWy93aW5kb3dzIG1vYmlsZS8sIFwid2luZG93cy5tb2JpbGVcIl0sXG4gICAgICBbL2JsYWNrYmVycnkvLCBcImJsYWNrYmVycnlvc1wiXSxcbiAgICAgIFsvYmJcXGQrLywgXCJibGFja2JlcnJ5b3NcIl0sXG4gICAgICBbL3JpbS4qP29zXFxzKihbXFwuXFxfXFxkXSspLywgXCJibGFja2JlcnJ5b3NcIl1cbiAgICBdLFxuICAgIGRldmljZTogW1xuICAgICAgWy9pcGFkLywgXCJpcGFkXCJdLFxuICAgICAgWy9pcGhvbmUvLCBcImlwaG9uZVwiXSxcbiAgICAgIFsvbHVtaWEvLCBcImx1bWlhXCJdLFxuICAgICAgWy9odGMvLCBcImh0Y1wiXSxcbiAgICAgIFsvbmV4dXMvLCBcIm5leHVzXCJdLFxuICAgICAgWy9nYWxheHkgbmV4dXMvLCBcImdhbGF4eS5uZXh1c1wiXSxcbiAgICAgIFsvbm9raWEvLCBcIm5va2lhXCJdLFxuICAgICAgWy8gZ3RcXC0vLCBcImdhbGF4eVwiXSxcbiAgICAgIFsvIHNtXFwtLywgXCJnYWxheHlcIl0sXG4gICAgICBbL3hib3gvLCBcInhib3hcIl0sXG4gICAgICBbLyg/OmJiXFxkKyl8KD86YmxhY2tiZXJyeSl8KD86IHJpbSApLywgXCJibGFja2JlcnJ5XCJdXG4gICAgXVxuICB9O1xuXG4gIHZhciBVTktOT1dOID0gXCJVbmtub3duXCI7XG5cbiAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICBmdW5jdGlvbiBTbmlmZnIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgcHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSkge1xuICAgICAgc2VsZltwcm9wZXJ0eU5hbWVdID0ge1xuICAgICAgICBuYW1lOiBVTktOT1dOLFxuICAgICAgICB2ZXJzaW9uOiBbXSxcbiAgICAgICAgdmVyc2lvblN0cmluZzogVU5LTk9XTlxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGVybWluZVByb3BlcnR5KHNlbGYsIHByb3BlcnR5TmFtZSwgdXNlckFnZW50KSB7XG4gICAgcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlNYXRjaGVyKSB7XG4gICAgICB2YXIgcHJvcGVydHlSZWdleCA9IHByb3BlcnR5TWF0Y2hlclswXTtcbiAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gcHJvcGVydHlNYXRjaGVyWzFdO1xuXG4gICAgICB2YXIgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2gocHJvcGVydHlSZWdleCk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0ubmFtZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgaWYgKG1hdGNoWzJdKSB7XG4gICAgICAgICAgc2VsZltwcm9wZXJ0eU5hbWVdLnZlcnNpb25TdHJpbmcgPSBtYXRjaFsyXTtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvbiA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoWzFdKSB7XG4gICAgICAgICAgc2VsZltwcm9wZXJ0eU5hbWVdLnZlcnNpb25TdHJpbmcgPSBtYXRjaFsxXS5yZXBsYWNlKC9fL2csIFwiLlwiKTtcbiAgICAgICAgICBzZWxmW3Byb3BlcnR5TmFtZV0udmVyc2lvbiA9IHBhcnNlVmVyc2lvbihtYXRjaFsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZltwcm9wZXJ0eU5hbWVdLnZlcnNpb25TdHJpbmcgPSBVTktOT1dOO1xuICAgICAgICAgIHNlbGZbcHJvcGVydHlOYW1lXS52ZXJzaW9uID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlVmVyc2lvbih2ZXJzaW9uU3RyaW5nKSB7XG4gICAgcmV0dXJuIHZlcnNpb25TdHJpbmcuc3BsaXQoL1tcXC5fXS8pLm1hcChmdW5jdGlvbih2ZXJzaW9uUGFydCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZlcnNpb25QYXJ0KTtcbiAgICB9KTtcbiAgfVxuXG4gIFNuaWZmci5wcm90b3R5cGUuc25pZmYgPSBmdW5jdGlvbih1c2VyQWdlbnRTdHJpbmcpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHVzZXJBZ2VudCA9ICh1c2VyQWdlbnRTdHJpbmcgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSkge1xuICAgICAgZGV0ZXJtaW5lUHJvcGVydHkoc2VsZiwgcHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTbmlmZnI7XG4gIH0gZWxzZSB7XG4gICAgaG9zdC5TbmlmZnIgPSBuZXcgU25pZmZyKCk7XG4gICAgaG9zdC5TbmlmZnIuc25pZmYobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIH1cbn0pKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc25pZmZyL3NyYy9zbmlmZnIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDEwOCAxOThcXFwiIGlkPVxcXCJhcnJvd1xcXCIgPjxwYXRoIGQ9XFxcIk0xMDEuODgzIDE5Ny40MDJMLjI1NSA5OC42OTggMTAxLjg4MyAwbDUuMjY1IDUuNDE4LTk2LjA0IDkzLjI4IDk2LjA0IDkzLjI4MlxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImFycm93XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Fycm93LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMzA2IDMwNlxcXCIgaWQ9XFxcImFycm93MlxcXCIgPjxwYXRoIGQ9XFxcIk05NC4zNSAwbC0zNS43IDM1LjdMMTc1Ljk1IDE1MyA1OC42NSAyNzAuM2wzNS43IDM1LjcgMTUzLTE1M1xcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImFycm93MlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9hcnJvdzIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAzNzcuNTgyIDM3Ny41ODJcXFwiIGlkPVxcXCJiYWdcXFwiID48cGF0aCBkPVxcXCJNMzMzLjcyIDM2Mi42M0wzMjAuMzMgMTA0LjA2NmMtLjM3My03LjE5NC02LjMxNS0xMi44MzYtMTMuNTE3LTEyLjgzNkgyNjcuMzFWNzguNTI2QzI2Ny4zMSAzNS4yMjUgMjMyLjA4IDAgMTg4Ljc4IDBjLTQzLjMgMC03OC41MjMgMzUuMjI2LTc4LjUyMyA3OC41MjVWOTEuMjNINzAuNzVjLTcuMjAzIDAtMTMuMTQ2IDUuNjQzLTEzLjUyIDEyLjgzN0w0My44MSAzNjMuMzQ1Yy0uMTkyIDMuNzA2IDEuMTQ2IDcuMzMgMy43MDIgMTAuMDIgMi41NTUgMi42OTIgNi4xMDQgNC4yMTcgOS44MTYgNC4yMTdoMjYyLjkzYzcuNDc1IDAgMTMuNTM0LTYuMDYgMTMuNTM0LTEzLjUzNiAwLS40OC0uMDI0LS45NTItLjA3My0xLjQxN3pNMTI5LjU0IDE0Ni4wMmMtOC4wMDYgMC0xNC41LTYuNDkyLTE0LjUtMTQuNXM2LjQ5NC0xNC41IDE0LjUtMTQuNWM4LjAwOCAwIDE0LjUgNi40OTQgMTQuNSAxNC41cy02LjQ5MiAxNC41LTE0LjUgMTQuNXptOTcuNDk3LTU0Ljc5aC03Ni41MVY3OC41MjZjMC0yMS4wOTUgMTcuMTYtMzguMjU1IDM4LjI1My0zOC4yNTUgMjEuMDk2IDAgMzguMjU3IDE3LjE2IDM4LjI1NyAzOC4yNTVWOTEuMjN6bTIxLjAwNCA1NC43OWMtOC4wMDYgMC0xNC41LTYuNDkyLTE0LjUtMTQuNXM2LjQ5NC0xNC41IDE0LjUtMTQuNWM4LjAwOCAwIDE0LjUgNi40OTQgMTQuNSAxNC41cy02LjQ5MiAxNC41LTE0LjUgMTQuNXpcXFwiIGZpbGw9XFxcIiMyMzFGMjBcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJiYWdcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvYmFnLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMzk1LjAyNSAzOTUuMDI1XFxcIiBpZD1cXFwiYmFnMlxcXCIgPjxwYXRoIGQ9XFxcIk0zNTcuNTA3IDM4MC45ODJsLTE5LjU5My0yOTguNzZjLS40My02LjU3LTUuODg3LTExLjY4LTEyLjQ3My0xMS42OGgtNTQuNjlWNjIuNWMwLTM0LjQ2Mi0yOC4wMzctNjIuNS02Mi41LTYyLjVoLTIxLjQ5NGMtMzQuNDYyIDAtNjIuNSAyOC4wMzgtNjIuNSA2Mi41djguMDRoLTU0LjY5Yy02LjU4NiAwLTEyLjA0MiA1LjExLTEyLjQ3MyAxMS42ODNMMzcuNDUgMzgxLjcxYy0uMjI3IDMuNDQ4Ljk4NiA2LjgzNyAzLjM1IDkuMzYgMi4zNjQgMi41MjUgNS42NjYgMy45NTUgOS4xMjQgMy45NTVoMjk1LjE4YzYuOTAyIDAgMTIuNS01LjU5NiAxMi41LTEyLjUtLjAwMy0uNTItLjAzNC0xLjAzNy0uMDk3LTEuNTQzek0xNDkuMjU1IDYyLjVjMC0yMC42NzggMTYuODIyLTM3LjUgMzcuNS0zNy41aDIxLjQ5NWMyMC42NzggMCAzNy41IDE2LjgyMiAzNy41IDM3LjV2OC4wNGgtOTYuNDk1VjYyLjV6TTYzLjI3IDM3MC4wMjVMODEuMjcyIDk1LjU0Mmg0Mi45ODN2MTEuMTU0Yy04Ljg5NSA0LjU2LTE1IDEzLjgxOC0xNSAyNC40ODIgMCAxNS4xNjQgMTIuMzM2IDI3LjUgMjcuNSAyNy41czI3LjUtMTIuMzM2IDI3LjUtMjcuNWMwLTEwLjY2NC02LjEwNS0xOS45MjItMTUtMjQuNDgyVjk1LjU0Mmg5Ni40OTV2MTEuMTU0Yy04Ljg5NiA0LjU2LTE1IDEzLjgxOC0xNSAyNC40ODIgMCAxNS4xNjQgMTIuMzM2IDI3LjUgMjcuNSAyNy41czI3LjUtMTIuMzM2IDI3LjUtMjcuNWMwLTEwLjY2NC02LjEwNS0xOS45MjItMTUtMjQuNDgyVjk1LjU0Mmg0Mi45ODNsMTguMDAyIDI3NC40ODNINjMuMjd6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiYmFnMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9iYWcyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDggNDhcXFwiIGlkPVxcXCJjYXJ0XFxcIiA+PHBhdGggZD1cXFwiTTE1LjczMyAyMC4xMjVjMS4xMDQgMCAyLS44OTYgMi0ydi03LjhDMTcuNzMzIDYuODM4IDIwLjU3IDQgMjQuMDU4IDRjMy40ODcgMCA2LjMyNSAyLjgzOCA2LjMyNSA2LjMyNXY3LjhjMCAxLjEwNC44OTYgMiAyIDJzMi0uODk2IDItMnYtNy44QzM0LjM4MyA0LjYzMiAyOS43NSAwIDI0LjA1OCAwYy01LjY5MiAwLTEwLjMyNCA0LjYzMi0xMC4zMjQgMTAuMzI1djcuOGMwIDEuMTA0Ljg5NSAyIDIgMnpcXFwiLz48cGF0aCBkPVxcXCJNNDcgMTUuNjNIMzYuMzgzdjIuNDk1YzAgMi4yMDYtMS43OTQgNC00IDQtMi4yMDUgMC00LTEuNzk0LTQtNFYxNS42M2gtOC42NXYyLjQ5NWMwIDIuMjA2LTEuNzkzIDQtNCA0cy00LTEuNzk0LTQtNFYxNS42M0gxYy0uNTUyIDAtLjg5My40MzYtLjc2Mi45NzJMNy4yMzUgNDUuMUM3LjY1OCA0Ni43MDIgOS4zNDMgNDggMTEgNDhoMjZjMS42NTggMCAzLjM0Mi0xLjMgMy43NjctMi45bDYuOTk2LTI4LjQ5OGMuMTMtLjUzNy0uMjEtLjk3LS43NjMtLjk3elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImNhcnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvY2FydC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDQ1NS45OTIgNDU1Ljk5MlxcXCIgaWQ9XFxcImNsb3NlMVxcXCIgPjxwYXRoIGQ9XFxcIk0yMjcuOTk2IDBDMTAyLjA4IDAgMCAxMDIuMDggMCAyMjcuOTk2IDAgMzUzLjk0IDEwMi4wOCA0NTUuOTkyIDIyNy45OTYgNDU1Ljk5MmMxMjUuOTQ1IDAgMjI3Ljk5Ni0xMDIuMDUgMjI3Ljk5Ni0yMjcuOTk2QzQ1NS45OTIgMTAyLjA4IDM1My45NDIgMCAyMjcuOTk2IDB6bTAgNDI1LjU5M2MtMTA4Ljk1MiAwLTE5Ny41OTctODguNjQ1LTE5Ny41OTctMTk3LjU5N1MxMTkuMDQzIDMwLjQgMjI3Ljk5NSAzMC40czE5Ny41OTcgODguNjQ0IDE5Ny41OTcgMTk3LjU5Ni04OC42NDUgMTk3LjU5Ny0xOTcuNTk3IDE5Ny41OTd6XFxcIi8+PHBhdGggZD1cXFwiTTMxMi4xNDIgMTIyLjM1OGwtODMuNTM4IDgzLjU2OC03NC45NjUtODMuNTY4Yy01LjkzLTUuOTI4LTE1LjU2Ni01LjkyOC0yMS40OTMgMC01LjkyOCA1LjkyOC01LjkyOCAxNS41NjUgMCAyMS40OTJsNzQuOTY1IDgzLjU2OC04NC43MjMgODQuNzIzYy01LjkzIDUuOTMtNS45MyAxNS41OTYgMCAyMS40OTMgNS45MjcgNS45MjggMTUuNTY0IDUuOTI4IDIxLjQ5IDBsODMuNTctODMuNTM4IDc0Ljk2NCA4My41MzhjNS44OTcgNS45MjggMTUuNTY1IDUuOTI4IDIxLjQ2MiAwIDUuOTI4LTUuODk4IDUuOTI4LTE1LjU2NSAwLTIxLjQ5MmwtNzQuOTk1LTgzLjUzNyA4NC43MjQtODQuNzU0YzUuOTI4LTUuOTMgNS45MjgtMTUuNTY2IDAtMjEuNDkzLTUuOTI4LTUuOTI3LTE1LjUzNC01LjkyNy0yMS40NjIgMHpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJjbG9zZTFcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvY2xvc2UxLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDc2LjczNyA0NzYuNzM3XFxcIiBpZD1cXFwiY2xvc2UyXFxcIiA+PHBhdGggZD1cXFwiTTIzOC4zNyAwQzEwNi43MjUgMCAwIDEwNi43MjYgMCAyMzguMzdjMCAxMzEuNjc0IDEwNi43MjYgMjM4LjM2OCAyMzguMzcgMjM4LjM2OCAxMzEuNjc0IDAgMjM4LjM2OC0xMDYuNjk0IDIzOC4zNjgtMjM4LjM3QzQ3Ni43MzggMTA2LjcyNyAzNzAuMDQzIDAgMjM4LjM2OCAwem0xMTAuNDQzIDE1MC4zOTVsLTg4LjU3OCA4OC42MSA3OC40MDcgODcuMzM4YzYuMTk4IDYuMTk4IDYuMTk4IDE2LjMwNCAwIDIyLjQ3LTYuMTY2IDYuMTk4LTE2LjI3MyA2LjE5OC0yMi40MzggMGwtNzguNDA3LTg3LjMzOC04Ny4zNyA4Ny4zMzhjLTYuMTk4IDYuMTk4LTE2LjI3MyA2LjE5OC0yMi40NyAwLTYuMTk4LTYuMTY2LTYuMTk4LTE2LjI3MyAwLTIyLjQ3bDg4LjU3OC04OC41NzgtNzguMzc2LTg3LjM3Yy02LjItNi4xOTgtNi4yLTE2LjI3MyAwLTIyLjQ3czE2LjI3Mi02LjE5OCAyMi40NyAwbDc4LjQwNiA4Ny4zNyA4Ny4zMzgtODcuMzdjNi4xOTgtNi4xOTggMTYuMjczLTYuMTk4IDIyLjQ3IDAgNi4xOTggNi4xOTcgNi4xNjYgMTYuMjcyLS4wMyAyMi40N3pcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJjbG9zZTJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvY2xvc2UyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMzAuNTExIDMwLjUxMVxcXCIgaWQ9XFxcImNvbW1lcmNlXFxcIiA+PHBhdGggZD1cXFwiTTI2LjgxOCAxOS4wMzdMMzAuNDI1IDguMjRjLjE4LS41MTguMDQ0LS44My0uMTAyLTEuMDM2LS4zNzQtLjUyNy0xLjE0My0uNTMyLTEuMjkyLS41MzJMOC42NDcgNi42NjhsLS41NDQtMi41OGMtLjE0Ny0uNjEtLjU4LTEuMTktMS40NTYtMS4xOUguOTE2Yy0uNTkzIDAtLjkxNi4yNzctLjkxNi44MzJ2MS40OWMwIC41MzcuMzIyLjY3Ny45MzguNjc3aDQuODM3bDMuNzAyIDE1LjcxN2MtLjU4OC42MjMtLjkwOCAxLjUzLS45MDggMi4zNzggMCAxLjg2NCAxLjQ4MyAzLjU4MiAzLjM4IDMuNTgyIDEuNzkgMCAzLjEzLTEuNjc3IDMuMzUtMi42NzdoNy4yMWMuMjE3IDEgMS4zMDQgMi43MTcgMy4zNDggMi43MTcgMS44NjMgMCAzLjM3OC0xLjYxNCAzLjM3OC0zLjQ3NSAwLTEuODUyLTEuMTI1LTMuNDkzLTMuMzYtMy40OTMtLjkyOCAwLTIuMDMuNS0yLjU0MiAxLjI1aC04Ljg2Yy0uNjQyLTEtMS41Mi0xLjMxLTIuNDA4LTEuMzQ1bC0uMTIzLS42NTVoMTMuNDhjMS4wMTUgMCAxLjIxNS0uMzcgMS4zOTUtLjg2em0tLjkzNSAzLjc5Yy43IDAgMS4yNy41NyAxLjI3IDEuMjdzLS41NyAxLjI3LTEuMjcgMS4yNy0xLjI3LS41NjctMS4yNy0xLjI3YzAtLjcuNTctMS4yNyAxLjI3LTEuMjd6bS0xMi42NzggMS4yN2MwIC43MS0uNTc2IDEuMjg3LTEuMjgzIDEuMjg3LS43MS0uMDAyLTEuMjg2LS41NzctMS4yODYtMS4yODZzLjU3Ny0xLjI4NiAxLjI4Ni0xLjI4NmMuNzA3IDAgMS4yODMuNTc3IDEuMjgzIDEuMjg2elxcXCIgZmlsbD1cXFwiIzAxMDAwMlxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImNvbW1lcmNlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2NvbW1lcmNlLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNTEwIDUxMFxcXCIgaWQ9XFxcImZhdm9yaXRlXFxcIiA+PHBhdGggZD1cXFwiTTI1NSA0MDIuMjEybDE1Ny41OSA5NS4wMzgtNDEuNjkzLTE3OS4yNEw1MTAgMTk3LjQ3M2wtMTgzLjM3LTE1LjczNEwyNTUgMTIuNzVsLTcxLjYzIDE2OC45ODhMMCAxOTcuNDcybDEzOS4xMDMgMTIwLjU0TDk3LjQxIDQ5Ny4yNVxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImZhdm9yaXRlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2Zhdm9yaXRlLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNTEwIDUxMFxcXCIgaWQ9XFxcImZhdm9yaXRlMlxcXCIgPjxwYXRoIGQ9XFxcIk01MTAgMTk3LjQ3MmwtMTgzLjM3LTE1LjczNEwyNTUgMTIuNzVsLTcxLjYzIDE2OC45ODhMMCAxOTcuNDcybDEzOS4xMDMgMTIwLjU0TDk3LjQxIDQ5Ny4yNSAyNTUgNDAyLjE4NmwxNTcuNTkgOTUuMDY0LTQxLjY5Mi0xNzkuMjRMNTEwIDE5Ny40NzN6TTI1NSAzNTQuMzQ4bC05NS45NTcgNTcuODg2IDI1LjM5OC0xMDkuMTY2LTg0LjczNS03My4zOSAxMTEuNjktOS41ODdMMjU1IDExNy4xNzNsNDMuNjA1IDEwMi45MTggMTExLjY5IDkuNTg4LTg0LjcxMiA3My4zOSAyNS4zOTggMTA5LjE2NUwyNTUgMzU0LjM0OHpcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJmYXZvcml0ZTJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZmF2b3JpdGUyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDkuNjUyIDQ5LjY1MlxcXCIgaWQ9XFxcImZiXFxcIiA+PHBhdGggZD1cXFwiTTI0LjgyNiAwQzExLjEzNiAwIDAgMTEuMTM3IDAgMjQuODI2YzAgMTMuNjg4IDExLjEzNyAyNC44MjYgMjQuODI2IDI0LjgyNiAxMy42ODggMCAyNC44MjYtMTEuMTM4IDI0LjgyNi0yNC44MjZDNDkuNjUyIDExLjEzNiAzOC41MTYgMCAyNC44MjYgMHpNMzEgMjUuN2gtNC4wNHYxNC4zOTZoLTUuOTg0VjI1LjdIMTguMTN2LTUuMDg4aDIuODQ2di0zLjI5YzAtMi4zNTggMS4xMi02LjA0IDYuMDQtNi4wNGw0LjQzNS4wMTZ2NC45NGgtMy4yMThjLS41MjQgMC0xLjI3LjI2LTEuMjcgMS4zODV2Mi45OWg0LjU2TDMxIDI1Ljd6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiZmJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZmIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA5IDE2XFxcIiBpZD1cXFwiZmIyXFxcIiA+PHRpdGxlPkZhY2Vib29rPC90aXRsZT48cGF0aCBkPVxcXCJNNy44MjcgOC4xNjZINS42MXY3LjQ5NEgyLjMyVjguMTY2SC43NnYtMi42NWgxLjU2MlYzLjgwNUMyLjMyMiAyLjU3NyAyLjkzNy42NiA1LjY0LjY2bDIuNDM1LjAxdjIuNTdINi4zMDdjLS4yODggMC0uNjk3LjEzNi0uNjk3LjcyVjUuNTJoMi41MDVsLS4yODggMi42NDh6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJmYjJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZmIyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDkuNjUyIDQ5LjY1MlxcXCIgaWQ9XFxcImdvb2dsZS1wbHVzXFxcIiA+PHBhdGggZD1cXFwiTTIxLjUgMjguOTRjLS4xNi0uMTA3LS4zMjYtLjIyMy0uNS0uMzQtLjUwMi0uMTU0LTEuMDM2LS4yMzQtMS41ODMtLjI0aC0uMDY2Yy0yLjUxMyAwLTQuNzE3IDEuNTItNC43MTcgMy4yNTYgMCAxLjg5IDEuODkgMy4zNjcgNC4zIDMuMzY3IDMuMTc4IDAgNC43OS0xLjA5OCA0Ljc5LTMuMjU4IDAtLjIwNC0uMDI1LS40MTYtLjA3Ni0uNjMtLjIxNS0uODM3LS45ODQtMS4zNi0yLjE0Ny0yLjE1NXpNMTkuNzIgMjIuMzUyYy42MDIgMCAxLjExLS4yMzcgMS41MDItLjY4Ny42MTYtLjcwMi44OS0xLjg1NC43MjctMy4wNzctLjI4Ni0yLjE4Ni0xLjg1LTQuMDA2LTMuNDgtNC4wNTNsLS4wNjUtLjAwMmMtLjU3NyAwLTEuMDkyLjIzOC0xLjQ4My42ODYtLjYwNy42OTItLjg2NCAxLjc5LS43MDUgMy4wMS4yODYgMi4xODUgMS44ODIgNC4wNzIgMy40OCA0LjEyMmguMDIyelxcXCIvPjxwYXRoIGQ9XFxcIk0yNC44MjYgMEMxMS4xMzYgMCAwIDExLjEzNyAwIDI0LjgyNmMwIDEzLjY4OCAxMS4xMzcgMjQuODI2IDI0LjgyNiAyNC44MjYgMTMuNjg4IDAgMjQuODI2LTExLjEzOCAyNC44MjYtMjQuODI2QzQ5LjY1MiAxMS4xMzYgMzguNTE2IDAgMjQuODI2IDB6bS0yLjg2MiAzNi45MTVjLS45MzguMjctMS45NTMuNDA4LTMuMDE4LjQwOC0xLjE4NiAwLTIuMzI2LS4xMzYtMy4zOS0uNDA1LTIuMDU2LS41Mi0zLjU3Ni0xLjUwMy00LjI4Ni0yLjc3LS4zMDYtLjU1LS40Ni0xLjEzMy0uNDYtMS43MzggMC0uNjIzLjE0OC0xLjI1NS40NDItMS44OCAxLjEyNy0yLjQwMyA0LjA5OC00LjAyIDcuMzktNC4wMmguMDkzYy0uMjY3LS40Ny0uMzk2LS45NTgtLjM5Ni0xLjQ3IDAtLjI1Ni4wMzMtLjUxNi4xLS43OC0zLjQ1LS4wOC02LjAzNC0yLjYwNy02LjAzNC01Ljk0IDAtMi4zNTMgMS44OC00LjY0NiA0LjU3LTUuNTcyLjgwNi0uMjc4IDEuNjI3LS40MiAyLjQzNC0uNDJoNy4zODJjLjI1IDAgLjQ3NC4xNjMuNTUyLjQwMi4wNzguMjM4LS4wMDguNS0uMjEuNjQ3bC0xLjY1MiAxLjE5NWMtLjEuMDctLjIxOC4xMDgtLjM0LjEwOGgtLjU5MmMuNzYzLjkxNSAxLjIxIDIuMjIgMS4yMSAzLjY4NSAwIDEuNjE3LS44MTggMy4xNDYtMi4zMDcgNC4zMS0xLjE1Ljg5Ny0xLjE5NSAxLjE0NC0xLjE5NSAxLjY1NS4wMTQuMjguODE1IDEuMTk4IDEuNyAxLjgyMyAyLjA1OCAxLjQ1NiAyLjgyNCAyLjg4NSAyLjgyNCA1LjI3IDAgMi40OS0xLjg5MiA0LjY0Mi00LjgxOCA1LjQ5MnptMTYuNjctMTIuNjYyYzAgLjMyLS4yNi41OC0uNTguNThIMzMuODZ2NC4xOTdjMCAuMzItLjI2LjU4LS41NzguNThoLTEuMTk1Yy0uMzIyIDAtLjU4Mi0uMjYtLjU4Mi0uNTh2LTQuMTk3aC00LjE5MmMtLjMyIDAtLjU4LS4yNTgtLjU4LS41OFYyMy4wNmMwLS4zMi4yNi0uNTgyLjU4LS41ODJoNC4xOTJ2LTQuMTkzYzAtLjMyLjI2LS41OC41ODItLjU4aDEuMTk1Yy4zMTcgMCAuNTc4LjI2LjU3OC41OHY0LjE5M2g0LjE5NGMuMzIgMCAuNTguMjYuNTguNTh2MS4xOTV6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiZ29vZ2xlLXBsdXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvZ29vZ2xlLXBsdXMuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxOCAxNlxcXCIgaWQ9XFxcImdvb2dsZS1wbHVzMlxcXCIgPjx0aXRsZT5nb29nbGUrPC90aXRsZT48cGF0aCBkPVxcXCJNNy4xMiAxMC42M2MtLjEwMy0uMDY1LS4yMDgtLjEzNS0uMzE3LS4yMDUtLjMyLS4wOTItLjY1Ny0uMTQtMS4wMDMtLjE0NWgtLjA0MmMtMS41OSAwLTIuOTg3LjkxMy0yLjk4NyAxLjk1NSAwIDEuMTM0IDEuMTk3IDIuMDIgMi43MjMgMi4wMiAyLjAxMyAwIDMuMDMzLS42NTggMy4wMzMtMS45NTQgMC0uMTIyLS4wMTYtLjI1LS4wNDgtLjM3Ny0uMTM2LS41MDMtLjYyMy0uODE3LTEuMzYtMS4yOTR6bS4yOTMgNC43ODVjLS41OTQuMTYzLTEuMjM3LjI0NS0xLjkxLjI0NS0uNzUyIDAtMS40NzQtLjA4Mi0yLjE0Ny0uMjQzLTEuMzAyLS4zMTItMi4yNjUtLjkwMi0yLjcxNC0xLjY2My0uMTk0LS4zMy0uMjkyLS42OC0uMjkyLTEuMDQyIDAtLjM3NC4wOTQtLjc1NC4yOC0xLjEzLjcxNC0xLjQ0IDIuNTk1LTIuNDEgNC42OC0yLjQxaC4wNThjLS4xNy0uMjgzLS4yNS0uNTc2LS4yNS0uODg0IDAtLjE1My4wMi0uMzEuMDY0LS40NjgtMi4xODYtLjA0Ny0zLjgyLTEuNTY0LTMuODItMy41NjQgMC0xLjQxMiAxLjE5LTIuNzg4IDIuODkzLTMuMzQ0LjUxLS4xNjcgMS4wMy0uMjUyIDEuNTQtLjI1Mmg0LjY3NGMuMTU4IDAgLjMuMDk4LjM1LjI0LjA0OC4xNDQtLjAwNi4zLS4xMzUuMzlsLTEuMDQ1LjcxN2MtLjA2My4wNDItLjEzOC4wNjQtLjIxNi4wNjRIOS4wNWMuNDgzLjU1Ljc2NiAxLjMzNC43NjYgMi4yMTMgMCAuOTctLjUxOCAxLjg4OC0xLjQ2IDIuNTg3LS43My41MzgtLjc1Ny42ODYtLjc1Ny45OTMuMDA4LjE2OC41MTUuNzIgMS4wNzQgMS4wOTQgMS4zMDQuODczIDEuNzkgMS43MyAxLjc5IDMuMTYyLS4wMDIgMS40OTQtMS4yIDIuNzg1LTMuMDUgMy4yOTV6bTEwLjU1NS03LjZjMCAuMTkzLS4xNjYuMzUtLjM2OC4zNWgtMi42NTZ2Mi41MThjMCAuMTkyLS4xNjUuMzQ4LS4zNjYuMzQ4aC0uNzU2Yy0uMjA0IDAtLjM3LS4xNTUtLjM3LS4zNDd2LTIuNTJIMTAuOGMtLjIwMyAwLS4zNjgtLjE1My0uMzY4LS4zNDdWNy4xYzAtLjE5Mi4xNjUtLjM1LjM2Ny0uMzVoMi42NTNWNC4yMzZjMC0uMTkzLjE2NS0uMzQ4LjM3LS4zNDhoLjc1NWMuMiAwIC4zNjYuMTU1LjM2Ni4zNDhWNi43NUgxNy42Yy4yMDIgMCAuMzY3LjE1Ny4zNjcuMzV2LjcxNnpNNS45OSA2LjY3NmguMDAyYy4zOCAwIC43MDItLjE0Mi45NS0uNDEyLjM5LS40Mi41NjQtMS4xMTIuNDYtMS44NDYtLjE4LTEuMzEyLTEuMTctMi40MDQtMi4yMDItMi40MzNoLS4wNGMtLjM2NiAwLS42OTIuMTQyLS45NC40MS0uMzg0LjQxNy0uNTQ3IDEuMDc2LS40NDYgMS44MDguMTggMS4zMSAxLjE5MiAyLjQ0NCAyLjIwMyAyLjQ3NGguMDE0elxcXCIgZmlsbD1cXFwiIzM0MzQzNFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiZ29vZ2xlLXBsdXMyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2dvb2dsZS1wbHVzMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDI3LjAyIDI3LjAyXFxcIiBpZD1cXFwiaG9tZVxcXCIgPjxnIGZpbGw9XFxcIiMwMzAxMDRcXFwiPjxwYXRoIGQ9XFxcIk0zLjY3NCAyNC44NzZzLS4wMjQuNjA0LjU2Ni42MDRsNi44MS0uMDA4LjAxLTUuNThzLS4wOTUtLjkyLjc5OC0uOTJoMi44MjZjMS4wNTYgMCAuOTkuOTIuOTkuOTJsLS4wMSA1LjU2Mmg2LjY2NmMuNzUgMCAuNzE1LS43NTIuNzE1LS43NTJ2LTEwLjI5TDEzLjY1IDYuMDU2bC05Ljk3NiA4LjM1OHYxMC40NjN6XFxcIi8+PHBhdGggZD1cXFwiTTAgMTMuNjM1cy44NDcgMS41NiAyLjY5NCAwbDExLjAzOC05LjMzOCAxMC4zNSA5LjI4YzIuMTM3IDEuNTQyIDIuOTM4IDAgMi45MzggMEwxMy43MzIgMS41NCAwIDEzLjYzNXpNMjMuODMgNC4yNzVoLTIuNjYybC4wMSAzLjIyOCAyLjY1MiAyLjI1XFxcIi8+PC9nPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImhvbWVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvaG9tZS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDU0My45MDYgNTQzLjkwNlxcXCIgaWQ9XFxcImluZm9cXFwiID48cGF0aCBkPVxcXCJNMjcxLjk1MyAwQzEyMS43NiAwIDAgMTIxLjc2IDAgMjcxLjk1M3MxMjEuNzYgMjcxLjk1MyAyNzEuOTUzIDI3MS45NTMgMjcxLjk1My0xMjEuNzYgMjcxLjk1My0yNzEuOTUzUzQyMi4xNDggMCAyNzEuOTUzIDB6bTQ1LjA0IDc2LjMxNmMxLjA1Ni0uMDUgMi4xNC0uMDYgMy4yMzIgMCAxNC43MjQtLjQ4NCAyNy41MzMgMTAuNjIyIDI5LjU3OCAyNC45ODcgNi41NzYgMjcuNTgtMjIuNzIgNTUuMjI4LTQ5LjYzIDQ0LjE5Mi0zMi4xNC0xNC45Mi0xNS45NS02Ny41ODYgMTYuODItNjkuMTh6TTMwMy43NCAxOTYuMzE4YzIwLjg3NC0xLjMyNyAyNC41MTggMjIuOTY0IDE4LjAxMyA0Ny41OTItMTIuNjk1IDU2LjU4My0zMi40NTUgMTExLjQwMy00My4xNzUgMTY4LjQ0MiA1LjE3OCAyMi41MjMgMzMuNTc1LTMuMzEyIDQ1LjcyLTExLjU1OCAxMC4zMy04LjIxMyAxMi4xMjUgMi4wODMgMTUuNjM4IDEwLjcxLTI1Ljc3NiAxOC4wNTgtNTEuNjg3IDM2LjQ0Ny04MC4zOTUgNTAuOTktMjYuOTcgMTYuMzYyLTQ5LjA0OC05LjA3LTQyLjMyLTM3LjM5MyAxMS4xMjgtNTIuODQgMjUuNzc2LTEwNC44OCAzNy43MzYtMTU3LjU2MyAzLjczNy0yOC40NjgtMzMuNzI4LjUxLTQ0Ljg3MiA3LjEzNi04Ljk4NSAxMS4yOTItMTMuMjUgMy4wNS0xNi45OTctNy4xMzYgMjkuODctMjEuODE2IDYwLjMyNS00OC41OTMgOTMuMzEzLTY1Ljk1IDYuNzM4LTMuMzUgMTIuNTItNC45NjUgMTcuMzQtNS4yN3pcXFwiIGZpbGw9XFxcIiMwMTAwMDJcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJpbmZvXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2luZm8uc3ZnXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwiaW5zdGFncmFtXFxcIiA+PHBhdGggZD1cXFwiTTI0LjgyNSAyOS43OTZjMi43NCAwIDQuOTcyLTIuMjMgNC45NzItNC45NyAwLTEuMDgyLS4zNTQtMi4wOC0uOTQtMi44OTctLjkwMy0xLjI1My0yLjM3LTIuMDc0LTQuMDMtMi4wNzQtMS42NTggMC0zLjEyNS44Mi00LjAzIDIuMDcyLS41ODguODE2LS45NCAxLjgxNS0uOTQgMi44OTctLjAwMyAyLjc0IDIuMjI4IDQuOTcgNC45NjggNC45N3pNMzUuNjc4IDE4Ljc0NlYxMy45NmwtLjYyMy4wMDItNC4xNjQuMDEzLjAxNyA0Ljc4N1xcXCIvPjxwYXRoIGQ9XFxcIk0yNC44MjYgMEMxMS4xMzYgMCAwIDExLjEzNyAwIDI0LjgyNmMwIDEzLjY4OCAxMS4xMzcgMjQuODI2IDI0LjgyNiAyNC44MjYgMTMuNjg4IDAgMjQuODI2LTExLjEzOCAyNC44MjYtMjQuODI2QzQ5LjY1MiAxMS4xMzYgMzguNTE2IDAgMjQuODI2IDB6bTE0LjEyIDIxLjkzdjExLjU2YzAgMy4wMS0yLjQ1IDUuNDU3LTUuNDU4IDUuNDU3SDE2LjE2NGMtMy4wMSAwLTUuNDU3LTIuNDQ3LTUuNDU3LTUuNDU4VjE2LjE2NGMwLTMuMDEgMi40NDctNS40NTcgNS40NTctNS40NTdoMTcuMzIzYzMuMDEgMCA1LjQ1OCAyLjQ0NyA1LjQ1OCA1LjQ1N3Y1Ljc2NHpcXFwiLz48cGF0aCBkPVxcXCJNMzIuNTUgMjQuODI2YzAgNC4yNTctMy40NjUgNy43MjMtNy43MjQgNy43MjMtNC4yNiAwLTcuNzIyLTMuNDY3LTcuNzIyLTcuNzI0IDAtMS4wMjQuMjA0LTIuMDAzLjU2OC0yLjg5N2gtNC4yMTV2MTEuNTZjMCAxLjQ5MyAxLjIxMyAyLjcwMyAyLjcwNiAyLjcwM2gxNy4zMjNjMS40OSAwIDIuNzA2LTEuMjEgMi43MDYtMi43MDRWMjEuOTNoLTQuMjE3Yy4zNjcuODkzLjU3NCAxLjg3Mi41NzQgMi44OTZ6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwiaW5zdGFncmFtXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2luc3RhZ3JhbS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwiaW5zdGFncmFtMlxcXCIgPjx0aXRsZT5TaGFwZTwvdGl0bGU+PHBhdGggZD1cXFwiTTguMDEgMTAuOGMxLjUzNiAwIDIuNzg3LTEuMTg1IDIuNzg3LTIuNjQgMC0uNTc2LS4xOTgtMS4xMDYtLjUyNy0xLjU0LS41MDYtLjY2NS0xLjMyOC0xLjEtMi4yNTgtMS4xLS45MyAwLTEuNzUuNDM1LTIuMjYgMS4xLS4zMjguNDMzLS41MjUuOTY0LS41MjUgMS41NC0uMDAyIDEuNDU1IDEuMjQ4IDIuNjQgMi43ODQgMi42NHptNi4wODMtNS44N1YyLjM4N2gtLjM1bC0yLjMzMy4wMDguMDEgMi41NDMgMi42NzMtLjAwOHptMS44MyAxLjY5djYuMTRjMCAxLjYtMS4zNyAyLjktMy4wNTcgMi45aC05LjcxQzEuNDcgMTUuNjYuMSAxNC4zNi4xIDEyLjc2di05LjJjMC0xLjYgMS4zNy0yLjkgMy4wNTctMi45aDkuNzA4YzEuNjg3IDAgMy4wNiAxLjMgMy4wNiAyLjl2My4wNnpNMTIuMzQgOC4xNmMwIDIuMjYtMS45NDIgNC4xLTQuMzMgNC4xLTIuMzg1IDAtNC4zMjYtMS44NC00LjMyNi00LjEgMC0uNTQ1LjExNC0xLjA2NS4zMTgtMS41NEgxLjY0djYuMTRjMCAuNzk0LjY4IDEuNDM3IDEuNTE3IDEuNDM3aDkuNzA3Yy44MzYgMCAxLjUxNy0uNjQzIDEuNTE3LTEuNDM2VjYuNjJIMTIuMDJjLjIwNS40NzUuMzIuOTk1LjMyIDEuNTR6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJpbnN0YWdyYW0yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2luc3RhZ3JhbTIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0OS42NTIgNDkuNjUyXFxcIiBpZD1cXFwibGlua2VkaW5cXFwiID48cGF0aCBkPVxcXCJNMjkuMzUgMjEuMjk4Yy0yLjEyNSAwLTMuMDc0IDEuMTY4LTMuNjA1IDEuOTg4di0xLjcwNGgtNC4wMDJjLjA1MiAxLjEyOCAwIDEyLjA0IDAgMTIuMDRoNC4wMDJ2LTYuNzI2YzAtLjM2LjAyMy0uNzIuMTMtLjk3Ny4yOS0uNzIuOTUtMS40NjYgMi4wNTUtMS40NjYgMS40NDggMCAyLjAyNyAxLjEwNCAyLjAyNyAyLjcyNHY2LjQ0Mmg0LjAwMnYtNi45MDVjLS4wMDItMy42OTYtMS45NzctNS40MTctNC42MS01LjQxN3ptLTMuNjA4IDIuMDNoLS4wMjVjLjAwOC0uMDE0LjAyLS4wMjcuMDI1LS4wNHYuMDR6TTE1LjUyMyAyMS41ODJoNC4wMDJ2MTIuMDRoLTQuMDAyelxcXCIvPjxwYXRoIGQ9XFxcIk0yNC44MjYgMEMxMS4xMzYgMCAwIDExLjEzNyAwIDI0LjgyNmMwIDEzLjY4OCAxMS4xMzcgMjQuODI2IDI0LjgyNiAyNC44MjYgMTMuNjg4IDAgMjQuODI2LTExLjEzOCAyNC44MjYtMjQuODI2QzQ5LjY1MiAxMS4xMzYgMzguNTE2IDAgMjQuODI2IDB6TTM3Ljk5IDM2LjA1NWMwIDEuMDU2LS44NzUgMS45MS0xLjk1OCAxLjkxaC0yMi41OGMtMS4wOCAwLTEuOTU4LS44NTQtMS45NTgtMS45MVYxMy4yMWMwLTEuMDU0Ljg3Ny0xLjkxIDEuOTU3LTEuOTFoMjIuNTgyYzEuMDgyIDAgMS45Ni44NTcgMS45NiAxLjkxdjIyLjg0NXpcXFwiLz48cGF0aCBkPVxcXCJNMTcuNTUgMTUuNzc3Yy0xLjM2NyAwLTIuMjYzLjg5OC0yLjI2MyAyLjA4IDAgMS4xNTUuODcgMi4wOCAyLjIxIDIuMDhoLjAyN2MxLjM5NiAwIDIuMjY1LS45MjUgMi4yNjUtMi4wOC0uMDI4LTEuMTgtLjg3LTIuMDgtMi4yNC0yLjA4elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImxpbmtlZGluXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2xpbmtlZGluLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTcgMTZcXFwiIGlkPVxcXCJsaW5rZWRpbjJcXFwiID48dGl0bGU+bGlua2VkaW48L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMS40NiA2LjI4NGMtMS4yNiAwLTEuODI0LjY1Ny0yLjE0IDEuMTE4di0uOTU4SDYuOTQ3Yy4wMy42MzQgMCA2Ljc3MyAwIDYuNzczSDkuMzJWOS40MzNjMC0uMjAyLjAxNS0uNDA1LjA4LS41NS4xNy0uNDA1LjU2Mi0uODI0IDEuMjE4LS44MjQuODYgMCAxLjIwMy42MiAxLjIwMyAxLjUzMnYzLjYyNGgyLjM3NlY5LjMzYzAtMi4wNzgtMS4xNzItMy4wNDYtMi43MzUtMy4wNDZ6TTkuMzIgNy40MjZoLS4wMTVjLjAwNC0uMDA4LjAxMi0uMDE1LjAxNS0uMDIzdi4wMjN6bS02LjA2Ni0uOTgySDUuNjN2Ni43NzNIMy4yNTRWNi40NDR6bTEuMjA0LTMuMjY2Yy0uODEyIDAtMS4zNDQuNTA1LTEuMzQ0IDEuMTcgMCAuNjUuNTE2IDEuMTcgMS4zMTMgMS4xN2guMDE1Yy44MyAwIDEuMzQ0LS41MiAxLjM0NC0xLjE3LS4wMTYtLjY2NC0uNTE1LTEuMTctMS4zMjgtMS4xN3ptMTIuMTMgMTEuNDA3YzAgLjU5NS0uNTIgMS4wNzUtMS4xNiAxLjA3NUgyLjAyNGMtLjY0IDAtMS4xNjItLjQ4LTEuMTYyLTEuMDc1VjEuNzM1YzAtLjU5NC41Mi0xLjA3NSAxLjE2Mi0xLjA3NWgxMy40MDJjLjY0MiAwIDEuMTYyLjQ4MiAxLjE2MiAxLjA3NHYxMi44NXpcXFwiIGZpbGw9XFxcIiMzNDM0MzRcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImxpbmtlZGluMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9saW5rZWRpbjIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0NjYuNTgzIDQ2Ni41ODJcXFwiIGlkPVxcXCJsb2NhdGlvblxcXCIgPjxwYXRoIGQ9XFxcIk0yMzMuMjkyIDBjLTg1LjEgMC0xNTQuMzM0IDY5LjIzNC0xNTQuMzM0IDE1NC4zMzMgMCAzNC4yNzUgMjEuODg3IDkwLjE1NSA2Ni45MDggMTcwLjgzNCAzMS44NDYgNTcuMDYzIDYzLjE2OCAxMDQuNjQzIDY0LjQ4NCAxMDYuNjRsMjIuOTQyIDM0Ljc3NSAyMi45NC0zNC43NzRjMS4zMTgtMS45OTggMzIuNjQyLTQ5LjU3NyA2NC40ODQtMTA2LjY0IDQ1LjAyMy04MC42OCA2Ni45MDgtMTM2LjU2IDY2LjkwOC0xNzAuODM0QzM4Ny42MjQgNjkuMjM0IDMxOC4zOSAwIDIzMy4yOTIgMHptMCAyMzMuMjljLTQ0LjE4MiAwLTgwLTM1LjgxNi04MC04MHMzNS44MTgtODAgODAtODAgODAgMzUuODE4IDgwIDgwLTM1LjgyIDgwLTgwIDgwelxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcImxvY2F0aW9uXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL2xvY2F0aW9uLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNzkuNTM2IDc5LjUzNlxcXCIgaWQ9XFxcIm1haWxcXFwiID48cGF0aCBkPVxcXCJNMzkuNzczIDEuMzFMMCAzMS4wMDR2NDcuMjIyaDc5LjUzNlYzMS4wMDRMMzkuNzczIDEuMzF6TTI4Ljc3IDIyLjVjMS4xNjctMi4xMzQgMi43NzUtMy43NCA0LjgxNS00LjgwNiAyLjAzNS0xLjA3NSA0LjM1Ny0xLjYxNiA2Ljk4My0xLjYxNiAyLjIxNCAwIDQuMTkuNDM1IDUuOTIgMS4yOTIgMS43My44NyAzLjA0NiAyLjA5NCAzLjk2OCAzLjY4Ny45IDEuNTk1IDEuMzY3IDMuMzM0IDEuMzY3IDUuMjE3IDAgMi4yNDctLjY5NCA0LjI4LTIuMDgyIDYuMDk3LTEuNzQgMi4yOTMtMy45NiAzLjQzNy02LjY4IDMuNDM3LS43MyAwLTEuMjc4LS4xMjItMS42NTMtLjM4LS4zNjUtLjI2Mi0uNjItLjYzMi0uNzQzLTEuMTMtMS4wMjIgMS4wMTMtMi4yMyAxLjUyLTMuNTkgMS41Mi0xLjQ2NCAwLTIuNjc4LS41MDYtMy42NDItMS41MDgtLjk2Ni0xLjAxMy0xLjQ0Ny0yLjM2Mi0xLjQ0Ny00LjAzMiAwLTIuMDg0LjU3OC0zLjk2NiAxLjc0My01LjY3MiAxLjQxNi0yLjA4NCAzLjIxOC0zLjEzIDUuNDI0LTMuMTMgMS41NyAwIDIuNzMuNiAzLjQ3NSAxLjgwNWwuMzMtMS40NjdoMy41bC0xLjk5NyA5LjQ4Yy0uMTI1LjYwNS0uMTg3Ljk4NS0uMTg3IDEuMTYyIDAgLjIyOC4wNTIuMzguMTUuNDk3LjA5OC4xMS4yMjIuMTY1LjM1Ni4xNjUuNDM1IDAgLjk3OC0uMjQ4IDEuNjQ1LS43Ny45LS42NjIgMS42MjctMS41NzMgMi4xOC0yLjY5NC41NTUtMS4xMy44NC0yLjMuODQtMy41MDggMC0yLjE2NS0uNzgyLTMuOTc3LTIuMzUyLTUuNDQ1LTEuNTczLTEuNDUtMy43Ny0yLjE4NS02LjU3OC0yLjE4NS0yLjM5MyAwLTQuNDE3LjQ4Ny02LjA3NyAxLjQ2OC0xLjY2Ljk2Ni0yLjkxMyAyLjM0My0zLjc2NSA0LjExNC0uODQgMS43Ni0xLjI1OCAzLjYwNy0xLjI1OCA1LjUyIDAgMS44NTYuNDggMy41NTIgMS40MSA1LjA3NC45NDYgMS41MzQgMi4yNiAyLjY0MiAzLjk1NyAzLjM0NiAxLjY5Ni42OTcgMy42NDMgMS4wNDYgNS44MjggMS4wNDYgMi4wOTcgMCAzLjkxLS4yOTMgNS40MzItLjg4IDEuNTIyLS41ODggMi43NC0xLjQ1OCAzLjY2Ni0yLjY0MmgyLjgwN2MtLjg4IDEuNzkyLTIuMjI3IDMuMTkyLTQuMDUgNC4yMTUtMi4wOSAxLjE2My00LjY0IDEuNzQtNy42NDMgMS43NC0yLjkxOCAwLTUuNDI2LS40ODctNy41NDItMS40NjgtMi4xMi0uOTg2LTMuNjktMi40MzQtNC43My00LjM1LTEuMDI4LTEuOTE4LTEuNTM1LTQuMDA4LTEuNTM1LTYuMjY4LjAwMi0yLjQ3OC41OC00Ljc5IDEuNzU1LTYuOTN6TTIuODA0IDMxLjk0bDI5LjM0NCAxOS42OEwyLjgwNCA3NC4zMzRWMzEuOTR6bTIuMjMgNDMuOTA0bDM0Ljc0LTI2Ljg4NUw3NC41IDc1Ljg0M0g1LjAzMnptNzEuNjk1LTEuNTFMNDcuMzkgNTEuNjJsMjkuMzQtMTkuNjh2NDIuMzkzek00MS4yMDQgMjQuNjZjLjQ2Ni41MzIuNyAxLjI5Ni43IDIuMjkzIDAgLjg5LS4xNzUgMS44NTYtLjUxNCAyLjg4LS4zMzMgMS4wMzUtLjc0MiAxLjgyNS0xLjIwOCAyLjM2LS4zMTguMzc1LS42NTguNjUyLS45OTIuODI2LS40NC4yNDgtLjkwNi4zNy0xLjQxLjM3LS42NzQuMDA1LTEuMjMtLjI2NS0xLjY5LS43OTUtLjQ1LS41My0uNjc0LTEuMzQ2LS42NzQtMi40NjUgMC0uODQuMTU4LTEuODA1LjQ4Ny0yLjg5LjMzLTEuMDg3LjgxLTEuOTE1IDEuNDUzLTIuNTA4LjY0Ny0uNTg4IDEuMzQ2LS44OCAyLjEtLjg4LjcwNi4wMDQgMS4yOTMuMjczIDEuNzUuODF6XFxcIiBmaWxsPVxcXCIjMDEwMDAyXFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwibWFpbFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9tYWlsLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTQgMTRcXFwiIGlkPVxcXCJtYWlsMlxcXCIgPjxnIGZpbGw9XFxcIiMwMzAxMDRcXFwiPjxwYXRoIGQ9XFxcIk03IDlMNS4yNjggNy40ODQuMzE2IDExLjczYy4xOC4xNjYuNDIzLjI3LjY5LjI3aDExLjk4N2MuMjY3IDAgLjUxLS4xMDQuNjg4LS4yN0w4LjczMyA3LjQ4MyA3IDl6XFxcIi8+PHBhdGggZD1cXFwiTTEzLjY4NCAyLjI3Yy0uMTgtLjE2Ny0uNDIyLS4yNy0uNjktLjI3SDEuMDA2Yy0uMjY3IDAtLjUxLjEwNC0uNjkuMjczTDcgOGw2LjY4NC01Ljczek0wIDIuODc4djguMzA4TDQuODMzIDcuMDhNOS4xNjcgNy4wOEwxNCAxMS4xODV2LTguMzFcXFwiLz48L2c+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwibWFpbDJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvbWFpbDIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1MS40MTMgNTEuNDEzXFxcIiBpZD1cXFwicGhvbmUxXFxcIiA+PGcgZmlsbD1cXFwiIzAxMDAwMlxcXCI+PHBhdGggZD1cXFwiTTI1Ljk5IDEyLjI3NGM4LjY2Mi4wODUgMTQuMDktLjQ1NCAxNC44MjIgOS4xNDhoMTAuNTY0YzAtMTQuODc1LTEyLjk3My0xNi44OC0yNS42NjItMTYuODgtMTIuNjkgMC0yNS42NjIgMi4wMDUtMjUuNjYyIDE2Ljg4aDEwLjQ4MmMuODEtOS43ODUgNi44NjQtOS4yMzIgMTUuNDU1LTkuMTQ4ek01LjI5IDI2LjIwNGMyLjU3NCAwIDQuNzE1LjE1NCA1LjE5LTIuMzc3LjA2NS0uMzQ0LjEwMi0uNzM0LjEwMi0xLjE4NUgwYzAgMy43NjUgMi4zNyAzLjU2MiA1LjI5IDMuNTYyek00MC44OCAyMi42NDJoLS4xYzAgLjQ1NC4wNC44NDUuMTEzIDEuMTg1LjUwMiAyLjMzNCAyLjY0IDIuMTkgNS4yMDQgMi4xOSAyLjkzNiAwIDUuMzE2LjE5MiA1LjMxNi0zLjM3NUg0MC44OHpcXFwiLz48cGF0aCBkPVxcXCJNMzUuNzIgMjAuMDc4di0xLjQ5NmMwLS42Ny0uNzcyLS43MS0xLjcyNC0uNzFIMzIuNDRjLS45NSAwLTEuNzIuMDQtMS43Mi43MXYyLjI5aC0xMXYtMi4yOWMwLS42Ny0uNzcyLS43MS0xLjcyMy0uNzFIMTYuNDRjLS45NSAwLTEuNzIuMDQtMS43Mi43MXYyLjgwMmMtMi41MDcgMi42MDQtMTAuNzA3IDEzLjY5LTExLjAwNSAxNS4wM2wuMDA0IDguOTU2YzAgLjgyNy42NzIgMS41IDEuNSAxLjVoNDBjLjgyNiAwIDEuNS0uNjczIDEuNS0xLjV2LTljLS4yOTYtMS4zMDMtOC40OTQtMTIuMzgzLTExLTE0Ljk4N3YtMS4zMDV6TTE5LjE3NiAzNy42MmMtLjgwNSAwLTEuNDU4LS42NTItMS40NTgtMS40NThzLjY1Mi0xLjQ1OCAxLjQ1Ny0xLjQ1OCAxLjQ1OC42NTIgMS40NTggMS40NTgtLjY1MyAxLjQ1OC0xLjQ1OCAxLjQ1OHptMC01Yy0uODA1IDAtMS40NTgtLjY1Mi0xLjQ1OC0xLjQ1OHMuNjUyLTEuNDU4IDEuNDU3LTEuNDU4IDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OC0uNjUzIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDUgMC0xLjQ1OC0uNjUtMS40NTgtMS40NTcgMC0uODA1LjY1Mi0xLjQ1OCAxLjQ1Ny0xLjQ1OHMxLjQ1OC42NTMgMS40NTggMS40NThjMCAuODA2LS42NTMgMS40NTgtMS40NTggMS40NTh6bTYgMTBjLS44MDUgMC0xLjQ1OC0uNjUyLTEuNDU4LTEuNDU4cy42NTItMS40NTggMS40NTctMS40NThjLjgwNiAwIDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OHMtLjY1MiAxLjQ1OC0xLjQ1OCAxLjQ1OHptMC01Yy0uODA1IDAtMS40NTgtLjY1Mi0xLjQ1OC0xLjQ1OHMuNjUyLTEuNDU4IDEuNDU3LTEuNDU4Yy44MDYgMCAxLjQ1OC42NTIgMS40NTggMS40NThzLS42NTIgMS40NTgtMS40NTggMS40NTh6bTAtNWMtLjgwNSAwLTEuNDU4LS42NS0xLjQ1OC0xLjQ1NyAwLS44MDUuNjUyLTEuNDU4IDEuNDU3LTEuNDU4LjgwNiAwIDEuNDU4LjY1MyAxLjQ1OCAxLjQ1OCAwIC44MDYtLjY1MiAxLjQ1OC0xLjQ1OCAxLjQ1OHptNiAxMGMtLjgwNiAwLTEuNDU4LS42NTItMS40NTgtMS40NThzLjY1LTEuNDU4IDEuNDU3LTEuNDU4IDEuNDU4LjY1MiAxLjQ1OCAxLjQ1OC0uNjUyIDEuNDU4LTEuNDU4IDEuNDU4em0wLTVjLS44MDYgMC0xLjQ1OC0uNjUyLTEuNDU4LTEuNDU4cy42NS0xLjQ1OCAxLjQ1Ny0xLjQ1OCAxLjQ1OC42NTIgMS40NTggMS40NTgtLjY1MiAxLjQ1OC0xLjQ1OCAxLjQ1OHptMC01Yy0uODA2IDAtMS40NTgtLjY1LTEuNDU4LTEuNDU3IDAtLjgwNS42NS0xLjQ1OCAxLjQ1Ny0xLjQ1OHMxLjQ1OC42NTMgMS40NTggMS40NThjMCAuODA2LS42NTIgMS40NTgtMS40NTggMS40NTh6XFxcIi8+PC9nPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcInBob25lMVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9waG9uZTEuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1NzguMTA2IDU3OC4xMDZcXFwiIGlkPVxcXCJwaG9uZTJcXFwiID48cGF0aCBkPVxcXCJNNTc3LjgzIDQ1Ni4xMjhjMS4yMjUgOS4zODUtMS42MzUgMTcuNTQ1LTguNTY4IDI0LjQ4bC04MS4zOTYgODAuNzhjLTMuNjcyIDQuMDgtOC40NjUgNy41NTItMTQuMzggMTAuNDA1LTUuOTE3IDIuODU3LTExLjczIDQuNjkzLTE3LjQ0IDUuNTA4LS40MDggMC0xLjYzNS4xMDYtMy42NzYuMzEtMi4wMzcuMjAzLTQuNjkuMzA3LTcuOTUzLjMwNy03Ljc1NCAwLTIwLjMtMS4zMjYtMzcuNjQtMy45OHMtMzguNTU2LTkuMTgtNjMuNjQ2LTE5LjU4M2MtMjUuMDk1LTEwLjQwNC01My41NTItMjYuMDEyLTg1LjM3NS00Ni44MTgtMzEuODIzLTIwLjgwNS02NS42ODgtNDkuMzY3LTEwMS41OTItODUuNjgtMjguNTYtMjguMTUyLTUyLjIyNC01NS4wOC03MC45OTItODAuNzgzLTE4Ljc2Ny0yNS43MDUtMzMuODYzLTQ5LjQ3LTQ1LjI4Ny03MS4zLTExLjQyNS0yMS44MjctMTkuOTkzLTQxLjYxNS0yNS43MDUtNTkuMzYzUzQuNTkgMTc3LjM2MiAyLjU1IDE2NC41MS0uMzA2IDE0MS41Ni4xMDIgMTM0LjIxNmMuNDA4LTcuMzQ0LjYxMi0xMS40MjQuNjEyLTEyLjI0LjgxNi01LjcxMiAyLjY1Mi0xMS41MjYgNS41MDgtMTcuNDQyczYuMzI0LTEwLjcxIDEwLjQwNC0xNC4zODJMOTguMDIyIDguNzU2YzUuNzEyLTUuNzEyIDEyLjI0LTguNTY4IDE5LjU4NC04LjU2OCA1LjMwNCAwIDkuOTk2IDEuNTMgMTQuMDc2IDQuNTlzNy41NDggNi44MzQgMTAuNDA0IDExLjMyMmw2NS40ODQgMTI0LjIzNmMzLjY3MiA2LjUyOCA0LjY5MiAxMy42NjggMy4wNiAyMS40Mi0xLjYzMiA3Ljc1Mi01LjEgMTQuMjgtMTAuNDA0IDE5LjU4NGwtMjkuOTg4IDI5Ljk4OGMtLjgxNi44MTYtMS41MyAyLjE0Mi0yLjE0MiAzLjk3OHMtLjkxOCAzLjM2Ni0uOTE4IDQuNTljMS42MzIgOC41NjggNS4zMDQgMTguMzYgMTEuMDE2IDI5LjM3NiA0Ljg5NiA5Ljc5MiAxMi40NDQgMjEuNzI2IDIyLjY0NCAzNS44MDJzMjQuNjg0IDMwLjI5MyA0My40NTIgNDguNjUzYzE4LjM2IDE4Ljc3IDM0LjY4IDMzLjM1NCA0OC45NiA0My43NiAxNC4yNzcgMTAuNCAyNi4yMTUgMTguMDUzIDM1LjgwMyAyMi45NSA5LjU4OCA0Ljg5NSAxNi45MzIgNy44NTMgMjIuMDMgOC44N2w3LjY1IDEuNTNjLjgxNSAwIDIuMTQ0LS4zMDYgMy45NzgtLjkxNyAxLjgzNy0uNjEzIDMuMTYzLTEuMzI2IDMuOTgtMi4xNDNsMzQuODgzLTM1LjQ5NmM3LjM0OC02LjUyNiAxNS45MTItOS43OSAyNS43MDUtOS43OSA2LjkzOCAwIDEyLjQ0MyAxLjIyMyAxNi41MjMgMy42NzJoLjYxMmwxMTguMTE1IDY5Ljc2OGM4LjU3IDUuMzA4IDEzLjY3IDEyLjAzOCAxNS4zMDMgMjAuMTk4elxcXCIgZmlsbD1cXFwiIzAxMDAwMlxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcInBob25lMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy9waG9uZTIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA0ODguMTM5IDQ4OC4xMzlcXFwiIGlkPVxcXCJzZWFyY2hcXFwiID48cGF0aCBkPVxcXCJNMjkwLjUxMy4wMDRDMTgxLjM3OC4wMDQgOTIuOTE2IDg4LjQ2NiA5Mi45MTYgMTk3LjZjMCA0Ni45NjcgMTYuNDc3IDkwLjA0MyA0My44MzYgMTI0LjAzTDYuMTU2IDQ1Mi4xOTZjLTguMjA4IDguMjM4LTguMjA4IDIxLjU1MyAwIDI5Ljc2IDguMjA4IDguMjQgMjEuNTUzIDguMjQgMjkuNzYgMGwxMzAuNTk3LTEzMC41NjVjMzMuOTI2IDI3LjMzIDc3LjAzMiA0My44MDcgMTI0LjAzIDQzLjgwNyAxMDkuMTM0IDAgMTk3LjU5Ny04OC40NjIgMTk3LjU5Ny0xOTcuNTk3UzM5OS42MTYuMDA0IDI5MC41MTMuMDA0em0wIDM2NC43OTNjLTkyLjIzMiAwLTE2Ny4xOTctNzQuOTk2LTE2Ny4xOTctMTY3LjE5N1MxOTguMzQgMzAuNDAzIDI5MC41MTMgMzAuNDAzIDQ1Ny43MSAxMDUuNCA0NTcuNzEgMTk3LjZzLTc0Ljk5NiAxNjcuMTk3LTE2Ny4xOTcgMTY3LjE5N3pcXFwiIGZpbGw9XFxcIiMwMTAwMDJcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJzZWFyY2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdmcvc2VhcmNoLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNDkuNjUyIDQ5LjY1MlxcXCIgaWQ9XFxcInR3aXR0ZXJcXFwiID48cGF0aCBkPVxcXCJNMjQuODI2IDBDMTEuMTM2IDAgMCAxMS4xMzcgMCAyNC44MjZjMCAxMy42ODggMTEuMTM3IDI0LjgyNiAyNC44MjYgMjQuODI2IDEzLjY4OCAwIDI0LjgyNi0xMS4xMzggMjQuODI2LTI0LjgyNkM0OS42NTIgMTEuMTM2IDM4LjUxNiAwIDI0LjgyNiAwek0zNS45IDE5LjE0NGMuMDEyLjI0Ni4wMTguNDk0LjAxOC43NDIgMCA3LjU1LTUuNzQ2IDE2LjI1NS0xNi4yNiAxNi4yNTUtMy4yMjYgMC02LjIzLS45NDItOC43NTgtMi41NjQuNDQ3LjA1My45MDIuMDggMS4zNjMuMDggMi42NzggMCA1LjE0LS45MTQgNy4wOTctMi40NDYtMi41LS4wNDYtNC42MS0xLjY5OC01LjMzOC0zLjk3LjM0OC4wNjcuNzA3LjEwNCAxLjA3NC4xMDQuNTIgMCAxLjAyNy0uMDY4IDEuNTA2LS4yLTIuNjE0LS41MjMtNC41ODMtMi44MzItNC41ODMtNS42MDJ2LS4wNzJjLjc3LjQyNyAxLjY1LjY4NSAyLjU4Ny43MTQtMS41MzItMS4wMjMtMi41NC0yLjc3My0yLjU0LTQuNzU1IDAtMS4wNS4yOC0yLjAzLjc3Mi0yLjg3NSAyLjgxNiAzLjQ1OCA3LjAyOCA1LjczMiAxMS43NzYgNS45NzItLjA5OC0uNDItLjE0Ny0uODU0LS4xNDctMS4zMDMgMC0zLjE1NSAyLjU1Ny01LjcxNCA1LjcxMi01LjcxNCAxLjY0NCAwIDMuMTI3LjY5NCA0LjE3IDEuODA0IDEuMzA0LS4yNTYgMi41MjQtLjczIDMuNjMtMS4zODctLjQzIDEuMzM1LTEuMzMyIDIuNDU0LTIuNTE1IDMuMTYyIDEuMTU3LS4xNCAyLjI2LS40NDUgMy4yODItLjktLjc2MyAxLjE0NC0xLjczMiAyLjE1LTIuODUgMi45NTR6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwidHdpdHRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy90d2l0dGVyLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiIGlkPVxcXCJ1c2VyLTFcXFwiID48cGF0aCBkPVxcXCJNMjAgMTBjMC01LjUxNC00LjQ4Ni0xMC0xMC0xMFMwIDQuNDg2IDAgMTBjMCAyLjkxMiAxLjI1MiA1LjUzNyAzLjI0NiA3LjM2N2wtLjAxLjAwOC4zMjUuMjczYy4wMjIuMDE4LjA0NS4wMzMuMDY2LjA1LjE3Mi4xNDMuMzUuMjguNTMzLjQxLjA1Ny4wNDMuMTE2LjA4NS4xNzYuMTI3LjE5NS4xMzMuMzk0LjI2LjU5Ny4zOGwuMTM0LjA3OGMuMjIzLjEyNy40NS4yNDYuNjg0LjM1NmwuMDUzLjAyMmMuNzYuMzUzIDEuNTcuNjEzIDIuNDE4Ljc2NmwuMDY4LjAxMmMuMjYzLjA0NS41My4wODIuOC4xMDZsLjA5Ny4wMDhjLjI3LjAyMi41NC4wMzYuODE1LjAzNi4yNzIgMCAuNTQtLjAxNC44MDgtLjAzNmwuMS0uMDA3Yy4yNy0uMDI1LjUzMy0uMDYuNzkzLS4xMDVsLjA3LS4wMTJjLjgzNS0uMTUgMS42MzQtLjQwMyAyLjM4NC0uNzQ3bC4wODMtLjAzOGMuMjI0LS4xMDYuNDQ0LS4yMi42Ni0uMzRsLjE1OC0uMDkyYy4xOTYtLjExNi4zODgtLjIzNi41NzUtLjM2NGwuMi0uMTQzYy4xNi0uMTE1LjMxNi0uMjM0LjQ3LS4zNTguMDMyLS4wMjguMDctLjA1Mi4xMDItLjA4bC4zMzMtLjI3Ny0uMDEtLjAxQzE4LjczNSAxNS41NjQgMjAgMTIuOTI4IDIwIDEwek0uNzI3IDEwQy43MjcgNC44ODcgNC44ODcuNzI3IDEwIC43MjdjNS4xMTMgMCA5LjI3MyA0LjE2IDkuMjczIDkuMjczIDAgMi43NTUtMS4yMSA1LjIzMi0zLjEyNCA2LjkzMi0uMTA3LS4wNzQtLjIxNS0uMTQtLjMyNS0uMTk1bC0zLjA4LTEuNTRjLS4yNzYtLjEzOC0uNDQ3LS40MTYtLjQ0Ny0uNzI0di0xLjA3NmMuMDctLjA4OC4xNDYtLjE4Ny4yMjQtLjI5Ny40LS41NjMuNzE4LTEuMTkuOTUtMS44NjMuNDYyLS4yMTguNzYtLjY3Ny43Ni0xLjE5NlY4Ljc1M2MwLS4zMTUtLjExNi0uNjItLjMyMy0uODZWNi4xOTNjLjAxOC0uMTkuMDg1LTEuMjU0LS42ODYtMi4xMzMtLjY3LS43NjQtMS43NTUtMS4xNS0zLjIyNC0xLjE1LTEuNDcgMC0yLjU1NC4zODYtMy4yMjQgMS4xNS0uNzcuODgtLjcwNCAxLjk0NS0uNjg1IDIuMTMzVjcuODljLS4yMDYuMjQtLjMyMi41NDctLjMyMi44NjJ2MS4yOWMwIC40LjE4Ljc3My40ODggMS4wMjUuMjk0IDEuMTU0LjkgMi4wMjcgMS4xMjQgMi4zMjN2MS4wNTNjMCAuMjk2LS4xNi41Ny0uNDIyLjcxMmwtMi44NzUgMS41NjhjLS4wOTIuMDUtLjE4My4xMDgtLjI3NC4xNzNDMS45MiAxNS4xOTYuNzI2IDEyLjczNi43MjYgMTB6bTE0LjcxMyA3LjUwM2MtLjEyOC4wOTItLjI1Ny4xOC0uMzg4LjI2Ny0uMDYuMDQtLjEyLjA3OC0uMTgyLjExNy0uMTcyLjEwNi0uMzQ2LjIwNy0uNTI1LjNsLS4xMTguMDYyYy0uNDEuMjEtLjgzMy4zOS0xLjI2OC41MzZsLS4wNDguMDE1Yy0uMjI4LjA3Ny0uNDYuMTQ0LS42OTIuMjAyaC0uMDAyYy0uMjM2LjA2LS40NzQuMTA3LS43MTQuMTQ3LS4wMDcgMC0uMDEzIDAtLjAyLjAwMi0uMjI2LjAzNy0uNDUzLjA2NC0uNjgyLjA4NGwtLjEyLjAxYy0uMjI3LjAxNi0uNDU0LjAyNy0uNjgyLjAyNy0uMjMgMC0uNDYtLjAxMi0uNjktLjAzLS4wNC0uMDAyLS4wNzgtLjAwNC0uMTE4LS4wMDgtLjIzLS4wMi0uNDYtLjA0Ny0uNjg3LS4wODQtLjAxIDAtLjAyLS4wMDMtLjAzLS4wMDUtLjQ4LS4wOC0uOTU0LS4xOTgtMS40MTUtLjM1M2wtLjA0My0uMDE1Yy0uMjMtLjA3Ny0uNDU1LS4xNjQtLjY3Ny0uMjZoLS4wMDVjLS4yMS0uMDkyLS40MTYtLjE5Mi0uNjItLjI5OC0uMDI2LS4wMTUtLjA1My0uMDI4LS4wOC0uMDQyLS4xODUtLjEtLjM2Ny0uMjA2LS41NDYtLjMxOGwtLjE2LS4xMDJjLS4xNjUtLjEwOC0uMzI3LS4yMi0uNDg2LS4zNC0uMDE2LS4wMS0uMDMyLS4wMjUtLjA0OC0uMDM3bC4wMzUtLjAyIDIuODc2LTEuNTY3Yy40OTQtLjI3LjgwMi0uNzg3LjgwMi0xLjM1di0xLjMxbC0uMDg0LS4xYy0uMDA4LS4wMS0uNzk1LS45NjctMS4wOTItMi4yNjJsLS4wMzMtLjE0My0uMTI1LS4wOGMtLjE3NS0uMTEzLS4yOC0uMzAyLS4yOC0uNTA2VjguNzUzYzAtLjE3LjA3Mi0uMzI3LjIwMy0uNDQ1bC4xMi0uMTA4VjYuMTcybC0uMDAzLS4wNDhjMC0uMDA4LS4xMDgtLjg4My41MDgtMS41ODUuNTI1LS42IDEuNDI2LS45MDQgMi42NzctLjkwNCAxLjI0NiAwIDIuMTQ0LjMwMiAyLjY3Ljg5Ny42MTcuNjk1LjUxNiAxLjU4Ni41MTUgMS41OTNMMTMuMTgyIDguMmwuMTIuMTA4Yy4xMy4xMTcuMjAyLjI3NS4yMDIuNDQ0djEuMjljMCAuMjYtLjE3Ni40OTQtLjQzLjU3MmwtLjE4LjA1Ni0uMDU4LjE4Yy0uMjE1LjY2Ni0uNTIgMS4yODItLjkwOCAxLjgzLS4wOTUuMTM0LS4xODguMjUzLS4yNjcuMzQ1bC0uMDkuMTAzdjEuMzQ1YzAgLjU4Ni4zMjYgMS4xMTMuODUgMS4zNzVsMy4wOCAxLjU0LjA1OC4wM2MtLjA0LjAzLS4wOC4wNTYtLjExOC4wODV6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwidXNlci0xXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3ZnL3VzZXItMS5zdmdcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG52YXIgc3ByaXRlID0gcmVxdWlyZShcIi9Vc2Vycy9WYWxlbnRpblZvaWxlYW4vV2Vic3Rvcm1Qcm9qZWN0cy9zaG9wcGVyL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9saWIvd2ViL2dsb2JhbC1zcHJpdGVcIik7XG52YXIgaW1hZ2UgPSBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDU0IDQ3XFxcIiBpZD1cXFwidXNlci0yXFxcIiA+PHBhdGggZD1cXFwiTTI3Ljk1My4wMDRjLTE0LjYzMy0uMjUtMjYuNyAxMS40MS0yNi45NSAyNi4wNDNDLjg2MyAzNC4zNDQgNC41NiA0MS44IDEwLjQ1IDQ2Ljc2Yy4zODUtLjMzNi43OTgtLjY0NCAxLjI1Ny0uODk0bDcuOTA3LTQuMzEzYzEuMDM3LS41NjYgMS42ODMtMS42NTMgMS42ODMtMi44MzV2LTMuMjRzLTIuMzItMi43NzYtMy4yMDYtNi42MzNjLS43MzQtLjQ3NS0xLjIyNi0xLjI5Ni0xLjIyNi0yLjIzdi0zLjU0N2MwLS43OC4zNDctMS40NzcuODg2LTEuOTY1di01LjEyNlMxNi42OTUgOCAyNy41IDhzOS43NSA3Ljk3NyA5Ljc1IDcuOTc3djUuMTI2Yy41NC40ODguODg1IDEuMTg1Ljg4NSAxLjk2NXYzLjU0NmMwIDEuMTkyLS44IDIuMTk1LTEuODg2IDIuNTMtLjYwNyAxLjg4LTEuNDggMy42NzQtMi42MzQgNS4zMDQtLjI5LjQxLS41NjMuNzYtLjggMS4wM1YzOC44YzAgMS4yMjMuNjkgMi4zNDIgMS43ODQgMi44ODhsOC40NjggNC4yMzNjLjUwOC4yNTYuOTY3LjU3NyAxLjM5LjkzNCA1LjcxLTQuNzYyIDkuNC0xMS44ODIgOS41MzYtMTkuOS4yNTItMTQuNjMzLTExLjQwNy0yNi43LTI2LjA0LTI2Ljk1elxcXCIvPjwvc3ltYm9sPlwiO1xubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGUuYWRkKGltYWdlLCBcInVzZXItMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy91c2VyLTIuc3ZnXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHNwcml0ZSA9IHJlcXVpcmUoXCIvVXNlcnMvVmFsZW50aW5Wb2lsZWFuL1dlYnN0b3JtUHJvamVjdHMvc2hvcHBlci9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvbGliL3dlYi9nbG9iYWwtc3ByaXRlXCIpO1xudmFyIGltYWdlID0gXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1MS45OTcgNTEuOTk3XFxcIiBpZD1cXFwid2lzaGxpc3QtMVxcXCIgPjxwYXRoIGQ9XFxcIk01MS45MSAxNi4yNDJjLS43NTgtOC4zNTQtNi42Ny0xNC40MTUtMTQuMDctMTQuNDE1LTQuOTMgMC05LjQ0NSAyLjY1My0xMS45ODUgNi45MDUtMi41MTctNC4zMDctNi44NDYtNi45MDYtMTEuNjk3LTYuOTA2LTcuNCAwLTEzLjMxMyA2LjA2LTE0LjA3IDE0LjQxNS0uMDYuMzctLjMwNyAyLjMxMi40NCA1LjQ4IDEuMDggNC41NjcgMy41NyA4LjcyMiA3LjIgMTIuMDEybDE4LjExNSAxNi40NEw0NC4yNyAzMy43M2MzLjYzLTMuMjkgNi4xMi03LjQ0NCA3LjE5OC0xMi4wMTMuNzQ4LTMuMTY3LjUwMi01LjExLjQ0My01LjQ3OHptLTIuMzkgNS4wMmMtLjk4MyA0LjE3LTMuMjY0IDcuOTcyLTYuNTkgMTAuOTg0TDI1Ljg1NiA0Ny40OCA5LjA3MiAzMi4yNWMtMy4zMy0zLjAxOC01LjYxLTYuODE4LTYuNTk2LTEwLjk5LS43MDgtMi45OTctLjQxNy00LjY5LS40MTYtNC43bC4wMTUtLjEwMmMuNjUtNy4zMiA1LjczLTEyLjYzMiAxMi4wODMtMTIuNjMyIDQuNjg3IDAgOC44MTMgMi44OCAxMC43NyA3LjUxNWwuOTIyIDIuMTg0LjkyLTIuMTgzYzEuOTI4LTQuNTYzIDYuMjcyLTcuNTEzIDExLjA3LTcuNTEzIDYuMzUgMCAxMS40MzMgNS4zMTMgMTIuMDk2IDEyLjcyNy4wMDIuMDE2LjI5MyAxLjcxLS40MTUgNC43MDd6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwid2lzaGxpc3QtMVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy93aXNobGlzdC0xLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNTEuOTk3IDUxLjk5N1xcXCIgaWQ9XFxcIndpc2hsaXN0LTJcXFwiID48cGF0aCBkPVxcXCJNNTEuOTEgMTYuMjQyYy0uNzU4LTguMzU0LTYuNjctMTQuNDE1LTE0LjA3LTE0LjQxNS00LjkzIDAtOS40NDUgMi42NTMtMTEuOTg1IDYuOTA1LTIuNTE3LTQuMzA3LTYuODQ2LTYuOTA2LTExLjY5Ny02LjkwNi03LjQgMC0xMy4zMTMgNi4wNi0xNC4wNyAxNC40MTUtLjA2LjM3LS4zMDcgMi4zMTIuNDQgNS40OCAxLjA4IDQuNTY3IDMuNTcgOC43MjIgNy4yIDEyLjAxMmwxOC4xMTUgMTYuNDRMNDQuMjcgMzMuNzNjMy42My0zLjI5IDYuMTItNy40NDQgNy4xOTgtMTIuMDEzLjc0OC0zLjE2Ny41MDItNS4xMS40NDMtNS40Nzh6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwid2lzaGxpc3QtMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy93aXNobGlzdC0yLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgOTcuNzUgOTcuNzVcXFwiIGlkPVxcXCJ5b3V0dWJlXFxcIiA+PHBhdGggZD1cXFwiTTI1LjY3NiA1Mi40ODJoMy44NzV2MjAuOTczaDMuNjY3VjUyLjQ4MmgzLjk0N3YtMy40MzVIMjUuNjc2TTU2LjY3NCA1NS4wNDZjLTEuMjEyIDAtMi4zNDMuNjYyLTMuNDA2IDEuOTcydi03Ljk3MmgtMy4yOTV2MjQuNDFoMy4yOTV2LTEuNzYzYzEuMTAzIDEuMzYgMi4yMzMgMi4wMTMgMy40MDYgMi4wMTMgMS4zMSAwIDIuMTkzLS42OSAyLjYzMy0yLjA0NC4yMi0uNzcuMzM0LTEuOTgyLjMzNC0zLjY2NXYtNy4yNDJjMC0xLjcyMi0uMTEyLTIuOTI0LS4zMzMtMy42NTUtLjQ0LTEuMzY0LTEuMzIzLTIuMDU0LTIuNjMzLTIuMDU0em0tLjMzIDEzLjIxYzAgMS42NDMtLjQ4MiAyLjQ1My0xLjQzNCAyLjQ1My0uNTQgMC0xLjA5Mi0uMjYtMS42NDMtLjgxMlY1OC44MTRjLjU1LS41NDUgMS4xMDItLjgwMyAxLjY0My0uODAzLjk1IDAgMS40MzQuODQzIDEuNDM0IDIuNDgzdjcuNzYyek00My44MjQgNjkuMTY3Yy0uNzMgMS4wMzMtMS40MjIgMS41NDItMi4wODQgMS41NDItLjQ0IDAtLjY5LS4yNi0uNzctLjc3Mi0uMDMtLjEwNi0uMDMtLjUwOC0uMDMtMS4yOHYtMTMuMzloLTMuMjk3djE0LjM4YzAgMS4yODQuMTEgMi4xNTIuMjkgMi43MDQuMzMyLjkyMiAxLjA2NCAxLjM1NCAyLjEyNCAxLjM1NCAxLjIxMyAwIDIuNDU3LS43MzIgMy43NjctMi4yMzR2MS45ODRoMy4yOThWNTUuMjY4aC0zLjI5OHYxMy45ek00Ni42NTMgMzguNDY2YzEuMDczIDAgMS41ODgtLjg1IDEuNTg4LTIuNTV2LTcuNzMyYzAtMS43LS41MTQtMi41NDgtMS41ODctMi41NDgtMS4wNzQgMC0xLjU5Ljg0OC0xLjU5IDIuNTQ4djcuNzNjMCAxLjcwMi41MTYgMi41NTIgMS41OSAyLjU1MnpcXFwiLz48cGF0aCBkPVxcXCJNNDguODc1IDBDMjEuODgyIDAgMCAyMS44ODIgMCA0OC44NzVTMjEuODgyIDk3Ljc1IDQ4Ljg3NSA5Ny43NSA5Ny43NSA3NS44NjggOTcuNzUgNDguODc1IDc1Ljg2OCAwIDQ4Ljg3NSAwem01LjQzNiAyMi44NmgzLjMyMnYxMy41MzJjMCAuNzggMCAxLjE4Ni4wNCAxLjI5NS4wNzMuNTE2LjMzNS43OC43OC43OC42NjcgMCAxLjM2Ni0uNTE2IDIuMTA1LTEuNTZWMjIuODZoMy4zM3YxOC4zOGgtMy4zM3YtMi4wMDVjLTEuMzI2IDEuNTItMi41OSAyLjI1Ny0zLjgwNSAyLjI1Ny0xLjA3MiAwLTEuODEyLS40MzUtMi4xNDYtMS4zNjUtLjE4NC0uNTU3LS4yOTUtMS40MzYtLjI5NS0yLjczM1YyMi44NnptLTEyLjU3NyA1Ljk5M2MwLTEuOTY1LjMzNC0zLjQgMS4wNDItNC4zMy45Mi0xLjI1NyAyLjIxOC0xLjg4NSAzLjg3OC0xLjg4NSAxLjY2OCAwIDIuOTY0LjYyOCAzLjg4NSAxLjg4NS42OTguOTI4IDEuMDMyIDIuMzY1IDEuMDMyIDQuMzN2Ni40MzZjMCAxLjk1My0uMzM0IDMuNDAyLTEuMDMyIDQuMzItLjkyIDEuMjU1LTIuMjE3IDEuODgyLTMuODg1IDEuODgyLTEuNjYgMC0yLjk1Ny0uNjI3LTMuODc4LTEuODgtLjcwOC0uOTItMS4wNDItMi4zNy0xLjA0Mi00LjMyM3YtNi40Mzd6bS04LjkwNi0xMi4yNzdsMi42MjIgOS42ODUgMi41MTgtOS42ODRoMy43MzVMMzcuMjYgMzEuMjV2OS45OWgtMy42OTJ2LTkuOTljLS4zMzUtMS43Ny0xLjA3NC00LjM2Mi0yLjI2LTcuODAyLS43NzctMi4yOS0xLjU4OC00LjU4NS0yLjM2Ni02Ljg3MmgzLjg4NXptNDIuMzYgNTguNDg1Yy0uNjcgMi45LTMuMDQgNS4wNC01Ljg5NSA1LjM2LTYuNzYzLjc1NC0xMy42MDQuNzU4LTIwLjQyLjc1NC02LjgxMy4wMDQtMTMuNjU4IDAtMjAuNDItLjc1NS0yLjg1NC0uMzItNS4yMjYtMi40Ni01Ljg5Mi01LjM2LS45NS00LjEyOC0uOTUtOC42MzctLjk1LTEyLjg5cy4wMS04Ljc2Ljk2LTEyLjg5Yy42NjgtMi45IDMuMDM4LTUuMDQgNS44OTMtNS4zNTcgNi43NjItLjc1NSAxMy42MDYtLjc2IDIwLjQyLS43NTUgNi44MTQtLjAwNCAxMy42NTggMCAyMC40Mi43NTUgMi44NTUuMzIgNS4yMjcgMi40NTggNS44OTYgNS4zNTguOTQ3IDQuMTMuOTQgOC42NC45NCAxMi44OXMtLjAwMyA4Ljc2Mi0uOTU0IDEyLjg5elxcXCIvPjxwYXRoIGQ9XFxcIk02Ny4xNyA1NS4wNDZjLTEuNjg2IDAtMi45OTUuNjItMy45NDcgMS44NjQtLjcuOTItMS4wMTggMi4zNDItMS4wMTggNC4yODV2Ni4zN2MwIDEuOTM0LjM1NyAzLjM2NiAxLjA2IDQuMjc3Ljk1IDEuMjQyIDIuMjYzIDEuODYzIDMuOTg3IDEuODYzIDEuNzIgMCAzLjA3Mi0uNjUgMy45ODQtMS45NzIuNC0uNTg0LjY2LTEuMjQ1Ljc3LTEuOTc1LjAzLS4zMy4wNy0xLjA2LjA3LTIuMTI0di0uNDhoLTMuMzZjMCAxLjMyLS4wNDQgMi4wNTQtLjA3MyAyLjIzMy0uMTg4Ljg4LS42NjIgMS4zMi0xLjQ3MyAxLjMyLTEuMTMyIDAtMS42ODYtLjg0LTEuNjg2LTIuNTJWNjQuOTZoNi41OTJ2LTMuNzY3YzAtMS45NDMtLjMzLTMuMzY1LTEuMDItNC4yODUtLjkyLTEuMjQyLTIuMjMyLTEuODYyLTMuODg2LTEuODYyem0xLjYxMiA3LjE3MmgtMy4yOTZ2LTEuNjgzYzAtMS42ODIuNTUzLTIuNTIzIDEuNjU0LTIuNTIzIDEuMDkgMCAxLjY0Mi44NDIgMS42NDIgMi41MjN2MS42ODN6XFxcIi8+PC9zeW1ib2w+XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZS5hZGQoaW1hZ2UsIFwieW91dHViZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy95b3V0dWJlLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBzcHJpdGUgPSByZXF1aXJlKFwiL1VzZXJzL1ZhbGVudGluVm9pbGVhbi9XZWJzdG9ybVByb2plY3RzL3Nob3BwZXIvbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL2xpYi93ZWIvZ2xvYmFsLXNwcml0ZVwiKTtcbnZhciBpbWFnZSA9IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTQgMTZcXFwiIGlkPVxcXCJ5b3V0dWJlMlxcXCIgPjx0aXRsZT5Zb3V0dWJlPC90aXRsZT48cGF0aCBkPVxcXCJNMS41ODQgOC45OTdoLjk1djQuODdoLjg5OHYtNC44N2guOTY2VjguMkgxLjU4NHYuNzk3em03LjU5NC41OTZjLS4yOTcgMC0uNTc0LjE1NC0uODM0LjQ1OFY4LjJoLS44MDh2NS42NjdoLjgwOHYtLjQxYy4yNy4zMTcuNTQ3LjQ3LjgzNC40Ny4zMiAwIC41MzctLjE2LjY0NS0uNDc2LjA1NC0uMTc4LjA4Mi0uNDYuMDgyLS44NXYtMS42ODJjMC0uNC0uMDI4LS42NzgtLjA4Mi0uODQ4LS4xMDgtLjMxNy0uMzI0LS40NzctLjY0NS0uNDc3em0tLjA4IDMuMDY3YzAgLjM4Mi0uMTIuNTctLjM1Mi41Ny0uMTMzIDAtLjI2OC0uMDYtLjQwMy0uMTg4di0yLjU3NGMuMTM1LS4xMjcuMjctLjE4Ny40MDMtLjE4Ny4yMzMgMCAuMzUuMTk3LjM1LjU3OHYxLjgwMnptLTMuMDY4LjIxMmMtLjE4LjI0LS4zNDguMzU4LS41MS4zNTgtLjEwOCAwLS4xNy0uMDYtLjE5LS4xOC0uMDA3LS4wMjQtLjAwNy0uMTE3LS4wMDctLjI5NnYtMy4xMWgtLjgwN3YzLjM0YzAgLjI5OC4wMjcuNS4wNy42MjcuMDgyLjIxNS4yNjIuMzE2LjUyLjMxNi4yOTggMCAuNjAzLS4xNy45MjQtLjUydi40NjJoLjgwOFY5LjY0NEg2LjAzdjMuMjI4em0uNjkzLTcuMTNjLjI2MyAwIC4zOS0uMTk3LjM5LS41OVYzLjM1NGMwLS4zOTUtLjEyNy0uNTktLjM5LS41OXMtLjM5LjE5Ni0uMzkuNTlWNS4xNWMwIC4zOTYuMTI3LjU5My4zOS41OTN6TTguNiAyLjEyaC44MTN2My4xNGMwIC4xODMgMCAuMjc3LjAxLjMwMi4wMTcuMTIuMDgyLjE4LjE5LjE4LjE2NCAwIC4zMzUtLjEyLjUxNi0uMzZWMi4xMThoLjgxNXY0LjI2N2gtLjgxNlY1LjkyYy0uMzI2LjM1NC0uNjM1LjUyNi0uOTMzLjUyNi0uMjYzIDAtLjQ0NC0uMS0uNTI2LS4zMTctLjA0NC0uMTMtLjA3LS4zMzUtLjA3LS42MzZWMi4xMnpNNS41MTcgMy41MWMwLS40NTYuMDgyLS43OS4yNTUtMS4wMDUuMjI2LS4yOTIuNTQzLS40MzcuOTUtLjQzNy40MSAwIC43MjYuMTQ1Ljk1Mi40MzcuMTcuMjE2LjI1My41NS4yNTMgMS4wMDZ2MS40OTVjMCAuNDU0LS4wODIuNzktLjI1MyAxLjAwNC0uMjI2LjI5LS41NDMuNDM2LS45NTIuNDM2LS40MDcgMC0uNzI0LS4xNDYtLjk1LS40MzctLjE3My0uMjE1LS4yNTUtLjU1LS4yNTUtMS4wMDVWMy41MXpNMy4zMzYuNjZsLjY0MiAyLjI1LjYxNy0yLjI1aC45MTVMNC40MjIgNC4wNjh2Mi4zMmgtLjkwNHYtMi4zMmMtLjA4My0uNDEtLjI2NC0xLjAxNC0uNTU0LTEuODEyLS4xOS0uNTMyLS4zOS0xLjA2NS0uNTgtMS41OTZoLjk1MnptMTAuMzc3IDEzLjU4Yy0uMTY0LjY3NC0uNzQ0IDEuMTctMS40NDQgMS4yNDUtMS42NTguMTc1LTMuMzM0LjE3Ni01LjAwMy4xNzUtMS42NyAwLTMuMzQ2IDAtNS4wMDMtLjE3NS0uNy0uMDc1LTEuMjgtLjU3LTEuNDQzLTEuMjQ1Qy41OSAxMy4yODIuNTkgMTIuMjM1LjU5IDExLjI0N2MwLS45ODcuMDAzLTIuMDM0LjIzNS0yLjk5My4xNjQtLjY3My43NDQtMS4xNyAxLjQ0NC0xLjI0NCAxLjY1Ni0uMTc1IDMuMzMzLS4xNzYgNS4wMDMtLjE3NSAxLjY3IDAgMy4zNDUgMCA1LjAwMi4xNzUuNy4wNzQgMS4yOC41NyAxLjQ0NCAxLjI0NC4yMzIuOTYuMjMgMi4wMDYuMjMgMi45OTMgMCAuOTg4IDAgMi4wMzUtLjIzMyAyLjk5M3pNMTEuNzUgOS41OTNjLS40MTQgMC0uNzM0LjE0NC0uOTY4LjQzMy0uMTcuMjEzLS4yNS41NDMtLjI1Ljk5NXYxLjQ4YzAgLjQ1LjA4OC43OC4yNi45OTMuMjMzLjI4OC41NTUuNDMzLjk3Ny40MzMuNDIgMCAuNzUyLS4xNTIuOTc1LS40NTguMDk4LS4xMzYuMTYyLS4yOS4xOS0uNDYuMDA3LS4wNzYuMDE2LS4yNDUuMDE2LS40OTJ2LS4xMWgtLjgyMmMwIC4zMDUtLjAxLjQ3NS0uMDE4LjUxNy0uMDQ2LjIwNC0uMTYyLjMwNy0uMzYuMzA3LS4yNzggMC0uNDE0LS4xOTUtLjQxNC0uNTg2di0uNzVoMS42MTV2LS44NzRjMC0uNDUtLjA4LS43OC0uMjUtLjk5NS0uMjI0LS4yODgtLjU0Ni0uNDMyLS45NS0uNDMyem0uMzk0IDEuNjY1aC0uODA3di0uMzljMC0uMzkuMTM1LS41ODYuNDA1LS41ODYuMjY3IDAgLjQwMi4xOTUuNDAyLjU4NXYuMzl6XFxcIiBmaWxsPVxcXCIjMzQzNDM0XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiLz48L3N5bWJvbD5cIjtcbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlLmFkZChpbWFnZSwgXCJ5b3V0dWJlMlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N2Zy95b3V0dWJlMi5zdmdcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtNRURJQV9RVUVSSUVTfSBmcm9tICdqcy9zaGFyZWQvc2hhcmVkJztcblxuLyoqXG4gKiBNZWRpYVF1ZXJ5IG1vZHVsZVxuICogVXNlZCB0byBkZXRlY3QgY3VycmVudCBtZWRpYSBxdWVyeVxuICpcbiAqIFVzYWdlOlxuICogJCh3aW5kb3cpLm9uKE1FRElBX1FVRVJZLCBjYWxsYmFjayApO1xuICpcbiAqIFdoZXJlOlxuICogICAgTUVESUFfUVVFUlkgY2FuIGJlIDogJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01pbicsICdzbU1pbicsICdtZE1pbicsJ2xnTWluJyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICd4c01heCcsICdzbU1heCcsICdtZE1heCcsICdsZ01heCdcbiAqICAgIENhbGxiYWNrOiBmdW5jdGlvbiBuYW1lIG9yIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqICAgIGUuZy4gOlxuICpcbiAqICAgIGZ1bmN0aW9uIHNheUdvb2RieWUgPSB7IGFsZXJ0KCdnb29kYnllJykgfVxuICogICAgJCh3aW5kb3cpLm9uKCdzbU1pbicsIHNheUdvb2RieWUgfSlcbiAqXG4gKiAgICBvclxuICpcbiAqICAgICQod2luZG93KS5vbignc21NaW4nLCBmdW5jdGlvbigpIHsgYWxlcnQoJ2hlbGxvJyk7IH0pXG4gKlxuICpcbiAqIEB0eXBlIHt7bmV3KCk9PntfaGFuZGxlTVFDaGFuZ2U6ICgobXFsLCBpbmRleD8pKSwgZGVzdHJveTogKCgpKX19fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVF1ZXJpZXNDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHdpbmRvdy5pbmZvID0gd2luZG93LmluZm8gfHwge307XG4gICAgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzID0gaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzIHx8IFtdO1xuXG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSh2YWx1ZSk7XG5cbiAgICAgIC8vIHRoZSBkZWZhdWx0IG1hdGNobWVkaWEncyBhZGRMaXN0ZW5lciBtZXRob2QgZG9lc24ndCBzdXBwb3J0IGV4dHJhIHBhcmFtZXRlcnMsXG4gICAgICAvLyB0aGVyZWZvcmUgd2UgbmVlZCBhbm90aGVyIGV4dHJhIGZ1bmN0aW9uIHRoYXQgY2FuIHBhc3MgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBuYW1lXG4gICAgICBtcWwuYWRkTGlzdGVuZXIodGhpcy5hZGRNUUxpc3RlbmVyID0gKG1xbCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVNUUNoYW5nZShtcWwsIGluZGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVNUUNoYW5nZShtcWwsIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgJC5lYWNoKE1FRElBX1FVRVJJRVMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlKS5yZW1vdmVMaXN0ZW5lcih0aGlzLmFkZE1RTGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByaXZhdGUgTWV0aG9kcyAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGhhbmRsZSB0aGUgbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAqIEBwYXJhbSBtcWwgLSBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gICAqIEBwYXJhbSBicmVha3BvaW50TmFtZSAtIGN1cnJlbnQgYnJlYWtwb2ludFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gIF9oYW5kbGVNUUNoYW5nZShtcWwsIGJyZWFrcG9pbnROYW1lKSB7XG4gICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICAkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoYnJlYWtwb2ludE5hbWUpO1xuXG4gICAgICBpZiAoYnJlYWtwb2ludE5hbWUuaW5kZXhPZignTWluJykgPT09IC0xXG4gICAgICAgICYmIGJyZWFrcG9pbnROYW1lLmluZGV4T2YoJ01heCcpID09PSAtMSkge1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoJ21lZGlhUXVlcnlDaGFuZ2UnLCBicmVha3BvaW50TmFtZSk7XG4gICAgICB9XG5cbiAgICAgICQuZWFjaChpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYShNRURJQV9RVUVSSUVTW3ZhbHVlXSkubWF0Y2hlcykge1xuICAgICAgICAgIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLnB1c2goYnJlYWtwb2ludE5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21lZGlhLXF1ZXJpZXMvbWVkaWEtcXVlcmllcy5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgVkFMVUVTX0dSSUQgPSB7XG4gIHhzTWluOiAwLFxuICB4c01heDogNzY3LFxuICBzbU1pbjogNzY4LFxuICBzbU1heDogMTAyMyxcbiAgbWRNaW46IDEwMjQsXG4gIG1kTWF4OiAxMTk5LFxuICBsZ01pbjogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IE1FRElBX1FVRVJJRVMgPSB7XG4gIHhzTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWlufXB4KWAsXG4gIHhzOiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHhzTWF4OiBgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke1ZBTFVFU19HUklELnhzTWF4fXB4KWAsXG4gIHNtTWluOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KWAsXG4gIHNtOiBgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke1ZBTFVFU19HUklELnNtTWlufXB4KSBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBzbU1heDogYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtWQUxVRVNfR1JJRC5zbU1heH1weClgLFxuICBtZE1pbjogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weClgLFxuICBtZDogYHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtWQUxVRVNfR1JJRC5tZE1pbn1weCkgYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbWRNYXg6IGBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7VkFMVUVTX0dSSUQubWRNYXh9cHgpYCxcbiAgbGdNaW46IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYCxcbiAgbGc6IGBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7VkFMVUVTX0dSSUQubGdNaW59cHgpYFxufTtcblxuZXhwb3J0IGNvbnN0IFNIQVJFRF9DTEFTU0VTID0ge1xuICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICBleHBhbmRlZDogJ2lzLWV4cGFuZGVkJyxcbiAgYW5pbWF0ZTogJ2lzLWFuaW1hdGVkJyxcbiAgdmlzaWJsZTogJ2lzLXZpc2libGUnLFxuICBjb2xsYXBzZWQ6ICdpcy1jb2xsYXBzZWQnXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvc2hhcmVkL3NoYXJlZC5qc1xuICoqLyIsImltcG9ydCBNb2JpbGUgZnJvbSAnLi9tZW51Lm1vYmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IERlc2t0b3AgZnJvbSAnLi9tZW51LmRlc2t0b3AuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FkZE1lZGlhUXVlcnlDYWxsYmFja3MoKTtcbiAgICB0aGlzLl9jaGVja0N1cnJlbnRCcmVha3BvaW50KCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZU1lZGlhUXVlcnlDYWxsYmFja3MoKTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgX2FkZE1lZGlhUXVlcnlDYWxsYmFja3MoKSB7XG4gICAgJCh3aW5kb3cpLm9uKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUsIHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ3NtTWluJywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AsIHRoaXMpKTtcbiAgfVxuXG4gIF9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQod2luZG93KS5vZmYoJ3hzTWF4JywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb01vYmlsZS5iaW5kKHRoaXMpKSk7XG4gICAgJCh3aW5kb3cpLm9mZignc21NaW4nLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvRGVza3RvcC5iaW5kKHRoaXMpKSk7XG4gIH1cblxuICBfY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpIHtcbiAgICBpZiAoaW5mbyAmJiBpbmZvLm1hdGNoZWRNZWRpYVF1ZXJpZXMgJiYgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzLmluZGV4T2YoJ3hzTWF4JykgPiAtMSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfb25DaGFuZ2VkVG9EZXNrdG9wKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEZXNrdG9wKCk7XG4gIH1cblxuICBfb25DaGFuZ2VkVG9Nb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vYmlsZSgpO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWVudS9tZW51LmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYWRkRXZlbnRIYW5kbGVycygpO1xuICB9O1xuXG4gIGRlc3Ryb3koKSB7XG4gIH07XG5cbiAgX2FkZEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgJCgnLm1lbnVJY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWVudS9tZW51Lm1vYmlsZS5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGRlc3Ryb3koKSB7XG4gIH1cblxuICBfb25NZWRpYVF1ZXJ5Q2hhbmdlKCkge1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tZW51L21lbnUuZGVza3RvcC5jb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgTW9iaWxlIGZyb20gJy4vY3VycmVuY2llcy5tb2JpbGUuY29tcG9uZW50JztcbmltcG9ydCBEZXNrdG9wIGZyb20gJy4vY3VycmVuY2llcy5kZXNrdG9wLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbmNpZXNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgdGhpcy5fY2hlY2tDdXJyZW50QnJlYWtwb2ludCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCk7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIF9hZGRNZWRpYVF1ZXJ5Q2FsbGJhY2tzKCkge1xuICAgICQod2luZG93KS5vbigneHNNYXgnLCAkLnByb3h5KHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlLCB0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzbU1pbicsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wLCB0aGlzKSk7XG4gIH1cblxuICBfcmVtb3ZlTWVkaWFRdWVyeUNhbGxiYWNrcygpIHtcbiAgICAkKHdpbmRvdykub2ZmKCd4c01heCcsICQucHJveHkodGhpcy5fb25DaGFuZ2VkVG9Nb2JpbGUuYmluZCh0aGlzKSkpO1xuICAgICQod2luZG93KS5vZmYoJ3NtTWluJywgJC5wcm94eSh0aGlzLl9vbkNoYW5nZWRUb0Rlc2t0b3AuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgX2NoZWNrQ3VycmVudEJyZWFrcG9pbnQoKSB7XG4gICAgaWYgKGluZm8gJiYgaW5mby5tYXRjaGVkTWVkaWFRdWVyaWVzICYmIGluZm8ubWF0Y2hlZE1lZGlhUXVlcmllcy5pbmRleE9mKCd4c01heCcpID4gLTEpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlZFRvTW9iaWxlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fb25DaGFuZ2VkVG9EZXNrdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlZFRvRGVza3RvcCgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRGVza3RvcCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlZFRvTW9iaWxlKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb2JpbGUoKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5jb21wb25lbnQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUud2FybignbW9iaWxlJyk7XG4gIH07XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Rlc3Ryb3kgbW9iaWxlJyk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2N1cnJlbmNpZXMvY3VycmVuY2llcy5tb2JpbGUuY29tcG9uZW50LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Rlc2t0b3AnKTtcbiAgICAkKHdpbmRvdykub24oJ21lZGlhUXVlcnlDaGFuZ2UnLCAkLnByb3h5KHRoaXMuX29uTWVkaWFRdWVyeUNoYW5nZSwgdGhpcykpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Rlc3Ryb3kgZGVza3RvcCcpO1xuICB9XG5cbiAgX29uTWVkaWFRdWVyeUNoYW5nZShlLCBkYXRhKSB7XG4gICAgY29uc29sZS53YXJuKGRhdGEpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jdXJyZW5jaWVzL2N1cnJlbmNpZXMuZGVza3RvcC5jb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQge1NIQVJFRF9DTEFTU0VTfSBmcm9tICdqcy9zaGFyZWQvc2hhcmVkJztcbmltcG9ydCB7Q0xBU1NFU30gZnJvbSAnLi90b3AtaGVhZGVyLW15LWFjY291bnQuY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wSGVhZGVyTXlBY2NvdW50Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy4kbGluayA9ICRlbC5maW5kKGAuJHtDTEFTU0VTLmxpbmt9YCk7XG4gICAgdGhpcy4kbGVmdFNpZGUgPSAkZWwuZmluZChgLiR7Q0xBU1NFUy5sZWZ0U2lkZX1gKTtcbiAgICB0aGlzLiRyaWdodFNpZGUgPSAkZWwuZmluZChgLiR7Q0xBU1NFUy5yaWdodFNpZGV9YCk7XG4gICAgdGhpcy4kd2VsY29tZU1lc3NhZ2UgPSB0aGlzLiRyaWdodFNpZGUuZmluZChgLiR7Q0xBU1NFUy5saW5rfWApO1xuXG4gICAgLy8gV2UgYWRkIHRoZSBhbmltYXRpb24gY2xhc3MgYWZ0ZXIgaW5pdGlhbGl6YXRpb24gYmVjYXVzZVxuICAgIC8vIGlmIHdlIHdhbnQgdG8gZGVzdHJveSBpdCBsYXRlciB0byBub3Qgd2FpdCB1bnRpbCB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzXG4gICAgdGhpcy4kZWwuYWRkQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYW5pbWF0ZSk7XG4gICAgdGhpcy4kbGVmdFNpZGUuYWRkQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYW5pbWF0ZSk7XG4gICAgdGhpcy4kd2VsY29tZU1lc3NhZ2UuYWRkQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYW5pbWF0ZSk7XG5cbiAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICB0aGlzLl9hZGRFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLiRlbC5hZGQodGhpcy4kbGVmdFNpZGUpLmFkZCh0aGlzLiR3ZWxjb21lTWVzc2FnZSkucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYW5pbWF0ZSk7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgICB0aGlzLiRsZWZ0U2lkZS5hZGQodGhpcy4kd2VsY29tZU1lc3NhZ2UpLndpZHRoKCcnKTtcbiAgICB0aGlzLiRlbCA9IG51bGw7XG4gICAgdGhpcy4kbGVmdFNpZGUgPSBudWxsO1xuICAgIHRoaXMuJHJpZ2h0U2lkZSA9IG51bGw7XG4gICAgdGhpcy4kd2VsY29tZU1lc3NhZ2UgPSBudWxsO1xuICB9XG5cbiAgX2NhbGN1bGF0ZVdpZHRocygpIHtcbiAgICB0aGlzLiRsZWZ0U2lkZS5hdHRyKCdkYXRhLXdpZHRoJywgdGhpcy4kbGVmdFNpZGUub3V0ZXJXaWR0aCgpKTtcbiAgICB0aGlzLiR3ZWxjb21lTWVzc2FnZS5hdHRyKCdkYXRhLXdpZHRoJywgdGhpcy4kd2VsY29tZU1lc3NhZ2Uub3V0ZXJXaWR0aCgpKTtcbiAgICB0aGlzLiRsZWZ0U2lkZS53aWR0aCgwKS5hZGRDbGFzcyhTSEFSRURfQ0xBU1NFUy52aXNpYmxlKTtcbiAgICB0aGlzLiR3ZWxjb21lTWVzc2FnZS5vdXRlcldpZHRoKHRoaXMuJHdlbGNvbWVNZXNzYWdlLmRhdGEoJ3dpZHRoJykpO1xuICB9XG5cbiAgX2FkZEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgaWYgKE1vZGVybml6ci50b3VjaGV2ZW50cykge1xuICAgICAgdGhpcy4kZWwub24oJ2NsaWNrJywgJC5wcm94eSh0aGlzLl9hY3RpdmF0ZUl0ZW0sIHRoaXMpKTtcbiAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICQucHJveHkodGhpcy5fZGVhY3RpdmF0ZUl0ZW0sIHRoaXMpKTtcbiAgICAgIHRoaXMuJGxpbmsub24oJ2NsaWNrJywgdGhpcy5fYWN0aXZhdGVMaW5rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWwub24oJ21vdXNlb3ZlcicsICQucHJveHkodGhpcy5fYWN0aXZhdGVJdGVtLCB0aGlzKSk7XG4gICAgICB0aGlzLiRlbC5vbignbW91c2VvdXQnLCAkLnByb3h5KHRoaXMuX2RlYWN0aXZhdGVJdGVtLCB0aGlzKSk7XG4gICAgICB0aGlzLiRsaW5rLm9uKCdtb3VzZW92ZXInLCB0aGlzLl9hY3RpdmF0ZUxpbmspO1xuICAgIH1cbiAgfVxuXG4gIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgIGlmIChNb2Rlcm5penIudG91Y2hldmVudHMpIHtcbiAgICAgIHRoaXMuJGVsLm9mZignY2xpY2snLCAkLnByb3h5KHRoaXMuX2FjdGl2YXRlSXRlbSwgdGhpcykpO1xuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsICQucHJveHkodGhpcy5fZGVhY3RpdmF0ZUl0ZW0sIHRoaXMpKTtcbiAgICAgIHRoaXMuJGxpbmsub2ZmKCdjbGljaycsIHRoaXMuX2FjdGl2YXRlTGluayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsLm9mZignbW91c2VvdmVyJywgJC5wcm94eSh0aGlzLl9hY3RpdmF0ZUl0ZW0sIHRoaXMpKTtcbiAgICAgIHRoaXMuJGVsLm9mZignbW91c2VvdXQnLCAkLnByb3h5KHRoaXMuX2RlYWN0aXZhdGVJdGVtLCB0aGlzKSk7XG4gICAgICB0aGlzLiRsaW5rLm9mZignbW91c2VvdmVyJywgdGhpcy5fYWN0aXZhdGVMaW5rKTtcbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGVMaW5rKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgfVxuXG4gIF9hY3RpdmF0ZUl0ZW0oZSkge1xuICAgIGlmIChNb2Rlcm5penIudG91Y2hldmVudHMpIHtcbiAgICAgIHRoaXMuX3ByZXZlbnRDbGlja0ZpcnN0VGltZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xpZGVJbkxlZnRTaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2RlYWN0aXZhdGVJdGVtKGUpIHtcbiAgICBpZiAoTW9kZXJuaXpyLnRvdWNoZXZlbnRzKSB7XG4gICAgICBpZiAoIXRoaXMuJGVsLmlzKGUudGFyZ2V0KSAvLyBpZiB0aGUgdGFyZ2V0IG9mIHRoZSBjbGljayBpc24ndCB0aGUgY29udGFpbmVyLi4uXG4gICAgICAgICYmIHRoaXMuJGVsLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSAvLyAuLi4gbm9yIGEgZGVzY2VuZGFudCBvZiB0aGUgY29udGFpbmVyXG4gICAgICB7XG4gICAgICAgIHRoaXMuX3NsaWRlT3V0TGVmdFNpZGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xpZGVPdXRMZWZ0U2lkZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9wcmV2ZW50Q2xpY2tGaXJzdFRpbWUoZSkge1xuICAgIGlmICh0aGlzLiRlbC5oYXNDbGFzcyhTSEFSRURfQ0xBU1NFUy5hY3RpdmUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcyhTSEFSRURfQ0xBU1NFUy5hY3RpdmUpO1xuICAgICAgdGhpcy5fc2xpZGVJbkxlZnRTaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgX3NsaWRlSW5MZWZ0U2lkZSgpIHtcbiAgICB0aGlzLiRsZWZ0U2lkZVxuICAgICAgLm9uZSgndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy4kd2VsY29tZU1lc3NhZ2UuYWRkQ2xhc3MoU0hBUkVEX0NMQVNTRVMuY29sbGFwc2VkKTtcbiAgICAgIH0pXG4gICAgICAud2lkdGgodGhpcy4kbGVmdFNpZGUuZGF0YSgnd2lkdGgnKSk7XG4gIH1cblxuICBfc2xpZGVPdXRMZWZ0U2lkZSgpIHtcbiAgICB0aGlzLiRsZWZ0U2lkZVxuICAgICAgLm9uZSgndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy4kd2VsY29tZU1lc3NhZ2UucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuY29sbGFwc2VkKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoU0hBUkVEX0NMQVNTRVMuYWN0aXZlKTtcbiAgICAgIH0pXG4gICAgICAud2lkdGgoMCk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy90b3AtaGVhZGVyLW15LWFjY291bnQvdG9wLWhlYWRlci1teS1hY2NvdW50LmNvbXBvbmVudC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBDTEFTU0VTID0ge1xuICBsaW5rOiAnbXlBY2NvdW50X19saW5rJyxcbiAgbGVmdFNpZGU6ICdteUFjY291bnRfX2xlZnRTaWRlJyxcbiAgcmlnaHRTaWRlOiAnbXlBY2NvdW50X19yaWdodFNpZGUnLFxuICBpbWFnZTogJ215QWNjb3VudF9faW1nJ1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3RvcC1oZWFkZXItbXktYWNjb3VudC90b3AtaGVhZGVyLW15LWFjY291bnQuY29uZmlnLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==