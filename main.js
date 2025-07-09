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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Gotham Medium Regular.ttf */ \"./src/assets/fonts/Gotham Medium Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/cassandra-font/CassandraPersonalUseRegular-3BjG.ttf */ \"./src/assets/fonts/cassandra-font/CassandraPersonalUseRegular-3BjG.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/shelf.jpg */ \"./src/assets/shelf.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/photo-1622405207562-735fa49ff7f7.avif */ \"./src/assets/photo-1622405207562-735fa49ff7f7.avif\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/menu-bg.jpg */ \"./src/assets/menu-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Gotham Medium\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\n}\n@font-face {\n  font-family: \"Cassandra\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"truetype\");\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\nbody::-webkit-scrollbar {\n  display: none;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 2rem 0;\n}\n\n.section-title {\n  font-size: 3rem;\n  text-align: center;\n  font-family: \"Cassandra\", cursive;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.section-title::after {\n  content: \"\";\n  top: 110%;\n  right: 10%;\n  width: 50%;\n  height: 2px;\n  position: absolute;\n}\n\n.section-title {\n  color: #02b6ff;\n}\n.section-title::after {\n  background: #FF1493;\n}\n\nnav {\n  position: sticky;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 10;\n  align-items: center;\n  padding: 0 2rem;\n}\n\n#nav-links {\n  display: flex;\n  gap: 1.25rem;\n  font-family: \"Gotham Medium\", sans-serif;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  cursor: pointer;\n}\n#nav-links li {\n  color: white;\n  text-decoration: none;\n  font-size: 1.25rem;\n  font-weight: bold;\n  position: relative;\n}\n#nav-links li:hover, #nav-links li.active {\n  color: #02b6ff;\n}\n#nav-links li:hover::after, #nav-links li.active::after {\n  border-bottom: 2px solid #FF1493;\n  content: \"\";\n  position: absolute;\n  bottom: -25%;\n  left: 50%;\n  width: 50%;\n  transform: translateX(-50%);\n}\n\n.logo {\n  font-family: \"Cassandra\", cursive;\n  color: white;\n  font-size: 1.75rem;\n}\n\n.hamburger {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  display: none;\n}\n.hamburger:focus {\n  outline: none;\n}\n\n@media (max-width: 768px) {\n  #nav-links {\n    display: none;\n    flex-direction: column;\n    width: 100%;\n  }\n  #nav-links.show {\n    display: flex;\n  }\n  .hamburger {\n    display: block;\n  }\n}\n#hero {\n  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0)), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat;\n  background-size: cover;\n  height: 100vh;\n  z-index: 0;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#cta {\n  color: white;\n  font-family: \"Cassandra\", cursive;\n  font-size: 4rem;\n  margin-bottom: 0;\n}\n\n#subtitle {\n  font-family: \"Gotham Medium\", sans-serif;\n  color: white;\n  font-size: 2rem;\n  margin-top: 0;\n}\n\n#message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n#message button {\n  background-color: #02b6ff;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 25px;\n  border: none;\n  font-family: \"Gotham Medium\", sans-serif;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n#message button:hover {\n  background-color: white;\n  color: #02b6ff;\n}\n\n.home-img {\n  width: 100%;\n  height: auto;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 24px;\n  width: 90%;\n  font-family: \"Gotham Medium\", sans-serif;\n}\n\n.about-header {\n  color: #02b6ff;\n  font-size: 2rem;\n}\n\n.about-paragraph {\n  color: #FF1493;\n  font-size: 1.5rem;\n}\n\n#hours-container {\n  color: white;\n  font-family: \"Gotham Medium\", sans-serif;\n  background-color: #FF1493;\n  width: 80%;\n  border-radius: 12px;\n  padding: 12px;\n}\n#hours-container p {\n  font-size: 1.15rem;\n}\n\n.menu-section {\n  text-align: center;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat;\n  background-size: cover;\n  margin: 0;\n  padding: 1rem 0;\n}\n\n#menu-title {\n  font-size: 3rem;\n  text-align: center;\n  font-family: \"Cassandra\", cursive;\n  margin-bottom: 1.5rem;\n  position: relative;\n  color: #02b6ff;\n}\n#menu-title::after {\n  content: \"\";\n  top: 110%;\n  right: 10%;\n  width: 50%;\n  height: 2px;\n  position: absolute;\n}\n#menu-title::after {\n  background: white;\n}\n\n#menu-container {\n  width: 85%;\n  background: rgba(0, 0, 0, 0.8);\n  padding: 2rem 1rem;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n#menu-container h1 {\n  color: white;\n  font-family: \"Cassandra\", cursive;\n  font-size: 24px;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 16px;\n}\n\n.menu-category {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.menu-item img {\n  height: 300px;\n  width: 300px;\n}\n\n.item-description {\n  color: white;\n  font-family: \"Gotham Medium\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.item-description p {\n  margin: 0;\n}\n.item-description .item-title {\n  font-family: \"Cassandra\", cursive;\n  font-size: 1.5em;\n}\n\n@media (max-width: 576px) {\n  #menu-container {\n    width: 100vw;\n    padding: 1rem 0;\n    border-radius: 0;\n  }\n}\n#contacts {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  background-size: cover;\n  margin: 0;\n  padding: 24px 0;\n  min-height: calc(100vh - 346px);\n}\n\n#contacts-container {\n  color: white;\n  font-family: \"Gotham Medium\", sans-serif;\n  width: min(75%, 1200px);\n  border-radius: 8px;\n  padding: 24px;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: space-between;\n}\n\n#contact-info {\n  display: flex;\n  flex-direction: column;\n}\n\n#map {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.info-line {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.contact-icon {\n  height: 20px;\n  width: auto;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\nbutton[type^=submit] {\n  font-family: \"Cassandra\", cursive;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: white;\n  border-radius: 8px;\n}\n\nbutton[type^=submit]:hover {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.9);\n}\n\niframe {\n  max-width: 100%;\n}\n\n@media (max-width: 1024px) {\n  #contacts-container {\n    flex-direction: column;\n    gap: 2rem;\n  }\n}\nfooter {\n  background-color: rgba(0, 0, 0, 0.9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 0;\n  color: white;\n  font-family: \"Gotham Medium\", sans-serif;\n  font-size: 1.25rem;\n  gap: 1rem;\n}\nfooter p {\n  margin: 0;\n}\n\n.attribution {\n  color: white;\n  text-decoration: none;\n}\n.attribution:hover {\n  color: #FF1493;\n  text-decoration: underline;\n}\n\n.fa-github-square {\n  color: white;\n  font-size: 32px;\n}\n.fa-github-square:hover {\n  color: #FF1493;\n}\n\n#attribution-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  text-align: center;\n  gap: 12px;\n}\n#attribution-grid a {\n  font-size: 12px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/clock.png":
/*!******************************!*\
  !*** ./src/assets/clock.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/clock.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/clock.png?");

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

/***/ "./src/assets/cookies/blondie.jpg":
/*!****************************************!*\
  !*** ./src/assets/cookies/blondie.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/blondie.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/blondie.jpg?");

/***/ }),

/***/ "./src/assets/cookies/brownie.jpg":
/*!****************************************!*\
  !*** ./src/assets/cookies/brownie.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/brownie.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/brownie.jpg?");

/***/ }),

/***/ "./src/assets/cookies/chocolate-chip-cookie.jpg":
/*!******************************************************!*\
  !*** ./src/assets/cookies/chocolate-chip-cookie.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/chocolate-chip-cookie.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/chocolate-chip-cookie.jpg?");

/***/ }),

/***/ "./src/assets/cookies/gingersnap.jpg":
/*!*******************************************!*\
  !*** ./src/assets/cookies/gingersnap.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/gingersnap.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/gingersnap.jpg?");

/***/ }),

/***/ "./src/assets/cookies/granola-bar.jpg":
/*!********************************************!*\
  !*** ./src/assets/cookies/granola-bar.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/granola-bar.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/granola-bar.jpg?");

/***/ }),

/***/ "./src/assets/cookies/jam-thumbprints.jpg":
/*!************************************************!*\
  !*** ./src/assets/cookies/jam-thumbprints.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/jam-thumbprints.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/jam-thumbprints.jpg?");

/***/ }),

/***/ "./src/assets/cookies/macaroons.jpg":
/*!******************************************!*\
  !*** ./src/assets/cookies/macaroons.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/macaroons.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/macaroons.jpg?");

/***/ }),

/***/ "./src/assets/cookies/nanaimo-bar.jpg":
/*!********************************************!*\
  !*** ./src/assets/cookies/nanaimo-bar.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/nanaimo-bar.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/nanaimo-bar.jpg?");

/***/ }),

/***/ "./src/assets/cookies/peanut-butter-blossom.jpg":
/*!******************************************************!*\
  !*** ./src/assets/cookies/peanut-butter-blossom.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/peanut-butter-blossom.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/peanut-butter-blossom.jpg?");

/***/ }),

/***/ "./src/assets/cookies/pizzelles.jpg":
/*!******************************************!*\
  !*** ./src/assets/cookies/pizzelles.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/pizzelles.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies/pizzelles.jpg?");

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

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n  const content = document.getElementById('content');\n  const footerElement = document.createElement('footer');\n  footerElement.innerHTML = `\n      <div id=\"attribution-grid\">\n          <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/cookie\" title=\"cookie icons\" target=\"_blank\" rel=\"noreferrer noopener\">\n              Cookie icons created by Freepik - Flaticon\n          </a>\n          <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/clock\" title=\"clock icons\" target=\"_blank\" rel=\"noreferrer noopener\">\n              Clock icons created by Ilham Fitrotul Hayat - Flaticon\n          </a>\n          <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/gps\" title=\"gps icons\" target=\"_blank\" rel=\"noreferrer noopener\">\n              Gps icons created by Freepik - Flaticon\n          </a>\n          <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/telephone\" title=\"telephone icons\" target=\"_blank\" rel=\"noreferrer noopener\">\n              Telephone icons created by Ilham Fitrotul Hayat - Flaticon\n          </a>\n          <a class=\"attribution\" href=\"https://www.flaticon.com/free-icons/email\" title=\"email icons\" target=\"_blank\" rel=\"noreferrer noopener\">\n              Email icons created by Ilham Fitrotul Hayat - Flaticon\n          </a>\n      </div>\n      <p>Copyright &copy; 2022 Kelvin Nguyen</p>\n      <a href=\"https://github.com/KelTamNguyen\" target=\"_blank\" rel=\"noreferrer noopener\">\n          <i class=\"fab fa-github-square fa-lg\"></i>\n      </a>\n  `;\n\n  content.appendChild(footerElement);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navbar)\n/* harmony export */ });\nfunction navbar() {\n  // const content = document.getElementById('content');\n  const body = document.getElementsByTagName('body')[0];\n\n  const navbarElement = document.createElement('nav');\n  navbarElement.innerHTML = `\n      <h1 class=\"logo\">La Pâtisserie</h1>\n      <button class=\"hamburger\" id=\"hamburger\">\n          <i class=\"fas fa-bars\"></i>\n      </button>\n      <ul id=\"nav-links\">\n          <li id=\"home\" class=\"active\">Home</li>\n          <li id=\"menu\">Menu</li>\n          <li id=\"contact\">Contact</li>\n      </ul>\n  `;\n\n  // content.appendChild(navbar);\n  body.prepend(navbarElement);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/navbar.js?");

/***/ }),

/***/ "./src/functions/clearContent.js":
/*!***************************************!*\
  !*** ./src/functions/clearContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction clearContent() {\n  const content = document.getElementById('content');\n  while (content.children.length > 0) {\n    content.children[0].remove();\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/clearContent.js?");

/***/ }),

/***/ "./src/functions/initialPageLoad.js":
/*!******************************************!*\
  !*** ./src/functions/initialPageLoad.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHome */ \"./src/functions/loadHome.js\");\n\n\n\nfunction initialPageLoad() {\n  console.log('Loaded the home page!');\n\n  (0,_components_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_loadHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/initialPageLoad.js?");

/***/ }),

/***/ "./src/functions/loadContact.js":
/*!**************************************!*\
  !*** ./src/functions/loadContact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/functions/clearContent.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _assets_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/placeholder.png */ \"./src/assets/placeholder.png\");\n/* harmony import */ var _assets_phone_call_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/phone-call.png */ \"./src/assets/phone-call.png\");\n/* harmony import */ var _assets_clock_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/clock.png */ \"./src/assets/clock.png\");\n/* harmony import */ var _assets_email_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/email.png */ \"./src/assets/email.png\");\n\n\n\n\n\n\n\nfunction loadContact() {\n  (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  window.scroll(0, 0);\n\n  const content = document.getElementById('content');\n\n  const contacts = document.createElement('section');\n  contacts.id = 'contacts';\n\n  const contanctsTitle = document.createElement('h1');\n  contanctsTitle.classList.add('section-title');\n  contanctsTitle.textContent = 'Contact Us';\n  contacts.appendChild(contanctsTitle);\n\n  const contactsContainer = document.createElement('div');\n  contactsContainer.id = 'contacts-container';\n  const info = document.createElement('div');\n  info.id = 'contact-info';\n\n  const phoneLine = document.createElement('div');\n  phoneLine.classList.add('info-line');\n  const phoneIcon = document.createElement('img');\n  phoneIcon.classList.add('contact-icon');\n  phoneIcon.src = _assets_phone_call_png__WEBPACK_IMPORTED_MODULE_3__;\n  phoneLine.appendChild(phoneIcon);\n  const phoneNumber = document.createElement('p');\n  phoneNumber.textContent = '(123) 456-7890';\n  phoneLine.appendChild(phoneNumber);\n  info.appendChild(phoneLine);\n\n  const hoursLine = document.createElement('div');\n  hoursLine.classList.add('info-line');\n  const clockIcon = document.createElement('img');\n  clockIcon.classList.add('contact-icon');\n  clockIcon.src = _assets_clock_png__WEBPACK_IMPORTED_MODULE_4__;\n  hoursLine.appendChild(clockIcon);\n  const hours = document.createElement('p');\n  hours.innerHTML = 'Tuesday: CLOSED <br> Wednesday - Monday: 8AM - 5PM';\n  hoursLine.appendChild(hours);\n  info.appendChild(hoursLine);\n\n  const mailForm = document.createElement('form');\n  const formTitle = document.createElement('div');\n  formTitle.classList.add('info-line');\n  const envelopeIcon = document.createElement('img');\n  envelopeIcon.classList.add('contact-icon');\n  envelopeIcon.src = _assets_email_png__WEBPACK_IMPORTED_MODULE_5__;\n  formTitle.appendChild(envelopeIcon);\n  const formTitleMsg = document.createElement('h2');\n  formTitleMsg.textContent = 'Message Us!';\n  formTitle.appendChild(formTitleMsg);\n  mailForm.appendChild(formTitle);\n\n  const formGroup = document.createElement('div');\n  formGroup.classList.add('form-group');\n  const nameLabel = document.createElement('label');\n  nameLabel.for = 'name';\n  nameLabel.textContent = 'Name';\n  formGroup.appendChild(nameLabel);\n  const name = document.createElement('input');\n  name.type = 'text';\n  name.id = 'name';\n  name.placeholder = 'Enter your name';\n  // name.required = true;\n  formGroup.appendChild(name);\n  const emailLabel = document.createElement('label');\n  emailLabel.for = 'email';\n  emailLabel.textContent = 'Email';\n  formGroup.appendChild(emailLabel);\n  const email = document.createElement('input');\n  email.type = 'email';\n  email.id = 'email';\n  email.placeholder = 'Enter your email';\n  // email.required = true;\n  formGroup.appendChild(email);\n  const messageLabel = document.createElement('label');\n  messageLabel.for = 'Message';\n  messageLabel.textContent = 'Feedback';\n  formGroup.appendChild(messageLabel);\n  const message = document.createElement('textarea');\n  message.placeholder = 'Write Us Here!';\n  message.cols = 60;\n  message.rows = 8;\n  formGroup.appendChild(message);\n  const sendBtn = document.createElement('button');\n  sendBtn.type = 'submit';\n  sendBtn.textContent = 'Send';\n  sendBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    mailForm.reset();\n  });\n  formGroup.appendChild(sendBtn);\n  mailForm.appendChild(formGroup);\n  info.appendChild(mailForm);\n\n  contactsContainer.appendChild(info);\n  contacts.appendChild(contactsContainer);\n\n  const map = document.createElement('div');\n  map.id = 'map';\n  map.innerHTML = `\n        <div class=\"info-line\">\n            <img class=\"contact-icon\" src=${_assets_placeholder_png__WEBPACK_IMPORTED_MODULE_2__}>\n            <p>376 1st St, Brooklyn, NY 11215</p>\n        </div>\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.053098867051!2d-73.98240988475965!3d40.67279897933621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b004c6161b3%3A0x380642c0da0bcb69!2s376%201st%20St%2C%20Brooklyn%2C%20NY%2011215!5e0!3m2!1sen!2sus!4v1661641054457!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n    `;\n  contactsContainer.appendChild(map);\n\n  content.appendChild(contacts);\n\n  // load footer component\n  (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/loadContact.js?");

/***/ }),

/***/ "./src/functions/loadHome.js":
/*!***********************************!*\
  !*** ./src/functions/loadHome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/functions/clearContent.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ \"./src/functions/loadMenu.js\");\n\n\n\n\nfunction loadHome() {\n  (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  window.scroll(0, 0);\n\n  const content = document.getElementById('content');\n\n  // hero section\n  const heroSection = document.createElement('section');\n  heroSection.id = 'hero';\n\n  const messageDiv = document.createElement('div');\n  messageDiv.id = 'message';\n  const callToAction = document.createElement('h1');\n  callToAction.id = 'cta';\n  callToAction.textContent = 'Every moment with a cookie';\n  messageDiv.appendChild(callToAction);\n  const subtitle = document.createElement('h2');\n  subtitle.id = 'subtitle';\n  subtitle.textContent = '...is a moment of joy!';\n  messageDiv.appendChild(subtitle);\n  const menuBtn = document.createElement('button');\n  menuBtn.textContent = \"Let's have some!\";\n  menuBtn.addEventListener('click', () => {\n    const homeLink = document.getElementById('home');\n    const menuLink = document.getElementById('menu');\n    homeLink.classList.remove('active');\n    menuLink.classList.add('active');\n    (0,_loadMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n  messageDiv.appendChild(menuBtn);\n\n  heroSection.appendChild(messageDiv);\n\n  content.appendChild(heroSection);\n\n  // About section\n  const aboutSection = document.createElement('section');\n  aboutSection.id = 'about';\n  const aboutTitle = document.createElement('h1');\n  aboutTitle.classList.add('section-title');\n  aboutTitle.textContent = 'About Us';\n  aboutSection.appendChild(aboutTitle);\n\n  const aboutContainer = document.createElement('div');\n  aboutContainer.classList.add('about-content');\n  aboutContainer.innerHTML = `\n        <div>\n            <div>\n                <h1 class=\"about-header\">Who Are We?</h1>\n                <p class=\"about-paragraph\">\n                    We are La Pâtisserie, a bakery specializing in cookies since 1969. \n                </p>\n            </div>\n            <div>\n                <h1 class=\"about-header\">Why Cookies?</h1>\n                <p class=\"about-paragraph\">\n                    Few things bring as much simple joy as a freshly \n                    baked cookie. Some may think cakes and tarts too \n                    time-consuming to make, or consider other fancy desserts \n                    too filling or complicated, but hardly anyone refuses a \n                    cookie. At La Pâtisserie, we are dedicated to the simple \n                    pleasures of pastries.\n                </p>\n            </div>\n        </div>\n    `;\n\n  aboutSection.appendChild(aboutContainer);\n  content.appendChild(aboutSection);\n\n  // load footer component\n  (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/loadHome.js?");

/***/ }),

/***/ "./src/functions/loadMenu.js":
/*!***********************************!*\
  !*** ./src/functions/loadMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/functions/clearContent.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _assets_cookies_black_and_white_cookie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/cookies/black-and-white-cookie.jpg */ \"./src/assets/cookies/black-and-white-cookie.jpg\");\n/* harmony import */ var _assets_cookies_almond_cookies_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cookies/almond-cookies.jpg */ \"./src/assets/cookies/almond-cookies.jpg\");\n/* harmony import */ var _assets_cookies_macaroons_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cookies/macaroons.jpg */ \"./src/assets/cookies/macaroons.jpg\");\n/* harmony import */ var _assets_cookies_chocolate_chip_cookie_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/cookies/chocolate-chip-cookie.jpg */ \"./src/assets/cookies/chocolate-chip-cookie.jpg\");\n/* harmony import */ var _assets_cookies_peanut_butter_blossom_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/cookies/peanut-butter-blossom.jpg */ \"./src/assets/cookies/peanut-butter-blossom.jpg\");\n/* harmony import */ var _assets_cookies_granola_bar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/cookies/granola-bar.jpg */ \"./src/assets/cookies/granola-bar.jpg\");\n/* harmony import */ var _assets_cookies_blondie_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/cookies/blondie.jpg */ \"./src/assets/cookies/blondie.jpg\");\n/* harmony import */ var _assets_cookies_brownie_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/cookies/brownie.jpg */ \"./src/assets/cookies/brownie.jpg\");\n/* harmony import */ var _assets_cookies_nanaimo_bar_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/cookies/nanaimo-bar.jpg */ \"./src/assets/cookies/nanaimo-bar.jpg\");\n/* harmony import */ var _assets_cookies_gingersnap_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/cookies/gingersnap.jpg */ \"./src/assets/cookies/gingersnap.jpg\");\n/* harmony import */ var _assets_cookies_jam_thumbprints_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/cookies/jam-thumbprints.jpg */ \"./src/assets/cookies/jam-thumbprints.jpg\");\n/* harmony import */ var _assets_cookies_pizzelles_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/cookies/pizzelles.jpg */ \"./src/assets/cookies/pizzelles.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction loadMenu() {\n  (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  window.scroll(0, 0);\n\n  const content = document.getElementById('content');\n\n  const menuSection = document.createElement('section');\n  menuSection.classList.add('menu-section');\n  menuSection.innerHTML = `\n      <h1 id=\"menu-title\">Menu</h1>\n      <div id=\"menu-container\">\n          <div class=\"menu-category\">\n              <h1>Drop Cookies</h1>\n              <div class=\"menu-grid\">\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_black_and_white_cookie_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Black And White Cookie\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Black And White Cookie</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_almond_cookies_jpg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Chinese Almond Cookie\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Chinese Almond Cookie</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_macaroons_jpg__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Macaroon\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Macaroon</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_chocolate_chip_cookie_jpg__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Chocolate Chip Cookie\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Chocolate Chip Cookie</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"menu-category\">\n              <h1>Bar Cookies</h1>\n              <div class=\"menu-grid\">\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_blondie_jpg__WEBPACK_IMPORTED_MODULE_8__}\" alt=\"Blondie\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Blondie</p>\n                          <p>99&cent/bar</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_brownie_jpg__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"Brownie\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Brownie</p>\n                          <p>99&cent/bar</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_granola_bar_jpg__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"Granola Bar\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Granola Bar</p>\n                          <p>99&cent/bar</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=\"${_assets_cookies_nanaimo_bar_jpg__WEBPACK_IMPORTED_MODULE_10__}\" alt=\"Nanaimo Bar\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Nanaimo Bar</p>\n                          <p>99&cent/bar</p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"menu-category\">\n              <h1>Molded Cookies</h1>\n              <div class=\"menu-grid\">\n                  <div class=\"menu-item\">\n                      <img src=${_assets_cookies_peanut_butter_blossom_jpg__WEBPACK_IMPORTED_MODULE_6__} alt=\"Peanut Butter Blossom\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Peanut Butter Blossom</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=${_assets_cookies_gingersnap_jpg__WEBPACK_IMPORTED_MODULE_11__} alt=\"Gingersnap\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Gingersnap</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=${_assets_cookies_jam_thumbprints_jpg__WEBPACK_IMPORTED_MODULE_12__} alt=\"Jam Thumbprint\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Jam Thumbprint</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n                  <div class=\"menu-item\">\n                      <img src=${_assets_cookies_pizzelles_jpg__WEBPACK_IMPORTED_MODULE_13__} alt=\"Pizzelle\">\n                      <div class=\"item-description\">\n                          <p class=\"item-title\">Pizzelle</p>\n                          <p>99&cent/cookie</p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  `;\n\n  content.appendChild(menuSection);\n\n  // load footer component\n  (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/loadMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/initialPageLoad */ \"./src/functions/initialPageLoad.js\");\n/* harmony import */ var _functions_loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/loadHome */ \"./src/functions/loadHome.js\");\n/* harmony import */ var _functions_loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/loadMenu */ \"./src/functions/loadMenu.js\");\n/* harmony import */ var _functions_loadContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/loadContact */ \"./src/functions/loadContact.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\n\n\n\n\n\n\n(function () {\n  // initialPageLoad();\n  (0,_functions_loadHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const navLinks = document.getElementById('nav-links');\n  const home = document.getElementById('home');\n  const menu = document.getElementById('menu');\n  const contact = document.getElementById('contact');\n  const hamburger = document.getElementById('hamburger');\n\n  navLinks.addEventListener('click', (e) => {\n    if (e.target.tagName.toLowerCase() === 'li') {\n      Array.from(navLinks.children).forEach((child) => {\n        child.classList.remove('active');\n      });\n      e.target.classList.add('active');\n    }\n  });\n\n  home.addEventListener('click', () => {\n    navLinks.classList.remove('show');\n    (0,_functions_loadHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  menu.addEventListener('click', () => {\n    navLinks.classList.remove('show');\n    (0,_functions_loadMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  contact.addEventListener('click', () => {\n    navLinks.classList.remove('show');\n    (0,_functions_loadContact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n\n  hamburger.addEventListener('click', () => {\n    navLinks.classList.toggle('show');\n  });\n}());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.scss?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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