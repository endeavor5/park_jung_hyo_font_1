webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/store */ \"./common/store.js\");\nvar _class, _temp;\n\n\n\n\n\n\n\n\n\n\nlet Index = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"observer\"])(_class = (_temp = class Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    this.handleChange = (type, e) => {\n      if (type == 'input_content') {\n        this.setState({\n          input_content: e.target.value\n        });\n      }\n    };\n\n    this.state = {\n      input_content: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz                                        \"EARTH\" Designed by Park Jung Hyo. in Seoul / South Korea. Engined and Supported By Studio Seon / OFFICE 201c (OH SEONG JIN)',\n      footerGap: 200,\n      fontSizeState: 50,\n      fontWeightState: 300,\n      fontLetterSpacingState: 0,\n      fontLineSpacingState: 0.85,\n      fontColorState: '#000',\n      fontState: null,\n      isFontSizeAuto: false,\n      isFontWeightAuto: false,\n      isFontLetterSpacingAuto: false,\n      isFontLineSpacingAuto: false\n    };\n  }\n\n  render() {\n    const prefix = false ? undefined : '';\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      prefix: prefix\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \" \",\n      style: {\n        width: '100%',\n        marginTop: 200,\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center',\n        flexDirection: 'column'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"font_display_container\",\n      style: {\n        marginTop: 40\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"font_display_area\",\n      style: {\n        fontSize: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizeState,\n        fontWeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontWeightState\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n      className: \"input_content\",\n      placeholder: \"Font Contents\",\n      name: \"input_content\",\n      value: this.state.input_content,\n      style: {\n        fontSize: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizeState,\n        fontWeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontWeightState,\n        color: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontColorState,\n        letterSpacing: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontLetterSpacingState,\n        lineHeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontLineSpacingState,\n        wordWrap: 'wrap',\n        whiteSpace: 'pre-wrap',\n        fontFamily: 'Earth_FinalGX'\n      },\n      onChange: e => {\n        this.handleChange('input_content', e);\n      }\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        height: 400\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      prefix: prefix,\n      path: '/',\n      footerGap: this.state.footerGap\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"style\", {\n      jsx: \"true\",\n      global: \"true\",\n      suppressHydrationWarning: true\n    }, `\n                .font_value {\n                    width: calc(100% - 130px);\n                }\n                .auto_row {\n                    width: 100%;\n                    height: 40px;\n                    display: inline-flex;\n                    align-items:center;\n                }\n                .auto_buttton {\n                    width: 100px;\n                    height: 35px;\n                    font-size: 14px;\n                    border: 1px solid #000;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    \n\n                }\n                \n                    div.left {\n                    width: 50%;\n                    float: left;\n                    box-sizing: border-box;\n                    }\n                    div.right {\n                    width: 50%;\n                    float: right;\n                    box-sizing: border-box;\n                    }\n                    .font_display_control_label {\n                        height: 50px;\n                        color : #0a0a0a;\n                        width: 100%;\n                        align-items: center;\n                        justify-content: flex-start;\n                        white-space : nowrap;\n                    }\n                    .input_wrapper {\n                        width: 100%;\n                        height: 100%;\n                        border: solid 1px #eaeaea;\n                        background-color: #ffffff;\n                        display: flex;\n                        align-items: center;\n                    }\n                    .input_content {\n                        width : 100%;\n                        height: 100%;\n                        min-height: 600px;\n                        resize: none;\n                        border : none;\n                        outline : none;\n                        overflow-x : hidden;\n                    }\n                    .font_display_container {\n                        width: calc(100% - 40px);\n                        height: auto;\n                        min-height: 600px;\n                        display: flex;\n                        align-self: center;\n                        align-items: center;\n                        justify-content: center;\n                        overflow-x : hidden;\n                    }\n\n                    .font_controller_area {\n                        width: 300px;\n                        min-height: 600px;\n                        height: auto;\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        overflow-x : hidden;\n                        \n                    }\n\n                    .font_display_area {\n                        width: calc(100% - 40px);\n                        max-width: 1024px;\n                        min-height: 600px;\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding : 10px;\n                        overflow : scroll;\n                    }\n                    .font_display_inner {\n\n                        width: calc(100% - 40px);\n                        height: calc(100% - 40px);\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding : 20px;\n                    }\n                    .font_input_area {\n                        width: calc(100% - 20px);\n                        height: calc(100% - 20px);\n                        display: flex;\n                    }\n                    /* Extra small devices (phones, 600px and down) */\n                    @media only screen and (max-width: 600px) {\n                    /* ... */\n                        .font_display_area {\n                            flex-direction: column;\n                        }\n                        .color_container_responsive_margin {\n                            margin-top: 100px;\n                        }\n                    }\n                    /* Small devices (portrait tablets and large phones, 600px and up) */\n                    @media only screen and (min-width: 600px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: column;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 100px;\n                    }\n                    }\n                    /* Medium devices (landscape tablets, 768px and up) */\n                    @media only screen and (min-width: 768px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: column;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 100px;\n                    }\n                    }\n                    /* Large devices (laptops/desktops, 992px and up) */\n                    @media only screen and (min-width: 992px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: row;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 0px;\n                    }\n                    }\n                    /* Extra large devices (large laptops and desktops, 1200px and up) */\n                    @media only screen and (min-width: 1200px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: row;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 0px;\n                    }\n                    }\n                `));\n  }\n\n}, _temp)) || _class;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm9ic2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsInR5cGUiLCJlIiwic2V0U3RhdGUiLCJpbnB1dF9jb250ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsImZvb3RlckdhcCIsImZvbnRTaXplU3RhdGUiLCJmb250V2VpZ2h0U3RhdGUiLCJmb250TGV0dGVyU3BhY2luZ1N0YXRlIiwiZm9udExpbmVTcGFjaW5nU3RhdGUiLCJmb250Q29sb3JTdGF0ZSIsImZvbnRTdGF0ZSIsImlzRm9udFNpemVBdXRvIiwiaXNGb250V2VpZ2h0QXV0byIsImlzRm9udExldHRlclNwYWNpbmdBdXRvIiwiaXNGb250TGluZVNwYWNpbmdBdXRvIiwicmVuZGVyIiwicHJlZml4Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImZvbnRTaXplIiwic3RvcmUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsIndvcmRXcmFwIiwid2hpdGVTcGFjZSIsImZvbnRGYW1pbHkiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBS01BLEssR0FETEMsMkQsbUJBQUQsTUFDTUQsS0FETixTQUNvQkUsK0NBRHBCLENBQzhCO0FBRTFCQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsU0FxQm5CQyxZQXJCbUIsR0FxQkosQ0FBQ0MsSUFBRCxFQUFRQyxDQUFSLEtBQWM7QUFDekIsVUFBSUQsSUFBSSxJQUFJLGVBQVosRUFBNkI7QUFDekIsYUFBS0UsUUFBTCxDQUFjO0FBQ1ZD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ZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgdG9KUyB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9jb21tb24vc3RvcmVcIjtcblxuXG5cbkBvYnNlcnZlclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5wdXRfY29udGVudCA6ICdBYUJiQ2NEZEVlRmZHZ0hoSWlKaktrTGxNbU5uT29QcFFxUnJTc1R0VXVWdld3WHhZeVp6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRUFSVEhcIiBEZXNpZ25lZCBieSBQYXJrIEp1bmcgSHlvLiBpbiBTZW91bCAvIFNvdXRoIEtvcmVhLiBFbmdpbmVkIGFuZCBTdXBwb3J0ZWQgQnkgU3R1ZGlvIFNlb24gLyBPRkZJQ0UgMjAxYyAoT0ggU0VPTkcgSklOKScsXG5cbiAgICAgICAgICAgIGZvb3RlckdhcCA6IDIwMCwgXG5cbiAgICAgICAgICAgIGZvbnRTaXplU3RhdGUgOiA1MCxcbiAgICAgICAgICAgIGZvbnRXZWlnaHRTdGF0ZTogMzAwLFxuICAgICAgICAgICAgZm9udExldHRlclNwYWNpbmdTdGF0ZSA6IDAsXG4gICAgICAgICAgICBmb250TGluZVNwYWNpbmdTdGF0ZTogMC44NSxcbiAgICAgICAgICAgIGZvbnRDb2xvclN0YXRlIDogJyMwMDAnLFxuICAgICAgICAgICAgZm9udFN0YXRlIDogbnVsbCxcblxuICAgICAgICAgICAgaXNGb250U2l6ZUF1dG8gOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRm9udFdlaWdodEF1dG8gOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRm9udExldHRlclNwYWNpbmdBdXRvIDogZmFsc2UsXG4gICAgICAgICAgICBpc0ZvbnRMaW5lU3BhY2luZ0F1dG8gOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UgPSAodHlwZSAsIGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT0gJ2lucHV0X2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbnB1dF9jb250ZW50IDogIGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnaHR0cHM6Ly9lbmRlYXZvcjUuZ2l0aHViLmlvL3BhcmtfanVuZ19oeW9fZm9udF8xJyA6ICcnO1xuICAgIFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciBwcmVmaXg9e3ByZWZpeH0+PC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luVG9wOiAyMDAsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnRfZGlzcGxheV9jb250YWluZXJcIiAgc3R5bGU9e3sgIG1hcmdpblRvcDogNDAsIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnRfZGlzcGxheV9hcmVhXCIgc3R5bGU9e3sgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplIDogc3RvcmUuZm9udFNpemVTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBzdG9yZS5mb250V2VpZ2h0U3RhdGUsfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRm9udCBDb250ZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5wdXRfY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dF9jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplIDogc3RvcmUuZm9udFNpemVTdGF0ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogc3RvcmUuZm9udFdlaWdodFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzdG9yZS5mb250Q29sb3JTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBzdG9yZS5mb250TGV0dGVyU3BhY2luZ1N0YXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBzdG9yZS5mb250TGluZVNwYWNpbmdTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkV3JhcDogJ3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0VhcnRoX0ZpbmFsR1gnICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgnaW5wdXRfY29udGVudCcsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNDAwIH19PjwvZGl2PlxuICAgICAgICAgICAgPEZvb3RlciBwcmVmaXg9e3ByZWZpeH0gcGF0aD17Jy8nfSBmb290ZXJHYXA9e3RoaXMuc3RhdGUuZm9vdGVyR2FwfS8+XG5cbiAgICAgICAgICAgIDxzdHlsZSBcbiAgICAgICAgICAgIGpzeD1cInRydWVcIlxuICAgICAgICAgICAgZ2xvYmFsPVwidHJ1ZVwiXG4gICAgICAgICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuZm9udF92YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMzBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hdXRvX3JvdyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hdXRvX2J1dHR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpdi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGl2LnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfY29udHJvbF9sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICMwYTBhMGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZSA6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5wdXRfd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlYWVhZWE7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmlucHV0X2NvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZSA6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14IDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXggOiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9udF9jb250cm9sbGVyX2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXggOiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfYXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93IDogc2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfaW5uZXIge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9udF9pbnB1dF9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogLi4uICovXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAvKiAuLi4gKi9cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yX2NvbnRhaW5lcl9yZXNwb25zaXZlX21hcmdpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIC4uLiAqL1xuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIC4uLiAqL1xuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgICAgICAgICAvKiAuLi4gKi9cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yX2NvbnRhaW5lcl9yZXNwb25zaXZlX21hcmdpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})