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
___CSS_LOADER_EXPORT___.push([module.i, "ul {\n  background-color: #CED4DA;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  justify-content: flex-end;\n  list-style-type: none;\n  margin: 0;\n  overflow: hidden;\n  padding: 0; }\n\nli {\n  float: right; }\n  li:hover {\n    background-color: #d90368; }\n\n.nav-left {\n  float: left; }\n\nli a {\n  color: #212529;\n  display: block;\n  font-weight: bold;\n  padding: 0.875rem 1rem;\n  text-align: center;\n  text-decoration: none; }\n\n.login-text {\n  text-align: center;\n  margin-top: 15%; }\n\n.login-container {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  width: 500px;\n  margin-top: 2%; }\n\n.login-form {\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  width: 500px; }\n\n.login-form-field {\n  border-radius: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 5% 0;\n  padding: 5% 15%;\n  width: 100%; }\n\n.submit-button {\n  background-color: #d90368;\n  border: none;\n  border-radius: 10px;\n  color: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 4%;\n  width: 100%;\n  font-size: 2rem; }\n\n.message {\n  text-align: center; }\n\n.card {\n  column-gap: 1rem;\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  justify-items: center;\n  padding: 30px; }\n\n.info-card {\n  border: 1px solid #6C757D;\n  border-radius: 5px;\n  box-shadow: 0px 3px 10px 2px #6C757D;\n  display: flex;\n  flex-direction: column;\n  width: 70%; }\n\n.image-styling {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.trip-image {\n  height: 100%;\n  width: 100%; }\n\n.trip-destination {\n  font-weight: bold; }\n\n.info-card-styling {\n  display: flex;\n  flex-direction: column;\n  padding: 3%; }\n\np {\n  margin: 2%;\n  padding: 0; }\n\nbody {\n  background: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh; }\n\nh1 {\n  color: #d90368;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold; }\n\n.user-view {\n  margin-top: 5%; }\n\n.all-trips {\n  margin-left: 2%; }\n\n.plan-trip-area {\n  margin-left: 2%; }\n\n.year-cost {\n  margin-top: 5%; }\n\n.greeting {\n  font-size: 1rem;\n  margin-top: -3%; }\n\n.destinations-list {\n  font-family: \"Montserrat\", sans-serif; }\n\n.label-names {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold; }\n\n.book-trip-form {\n  display: flex;\n  justify-content: space-around; }\n\n.button {\n  background-color: #d90368;\n  border: none;\n  border-radius: 5px;\n  color: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  width: 11.5rem; }\n\n.estimated-trip-cost {\n  color: #d90368;\n  text-align: center; }\n\n.hamburger {\n  display: none; }\n\n.hidden {\n  display: none; }\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5; }\n\n@media screen and (min-width: 551px) and (max-width: 1024px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 21%; }\n  .message {\n    margin-top: 2%; }\n  .nav-bar {\n    font-size: .65rem; }\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.65rem;\n    text-align: center; }\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column; }\n  .button {\n    margin-top: 5%;\n    padding: 1%; }\n  .label-styling {\n    margin-top: 5%;\n    text-align: center; }\n  .hamburger {\n    display: none; }\n  .info-card {\n    width: 100%; }\n  .greeting {\n    margin-top: 0%; }\n  .travel-card-container {\n    padding: 0; } }\n\n@media screen and (max-width: 550px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 35%; }\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.25rem;\n    text-align: center; }\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column; }\n  .button {\n    margin-top: 5%;\n    padding: 2%; }\n  .label-styling {\n    margin-top: 5%;\n    text-align: center; }\n  .nav-bar {\n    display: none; }\n  .hamburger {\n    align-items: center;\n    background-color: #F8F9FA;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    height: 6.5vh;\n    width: 15.5vw;\n    z-index: 2; }\n  .hamburger-content {\n    background-color: #CED4DA;\n    color: #212529;\n    margin-left: 30%;\n    margin-top: 75%;\n    z-index: 2; }\n  .dropdown-item {\n    font-size: .80rem;\n    line-height: 2rem;\n    padding: .35rem; }\n  .info-card {\n    width: 100%; }\n  .travel-card-container {\n    padding: 0; } }\n", "",{"version":3,"sources":["webpack://./src/css/_navigation.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_login.scss","webpack://./src/css/_card.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"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","sourcesContent":["ul {\n    background-color: $light-grey;\n    display: flex;\n    font-family: $montserrat-font;\n    justify-content: flex-end;\n    list-style-type: none;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n}\n\nli {\n    float: right;\n\n    &:hover {\n        background-color: $hot-pink;\n    }\n}\n\n.nav-left {\n    float: left;\n}\n\nli {\n    a {\n        color: $dark-green;\n        display: block;\n        font-weight: bold;\n        padding: 0.875rem 1rem;\n        text-align: center;\n        text-decoration: none;\n    }\n}","$dark-green: #212529;\n$off-white: #F8F9FA;\n$light-grey: #CED4DA;\n$slate-grey: #6C757D;\n$hot-pink: #d90368;\n$montserrat-font: 'Montserrat',\nsans-serif;\n$shadow: 0px 3px 10px 2px $slate-grey;\n\n@mixin flexDisplay($flex, $direction) {\n    display: $flex;\n    flex-direction: $direction;\n}",".login-text {\n    text-align: center;\n    margin-top: 15%;\n}\n\n.login-container {\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    width: 500px;\n    margin-top: 2%;\n}\n\n.login-form {\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    width: 500px;\n}\n\n.login-form-field {\n    border-radius: 10px;\n    box-sizing: border-box;\n    display: inline-block;\n    margin: 5% 0;\n    padding: 5% 15%;\n    width: 100%;\n}\n\n.submit-button {\n    background-color: $hot-pink;\n    border: none;\n    border-radius: 10px;\n    color: $off-white;\n    font-family: $montserrat-font;\n    padding: 4%;\n    width: 100%;\n    font-size: 2rem;\n}\n\n.message {\n    text-align: center;\n}",".card {\n    column-gap: 1rem;\n    display: grid;\n    grid-gap: 3rem;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    justify-items: center;\n    padding: 30px;\n}\n\n.info-card {\n    border: 1px solid $slate-grey;\n    border-radius: 5px;\n    box-shadow: $shadow;\n    @include flexDisplay(flex, column);\n    width: 70%;\n}\n\n.image-styling {\n    @include flexDisplay(flex, column);\n    height: 100%;\n}\n\n.trip-image {\n    height: 100%;\n    width: 100%;\n}\n\n.trip-destination {\n    font-weight: bold;\n}\n\n.info-card-styling {\n    display: flex;\n    flex-direction: column;\n    padding: 3%;\n}\n\np {\n    margin: 2%;\n    padding: 0;\n}","@import 'variables';\n@import 'navigation';\n@import 'login';\n@import 'card';\n\nbody {\n  background: $off-white;\n  font-family: $montserrat-font;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n}\n\nh1 {\n  color: $hot-pink;\n  font-family: $montserrat-font;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.user-view {\n  margin-top: 5%;\n}\n\n.all-trips {\n  margin-left: 2%;\n}\n\n.plan-trip-area {\n  margin-left: 2%;\n}\n\n.year-cost {\n  margin-top: 5%;\n}\n\n.greeting {\n  font-size: 1rem;\n  margin-top: -3%;\n}\n\n.destinations-list {\n  font-family: $montserrat-font;\n}\n\n.label-names {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.book-trip-form {\n  display: flex;\n  justify-content: space-around;\n}\n\n.button {\n  background-color: $hot-pink;\n  border: none;\n  border-radius: 5px;\n  color: $off-white;\n  font-family: $montserrat-font;\n  width: 11.5rem;\n}\n\n.estimated-trip-cost {\n  color: $hot-pink;\n  text-align: center;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n// IPAD/TABLETS\n\n@media screen and (min-width: 551px) and (max-width: 1024px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 21%;\n  }\n\n  .message {\n    margin-top: 2%;\n  }\n\n  .nav-bar {\n    font-size: .65rem;\n  }\n\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.65rem;\n    text-align: center;\n  }\n\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .button {\n    margin-top: 5%;\n    padding: 1%;\n  }\n\n  .label-styling {\n    margin-top: 5%;\n    text-align: center;\n  }\n\n  .hamburger {\n    display: none;\n  }\n\n  .info-card {\n    width: 100%;\n  }\n\n  .greeting {\n    margin-top: 0%;\n  }\n\n  .travel-card-container {\n    padding: 0;\n  }\n}\n\n// /SMARTPHONES/MOBILE\n\n@media screen and (max-width: 550px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 35%;\n  }\n\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.25rem;\n    text-align: center;\n  }\n\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .button {\n    margin-top: 5%;\n    padding: 2%;\n  }\n\n  .label-styling {\n    margin-top: 5%;\n    text-align: center;\n  }\n\n  .nav-bar {\n    display: none;\n  }\n\n  .hamburger {\n    align-items: center;\n    background-color: $off-white;\n    background-image: url('../images/hamburger.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    @include flexDisplay(flex, column);\n    height: 6.5vh;\n    width: 15.5vw;\n    z-index: 2;\n  }\n\n  .hamburger-content {\n    background-color: $light-grey;\n    color: $dark-green;\n    margin-left: 30%;\n    margin-top: 75%;\n    z-index: 2;\n  }\n\n  .dropdown-item {\n    font-size: .80rem;\n    line-height: 2rem;\n    padding: .35rem;\n  }\n\n  .info-card {\n    width: 100%;\n  }\n\n  .travel-card-container {\n    padding: 0;\n  }\n\n}"],"sourceRoot":""}]);
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
                    <div class="info-card-styling">
                        <p id="${trip.destination.destination}-destination" class="trip-destination">${trip.destination.destination}</p>
                        <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
                        <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
                        <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
                        <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
                    </div>
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
               <div class="info-card-styling">
                <p id="${trip.destination.destination}-destination" class="trip-destination">${trip.destination.destination}</p>
                <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
                <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
                <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
                <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
               </div>
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
    yearCost2019.innerText = `Your Total Trip Spend for 2020 is: $${traveler.calculateTotalSpent("2020")}`;
    yearCost2020.innerText = `Your Current Trip Spend for 2021 is: $${traveler.calculateTotalSpent("2021")}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hhbWJ1cmdlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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ZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN4V0E7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ3JGdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLG1FQUFJLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ1bCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0VENERBO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5saSB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG4gIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MDM2ODsgfVxcblxcbi5uYXYtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbmxpIGEge1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi5sb2dpbi10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE1JTsgfVxcblxcbi5sb2dpbi1jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMiU7IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA1MDBweDsgfVxcblxcbi5sb2dpbi1mb3JtLWZpZWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiA1JSAwO1xcbiAgcGFkZGluZzogNSUgMTUlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwMzY4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiAjRjhGOUZBO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07IH1cXG5cXG4ubWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY2FyZCB7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4OyB9XFxuXFxuLmluZm8tY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNkM3NTdEO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IDJweCAjNkM3NTdEO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNzAlOyB9XFxuXFxuLmltYWdlLXN0eWxpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4udHJpcC1pbWFnZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi50cmlwLWRlc3RpbmF0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmluZm8tY2FyZC1zdHlsaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMyU7IH1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMiU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjRjhGOUZBO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuaDEge1xcbiAgY29sb3I6ICNkOTAzNjg7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4udXNlci12aWV3IHtcXG4gIG1hcmdpbi10b3A6IDUlOyB9XFxuXFxuLmFsbC10cmlwcyB7XFxuICBtYXJnaW4tbGVmdDogMiU7IH1cXG5cXG4ucGxhbi10cmlwLWFyZWEge1xcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuXFxuLnllYXItY29zdCB7XFxuICBtYXJnaW4tdG9wOiA1JTsgfVxcblxcbi5ncmVldGluZyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAtMyU7IH1cXG5cXG4uZGVzdGluYXRpb25zLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi5sYWJlbC1uYW1lcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmJvb2stdHJpcC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MDM2ODtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjRjhGOUZBO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMS41cmVtOyB9XFxuXFxuLmVzdGltYXRlZC10cmlwLWNvc3Qge1xcbiAgY29sb3I6ICNkOTAzNjg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uaGFtYnVyZ2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAubG9naW4tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjElOyB9XFxuICAubWVzc2FnZSB7XFxuICAgIG1hcmdpbi10b3A6IDIlOyB9XFxuICAubmF2LWJhciB7XFxuICAgIGZvbnQtc2l6ZTogLjY1cmVtOyB9XFxuICBoMSxcXG4gIC55ZWFyLXRleHQsXFxuICAuYWxsLXRyaXBzIHtcXG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5ib29rLXRyaXAtZm9ybSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgcGFkZGluZzogMSU7IH1cXG4gIC5sYWJlbC1zdHlsaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5pbmZvLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmdyZWV0aW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMCU7IH1cXG4gIC50cmF2ZWwtY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmxvZ2luLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDM1JTsgfVxcbiAgaDEsXFxuICAueWVhci10ZXh0LFxcbiAgLmFsbC10cmlwcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuYm9vay10cmlwLWZvcm0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHBhZGRpbmc6IDIlOyB9XFxuICAubGFiZWwtc3R5bGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA2LjV2aDtcXG4gICAgd2lkdGg6IDE1LjV2dztcXG4gICAgei1pbmRleDogMjsgfVxcbiAgLmhhbWJ1cmdlci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFRDREQTtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIG1hcmdpbi10b3A6IDc1JTtcXG4gICAgei1pbmRleDogMjsgfVxcbiAgLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICBmb250LXNpemU6IC44MHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IC4zNXJlbTsgfVxcbiAgLmluZm8tY2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAudHJhdmVsLWNhcmQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fbmF2aWdhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbG9naW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHlCQ0NnQjtFREFoQixhQUFhO0VBQ2IscUNDR007RURGTix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksWUFBWSxFQUFBO0VBRGhCO0lBSVEseUJDWFUsRUFBQTs7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VyxFQUFBO0VBR2I7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLG1CQUFtQjtJQUNuQix5Qkg3S2U7SUc4S2YseURBQWdEO0lBQ2hELDRCQUE0QjtJQUM1QiwyQkFBMkI7SUh2SzNCLGFHd0t5QjtJSHZLekIsc0JHdUtpQztJQUNqQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVUsRUFBQTtFQUdaO0lBQ0UseUJIdkxnQjtJR3dMaEIsY0gxTGdCO0lHMkxoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVUsRUFBQTtFQUdaO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFHakI7SUFDRSxXQUFXLEVBQUE7RUFHYjtJQUNFLFVBQVUsRUFBQSxFQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdC1mb250O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdC1waW5rO1xcbiAgICB9XFxufVxcblxcbi5uYXYtbGVmdCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG5saSB7XFxuICAgIGEge1xcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHBhZGRpbmc6IDAuODc1cmVtIDFyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIH1cXG59XCIsXCIkZGFyay1ncmVlbjogIzIxMjUyOTtcXG4kb2ZmLXdoaXRlOiAjRjhGOUZBO1xcbiRsaWdodC1ncmV5OiAjQ0VENERBO1xcbiRzbGF0ZS1ncmV5OiAjNkM3NTdEO1xcbiRob3QtcGluazogI2Q5MDM2ODtcXG4kbW9udHNlcnJhdC1mb250OiAnTW9udHNlcnJhdCcsXFxuc2Fucy1zZXJpZjtcXG4kc2hhZG93OiAwcHggM3B4IDEwcHggMnB4ICRzbGF0ZS1ncmV5O1xcblxcbkBtaXhpbiBmbGV4RGlzcGxheSgkZmxleCwgJGRpcmVjdGlvbikge1xcbiAgICBkaXNwbGF5OiAkZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxufVwiLFwiLmxvZ2luLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1JTtcXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxufVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5sb2dpbi1mb3JtLWZpZWxkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDUlIDA7XFxuICAgIHBhZGRpbmc6IDUlIDE1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdC1waW5rO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQtZm9udDtcXG4gICAgcGFkZGluZzogNCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIixcIi5jYXJkIHtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5pbmZvLWNhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2xhdGUtZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xcbiAgICBAaW5jbHVkZSBmbGV4RGlzcGxheShmbGV4LCBjb2x1bW4pO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uaW1hZ2Utc3R5bGluZyB7XFxuICAgIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGZsZXgsIGNvbHVtbik7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRyaXAtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udHJpcC1kZXN0aW5hdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaW5mby1jYXJkLXN0eWxpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzJTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXG5AaW1wb3J0ICduYXZpZ2F0aW9uJztcXG5AaW1wb3J0ICdsb2dpbic7XFxuQGltcG9ydCAnY2FyZCc7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAkb2ZmLXdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0LWZvbnQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6ICRob3QtcGluaztcXG4gIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdC1mb250O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51c2VyLXZpZXcge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxufVxcblxcbi5hbGwtdHJpcHMge1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5cXG4ucGxhbi10cmlwLWFyZWEge1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5cXG4ueWVhci1jb3N0IHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogLTMlO1xcbn1cXG5cXG4uZGVzdGluYXRpb25zLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0LWZvbnQ7XFxufVxcblxcbi5sYWJlbC1uYW1lcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYm9vay10cmlwLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRob3QtcGluaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0LWZvbnQ7XFxuICB3aWR0aDogMTEuNXJlbTtcXG59XFxuXFxuLmVzdGltYXRlZC10cmlwLWNvc3Qge1xcbiAgY29sb3I6ICRob3QtcGluaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNhYmxlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vLyBJUEFEL1RBQkxFVFNcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmxvZ2luLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDIxJTtcXG4gIH1cXG5cXG4gIC5tZXNzYWdlIHtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxuICB9XFxuXFxuICAubmF2LWJhciB7XFxuICAgIGZvbnQtc2l6ZTogLjY1cmVtO1xcbiAgfVxcblxcbiAgaDEsXFxuICAueWVhci10ZXh0LFxcbiAgLmFsbC10cmlwcyB7XFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvb2stdHJpcC1mb3JtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgcGFkZGluZzogMSU7XFxuICB9XFxuXFxuICAubGFiZWwtc3R5bGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5pbmZvLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5ncmVldGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDAlO1xcbiAgfVxcblxcbiAgLnRyYXZlbC1jYXJkLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbi8vIC9TTUFSVFBIT05FUy9NT0JJTEVcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmxvZ2luLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDM1JTtcXG4gIH1cXG5cXG4gIGgxLFxcbiAgLnllYXItdGV4dCxcXG4gIC5hbGwtdHJpcHMge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib29rLXRyaXAtZm9ybSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgfVxcblxcbiAgLmxhYmVsLXN0eWxpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm5hdi1iYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBAaW5jbHVkZSBmbGV4RGlzcGxheShmbGV4LCBjb2x1bW4pO1xcbiAgICBoZWlnaHQ6IDYuNXZoO1xcbiAgICB3aWR0aDogMTUuNXZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XFxuICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gICAgbWFyZ2luLXRvcDogNzUlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICBmb250LXNpemU6IC44MHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IC4zNXJlbTtcXG4gIH1cXG5cXG4gIC5pbmZvLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50cmF2ZWwtY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQXBpQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHVybCwgbmFtZSkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXRSZXF1ZXN0KCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEgPSBkYXRhW3RoaXMubmFtZV07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxuXG4gIGdldFNpbmdsZVJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIGZldGNoKHRoaXMudXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9XG5cbiAgcG9zdFJlcXVlc3QobmV3VHJpcCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RyaXApLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGlDYWxsOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImxldCBkb21VcGRhdGVzID0ge1xuICAgIGRpc3BsYXlUcmlwcyh0cmlwc0xpc3QsIHRyaXBzQXJlYSkge1xuICAgICAgICB0cmlwc0FyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRyaXBzTGlzdC50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICAgICAgbGV0IHRyaXBzSFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naW5mby1jYXJkJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLXN0eWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3RyaXAuZGVzdGluYXRpb24uaW1hZ2V9XCIgYWx0PVwiJHt0cmlwLmRlc3RpbmF0aW9uLmFsdH1cIiBjbGFzcz1cInRyaXAtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWNhcmQtc3R5bGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAuZGVzdGluYXRpb24uZGVzdGluYXRpb259LWRlc3RpbmF0aW9uXCIgY2xhc3M9XCJ0cmlwLWRlc3RpbmF0aW9uXCI+JHt0cmlwLmRlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLmRhdGV9LWRhdGVcIiBjbGFzcz1cInRyaXAtZGF0ZVwiPlRyaXAgRGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAuZHVyYXRpb259LWR1cmF0aW9uXCIgY2xhc3M9XCJ0cmlwLWR1cmF0aW9uXCI+VHJpcCBEdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLnRyYXZlbGVyc30tdHJhdmVsZXJzXCIgY2xhc3M9XCJ0cmlwLXRyYXZlbGVyc1wiPk51bWJlciBvZiBUcmF2ZWxlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAuc3RhdHVzfS1zdGF0dXNcIiBjbGFzcz1cInRyaXAtc3RhdHVzXCI+VHJpcCBTdGF0dXM6ICR7dHJpcC5zdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIHRyaXBzQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRyaXBzSFRNTClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgZGlzcGxheU90aGVyVHJpcHMobGlzdFR5cGUsIGxpc3RBcmVhLCBsaXN0RGlzcGxheSwgcGFnZVRleHQsIHRyaXBUeXBlKSB7XG4gICAgICAgIGlmIChsaXN0VHlwZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBhZ2VUZXh0LmlubmVyVGV4dCA9IGBZb3UgSGF2ZSBObyAke3RyaXBUeXBlfSBUcmlwcyFgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0QXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGxpc3RUeXBlLmZvckVhY2godHJpcCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3REaXNwbGF5ID0gYFxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvLWNhcmQnPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLXN0eWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dHJpcC5kZXN0aW5hdGlvbi5pbWFnZX1cIiBhbHQ9XCIke3RyaXAuZGVzdGluYXRpb24uYWx0fVwiIGNsYXNzPVwidHJpcC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jYXJkLXN0eWxpbmdcIj5cbiAgICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5kZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0tZGVzdGluYXRpb25cIiBjbGFzcz1cInRyaXAtZGVzdGluYXRpb25cIj4ke3RyaXAuZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLmRhdGV9LWRhdGVcIiBjbGFzcz1cInRyaXAtZGF0ZVwiPlRyaXAgRGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLmR1cmF0aW9ufS1kdXJhdGlvblwiIGNsYXNzPVwidHJpcC1kdXJhdGlvblwiPlRyaXAgRHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAudHJhdmVsZXJzfS10cmF2ZWxlcnNcIiBjbGFzcz1cInRyaXAtdHJhdmVsZXJzXCI+TnVtYmVyIG9mIFRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAuc3RhdHVzfS1zdGF0dXNcIiBjbGFzcz1cInRyaXAtc3RhdHVzXCI+VHJpcCBTdGF0dXM6ICR7dHJpcC5zdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgbGlzdEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsaXN0RGlzcGxheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaGFtYnVyZ2VyLnBuZ1wiOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCBUcmlwIGZyb20gJy4vdHJpcCc7XG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi90cmF2ZWxlcic7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL2FwaUNhbGxzJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbi8vIEdMT0JBTCBWQVJJQUJMRVNcblxubGV0IHRyYXZlbGVyQXBpO1xubGV0IGRlc3RpbmF0aW9uQXBpO1xubGV0IHRyaXBBcGk7XG5sZXQgZGVzdGluYXRpb25JbmZvO1xubGV0IHRyYXZlbGVySW5mbztcbmxldCB0cmlwSW5mbztcbmxldCBjdXJyZW50VXNlckluZm87XG5sZXQgdHJhdmVsZXI7XG5sZXQgY3VycmVudFRyYXZlbGVyO1xubGV0IG5ld1RyaXA7XG5sZXQgdHJpcDtcbmxldCBjaG9zZW5Vc2VySUQ7XG5jb25zdCBiYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEnO1xuXG4vLyBRVUVSWSBTRUxFQ1RPUlNcblxuY29uc3QgdHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWwtY2FyZC1jb250YWluZXJcIik7XG5jb25zdCBhbGxUcmlwc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10cmlwc1wiKTtcbmNvbnN0IGRlc3RpbmF0aW9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3RpbmF0aW9ucy1saXN0XCIpO1xuY29uc3QgcGxhblRyaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFuLXRyaXAtYXJlYVwiKTtcblxuY29uc3QgcGVuZGluZ1RyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZW5kaW5nLXRyaXBzXCIpO1xuY29uc3QgcGVuZGluZ1RyaXBzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10cmlwcy1hcmVhXCIpO1xuXG5jb25zdCB1cGNvbWluZ1RyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwc1wiKTtcbmNvbnN0IHVwY29taW5nVHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy1hcmVhXCIpO1xuXG5jb25zdCBwYXN0VHJpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3QtdHJpcHNcIik7XG5jb25zdCBwYXN0VHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXN0LXRyaXBzLWFyZWFcIik7XG5cbmNvbnN0IGN1cnJlbnRUcmlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10cmlwc1wiKTtcbmNvbnN0IGN1cnJlbnRUcmlwc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdHJpcHMtYXJlYVwiKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmNvbnN0IGJvb2tUcmF2ZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stdHJhdmVsLWJ1dHRvblwiKTtcbmNvbnN0IGNhbGN1bGF0ZVRyYXZlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsY3VsYXRlLWNvc3QtYnV0dG9uXCIpO1xuY29uc3QgbG9naW5TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XG5cbmNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cmF0aW9uXCIpO1xuY29uc3QgdHJhdmVsZXJzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVyc1wiKTtcbmNvbnN0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1waWNrZXJcIik7XG5jb25zdCBlc3RpbWF0ZWRUcmlwQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXN0aW1hdGVkLXRyaXAtY29zdFwiKTtcbmNvbnN0IGJvb2tUcmlwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay10cmlwLWZvcm1cIik7XG5cbmNvbnN0IHVzZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLXZpZXdcIik7XG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLXBhZ2VcIik7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIik7XG5cbmNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcbmNvbnN0IGhhbWJ1cmdlck1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItY29udGVudFwiKTtcblxuY29uc3QgbW9iaWxlSG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLW1vYmlsZScpO1xuY29uc3QgbW9iaWxlQ3VycmVudFRyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdHJpcHMtbW9iaWxlJyk7XG5jb25zdCBtb2JpbGVVcGNvbWluZ1RyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy1tb2JpbGVcIik7XG5jb25zdCBtb2JpbGVQZW5kaW5nVHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlbmRpbmctdHJpcHMtbW9iaWxlXCIpO1xuY29uc3QgbW9iaWxlUGFzdFRyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXN0LXRyaXBzLW1vYmlsZVwiKTtcblxuY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcm5hbWVcIik7XG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZFwiKTtcblxuLy8gRVZFTlQgTElTVEVORVJTXG51c2VybmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmIChwYXNzd29yZElucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICB0b2dnbGVCdXR0b24obG9naW5TdWJtaXRCdXR0b24sIHVzZXJuYW1lSW5wdXQpO1xuICAgIH1cbn0pXG5cbnBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgICBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICB0b2dnbGVCdXR0b24obG9naW5TdWJtaXRCdXR0b24sIHBhc3N3b3JkSW5wdXQpO1xuICAgIH1cbn0pO1xuXG5jdXJyZW50VHJpcHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlDdXJyZW50VHJpcHMpO1xudXBjb21pbmdUcmlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVVwY29taW5nVHJpcHMpO1xucGVuZGluZ1RyaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UGVuZGluZ1RyaXBzKTtcbnBhc3RUcmlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVBhc3RUcmlwcyk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXR1cm5Ib21lKTtcblxuY2FsY3VsYXRlVHJhdmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwbGF5RXN0aW1hdGVkQ29zdHMoZXZlbnQpO1xuICAgIGhpZGUoY2FsY3VsYXRlVHJhdmVsQnV0dG9uKTtcbiAgICBzaG93KGJvb2tUcmF2ZWxCdXR0b24pO1xuICAgIHNob3coZXN0aW1hdGVkVHJpcENvc3QpO1xuICAgIHN1Ym1pdFRyaXBSZXF1ZXN0KCk7XG59KVxuXG5ib29rVHJhdmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBoaWRlKGJvb2tUcmF2ZWxCdXR0b24pO1xuICAgIHNob3coY2FsY3VsYXRlVHJhdmVsQnV0dG9uKTtcbiAgICBoaWRlKGVzdGltYXRlZFRyaXBDb3N0KTtcbiAgICB1cGRhdGVOZXdUcmlwQm9va2luZ3MoZXZlbnQpO1xuICAgIGNsZWFyVHJhdmVsSW5wdXRzKCk7XG59KTtcblxubG9naW5TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBzaG93KHVzZXJWaWV3KTtcbiAgICBzaG93KG5hdmJhcik7XG4gICAgaGlkZShsb2dpblBhZ2UpO1xuICAgIHNob3coaGFtYnVyZ2VyTWVudSk7XG4gICAgbG9naW5Vc2VyKGV2ZW50KTtcbn0pO1xuXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVIYW1idXJnZXJNZW51RHJvcGRvd24pO1xubW9iaWxlSG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV0dXJuSG9tZSk7XG5cbm1vYmlsZUN1cnJlbnRUcmlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUN1cnJlbnRUcmlwcyk7XG5tb2JpbGVVcGNvbWluZ1RyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VXBjb21pbmdUcmlwcyk7XG5tb2JpbGVQZW5kaW5nVHJpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQZW5kaW5nVHJpcHMpO1xubW9iaWxlUGFzdFRyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UGFzdFRyaXBzKTtcblxuZnVuY3Rpb24gbG9naW5Vc2VyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjaG9zZW5Vc2VySUQgPSB1c2VybmFtZUlucHV0LnZhbHVlLnNwbGl0KFwiXCIpLnNwbGljZSg4LCAzKS5qb2luKFwiXCIpO1xuICAgIGlmICh1c2VybmFtZUlucHV0LnZhbHVlLnNsaWNlKDAsIDgpID09PSBcInRyYXZlbGVyXCIgJiYgdXNlcm5hbWVJbnB1dC52YWx1ZS5zbGljZSg4KSA+IDAgJiYgdXNlcm5hbWVJbnB1dC52YWx1ZS5zbGljZSg4KSA8PSA1MCAmJiBwYXNzd29yZElucHV0LnZhbHVlID09PSAndHJhdmVsZXIyMDIwJykge1xuICAgICAgICBnZXRBbGxEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZSh1c2VyVmlldyk7XG4gICAgICAgIHNob3cobG9naW5QYWdlKTtcbiAgICAgICAgaGlkZShuYXZiYXIpO1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKCdZb3UgaGF2ZSBlbnRlcmVkIHRoZSB3cm9uZyB1c2VybmFtZSBvciBwYXNzd29yZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsbERhdGEoKSB7XG4gICAgdHJhdmVsZXJBcGkgPSBuZXcgQXBpQ2FsbChgJHtiYXNlVVJMfS90cmF2ZWxlcnNgLCBcInRyYXZlbGVyc1wiKTtcbiAgICBkZXN0aW5hdGlvbkFwaSA9IG5ldyBBcGlDYWxsKGAke2Jhc2VVUkx9L2Rlc3RpbmF0aW9uc2AsIFwiZGVzdGluYXRpb25zXCIpO1xuICAgIHRyaXBBcGkgPSBuZXcgQXBpQ2FsbChgJHtiYXNlVVJMfS90cmlwc2AsIFwidHJpcHNcIik7XG4gICAgY3VycmVudFRyYXZlbGVyID0gbmV3IEFwaUNhbGwoYCR7YmFzZVVSTH0vdHJhdmVsZXJzLyR7Y2hvc2VuVXNlcklEfWApO1xuICAgIG9uTG9hZCgpO1xufVxuXG5mdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgbGV0IHRyYXZlbGVyRGF0YSA9IHRyYXZlbGVyQXBpLmdldFJlcXVlc3QoKTtcbiAgICBsZXQgZGVzdGluYXRpb25EYXRhID0gZGVzdGluYXRpb25BcGkuZ2V0UmVxdWVzdCgpO1xuICAgIGxldCB0cmlwRGF0YSA9IHRyaXBBcGkuZ2V0UmVxdWVzdCgpO1xuICAgIGxldCBzaW5nbGVEYXRhID0gY3VycmVudFRyYXZlbGVyLmdldFNpbmdsZVJlcXVlc3QoKTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChbdHJhdmVsZXJEYXRhLCBkZXN0aW5hdGlvbkRhdGEsIHRyaXBEYXRhLCBzaW5nbGVEYXRhXSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyYXZlbGVySW5mbyA9IGRhdGFbMF07XG4gICAgICAgICAgICBkZXN0aW5hdGlvbkluZm8gPSBkYXRhWzFdO1xuICAgICAgICAgICAgdHJpcEluZm8gPSBkYXRhWzJdO1xuICAgICAgICAgICAgY3VycmVudFVzZXJJbmZvID0gZGF0YVszXTtcbiAgICAgICAgICAgIGJ1aWxkUGFnZShjdXJyZW50VXNlckluZm8sIHRyaXBJbmZvLCBkZXN0aW5hdGlvbkluZm8pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVOZXdUcmlwQm9va2luZ3MoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldEFsbERhdGEoY2hvc2VuVXNlcklEKTtcbn1cblxuZnVuY3Rpb24gZmlsbERyb3Bkb3duKCkge1xuICAgIGxldCBzb3J0ZWREZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbkluZm8uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5kZXN0aW5hdGlvbiA8IGIuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgfSlcbiAgICBzb3J0ZWREZXN0aW5hdGlvbnMuZm9yRWFjaCgoZGVzdGluYXRpb24pID0+IHtcbiAgICAgICAgZGVzdGluYXRpb25zTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgJycpO1xuICAgICAgICBsZXQgZGVzdGluYXRpb25zT3B0aW9ucyA9IGA8b3B0aW9uPiR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9vcHRpb24+YDtcbiAgICAgICAgZGVzdGluYXRpb25zTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGVzdGluYXRpb25zT3B0aW9ucyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGFnZShjdXJyZW50VXNlckluZm8sIHRyaXBJbmZvLCBkZXN0aW5hdGlvbkluZm8pIHtcbiAgICBjb25zdCB5ZWFyQ29zdDIwMjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllYXItY29zdC0yMDIwXCIpO1xuICAgIGNvbnN0IHllYXJDb3N0MjAxOSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueWVhci1jb3N0LTIwMTlcIik7XG4gICAgY3JlYXRlVHJhdmVsZXJQcm9maWxlKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcHModHJhdmVsZXIsIHRyaXBzQXJlYSk7XG4gICAgeWVhckNvc3QyMDE5LmlubmVyVGV4dCA9IGBZb3VyIFRvdGFsIFRyaXAgU3BlbmQgZm9yIDIwMjAgaXM6ICQke3RyYXZlbGVyLmNhbGN1bGF0ZVRvdGFsU3BlbnQoXCIyMDIwXCIpfWA7XG4gICAgeWVhckNvc3QyMDIwLmlubmVyVGV4dCA9IGBZb3VyIEN1cnJlbnQgVHJpcCBTcGVuZCBmb3IgMjAyMSBpczogJCR7dHJhdmVsZXIuY2FsY3VsYXRlVG90YWxTcGVudChcIjIwMjFcIil9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhdmVsZXJQcm9maWxlKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbykge1xuICAgIGNvbnN0IGdyZWV0VXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZXRpbmdcIik7XG4gICAgZ3JlZXRVc2VyLmlubmVyVGV4dCA9IGBIZWxsbywgJHtjdXJyZW50VXNlckluZm8ubmFtZX0hYFxuICAgIHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbyk7XG4gICAgZmlsbERyb3Bkb3duKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdUcmlwKCkge1xuICAgIGxldCB0cmF2ZWxlcklucHV0VmFsdWUgPSBwYXJzZUludCh0cmF2ZWxlcnNJbnB1dC52YWx1ZSk7XG4gICAgbGV0IGR1cmF0aW9uSW5wdXRWYWx1ZSA9IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpO1xuICAgIGxldCBuZXdEYXRlRm9ybWF0ID0gc3RhcnREYXRlLnZhbHVlLnNwbGl0KFwiLVwiKS5qb2luKFwiL1wiKTtcbiAgICBsZXQgZGVzdGluYXRpb25JbnB1dFZhbHVlID0gZmlsdGVyRGVzdGluYXRpb25zKClcbiAgICBsZXQgdW5pcXVlSUQgPSBnZXROZXdJRCgpO1xuXG4gICAgbmV3VHJpcCA9IHtcbiAgICAgICAgaWQ6IHVuaXF1ZUlELFxuICAgICAgICB1c2VySUQ6IGN1cnJlbnRVc2VySW5mby5pZCxcbiAgICAgICAgZGVzdGluYXRpb25JRDogZGVzdGluYXRpb25JbnB1dFZhbHVlLFxuICAgICAgICB0cmF2ZWxlcnM6IHRyYXZlbGVySW5wdXRWYWx1ZSxcbiAgICAgICAgZGF0ZTogbmV3RGF0ZUZvcm1hdCxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uSW5wdXRWYWx1ZSxcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gICAgfTtcbiAgICByZXR1cm4gbmV3VHJpcDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyRGVzdGluYXRpb25zKCkge1xuICAgIGxldCBkZXN0aW5hdGlvbkJvb2tpbmdJRDtcbiAgICBkZXN0aW5hdGlvbkluZm8uZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbiA9PT0gZGVzdGluYXRpb25zTGlzdC52YWx1ZSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25Cb29raW5nSUQgPSBkZXN0aW5hdGlvbi5pZDtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uQm9va2luZ0lEO1xufVxuXG5mdW5jdGlvbiBnZXROZXdJRCgpIHtcbiAgICByZXR1cm4gdHJpcEluZm8ubGVuZ3RoICsgMVxufVxuXG5mdW5jdGlvbiBzdWJtaXRUcmlwUmVxdWVzdCgpIHtcbiAgICBsZXQgcG9zdE9wdGlvbiA9IG1ha2VOZXdUcmlwKCk7XG4gICAgbGV0IG5ld1RyaXBCb29raW5nID0gbmV3IEFwaUNhbGwoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiXG4gICAgKTtcbiAgICBuZXdUcmlwQm9va2luZy5wb3N0UmVxdWVzdChwb3N0T3B0aW9uKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VcIik7XG4gICAgbWVzc2FnZXMuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUcmF2ZWxJbnB1dHMoKSB7XG4gICAgZHVyYXRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgdHJhdmVsZXJzSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHN0YXJ0RGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzdGluYXRpb25zTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcbn1cblxuZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJ1dHRvbihidXR0b24sIGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51RHJvcGRvd24oKSB7XG4gICAgaGFtYnVyZ2VyTWVudUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVzdGltYXRlZENvc3RzKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGRlc3RpbmF0aW9uSW5mby5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uc0xpc3QudmFsdWUgPT09IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB0cmlwID0gbmV3IFRyaXAodHJpcEluZm8sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvblZhbHVlID0gZHVyYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0cmF2ZWxlcnNWYWx1ZSA9IHRyYXZlbGVyc0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgZXN0aW1hdGVkVHJpcENvc3QuaW5uZXJUZXh0ID0gYFlvdXIgRXN0aW1hdGVkIFRyaXAgQ29zdCBJczogJCR7dHJpcC5jYWxjdWxhdGVFc3RpbWF0ZWRUcmlwQ29zdChkdXJhdGlvblZhbHVlLCB0cmF2ZWxlcnNWYWx1ZSl9YDtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQZW5kaW5nVHJpcHMoKSB7XG4gICAgY29uc3QgcGVuZGluZ1RyaXBzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10cmlwcy10ZXh0XCIpO1xuICAgIGxldCBwZW5kaW5nVHJpcHNMaXN0ID0gdHJhdmVsZXIuZ2V0UGVuZGluZ1RyaXBzKCk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5T3RoZXJUcmlwcyhwZW5kaW5nVHJpcHNMaXN0LCBwZW5kaW5nVHJpcHNBcmVhLCAncGVuZGluZ0hUTUwnLCBwZW5kaW5nVHJpcHNUZXh0LCBcIlBlbmRpbmdcIik7XG4gICAgaGlkZSh0cmlwc0FyZWEpO1xuICAgIGhpZGUocGxhblRyaXBBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBzaG93KHBlbmRpbmdUcmlwc0FyZWEpO1xuICAgIGhpZGUocGFzdFRyaXBzQXJlYSk7XG4gICAgaGlkZShjdXJyZW50VHJpcHNBcmVhKTtcbiAgICBoaWRlKGFsbFRyaXBzVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlVcGNvbWluZ1RyaXBzKCkge1xuICAgIGNvbnN0IHVwY29taW5nVHJpcHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy10cmlwcy10ZXh0XCIpO1xuICAgIGxldCB1cGNvbWluZ1RyaXBzTGlzdCA9IHRyYXZlbGVyLmdldFVwY29taW5nVHJpcHMoKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlPdGhlclRyaXBzKFxuICAgICAgICB1cGNvbWluZ1RyaXBzTGlzdCxcbiAgICAgICAgdXBjb21pbmdUcmlwc0FyZWEsXG4gICAgICAgIFwidXBjb21pbmdIVE1MXCIsXG4gICAgICAgIHVwY29taW5nVHJpcHNUZXh0LFxuICAgICAgICBcIlVwY29taW5nXCJcbiAgICApO1xuICAgIGhpZGUodHJpcHNBcmVhKTtcbiAgICBoaWRlKHBsYW5UcmlwQXJlYSk7XG4gICAgc2hvdyh1cGNvbWluZ1RyaXBzQXJlYSk7XG4gICAgaGlkZShwZW5kaW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKHBhc3RUcmlwc0FyZWEpO1xuICAgIGhpZGUoY3VycmVudFRyaXBzQXJlYSk7XG4gICAgaGlkZShhbGxUcmlwc1RleHQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFzdFRyaXBzKCkge1xuICAgIGNvbnN0IHBhc3RUcmlwc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3QtdHJpcHMtdGV4dFwiKTtcbiAgICBsZXQgcGFzdFRyaXBzTGlzdCA9IHRyYXZlbGVyLmdldFBhc3RUcmlwcygpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU90aGVyVHJpcHMoXG4gICAgICAgIHBhc3RUcmlwc0xpc3QsXG4gICAgICAgIHBhc3RUcmlwc0FyZWEsXG4gICAgICAgIFwicGFzdEhUTUxcIixcbiAgICAgICAgcGFzdFRyaXBzVGV4dCxcbiAgICAgICAgXCJQcmV2aW91c1wiXG4gICAgKTtcbiAgICBoaWRlKHRyaXBzQXJlYSk7XG4gICAgaGlkZShwbGFuVHJpcEFyZWEpO1xuICAgIGhpZGUocGVuZGluZ1RyaXBzQXJlYSk7XG4gICAgc2hvdyhwYXN0VHJpcHNBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKGN1cnJlbnRUcmlwc0FyZWEpO1xuICAgIGhpZGUoYWxsVHJpcHNUZXh0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUcmlwcygpIHtcbiAgICBjb25zdCBjdXJyZW50VHJpcHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRyaXBzLXRleHRcIik7XG4gICAgbGV0IGN1cnJlbnRUcmlwc0xpc3QgPSB0cmF2ZWxlci5nZXRDdXJyZW50VHJpcHMoKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlPdGhlclRyaXBzKFxuICAgICAgICBjdXJyZW50VHJpcHNMaXN0LFxuICAgICAgICBjdXJyZW50VHJpcHNBcmVhLFxuICAgICAgICBcImN1cnJlbnRIVE1MXCIsXG4gICAgICAgIGN1cnJlbnRUcmlwc1RleHQsXG4gICAgICAgIFwiQ3VycmVudFwiXG4gICAgKTtcbiAgICBoaWRlKHRyaXBzQXJlYSk7XG4gICAgaGlkZShwbGFuVHJpcEFyZWEpO1xuICAgIGhpZGUocGVuZGluZ1RyaXBzQXJlYSk7XG4gICAgaGlkZShwYXN0VHJpcHNBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBzaG93KGN1cnJlbnRUcmlwc0FyZWEpO1xuICAgIGhpZGUoYWxsVHJpcHNUZXh0KTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuSG9tZSgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwcyh0cmF2ZWxlciwgdHJpcHNBcmVhKTtcbiAgICBhbGxUcmlwc1RleHQuaW5uZXJIVE1MID0gXCJBbGwgVHJpcHNcIjtcbiAgICBzaG93KHRyaXBzQXJlYSk7XG4gICAgc2hvdyhwbGFuVHJpcEFyZWEpO1xuICAgIGhpZGUocGVuZGluZ1RyaXBzQXJlYSk7XG4gICAgaGlkZShwYXN0VHJpcHNBcmVhKTtcbiAgICBoaWRlKHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKGN1cnJlbnRUcmlwc0FyZWEpO1xuICAgIHNob3coYWxsVHJpcHNUZXh0KTtcbn0iLCJpbXBvcnQgVHJpcCBmcm9tICcuL3RyaXAnO1xuXG5jbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyRGF0YSwgdHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuaWQgPSB0cmF2ZWxlckRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gdHJhdmVsZXJEYXRhLm5hbWU7XG4gICAgdGhpcy50cmlwRGF0YSA9IHRyaXBEYXRhO1xuICAgIHRoaXMuZGVzdGluYXRpb25EYXRhID0gZGVzdGluYXRpb25EYXRhO1xuICAgIHRoaXMudHJpcHMgPSB0aGlzLmdldEFsbFRyYXZlbGVyc1RyaXBzKCkgfHwgW107XG4gIH1cblxuICBnZXRBbGxUcmF2ZWxlcnNUcmlwcygpIHtcbiAgICBpZiAodGhpcy50cmlwRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmlwRGF0YS5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb25EYXRhLmZvckVhY2goKGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pZCA9PT0gdHJpcC51c2VySUQgJiZcbiAgICAgICAgICAgIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRvdGFsLnB1c2gobmV3IFRyaXAodHJpcCwgZGVzdGluYXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxTcGVudCh5ZWFyKSB7XG4gICAgbGV0IHRvdGFsTG9kZ2luZztcbiAgICBsZXQgdG90YWxGbGlnaHQ7XG4gICAgbGV0IGFnZW50RmVlO1xuICAgIGxldCB0b3RhbFRyaXBDb3N0ID0gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBpZiAodHJpcC5kYXRlLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgICAgIHRvdGFsTG9kZ2luZyA9IHRyaXAuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0cmlwLmR1cmF0aW9uO1xuICAgICAgICB0b3RhbEZsaWdodCA9IHRyaXAuZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbjtcbiAgICAgICAgdG90YWwgKz0gdG90YWxMb2RnaW5nICsgdG90YWxGbGlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgMCk7XG4gICAgYWdlbnRGZWUgPSB0b3RhbFRyaXBDb3N0ICogMC4xO1xuICAgIHJldHVybiBhZ2VudEZlZSArIHRvdGFsVHJpcENvc3Q7XG4gIH1cblxuICBnZXRQZW5kaW5nVHJpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMuZmlsdGVyKCh0cmlwKSA9PiB0cmlwLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFRyaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGxldCBlbmREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGVuZERhdGUuc2V0RGF0ZShlbmREYXRlLmdldERhdGUoKSArIHRyaXAuZHVyYXRpb24pO1xuICAgICAgaWYgKHN0YXJ0RGF0ZSA8IHRvZGF5ICYmIGVuZERhdGUgPiB0b2RheSkge1xuICAgICAgICB0b3RhbC5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldFBhc3RUcmlwcygpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgZW5kRGF0ZS5zZXREYXRlKGVuZERhdGUuZ2V0RGF0ZSgpICsgdHJpcC5kdXJhdGlvbik7XG4gICAgICBpZiAoZW5kRGF0ZSA8IHRvZGF5KSB7XG4gICAgICAgIHRvdGFsLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZ2V0VXBjb21pbmdUcmlwcygpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBpZiAoc3RhcnREYXRlID4gdG9kYXkpIHtcbiAgICAgICAgdG90YWwucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCBbXSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuaWQgPSB0cmlwRGF0YS5pZDtcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXBEYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSB0cmlwRGF0YS5kZXN0aW5hdGlvbklEO1xuICAgIHRoaXMudHJhdmVsZXJzID0gdHJpcERhdGEudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRyaXBEYXRhLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXBEYXRhLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gdHJpcERhdGEuc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IFtdO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbkRhdGE7XG4gIH1cblxuICBjYWxjdWxhdGVFc3RpbWF0ZWRUcmlwQ29zdChkdXJhdGlvbiwgdHJhdmVsZXJzKSB7XG4gICAgbGV0IHRvdGFsTG9kZ2luZyA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiBkdXJhdGlvbiAqIHRyYXZlbGVycztcbiAgICBsZXQgdG90YWxGbGlnaHQgPSB0aGlzLmRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmF2ZWxlcnM7XG4gICAgbGV0IHRvdGFsVHJpcENvc3QgPSB0b3RhbExvZGdpbmcgKyB0b3RhbEZsaWdodDtcbiAgICBsZXQgYWdlbnRGZWUgPSB0b3RhbFRyaXBDb3N0ICogMC4xO1xuICAgIHJldHVybiAodG90YWxUcmlwQ29zdCArIGFnZW50RmVlKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVHJpcDsiXSwic291cmNlUm9vdCI6IiJ9