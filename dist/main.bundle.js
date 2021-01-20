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
___CSS_LOADER_EXPORT___.push([module.i, "ul {\n  background-color: #CED4DA;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  justify-content: flex-end;\n  list-style-type: none;\n  margin: 0;\n  overflow: hidden;\n  padding: 0; }\n\nli {\n  float: right; }\n  li:hover {\n    background-color: #d90368; }\n\n.nav-left {\n  float: left; }\n\nli a {\n  color: #212529;\n  display: block;\n  font-weight: bold;\n  padding: 0.875rem 1rem;\n  text-align: center;\n  text-decoration: none; }\n\n.login-text {\n  text-align: center;\n  margin-top: 15%; }\n\n.login-container {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  width: 500px;\n  margin-top: 2%; }\n\n.login-form {\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  width: 500px; }\n\n.login-form-field {\n  border-radius: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 5% 0;\n  padding: 5% 15%;\n  width: 100%; }\n\n.submit-button {\n  background-color: #d90368;\n  border: none;\n  border-radius: 10px;\n  color: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 4%;\n  width: 100%;\n  font-size: 2rem; }\n\n.message {\n  text-align: center; }\n\n.card {\n  column-gap: 1rem;\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  justify-items: center;\n  padding: 30px; }\n\n.info-card {\n  align-items: center;\n  border: 1px solid #6C757D;\n  border-radius: 5px;\n  box-shadow: 0px 3px 10px 2px #6C757D;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 70%; }\n\n.image-styling {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.trip-image {\n  height: auto;\n  margin-bottom: 25%;\n  width: 100%; }\n\np {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh; }\n\nh1 {\n  color: #d90368;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold; }\n\n.user-view {\n  margin-top: 5%; }\n\n.all-trips {\n  margin-left: 2%; }\n\n.plan-trip-area {\n  margin-left: 2%; }\n\n.year-cost {\n  margin-top: 5%; }\n\n.greeting {\n  font-size: 1rem;\n  margin-top: -3%; }\n\n.destinations-list {\n  font-family: \"Montserrat\", sans-serif; }\n\n.label-names {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold; }\n\n.book-trip-form {\n  display: flex;\n  justify-content: space-around; }\n\n.button {\n  background-color: #d90368;\n  border: none;\n  border-radius: 5px;\n  color: #F8F9FA;\n  font-family: \"Montserrat\", sans-serif;\n  width: 8.5rem; }\n\n.estimated-trip-cost {\n  color: #d90368;\n  text-align: center; }\n\n.hamburger {\n  display: none; }\n\n.hidden {\n  display: none; }\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5; }\n\n@media screen and (min-width: 551px) and (max-width: 1024px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 21%; }\n  .message {\n    margin-top: 2%; }\n  .nav-bar {\n    font-size: .65rem; }\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.65rem;\n    text-align: center; }\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column; }\n  .book-travel-button,\n  .calculate-cost-button {\n    margin-top: 5%;\n    padding: 1%; }\n  .label-styling {\n    margin-top: 5%;\n    text-align: center; }\n  .hamburger {\n    display: none; }\n  .info-card {\n    width: 100%; }\n  .greeting {\n    margin-top: 0%; }\n  .travel-card-container {\n    padding: 0; } }\n\n@media screen and (max-width: 550px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 35%; }\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.25rem;\n    text-align: center; }\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column; }\n  .book-travel-button,\n  .calculate-cost-button {\n    margin-top: 5%;\n    padding: 2%; }\n  .label-styling {\n    margin-top: 5%;\n    text-align: center; }\n  .nav-bar {\n    display: none; }\n  .hamburger {\n    align-items: center;\n    background-color: #F8F9FA;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    height: 6.5vh;\n    width: 15.5vw;\n    z-index: 2; }\n  .hamburger-content {\n    background-color: #CED4DA;\n    color: #212529;\n    margin-left: 30%;\n    margin-top: 75%;\n    z-index: 2; }\n  .dropdown-item {\n    font-size: .80rem;\n    line-height: 2rem;\n    padding: .35rem; }\n  .info-card {\n    width: 100%; }\n  .travel-card-container {\n    padding: 0; } }\n", "",{"version":3,"sources":["webpack://./src/css/_navigation.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_login.scss","webpack://./src/css/_card.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"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","sourcesContent":["ul {\n    background-color: $light-grey;\n    display: flex;\n    font-family: $montserrat-font;\n    justify-content: flex-end;\n    list-style-type: none;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n}\n\nli {\n    float: right;\n\n    &:hover {\n        background-color: $hot-pink;\n    }\n}\n\n.nav-left {\n    float: left;\n}\n\nli {\n    a {\n        color: $dark-green;\n        display: block;\n        font-weight: bold;\n        padding: 0.875rem 1rem;\n        text-align: center;\n        text-decoration: none;\n    }\n}","$dark-green: #212529;\n$off-white: #F8F9FA;\n$light-grey: #CED4DA;\n$slate-grey: #6C757D;\n$hot-pink: #d90368;\n$montserrat-font: 'Montserrat',\nsans-serif;\n$shadow: 0px 3px 10px 2px $slate-grey;\n\n@mixin flexDisplay($flex, $direction) {\n    display: $flex;\n    flex-direction: $direction;\n}",".login-text {\n    text-align: center;\n    margin-top: 15%;\n}\n\n.login-container {\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    width: 500px;\n    margin-top: 2%;\n}\n\n.login-form {\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    width: 500px;\n}\n\n.login-form-field {\n    border-radius: 10px;\n    box-sizing: border-box;\n    display: inline-block;\n    margin: 5% 0;\n    padding: 5% 15%;\n    width: 100%;\n}\n\n.submit-button {\n    background-color: $hot-pink;\n    border: none;\n    border-radius: 10px;\n    color: $off-white;\n    font-family: $montserrat-font;\n    padding: 4%;\n    width: 100%;\n    font-size: 2rem;\n}\n\n.message {\n    text-align: center;\n}",".card {\n    column-gap: 1rem;\n    display: grid;\n    grid-gap: 3rem;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    justify-items: center;\n    padding: 30px;\n}\n\n.info-card {\n    align-items: center;\n    border: 1px solid $slate-grey;\n    border-radius: 5px;\n    box-shadow: $shadow;\n    @include flexDisplay(flex, column);\n    justify-content: center;\n    text-align: center;\n    width: 70%;\n}\n\n.image-styling {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.trip-image {\n    height: auto;\n    margin-bottom: 25%;\n    width: 100%;\n}\n\np {\n    margin: 0;\n    padding: 0;\n}","@import 'variables';\n@import 'navigation';\n@import 'login';\n@import 'card';\n\nbody {\n  background: $off-white;\n  font-family: $montserrat-font;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n}\n\nh1 {\n  color: $hot-pink;\n  font-family: $montserrat-font;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.user-view {\n  margin-top: 5%;\n}\n\n.all-trips {\n  margin-left: 2%;\n}\n\n.plan-trip-area {\n  margin-left: 2%;\n}\n\n.year-cost {\n  margin-top: 5%;\n}\n\n.greeting {\n  font-size: 1rem;\n  margin-top: -3%;\n}\n\n.destinations-list {\n  font-family: $montserrat-font;\n}\n\n.label-names {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.book-trip-form {\n  display: flex;\n  justify-content: space-around;\n}\n\n.button {\n  background-color: $hot-pink;\n  border: none;\n  border-radius: 5px;\n  color: $off-white;\n  font-family: $montserrat-font;\n  width: 8.5rem;\n}\n\n.estimated-trip-cost {\n  color: $hot-pink;\n  text-align: center;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n// IPAD/TABLETS\n\n@media screen and (min-width: 551px) and (max-width: 1024px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 21%;\n  }\n\n  .message {\n    margin-top: 2%;\n  }\n\n  .nav-bar {\n    font-size: .65rem;\n  }\n\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.65rem;\n    text-align: center;\n  }\n\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .book-travel-button,\n  .calculate-cost-button {\n    margin-top: 5%;\n    padding: 1%;\n  }\n\n  .label-styling {\n    margin-top: 5%;\n    text-align: center;\n  }\n\n  .hamburger {\n    display: none;\n  }\n\n  .info-card {\n    width: 100%;\n  }\n\n  .greeting {\n    margin-top: 0%;\n  }\n\n  .travel-card-container {\n    padding: 0;\n  }\n}\n\n// /SMARTPHONES/MOBILE\n\n@media screen and (max-width: 550px) {\n  .login-text {\n    font-size: 2rem;\n    margin-top: 35%;\n  }\n\n  h1,\n  .year-text,\n  .all-trips {\n    font-size: 1.25rem;\n    text-align: center;\n  }\n\n  .book-trip-form {\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .book-travel-button,\n  .calculate-cost-button {\n    margin-top: 5%;\n    padding: 2%;\n  }\n\n  .label-styling {\n    margin-top: 5%;\n    text-align: center;\n  }\n\n  .nav-bar {\n    display: none;\n  }\n\n  .hamburger {\n    align-items: center;\n    background-color: $off-white;\n    background-image: url('../images/hamburger.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    @include flexDisplay(flex, column);\n    height: 6.5vh;\n    width: 15.5vw;\n    z-index: 2;\n  }\n\n  .hamburger-content {\n    background-color: $light-grey;\n    color: $dark-green;\n    margin-left: 30%;\n    margin-top: 75%;\n    z-index: 2;\n  }\n\n  .dropdown-item {\n    font-size: .80rem;\n    line-height: 2rem;\n    padding: .35rem;\n  }\n\n  .info-card {\n    width: 100%;\n  }\n\n  .travel-card-container {\n    padding: 0;\n  }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hhbWJ1cmdlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvaGFtYnVyZ2VyLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRUQ0REE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmxpIHtcXG4gIGZsb2F0OiByaWdodDsgfVxcbiAgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwMzY4OyB9XFxuXFxuLm5hdi1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxubGkgYSB7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLmxvZ2luLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTUlOyB9XFxuXFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTAwcHg7XFxuICBtYXJnaW4tdG9wOiAyJTsgfVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDUwMHB4OyB9XFxuXFxuLmxvZ2luLWZvcm0tZmllbGQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDUlIDA7XFxuICBwYWRkaW5nOiA1JSAxNSU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTAzNjg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICNGOEY5RkE7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogNCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5jYXJkIHtcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDNyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7IH1cXG5cXG4uaW5mby1jYXJkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNkM3NTdEO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IDJweCAjNkM3NTdEO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7IH1cXG5cXG4uaW1hZ2Utc3R5bGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi50cmlwLWltYWdlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDI1JTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjRjhGOUZBO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuaDEge1xcbiAgY29sb3I6ICNkOTAzNjg7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4udXNlci12aWV3IHtcXG4gIG1hcmdpbi10b3A6IDUlOyB9XFxuXFxuLmFsbC10cmlwcyB7XFxuICBtYXJnaW4tbGVmdDogMiU7IH1cXG5cXG4ucGxhbi10cmlwLWFyZWEge1xcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuXFxuLnllYXItY29zdCB7XFxuICBtYXJnaW4tdG9wOiA1JTsgfVxcblxcbi5ncmVldGluZyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAtMyU7IH1cXG5cXG4uZGVzdGluYXRpb25zLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi5sYWJlbC1uYW1lcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmJvb2stdHJpcC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MDM2ODtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjRjhGOUZBO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiA4LjVyZW07IH1cXG5cXG4uZXN0aW1hdGVkLXRyaXAtY29zdCB7XFxuICBjb2xvcjogI2Q5MDM2ODtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5oYW1idXJnZXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5kaXNhYmxlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5sb2dpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyMSU7IH1cXG4gIC5tZXNzYWdlIHtcXG4gICAgbWFyZ2luLXRvcDogMiU7IH1cXG4gIC5uYXYtYmFyIHtcXG4gICAgZm9udC1zaXplOiAuNjVyZW07IH1cXG4gIGgxLFxcbiAgLnllYXItdGV4dCxcXG4gIC5hbGwtdHJpcHMge1xcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmJvb2stdHJpcC1mb3JtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmJvb2stdHJhdmVsLWJ1dHRvbixcXG4gIC5jYWxjdWxhdGUtY29zdC1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgcGFkZGluZzogMSU7IH1cXG4gIC5sYWJlbC1zdHlsaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5pbmZvLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmdyZWV0aW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMCU7IH1cXG4gIC50cmF2ZWwtY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmxvZ2luLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDM1JTsgfVxcbiAgaDEsXFxuICAueWVhci10ZXh0LFxcbiAgLmFsbC10cmlwcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuYm9vay10cmlwLWZvcm0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuYm9vay10cmF2ZWwtYnV0dG9uLFxcbiAgLmNhbGN1bGF0ZS1jb3N0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBwYWRkaW5nOiAyJTsgfVxcbiAgLmxhYmVsLXN0eWxpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5oYW1idXJnZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZBO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNi41dmg7XFxuICAgIHdpZHRoOiAxNS41dnc7XFxuICAgIHotaW5kZXg6IDI7IH1cXG4gIC5oYW1idXJnZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUQ0REE7XFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgICBtYXJnaW4tdG9wOiA3NSU7XFxuICAgIHotaW5kZXg6IDI7IH1cXG4gIC5kcm9wZG93bi1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAuODByZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAuMzVyZW07IH1cXG4gIC5pbmZvLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLnRyYXZlbC1jYXJkLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDA7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25hdmlnYXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2NhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSx5QkNDZ0I7RURBaEIsYUFBYTtFQUNiLHFDQ0dNO0VERk4seUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVksRUFBQTtFQURoQjtJQUlRLHlCQ1hVLEVBQUE7O0FEZWxCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VB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QUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsbUJBQW1CO0lBQ25CLHlCSC9LZTtJR2dMZix5REFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJSHpLM0IsYUcwS3lCO0lIekt6QixzQkd5S2lDO0lBQ2pDLGFBQWE7SUFDYixhQUFhO0lBQ2IsVUFBVSxFQUFBO0VBR1o7SUFDRSx5Qkh6TGdCO0lHMExoQixjSDVMZ0I7SUc2TGhCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVSxFQUFBO0VBR1o7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQUdqQjtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsVUFBVSxFQUFBLEVBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1widWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0LWZvbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICAgIGZsb2F0OiByaWdodDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG90LXBpbms7XFxuICAgIH1cXG59XFxuXFxuLm5hdi1sZWZ0IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbmxpIHtcXG4gICAgYSB7XFxuICAgICAgICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcbn1cIixcIiRkYXJrLWdyZWVuOiAjMjEyNTI5O1xcbiRvZmYtd2hpdGU6ICNGOEY5RkE7XFxuJGxpZ2h0LWdyZXk6ICNDRUQ0REE7XFxuJHNsYXRlLWdyZXk6ICM2Qzc1N0Q7XFxuJGhvdC1waW5rOiAjZDkwMzY4O1xcbiRtb250c2VycmF0LWZvbnQ6ICdNb250c2VycmF0JyxcXG5zYW5zLXNlcmlmO1xcbiRzaGFkb3c6IDBweCAzcHggMTBweCAycHggJHNsYXRlLWdyZXk7XFxuXFxuQG1peGluIGZsZXhEaXNwbGF5KCRmbGV4LCAkZGlyZWN0aW9uKSB7XFxuICAgIGRpc3BsYXk6ICRmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG59XCIsXCIubG9naW4tdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTUlO1xcbn1cXG5cXG4ubG9naW4tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG59XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmxvZ2luLWZvcm0tZmllbGQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogNSUgMDtcXG4gICAgcGFkZGluZzogNSUgMTUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG90LXBpbms7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6ICRvZmYtd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdC1mb250O1xcbiAgICBwYWRkaW5nOiA0JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLFwiLmNhcmQge1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmluZm8tY2FyZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzbGF0ZS1ncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XFxuICAgIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGZsZXgsIGNvbHVtbik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi5pbWFnZS1zdHlsaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udHJpcC1pbWFnZSB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XCIsXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcbkBpbXBvcnQgJ25hdmlnYXRpb24nO1xcbkBpbXBvcnQgJ2xvZ2luJztcXG5AaW1wb3J0ICdjYXJkJztcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICRvZmYtd2hpdGU7XFxuICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQtZm9udDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogJGhvdC1waW5rO1xcbiAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0LWZvbnQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnVzZXItdmlldyB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuXFxuLmFsbC10cmlwcyB7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbi5wbGFuLXRyaXAtYXJlYSB7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbi55ZWFyLWNvc3Qge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxufVxcblxcbi5ncmVldGluZyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAtMyU7XFxufVxcblxcbi5kZXN0aW5hdGlvbnMtbGlzdCB7XFxuICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQtZm9udDtcXG59XFxuXFxuLmxhYmVsLW5hbWVzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ib29rLXRyaXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhvdC1waW5rO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICRvZmYtd2hpdGU7XFxuICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQtZm9udDtcXG4gIHdpZHRoOiA4LjVyZW07XFxufVxcblxcbi5lc3RpbWF0ZWQtdHJpcC1jb3N0IHtcXG4gIGNvbG9yOiAkaG90LXBpbms7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLy8gSVBBRC9UQUJMRVRTXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5sb2dpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyMSU7XFxuICB9XFxuXFxuICAubWVzc2FnZSB7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbiAgfVxcblxcbiAgLm5hdi1iYXIge1xcbiAgICBmb250LXNpemU6IC42NXJlbTtcXG4gIH1cXG5cXG4gIGgxLFxcbiAgLnllYXItdGV4dCxcXG4gIC5hbGwtdHJpcHMge1xcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib29rLXRyaXAtZm9ybSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYm9vay10cmF2ZWwtYnV0dG9uLFxcbiAgLmNhbGN1bGF0ZS1jb3N0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gIH1cXG5cXG4gIC5sYWJlbC1zdHlsaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmluZm8tY2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmdyZWV0aW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMCU7XFxuICB9XFxuXFxuICAudHJhdmVsLWNhcmQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuLy8gL1NNQVJUUEhPTkVTL01PQklMRVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAubG9naW4tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMzUlO1xcbiAgfVxcblxcbiAgaDEsXFxuICAueWVhci10ZXh0LFxcbiAgLmFsbC10cmlwcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvb2stdHJpcC1mb3JtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5ib29rLXRyYXZlbC1idXR0b24sXFxuICAuY2FsY3VsYXRlLWNvc3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgfVxcblxcbiAgLmxhYmVsLXN0eWxpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm5hdi1iYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBAaW5jbHVkZSBmbGV4RGlzcGxheShmbGV4LCBjb2x1bW4pO1xcbiAgICBoZWlnaHQ6IDYuNXZoO1xcbiAgICB3aWR0aDogMTUuNXZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XFxuICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gICAgbWFyZ2luLXRvcDogNzUlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICBmb250LXNpemU6IC44MHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IC4zNXJlbTtcXG4gIH1cXG5cXG4gIC5pbmZvLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50cmF2ZWwtY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQXBpQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHVybCwgbmFtZSkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXRSZXF1ZXN0KCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEgPSBkYXRhW3RoaXMubmFtZV07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxuXG4gIGdldFNpbmdsZVJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIGZldGNoKHRoaXMudXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9XG5cbiAgcG9zdFJlcXVlc3QobmV3VHJpcCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RyaXApLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGlDYWxsOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImxldCBkb21VcGRhdGVzID0ge1xuICAgIGRpc3BsYXlUcmlwcyh0cmlwc0xpc3QsIHRyaXBzQXJlYSkge1xuICAgICAgICB0cmlwc0FyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRyaXBzTGlzdC50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICAgICAgbGV0IHRyaXBzSFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naW5mby1jYXJkJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLXN0eWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3RyaXAuZGVzdGluYXRpb24uaW1hZ2V9XCIgYWx0PVwiJHt0cmlwLmRlc3RpbmF0aW9uLmFsdH1cIiBjbGFzcz1cInRyaXAtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLmRlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufS1kZXN0aW5hdGlvblwiIGNsYXNzPVwidHJpcC1kYXRlXCI+RGVzdGluYXRpb246ICR7dHJpcC5kZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLmRhdGV9LWRhdGVcIiBjbGFzcz1cInRyaXAtZGF0ZVwiPlRyaXAgRGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5kdXJhdGlvbn0tZHVyYXRpb25cIiBjbGFzcz1cInRyaXAtZHVyYXRpb25cIj5UcmlwIER1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC50cmF2ZWxlcnN9LXRyYXZlbGVyc1wiIGNsYXNzPVwidHJpcC10cmF2ZWxlcnNcIj5OdW1iZXIgb2YgVHJhdmVsZXJzOiAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCIke3RyaXAuc3RhdHVzfS1zdGF0dXNcIiBjbGFzcz1cInRyaXAtc3RhdHVzXCI+VHJpcCBTdGF0dXM6ICR7dHJpcC5zdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgdHJpcHNBcmVhLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdHJpcHNIVE1MKVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBkaXNwbGF5T3RoZXJUcmlwcyhsaXN0VHlwZSwgbGlzdEFyZWEsIGxpc3REaXNwbGF5LCBwYWdlVGV4dCwgdHJpcFR5cGUpIHtcbiAgICAgICAgaWYgKGxpc3RUeXBlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcGFnZVRleHQuaW5uZXJUZXh0ID0gYFlvdSBIYXZlIE5vICR7dHJpcFR5cGV9IFRyaXBzIWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbGlzdFR5cGUuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdERpc3BsYXkgPSBgXG4gICAgICAgICAgIDxkaXYgY2xhc3M9J2luZm8tY2FyZCc+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2Utc3R5bGluZ1wiPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0cmlwLmRlc3RpbmF0aW9uLmltYWdlfVwiIGFsdD1cIiR7dHJpcC5kZXN0aW5hdGlvbi5hbHR9XCIgY2xhc3M9XCJ0cmlwLWltYWdlXCI+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLmRlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufS1kZXN0aW5hdGlvblwiIGNsYXNzPVwidHJpcC1kYXRlXCI+RGVzdGluYXRpb246ICR7dHJpcC5kZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC5kYXRlfS1kYXRlXCIgY2xhc3M9XCJ0cmlwLWRhdGVcIj5UcmlwIERhdGU6ICR7dHJpcC5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLmR1cmF0aW9ufS1kdXJhdGlvblwiIGNsYXNzPVwidHJpcC1kdXJhdGlvblwiPlRyaXAgRHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICAgICA8cCBpZD1cIiR7dHJpcC50cmF2ZWxlcnN9LXRyYXZlbGVyc1wiIGNsYXNzPVwidHJpcC10cmF2ZWxlcnNcIj5OdW1iZXIgb2YgVHJhdmVsZXJzOiAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgICAgIDxwIGlkPVwiJHt0cmlwLnN0YXR1c30tc3RhdHVzXCIgY2xhc3M9XCJ0cmlwLXN0YXR1c1wiPlRyaXAgU3RhdHVzOiAke3RyaXAuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICBsaXN0QXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxpc3REaXNwbGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9oYW1idXJnZXIucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0IFRyaXAgZnJvbSAnLi90cmlwJztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vYXBpQ2FsbHMnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcblxuLy8gR0xPQkFMIFZBUklBQkxFU1xuXG5sZXQgdHJhdmVsZXJBcGk7XG5sZXQgZGVzdGluYXRpb25BcGk7XG5sZXQgdHJpcEFwaTtcbmxldCBkZXN0aW5hdGlvbkluZm87XG5sZXQgdHJhdmVsZXJJbmZvO1xubGV0IHRyaXBJbmZvO1xubGV0IGN1cnJlbnRVc2VySW5mbztcbmxldCB0cmF2ZWxlcjtcbmxldCBjdXJyZW50VHJhdmVsZXI7XG5sZXQgbmV3VHJpcDtcbmxldCB0cmlwO1xubGV0IGNob3NlblVzZXJJRDtcbmNvbnN0IGJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MSc7XG5cbi8vIFFVRVJZIFNFTEVDVE9SU1xuXG5jb25zdCB0cmlwc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbC1jYXJkLWNvbnRhaW5lclwiKTtcbmNvbnN0IGFsbFRyaXBzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXRyaXBzXCIpO1xuY29uc3QgZGVzdGluYXRpb25zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzdGluYXRpb25zLWxpc3RcIik7XG5jb25zdCBwbGFuVHJpcEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYW4tdHJpcC1hcmVhXCIpO1xuXG5jb25zdCBwZW5kaW5nVHJpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlbmRpbmctdHJpcHNcIik7XG5jb25zdCBwZW5kaW5nVHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZW5kaW5nLXRyaXBzLWFyZWFcIik7XG5cbmNvbnN0IHVwY29taW5nVHJpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLXRyaXBzXCIpO1xuY29uc3QgdXBjb21pbmdUcmlwc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLXRyaXBzLWFyZWFcIik7XG5cbmNvbnN0IHBhc3RUcmlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzdC10cmlwc1wiKTtcbmNvbnN0IHBhc3RUcmlwc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3QtdHJpcHMtYXJlYVwiKTtcblxuY29uc3QgY3VycmVudFRyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRyaXBzXCIpO1xuY29uc3QgY3VycmVudFRyaXBzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10cmlwcy1hcmVhXCIpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuY29uc3QgYm9va1RyYXZlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay10cmF2ZWwtYnV0dG9uXCIpO1xuY29uc3QgY2FsY3VsYXRlVHJhdmVsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxjdWxhdGUtY29zdC1idXR0b25cIik7XG5jb25zdCBsb2dpblN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcblxuY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVyYXRpb25cIik7XG5jb25zdCB0cmF2ZWxlcnNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhdmVsZXJzXCIpO1xuY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLXBpY2tlclwiKTtcbmNvbnN0IGVzdGltYXRlZFRyaXBDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lc3RpbWF0ZWQtdHJpcC1jb3N0XCIpO1xuY29uc3QgYm9va1RyaXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLXRyaXAtZm9ybVwiKTtcblxuY29uc3QgdXNlclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItdmlld1wiKTtcbmNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tcGFnZVwiKTtcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhclwiKTtcblxuY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuY29uc3QgaGFtYnVyZ2VyTWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1jb250ZW50XCIpO1xuXG5jb25zdCBtb2JpbGVIb21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtbW9iaWxlJyk7XG5jb25zdCBtb2JpbGVDdXJyZW50VHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10cmlwcy1tb2JpbGUnKTtcbmNvbnN0IG1vYmlsZVVwY29taW5nVHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLXRyaXBzLW1vYmlsZVwiKTtcbmNvbnN0IG1vYmlsZVBlbmRpbmdUcmlwc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10cmlwcy1tb2JpbGVcIik7XG5jb25zdCBtb2JpbGVQYXN0VHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3QtdHJpcHMtbW9iaWxlXCIpO1xuXG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VybmFtZVwiKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3N3b3JkXCIpO1xuXG4vLyBFVkVOVCBMSVNURU5FUlNcbnVzZXJuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbihsb2dpblN1Ym1pdEJ1dHRvbiwgdXNlcm5hbWVJbnB1dCk7XG4gICAgfVxufSlcblxucGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICAgIGlmICh1c2VybmFtZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbihsb2dpblN1Ym1pdEJ1dHRvbiwgcGFzc3dvcmRJbnB1dCk7XG4gICAgfVxufSk7XG5cbmN1cnJlbnRUcmlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUN1cnJlbnRUcmlwcyk7XG51cGNvbWluZ1RyaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VXBjb21pbmdUcmlwcyk7XG5wZW5kaW5nVHJpcHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQZW5kaW5nVHJpcHMpO1xucGFzdFRyaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UGFzdFRyaXBzKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJldHVybkhvbWUpO1xuXG5jYWxjdWxhdGVUcmF2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BsYXlFc3RpbWF0ZWRDb3N0cyhldmVudCk7XG4gICAgaGlkZShjYWxjdWxhdGVUcmF2ZWxCdXR0b24pO1xuICAgIHNob3coYm9va1RyYXZlbEJ1dHRvbik7XG4gICAgc2hvdyhlc3RpbWF0ZWRUcmlwQ29zdCk7XG4gICAgc3VibWl0VHJpcFJlcXVlc3QoKTtcbn0pXG5cbmJvb2tUcmF2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGhpZGUoYm9va1RyYXZlbEJ1dHRvbik7XG4gICAgc2hvdyhjYWxjdWxhdGVUcmF2ZWxCdXR0b24pO1xuICAgIGhpZGUoZXN0aW1hdGVkVHJpcENvc3QpO1xuICAgIHVwZGF0ZU5ld1RyaXBCb29raW5ncyhldmVudCk7XG4gICAgY2xlYXJUcmF2ZWxJbnB1dHMoKTtcbn0pO1xuXG5sb2dpblN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIHNob3codXNlclZpZXcpO1xuICAgIHNob3cobmF2YmFyKTtcbiAgICBoaWRlKGxvZ2luUGFnZSk7XG4gICAgc2hvdyhoYW1idXJnZXJNZW51KTtcbiAgICBsb2dpblVzZXIoZXZlbnQpO1xufSk7XG5cbmhhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUhhbWJ1cmdlck1lbnVEcm9wZG93bik7XG5tb2JpbGVIb21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXR1cm5Ib21lKTtcblxubW9iaWxlQ3VycmVudFRyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5Q3VycmVudFRyaXBzKTtcbm1vYmlsZVVwY29taW5nVHJpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlVcGNvbWluZ1RyaXBzKTtcbm1vYmlsZVBlbmRpbmdUcmlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVBlbmRpbmdUcmlwcyk7XG5tb2JpbGVQYXN0VHJpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQYXN0VHJpcHMpO1xuXG5mdW5jdGlvbiBsb2dpblVzZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNob3NlblVzZXJJRCA9IHVzZXJuYW1lSW5wdXQudmFsdWUuc3BsaXQoXCJcIikuc3BsaWNlKDgsIDMpLmpvaW4oXCJcIik7XG4gICAgaWYgKHVzZXJuYW1lSW5wdXQudmFsdWUuc2xpY2UoMCwgOCkgPT09IFwidHJhdmVsZXJcIiAmJiB1c2VybmFtZUlucHV0LnZhbHVlLnNsaWNlKDgpID4gMCAmJiB1c2VybmFtZUlucHV0LnZhbHVlLnNsaWNlKDgpIDw9IDUwICYmIHBhc3N3b3JkSW5wdXQudmFsdWUgPT09ICd0cmF2ZWxlcjIwMjAnKSB7XG4gICAgICAgIGdldEFsbERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlKHVzZXJWaWV3KTtcbiAgICAgICAgc2hvdyhsb2dpblBhZ2UpO1xuICAgICAgICBoaWRlKG5hdmJhcik7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoJ1lvdSBoYXZlIGVudGVyZWQgdGhlIHdyb25nIHVzZXJuYW1lIG9yIHBhc3N3b3JkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxsRGF0YSgpIHtcbiAgICB0cmF2ZWxlckFwaSA9IG5ldyBBcGlDYWxsKGAke2Jhc2VVUkx9L3RyYXZlbGVyc2AsIFwidHJhdmVsZXJzXCIpO1xuICAgIGRlc3RpbmF0aW9uQXBpID0gbmV3IEFwaUNhbGwoYCR7YmFzZVVSTH0vZGVzdGluYXRpb25zYCwgXCJkZXN0aW5hdGlvbnNcIik7XG4gICAgdHJpcEFwaSA9IG5ldyBBcGlDYWxsKGAke2Jhc2VVUkx9L3RyaXBzYCwgXCJ0cmlwc1wiKTtcbiAgICBjdXJyZW50VHJhdmVsZXIgPSBuZXcgQXBpQ2FsbChgJHtiYXNlVVJMfS90cmF2ZWxlcnMvJHtjaG9zZW5Vc2VySUR9YCk7XG4gICAgb25Mb2FkKCk7XG59XG5cbmZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICBsZXQgdHJhdmVsZXJEYXRhID0gdHJhdmVsZXJBcGkuZ2V0UmVxdWVzdCgpO1xuICAgIGxldCBkZXN0aW5hdGlvbkRhdGEgPSBkZXN0aW5hdGlvbkFwaS5nZXRSZXF1ZXN0KCk7XG4gICAgbGV0IHRyaXBEYXRhID0gdHJpcEFwaS5nZXRSZXF1ZXN0KCk7XG4gICAgbGV0IHNpbmdsZURhdGEgPSBjdXJyZW50VHJhdmVsZXIuZ2V0U2luZ2xlUmVxdWVzdCgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFt0cmF2ZWxlckRhdGEsIGRlc3RpbmF0aW9uRGF0YSwgdHJpcERhdGEsIHNpbmdsZURhdGFdKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJhdmVsZXJJbmZvID0gZGF0YVswXTtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uSW5mbyA9IGRhdGFbMV07XG4gICAgICAgICAgICB0cmlwSW5mbyA9IGRhdGFbMl07XG4gICAgICAgICAgICBjdXJyZW50VXNlckluZm8gPSBkYXRhWzNdO1xuICAgICAgICAgICAgYnVpbGRQYWdlKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU5ld1RyaXBCb29raW5ncyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0QWxsRGF0YShjaG9zZW5Vc2VySUQpO1xufVxuXG5mdW5jdGlvbiBmaWxsRHJvcGRvd24oKSB7XG4gICAgbGV0IHNvcnRlZERlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uSW5mby5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmRlc3RpbmF0aW9uIDwgYi5kZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHNvcnRlZERlc3RpbmF0aW9ucy5mb3JFYWNoKChkZXN0aW5hdGlvbikgPT4ge1xuICAgICAgICBkZXN0aW5hdGlvbnNMaXN0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCAnJyk7XG4gICAgICAgIGxldCBkZXN0aW5hdGlvbnNPcHRpb25zID0gYDxvcHRpb24+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L29wdGlvbj5gO1xuICAgICAgICBkZXN0aW5hdGlvbnNMaXN0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBkZXN0aW5hdGlvbnNPcHRpb25zKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYWdlKGN1cnJlbnRVc2VySW5mbywgdHJpcEluZm8sIGRlc3RpbmF0aW9uSW5mbykge1xuICAgIGNvbnN0IHllYXJDb3N0MjAyMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueWVhci1jb3N0LTIwMjBcIik7XG4gICAgY29uc3QgeWVhckNvc3QyMDE5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55ZWFyLWNvc3QtMjAxOVwiKTtcbiAgICBjcmVhdGVUcmF2ZWxlclByb2ZpbGUoY3VycmVudFVzZXJJbmZvLCB0cmlwSW5mbywgZGVzdGluYXRpb25JbmZvKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwcyh0cmF2ZWxlciwgdHJpcHNBcmVhKTtcbiAgICB5ZWFyQ29zdDIwMTkuaW5uZXJUZXh0ID0gYFlvdXIgMjAyMCB0cmlwIGNvc3QgaXM6ICQke3RyYXZlbGVyLmNhbGN1bGF0ZVRvdGFsU3BlbnQoXCIyMDIwXCIpfWA7XG4gICAgeWVhckNvc3QyMDIwLmlubmVyVGV4dCA9IGBZb3VyIDIwMjEgdHJpcCBjb3N0IGlzOiAkJHt0cmF2ZWxlci5jYWxjdWxhdGVUb3RhbFNwZW50KFwiMjAyMVwiKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmF2ZWxlclByb2ZpbGUoY3VycmVudFVzZXJJbmZvLCB0cmlwSW5mbywgZGVzdGluYXRpb25JbmZvKSB7XG4gICAgY29uc3QgZ3JlZXRVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVldGluZ1wiKTtcbiAgICBncmVldFVzZXIuaW5uZXJUZXh0ID0gYEhlbGxvLCAke2N1cnJlbnRVc2VySW5mby5uYW1lfSFgXG4gICAgdHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIoY3VycmVudFVzZXJJbmZvLCB0cmlwSW5mbywgZGVzdGluYXRpb25JbmZvKTtcbiAgICBmaWxsRHJvcGRvd24oKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5ld1RyaXAoKSB7XG4gICAgbGV0IHRyYXZlbGVySW5wdXRWYWx1ZSA9IHBhcnNlSW50KHRyYXZlbGVyc0lucHV0LnZhbHVlKTtcbiAgICBsZXQgZHVyYXRpb25JbnB1dFZhbHVlID0gcGFyc2VJbnQoZHVyYXRpb25JbnB1dC52YWx1ZSk7XG4gICAgbGV0IG5ld0RhdGVGb3JtYXQgPSBzdGFydERhdGUudmFsdWUuc3BsaXQoXCItXCIpLmpvaW4oXCIvXCIpO1xuICAgIGxldCBkZXN0aW5hdGlvbklucHV0VmFsdWUgPSBmaWx0ZXJEZXN0aW5hdGlvbnMoKVxuICAgIGxldCB1bmlxdWVJRCA9IGdldE5ld0lEKCk7XG5cbiAgICBuZXdUcmlwID0ge1xuICAgICAgICBpZDogdW5pcXVlSUQsXG4gICAgICAgIHVzZXJJRDogY3VycmVudFVzZXJJbmZvLmlkLFxuICAgICAgICBkZXN0aW5hdGlvbklEOiBkZXN0aW5hdGlvbklucHV0VmFsdWUsXG4gICAgICAgIHRyYXZlbGVyczogdHJhdmVsZXJJbnB1dFZhbHVlLFxuICAgICAgICBkYXRlOiBuZXdEYXRlRm9ybWF0LFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25JbnB1dFZhbHVlLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXSxcbiAgICB9O1xuICAgIHJldHVybiBuZXdUcmlwO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJEZXN0aW5hdGlvbnMoKSB7XG4gICAgbGV0IGRlc3RpbmF0aW9uQm9va2luZ0lEO1xuICAgIGRlc3RpbmF0aW9uSW5mby5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uID09PSBkZXN0aW5hdGlvbnNMaXN0LnZhbHVlKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbkJvb2tpbmdJRCA9IGRlc3RpbmF0aW9uLmlkO1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZGVzdGluYXRpb25Cb29raW5nSUQ7XG59XG5cbmZ1bmN0aW9uIGdldE5ld0lEKCkge1xuICAgIHJldHVybiB0cmlwSW5mby5sZW5ndGggKyAxXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRyaXBSZXF1ZXN0KCkge1xuICAgIGxldCBwb3N0T3B0aW9uID0gbWFrZU5ld1RyaXAoKTtcbiAgICBsZXQgbmV3VHJpcEJvb2tpbmcgPSBuZXcgQXBpQ2FsbChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCJcbiAgICApO1xuICAgIG5ld1RyaXBCb29raW5nLnBvc3RSZXF1ZXN0KHBvc3RPcHRpb24pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZVwiKTtcbiAgICBtZXNzYWdlcy5pbm5lclRleHQgPSBtZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBjbGVhclRyYXZlbElucHV0cygpIHtcbiAgICBkdXJhdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICB0cmF2ZWxlcnNJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgc3RhcnREYXRlLnZhbHVlID0gXCJcIjtcbiAgICBkZXN0aW5hdGlvbnNMaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xufVxuXG5mdW5jdGlvbiBzaG93KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQnV0dG9uKGJ1dHRvbiwgaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUhhbWJ1cmdlck1lbnVEcm9wZG93bigpIHtcbiAgICBoYW1idXJnZXJNZW51Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXN0aW1hdGVkQ29zdHMoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZGVzdGluYXRpb25JbmZvLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgICBpZiAoZGVzdGluYXRpb25zTGlzdC52YWx1ZSA9PT0gZGVzdGluYXRpb24uZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHRyaXAgPSBuZXcgVHJpcCh0cmlwSW5mbywgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uVmFsdWUgPSBkdXJhdGlvbklucHV0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IHRyYXZlbGVyc1ZhbHVlID0gdHJhdmVsZXJzSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBlc3RpbWF0ZWRUcmlwQ29zdC5pbm5lclRleHQgPSBgWW91ciBFc3RpbWF0ZWQgVHJpcCBDb3N0IElzOiAkJHt0cmlwLmNhbGN1bGF0ZUVzdGltYXRlZFRyaXBDb3N0KGR1cmF0aW9uVmFsdWUsIHRyYXZlbGVyc1ZhbHVlKX1gO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBlbmRpbmdUcmlwcygpIHtcbiAgICBjb25zdCBwZW5kaW5nVHJpcHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZW5kaW5nLXRyaXBzLXRleHRcIik7XG4gICAgbGV0IHBlbmRpbmdUcmlwc0xpc3QgPSB0cmF2ZWxlci5nZXRQZW5kaW5nVHJpcHMoKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlPdGhlclRyaXBzKHBlbmRpbmdUcmlwc0xpc3QsIHBlbmRpbmdUcmlwc0FyZWEsICdwZW5kaW5nSFRNTCcsIHBlbmRpbmdUcmlwc1RleHQsIFwiUGVuZGluZ1wiKTtcbiAgICBoaWRlKHRyaXBzQXJlYSk7XG4gICAgaGlkZShwbGFuVHJpcEFyZWEpO1xuICAgIGhpZGUodXBjb21pbmdUcmlwc0FyZWEpO1xuICAgIHNob3cocGVuZGluZ1RyaXBzQXJlYSk7XG4gICAgaGlkZShwYXN0VHJpcHNBcmVhKTtcbiAgICBoaWRlKGN1cnJlbnRUcmlwc0FyZWEpO1xuICAgIGhpZGUoYWxsVHJpcHNUZXh0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVVwY29taW5nVHJpcHMoKSB7XG4gICAgY29uc3QgdXBjb21pbmdUcmlwc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLXRyaXBzLXRleHRcIik7XG4gICAgbGV0IHVwY29taW5nVHJpcHNMaXN0ID0gdHJhdmVsZXIuZ2V0VXBjb21pbmdUcmlwcygpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU90aGVyVHJpcHMoXG4gICAgICAgIHVwY29taW5nVHJpcHNMaXN0LFxuICAgICAgICB1cGNvbWluZ1RyaXBzQXJlYSxcbiAgICAgICAgXCJ1cGNvbWluZ0hUTUxcIixcbiAgICAgICAgdXBjb21pbmdUcmlwc1RleHQsXG4gICAgICAgIFwiVXBjb21pbmdcIlxuICAgICk7XG4gICAgaGlkZSh0cmlwc0FyZWEpO1xuICAgIGhpZGUocGxhblRyaXBBcmVhKTtcbiAgICBzaG93KHVwY29taW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKHBlbmRpbmdUcmlwc0FyZWEpO1xuICAgIGhpZGUocGFzdFRyaXBzQXJlYSk7XG4gICAgaGlkZShjdXJyZW50VHJpcHNBcmVhKTtcbiAgICBoaWRlKGFsbFRyaXBzVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYXN0VHJpcHMoKSB7XG4gICAgY29uc3QgcGFzdFRyaXBzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzdC10cmlwcy10ZXh0XCIpO1xuICAgIGxldCBwYXN0VHJpcHNMaXN0ID0gdHJhdmVsZXIuZ2V0UGFzdFRyaXBzKCk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5T3RoZXJUcmlwcyhcbiAgICAgICAgcGFzdFRyaXBzTGlzdCxcbiAgICAgICAgcGFzdFRyaXBzQXJlYSxcbiAgICAgICAgXCJwYXN0SFRNTFwiLFxuICAgICAgICBwYXN0VHJpcHNUZXh0LFxuICAgICAgICBcIlByZXZpb3VzXCJcbiAgICApO1xuICAgIGhpZGUodHJpcHNBcmVhKTtcbiAgICBoaWRlKHBsYW5UcmlwQXJlYSk7XG4gICAgaGlkZShwZW5kaW5nVHJpcHNBcmVhKTtcbiAgICBzaG93KHBhc3RUcmlwc0FyZWEpO1xuICAgIGhpZGUodXBjb21pbmdUcmlwc0FyZWEpO1xuICAgIGhpZGUoY3VycmVudFRyaXBzQXJlYSk7XG4gICAgaGlkZShhbGxUcmlwc1RleHQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFRyaXBzKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUcmlwc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdHJpcHMtdGV4dFwiKTtcbiAgICBsZXQgY3VycmVudFRyaXBzTGlzdCA9IHRyYXZlbGVyLmdldEN1cnJlbnRUcmlwcygpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU90aGVyVHJpcHMoXG4gICAgICAgIGN1cnJlbnRUcmlwc0xpc3QsXG4gICAgICAgIGN1cnJlbnRUcmlwc0FyZWEsXG4gICAgICAgIFwiY3VycmVudEhUTUxcIixcbiAgICAgICAgY3VycmVudFRyaXBzVGV4dCxcbiAgICAgICAgXCJDdXJyZW50XCJcbiAgICApO1xuICAgIGhpZGUodHJpcHNBcmVhKTtcbiAgICBoaWRlKHBsYW5UcmlwQXJlYSk7XG4gICAgaGlkZShwZW5kaW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKHBhc3RUcmlwc0FyZWEpO1xuICAgIGhpZGUodXBjb21pbmdUcmlwc0FyZWEpO1xuICAgIHNob3coY3VycmVudFRyaXBzQXJlYSk7XG4gICAgaGlkZShhbGxUcmlwc1RleHQpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Ib21lKCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRyaXBzKHRyYXZlbGVyLCB0cmlwc0FyZWEpO1xuICAgIGFsbFRyaXBzVGV4dC5pbm5lckhUTUwgPSBcIkFsbCBUcmlwc1wiO1xuICAgIHNob3codHJpcHNBcmVhKTtcbiAgICBzaG93KHBsYW5UcmlwQXJlYSk7XG4gICAgaGlkZShwZW5kaW5nVHJpcHNBcmVhKTtcbiAgICBoaWRlKHBhc3RUcmlwc0FyZWEpO1xuICAgIGhpZGUodXBjb21pbmdUcmlwc0FyZWEpO1xuICAgIGhpZGUoY3VycmVudFRyaXBzQXJlYSk7XG4gICAgc2hvdyhhbGxUcmlwc1RleHQpO1xufSIsImltcG9ydCBUcmlwIGZyb20gJy4vdHJpcCc7XG5cbmNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyRGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlckRhdGEubmFtZTtcbiAgICB0aGlzLnRyaXBEYXRhID0gdHJpcERhdGE7XG4gICAgdGhpcy5kZXN0aW5hdGlvbkRhdGEgPSBkZXN0aW5hdGlvbkRhdGE7XG4gICAgdGhpcy50cmlwcyA9IHRoaXMuZ2V0QWxsVHJhdmVsZXJzVHJpcHMoKSB8fCBbXTtcbiAgfVxuXG4gIGdldEFsbFRyYXZlbGVyc1RyaXBzKCkge1xuICAgIGlmICh0aGlzLnRyaXBEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnRyaXBEYXRhLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbkRhdGEuZm9yRWFjaCgoZGVzdGluYXRpb24pID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmlkID09PSB0cmlwLnVzZXJJRCAmJlxuICAgICAgICAgICAgdHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdG90YWwucHVzaChuZXcgVHJpcCh0cmlwLCBkZXN0aW5hdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbFNwZW50KHllYXIpIHtcbiAgICBsZXQgdG90YWxMb2RnaW5nO1xuICAgIGxldCB0b3RhbEZsaWdodDtcbiAgICBsZXQgYWdlbnRGZWU7XG4gICAgbGV0IHRvdGFsVHJpcENvc3QgPSB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGlmICh0cmlwLmRhdGUuaW5jbHVkZXMoeWVhcikpIHtcbiAgICAgICAgdG90YWxMb2RnaW5nID0gdHJpcC5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRyaXAuZHVyYXRpb247XG4gICAgICAgIHRvdGFsRmxpZ2h0ID0gdHJpcC5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICAgICAgICB0b3RhbCArPSB0b3RhbExvZGdpbmcgKyB0b3RhbEZsaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCAwKTtcbiAgICBhZ2VudEZlZSA9IHRvdGFsVHJpcENvc3QgKiAwLjE7XG4gICAgcmV0dXJuIGFnZW50RmVlICsgdG90YWxUcmlwQ29zdDtcbiAgfVxuXG4gIGdldFBlbmRpbmdUcmlwcygpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5maWx0ZXIoKHRyaXApID0+IHRyaXAuc3RhdHVzID09PSBcInBlbmRpbmdcIik7XG4gIH1cblxuICBnZXRDdXJyZW50VHJpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMucmVkdWNlKCh0b3RhbCwgdHJpcCkgPT4ge1xuICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBzdGFydERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgZW5kRGF0ZS5zZXREYXRlKGVuZERhdGUuZ2V0RGF0ZSgpICsgdHJpcC5kdXJhdGlvbik7XG4gICAgICBpZiAoc3RhcnREYXRlIDwgdG9kYXkgJiYgZW5kRGF0ZSA+IHRvZGF5KSB7XG4gICAgICAgIHRvdGFsLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZ2V0UGFzdFRyaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBlbmREYXRlLnNldERhdGUoZW5kRGF0ZS5nZXREYXRlKCkgKyB0cmlwLmR1cmF0aW9uKTtcbiAgICAgIGlmIChlbmREYXRlIDwgdG9kYXkpIHtcbiAgICAgICAgdG90YWwucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXRVcGNvbWluZ1RyaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTtcbiAgICAgIGlmIChzdGFydERhdGUgPiB0b2RheSkge1xuICAgICAgICB0b3RhbC5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sIFtdKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyOyIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyaXBEYXRhLmlkO1xuICAgIHRoaXMudXNlcklEID0gdHJpcERhdGEudXNlcklEO1xuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IHRyaXBEYXRhLmRlc3RpbmF0aW9uSUQ7XG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmlwRGF0YS50cmF2ZWxlcnM7XG4gICAgdGhpcy5kYXRlID0gdHJpcERhdGEuZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcERhdGEuZHVyYXRpb247XG4gICAgdGhpcy5zdGF0dXMgPSB0cmlwRGF0YS5zdGF0dXM7XG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gW107XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUVzdGltYXRlZFRyaXBDb3N0KGR1cmF0aW9uLCB0cmF2ZWxlcnMpIHtcbiAgICBsZXQgdG90YWxMb2RnaW5nID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIGR1cmF0aW9uICogdHJhdmVsZXJzO1xuICAgIGxldCB0b3RhbEZsaWdodCA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRyYXZlbGVycztcbiAgICBsZXQgdG90YWxUcmlwQ29zdCA9IHRvdGFsTG9kZ2luZyArIHRvdGFsRmxpZ2h0O1xuICAgIGxldCBhZ2VudEZlZSA9IHRvdGFsVHJpcENvc3QgKiAwLjE7XG4gICAgcmV0dXJuICh0b3RhbFRyaXBDb3N0ICsgYWdlbnRGZWUpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUcmlwOyJdLCJzb3VyY2VSb290IjoiIn0=