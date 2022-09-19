/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Gotham Medium Regular.ttf */ \"./src/assets/fonts/Gotham Medium Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/cassandra-font/CassandraPersonalUseRegular-3BjG.ttf */ \"./src/assets/fonts/cassandra-font/CassandraPersonalUseRegular-3BjG.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/shelf.jpg */ \"./src/assets/shelf.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/photo-1622405207562-735fa49ff7f7.avif */ \"./src/assets/photo-1622405207562-735fa49ff7f7.avif\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/menu-bg.jpg */ \"./src/assets/menu-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Gotham Medium\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n}\\n@font-face {\\n  font-family: \\\"Cassandra\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\");\\n}\\nnav {\\n  position: -webkit-sticky;\\n  position: sticky;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  background: rgba(0, 0, 0, 0.9);\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n  align-items: center;\\n  z-index: 10;\\n  padding: 0 2rem;\\n}\\n\\n#nav-links {\\n  display: flex;\\n  gap: 1.25rem;\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n  padding: 0;\\n  align-items: center;\\n  justify-content: center;\\n  list-style: none;\\n}\\n#nav-links li {\\n  color: white;\\n  text-decoration: none;\\n  font-size: 1.25rem;\\n}\\n#nav-links li:hover {\\n  color: #EC6792;\\n  cursor: pointer;\\n}\\n\\n.logo {\\n  font-family: \\\"Cassandra\\\", cursive;\\n  color: white;\\n  font-size: 1.75rem;\\n}\\n\\n.active {\\n  color: #EC6792 !important;\\n}\\n\\n.hamburger {\\n  background-color: transparent;\\n  border: 0;\\n  color: white;\\n  font-size: 24px;\\n  cursor: pointer;\\n  display: none;\\n}\\n.hamburger:focus {\\n  outline: none;\\n}\\n\\n@media (max-width: 768px) {\\n  #nav-links {\\n    display: none;\\n    flex-direction: column;\\n    width: 100%;\\n  }\\n  #nav-links.show {\\n    display: flex;\\n  }\\n  .hamburger {\\n    display: block;\\n  }\\n}\\n#hero {\\n  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat;\\n  background-size: cover;\\n  height: 100vh;\\n  z-index: 0;\\n  width: 100%;\\n  margin: 0;\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n#cta {\\n  color: white;\\n  font-family: \\\"Cassandra\\\", cursive;\\n  font-size: 4rem;\\n  margin-bottom: 0;\\n}\\n\\n#subtitle {\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n  color: white;\\n  font-size: 2rem;\\n  margin-top: 0;\\n}\\n\\n#message {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n#message button {\\n  background-color: #3EC0E4;\\n  color: white;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 25px;\\n  border: none;\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n}\\n#message button:hover {\\n  background-color: white;\\n  color: #3EC0E4;\\n}\\n\\nsection {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 2rem 0;\\n}\\n\\n.section-title {\\n  font-size: 3rem;\\n  text-align: center;\\n  font-family: \\\"Cassandra\\\", cursive;\\n  color: #3EC0E4;\\n  margin-bottom: 1.5rem;\\n  position: relative;\\n}\\n.section-title::after {\\n  content: \\\"\\\";\\n  top: 110%;\\n  right: 10%;\\n  width: 50%;\\n  height: 2px;\\n  background: #EC6792;\\n  position: absolute;\\n}\\n\\n.home-img {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.about-content {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  gap: 24px;\\n  width: 90%;\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n}\\n\\n.about-header {\\n  color: #3EC0E4;\\n  font-size: 2rem;\\n}\\n\\n.about-paragraph {\\n  color: #EC6792;\\n  font-size: 1.5rem;\\n}\\n\\n#hours-container {\\n  color: white;\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n  background-color: #EC6792;\\n  width: 80%;\\n  border-radius: 12px;\\n  padding: 12px;\\n}\\n#hours-container p {\\n  font-size: 1.15rem;\\n}\\n\\n.menu-section {\\n  text-align: center;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat;\\n  /* background: url('../assets//ariana-suarez-W1Q6TAotxfY-unsplash.jpg') no-repeat; */\\n  background-size: cover;\\n  margin: 0;\\n  padding: 1rem 0;\\n}\\n\\n#menu-title {\\n  font-size: 3rem;\\n  text-align: center;\\n  font-family: \\\"Cassandra\\\", cursive;\\n  color: #EC6792;\\n  margin-bottom: 1.5rem;\\n  position: relative;\\n}\\n#menu-title::after {\\n  content: \\\"\\\";\\n  top: 110%;\\n  right: 10%;\\n  width: 50%;\\n  height: 2px;\\n  background: white;\\n  position: absolute;\\n}\\n\\n#menu-container {\\n  width: 75%;\\n  background: rgba(0, 0, 0, 0.8);\\n  padding: 2rem 1rem;\\n  border-radius: 8px;\\n}\\n\\n#menu-grid {\\n  display: grid;\\n  /* width: 75%; */\\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\\n  gap: 12px;\\n}\\n\\n.menu-item img {\\n  height: 300px;\\n  width: 300px;\\n}\\n\\n.item-description {\\n  color: white;\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n}\\n\\n#contacts {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-size: cover;\\n  margin: 0;\\n  padding: 24px 0;\\n}\\n\\n#contacts-container {\\n  color: white;\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n  width: 75%;\\n  border-radius: 8px;\\n  padding: 24px;\\n  background-color: rgba(0, 0, 0, 0.8);\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n#contact-info {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#map {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 12px;\\n}\\n\\n.info-line {\\n  display: flex;\\n  align-items: center;\\n  gap: 12px;\\n}\\n\\n.contact-icon {\\n  height: 20px;\\n  width: auto;\\n}\\n\\n.form-group {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 12px;\\n}\\n\\nbutton[type^=submit] {\\n  font-family: \\\"Cassandra\\\", cursive;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  color: white;\\n  border-radius: 8px;\\n}\\n\\nbutton[type^=submit]:hover {\\n  background-color: white;\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n\\niframe {\\n  max-width: 100%;\\n}\\n\\n@media (max-width: 1024px) {\\n  #contacts-container {\\n    flex-direction: column;\\n    gap: 2rem;\\n  }\\n}\\nfooter {\\n  background-color: rgba(0, 0, 0, 0.9);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 2rem 0;\\n  color: white;\\n  font-family: \\\"Gotham Medium\\\", sans-serif;\\n  font-size: 1.25rem;\\n  gap: 1rem;\\n}\\nfooter p {\\n  margin: 0;\\n}\\n\\n.attribution {\\n  color: white;\\n  text-decoration: none;\\n}\\n.attribution:hover {\\n  color: #EC6792;\\n  text-decoration: underline;\\n}\\n\\n.fa-github-square {\\n  color: white;\\n  font-size: 32px;\\n}\\n.fa-github-square:hover {\\n  color: #EC6792;\\n}\\n\\n#attribution-grid {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  text-align: center;\\n  gap: 12px;\\n}\\n#attribution-grid a {\\n  font-size: 12px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\r\n    const content = document.getElementById('content');\r\n    const footer = document.createElement('footer');\r\n    footer.innerHTML = `\r\n        <div id=\"attribution-grid\">\r\n            <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/cookie\" title=\"cookie icons\" target=\"_blank\" rel=\"noreferrer noopener\">\r\n                Cookie icons created by Freepik - Flaticon\r\n            </a>\r\n            <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/clock\" title=\"clock icons\" target=\"_blank\" rel=\"noreferrer noopener\">\r\n                Clock icons created by Ilham Fitrotul Hayat - Flaticon\r\n            </a>\r\n            <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/gps\" title=\"gps icons\" target=\"_blank\" rel=\"noreferrer noopener\">\r\n                Gps icons created by Freepik - Flaticon\r\n            </a>\r\n            <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/telephone\" title=\"telephone icons\" target=\"_blank\" rel=\"noreferrer noopener\">\r\n                Telephone icons created by Ilham Fitrotul Hayat - Flaticon\r\n            </a>\r\n            <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/email\" title=\"email icons\" target=\"_blank\" rel=\"noreferrer noopener\">\r\n                Email icons created by Ilham Fitrotul Hayat - Flaticon\r\n            </a>\r\n        </div>\r\n        <p>Copyright &copy; 2022 Kelvin Nguyen</p>\r\n        <a href=\"https://github.com/KelTamNguyen\" target=\"_blank\" rel=\"noreferrer noopener\">\r\n            <i class=\"fab fa-github-square fa-lg\"></i>\r\n        </a>\r\n    `;\r\n    \r\n    content.appendChild(footer);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navbar)\n/* harmony export */ });\nfunction navbar() {\r\n    // const content = document.getElementById('content');\r\n    const body = document.getElementsByTagName('body')[0];\r\n\r\n    const navbar = document.createElement('nav');\r\n    navbar.innerHTML = `\r\n        <h1 class=\"logo\">La Pâtisserie</h1>\r\n        <button class=\"hamburger\" id=\"hamburger\">\r\n            <i class=\"fas fa-bars\"></i>\r\n        </button>\r\n        <ul id=\"nav-links\">\r\n            <li id=\"home\" class=\"active\">Home</li>\r\n            <li id=\"menu\">Menu</li>\r\n            <li id=\"contact\">Contact</li>\r\n        </ul>\r\n    `;\r\n\r\n    // content.appendChild(navbar);\r\n    body.prepend(navbar);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/navbar.js?");

/***/ }),

/***/ "./src/functions/clearContent.js":
/*!***************************************!*\
  !*** ./src/functions/clearContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction clearContent() {\r\n    const content = document.getElementById('content');\r\n    while (content.children.length > 0) {\r\n        content.children[0].remove();\r\n    }\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/functions/clearContent.js?");

/***/ }),

/***/ "./src/functions/initialPageLoad.js":
/*!******************************************!*\
  !*** ./src/functions/initialPageLoad.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHome */ \"./src/functions/loadHome.js\");\n\r\n\r\n\r\n\r\nfunction initialPageLoad() {\r\n    console.log('Loaded the home page!');\r\n\r\n    (0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_loadHome__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/functions/initialPageLoad.js?");

/***/ }),

/***/ "./src/functions/loadContact.js":
/*!**************************************!*\
  !*** ./src/functions/loadContact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/functions/clearContent.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _assets_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/placeholder.png */ \"./src/assets/placeholder.png\");\n/* harmony import */ var _assets_phone_call_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/phone-call.png */ \"./src/assets/phone-call.png\");\n/* harmony import */ var _assets_clock_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/clock.png */ \"./src/assets/clock.png\");\n/* harmony import */ var _assets_email_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/email.png */ \"./src/assets/email.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadContact(){\r\n    (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    window.scroll(0, 0);\r\n\r\n    const content = document.getElementById('content');\r\n\r\n    const contacts = document.createElement('section');\r\n    contacts.id = 'contacts';\r\n\r\n    let contanctsTitle = document.createElement('h1');\r\n    contanctsTitle.classList.add('section-title');\r\n    contanctsTitle.textContent = 'Contact Us';\r\n    contacts.appendChild(contanctsTitle);\r\n\r\n    const contactsContainer = document.createElement('div');\r\n    contactsContainer.id = 'contacts-container';\r\n    let info = document.createElement('div');\r\n    info.id = 'contact-info';\r\n\r\n    const phoneLine = document.createElement('div');\r\n    phoneLine.classList.add('info-line');\r\n    let phoneIcon = document.createElement('img');\r\n    phoneIcon.classList.add('contact-icon');\r\n    phoneIcon.src = _assets_phone_call_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    phoneLine.appendChild(phoneIcon);\r\n    let phoneNumber = document.createElement('p');\r\n    phoneNumber.textContent = '(123) 456-7890';\r\n    phoneLine.appendChild(phoneNumber);\r\n    info.appendChild(phoneLine);\r\n\r\n    const hoursLine = document.createElement('div');\r\n    hoursLine.classList.add('info-line');\r\n    let clockIcon = document.createElement('img');\r\n    clockIcon.classList.add('contact-icon');\r\n    clockIcon.src = _assets_clock_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    hoursLine.appendChild(clockIcon);\r\n    let hours = document.createElement('p');\r\n    hours.innerHTML = 'Tuesday: CLOSED <br> Wednesday - Monday: 8AM - 5PM';\r\n    hoursLine.appendChild(hours);\r\n    info.appendChild(hoursLine);\r\n\r\n    const mailForm = document.createElement('form');\r\n    let formTitle = document.createElement('div');\r\n    formTitle.classList.add('info-line')\r\n    let envelopeIcon = document.createElement('img');\r\n    envelopeIcon.classList.add('contact-icon');\r\n    envelopeIcon.src = _assets_email_png__WEBPACK_IMPORTED_MODULE_5__;\r\n    formTitle.appendChild(envelopeIcon);\r\n    let formTitleMsg = document.createElement('h2');\r\n    formTitleMsg.textContent = 'Message Us!';\r\n    formTitle.appendChild(formTitleMsg);\r\n    mailForm.appendChild(formTitle);\r\n\r\n    let formGroup = document.createElement('div');\r\n    formGroup.classList.add('form-group');\r\n    let nameLabel = document.createElement('label');\r\n    nameLabel.for = 'name';\r\n    nameLabel.textContent = 'Name';\r\n    formGroup.appendChild(nameLabel);\r\n    let name = document.createElement('input');\r\n    name.type = 'text';\r\n    name.id = 'name';\r\n    name.placeholder = 'Enter your name';\r\n    // name.required = true;\r\n    formGroup.appendChild(name);\r\n    let emailLabel = document.createElement('label');\r\n    emailLabel.for = 'email';\r\n    emailLabel.textContent = 'Email';\r\n    formGroup.appendChild(emailLabel);\r\n    let email = document.createElement('input');\r\n    email.type = 'email';\r\n    email.id = 'email';\r\n    email.placeholder = 'Enter your email';\r\n    // email.required = true;\r\n    formGroup.appendChild(email);\r\n    let messageLabel = document.createElement('label');\r\n    messageLabel.for = 'Message';\r\n    messageLabel.textContent = 'Feedback';\r\n    formGroup.appendChild(messageLabel);\r\n    let message = document.createElement('textarea');\r\n    message.placeholder = 'Write Us Here!'\r\n    message.cols = 60;\r\n    message.rows = 8;\r\n    formGroup.appendChild(message);\r\n    let sendBtn = document.createElement('button');\r\n    sendBtn.type = 'submit';\r\n    sendBtn.textContent = 'Send';\r\n    sendBtn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        mailForm.reset();\r\n    });\r\n    formGroup.appendChild(sendBtn);\r\n    mailForm.appendChild(formGroup);\r\n    info.appendChild(mailForm);\r\n\r\n\r\n    contactsContainer.appendChild(info);\r\n    contacts.appendChild(contactsContainer);\r\n\r\n    const map = document.createElement('div');\r\n    map.id = 'map';\r\n    map.innerHTML = `\r\n        <div class=\"info-line\">\r\n            <img class=\"contact-icon\" src=${_assets_placeholder_png__WEBPACK_IMPORTED_MODULE_2__}>\r\n            <p>376 1st St, Brooklyn, NY 11215</p>\r\n        </div>\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.053098867051!2d-73.98240988475965!3d40.67279897933621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b004c6161b3%3A0x380642c0da0bcb69!2s376%201st%20St%2C%20Brooklyn%2C%20NY%2011215!5e0!3m2!1sen!2sus!4v1661641054457!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n    `;\r\n    contactsContainer.appendChild(map);\r\n\r\n    content.appendChild(contacts);\r\n\r\n    // load footer component\r\n    (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/functions/loadContact.js?");

/***/ }),

/***/ "./src/functions/loadHome.js":
/*!***********************************!*\
  !*** ./src/functions/loadHome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/functions/clearContent.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ \"./src/functions/loadMenu.js\");\n\r\n\r\n\r\n\r\nfunction loadHome() {\r\n    (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    window.scroll(0, 0);\r\n    \r\n    const content = document.getElementById('content');\r\n\r\n    // hero section\r\n    const heroSection = document.createElement('section');\r\n    heroSection.id = 'hero';\r\n\r\n    const messageDiv = document.createElement('div');\r\n    messageDiv.id = 'message';\r\n    let callToAction = document.createElement('h1');\r\n    callToAction.id = 'cta';\r\n    callToAction.textContent = 'Every moment with a cookie';\r\n    messageDiv.appendChild(callToAction);\r\n    let subtitle = document.createElement('h2');\r\n    subtitle.id = 'subtitle';\r\n    subtitle.textContent = '...is a moment of joy!';\r\n    messageDiv.appendChild(subtitle);\r\n    let menuBtn = document.createElement('button');\r\n    menuBtn.textContent = \"Let's have some!\";\r\n    menuBtn.addEventListener('click', _loadMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n    messageDiv.appendChild(menuBtn);\r\n\r\n    heroSection.appendChild(messageDiv);\r\n\r\n    content.appendChild(heroSection);\r\n\r\n    // About section\r\n    const aboutSection = document.createElement('section');\r\n    aboutSection.id = 'about';\r\n    let aboutTitle = document.createElement('h1');\r\n    aboutTitle.classList.add('section-title');\r\n    aboutTitle.textContent = 'About Us'\r\n    aboutSection.appendChild(aboutTitle);\r\n\r\n    let aboutContainer = document.createElement('div');\r\n    aboutContainer.classList.add('about-content');\r\n    aboutContainer.innerHTML = `\r\n        <div>\r\n            <div>\r\n                <h1 class=\"about-header\">Who Are We?</h1>\r\n                <p class=\"about-paragraph\">\r\n                    We are La Pâtisserie, a bakery specializing in cookies since 1969. \r\n                </p>\r\n            </div>\r\n            <div>\r\n                <h1 class=\"about-header\">Why Cookies?</h1>\r\n                <p class=\"about-paragraph\">\r\n                    Few things bring as much simple joy as a freshly \r\n                    baked cookie. Some may think cakes and tarts too \r\n                    time-consuming to make, or consider other fancy desserts \r\n                    too filling or complicated, but hardly anyone refuses a \r\n                    cookie. At La Pâtisserie, we are dedicated to the simple \r\n                    pleasures of pastries.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    `;\r\n\r\n    aboutSection.appendChild(aboutContainer);\r\n    \r\n    const hoursContainer = document.createElement('div');\r\n    hoursContainer.id = 'hours-container';\r\n    let monday = document.createElement('p');\r\n    monday.textContent = 'Monday: 8AM-5PM';\r\n    hoursContainer.appendChild(monday);\r\n    let tuesday = document.createElement('p');\r\n    tuesday.textContent = 'Tuesday: CLOSED';\r\n    hoursContainer.appendChild(tuesday);\r\n    let wednesday = document.createElement('p');\r\n    wednesday.textContent = 'Wednesday: 8AM-5PM';\r\n    hoursContainer.appendChild(wednesday);\r\n    let thursday = document.createElement('p');\r\n    thursday.textContent = 'Thursday: 8AM-5PM';\r\n    hoursContainer.appendChild(thursday);\r\n    let friday = document.createElement('p');\r\n    friday.textContent = 'Friday: 8AM-5PM';\r\n    hoursContainer.appendChild(friday);\r\n    let saturday = document.createElement('p');\r\n    saturday.textContent = 'Saturday: 8AM-5PM';\r\n    hoursContainer.appendChild(saturday);\r\n    let sunday = document.createElement('p');\r\n    sunday.textContent = 'Sunday: 8AM-5PM';\r\n    hoursContainer.appendChild(sunday);\r\n    aboutSection.appendChild(hoursContainer);\r\n    \r\n    content.appendChild(aboutSection);\r\n\r\n    // load footer component\r\n    (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/loadHome.js?");

/***/ }),

/***/ "./src/functions/loadMenu.js":
/*!***********************************!*\
  !*** ./src/functions/loadMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/functions/clearContent.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _assets_cookies_black_and_white_cookie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/cookies/black-and-white-cookie.jpg */ \"./src/assets/cookies/black-and-white-cookie.jpg\");\n/* harmony import */ var _assets_cookies_almond_cookies_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cookies/almond-cookies.jpg */ \"./src/assets/cookies/almond-cookies.jpg\");\n/* harmony import */ var _assets_cookies_Anzac_Biscuits_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cookies/Anzac-Biscuits.jpg */ \"./src/assets/cookies/Anzac-Biscuits.jpg\");\n/* harmony import */ var _assets_cookies_macaroons_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/cookies/macaroons.jpg */ \"./src/assets/cookies/macaroons.jpg\");\n/* harmony import */ var _assets_cookies_chocolate_chip_cookie_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/cookies/chocolate-chip-cookie.jpg */ \"./src/assets/cookies/chocolate-chip-cookie.jpg\");\n\r\n\r\n// import '../styles/menu.css';\r\n// import '../styles/footer.css';\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n    (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    window.scroll(0, 0);\r\n\r\n    const content = document.getElementById('content');\r\n\r\n    let menuSection = document.createElement('section');\r\n    menuSection.classList.add('menu-section');\r\n    menuSection.innerHTML = `\r\n        <h1 id=\"menu-title\">Menu</h1>\r\n        <div id=\"menu-container\">\r\n            <div id=\"menu-grid\">\r\n                <div class=\"menu-item\">\r\n                    <img src=\"${_assets_cookies_black_and_white_cookie_jpg__WEBPACK_IMPORTED_MODULE_2__}\">\r\n                    <div class=\"item-description\">\r\n                        <p class=\"item-desc\">black and white cookie</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"${_assets_cookies_almond_cookies_jpg__WEBPACK_IMPORTED_MODULE_3__}\">\r\n                    <div class=\"item-description\">\r\n                        <p class=\"item-desc\">Chinese Almond Cookie</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"${_assets_cookies_Anzac_Biscuits_jpg__WEBPACK_IMPORTED_MODULE_4__}\">\r\n                    <div class=\"item-description\">\r\n                        <p class=\"item-desc\">ANZAC Biscuit</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"${_assets_cookies_macaroons_jpg__WEBPACK_IMPORTED_MODULE_5__}\">\r\n                    <div class=\"item-description\">\r\n                        <p class=\"item-desc\">Macaroon</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"${_assets_cookies_chocolate_chip_cookie_jpg__WEBPACK_IMPORTED_MODULE_6__}\">\r\n                    <div class=\"item-description\">\r\n                        <p class=\"item-desc\">Chocolate Chip Cookie</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"${_assets_cookies_black_and_white_cookie_jpg__WEBPACK_IMPORTED_MODULE_2__}\">\r\n                    <div class=\"item-description\">\r\n                        <p class=\"item-desc\">black and white cookie</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n\r\n    content.appendChild(menuSection);\r\n\r\n    // load footer component\r\n    (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/functions/loadMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _functions_initialPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/initialPageLoad */ \"./src/functions/initialPageLoad.js\");\n/* harmony import */ var _functions_loadHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/loadHome */ \"./src/functions/loadHome.js\");\n/* harmony import */ var _functions_loadMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/loadMenu */ \"./src/functions/loadMenu.js\");\n/* harmony import */ var _functions_loadContact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/loadContact */ \"./src/functions/loadContact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addNavEvents() {\r\n    const navLinks = document.getElementById('nav-links');\r\n    const home = document.getElementById('home');\r\n    const menu = document.getElementById('menu');\r\n    const contact = document.getElementById('contact');\r\n    const hamburger = document.getElementById('hamburger');\r\n\r\n    navLinks.addEventListener('click', (e)=> {\r\n        if (e.target.tagName.toLowerCase() === 'li') {\r\n            for (let i = 0; i < navLinks.children.length; i++) {\r\n                navLinks.children[i].classList.remove('active');\r\n            }\r\n            e.target.classList.add('active');\r\n        }\r\n    });\r\n\r\n    home.addEventListener('click', () => {\r\n        navLinks.classList.remove('show');\r\n        (0,_functions_loadHome__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    });\r\n\r\n    menu.addEventListener('click', () => {\r\n        navLinks.classList.remove('show');\r\n        (0,_functions_loadMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    });\r\n\r\n    contact.addEventListener('click', () => {\r\n        navLinks.classList.remove('show');\r\n        (0,_functions_loadContact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    });\r\n\r\n    hamburger.addEventListener('click', () => {\r\n        navLinks.classList.toggle('show');\r\n    });\r\n}\r\n\r\nfunction main() {\r\n    (0,_functions_initialPageLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    addNavEvents();\r\n}\r\n\r\nmain();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/clock.png":
/*!******************************!*\
  !*** ./src/assets/clock.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/clock.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/clock.png?");

/***/ }),

/***/ "./src/assets/cookies/Anzac-Biscuits.jpg":
/*!***********************************************!*\
  !*** ./src/assets/cookies/Anzac-Biscuits.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/Anzac-Biscuits.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/Anzac-Biscuits.jpg?");

/***/ }),

/***/ "./src/assets/cookies/almond-cookies.jpg":
/*!***********************************************!*\
  !*** ./src/assets/cookies/almond-cookies.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/almond-cookies.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/almond-cookies.jpg?");

/***/ }),

/***/ "./src/assets/cookies/black-and-white-cookie.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/cookies/black-and-white-cookie.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/black-and-white-cookie.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/black-and-white-cookie.jpg?");

/***/ }),

/***/ "./src/assets/cookies/chocolate-chip-cookie.jpg":
/*!******************************************************!*\
  !*** ./src/assets/cookies/chocolate-chip-cookie.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/chocolate-chip-cookie.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/chocolate-chip-cookie.jpg?");

/***/ }),

/***/ "./src/assets/cookies/macaroons.jpg":
/*!******************************************!*\
  !*** ./src/assets/cookies/macaroons.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/macaroons.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/macaroons.jpg?");

/***/ }),

/***/ "./src/assets/email.png":
/*!******************************!*\
  !*** ./src/assets/email.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/email.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/email.png?");

/***/ }),

/***/ "./src/assets/fonts/Gotham Medium Regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Gotham Medium Regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fonts/Gotham Medium Regular.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/Gotham_Medium_Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/cassandra-font/CassandraPersonalUseRegular-3BjG.ttf":
/*!******************************************************************************!*\
  !*** ./src/assets/fonts/cassandra-font/CassandraPersonalUseRegular-3BjG.ttf ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fonts/CassandraPersonalUseRegular-3BjG.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/cassandra-font/CassandraPersonalUseRegular-3BjG.ttf?");

/***/ }),

/***/ "./src/assets/menu-bg.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/menu-bg.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-bg.jpg?");

/***/ }),

/***/ "./src/assets/phone-call.png":
/*!***********************************!*\
  !*** ./src/assets/phone-call.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/phone-call.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/phone-call.png?");

/***/ }),

/***/ "./src/assets/photo-1622405207562-735fa49ff7f7.avif":
/*!**********************************************************!*\
  !*** ./src/assets/photo-1622405207562-735fa49ff7f7.avif ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/photo-1622405207562-735fa49ff7f7.avif\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/photo-1622405207562-735fa49ff7f7.avif?");

/***/ }),

/***/ "./src/assets/placeholder.png":
/*!************************************!*\
  !*** ./src/assets/placeholder.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/placeholder.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/placeholder.png?");

/***/ }),

/***/ "./src/assets/shelf.jpg":
/*!******************************!*\
  !*** ./src/assets/shelf.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/shelf.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/shelf.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;