/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  } // blank or null?\n\n\n  if (!css || typeof css !== \"string\") {\n    return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\"); // convert each url(...)\n\n  /*\n  This regular expression is just a way to recursively match brackets within\n  a string.\n  \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n     (  = Start a capturing group\n       (?:  = Start a non-capturing group\n           [^)(]  = Match anything that isn't a parentheses\n           |  = OR\n           \\(  = Match a start parentheses\n               (?:  = Start another non-capturing groups\n                   [^)(]+  = Match anything that isn't a parentheses\n                   |  = OR\n                   \\(  = Match a start parentheses\n                       [^)(]*  = Match anything that isn't a parentheses\n                   \\)  = Match a end parentheses\n               )  = End Group\n               *\\) = Match anything and then a close parens\n           )  = Close non-capturing group\n           *  = Match anything\n        )  = Close capturing group\n   \\)  = Match a close parens\n  \t /gi  = Get all matches, not the first.  Be case insensitive.\n   */\n\n  var fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n    // strip quotes (if they exist)\n    var unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n      return $1;\n    }).replace(/^'(.*)'$/, function (o, $1) {\n      return $1;\n    }); // already a full url? no change\n\n    if (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n      return fullMatch;\n    } // convert the url to a full url\n\n\n    var newUrl;\n\n    if (unquotedOrigUrl.indexOf(\"//\") === 0) {\n      //TODO: should we add protocol?\n      newUrl = unquotedOrigUrl;\n    } else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n      // path should be relative to the base url\n      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n    } else {\n      // path should be relative to current directory\n      newUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n    } // send back the fixed url(...)\n\n\n    return \"url(\" + JSON.stringify(newUrl) + \")\";\n  }); // send back the fixed css\n\n  return fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/js/app/controllers/check_data.js":
/*!**********************************************!*\
  !*** ./src/js/app/controllers/check_data.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _fill_filters = __webpack_require__(/*! ../view/fill_filters */ \"./src/js/app/view/fill_filters.js\");\n\nvar _fill_filters2 = _interopRequireDefault(_fill_filters);\n\nvar _show_error = __webpack_require__(/*! ./show_error */ \"./src/js/app/controllers/show_error.js\");\n\nvar _show_error2 = _interopRequireDefault(_show_error);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction checkData() {\n  var xhr = new XMLHttpRequest(),\n      newData = void 0;\n  xhr.open('GET', 'https://spunity.github.io/collection/json/data.json');\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState !== 4) {\n      return;\n    }\n\n    try {\n      newData = JSON.parse(xhr.responseText);\n\n      if (localStorage['allMovies'] !== xhr.responseText) {\n        localStorage['allMovies'] = xhr.responseText;\n      }\n\n      filteredData = newData;\n      window.fullDataArray = newData;\n      (0, _fill_filters2.default)();\n    } catch (e) {\n      newData = [];\n\n      try {\n        newData = JSON.parse(localStorage['allMovies']);\n        filteredData = newData;\n        window.fullDataArray = newData;\n        (0, _fill_filters2.default)();\n      } catch (e) {\n        (0, _show_error2.default)(false);\n      }\n    }\n  };\n}\n\nexports.default = checkData;\n\n//# sourceURL=webpack:///./src/js/app/controllers/check_data.js?");

/***/ }),

/***/ "./src/js/app/controllers/show_error.js":
/*!**********************************************!*\
  !*** ./src/js/app/controllers/show_error.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction showError() {\n  for (var i = 0; i < arguments.length; i++) {\n    if (!(arguments.length <= i ? undefined : arguments[i])) {\n      var errorPage = document.createElement('h1');\n      document.body.innerHTML = '';\n      errorPage.innerHTML = 'Наш сервис временно недоступен. Приносим свои извинения.';\n      document.body.appendChild(errorPage);\n      return true;\n    }\n  }\n}\n\nexports.default = showError;\n\n//# sourceURL=webpack:///./src/js/app/controllers/show_error.js?");

/***/ }),

/***/ "./src/js/app/main.js":
/*!****************************!*\
  !*** ./src/js/app/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _handler_search = __webpack_require__(/*! ./model/handler_search */ \"./src/js/app/model/handler_search.js\");\n\nvar _handler_search2 = _interopRequireDefault(_handler_search);\n\nvar _handler_filter = __webpack_require__(/*! ./model/handler_filter */ \"./src/js/app/model/handler_filter.js\");\n\nvar _handler_filter2 = _interopRequireDefault(_handler_filter);\n\nvar _handler_result_button = __webpack_require__(/*! ./model/handler_result_button */ \"./src/js/app/model/handler_result_button.js\");\n\nvar _handler_result_button2 = _interopRequireDefault(_handler_result_button);\n\nvar _check_data = __webpack_require__(/*! ./controllers/check_data */ \"./src/js/app/controllers/check_data.js\");\n\nvar _check_data2 = _interopRequireDefault(_check_data);\n\n__webpack_require__(/*! ../../scss/main.scss */ \"./src/scss/main.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.filteredData = [];\n\nwindow.onload = function () {\n  (0, _check_data2.default)();\n  (0, _handler_search2.default)();\n  (0, _handler_filter2.default)();\n  (0, _handler_result_button2.default)();\n};\n\n//# sourceURL=webpack:///./src/js/app/main.js?");

/***/ }),

/***/ "./src/js/app/model/elem_movie_info.js":
/*!*********************************************!*\
  !*** ./src/js/app/model/elem_movie_info.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction InfoMovie() {\n  this.page = document.querySelector('#movie_info');\n  this.button = document.createElement('button');\n  this.container = document.createElement('div');\n  this.image = document.createElement('img');\n  this.textBlock = document.createElement('div');\n  this.titles = {\n    name: \"Название\",\n    year: \"Год\",\n    genre: \"Жанр\",\n    director: \"Режиссер\",\n    country: \"Страна\",\n    duration: \"Продолжительность\"\n  };\n}\n\nInfoMovie.prototype.assembleContainer = function () {\n  this.button.classList.add('info_return-button');\n  this.button.id = 'return_button';\n  this.container.classList.add('info-data');\n  this.image.classList.add('info-data_banner');\n  this.textBlock.classList.add('info-data-text');\n  this.page.appendChild(this.button);\n  this.container.appendChild(this.image);\n  this.container.appendChild(this.textBlock);\n  this.page.appendChild(this.container);\n};\n\nInfoMovie.prototype.insertContent = function (obj) {\n  this.button.innerHTML = 'Продолжить поиск';\n\n  for (var prop in obj) {\n    if (prop === 'image') {\n      this.image.src = obj[prop] || '';\n      continue;\n    }\n\n    var string = document.createElement('div'),\n        title = document.createElement('p'),\n        content = document.createElement('p');\n    string.classList.add('info-data-text-string');\n    title.classList.add('info-data-text-string_view', 'info-data-text-string_title');\n    content.classList.add('info-data-text-string_view', 'info-data-text-string_content');\n    title.innerHTML = this.titles[prop];\n    string.appendChild(title);\n    content.innerHTML = obj[prop];\n    string.appendChild(content);\n    this.textBlock.appendChild(string);\n  }\n};\n\nInfoMovie.prototype.showPage = function () {\n  this.page.style.display = 'block';\n};\n\nexports.default = InfoMovie;\n\n//# sourceURL=webpack:///./src/js/app/model/elem_movie_info.js?");

/***/ }),

/***/ "./src/js/app/model/elem_of_result.js":
/*!********************************************!*\
  !*** ./src/js/app/model/elem_of_result.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction FoundMovie() {\n  this.container = document.createElement('div'), this.name = document.createElement('span'), this.button = document.createElement('button'), this.parent = document.querySelector('#chosen_movies');\n}\n\nFoundMovie.prototype.assembleContainer = function (index) {\n  this.container.classList.add('result-movie');\n  this.button.classList.add('result-movie-button');\n  this.button.id = 'result_button_' + index;\n  this.container.appendChild(this.name);\n  this.container.appendChild(this.button);\n  this.button.innerHTML = 'Подробнее';\n};\n\nFoundMovie.prototype.insertContent = function (movie) {\n  this.name.innerHTML = '' + movie.name;\n};\n\nFoundMovie.prototype.appendResult = function () {\n  this.parent.appendChild(this.container);\n};\n\nexports.default = FoundMovie;\n\n//# sourceURL=webpack:///./src/js/app/model/elem_of_result.js?");

/***/ }),

/***/ "./src/js/app/model/filters.js":
/*!*************************************!*\
  !*** ./src/js/app/model/filters.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction filterSearch(obj, text) {\n  var nameMovie = obj.name.toLowerCase() || '',\n      directorMovie = obj.director.toLowerCase() || '',\n      userPhrase = text.toLowerCase();\n\n  if (userPhrase === '') {\n    return false;\n  }\n\n  return nameMovie.indexOf(userPhrase) > -1 || directorMovie.indexOf(userPhrase) > -1;\n} //переделать фильтрование\n\n\nfunction filterMovies(filteredData, data) {\n  var moviesBefore = document.querySelector('#beforeYear'),\n      moviesAfter = document.querySelector('#afterYear'),\n      genres = document.querySelector('#genres').querySelectorAll('label'),\n      countries = document.querySelector('#countries').querySelectorAll('label');\n  filteredData = data.filter(function (movie) {\n    if (!(movie.year < 2000 && moviesBefore.checked || movie.year >= 2000 && moviesAfter.checked)) {\n      return false;\n    }\n\n    var noMatch = true,\n        movieGenre = 'elementLabel',\n        movieGenreInput = 'elementInput',\n        movieGenreText = '',\n        movieCountry = 'elementLabel',\n        movieCountryInput = 'elementInput',\n        movieCountryText = '';\n\n    for (var i = 0; i < genres.length; i++) {\n      movieGenre = genres[i] || document.createElement('label');\n      movieGenreInput = movieGenre.querySelector('input') || document.createElement('input');\n      movieGenreText = movieGenre.textContent.toLowerCase() || '';\n\n      if (movie['genre'].indexOf(movieGenreText) > -1) {\n        if (movieGenreInput.checked === true) {\n          noMatch = false;\n        }\n      }\n    }\n\n    if (noMatch) {\n      return false;\n    }\n\n    noMatch = true;\n\n    for (var _i = 0; _i < countries.length; _i++) {\n      movieCountry = countries[_i] || document.createElement('label');\n      movieCountryInput = movieCountry.querySelector('input') || document.createElement('input');\n      movieCountryText = movieCountry.textContent.toLowerCase() || '';\n\n      if (movie['country'].toLowerCase().indexOf(movieCountryText) > -1) {\n        if (movieCountryInput.checked === true) {\n          noMatch = false;\n        }\n      }\n    }\n\n    if (noMatch) {\n      return false;\n    }\n\n    return true;\n  });\n  return filteredData;\n}\n\nexports.filterSearch = filterSearch;\nexports.filterMovies = filterMovies;\n\n//# sourceURL=webpack:///./src/js/app/model/filters.js?");

/***/ }),

/***/ "./src/js/app/model/handler_filter.js":
/*!********************************************!*\
  !*** ./src/js/app/model/handler_filter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _delete_elems = __webpack_require__(/*! ../view/delete_elems */ \"./src/js/app/view/delete_elems.js\");\n\nvar _delete_elems2 = _interopRequireDefault(_delete_elems);\n\nvar _add_elem = __webpack_require__(/*! ../view/add_elem */ \"./src/js/app/view/add_elem.js\");\n\nvar _add_elem2 = _interopRequireDefault(_add_elem);\n\nvar _show_amount = __webpack_require__(/*! ../view/show_amount */ \"./src/js/app/view/show_amount.js\");\n\nvar _show_amount2 = _interopRequireDefault(_show_amount);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addFilter() {\n  var containerFilter = document.querySelector('#filter'),\n      buttonYear = document.querySelector('#button_year'),\n      buttonGenre = document.querySelector('#button_genre'),\n      buttonCountry = document.querySelector('#button_country'),\n      resultPage = document.body.querySelector('#chosen_movies');\n\n  containerFilter.onclick = function (e) {\n    if (e.target.nodeName !== 'BUTTON') {\n      return;\n    }\n\n    e.target.classList.toggle('selected-button');\n    (0, _delete_elems2.default)(resultPage);\n    (0, _show_amount2.default)();\n\n    if (e.target === buttonYear || e.target === buttonGenre || e.target === buttonCountry) {\n      ruleFilter(e.target);\n\n      if (!isFilterWorking(buttonYear, buttonGenre, buttonCountry)) {\n        filteredData = fullDataArray;\n        return;\n      }\n    }\n\n    filteredData = fullDataArray.filter(function (movie) {\n      return isSuitableMovie(buttonYear, buttonGenre, buttonCountry, movie);\n    });\n    filteredData.forEach(function (movie, index) {\n      (0, _add_elem2.default)(movie, index);\n    });\n    (0, _show_amount2.default)();\n  };\n}\n\nfunction ruleFilter(button) {\n  var nameFilter = button.id.slice(7),\n      filter = document.querySelector('#filter_' + nameFilter),\n      selectedButtons = filter.querySelectorAll('.selected-button');\n\n  if (button.classList.contains('selected-button')) {\n    filter.style.display = 'block';\n  } else {\n    filter.style.display = 'none';\n\n    if (selectedButtons.length) {\n      for (var i = 0; i < selectedButtons.length; i++) {\n        selectedButtons[i].classList.remove('selected-button');\n      }\n    }\n  }\n}\n\nfunction isFilterWorking() {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  for (var i = 0; i < args.length; i++) {\n    if (args[i].classList.contains('selected-button')) {\n      return true;\n    }\n  }\n}\n\nfunction isSuitableMovie(yearButton, genreButton, countryButton, obj) {\n  var rightMovie = true,\n      buttonBefore = document.querySelector('#year_before'),\n      buttonAfter = document.querySelector('#year_after'),\n      filterGenre = document.querySelector('#filter_genre'),\n      filterCountry = document.querySelector('#filter_country');\n\n  if (isFilterWorking(yearButton)) {\n    rightMovie = obj.year < 2000 && isFilterWorking(buttonBefore) || obj.year >= 2000 && isFilterWorking(buttonAfter);\n  }\n\n  if (isFilterWorking(genreButton) && rightMovie) {\n    rightMovie = false;\n    var arrGenre = obj.genre.split(', '),\n        genreSelectedButtons = [].slice.call(filterGenre.querySelectorAll('.selected-button')),\n        arrFilterGenres = genreSelectedButtons.map(function (elem) {\n      return elem.innerText;\n    });\n\n    for (var i = 0; i < arrGenre.length; i++) {\n      if (arrFilterGenres.indexOf(arrGenre[i]) > -1) {\n        rightMovie = true;\n      }\n    }\n  }\n\n  if (isFilterWorking(countryButton) && rightMovie) {\n    rightMovie = false;\n    var arrCountry = obj.country.split(', '),\n        countrySelectedButtons = [].slice.call(filterCountry.querySelectorAll('.selected-button')),\n        arrFilterCountries = countrySelectedButtons.map(function (elem) {\n      return elem.innerText;\n    });\n\n    for (var i = 0; i < arrCountry.length; i++) {\n      if (arrFilterCountries.indexOf(arrCountry[i]) > -1) {\n        rightMovie = true;\n      }\n    }\n  }\n\n  return rightMovie;\n}\n\nexports.default = addFilter;\n\n//# sourceURL=webpack:///./src/js/app/model/handler_filter.js?");

/***/ }),

/***/ "./src/js/app/model/handler_result_button.js":
/*!***************************************************!*\
  !*** ./src/js/app/model/handler_result_button.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _show_movie_info = __webpack_require__(/*! ../view/show_movie_info */ \"./src/js/app/view/show_movie_info.js\");\n\nvar _show_movie_info2 = _interopRequireDefault(_show_movie_info);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addEventForResultButton() {\n  var resultContainer = document.querySelector('#chosen_movies'),\n      filterContainer = document.querySelector('#filter'),\n      searchContainer = document.querySelector('#search'),\n      infoContainer = document.querySelector('#movie_info');\n\n  resultContainer.onclick = function (e) {\n    if (e.target.nodeName !== 'BUTTON') {\n      return;\n    }\n\n    var index = +e.target.id.slice(14);\n    hideBlocks(resultContainer, filterContainer, searchContainer);\n    (0, _show_movie_info2.default)(filteredData[index]);\n    var returnButton = document.querySelector('#return_button');\n\n    returnButton.onclick = function () {\n      showBlocks(resultContainer, filterContainer, searchContainer);\n      infoContainer.innerHTML = '';\n      hideBlocks(infoContainer);\n    };\n  };\n}\n\nfunction hideBlocks() {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  args.forEach(function (elem) {\n    elem.style.display = 'none';\n  });\n}\n\nfunction showBlocks() {\n  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    args[_key2] = arguments[_key2];\n  }\n\n  args.forEach(function (elem) {\n    elem.style.display = 'block';\n  });\n}\n\nexports.default = addEventForResultButton;\n\n//# sourceURL=webpack:///./src/js/app/model/handler_result_button.js?");

/***/ }),

/***/ "./src/js/app/model/handler_search.js":
/*!********************************************!*\
  !*** ./src/js/app/model/handler_search.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _show_error = __webpack_require__(/*! ../controllers/show_error */ \"./src/js/app/controllers/show_error.js\");\n\nvar _show_error2 = _interopRequireDefault(_show_error);\n\nvar _delete_elems = __webpack_require__(/*! ../view/delete_elems */ \"./src/js/app/view/delete_elems.js\");\n\nvar _delete_elems2 = _interopRequireDefault(_delete_elems);\n\nvar _show_amount = __webpack_require__(/*! ../view/show_amount */ \"./src/js/app/view/show_amount.js\");\n\nvar _show_amount2 = _interopRequireDefault(_show_amount);\n\nvar _filters = __webpack_require__(/*! ./filters */ \"./src/js/app/model/filters.js\");\n\nvar _add_elem = __webpack_require__(/*! ../view/add_elem */ \"./src/js/app/view/add_elem.js\");\n\nvar _add_elem2 = _interopRequireDefault(_add_elem);\n\nvar _empty_result = __webpack_require__(/*! ../view/empty_result */ \"./src/js/app/view/empty_result.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addSearchSubmit() {\n  var form = document.forms.movies || false,\n      input = document.body.querySelector('#search_string') || false,\n      resultPage = document.body.querySelector('#chosen_movies') || false;\n\n  if ((0, _show_error2.default)(form, input, resultPage)) {\n    return;\n  }\n\n  form.onsubmit = function (e) {\n    e.preventDefault();\n    var userText = input.value || '';\n    (0, _delete_elems2.default)(resultPage);\n    (0, _show_amount2.default)();\n    filteredData.forEach(function (item, index) {\n      if (!(0, _filters.filterSearch)(item, userText)) {\n        return;\n      }\n\n      (0, _add_elem2.default)(item, index);\n    });\n\n    if (!(0, _empty_result.findResultsOnPage)()) {\n      (0, _empty_result.showNoResults)();\n    }\n\n    (0, _show_amount2.default)();\n  };\n}\n\nexports.default = addSearchSubmit;\n\n//# sourceURL=webpack:///./src/js/app/model/handler_search.js?");

/***/ }),

/***/ "./src/js/app/view/add_elem.js":
/*!*************************************!*\
  !*** ./src/js/app/view/add_elem.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _elem_of_result = __webpack_require__(/*! ../model/elem_of_result */ \"./src/js/app/model/elem_of_result.js\");\n\nvar _elem_of_result2 = _interopRequireDefault(_elem_of_result);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addMovieOnPage(movieData, movieIndex) {\n  var movie = new _elem_of_result2.default();\n  movie.assembleContainer(movieIndex);\n  movie.insertContent(movieData);\n  movie.appendResult();\n}\n\nexports.default = addMovieOnPage;\n\n//# sourceURL=webpack:///./src/js/app/view/add_elem.js?");

/***/ }),

/***/ "./src/js/app/view/delete_elems.js":
/*!*****************************************!*\
  !*** ./src/js/app/view/delete_elems.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction deletePreviousElements(resultContainer) {\n  while (resultContainer.querySelector('.result-movie')) {\n    resultContainer.removeChild(resultContainer.querySelector('.result-movie'));\n  }\n}\n\nexports.default = deletePreviousElements;\n\n//# sourceURL=webpack:///./src/js/app/view/delete_elems.js?");

/***/ }),

/***/ "./src/js/app/view/empty_result.js":
/*!*****************************************!*\
  !*** ./src/js/app/view/empty_result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction findResultsOnPage() {\n  return !!document.querySelector('.result-movie');\n}\n\nfunction showNoResults() {\n  var emptyResult = document.querySelector('#empty_result'),\n      emptyResultButton = document.querySelector('#close_empty_result');\n  emptyResult.style.display = 'block';\n\n  emptyResultButton.onclick = function () {\n    emptyResult.style.display = 'none';\n  };\n}\n\nexports.findResultsOnPage = findResultsOnPage;\nexports.showNoResults = showNoResults;\n\n//# sourceURL=webpack:///./src/js/app/view/empty_result.js?");

/***/ }),

/***/ "./src/js/app/view/fill_filters.js":
/*!*****************************************!*\
  !*** ./src/js/app/view/fill_filters.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction fillFilters() {\n  var genres = document.querySelector('#filter_genre'),\n      countries = document.querySelector('#filter_country'),\n      arrGenres = [],\n      arrCountries = [];\n\n  for (var i = 0; i < filteredData.length; i++) {\n    var movie = filteredData[i],\n        twoGenres = [],\n        someCountries = [];\n    twoGenres = movie.genre.split(', ');\n    someCountries = movie.country.split(', ');\n    findMatches(arrGenres, twoGenres);\n    findMatches(arrCountries, someCountries);\n  }\n\n  arrGenres.forEach(function (item) {\n    var button = createButton(item);\n    genres.appendChild(button);\n  });\n  arrCountries.forEach(function (item) {\n    var button = createButton(item);\n    countries.appendChild(button);\n  });\n}\n\nfunction findMatches(commonArr, arr) {\n  arr.forEach(function (item) {\n    if (commonArr.indexOf(item) === -1) {\n      commonArr.push(item);\n    }\n  });\n}\n\nfunction createButton(text) {\n  var elem = document.createElement('button');\n  elem.classList.add('filter-button');\n  elem.innerHTML = text;\n  return elem;\n}\n\nexports.default = fillFilters;\n\n//# sourceURL=webpack:///./src/js/app/view/fill_filters.js?");

/***/ }),

/***/ "./src/js/app/view/show_amount.js":
/*!****************************************!*\
  !*** ./src/js/app/view/show_amount.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction showAmountMovies() {\n  var amountMovies = document.body.querySelector('#amount_movies') || false,\n      arrMovies = document.querySelectorAll('.result-movie') || '0';\n\n  if (!amountMovies) {\n    return;\n  } else if (arrMovies === '0') {\n    amountMovies.innerHTML = '0';\n    return;\n  }\n\n  amountMovies.innerHTML = '' + arrMovies.length;\n}\n\nexports.default = showAmountMovies;\n\n//# sourceURL=webpack:///./src/js/app/view/show_amount.js?");

/***/ }),

/***/ "./src/js/app/view/show_movie_info.js":
/*!********************************************!*\
  !*** ./src/js/app/view/show_movie_info.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _elem_movie_info = __webpack_require__(/*! ../model/elem_movie_info */ \"./src/js/app/model/elem_movie_info.js\");\n\nvar _elem_movie_info2 = _interopRequireDefault(_elem_movie_info);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addMovieInfoPage(movieData) {\n  var movie = new _elem_movie_info2.default();\n  movie.insertContent(movieData);\n  movie.assembleContainer();\n  movie.showPage();\n}\n\nexports.default = addMovieInfoPage;\n\n//# sourceURL=webpack:///./src/js/app/view/show_movie_info.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });