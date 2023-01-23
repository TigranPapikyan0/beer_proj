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

/***/ "./components/BeerList.js":
/*!********************************!*\
  !*** ./components/BeerList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BeerList\": function() { return /* binding */ BeerList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_styles_BeerList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/BeerList.module.scss */ \"./src/styles/BeerList.module.scss\");\n/* harmony import */ var _src_styles_BeerList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_BeerList_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst BeerList = (param)=>{\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_src_styles_BeerList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().userBlock),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: (_src_styles_BeerList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().users_table),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                lineNumber: 10,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                lineNumber: 11,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                lineNumber: 12,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, undefined),\n                    data.map((beer, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: beer[\"image_url\"],\n                                        width: 100,\n                                        height: 260,\n                                        alt: \"beer Image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: beer[\"name\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_src_styles_BeerList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ellipsis_td),\n                                        children: beer[\"description\"]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, beer[\"id\"], true, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                            lineNumber: 16,\n                            columnNumber: 29\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\React\\\\next-js\\\\components\\\\BeerList.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\n_c = BeerList;\nvar _c;\n$RefreshReg$(_c, \"BeerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JlZXJMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUN6QjtBQUV4QixNQUFNRSxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDN0IscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdMLG1GQUFnQjtrQkFDNUIsNEVBQUNPO1lBQU1GLFdBQVdMLHFGQUFrQjtzQkFDaEMsNEVBQUNTOztrQ0FDRyw4REFBQ0M7OzBDQUNHLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7Ozs7Ozs7O29CQUVQUixLQUFLUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTt3QkFDdkIscUJBQ0ksOERBQUNKOzs4Q0FDRyw4REFBQ0s7OENBQ0csNEVBQUNkLG1EQUFLQTt3Q0FBQ2UsS0FBS0gsSUFBSSxDQUFFLFlBQVc7d0NBQUVJLE9BQU87d0NBQUtDLFFBQVE7d0NBQUtDLEtBQUk7Ozs7Ozs7Ozs7OzhDQUVoRSw4REFBQ0o7OENBQUlGLElBQUksQ0FBRSxPQUFNOzs7Ozs7OENBQ2pCLDhEQUFDRTs4Q0FDRyw0RUFBQ0s7d0NBQUVmLFdBQVdMLHFGQUFrQjtrREFDM0JhLElBQUksQ0FBRSxjQUFhOzs7Ozs7Ozs7Ozs7MkJBUHZCQSxJQUFJLENBQUUsS0FBSTs7Ozs7b0JBeUIzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEIsRUFBQztLQTFDWVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CZWVyTGlzdC5qcz82MDE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9zdHlsZXMvQmVlckxpc3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmVlckxpc3QgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQmxvY2t9PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNfdGFibGV9PlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChiZWVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YmVlcltgaWRgXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtiZWVyW2BpbWFnZV91cmxgXX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsyNjB9IGFsdD1cImJlZXIgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntiZWVyW2BuYW1lYF19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lbGxpcHNpc190ZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmVlcltgZGVzY3JpcHRpb25gXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGtleT17ZGF0YVtgaWRgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjbGFzc05hbWU9e3NlbGVjdGVkSXRlbS5pZCA9PT0gZGF0YVtgaWRgXSA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSXRlbSgocHJldikgPT4gZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPHRkPntkYXRhW2BuYW1lYF19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8dGQ+e2RhdGFbYGxhc3ROYW1lYF19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8dGQ+e2RhdGFbYGVtYWlsYF19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8dGQ+e2RhdGFbYGFjY2Vzc2BdfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPHRkPntkYXRhW2BiaXJ0aERhdGVgXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDx0ZCBjbGFzc05hbWU9XCJjZWxsX2RlbGV0ZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbl9EZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyKGluZGV4KX0+RGVsZXRlPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiQmVlckxpc3QiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlckJsb2NrIiwidGFibGUiLCJ1c2Vyc190YWJsZSIsInRib2R5IiwidHIiLCJ0aCIsIm1hcCIsImJlZXIiLCJpbmRleCIsInRkIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIiwiZWxsaXBzaXNfdGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BeerList.js\n"));

/***/ })

});