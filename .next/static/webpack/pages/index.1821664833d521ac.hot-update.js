"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/Pagination.module.scss */ \"./src/styles/Pagination.module.scss\");\n/* harmony import */ var _src_styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// { pageCount, setPage, pageId }\nconst Pagination = ()=>{\n    let pageCount = 5;\n    let pageId = 2;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_src_styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().pagination),\n            children: [\n                pageCount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"\\xab\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\Pagination.js\",\n                    lineNumber: 13,\n                    columnNumber: 30\n                }, undefined) : null,\n                Array.from({\n                    length: pageCount\n                }, (_, i)=>i + 1).map((num, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        // onClick={() => setPage(num)}\n                        className: pageId === num ? (_src_styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active) : \"\",\n                        children: num\n                    }, num, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\Pagination.js\",\n                        lineNumber: 16,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\Pagination.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwRDtBQUcxRCxpQ0FBaUM7QUFFMUIsTUFBTUMsYUFBYSxJQUFNO0lBQzVCLElBQUlDLFlBQVk7SUFDaEIsSUFBSUMsU0FBUztJQUViLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFXTCxzRkFBaUI7O2dCQUM1QkUsMEJBQVksOERBQUNLOzhCQUFNOzs7OztnQ0FBaUIsSUFBSTtnQkFDeENDLE1BQU1DLElBQUksQ0FBQztvQkFBRUMsUUFBUVI7Z0JBQVUsR0FBRyxDQUFDUyxHQUFHQyxJQUFNQSxJQUFJLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQyxLQUFLRixJQUFNO29CQUNoRSxxQkFDSSw4REFBQ0w7d0JBRUcsK0JBQStCO3dCQUMvQkYsV0FBV0YsV0FBV1csTUFBTWQsa0ZBQWEsR0FBRyxFQUFFO2tDQUU3Q2M7dUJBSklBOzs7OztnQkFPakI7Ozs7Ozs7O0FBS2hCLEVBQUM7S0F2QlliIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcz9iMmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9zdHlsZXMvUGFnaW5hdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuXHJcbi8vIHsgcGFnZUNvdW50LCBzZXRQYWdlLCBwYWdlSWQgfVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2luYXRpb24gPSAoKSA9PiB7XHJcbiAgICBsZXQgcGFnZUNvdW50ID0gNTtcclxuICAgIGxldCBwYWdlSWQgPSAyO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9ufT5cclxuICAgICAgICAgICAgICAgIHtwYWdlQ291bnQgPyA8c3BhbiA+JmxhcXVvOzwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IHBhZ2VDb3VudCB9LCAoXywgaSkgPT4gaSArIDEpLm1hcCgobnVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0UGFnZShudW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlSWQgPT09IG51bSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgey8qIHtwYWdlQ291bnQgPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2VDb3VudCl9PiZyYXF1bzs8L3NwYW4+IDogbnVsbH0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIlBhZ2luYXRpb24iLCJwYWdlQ291bnQiLCJwYWdlSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdpbmF0aW9uIiwic3BhbiIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwibWFwIiwibnVtIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pagination.js\n"));

/***/ })

});