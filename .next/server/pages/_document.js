module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5w0S");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5w0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VBo9");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Zfpz");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8lYe");








class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_5___default.a {
  constructor(props) {
    super(props);

    this._goPage = (paramRouterName, paramQuery) => {
      // import Router from 'next/router';
      // current page -> reload page
      if (paramRouterName === '/') {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: paramRouterName
        });
        return;
      }

      if (window.location.href.indexOf(paramRouterName) > -1) {
        window.location.reload();
        return;
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: paramRouterName
        });
        return;
      }
    };

    this.state = {
      sample_images: ['sample_001.jpg']
    };
  }

  componentDidMount() {}

  render() {
    const prefix = true ? 'http://endeavor5.github.io/park_jung_hyo_font_1' : undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_5__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Park Jung Hyo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Park Jung Hyo."
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      property: "og:title",
      content: `Park Jung Hyo.`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: `${prefix}/static/css/font.css`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/react-rangeslider/umd/rangeslider.min.css"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_5__["Main"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_5__["NextScript"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      jsx: "true",
      global: "true",
      suppressHydrationWarning: true
    }, `
                        @font-face {
                            font-family: "Earth_FinalGX";
                            src: url('https://drive.google.com/file/d/1kY12bdiHZHlIR_wX3bgxhovWF_rfM4NH/view?usp=sharing') format("truetype");
                          }
                .scrollbar_hidden {
                    -ms-overflow-style: auto; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .scrollbar_hidden::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Opera*/
                }
                    input::placeholder{
                        color: rgba(0,0,0,0.4);
                    }
                    @font-face { 
                        font-family: 'GmarketSansBold'; 
                        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff'); 
                        font-weight: normal; font-style: normal; 
                    }
                    .popup_overlay {
                        width: 100%;
                        display: flex;
                        z-index: 9999;
                        position: absolute;
                        align-items: center;
                        justify-content: center;

                        top: 0;
                        bottom:0;
                    }
                    .popup_input_wrapper {
                        width: 100%;
                        height: 48px;
                        border: solid 1px #eaeaea;
                        background-color: #ffffff;
                        display: flex;
                        align-items: center;
                    }
                    .popup_input_content {
                        width : 556px;
                        height: 30px;
                        border: none;
                        outline: none;
                        margin-left: 16px;
                    }

                    .content-max-width-class {
                        max-width: 1200px;
                        overflow-y: hidden;
                    }
                    .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                        display: flex;
                    }
                    .is_desktop_laptop_tablet_phone_xsmall {
                        display: flex;
                    }
                    .is_desktop_laptop_tablet_phone {
                        display: flex;
                    }
                    .is_desktop_laptop_tablet {
                        display: flex;
                    }
                    .is_desktop_laptop {
                        display: flex;
                    }
                    .is_desktop {
                        display: flex;
                    }
                    .is_laptop_tablet_phone_xsmall_xxsmall {
                        display: none;
                    }
                    .is_laptop_tablet_phone_xsmall {
                        display: none;
                    }
                    .is_laptop_tablet_phone {
                        display: none;
                    }
                    .is_laptop_tablet {
                        display: none;
                    }
                    .is_laptop {
                        display: none;
                    }
                    .is_tablet_phone_xsmall_xxsmall {
                        display: none;
                    }
                    .is_tablet_phone_xsmall {
                        display: none;
                    }
                    .is_tablet_phone {
                        display: none;
                    }
                    .is_tablet {
                        display: none;
                    }
                    .is_phone_xsmall_xxsmall {
                        display: none;
                    }
                    .is_phone_xsmall {
                        display: none;
                    }
                    .is_phone {
                        display: none;
                    }
                    .is_xsmall_xxsmall {
                        display: none;
                    }
                    .is_xsmall {
                        display: none;
                    }
                    .is_xxsmall {
                        display: none;
                    }
                    ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                        padding-left: 20px;
                        padding-right: 20px;
                    }


                    body {
                        font-family: "Noto Sans KR", sans-serif !important;
                        margin : 0;
                    }
                    .footer-text-divider {
                        width: 1px;
                        height: 12px;
                        background-color: #eaeaea;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                    .footer-text {
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: -0.48px;
                        text-align: center;
                        color: rgba(0, 0, 0, 0.6);
                        word-wrap: keep-all;
                        z-index: 100;
                    }
                    .footer-content {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .footer-content-1 {
                        margin-top: 80px;
                    }
                    .footer-content-2 {
                        margin-top: 24px;
                    }
                    
                    .logo {
                        width: 140px;
                        height: 16px;
                        font-family: GmarketSansBold;
                        background: url(${prefix}/static/images/logo_top_left.png);
                        object-fit: cover; 
                        background-repeat:no-repeat;
                        background-position: center center;
                    }
                    a {

                        text-decoration: none;
                    }
                    .footer-wrapper {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        height: auto;
                        background-color: #fafafa;
                        margin-top: 120px;
                    }

                    .cursor_pointer {
                        cursor: pointer;
                    }
                    .not_draggable {
                        user-drag: none;
                        user-select: none;
                        -moz-user-select: none;
                        -webkit-user-drag: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                    }
                    #header {
                        width: 100%;
                        opacity: 1;
                        visibility: visible;
                        transition: .3s all ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-bottom: 1px solid #f0f0f0;
                    }
                    .max-width-wrapper {
                        max-width: 1200px;
                    }

                    #header .header-wrapper {
                        width: 100%;
                        height: 72px;
                        align-items: center;
                        padding-left: 20px;
                        padding-right: 20px;
                        max-width: 1200px;
                    }

                    .header-left {
                        width: 50%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content : flex-start;
                    }
                    .header-right {
                        width: 50%;
                        height: 100%;
                        right: 0;
                        float : right;
                        display: flex;
                        align-items: center;
                        justify-content : flex-end;
                    }
                    .header-center-content {
                        width: auto;
                        position: absolute;
                        margin-left : 200px;
                        display: flex;
                    }
                    .menu-item {
                        margin-right: 32px;
                        color: rgba(0, 0, 0, 0.6);
                        font-family: Noto Sans KR
                        white-space:nowrap;
                    }
                    .menu-item:hover { 
                        color : #f84300;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                    .cs-item {
                        color: rgba(0, 0, 0, 0.6);
                        font-family: Noto Sans KR;
                        white-space:nowrap;
                    }
                    .content-input-max-width-class-2 {
                       
                    }
                    .overflow_x_scroll {
                        overflow-x : scroll;
                    }

                    .overflow_y_scroll {
                        overflow-y : scroll;
                    }
                        
                    /* Extra x-small devices (phones, 400px and down) */
                    @media only screen and (max-width: 400px) {
                        /* ... */

                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: none;
                        }
                        .is_desktop_laptop_tablet {
                            display: none;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_laptop_tablet_phone {
                            display: none;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }


                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }

                        .content-max-width-class {
                            max-width: 400px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 20px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 240px;
                        }
                        .popup_close_row {
                            display: flex;
                        }
                    }
                    /* Extra small devices (phones, 400px and down) */
                    @media only screen and (min-width: 400px) {
                        /* ... */
                        
                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: none;
                        }
                        .is_desktop_laptop_tablet {
                            display: none;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: none;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_phone_xsmall {
                            display: flex;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_xsmall {
                            display: flex;
                        }
                        .is_xxsmall {
                            display: none;
                        }
                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }
                        .content-max-width-class {
                            max-width: 400px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 380px;
                        }
                        .popup_close_row {
                            display: flex;
                        }
                    }
                    /* Small devices (portrait tablets and large phones, 600px and up) */
                    @media only screen and (min-width: 600px) {
                        /* ... */

                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: none;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_tablet_phone {
                            display: flex;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_phone_xsmall {
                            display: flex;
                        }
                        .is_phone {
                            display: flex;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }
                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }
                        .content-max-width-class {
                            max-width: 600px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 500px;
                        }
                        .popup_close_row {
                            display: flex;
                        }
                    }
                    /* Medium devices (landscape tablets, 768px and up) */
                    @media only screen and (min-width: 768px) {
                        /* ... */

                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: flex;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_laptop_tablet {
                            display: flex;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_tablet_phone {
                            display: flex;
                        }
                        .is_tablet {
                            display: flex;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }
                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }
                        .content-max-width-class {
                            max-width: 768px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 600px;
                        }
                        .popup_close_row {
                            display: none;
                        }
                    }
                    /* Large devices (laptops/desktops, 992px and up) */
                    @media only screen and (min-width: 992px) {
                        /* ... */


                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: flex;
                        }
                        .is_desktop_laptop {
                            display: flex;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_laptop_tablet {
                            display: flex;
                        }
                        .is_laptop {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }

                        .header-left {
                            width: 80%;
                        }
                        .header-right {
                            width: 20%;
                        }
                        .content-max-width-class {
                            max-width: 992px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 792px;
                        }
                        .popup_close_row {
                            display: none;
                        }
                    }
                    /* Extra large devices (large laptops and desktops, 1200px and up) */
                    @media only screen and (min-width: 1200px) {
                        /* ... */
                        
                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: flex;
                        }
                        .is_desktop_laptop {
                            display: flex;
                        }
                        .is_desktop {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_laptop_tablet_phone {
                            display: none;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }
    
                        .header-left {
                            width: 80%;
                        }
                        .header-right {
                            width: 20%;
                        }
                        .content-max-width-class {
                            max-width: 1200px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 0px;
                            margin-right: 0px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: row;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 50%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 0px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 1200px;
                        }
                        .popup_close_row {
                            display: none;
                        }
                    }
                    `)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomDocument);

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VBo9");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Zfpz");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eJK0");
var _class, _temp;








let Footer = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class = (_temp = class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); //사용자가 입력한 props 처리
    // console.log(this.props.path);

    this._goPage = (paramRouterName, paramQuery) => {
      // import Router from 'next/router';
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
        pathname: paramRouterName
      });
    };

    this.state = {};
  }

  componentDidMount() {}

  onResize() {
    this.setState({
      layoutMode: this.getLayoutMode()
    });
    const mobile_drawer_menu = document.getElementById("mobile_drawer_menu");
    const icon = document.getElementsByClassName("icon");

    if (this.state.layoutMode == 'desktop') {
      if (icon[0].classList.contains('close')) {
        icon[0].classList.remove('close');
      }

      if (mobile_drawer_menu.classList.contains('open')) {
        mobile_drawer_menu.classList.remove('open');
      }
    }
  }

  render() {
    const {
      path,
      footerGap
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: "footer-wrapper",
      style: {
        marginTop: footerGap == null || footerGap === undefined ? 400 : 400 + footerGap
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "is_desktop_laptop",
      style: {
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-content footer-content-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR"
      } // onClick={()=> {
      //     this._goPage('/service/introduce')
      // }}

    }, "\uD68C\uC0AC\uC18C\uAC1C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR"
      } // onClick={()=> {
      //     this._goPage('/service/privacy')
      // }}

    }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR"
      },
      onClick: () => {
        this._goPage('/service/faq');
      }
    }, "\uC790\uC8FC\uBB3B\uB294\uC9C8\uBB38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR"
      } // onClick={()=> {
      //     this._goPage('/service/ask')
      // }}

    }, "\uACE0\uAC1D\uC13C\uD130")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-content footer-content-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text not_draggable _is_padding_laptop_tablet_phone_xsmall_xxsmall",
      style: {
        fontFamily: "Noto Sans KR",
        verticalAlign: 'middle'
      }
    }, "\uD574\uB2F9 \uD398\uC774\uC9C0\uC758 \uC800\uC791\uAD8C\uC740 \uC81C\uACF5\uCC98\uC5D0 \uC788\uC73C\uBA70, \uC774\uB97C \uBB34\uB2E8 \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0 \uC800\uC791\uAD8C\uBC95 \uB4F1\uC5D0 \uB530\uB77C \uCC98\uBC8C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Park Jung Hyo. Copyright \u24D2 2020. All Rights Reserved.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: 80
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "is_tablet_phone_xsmall_xxsmall",
      style: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR",
        fontSize: 14,
        marginTop: 32,
        marginLeft: 24
      } // onClick={()=> {
      //     this._goPage('/service/introduce')
      // }}

    }, "\uD68C\uC0AC\uC18C\uAC1C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR",
        fontSize: 14,
        marginTop: 12,
        marginLeft: 24
      } // onClick={()=> {
      //     this._goPage('/service/privacy')
      // }}

    }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR",
        fontSize: 14,
        marginTop: 12,
        marginLeft: 24
      } // onClick={()=> {
      //     this._goPage('/service/faq')
      // }}

    }, "\uC790\uC8FC\uBB3B\uB294\uC9C8\uBB38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text cursor_pointer not_draggable",
      style: {
        fontFamily: "Noto Sans KR",
        fontSize: 14,
        marginTop: 12,
        marginLeft: 24
      } // onClick={()=> {
      //     this._goPage('/service/ask')
      // }}

    }, "\uACE0\uAC1D\uC13C\uD130"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-text not_draggable",
      style: {
        height: 130,
        fontFamily: "Noto Sans KR",
        fontSize: 12,
        marginTop: 24,
        paddingLeft: 24,
        paddignRight: 24,
        textAlign: "left"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: 32
      }
    })));
  }

}, _temp)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "VBo9":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__("vHio");

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = pathname !== '/_error' ? (0, _getPageFiles.getPageFiles)(buildManifest, pathname) : [];
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      cssFiles.push(...dynamicCssFiles);
    }

    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isSharedFile ? '' : undefined,
        "data-n-p": isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": true
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) === null || _buildManifest$lowPri === void 0 ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "Zfpz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VBo9");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let Store = (_class = (_temp = class Store {
  constructor() {
    _initializerDefineProperty(this, "mode", _descriptor, this);

    _initializerDefineProperty(this, "token", _descriptor2, this);

    _initializerDefineProperty(this, "profile", _descriptor3, this);

    _initializerDefineProperty(this, "isPlayAll", _descriptor4, this);

    _initializerDefineProperty(this, "minFontSize", _descriptor5, this);

    _initializerDefineProperty(this, "maxFontSize", _descriptor6, this);

    _initializerDefineProperty(this, "unitFontSize", _descriptor7, this);

    _initializerDefineProperty(this, "directionFontSize", _descriptor8, this);

    _initializerDefineProperty(this, "secondFontSize", _descriptor9, this);

    _initializerDefineProperty(this, "minFontWeight", _descriptor10, this);

    _initializerDefineProperty(this, "maxFontWeight", _descriptor11, this);

    _initializerDefineProperty(this, "unitFontWeight", _descriptor12, this);

    _initializerDefineProperty(this, "directionFontWeight", _descriptor13, this);

    _initializerDefineProperty(this, "secondFontWeight", _descriptor14, this);

    _initializerDefineProperty(this, "minFontLetterSpacing", _descriptor15, this);

    _initializerDefineProperty(this, "maxFontLetterSpacing", _descriptor16, this);

    _initializerDefineProperty(this, "unitFontLetterSpacing", _descriptor17, this);

    _initializerDefineProperty(this, "directionFontLetterSpacing", _descriptor18, this);

    _initializerDefineProperty(this, "secondFontLetterSpacing", _descriptor19, this);

    _initializerDefineProperty(this, "minFontLineSpacing", _descriptor20, this);

    _initializerDefineProperty(this, "maxFontLineSpacing", _descriptor21, this);

    _initializerDefineProperty(this, "unitFontLineSpacing", _descriptor22, this);

    _initializerDefineProperty(this, "directionFontLineSpacing", _descriptor23, this);

    _initializerDefineProperty(this, "secondFontLineSpacing", _descriptor24, this);

    _initializerDefineProperty(this, "defaultFontSizeState", _descriptor25, this);

    _initializerDefineProperty(this, "defaultFontWeightState", _descriptor26, this);

    _initializerDefineProperty(this, "defaultFontLetterSpacingState", _descriptor27, this);

    _initializerDefineProperty(this, "defaultFontLineSpacingState", _descriptor28, this);

    _initializerDefineProperty(this, "defaultFontColorState", _descriptor29, this);

    _initializerDefineProperty(this, "defaultFontState", _descriptor30, this);

    _initializerDefineProperty(this, "fontSizeState", _descriptor31, this);

    _initializerDefineProperty(this, "fontWeightState", _descriptor32, this);

    _initializerDefineProperty(this, "fontLetterSpacingState", _descriptor33, this);

    _initializerDefineProperty(this, "fontLineSpacingState", _descriptor34, this);

    _initializerDefineProperty(this, "fontColorState", _descriptor35, this);

    _initializerDefineProperty(this, "fontState", _descriptor36, this);

    _initializerDefineProperty(this, "isFontSizeAuto", _descriptor37, this);

    _initializerDefineProperty(this, "isFontWeightAuto", _descriptor38, this);

    _initializerDefineProperty(this, "isFontLetterSpacingAuto", _descriptor39, this);

    _initializerDefineProperty(this, "isFontLineSpacingAuto", _descriptor40, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "mode", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'dev';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "token", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "profile", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isPlayAll", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "minFontSize", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "maxFontSize", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 100;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "unitFontSize", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 1;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "directionFontSize", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'positive';
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "secondFontSize", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 100;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "minFontWeight", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 100;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "maxFontWeight", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 900;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "unitFontWeight", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 10;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "directionFontWeight", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'positive';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "secondFontWeight", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 100;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "minFontLetterSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return -0.1;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "maxFontLetterSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0.2;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "unitFontLetterSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0.01;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "directionFontLetterSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'positive';
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "secondFontLetterSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 100;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "minFontLineSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0.85;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "maxFontLineSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 1.5;
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "unitFontLineSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0.01;
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "directionFontLineSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'positive';
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "secondFontLineSpacing", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 100;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "defaultFontSizeState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 50;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, "defaultFontWeightState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 300;
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, "defaultFontLetterSpacingState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, "defaultFontLineSpacingState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0.85;
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, "defaultFontColorState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '#000';
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, "defaultFontState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, "fontSizeState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 50;
  }
}), _descriptor32 = _applyDecoratedDescriptor(_class.prototype, "fontWeightState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 300;
  }
}), _descriptor33 = _applyDecoratedDescriptor(_class.prototype, "fontLetterSpacingState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor34 = _applyDecoratedDescriptor(_class.prototype, "fontLineSpacingState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0.85;
  }
}), _descriptor35 = _applyDecoratedDescriptor(_class.prototype, "fontColorState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '#000';
  }
}), _descriptor36 = _applyDecoratedDescriptor(_class.prototype, "fontState", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor37 = _applyDecoratedDescriptor(_class.prototype, "isFontSizeAuto", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor38 = _applyDecoratedDescriptor(_class.prototype, "isFontWeightAuto", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class.prototype, "isFontLetterSpacingAuto", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class.prototype, "isFontLineSpacingAuto", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
})), _class);
/* harmony default export */ __webpack_exports__["a"] = (new Store());

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eJK0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const backdrop = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "backdrop",
  onClick: props.click
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  jsx: "true",
  global: "true",
  suppressHydrationWarning: true
}, `
      .backdrop {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 100;
      }
    `));

/* unused harmony default export */ var _unused_webpack_default_export = (backdrop);

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "sGQ9":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "vHio":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ })

/******/ });