"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-composer";
exports.ids = ["vendor-chunks/react-composer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-composer/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-composer/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Composer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Composer(props) {\n  return renderRecursive(props.children, props.components);\n}\n\nComposer.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,\n  components: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)])).isRequired\n};\n\n/**\n * Recursively build up elements from props.components and accumulate `results` along the way.\n * @param {function} render\n * @param {Array.<ReactElement|Function>} remaining\n * @param {Array} [results]\n * @returns {ReactElement}\n */\nfunction renderRecursive(render, remaining, results) {\n  results = results || [];\n  // Once components is exhausted, we can render out the results array.\n  if (!remaining[0]) {\n    return render(results);\n  }\n\n  // Continue recursion for remaining items.\n  // results.concat([value]) ensures [...results, value] instead of [...results, ...value]\n  function nextRender(value) {\n    return renderRecursive(render, remaining.slice(1), results.concat([value]));\n  }\n\n  // Each props.components entry is either an element or function [element factory]\n  return typeof remaining[0] === 'function' ? // When it is a function, produce an element by invoking it with \"render component values\".\n  remaining[0]({ results: results, render: nextRender }) : // When it is an element, enhance the element's props with the render prop.\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(remaining[0], { children: nextRender });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29tcG9zZXIvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDRjs7QUFFcEI7QUFDZjtBQUNBOztBQUVBO0FBQ0EsWUFBWSx3REFBYztBQUMxQixjQUFjLHlEQUFpQixDQUFDLDJEQUFtQixFQUFFLDJEQUFpQixFQUFFLHdEQUFjO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVywrQkFBK0I7QUFDMUMsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0NBQXNDO0FBQ3ZELEVBQUUsbURBQVksaUJBQWlCLHNCQUFzQjtBQUNyRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb3dpbmctbWVtb3J5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWNvbXBvc2VyL2VzL2luZGV4LmpzPzc4NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9zZXIocHJvcHMpIHtcbiAgcmV0dXJuIHJlbmRlclJlY3Vyc2l2ZShwcm9wcy5jaGlsZHJlbiwgcHJvcHMuY29tcG9uZW50cyk7XG59XG5cbkNvbXBvc2VyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbXBvbmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pKS5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGJ1aWxkIHVwIGVsZW1lbnRzIGZyb20gcHJvcHMuY29tcG9uZW50cyBhbmQgYWNjdW11bGF0ZSBgcmVzdWx0c2AgYWxvbmcgdGhlIHdheS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbmRlclxuICogQHBhcmFtIHtBcnJheS48UmVhY3RFbGVtZW50fEZ1bmN0aW9uPn0gcmVtYWluaW5nXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIHJlbmRlclJlY3Vyc2l2ZShyZW5kZXIsIHJlbWFpbmluZywgcmVzdWx0cykge1xuICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcbiAgLy8gT25jZSBjb21wb25lbnRzIGlzIGV4aGF1c3RlZCwgd2UgY2FuIHJlbmRlciBvdXQgdGhlIHJlc3VsdHMgYXJyYXkuXG4gIGlmICghcmVtYWluaW5nWzBdKSB7XG4gICAgcmV0dXJuIHJlbmRlcihyZXN1bHRzKTtcbiAgfVxuXG4gIC8vIENvbnRpbnVlIHJlY3Vyc2lvbiBmb3IgcmVtYWluaW5nIGl0ZW1zLlxuICAvLyByZXN1bHRzLmNvbmNhdChbdmFsdWVdKSBlbnN1cmVzIFsuLi5yZXN1bHRzLCB2YWx1ZV0gaW5zdGVhZCBvZiBbLi4ucmVzdWx0cywgLi4udmFsdWVdXG4gIGZ1bmN0aW9uIG5leHRSZW5kZXIodmFsdWUpIHtcbiAgICByZXR1cm4gcmVuZGVyUmVjdXJzaXZlKHJlbmRlciwgcmVtYWluaW5nLnNsaWNlKDEpLCByZXN1bHRzLmNvbmNhdChbdmFsdWVdKSk7XG4gIH1cblxuICAvLyBFYWNoIHByb3BzLmNvbXBvbmVudHMgZW50cnkgaXMgZWl0aGVyIGFuIGVsZW1lbnQgb3IgZnVuY3Rpb24gW2VsZW1lbnQgZmFjdG9yeV1cbiAgcmV0dXJuIHR5cGVvZiByZW1haW5pbmdbMF0gPT09ICdmdW5jdGlvbicgPyAvLyBXaGVuIGl0IGlzIGEgZnVuY3Rpb24sIHByb2R1Y2UgYW4gZWxlbWVudCBieSBpbnZva2luZyBpdCB3aXRoIFwicmVuZGVyIGNvbXBvbmVudCB2YWx1ZXNcIi5cbiAgcmVtYWluaW5nWzBdKHsgcmVzdWx0czogcmVzdWx0cywgcmVuZGVyOiBuZXh0UmVuZGVyIH0pIDogLy8gV2hlbiBpdCBpcyBhbiBlbGVtZW50LCBlbmhhbmNlIHRoZSBlbGVtZW50J3MgcHJvcHMgd2l0aCB0aGUgcmVuZGVyIHByb3AuXG4gIGNsb25lRWxlbWVudChyZW1haW5pbmdbMF0sIHsgY2hpbGRyZW46IG5leHRSZW5kZXIgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-composer/es/index.js\n");

/***/ })

};
;