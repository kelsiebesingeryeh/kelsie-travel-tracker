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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_hamburger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hamburger.png */ "./src/images/hamburger.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_hamburger_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul {\n  background-color: #CED4DA;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  justify-content: flex-end;\n  list-style-type: none;\n  margin: 0;\n  overflow: hidden;\n  padding: 0; }\n\nli {\n  float: right; }\n  li:hover {\n    background-color: #d90368; }\n\n.nav-left {\n  float: left; }\n\nli a {\n  color: #212529;\n  display: block;\n  font-weight: bold;\n  padding: 0.875rem 1rem;\n  text-align: center;\n  text-decoration: none; }\n\n.login-text {\n  text-align: center;\n  margin-top: 15%; }\n\n.login-container {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  width: 500px;\n  margin-top: 2%; }\n\n.login-form {\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  width: 500px; }\n\n.login-form-field {\n  border-radius: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 5% 0;\n  padding: 5% 15%;\n  width: 100%; }\n\n.submit-button {\n  background-color: #d90368;\n  border: none;\n  border-radius: 10px;\n  color: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 4%;\n  width: 100%;\n  font-size: 2rem; }\n\n.message {\n  text-align: center; }\n\n.card {\n  column-gap: 1rem;\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  justify-items: center;\n  padding: 30px; }\n\n.info-card {\n  align-items: center;\n  border: 1px solid #6C757D;\n  border-radius: 5px;\n  box-shadow: 0px 3px 10px 2px #6C757D;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 70%; }\n\n.image-styling {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.trip-image {\n  height: auto;\n  margin-bottom: 25%;\n  width: 100%; }\n\np {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh; }\n\nh1 {\n  color: #d90368;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold; }\n\n.user-view {\n  margin-top: 5%; }\n\n.all-trips {\n  margin-left: 2%; }\n\n.plan-trip-area {\n  margin-left: 2%; }\n\n.year-cost {\n  margin-top: 5%; }\n\n.greeting {\n  font-size: 1rem;\n  margin-top: -3%; }\n\n.destinations-list {\n  font-family: \"Montserrat\", sans-serif; }\n\n.label-names {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold; }\n\n.book-trip-form {\n  display: flex;\n  justify-content: space-around; }\n\n.button {\n  background-color: #d90368;\n  border: none;\n  border-radius: 5px;\n  color: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  width: 11.5rem; }\n\n.estimated-trip-cost {\n  color: #d90368;\n  text-align: center; }\n\n.hamburger {\n  display: none; }\n\n.hidden {\n  display: none; }\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5; }\n\n@media screen and (min-width: 551px) and (max-width: 1024px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 21%; }\n  .message {\n    margin-top: 2%; }\n  .nav-bar {\n    font-size: .65rem; }\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.65rem;\n    text-align: center; }\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column; }\n  .button {\n    margin-top: 5%;\n    padding: 1%; }\n  .label-styling {\n    margin-top: 5%;\n    text-align: center; }\n  .hamburger {\n    display: none; }\n  .info-card {\n    width: 100%; }\n  .greeting {\n    margin-top: 0%; }\n  .travel-card-container {\n    padding: 0; } }\n\n@media screen and (max-width: 550px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 35%; }\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.25rem;\n    text-align: center; }\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column; }\n  .button {\n    margin-top: 5%;\n    padding: 2%; }\n  .label-styling {\n    margin-top: 5%;\n    text-align: center; }\n  .nav-bar {\n    display: none; }\n  .hamburger {\n    align-items: center;\n    background-color: #F8F9FA;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    height: 6.5vh;\n    width: 15.5vw;\n    z-index: 2; }\n  .hamburger-content {\n    background-color: #CED4DA;\n    color: #212529;\n    margin-left: 30%;\n    margin-top: 75%;\n    z-index: 2; }\n  .dropdown-item {\n    font-size: .80rem;\n    line-height: 2rem;\n    padding: .35rem; }\n  .info-card {\n    width: 100%; }\n  .travel-card-container {\n    padding: 0; } }\n", "",{"version":3,"sources":["webpack://./src/css/_navigation.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_login.scss","webpack://./src/css/_card.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"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","sourcesContent":["ul {\n    background-color: $light-grey;\n    display: flex;\n    font-family: $montserrat-font;\n    justify-content: flex-end;\n    list-style-type: none;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n}\n\nli {\n    float: right;\n\n    &:hover {\n        background-color: $hot-pink;\n    }\n}\n\n.nav-left {\n    float: left;\n}\n\nli {\n    a {\n        color: $dark-green;\n        display: block;\n        font-weight: bold;\n        padding: 0.875rem 1rem;\n        text-align: center;\n        text-decoration: none;\n    }\n}","$dark-green: #212529;\n$off-white: #F8F9FA;\n$light-grey: #CED4DA;\n$slate-grey: #6C757D;\n$hot-pink: #d90368;\n$montserrat-font: 'Montserrat',\nsans-serif;\n$shadow: 0px 3px 10px 2px $slate-grey;\n\n@mixin flexDisplay($flex, $direction) {\n    display: $flex;\n    flex-direction: $direction;\n}",".login-text {\n    text-align: center;\n    margin-top: 15%;\n}\n\n.login-container {\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    width: 500px;\n    margin-top: 2%;\n}\n\n.login-form {\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    width: 500px;\n}\n\n.login-form-field {\n    border-radius: 10px;\n    box-sizing: border-box;\n    display: inline-block;\n    margin: 5% 0;\n    padding: 5% 15%;\n    width: 100%;\n}\n\n.submit-button {\n    background-color: $hot-pink;\n    border: none;\n    border-radius: 10px;\n    color: $off-white;\n    font-family: $montserrat-font;\n    padding: 4%;\n    width: 100%;\n    font-size: 2rem;\n}\n\n.message {\n    text-align: center;\n}",".card {\n    column-gap: 1rem;\n    display: grid;\n    grid-gap: 3rem;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    justify-items: center;\n    padding: 30px;\n}\n\n.info-card {\n    align-items: center;\n    border: 1px solid $slate-grey;\n    border-radius: 5px;\n    box-shadow: $shadow;\n    @include flexDisplay(flex, column);\n    justify-content: center;\n    text-align: center;\n    width: 70%;\n}\n\n.image-styling {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.trip-image {\n    height: auto;\n    margin-bottom: 25%;\n    width: 100%;\n}\n\np {\n    margin: 0;\n    padding: 0;\n}","@import 'variables';\n@import 'navigation';\n@import 'login';\n@import 'card';\n\nbody {\n  background: $off-white;\n  font-family: $montserrat-font;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n}\n\nh1 {\n  color: $hot-pink;\n  font-family: $montserrat-font;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.user-view {\n  margin-top: 5%;\n}\n\n.all-trips {\n  margin-left: 2%;\n}\n\n.plan-trip-area {\n  margin-left: 2%;\n}\n\n.year-cost {\n  margin-top: 5%;\n}\n\n.greeting {\n  font-size: 1rem;\n  margin-top: -3%;\n}\n\n.destinations-list {\n  font-family: $montserrat-font;\n}\n\n.label-names {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.book-trip-form {\n  display: flex;\n  justify-content: space-around;\n}\n\n.button {\n  background-color: $hot-pink;\n  border: none;\n  border-radius: 5px;\n  color: $off-white;\n  font-family: $montserrat-font;\n  width: 11.5rem;\n}\n\n.estimated-trip-cost {\n  color: $hot-pink;\n  text-align: center;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n// IPAD/TABLETS\n\n@media screen and (min-width: 551px) and (max-width: 1024px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 21%;\n  }\n\n  .message {\n    margin-top: 2%;\n  }\n\n  .nav-bar {\n    font-size: .65rem;\n  }\n\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.65rem;\n    text-align: center;\n  }\n\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .button {\n    margin-top: 5%;\n    padding: 1%;\n  }\n\n  .label-styling {\n    margin-top: 5%;\n    text-align: center;\n  }\n\n  .hamburger {\n    display: none;\n  }\n\n  .info-card {\n    width: 100%;\n  }\n\n  .greeting {\n    margin-top: 0%;\n  }\n\n  .travel-card-container {\n    padding: 0;\n  }\n}\n\n// /SMARTPHONES/MOBILE\n\n@media screen and (max-width: 550px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 35%;\n  }\n\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.25rem;\n    text-align: center;\n  }\n\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .button {\n    margin-top: 5%;\n    padding: 2%;\n  }\n\n  .label-styling {\n    margin-top: 5%;\n    text-align: center;\n  }\n\n  .nav-bar {\n    display: none;\n  }\n\n  .hamburger {\n    align-items: center;\n    background-color: $off-white;\n    background-image: url('../images/hamburger.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    @include flexDisplay(flex, column);\n    height: 6.5vh;\n    width: 15.5vw;\n    z-index: 2;\n  }\n\n  .hamburger-content {\n    background-color: $light-grey;\n    color: $dark-green;\n    margin-left: 30%;\n    margin-top: 75%;\n    z-index: 2;\n  }\n\n  .dropdown-item {\n    font-size: .80rem;\n    line-height: 2rem;\n    padding: .35rem;\n  }\n\n  .info-card {\n    width: 100%;\n  }\n\n  .travel-card-container {\n    padding: 0;\n  }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ApiCall {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }

  getRequest() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        return data = data[this.name];
      })
      .catch((error) => console.log(error));
  }

  getSingleRequest() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  }

  postRequest(newTrip) {
    return fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrip),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        return data;
      })
      .catch((error) => console.log(error));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ApiCall);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {
    displayTrips(tripsList, tripsArea) {
        tripsArea.innerHTML = '';
        tripsList.trips.forEach(trip => {
            let tripsHTML = `
                    <div class='info-card'>
                    <div class="image-styling">
                    <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
                    </div>
                    <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
                    <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
                    <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
                    <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
                    <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
                    </div>`;
            tripsArea.insertAdjacentHTML('beforeend', tripsHTML)
        })
    },

    displayOtherTrips(listType, listArea, listDisplay, pageText, tripType) {
        if (listType.length === 0) {
            pageText.innerText = `You Have No ${tripType} Trips!`
        } else {
            listArea.innerHTML = '';
            listType.forEach(trip => {
                let listDisplay = `
           <div class='info-card'>
               <div class="image-styling">
                   <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
               </div>
               <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
               <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
               <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
               <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
               <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
           </div>`;
                listArea.insertAdjacentHTML('beforeend', listDisplay)
            })
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/hamburger.png":
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/hamburger.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip */ "./src/trip.js");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");






// GLOBAL VARIABLES

let travelerApi;
let destinationApi;
let tripApi;
let destinationInfo;
let travelerInfo;
let tripInfo;
let currentUserInfo;
let traveler;
let currentTraveler;
let newTrip;
let trip;
let chosenUserID;
const baseURL = 'http://localhost:3001/api/v1';

// QUERY SELECTORS

const tripsArea = document.querySelector(".travel-card-container");
const allTripsText = document.querySelector(".all-trips");
const destinationsList = document.querySelector(".destinations-list");
const planTripArea = document.querySelector(".plan-trip-area");

const pendingTrips = document.querySelector(".pending-trips");
const pendingTripsArea = document.querySelector(".pending-trips-area");

const upcomingTrips = document.querySelector(".upcoming-trips");
const upcomingTripsArea = document.querySelector(".upcoming-trips-area");

const pastTrips = document.querySelector(".past-trips");
const pastTripsArea = document.querySelector(".past-trips-area");

const currentTrips = document.querySelector(".current-trips");
const currentTripsArea = document.querySelector(".current-trips-area");

const homeButton = document.querySelector(".home");
const bookTravelButton = document.querySelector(".book-travel-button");
const calculateTravelButton = document.querySelector(".calculate-cost-button");
const loginSubmitButton = document.querySelector(".submit-button");

const durationInput = document.querySelector(".duration");
const travelersInput = document.querySelector(".travelers");
const startDate = document.querySelector(".date-picker");
const estimatedTripCost = document.querySelector(".estimated-trip-cost");
const bookTripForm = document.querySelector(".book-trip-form");

const userView = document.querySelector(".user-view");
const loginPage = document.querySelector(".login-page");
const navbar = document.querySelector(".nav-bar");

const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerMenuContent = document.querySelector(".hamburger-content");

const mobileHomeButton = document.querySelector('.home-mobile');
const mobileCurrentTripsButton = document.querySelector('.current-trips-mobile');
const mobileUpcomingTripsButton = document.querySelector(".upcoming-trips-mobile");
const mobilePendingTripsButton = document.querySelector(".pending-trips-mobile");
const mobilePastTripsButton = document.querySelector(".past-trips-mobile");

const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

// EVENT LISTENERS
usernameInput.addEventListener('keyup', () => {
    if (passwordInput.value !== '') {
        toggleButton(loginSubmitButton, usernameInput);
    }
})

passwordInput.addEventListener("keyup", () => {
    if (usernameInput.value !== "") {
        toggleButton(loginSubmitButton, passwordInput);
    }
});

currentTrips.addEventListener("click", displayCurrentTrips);
upcomingTrips.addEventListener("click", displayUpcomingTrips);
pendingTrips.addEventListener("click", displayPendingTrips);
pastTrips.addEventListener("click", displayPastTrips);
homeButton.addEventListener("click", returnHome);

calculateTravelButton.addEventListener('click', (event) => {
    event.preventDefault();
    displayEstimatedCosts(event);
    hide(calculateTravelButton);
    show(bookTravelButton);
    show(estimatedTripCost);
    submitTripRequest();
})

bookTravelButton.addEventListener("click", (event) => {
    hide(bookTravelButton);
    show(calculateTravelButton);
    hide(estimatedTripCost);
    updateNewTripBookings(event);
    clearTravelInputs();
});

loginSubmitButton.addEventListener('click', (event) => {
    show(userView);
    show(navbar);
    hide(loginPage);
    show(hamburgerMenu);
    loginUser(event);
});

hamburgerMenu.addEventListener("click", toggleHamburgerMenuDropdown);
mobileHomeButton.addEventListener("click", returnHome);

mobileCurrentTripsButton.addEventListener("click", displayCurrentTrips);
mobileUpcomingTripsButton.addEventListener("click", displayUpcomingTrips);
mobilePendingTripsButton.addEventListener("click", displayPendingTrips);
mobilePastTripsButton.addEventListener("click", displayPastTrips);

function loginUser(event) {
    event.preventDefault();
    chosenUserID = usernameInput.value.split("").splice(8, 3).join("");
    if (usernameInput.value.slice(0, 8) === "traveler" && usernameInput.value.slice(8) > 0 && usernameInput.value.slice(8) <= 50 && passwordInput.value === 'traveler2020') {
        getAllData();
    } else {
        hide(userView);
        show(loginPage);
        hide(navbar);
        displayErrorMessage('You have entered the wrong username or password!');
    }
}

function getAllData() {
    travelerApi = new _apiCalls__WEBPACK_IMPORTED_MODULE_3__["default"](`${baseURL}/travelers`, "travelers");
    destinationApi = new _apiCalls__WEBPACK_IMPORTED_MODULE_3__["default"](`${baseURL}/destinations`, "destinations");
    tripApi = new _apiCalls__WEBPACK_IMPORTED_MODULE_3__["default"](`${baseURL}/trips`, "trips");
    currentTraveler = new _apiCalls__WEBPACK_IMPORTED_MODULE_3__["default"](`${baseURL}/travelers/${chosenUserID}`);
    onLoad();
}

function onLoad() {
    let travelerData = travelerApi.getRequest();
    let destinationData = destinationApi.getRequest();
    let tripData = tripApi.getRequest();
    let singleData = currentTraveler.getSingleRequest();

    return Promise.all([travelerData, destinationData, tripData, singleData])
        .then((data) => {
            travelerInfo = data[0];
            destinationInfo = data[1];
            tripInfo = data[2];
            currentUserInfo = data[3];
            buildPage(currentUserInfo, tripInfo, destinationInfo);
        })
        .catch((error) => console.log(error));
}

function updateNewTripBookings(event) {
    event.preventDefault();
    getAllData(chosenUserID);
}

function fillDropdown() {
    let sortedDestinations = destinationInfo.sort((a, b) => {
        if (a.destination < b.destination) {
            return -1
        }
    })
    sortedDestinations.forEach((destination) => {
        destinationsList.insertAdjacentHTML("beforeend", '');
        let destinationsOptions = `<option>${destination.destination}</option>`;
        destinationsList.insertAdjacentHTML("beforeend", destinationsOptions);
    });
}

function buildPage(currentUserInfo, tripInfo, destinationInfo) {
    const yearCost2020 = document.querySelector(".year-cost-2020");
    const yearCost2019 = document.querySelector(".year-cost-2019");
    createTravelerProfile(currentUserInfo, tripInfo, destinationInfo);
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayTrips(traveler, tripsArea);
    yearCost2019.innerText = `Your 2020 trip cost is: $${traveler.calculateTotalSpent("2020")}`;
    yearCost2020.innerText = `Your 2021 trip cost is: $${traveler.calculateTotalSpent("2021")}`;
}

function createTravelerProfile(currentUserInfo, tripInfo, destinationInfo) {
    const greetUser = document.querySelector(".greeting");
    greetUser.innerText = `Hello, ${currentUserInfo.name}!`
    traveler = new _traveler__WEBPACK_IMPORTED_MODULE_2__["default"](currentUserInfo, tripInfo, destinationInfo);
    fillDropdown();
}

function makeNewTrip() {
    let travelerInputValue = parseInt(travelersInput.value);
    let durationInputValue = parseInt(durationInput.value);
    let newDateFormat = startDate.value.split("-").join("/");
    let destinationInputValue = filterDestinations()
    let uniqueID = getNewID();

    newTrip = {
        id: uniqueID,
        userID: currentUserInfo.id,
        destinationID: destinationInputValue,
        travelers: travelerInputValue,
        date: newDateFormat,
        duration: durationInputValue,
        status: "pending",
        suggestedActivities: [],
    };
    return newTrip;
}

function filterDestinations() {
    let destinationBookingID;
    destinationInfo.forEach(destination => {
        if (destination.destination === destinationsList.value) {
            destinationBookingID = destination.id;
        }
    })
    return destinationBookingID;
}

function getNewID() {
    return tripInfo.length + 1
}

function submitTripRequest() {
    let postOption = makeNewTrip();
    let newTripBooking = new _apiCalls__WEBPACK_IMPORTED_MODULE_3__["default"](
        "http://localhost:3001/api/v1/trips"
    );
    newTripBooking.postRequest(postOption);
}

function displayErrorMessage(message) {
    const messages = document.querySelector(".message");
    messages.innerText = message;
}

function clearTravelInputs() {
    durationInput.value = "";
    travelersInput.value = "";
    startDate.value = "";
    destinationsList.selectedIndex = 0;
}

function show(element) {
    element.classList.remove("hidden");
}

function hide(element) {
    element.classList.add("hidden");
}

function toggleButton(button, input) {
    if (input.value === '') {
        button.disabled = true;
        button.classList.add('disabled');
    } else {
        button.disabled = false;
        button.classList.remove('disabled');
    }
}

function toggleHamburgerMenuDropdown() {
    hamburgerMenuContent.classList.toggle("hidden");
}

function displayEstimatedCosts(event) {
    event.preventDefault()
    destinationInfo.forEach(destination => {
        if (destinationsList.value === destination.destination) {
            trip = new _trip__WEBPACK_IMPORTED_MODULE_1__["default"](tripInfo, destination);
            let durationValue = durationInput.value;
            let travelersValue = travelersInput.value;
            estimatedTripCost.innerText = `Your Estimated Trip Cost Is: $${trip.calculateEstimatedTripCost(durationValue, travelersValue)}`;
        }
    })
}

function displayPendingTrips() {
    const pendingTripsText = document.querySelector(".pending-trips-text");
    let pendingTripsList = traveler.getPendingTrips();
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayOtherTrips(pendingTripsList, pendingTripsArea, 'pendingHTML', pendingTripsText, "Pending");
    hide(tripsArea);
    hide(planTripArea);
    hide(upcomingTripsArea);
    show(pendingTripsArea);
    hide(pastTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
}

function displayUpcomingTrips() {
    const upcomingTripsText = document.querySelector(".upcoming-trips-text");
    let upcomingTripsList = traveler.getUpcomingTrips();
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayOtherTrips(
        upcomingTripsList,
        upcomingTripsArea,
        "upcomingHTML",
        upcomingTripsText,
        "Upcoming"
    );
    hide(tripsArea);
    hide(planTripArea);
    show(upcomingTripsArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
}

function displayPastTrips() {
    const pastTripsText = document.querySelector(".past-trips-text");
    let pastTripsList = traveler.getPastTrips();
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayOtherTrips(
        pastTripsList,
        pastTripsArea,
        "pastHTML",
        pastTripsText,
        "Previous"
    );
    hide(tripsArea);
    hide(planTripArea);
    hide(pendingTripsArea);
    show(pastTripsArea);
    hide(upcomingTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
}

function displayCurrentTrips() {
    const currentTripsText = document.querySelector(".current-trips-text");
    let currentTripsList = traveler.getCurrentTrips();
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayOtherTrips(
        currentTripsList,
        currentTripsArea,
        "currentHTML",
        currentTripsText,
        "Current"
    );
    hide(tripsArea);
    hide(planTripArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(upcomingTripsArea);
    show(currentTripsArea);
    hide(allTripsText);
}

function returnHome() {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayTrips(traveler, tripsArea);
    allTripsText.innerHTML = "All Trips";
    show(tripsArea);
    show(planTripArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(upcomingTripsArea);
    hide(currentTripsArea);
    show(allTripsText);
}

/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip */ "./src/trip.js");


class Traveler {
  constructor(travelerData, tripData, destinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.tripData = tripData;
    this.destinationData = destinationData;
    this.trips = this.getAllTravelersTrips() || [];
  }

  getAllTravelersTrips() {
    if (this.tripData.length > 0) {
      return this.tripData.reduce((total, trip) => {
        this.destinationData.forEach((destination) => {
          if (
            this.id === trip.userID &&
            trip.destinationID === destination.id
          ) {
            total.push(new _trip__WEBPACK_IMPORTED_MODULE_0__["default"](trip, destination));
          }
        });
        return total;
      }, []);
    }
  }

  calculateTotalSpent(year) {
    let totalLodging;
    let totalFlight;
    let agentFee;
    let totalTripCost = this.trips.reduce((total, trip) => {
      if (trip.date.includes(year)) {
        totalLodging = trip.destination.estimatedLodgingCostPerDay * trip.duration;
        totalFlight = trip.destination.estimatedFlightCostPerPerson;
        total += totalLodging + totalFlight;
      }
      return total;
    }, 0);
    agentFee = totalTripCost * 0.1;
    return agentFee + totalTripCost;
  }

  getPendingTrips() {
    return this.trips.filter((trip) => trip.status === "pending");
  }

  getCurrentTrips() {
    return this.trips.reduce((total, trip) => {
      let today = new Date();
      let startDate = new Date(trip.date);
      let endDate = new Date(trip.date);
      endDate.setDate(endDate.getDate() + trip.duration);
      if (startDate < today && endDate > today) {
        total.push(trip);
      }
      return total;
    }, []);
  }

  getPastTrips() {
    return this.trips.reduce((total, trip) => {
      let today = new Date();
      let endDate = new Date(trip.date);
      endDate.setDate(endDate.getDate() + trip.duration);
      if (endDate < today) {
        total.push(trip);
      }
      return total;
    }, []);
  }

  getUpcomingTrips() {
    return this.trips.reduce((total, trip) => {
      let today = new Date();
      let startDate = new Date(trip.date);
      if (startDate > today) {
        total.push(trip);
      }
      return total;
    }, []);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = [];
    this.destination = destinationData;
  }

  calculateEstimatedTripCost(duration, travelers) {
    let totalLodging = this.destination.estimatedLodgingCostPerDay * duration * travelers;
    let totalFlight = this.destination.estimatedFlightCostPerPerson * travelers;
    let totalTripCost = totalLodging + totalFlight;
    let agentFee = totalTripCost * 0.1;
    return (totalTripCost + agentFee);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hhbWJ1cmdlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5SDtBQUM3QjtBQUNPO0FBQy9CO0FBQ3BFLDhCQUE4QixtRkFBMkIsQ0FBQyxzR0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLDZEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLE9BQU8sOEJBQThCLGtCQUFrQiw0Q0FBNEMsOEJBQThCLDBCQUEwQixjQUFjLHFCQUFxQixlQUFlLEVBQUUsUUFBUSxpQkFBaUIsRUFBRSxjQUFjLGdDQUFnQyxFQUFFLGVBQWUsZ0JBQWdCLEVBQUUsVUFBVSxtQkFBbUIsbUJBQW1CLHNCQUFzQiwyQkFBMkIsdUJBQXVCLDBCQUEwQixFQUFFLGlCQUFpQix1QkFBdUIsb0JBQW9CLEVBQUUsc0JBQXNCLGlCQUFpQixrQkFBa0IsNEJBQTRCLGlCQUFpQixtQkFBbUIsRUFBRSxpQkFBaUIsMkJBQTJCLHdCQUF3QixpQkFBaUIsaUJBQWlCLEVBQUUsdUJBQXVCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLGlCQUFpQixvQkFBb0IsZ0JBQWdCLEVBQUUsb0JBQW9CLDhCQUE4QixpQkFBaUIsd0JBQXdCLG1CQUFtQiw0Q0FBNEMsZ0JBQWdCLGdCQUFnQixvQkFBb0IsRUFBRSxjQUFjLHVCQUF1QixFQUFFLFdBQVcscUJBQXFCLGtCQUFrQixtQkFBbUIsZ0VBQWdFLDBCQUEwQixrQkFBa0IsRUFBRSxnQkFBZ0Isd0JBQXdCLDhCQUE4Qix1QkFBdUIseUNBQXlDLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixlQUFlLEVBQUUsb0JBQW9CLGtCQUFrQiwyQkFBMkIsaUJBQWlCLEVBQUUsaUJBQWlCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLEVBQUUsT0FBTyxjQUFjLGVBQWUsRUFBRSxVQUFVLHdCQUF3Qiw0Q0FBNEMsY0FBYyxlQUFlLGtCQUFrQixFQUFFLFFBQVEsbUJBQW1CLDRDQUE0QyxvQkFBb0Isc0JBQXNCLEVBQUUsZ0JBQWdCLG1CQUFtQixFQUFFLGdCQUFnQixvQkFBb0IsRUFBRSxxQkFBcUIsb0JBQW9CLEVBQUUsZ0JBQWdCLG1CQUFtQixFQUFFLGVBQWUsb0JBQW9CLG9CQUFvQixFQUFFLHdCQUF3Qiw0Q0FBNEMsRUFBRSxrQkFBa0IsbUJBQW1CLG9CQUFvQixzQkFBc0IsRUFBRSxxQkFBcUIsa0JBQWtCLGtDQUFrQyxFQUFFLGFBQWEsOEJBQThCLGlCQUFpQix1QkFBdUIsbUJBQW1CLDRDQUE0QyxtQkFBbUIsRUFBRSwwQkFBMEIsbUJBQW1CLHVCQUF1QixFQUFFLGdCQUFnQixrQkFBa0IsRUFBRSxhQUFhLGtCQUFrQixFQUFFLGVBQWUsd0JBQXdCLGlCQUFpQixFQUFFLGtFQUFrRSxpQkFBaUIsc0JBQXNCLHNCQUFzQixFQUFFLGNBQWMscUJBQXFCLEVBQUUsY0FBYyx3QkFBd0IsRUFBRSxzQ0FBc0MseUJBQXlCLHlCQUF5QixFQUFFLHFCQUFxQiwwQkFBMEIsNkJBQTZCLEVBQUUsYUFBYSxxQkFBcUIsa0JBQWtCLEVBQUUsb0JBQW9CLHFCQUFxQix5QkFBeUIsRUFBRSxnQkFBZ0Isb0JBQW9CLEVBQUUsZ0JBQWdCLGtCQUFrQixFQUFFLGVBQWUscUJBQXFCLEVBQUUsNEJBQTRCLGlCQUFpQixFQUFFLEVBQUUsMENBQTBDLGlCQUFpQixzQkFBc0Isc0JBQXNCLEVBQUUsc0NBQXNDLHlCQUF5Qix5QkFBeUIsRUFBRSxxQkFBcUIsMEJBQTBCLDZCQUE2QixFQUFFLGFBQWEscUJBQXFCLGtCQUFrQixFQUFFLG9CQUFvQixxQkFBcUIseUJBQXlCLEVBQUUsY0FBYyxvQkFBb0IsRUFBRSxnQkFBZ0IsMEJBQTBCLGdDQUFnQyx3RUFBd0UsbUNBQW1DLGtDQUFrQyxvQkFBb0IsNkJBQTZCLG9CQUFvQixvQkFBb0IsaUJBQWlCLEVBQUUsd0JBQXdCLGdDQUFnQyxxQkFBcUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsRUFBRSxvQkFBb0Isd0JBQXdCLHdCQUF3QixzQkFBc0IsRUFBRSxnQkFBZ0Isa0JBQWtCLEVBQUUsNEJBQTRCLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxvT0FBb08sWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxpQkFBaUIsS0FBSyxlQUFlLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLEtBQUssV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLG1CQUFtQixPQUFPLFlBQVksaUJBQWlCLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxhQUFhLFdBQVcsVUFBVSxnQkFBZ0IsTUFBTSxrQkFBa0IsT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxpQkFBaUIsTUFBTSxVQUFVLFlBQVksaUJBQWlCLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLGdCQUFnQixLQUFLLFdBQVcsWUFBWSxVQUFVLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsZ0JBQWdCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sYUFBYSxZQUFZLFlBQVksYUFBYSxjQUFjLGlCQUFpQixNQUFNLFlBQVksb0JBQW9CLE1BQU0sZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssWUFBWSxpQkFBaUIsS0FBSyxLQUFLLFVBQVUsZUFBZSxNQUFNLGVBQWUsTUFBTSxpQkFBaUIsUUFBUSxZQUFZLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxlQUFlLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxlQUFlLEtBQUssZUFBZSxLQUFLLGVBQWUsTUFBTSxxQkFBcUIsS0FBSyxLQUFLLFVBQVUsZUFBZSxRQUFRLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxVQUFVLGVBQWUsS0FBSyxVQUFVLGlCQUFpQixNQUFNLGVBQWUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxlQUFlLFdBQVcsVUFBVSxlQUFlLEtBQUssYUFBYSxjQUFjLGNBQWMsV0FBVyxlQUFlLEtBQUssWUFBWSxhQUFhLGdCQUFnQixNQUFNLGVBQWUsS0FBSyw0Q0FBNEMsb0NBQW9DLG9CQUFvQixvQ0FBb0MsZ0NBQWdDLDRCQUE0QixnQkFBZ0IsdUJBQXVCLGlCQUFpQixHQUFHLFFBQVEsbUJBQW1CLGlCQUFpQixzQ0FBc0MsT0FBTyxHQUFHLGVBQWUsa0JBQWtCLEdBQUcsUUFBUSxTQUFTLDZCQUE2Qix5QkFBeUIsNEJBQTRCLGlDQUFpQyw2QkFBNkIsZ0NBQWdDLE9BQU8sR0FBRyx3QkFBd0Isc0JBQXNCLHVCQUF1Qix1QkFBdUIscUJBQXFCLDhDQUE4Qyx3Q0FBd0MsMkNBQTJDLHFCQUFxQixpQ0FBaUMsR0FBRyxnQkFBZ0IseUJBQXlCLHNCQUFzQixHQUFHLHNCQUFzQixtQkFBbUIsb0JBQW9CLDhCQUE4QixtQkFBbUIscUJBQXFCLEdBQUcsaUJBQWlCLDZCQUE2QiwwQkFBMEIsbUJBQW1CLG1CQUFtQixHQUFHLHVCQUF1QiwwQkFBMEIsNkJBQTZCLDRCQUE0QixtQkFBbUIsc0JBQXNCLGtCQUFrQixHQUFHLG9CQUFvQixrQ0FBa0MsbUJBQW1CLDBCQUEwQix3QkFBd0Isb0NBQW9DLGtCQUFrQixrQkFBa0Isc0JBQXNCLEdBQUcsY0FBYyx5QkFBeUIsR0FBRyxVQUFVLHVCQUF1QixvQkFBb0IscUJBQXFCLGtFQUFrRSw0QkFBNEIsb0JBQW9CLEdBQUcsZ0JBQWdCLDBCQUEwQixvQ0FBb0MseUJBQXlCLDBCQUEwQix5Q0FBeUMsOEJBQThCLHlCQUF5QixpQkFBaUIsR0FBRyxvQkFBb0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsR0FBRyxpQkFBaUIsbUJBQW1CLHlCQUF5QixrQkFBa0IsR0FBRyxPQUFPLGdCQUFnQixpQkFBaUIsR0FBRyx1QkFBdUIsdUJBQXVCLGtCQUFrQixpQkFBaUIsVUFBVSwyQkFBMkIsa0NBQWtDLGNBQWMsZUFBZSxrQkFBa0IsR0FBRyxRQUFRLHFCQUFxQixrQ0FBa0Msb0JBQW9CLHNCQUFzQixHQUFHLGdCQUFnQixtQkFBbUIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLGdCQUFnQixtQkFBbUIsR0FBRyxlQUFlLG9CQUFvQixvQkFBb0IsR0FBRyx3QkFBd0Isa0NBQWtDLEdBQUcsa0JBQWtCLG1CQUFtQixvQkFBb0Isc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQixrQ0FBa0MsR0FBRyxhQUFhLGdDQUFnQyxpQkFBaUIsdUJBQXVCLHNCQUFzQixrQ0FBa0MsbUJBQW1CLEdBQUcsMEJBQTBCLHFCQUFxQix1QkFBdUIsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxlQUFlLHdCQUF3QixpQkFBaUIsR0FBRyxxRkFBcUYsaUJBQWlCLHNCQUFzQixzQkFBc0IsS0FBSyxnQkFBZ0IscUJBQXFCLEtBQUssZ0JBQWdCLHdCQUF3QixLQUFLLHdDQUF3Qyx5QkFBeUIseUJBQXlCLEtBQUssdUJBQXVCLDBCQUEwQiw2QkFBNkIsS0FBSyxlQUFlLHFCQUFxQixrQkFBa0IsS0FBSyxzQkFBc0IscUJBQXFCLHlCQUF5QixLQUFLLGtCQUFrQixvQkFBb0IsS0FBSyxrQkFBa0Isa0JBQWtCLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLDhCQUE4QixpQkFBaUIsS0FBSyxHQUFHLG9FQUFvRSxpQkFBaUIsc0JBQXNCLHNCQUFzQixLQUFLLHdDQUF3Qyx5QkFBeUIseUJBQXlCLEtBQUssdUJBQXVCLDBCQUEwQiw2QkFBNkIsS0FBSyxlQUFlLHFCQUFxQixrQkFBa0IsS0FBSyxzQkFBc0IscUJBQXFCLHlCQUF5QixLQUFLLGdCQUFnQixvQkFBb0IsS0FBSyxrQkFBa0IsMEJBQTBCLG1DQUFtQyx1REFBdUQsbUNBQW1DLGtDQUFrQyx5Q0FBeUMsb0JBQW9CLG9CQUFvQixpQkFBaUIsS0FBSywwQkFBMEIsb0NBQW9DLHlCQUF5Qix1QkFBdUIsc0JBQXNCLGlCQUFpQixLQUFLLHNCQUFzQix3QkFBd0Isd0JBQXdCLHNCQUFzQixLQUFLLGtCQUFrQixrQkFBa0IsS0FBSyw4QkFBOEIsaUJBQWlCLEtBQUssS0FBSyxtQkFBbUI7QUFDamxZO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQy9CYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUN6Q3RCO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzVGLFlBQXFJOztBQUVySTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUlULDBMQUFPLGFBQWEsRTs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCLFNBQVMscUJBQXFCO0FBQ3JGO0FBQ0EsNkJBQTZCLDZCQUE2QiwrQ0FBK0MsNkJBQTZCO0FBQ3RJLDZCQUE2QixVQUFVLHNDQUFzQyxVQUFVO0FBQ3ZGLDZCQUE2QixjQUFjLGtEQUFrRCxjQUFjO0FBQzNHLDZCQUE2QixlQUFlLDBEQUEwRCxlQUFlO0FBQ3JILDZCQUE2QixZQUFZLDRDQUE0QyxZQUFZO0FBQ2pHO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0RBQWdELFNBQVM7QUFDekQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCLFNBQVMscUJBQXFCO0FBQ3BGO0FBQ0Esd0JBQXdCLDZCQUE2QiwrQ0FBK0MsNkJBQTZCO0FBQ2pJLHdCQUF3QixVQUFVLHNDQUFzQyxVQUFVO0FBQ2xGLHdCQUF3QixjQUFjLGtEQUFrRCxjQUFjO0FBQ3RHLHdCQUF3QixlQUFlLDBEQUEwRCxlQUFlO0FBQ2hILHdCQUF3QixZQUFZLDRDQUE0QyxZQUFZO0FBQzVGO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQzFDekI7QUFBZSxxRkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNDO0FBQ1E7QUFDRDtBQUNLOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixpREFBTyxJQUFJLFFBQVE7QUFDekMseUJBQXlCLGlEQUFPLElBQUksUUFBUTtBQUM1QyxrQkFBa0IsaURBQU8sSUFBSSxRQUFRO0FBQ3JDLDBCQUEwQixpREFBTyxJQUFJLFFBQVEsYUFBYSxhQUFhO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2Qyx3QkFBd0I7QUFDckU7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2QseURBQXlELHFDQUFxQztBQUM5Rix5REFBeUQscUNBQXFDO0FBQzlGOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pELG1CQUFtQixpREFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQSwyRUFBMkUsK0RBQStEO0FBQzFJO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN4V0E7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ3JGdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLG1FQUFJLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ1bCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0VENERBO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5saSB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG4gIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MDM2ODsgfVxcblxcbi5uYXYtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbmxpIGEge1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi5sb2dpbi10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE1JTsgfVxcblxcbi5sb2dpbi1jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMiU7IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA1MDBweDsgfVxcblxcbi5sb2dpbi1mb3JtLWZpZWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiA1JSAwO1xcbiAgcGFkZGluZzogNSUgMTUlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwMzY4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiAjRjhGOUZBO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07IH1cXG5cXG4ubWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY2FyZCB7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4OyB9XFxuXFxuLmluZm8tY2FyZCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZDNzU3RDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAycHggIzZDNzU3RDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlOyB9XFxuXFxuLmltYWdlLXN0eWxpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4udHJpcC1pbWFnZSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyNSU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI0Y4RjlGQTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjZDkwMzY4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLnVzZXItdmlldyB7XFxuICBtYXJnaW4tdG9wOiA1JTsgfVxcblxcbi5hbGwtdHJpcHMge1xcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuXFxuLnBsYW4tdHJpcC1hcmVhIHtcXG4gIG1hcmdpbi1sZWZ0OiAyJTsgfVxcblxcbi55ZWFyLWNvc3Qge1xcbiAgbWFyZ2luLXRvcDogNSU7IH1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogLTMlOyB9XFxuXFxuLmRlc3RpbmF0aW9ucy1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG4ubGFiZWwtbmFtZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5ib29rLXRyaXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTAzNjg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI0Y4RjlGQTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTEuNXJlbTsgfVxcblxcbi5lc3RpbWF0ZWQtdHJpcC1jb3N0IHtcXG4gIGNvbG9yOiAjZDkwMzY4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmhhbWJ1cmdlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRpc2FibGVkIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmxvZ2luLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDIxJTsgfVxcbiAgLm1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tdG9wOiAyJTsgfVxcbiAgLm5hdi1iYXIge1xcbiAgICBmb250LXNpemU6IC42NXJlbTsgfVxcbiAgaDEsXFxuICAueWVhci10ZXh0LFxcbiAgLmFsbC10cmlwcyB7XFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuYm9vay10cmlwLWZvcm0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHBhZGRpbmc6IDElOyB9XFxuICAubGFiZWwtc3R5bGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuaW5mby1jYXJkIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5ncmVldGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDAlOyB9XFxuICAudHJhdmVsLWNhcmQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5sb2dpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAzNSU7IH1cXG4gIGgxLFxcbiAgLnllYXItdGV4dCxcXG4gIC5hbGwtdHJpcHMge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmJvb2stdHJpcC1mb3JtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBwYWRkaW5nOiAyJTsgfVxcbiAgLmxhYmVsLXN0eWxpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5oYW1idXJnZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZBO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNi41dmg7XFxuICAgIHdpZHRoOiAxNS41dnc7XFxuICAgIHotaW5kZXg6IDI7IH1cXG4gIC5oYW1idXJnZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUQ0REE7XFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgICBtYXJnaW4tdG9wOiA3NSU7XFxuICAgIHotaW5kZXg6IDI7IH1cXG4gIC5kcm9wZG93bi1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAuODByZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAuMzVyZW07IH1cXG4gIC5pbmZvLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLnRyYXZlbC1jYXJkLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDA7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25hdmlnYXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2NhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSx5QkNDZ0I7RURBaEIsYUFBYTtFQUNiLHFDQ0dNO0VERk4seUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVksRUFBQTtFQURoQjtJQUlRLHlCQ1hVLEVBQUE7O0FEZWxCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBRVEsY0N6Qlk7RUQwQlosY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBRTlCN0I7RUFD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QixhR3dLeUI7SUh2S3pCLHNCR3VLaUM7SUFDakMsYUFBYTtJQUNiLGFBQWE7SUFDYixVQUFVLEVBQUE7RUFHWjtJQUNFLHlCSHZMZ0I7SUd3TGhCLGNIMUxnQjtJRzJMaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFHWjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxVQUFVLEVBQUEsRUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ1bCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQtZm9udDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3QtcGluaztcXG4gICAgfVxcbn1cXG5cXG4ubmF2LWxlZnQge1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxubGkge1xcbiAgICBhIHtcXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxufVwiLFwiJGRhcmstZ3JlZW46ICMyMTI1Mjk7XFxuJG9mZi13aGl0ZTogI0Y4RjlGQTtcXG4kbGlnaHQtZ3JleTogI0NFRDREQTtcXG4kc2xhdGUtZ3JleTogIzZDNzU3RDtcXG4kaG90LXBpbms6ICNkOTAzNjg7XFxuJG1vbnRzZXJyYXQtZm9udDogJ01vbnRzZXJyYXQnLFxcbnNhbnMtc2VyaWY7XFxuJHNoYWRvdzogMHB4IDNweCAxMHB4IDJweCAkc2xhdGUtZ3JleTtcXG5cXG5AbWl4aW4gZmxleERpc3BsYXkoJGZsZXgsICRkaXJlY3Rpb24pIHtcXG4gICAgZGlzcGxheTogJGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcbn1cIixcIi5sb2dpbi10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxufVxcblxcbi5sb2dpbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbn1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4ubG9naW4tZm9ybS1maWVsZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiA1JSAwO1xcbiAgICBwYWRkaW5nOiA1JSAxNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRob3QtcGluaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogJG9mZi13aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0LWZvbnQ7XFxuICAgIHBhZGRpbmc6IDQlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsXCIuY2FyZCB7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uaW5mby1jYXJkIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNsYXRlLWdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcXG4gICAgQGluY2x1ZGUgZmxleERpc3BsYXkoZmxleCwgY29sdW1uKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmltYWdlLXN0eWxpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50cmlwLWltYWdlIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cIixcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnbmF2aWdhdGlvbic7XFxuQGltcG9ydCAnbG9naW4nO1xcbkBpbXBvcnQgJ2NhcmQnO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogJG9mZi13aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdC1mb250O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiAkaG90LXBpbms7XFxuICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQtZm9udDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udXNlci12aWV3IHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG4uYWxsLXRyaXBzIHtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuXFxuLnBsYW4tdHJpcC1hcmVhIHtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuXFxuLnllYXItY29zdCB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuXFxuLmdyZWV0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi10b3A6IC0zJTtcXG59XFxuXFxuLmRlc3RpbmF0aW9ucy1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdC1mb250O1xcbn1cXG5cXG4ubGFiZWwtbmFtZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJvb2stdHJpcC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG90LXBpbms7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogJG9mZi13aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdC1mb250O1xcbiAgd2lkdGg6IDExLjVyZW07XFxufVxcblxcbi5lc3RpbWF0ZWQtdHJpcC1jb3N0IHtcXG4gIGNvbG9yOiAkaG90LXBpbms7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLy8gSVBBRC9UQUJMRVRTXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5sb2dpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyMSU7XFxuICB9XFxuXFxuICAubWVzc2FnZSB7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbiAgfVxcblxcbiAgLm5hdi1iYXIge1xcbiAgICBmb250LXNpemU6IC42NXJlbTtcXG4gIH1cXG5cXG4gIGgxLFxcbiAgLnllYXItdGV4dCxcXG4gIC5hbGwtdHJpcHMge1xcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib29rLXRyaXAtZm9ybSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgfVxcblxcbiAgLmxhYmVsLXN0eWxpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaW5mby1jYXJkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZ3JlZXRpbmcge1xcbiAgICBtYXJnaW4tdG9wOiAwJTtcXG4gIH1cXG5cXG4gIC50cmF2ZWwtY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG4vLyAvU01BUlRQSE9ORVMvTU9CSUxFXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5sb2dpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAzNSU7XFxuICB9XFxuXFxuICBoMSxcXG4gIC55ZWFyLXRleHQsXFxuICAuYWxsLXRyaXBzIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm9vay10cmlwLWZvcm0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gIH1cXG5cXG4gIC5sYWJlbC1zdHlsaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9oYW1idXJnZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgQGluY2x1ZGUgZmxleERpc3BsYXkoZmxleCwgY29sdW1uKTtcXG4gICAgaGVpZ2h0OiA2LjV2aDtcXG4gICAgd2lkdGg6IDE1LjV2dztcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xcbiAgICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIG1hcmdpbi10b3A6IDc1JTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAuODByZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAuMzVyZW07XFxuICB9XFxuXFxuICAuaW5mby1jYXJkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAudHJhdmVsLWNhcmQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIEFwaUNhbGwge1xuICBjb25zdHJ1Y3Rvcih1cmwsIG5hbWUpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0UmVxdWVzdCgpIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy51cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhID0gZGF0YVt0aGlzLm5hbWVdO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cblxuICBnZXRTaW5nbGVSZXF1ZXN0KCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxuXG4gIHBvc3RSZXF1ZXN0KG5ld1RyaXApIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdUcmlwKSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpQ2FsbDsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJsZXQgZG9tVXBkYXRlcyA9IHtcbiAgICBkaXNwbGF5VHJpcHModHJpcHNMaXN0LCB0cmlwc0FyZWEpIHtcbiAgICAgICAgdHJpcHNBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0cmlwc0xpc3QudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgICAgICAgIGxldCB0cmlwc0hUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2luZm8tY2FyZCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1zdHlsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0cmlwLmRlc3RpbmF0aW9uLmltYWdlfVwiIGFsdD1cIiR7dHJpcC5kZXN0aW5hdGlvbi5hbHR9XCIgY2xhc3M9XCJ0cmlwLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5kZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0tZGVzdGluYXRpb25cIiBjbGFzcz1cInRyaXAtZGF0ZVwiPkRlc3RpbmF0aW9uOiAke3RyaXAuZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5kYXRlfS1kYXRlXCIgY2xhc3M9XCJ0cmlwLWRhdGVcIj5UcmlwIERhdGU6ICR7dHJpcC5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAuZHVyYXRpb259LWR1cmF0aW9uXCIgY2xhc3M9XCJ0cmlwLWR1cmF0aW9uXCI+VHJpcCBEdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAudHJhdmVsZXJzfS10cmF2ZWxlcnNcIiBjbGFzcz1cInRyaXAtdHJhdmVsZXJzXCI+TnVtYmVyIG9mIFRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLnN0YXR1c30tc3RhdHVzXCIgY2xhc3M9XCJ0cmlwLXN0YXR1c1wiPlRyaXAgU3RhdHVzOiAke3RyaXAuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIHRyaXBzQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRyaXBzSFRNTClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgZGlzcGxheU90aGVyVHJpcHMobGlzdFR5cGUsIGxpc3RBcmVhLCBsaXN0RGlzcGxheSwgcGFnZVRleHQsIHRyaXBUeXBlKSB7XG4gICAgICAgIGlmIChsaXN0VHlwZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBhZ2VUZXh0LmlubmVyVGV4dCA9IGBZb3UgSGF2ZSBObyAke3RyaXBUeXBlfSBUcmlwcyFgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0QXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGxpc3RUeXBlLmZvckVhY2godHJpcCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3REaXNwbGF5ID0gYFxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvLWNhcmQnPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLXN0eWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dHJpcC5kZXN0aW5hdGlvbi5pbWFnZX1cIiBhbHQ9XCIke3RyaXAuZGVzdGluYXRpb24uYWx0fVwiIGNsYXNzPVwidHJpcC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5kZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0tZGVzdGluYXRpb25cIiBjbGFzcz1cInRyaXAtZGF0ZVwiPkRlc3RpbmF0aW9uOiAke3RyaXAuZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAuZGF0ZX0tZGF0ZVwiIGNsYXNzPVwidHJpcC1kYXRlXCI+VHJpcCBEYXRlOiAke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5kdXJhdGlvbn0tZHVyYXRpb25cIiBjbGFzcz1cInRyaXAtZHVyYXRpb25cIj5UcmlwIER1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAudHJhdmVsZXJzfS10cmF2ZWxlcnNcIiBjbGFzcz1cInRyaXAtdHJhdmVsZXJzXCI+TnVtYmVyIG9mIFRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5zdGF0dXN9LXN0YXR1c1wiIGNsYXNzPVwidHJpcC1zdGF0dXNcIj5UcmlwIFN0YXR1czogJHt0cmlwLnN0YXR1c308L3A+XG4gICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgbGlzdEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsaXN0RGlzcGxheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaGFtYnVyZ2VyLnBuZ1wiOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCBUcmlwIGZyb20gJy4vdHJpcCc7XG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi90cmF2ZWxlcic7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL2FwaUNhbGxzJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbi8vIEdMT0JBTCBWQVJJQUJMRVNcblxubGV0IHRyYXZlbGVyQXBpO1xubGV0IGRlc3RpbmF0aW9uQXBpO1xubGV0IHRyaXBBcGk7XG5sZXQgZGVzdGluYXRpb25JbmZvO1xubGV0IHRyYXZlbGVySW5mbztcbmxldCB0cmlwSW5mbztcbmxldCBjdXJyZW50VXNlckluZm87XG5sZXQgdHJhdmVsZXI7XG5sZXQgY3VycmVudFRyYXZlbGVyO1xubGV0IG5ld1RyaXA7XG5sZXQgdHJpcDtcbmxldCBjaG9zZW5Vc2VySUQ7XG5jb25zdCBiYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEnO1xuXG4vLyBRVUVSWSBTRUxFQ1RPUlNcblxuY29uc3QgdHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWwtY2FyZC1jb250YWluZXJcIik7XG5jb25zdCBhbGxUcmlwc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10cmlwc1wiKTtcbmNvbnN0IGRlc3RpbmF0aW9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3RpbmF0aW9ucy1saXN0XCIpO1xuY29uc3QgcGxhblRyaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFuLXRyaXAtYXJlYVwiKTtcblxuY29uc3QgcGVuZGluZ1RyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZW5kaW5nLXRyaXBzXCIpO1xuY29uc3QgcGVuZGluZ1RyaXBzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10cmlwcy1hcmVhXCIpO1xuXG5jb25zdCB1cGNvbWluZ1RyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwc1wiKTtcbmNvbnN0IHVwY29taW5nVHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy1hcmVhXCIpO1xuXG5jb25zdCBwYXN0VHJpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3QtdHJpcHNcIik7XG5jb25zdCBwYXN0VHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXN0LXRyaXBzLWFyZWFcIik7XG5cbmNvbnN0IGN1cnJlbnRUcmlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10cmlwc1wiKTtcbmNvbnN0IGN1cnJlbnRUcmlwc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdHJpcHMtYXJlYVwiKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmNvbnN0IGJvb2tUcmF2ZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stdHJhdmVsLWJ1dHRvblwiKTtcbmNvbnN0IGNhbGN1bGF0ZVRyYXZlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsY3VsYXRlLWNvc3QtYnV0dG9uXCIpO1xuY29uc3QgbG9naW5TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XG5cbmNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cmF0aW9uXCIpO1xuY29uc3QgdHJhdmVsZXJzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVyc1wiKTtcbmNvbnN0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1waWNrZXJcIik7XG5jb25zdCBlc3RpbWF0ZWRUcmlwQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXN0aW1hdGVkLXRyaXAtY29zdFwiKTtcbmNvbnN0IGJvb2tUcmlwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay10cmlwLWZvcm1cIik7XG5cbmNvbnN0IHVzZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLXZpZXdcIik7XG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLXBhZ2VcIik7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIik7XG5cbmNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcbmNvbnN0IGhhbWJ1cmdlck1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItY29udGVudFwiKTtcblxuY29uc3QgbW9iaWxlSG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLW1vYmlsZScpO1xuY29uc3QgbW9iaWxlQ3VycmVudFRyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdHJpcHMtbW9iaWxlJyk7XG5jb25zdCBtb2JpbGVVcGNvbWluZ1RyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy1tb2JpbGVcIik7XG5jb25zdCBtb2JpbGVQZW5kaW5nVHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlbmRpbmctdHJpcHMtbW9iaWxlXCIpO1xuY29uc3QgbW9iaWxlUGFzdFRyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXN0LXRyaXBzLW1vYmlsZVwiKTtcblxuY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcm5hbWVcIik7XG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZFwiKTtcblxuLy8gRVZFTlQgTElTVEVORVJTXG51c2VybmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmIChwYXNzd29yZElucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICB0b2dnbGVCdXR0b24obG9naW5TdWJtaXRCdXR0b24sIHVzZXJuYW1lSW5wdXQpO1xuICAgIH1cbn0pXG5cbnBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgICBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICB0b2dnbGVCdXR0b24obG9naW5TdWJtaXRCdXR0b24sIHBhc3N3b3JkSW5wdXQpO1xuICAgIH1cbn0pO1xuXG5jdXJyZW50VHJpcHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlDdXJyZW50VHJpcHMpO1xudXBjb21pbmdUcmlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVVwY29taW5nVHJpcHMpO1xucGVuZGluZ1RyaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UGVuZGluZ1RyaXBzKTtcbnBhc3RUcmlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVBhc3RUcmlwcyk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXR1cm5Ib21lKTtcblxuY2FsY3VsYXRlVHJhdmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwbGF5RXN0aW1hdGVkQ29zdHMoZXZlbnQpO1xuICAgIGhpZGUoY2FsY3VsYXRlVHJhdmVsQnV0dG9uKTtcbiAgICBzaG93KGJvb2tUcmF2ZWxCdXR0b24pO1xuICAgIHNob3coZXN0aW1hdGVkVHJpcENvc3QpO1xuICAgIHN1Ym1pdFRyaXBSZXF1ZXN0KCk7XG59KVxuXG5ib29rVHJhdmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBoaWRlKGJvb2tUcmF2ZWxCdXR0b24pO1xuICAgIHNob3coY2FsY3VsYXRlVHJhdmVsQnV0dG9uKTtcbiAgICBoaWRlKGVzdGltYXRlZFRyaXBDb3N0KTtcbiAgICB1cGRhdGVOZXdUcmlwQm9va2luZ3MoZXZlbnQpO1xuICAgIGNsZWFyVHJhdmVsSW5wdXRzKCk7XG59KTtcblxubG9naW5TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBzaG93KHVzZXJWaWV3KTtcbiAgICBzaG93KG5hdmJhcik7XG4gICAgaGlkZShsb2dpblBhZ2UpO1xuICAgIHNob3coaGFtYnVyZ2VyTWVudSk7XG4gICAgbG9naW5Vc2VyKGV2ZW50KTtcbn0pO1xuXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVIYW1idXJnZXJNZW51RHJvcGRvd24pO1xubW9iaWxlSG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV0dXJuSG9tZSk7XG5cbm1vYmlsZUN1cnJlbnRUcmlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUN1cnJlbnRUcmlwcyk7XG5tb2JpbGVVcGNvbWluZ1RyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VXBjb21pbmdUcmlwcyk7XG5tb2JpbGVQZW5kaW5nVHJpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQZW5kaW5nVHJpcHMpO1xubW9iaWxlUGFzdFRyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UGFzdFRyaXBzKTtcblxuZnVuY3Rpb24gbG9naW5Vc2VyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjaG9zZW5Vc2VySUQgPSB1c2VybmFtZUlucHV0LnZhbHVlLnNwbGl0KFwiXCIpLnNwbGljZSg4LCAzKS5qb2luKFwiXCIpO1xuICAgIGlmICh1c2VybmFtZUlucHV0LnZhbHVlLnNsaWNlKDAsIDgpID09PSBcInRyYXZlbGVyXCIgJiYgdXNlcm5hbWVJbnB1dC52YWx1ZS5zbGljZSg4KSA+IDAgJiYgdXNlcm5hbWVJbnB1dC52YWx1ZS5zbGljZSg4KSA8PSA1MCAmJiBwYXNzd29yZElucHV0LnZhbHVlID09PSAndHJhdmVsZXIyMDIwJykge1xuICAgICAgICBnZXRBbGxEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZSh1c2VyVmlldyk7XG4gICAgICAgIHNob3cobG9naW5QYWdlKTtcbiAgICAgICAgaGlkZShuYXZiYXIpO1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKCdZb3UgaGF2ZSBlbnRlcmVkIHRoZSB3cm9uZyB1c2VybmFtZSBvciBwYXNzd29yZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsbERhdGEoKSB7XG4gICAgdHJhdmVsZXJBcGkgPSBuZXcgQXBpQ2FsbChgJHtiYXNlVVJMfS90cmF2ZWxlcnNgLCBcInRyYXZlbGVyc1wiKTtcbiAgICBkZXN0aW5hdGlvbkFwaSA9IG5ldyBBcGlDYWxsKGAke2Jhc2VVUkx9L2Rlc3RpbmF0aW9uc2AsIFwiZGVzdGluYXRpb25zXCIpO1xuICAgIHRyaXBBcGkgPSBuZXcgQXBpQ2FsbChgJHtiYXNlVVJMfS90cmlwc2AsIFwidHJpcHNcIik7XG4gICAgY3VycmVudFRyYXZlbGVyID0gbmV3IEFwaUNhbGwoYCR7YmFzZVVSTH0vdHJhdmVsZXJzLyR7Y2hvc2VuVXNlcklEfWApO1xuICAgIG9uTG9hZCgpO1xufVxuXG5mdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgbGV0IHRyYXZlbGVyRGF0YSA9IHRyYXZlbGVyQXBpLmdldFJlcXVlc3QoKTtcbiAgICBsZXQgZGVzdGluYXRpb25EYXRhID0gZGVzdGluYXRpb25BcGkuZ2V0UmVxdWVzdCgpO1xuICAgIGxldCB0cmlwRGF0YSA9IHRyaXBBcGkuZ2V0UmVxdWVzdCgpO1xuICAgIGxldCBzaW5nbGVEYXRhID0gY3VycmVudFRyYXZlbGVyLmdldFNpbmdsZVJlcXVlc3QoKTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChbdHJhdmVsZXJEYXRhLCBkZXN0aW5hdGlvbkRhdGEsIHRyaXBEYXRhLCBzaW5nbGVEYXRhXSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyYXZlbGVySW5mbyA9IGRhdGFbMF07XG4gICAgICAgICAgICBkZXN0aW5hdGlvbkluZm8gPSBkYXRhWzFdO1xuICAgICAgICAgICAgdHJpcEluZm8gPSBkYXRhWzJdO1xuICAgICAgICAgICAgY3VycmVudFVzZXJJbmZvID0gZGF0YVszXTtcbiAgICAgICAgICAgIGJ1aWxkUGFnZShjdXJyZW50VXNlckluZm8sIHRyaXBJbmZvLCBkZXN0aW5hdGlvbkluZm8pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVOZXdUcmlwQm9va2luZ3MoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldEFsbERhdGEoY2hvc2VuVXNlcklEKTtcbn1cblxuZnVuY3Rpb24gZmlsbERyb3Bkb3duKCkge1xuICAgIGxldCBzb3J0ZWREZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbkluZm8uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5kZXN0aW5hdGlvbiA8IGIuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgfSlcbiAgICBzb3J0ZWREZXN0aW5hdGlvbnMuZm9yRWFjaCgoZGVzdGluYXRpb24pID0+IHtcbiAgICAgICAgZGVzdGluYXRpb25zTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgJycpO1xuICAgICAgICBsZXQgZGVzdGluYXRpb25zT3B0aW9ucyA9IGA8b3B0aW9uPiR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9vcHRpb24+YDtcbiAgICAgICAgZGVzdGluYXRpb25zTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGVzdGluYXRpb25zT3B0aW9ucyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGFnZShjdXJyZW50VXNlckluZm8sIHRyaXBJbmZvLCBkZXN0aW5hdGlvbkluZm8pIHtcbiAgICBjb25zdCB5ZWFyQ29zdDIwMjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllYXItY29zdC0yMDIwXCIpO1xuICAgIGNvbnN0IHllYXJDb3N0MjAxOSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueWVhci1jb3N0LTIwMTlcIik7XG4gICAgY3JlYXRlVHJhdmVsZXJQcm9maWxlKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcHModHJhdmVsZXIsIHRyaXBzQXJlYSk7XG4gICAgeWVhckNvc3QyMDE5LmlubmVyVGV4dCA9IGBZb3VyIDIwMjAgdHJpcCBjb3N0IGlzOiAkJHt0cmF2ZWxlci5jYWxjdWxhdGVUb3RhbFNwZW50KFwiMjAyMFwiKX1gO1xuICAgIHllYXJDb3N0MjAyMC5pbm5lclRleHQgPSBgWW91ciAyMDIxIHRyaXAgY29zdCBpczogJCR7dHJhdmVsZXIuY2FsY3VsYXRlVG90YWxTcGVudChcIjIwMjFcIil9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhdmVsZXJQcm9maWxlKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbykge1xuICAgIGNvbnN0IGdyZWV0VXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZXRpbmdcIik7XG4gICAgZ3JlZXRVc2VyLmlubmVyVGV4dCA9IGBIZWxsbywgJHtjdXJyZW50VXNlckluZm8ubmFtZX0hYFxuICAgIHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbyk7XG4gICAgZmlsbERyb3Bkb3duKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdUcmlwKCkge1xuICAgIGxldCB0cmF2ZWxlcklucHV0VmFsdWUgPSBwYXJzZUludCh0cmF2ZWxlcnNJbnB1dC52YWx1ZSk7XG4gICAgbGV0IGR1cmF0aW9uSW5wdXRWYWx1ZSA9IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpO1xuICAgIGxldCBuZXdEYXRlRm9ybWF0ID0gc3RhcnREYXRlLnZhbHVlLnNwbGl0KFwiLVwiKS5qb2luKFwiL1wiKTtcbiAgICBsZXQgZGVzdGluYXRpb25JbnB1dFZhbHVlID0gZmlsdGVyRGVzdGluYXRpb25zKClcbiAgICBsZXQgdW5pcXVlSUQgPSBnZXROZXdJRCgpO1xuXG4gICAgbmV3VHJpcCA9IHtcbiAgICAgICAgaWQ6IHVuaXF1ZUlELFxuICAgICAgICB1c2VySUQ6IGN1cnJlbnRVc2VySW5mby5pZCxcbiAgICAgICAgZGVzdGluYXRpb25JRDogZGVzdGluYXRpb25JbnB1dFZhbHVlLFxuICAgICAgICB0cmF2ZWxlcnM6IHRyYXZlbGVySW5wdXRWYWx1ZSxcbiAgICAgICAgZGF0ZTogbmV3RGF0ZUZvcm1hdCxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uSW5wdXRWYWx1ZSxcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gICAgfTtcbiAgICByZXR1cm4gbmV3VHJpcDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyRGVzdGluYXRpb25zKCkge1xuICAgIGxldCBkZXN0aW5hdGlvbkJvb2tpbmdJRDtcbiAgICBkZXN0aW5hdGlvbkluZm8uZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbiA9PT0gZGVzdGluYXRpb25zTGlzdC52YWx1ZSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25Cb29raW5nSUQgPSBkZXN0aW5hdGlvbi5pZDtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uQm9va2luZ0lEO1xufVxuXG5mdW5jdGlvbiBnZXROZXdJRCgpIHtcbiAgICByZXR1cm4gdHJpcEluZm8ubGVuZ3RoICsgMVxufVxuXG5mdW5jdGlvbiBzdWJtaXRUcmlwUmVxdWVzdCgpIHtcbiAgICBsZXQgcG9zdE9wdGlvbiA9IG1ha2VOZXdUcmlwKCk7XG4gICAgbGV0IG5ld1RyaXBCb29raW5nID0gbmV3IEFwaUNhbGwoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiXG4gICAgKTtcbiAgICBuZXdUcmlwQm9va2luZy5wb3N0UmVxdWVzdChwb3N0T3B0aW9uKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VcIik7XG4gICAgbWVzc2FnZXMuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUcmF2ZWxJbnB1dHMoKSB7XG4gICAgZHVyYXRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgdHJhdmVsZXJzSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHN0YXJ0RGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzdGluYXRpb25zTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcbn1cblxuZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJ1dHRvbihidXR0b24sIGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51RHJvcGRvd24oKSB7XG4gICAgaGFtYnVyZ2VyTWVudUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVzdGltYXRlZENvc3RzKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGRlc3RpbmF0aW9uSW5mby5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uc0xpc3QudmFsdWUgPT09IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB0cmlwID0gbmV3IFRyaXAodHJpcEluZm8sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvblZhbHVlID0gZHVyYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0cmF2ZWxlcnNWYWx1ZSA9IHRyYXZlbGVyc0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgZXN0aW1hdGVkVHJpcENvc3QuaW5uZXJUZXh0ID0gYFlvdXIgRXN0aW1hdGVkIFRyaXAgQ29zdCBJczogJCR7dHJpcC5jYWxjdWxhdGVFc3RpbWF0ZWRUcmlwQ29zdChkdXJhdGlvblZhbHVlLCB0cmF2ZWxlcnNWYWx1ZSl9YDtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQZW5kaW5nVHJpcHMoKSB7XG4gICAgY29uc3QgcGVuZGluZ1RyaXBzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10cmlwcy10ZXh0XCIpO1xuICAgIGxldCBwZW5kaW5nVHJpcHNMaXN0ID0gdHJhdmVsZXIuZ2V0UGVuZGluZ1RyaXBzKCk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5T3RoZXJUcmlwcyhwZW5kaW5nVHJpcHNMaXN0LCBwZW5kaW5nVHJpcHNBcmVhLCAncGVuZGluZ0hUTUwnLCBwZW5kaW5nVHJpcHNUZXh0LCBcIlBlbmRpbmdcIik7XG4gICAgaGlkZSh0cmlwc0FyZWEpO1xuICAgIGhpZGUocGxhblRyaXBBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBzaG93KHBlbmRpbmdUcmlwc0FyZWEpO1xuICAgIGhpZGUocGFzdFRyaXBzQXJlYSk7XG4gICAgaGlkZShjdXJyZW50VHJpcHNBcmVhKTtcbiAgICBoaWRlKGFsbFRyaXBzVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlVcGNvbWluZ1RyaXBzKCkge1xuICAgIGNvbnN0IHVwY29taW5nVHJpcHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy10ZXh0XCIpO1xuICAgIGxldCB1cGNvbWluZ1RyaXBzTGlzdCA9IHRyYXZlbGVyLmdldFVwY29taW5nVHJpcHMoKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlPdGhlclRyaXBzKFxuICAgICAgICB1cGNvbWluZ1RyaXBzTGlzdCxcbiAgICAgICAgdXBjb21pbmdUcmlwc0FyZWEsXG4gICAgICAgIFwidXBjb21pbmdIVE1MXCIsXG4gICAgICAgIHVwY29taW5nVHJpcHNUZXh0LFxuICAgICAgICBcIlVwY29taW5nXCJcbiAgICApO1xuICAgIGhpZGUodHJpcHNBcmVhKTtcbiAgICBoaWRlKHBsYW5UcmlwQXJlYSk7XG4gICAgc2hvdyh1cGNvbWluZ1RyaXBzQXJlYSk7XG4gICAgaGlkZShwZW5kaW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKHBhc3RUcmlwc0FyZWEpO1xuICAgIGhpZGUoY3VycmVudFRyaXBzQXJlYSk7XG4gICAgaGlkZShhbGxUcmlwc1RleHQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFzdFRyaXBzKCkge1xuICAgIGNvbnN0IHBhc3RUcmlwc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3QtdHJpcHMtdGV4dFwiKTtcbiAgICBsZXQgcGFzdFRyaXBzTGlzdCA9IHRyYXZlbGVyLmdldFBhc3RUcmlwcygpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU90aGVyVHJpcHMoXG4gICAgICAgIHBhc3RUcmlwc0xpc3QsXG4gICAgICAgIHBhc3RUcmlwc0FyZWEsXG4gICAgICAgIFwicGFzdEhUTUxcIixcbiAgICAgICAgcGFzdFRyaXBzVGV4dCxcbiAgICAgICAgXCJQcmV2aW91c1wiXG4gICAgKTtcbiAgICBoaWRlKHRyaXBzQXJlYSk7XG4gICAgaGlkZShwbGFuVHJpcEFyZWEpO1xuICAgIGhpZGUocGVuZGluZ1RyaXBzQXJlYSk7XG4gICAgc2hvdyhwYXN0VHJpcHNBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKGN1cnJlbnRUcmlwc0FyZWEpO1xuICAgIGhpZGUoYWxsVHJpcHNUZXh0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUcmlwcygpIHtcbiAgICBjb25zdCBjdXJyZW50VHJpcHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRyaXBzLXRleHRcIik7XG4gICAgbGV0IGN1cnJlbnRUcmlwc0xpc3QgPSB0cmF2ZWxlci5nZXRDdXJyZW50VHJpcHMoKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlPdGhlclRyaXBzKFxuICAgICAgICBjdXJyZW50VHJpcHNMaXN0LFxuICAgICAgICBjdXJyZW50VHJpcHNBcmVhLFxuICAgICAgICBcImN1cnJlbnRIVE1MXCIsXG4gICAgICAgIGN1cnJlbnRUcmlwc1RleHQsXG4gICAgICAgIFwiQ3VycmVudFwiXG4gICAgKTtcbiAgICBoaWRlKHRyaXBzQXJlYSk7XG4gICAgaGlkZShwbGFuVHJpcEFyZWEpO1xuICAgIGhpZGUocGVuZGluZ1RyaXBzQXJlYSk7XG4gICAgaGlkZShwYXN0VHJpcHNBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBzaG93KGN1cnJlbnRUcmlwc0FyZWEpO1xuICAgIGhpZGUoYWxsVHJpcHNUZXh0KTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuSG9tZSgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwcyh0cmF2ZWxlciwgdHJpcHNBcmVhKTtcbiAgICBhbGxUcmlwc1RleHQuaW5uZXJIVE1MID0gXCJBbGwgVHJpcHNcIjtcbiAgICBzaG93KHRyaXBzQXJlYSk7XG4gICAgc2hvdyhwbGFuVHJpcEFyZWEpO1xuICAgIGhpZGUocGVuZGluZ1RyaXBzQXJlYSk7XG4gICAgaGlkZShwYXN0VHJpcHNBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKGN1cnJlbnRUcmlwc0FyZWEpO1xuICAgIHNob3coYWxsVHJpcHNUZXh0KTtcbn0iLCJpbXBvcnQgVHJpcCBmcm9tICcuL3RyaXAnO1xuXG5jbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyRGF0YSwgdHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuaWQgPSB0cmF2ZWxlckRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gdHJhdmVsZXJEYXRhLm5hbWU7XG4gICAgdGhpcy50cmlwRGF0YSA9IHRyaXBEYXRhO1xuICAgIHRoaXMuZGVzdGluYXRpb25EYXRhID0gZGVzdGluYXRpb25EYXRhO1xuICAgIHRoaXMudHJpcHMgPSB0aGlzLmdldEFsbFRyYXZlbGVyc1RyaXBzKCkgfHwgW107XG4gIH1cblxuICBnZXRBbGxUcmF2ZWxlcnNUcmlwcygpIHtcbiAgICBpZiAodGhpcy50cmlwRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmlwRGF0YS5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb25EYXRhLmZvckVhY2goKGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pZCA9PT0gdHJpcC51c2VySUQgJiZcbiAgICAgICAgICAgIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRvdGFsLnB1c2gobmV3IFRyaXAodHJpcCwgZGVzdGluYXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxTcGVudCh5ZWFyKSB7XG4gICAgbGV0IHRvdGFsTG9kZ2luZztcbiAgICBsZXQgdG90YWxGbGlnaHQ7XG4gICAgbGV0IGFnZW50RmVlO1xuICAgIGxldCB0b3RhbFRyaXBDb3N0ID0gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBpZiAodHJpcC5kYXRlLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgICAgIHRvdGFsTG9kZ2luZyA9IHRyaXAuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0cmlwLmR1cmF0aW9uO1xuICAgICAgICB0b3RhbEZsaWdodCA9IHRyaXAuZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbjtcbiAgICAgICAgdG90YWwgKz0gdG90YWxMb2RnaW5nICsgdG90YWxGbGlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgMCk7XG4gICAgYWdlbnRGZWUgPSB0b3RhbFRyaXBDb3N0ICogMC4xO1xuICAgIHJldHVybiBhZ2VudEZlZSArIHRvdGFsVHJpcENvc3Q7XG4gIH1cblxuICBnZXRQZW5kaW5nVHJpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMuZmlsdGVyKCh0cmlwKSA9PiB0cmlwLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFRyaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGxldCBlbmREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGVuZERhdGUuc2V0RGF0ZShlbmREYXRlLmdldERhdGUoKSArIHRyaXAuZHVyYXRpb24pO1xuICAgICAgaWYgKHN0YXJ0RGF0ZSA8IHRvZGF5ICYmIGVuZERhdGUgPiB0b2RheSkge1xuICAgICAgICB0b3RhbC5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldFBhc3RUcmlwcygpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgZW5kRGF0ZS5zZXREYXRlKGVuZERhdGUuZ2V0RGF0ZSgpICsgdHJpcC5kdXJhdGlvbik7XG4gICAgICBpZiAoZW5kRGF0ZSA8IHRvZGF5KSB7XG4gICAgICAgIHRvdGFsLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZ2V0VXBjb21pbmdUcmlwcygpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBpZiAoc3RhcnREYXRlID4gdG9kYXkpIHtcbiAgICAgICAgdG90YWwucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCBbXSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuaWQgPSB0cmlwRGF0YS5pZDtcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXBEYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSB0cmlwRGF0YS5kZXN0aW5hdGlvbklEO1xuICAgIHRoaXMudHJhdmVsZXJzID0gdHJpcERhdGEudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRyaXBEYXRhLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXBEYXRhLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gdHJpcERhdGEuc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IFtdO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbkRhdGE7XG4gIH1cblxuICBjYWxjdWxhdGVFc3RpbWF0ZWRUcmlwQ29zdChkdXJhdGlvbiwgdHJhdmVsZXJzKSB7XG4gICAgbGV0IHRvdGFsTG9kZ2luZyA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiBkdXJhdGlvbiAqIHRyYXZlbGVycztcbiAgICBsZXQgdG90YWxGbGlnaHQgPSB0aGlzLmRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmF2ZWxlcnM7XG4gICAgbGV0IHRvdGFsVHJpcENvc3QgPSB0b3RhbExvZGdpbmcgKyB0b3RhbEZsaWdodDtcbiAgICBsZXQgYWdlbnRGZWUgPSB0b3RhbFRyaXBDb3N0ICogMC4xO1xuICAgIHJldHVybiAodG90YWxUcmlwQ29zdCArIGFnZW50RmVlKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVHJpcDsiXSwic291cmNlUm9vdCI6IiJ9