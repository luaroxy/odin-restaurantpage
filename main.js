/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Spongeboy.ttf */ "./src/fonts/Spongeboy.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PlayfairDisplay.ttf */ "./src/fonts/PlayfairDisplay.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/krustykrab.png */ "./src/images/krustykrab.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Spongeboy';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: 600;\n  font-style: normal;\n} \n\n@font-face {\n  font-family: 'Playfair';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 400;\n  font-style: normal;\n} \n\n*{\n  margin:0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -moz-font-feature-settings: \"liga\" on;\n  font-family: 'Playfair';\n  letter-spacing: 0.08rem;\n}\n\n\n\n.intro{\n  height: 100vh;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.intro_background{\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 100% 100%;\n  height: 100%;\n  width: 100%;\n  opacity: 0.75;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: fadeIn 3s;\n  -webkit-animation: fadeIn 3s;\n  -moz-animation: fadeIn 3s;\n  -o-animation: fadeIn 3s;\n  -ms-animation: fadeIn 3s;\n}\n\n.intro_content{\n  height: 100%;\n  width: 100%;\n  color: rgb(8, 8, 8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.intro_content div:first-child{\n  font-family: 'Spongeboy';\n  font-size: clamp(2rem, 4vw, 5rem);\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  color:rgba(0, 0, 0, 0.932);\n}\n\n.intro_content div:first-child:hover{\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  opacity: 0.8;\n}\n\n.intro_content div:nth-child(2){\n  color:rgba(0, 0, 0, 0.932);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  font-weight: 600;\n  text-shadow: 2px 2px 2px white;\n}\n\n.header{\n  height: 15vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgb(116, 116, 117);\n  z-index: 3;\n  background-color: rgba(255, 255, 255, 0.466);\n  padding: 0 2rem;\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.header > div:first-of-type, .footer > div:first-of-type{\n  font-family: 'Spongeboy';\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  font-size: clamp(1rem, 1.75vw, 2rem);\n}\n\n.about{\n  height: 50vh;\n  background-color: #f5f5f5;\n  color: rgb(22, 97, 236);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8vh;\n}\n\n.about div{\n  font-size: clamp(1rem, 1.75vw, 2rem);\n  letter-spacing: 0.5vw;\n  font-weight: 550;\n}\n\n.about button {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: 2px solid rgb(22, 97, 236);\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  padding: 1.5vh 2vw;\n  font-size: clamp(1rem, 1.5vw, 2rem);\n  letter-spacing: 0.25vw;\n}\n\n.about button:hover{\n  border: 2px solid white;\n  background-color: rgba(22, 97, 236, 0.788);\n  color: white;\n}\n\n.contact{\n  height: 100vh;\n  background-color: #fff;\n  color: rgb(22, 97, 236);\n  display: flex;\n  justify-content: space-around;\n  padding: 30vh 0;\n  font-size: clamp(1rem, 1.4vw, 2rem);\n}\n\n.contact img{\n  height: 7.5vh;\n  width: 7.5vw;\n  opacity: 0.795;\n}\n\n\n.address, .hours, .contact2{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4vh;\n}\n\n.address p, .hours p, .contact2 p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.address p{\n  text-align: center;\n}\n\n.footer{\n  height: 20vh;\n  background-color: #f5f5f5;\n  color: rgb(116, 116, 117);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n}\n\n.footeroptions, .optionstop{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n/*Fade in effect*/\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-moz-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-webkit-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-o-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-ms-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n/* ****** M E N U ********** */\n.menuContent{\n  display: grid;\n  grid-template-rows: 4fr repeat(14, 1fr);\n  grid-template-columns: 4fr 1fr 4fr 1fr;\n  padding: 30vh 25vw;\n  white-space: pre;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.menuTitle{\n  grid-column: 1 / 5;\n  font-family: 'Spongeboy';\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 2vw, 2rem);\n  text-align: center;\n}\n\n/* ****** C O N T A C T ******* */\n\n.contactSection{\n  padding: 30vh 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.inputContainer{\n  display: flex;\n  flex-direction: column;\n}\n\n.contactForm{\n  box-shadow: 3px 3px 12px 6px #8888887a;\n\n}\n\n\n\n.contactInfo{\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 1.4vw, 2rem);\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.contactInfo p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.teamMembers{\n  display: flex;\n}\n\n.teamMember img{\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  border: 2px solid rgb(22, 97, 236);\n  padding: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Spongeboy';\n  src: url('./fonts/Spongeboy.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n} \n\n@font-face {\n  font-family: 'Playfair';\n  src: url('./fonts/PlayfairDisplay.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n} \n\n*{\n  margin:0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -moz-font-feature-settings: \"liga\" on;\n  font-family: 'Playfair';\n  letter-spacing: 0.08rem;\n}\n\n\n\n.intro{\n  height: 100vh;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.intro_background{\n  background: url('./images/krustykrab.png');\n  background-size: 100% 100%;\n  height: 100%;\n  width: 100%;\n  opacity: 0.75;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: fadeIn 3s;\n  -webkit-animation: fadeIn 3s;\n  -moz-animation: fadeIn 3s;\n  -o-animation: fadeIn 3s;\n  -ms-animation: fadeIn 3s;\n}\n\n.intro_content{\n  height: 100%;\n  width: 100%;\n  color: rgb(8, 8, 8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.intro_content div:first-child{\n  font-family: 'Spongeboy';\n  font-size: clamp(2rem, 4vw, 5rem);\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  color:rgba(0, 0, 0, 0.932);\n}\n\n.intro_content div:first-child:hover{\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  opacity: 0.8;\n}\n\n.intro_content div:nth-child(2){\n  color:rgba(0, 0, 0, 0.932);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  font-weight: 600;\n  text-shadow: 2px 2px 2px white;\n}\n\n.header{\n  height: 15vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgb(116, 116, 117);\n  z-index: 3;\n  background-color: rgba(255, 255, 255, 0.466);\n  padding: 0 2rem;\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.header > div:first-of-type, .footer > div:first-of-type{\n  font-family: 'Spongeboy';\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  font-size: clamp(1rem, 1.75vw, 2rem);\n}\n\n.about{\n  height: 50vh;\n  background-color: #f5f5f5;\n  color: rgb(22, 97, 236);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8vh;\n}\n\n.about div{\n  font-size: clamp(1rem, 1.75vw, 2rem);\n  letter-spacing: 0.5vw;\n  font-weight: 550;\n}\n\n.about button {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: 2px solid rgb(22, 97, 236);\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  padding: 1.5vh 2vw;\n  font-size: clamp(1rem, 1.5vw, 2rem);\n  letter-spacing: 0.25vw;\n}\n\n.about button:hover{\n  border: 2px solid white;\n  background-color: rgba(22, 97, 236, 0.788);\n  color: white;\n}\n\n.contact{\n  height: 100vh;\n  background-color: #fff;\n  color: rgb(22, 97, 236);\n  display: flex;\n  justify-content: space-around;\n  padding: 30vh 0;\n  font-size: clamp(1rem, 1.4vw, 2rem);\n}\n\n.contact img{\n  height: 7.5vh;\n  width: 7.5vw;\n  opacity: 0.795;\n}\n\n\n.address, .hours, .contact2{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4vh;\n}\n\n.address p, .hours p, .contact2 p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.address p{\n  text-align: center;\n}\n\n.footer{\n  height: 20vh;\n  background-color: #f5f5f5;\n  color: rgb(116, 116, 117);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n}\n\n.footeroptions, .optionstop{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n/*Fade in effect*/\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-moz-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-webkit-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-o-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-ms-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n/* ****** M E N U ********** */\n.menuContent{\n  display: grid;\n  grid-template-rows: 4fr repeat(14, 1fr);\n  grid-template-columns: 4fr 1fr 4fr 1fr;\n  padding: 30vh 25vw;\n  white-space: pre;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.menuTitle{\n  grid-column: 1 / 5;\n  font-family: 'Spongeboy';\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 2vw, 2rem);\n  text-align: center;\n}\n\n/* ****** C O N T A C T ******* */\n\n.contactSection{\n  padding: 30vh 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.inputContainer{\n  display: flex;\n  flex-direction: column;\n}\n\n.contactForm{\n  box-shadow: 3px 3px 12px 6px #8888887a;\n\n}\n\n\n\n.contactInfo{\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 1.4vw, 2rem);\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.contactInfo p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.teamMembers{\n  display: flex;\n}\n\n.teamMember img{\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  border: 2px solid rgb(22, 97, 236);\n  padding: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_Krabs_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Krabs.png */ "./src/images/Krabs.png");
/* harmony import */ var _images_SpongeBob_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/SpongeBob.png */ "./src/images/SpongeBob.png");
/* harmony import */ var _images_Squidward_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Squidward.png */ "./src/images/Squidward.png");




function page_load(){
    const container = document.createElement('div');
    container.classList.add('container');

    function header() {
      const header = document.createElement('div');
      header.classList.add('header');

      const titletop = document.createElement('div');
      titletop.textContent = ("Krusty Krab");

      const optionstop = document.createElement('div');
      optionstop.classList.add('optionstop');
      const hometop = document.createElement('div');
      hometop.textContent = ("Home");
      optionstop.appendChild(hometop);
      const menutop = document.createElement('div');
      menutop.textContent = ("Menu");
      optionstop.appendChild(menutop);
      const contacttop = document.createElement('div');
      contacttop.textContent = ("Contact");
      optionstop.appendChild(contacttop);

      header.appendChild(titletop);
      header.appendChild(optionstop);

      return header;
    }
    
    function contactForm(){
        const contactForm = document.createElement('section');
        contactForm.classList.add('contactForm');

        const contactFormTitle = document.createElement('p');
        contactFormTitle.textContent = "Contact Us";
        contactForm.appendChild(contactFormTitle);

        const contactFormContainer = document.createElement('form');
        contactFormContainer.classList.add('contactFormContainer');

        const nameContainer = document.createElement('div');
        nameContainer.classList.add('inputContainer');
        const nameLabelForm = document.createElement('label');
        nameLabelForm.setAttribute("for", "name");
        nameLabelForm.textContent = "Name";
        nameContainer.appendChild(nameLabelForm);
        const nameInputForm = document.createElement('input');
        nameInputForm.setAttribute("type", "text");
        nameInputForm.setAttribute("name", "name");
        nameInputForm.setAttribute("id", "name");
        nameInputForm.setAttribute("required","true");
        nameContainer.appendChild(nameInputForm);

        const emailContainer = document.createElement('div');
        emailContainer.classList.add('inputContainer');
        const emailLabelForm = document.createElement('label');
        emailLabelForm.setAttribute("for", "email");
        emailLabelForm.textContent = "Email";
        emailContainer.appendChild(emailLabelForm);
        const emailInputForm = document.createElement('input');
        emailInputForm.setAttribute("type", "email");
        emailInputForm.setAttribute("name", "email");
        emailInputForm.setAttribute("id", "email");
        emailInputForm.setAttribute("required","true");
        emailContainer.appendChild(emailInputForm);

        const topicContainer = document.createElement('div');
        topicContainer.classList.add('inputContainer');
        const topicLabelForm = document.createElement('label');
        topicLabelForm.setAttribute("for", "topic");
        topicLabelForm.textContent = "Topic";
        topicContainer.appendChild(topicLabelForm);
        const topicInputForm = document.createElement('select');
        topicInputForm.setAttribute("name", "topic");
        topicInputForm.setAttribute("id", "topic");
        topicInputForm.setAttribute("required","true");
        topicContainer.appendChild(topicInputForm);
        const topicOption1 = document.createElement('option');
        topicOption1.textContent = "Reservation";
        topicOption1.setAttribute("value", "reservation");
        topicInputForm.appendChild(topicOption1);
        const topicOption2 = document.createElement('option');
        topicOption2.textContent = "Private Event";
        topicOption2.setAttribute("value", "privateevent");
        topicInputForm.appendChild(topicOption2);
        const topicOption3 = document.createElement('option');
        topicOption3.textContent = "Feedback";
        topicOption3.setAttribute("value", "feedback");
        topicInputForm.appendChild(topicOption3);
        const topicOption4 = document.createElement('option');
        topicOption4.textContent = "Other";
        topicOption4.setAttribute("value", "other");
        topicOption4.setAttribute("selected", "true");
        topicInputForm.appendChild(topicOption4);

        const messageContainer = document.createElement('div');
        messageContainer.classList.add('inputContainer');
        const messageLabelForm = document.createElement('label');
        messageLabelForm.setAttribute("for", "message");
        messageLabelForm.textContent = "Message";
        messageContainer.appendChild(messageLabelForm);
        const messageInputForm = document.createElement('textarea');
        messageInputForm.setAttribute("name", "message");
        messageInputForm.setAttribute("id", "message");
        messageInputForm.setAttribute("required","true");
        messageInputForm.setAttribute("rows","5");
        messageContainer.appendChild(messageInputForm);

        const button = document.createElement('button');
        button.textContent = "Send it";
        button.setAttribute("type", "submit");

        contactFormContainer.appendChild(nameContainer);
        contactFormContainer.appendChild(emailContainer);
        contactFormContainer.appendChild(topicContainer);
        contactFormContainer.appendChild(messageContainer);
        contactFormContainer.appendChild(button);

        contactForm.appendChild(contactFormContainer);

        return contactForm;

    }

    function contactInfo() {
        const contactInfo = document.createElement('section');
        contactInfo.classList.add('contactInfo');

        const phone = document.createElement('div');
        const phoneTitle = document.createElement('div');
        phoneTitle.textContent = "Phone";
        phone.appendChild(phoneTitle);
        const phoneContent = document.createElement('p');
        phoneContent.textContent = "555-555-5555";
        phone.appendChild(phoneContent);

        const email = document.createElement('div');
        const emailTitle = document.createElement('div');
        emailTitle.textContent = "Email";
        email.appendChild(emailTitle);
        const emailContent = document.createElement('p');
        emailContent.textContent = "krustykrab@bb.com";
        email.appendChild(emailContent);

        const address = document.createElement('div');
        const addressTitle = document.createElement('div');
        addressTitle.textContent = "Address";
        address.appendChild(addressTitle);
        const addressContent = document.createElement('p');
        addressContent.textContent = `831 Bottom Feeder Lane \r\n Bikini Bottom, Pacific Ocean`;
        address.appendChild(addressContent);

        const hours = document.createElement('div');
        const hoursTitle = document.createElement('div');
        hoursTitle.textContent = "Hours";
        hours.appendChild(hoursTitle);
        const hoursContent = document.createElement('p');
        hoursContent.textContent = `Monday-Thursday \r\n 11:00 am - 09:00 pm \r\n \r\n Friday-Sunday \r\n 10:00 am - 11:00 pm`;
        hours.appendChild(hoursContent);

        contactInfo.appendChild(phone);
        contactInfo.appendChild(email);
        contactInfo.appendChild(address);
        contactInfo.appendChild(hours);

        return contactInfo;
    }

    function contactSection(){
        const contactSection = document.createElement('section');
        contactSection.classList.add('contactSection');

        contactSection.appendChild(contactForm());
        contactSection.appendChild(contactInfo());

        return contactSection;
    }

    function ourTeam(){
        const ourTeam = document.createElement('section');
        ourTeam.classList.add('ourTeam');

        const teamMembers = document.createElement('section');
        teamMembers.classList.add('teamMembers');

        const teamMember1 = document.createElement('div');
        teamMember1.classList.add('teamMember');
        const teamMember1img = document.createElement('img');
        teamMember1img.src = _images_Krabs_png__WEBPACK_IMPORTED_MODULE_0__;
        teamMember1.appendChild(teamMember1img);
        const teamMember1Name = document.createElement('div');
        teamMember1Name.textContent = ("Eugene H. Krabs");
        teamMember1.appendChild(teamMember1Name);
        const teamMember1Position = document.createElement('p');
        teamMember1Position.textContent = ("Owner and founder");
        teamMember1.appendChild(teamMember1Position);

        const teamMember2 = document.createElement('div');
        teamMember2.classList.add('teamMember');
        const teamMember2img = document.createElement('img');
        teamMember2img.src = _images_SpongeBob_png__WEBPACK_IMPORTED_MODULE_1__;
        teamMember2.appendChild(teamMember2img);
        const teamMember2Name = document.createElement('div');
        teamMember2Name.textContent = ("SpongeBob SquarePants");
        teamMember2.appendChild(teamMember2Name);
        const teamMember2Position = document.createElement('p');
        teamMember2Position.textContent = ("Fry Cook");
        teamMember2.appendChild(teamMember2Position);

        const teamMember3 = document.createElement('div');
        teamMember3.classList.add('teamMember');
        const teamMember3img = document.createElement('img');
        teamMember3img.src = _images_Squidward_png__WEBPACK_IMPORTED_MODULE_2__;
        teamMember3.appendChild(teamMember3img);
        const teamMember3Name = document.createElement('div');
        teamMember3Name.textContent = ("Squidward Tentacles");
        teamMember3.appendChild(teamMember3Name);
        const teamMember3Position = document.createElement('p');
        teamMember3Position.textContent = ("Cashier");
        teamMember3.appendChild(teamMember3Position);

        teamMembers.appendChild(teamMember1);
        teamMembers.appendChild(teamMember2);
        teamMembers.appendChild(teamMember3);

        return teamMembers;

    }

    function footer(){
        const footer = document.createElement('footer');
        footer.classList.add('footer');
     
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
     
        const options = document.createElement('div');
        options.classList.add('footeroptions');
        const homebottom = document.createElement('div');
        homebottom.textContent = ("Home");
        options.appendChild(homebottom);
        const menubottom = document.createElement('div');
        menubottom.textContent = ("Menu");
        options.appendChild(menubottom);
        const contactbottom = document.createElement('div');
        contactbottom.textContent = ("Contact");
        options.appendChild(contactbottom);
     
        footer.appendChild(title);
        footer.appendChild(options);
     
        return footer;
     }

    container.appendChild(header());
    container.appendChild(contactSection());
    container.appendChild(ourTeam());
    container.appendChild(footer());

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page_load);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/location.svg */ "./src/images/location.svg");
/* harmony import */ var _images_clock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/clock.svg */ "./src/images/clock.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/phone.svg */ "./src/images/phone.svg");




function page_load(){
    const container = document.createElement('div');
    container.classList.add('container');

    function header() {
      const header = document.createElement('div');
      header.classList.add('header');

      const titletop = document.createElement('div');
      titletop.textContent = ("Krusty Krab");

      const optionstop = document.createElement('div');
      optionstop.classList.add('optionstop');
      const hometop = document.createElement('div');
      hometop.textContent = ("Home");
      optionstop.appendChild(hometop);
      const menutop = document.createElement('div');
      menutop.textContent = ("Menu");
      optionstop.appendChild(menutop);
      const contacttop = document.createElement('div');
      contacttop.textContent = ("Contact");
      optionstop.appendChild(contacttop);

      header.appendChild(titletop);
      header.appendChild(optionstop);

      return header;
    }

    function intro() {
        const intro = document.createElement('div');
        intro.classList.add('intro');

        const intro_background = document.createElement('div');
        intro_background.classList.add('intro_background');

        const intro_content = document.createElement('div');
        intro_content.classList.add('intro_content');
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
        const subtitle = document.createElement('div');
        subtitle.textContent = ("Home of the Krabby Patty");
        intro_content.appendChild(title);
        intro_content.appendChild(subtitle);

        intro.appendChild(intro_background);
        intro.appendChild(intro_content);
     
        return intro;
     }
     
     function about() {
        const about = document.createElement('section');
        about.classList.add('about');
     
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
     
        const subtitle = document.createElement('button');
        subtitle.textContent = ("Menu");
     
        about.appendChild(title);
        about.appendChild(subtitle);
     
        return about;
     }
     
     function contact(){
        const contact = document.createElement('section');
        contact.classList.add('contact');
     
        const address = document.createElement('div');
        address.classList.add('address');
        const addressimg = document.createElement('img');
        addressimg.src = _images_location_svg__WEBPACK_IMPORTED_MODULE_0__;
        address.appendChild(addressimg);
        const addresstitle = document.createElement('div');
        addresstitle.textContent = ("Address");
        address.appendChild(addresstitle);
        const addresscontent = document.createElement('p');
        addresscontent.textContent = (`831 Bottom Feeder Lane \r\n Bikini Bottom \r\n Pacific Ocean`);
        address.appendChild(addresscontent);
     
        const hours = document.createElement('div');
        hours.classList.add('hours');
        const hoursimg = document.createElement('img');
        hoursimg.src = _images_clock_svg__WEBPACK_IMPORTED_MODULE_1__;
        hours.appendChild(hoursimg);
        const hourstitle = document.createElement('div');
        hourstitle.textContent = ("Hours");
        hours.appendChild(hourstitle);
        const hourscontent = document.createElement('p');
        hourscontent.textContent = (`Monday-Thursday \r\n 11:00 am - 09:00 pm \r\n \r\n Friday-Sunday \r\n 10:00 am - 11:00 pm`);
        hours.appendChild(hourscontent);

        const contact2 = document.createElement('div');
        contact2.classList.add('contact2');
        const contact2img = document.createElement('img');
        contact2img.src = _images_phone_svg__WEBPACK_IMPORTED_MODULE_2__;
        contact2.appendChild(contact2img);
        const contact2title = document.createElement('div');
        contact2title.textContent = ("Contact");
        contact2.appendChild(contact2title);
        const contact2content = document.createElement('p');
        contact2content.textContent = (`Phone: 555-555-5555 \r\n Email: krustykrab@bb.com`);
        contact2.appendChild(contact2content);

     
        contact.appendChild(address);
        contact.appendChild(hours);
        contact.appendChild(contact2);
     
        return contact;
     }
     
     function footer(){
        const footer = document.createElement('footer');
        footer.classList.add('footer');
     
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
     
        const options = document.createElement('div');
        options.classList.add('footeroptions');
        const homebottom = document.createElement('div');
        homebottom.textContent = ("Home");
        options.appendChild(homebottom);
        const menubottom = document.createElement('div');
        menubottom.textContent = ("Menu");
        options.appendChild(menubottom);
        const contactbottom = document.createElement('div');
        contactbottom.textContent = ("Contact");
        options.appendChild(contactbottom);
     
        footer.appendChild(title);
        footer.appendChild(options);
     
        return footer;
     }

     container.appendChild(header());
     container.appendChild(intro());
     container.appendChild(about());
     container.appendChild(contact());
     container.appendChild(footer());

     return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page_load);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function page_load(){
    const container = document.createElement('div');
    container.classList.add('container');

    function header() {
      const header = document.createElement('div');
      header.classList.add('header');

      const titletop = document.createElement('div');
      titletop.textContent = ("Krusty Krab");

      const optionstop = document.createElement('div');
      optionstop.classList.add('optionstop');
      const hometop = document.createElement('div');
      hometop.textContent = ("Home");
      optionstop.appendChild(hometop);
      const menutop = document.createElement('div');
      menutop.textContent = ("Menu");
      optionstop.appendChild(menutop);
      const contacttop = document.createElement('div');
      contacttop.textContent = ("Contact");
      optionstop.appendChild(contacttop);

      header.appendChild(titletop);
      header.appendChild(optionstop);

      return header;
    }
    
    function menuContent(){
        const menu = document.createElement('section');
        menu.classList.add('menuContent');

        const menuTitle = document.createElement('p');
        menuTitle.textContent = ("Galley Grub");
        menu.appendChild(menuTitle);
        menuTitle.classList.add('menuTitle');

        let menuItemPrice=["Krabby Patty","1.25","Krabby Meal","3.50",
                            "   w/ sea cheese","1.50","Double Krabby Meal","3.75",
                            "Double Krabby Patty","2.00","Triple Krabby Meal","4.00",
                            "   w/ sea cheese","2.25","Salty Sea Dog","1.25",
                            "Triple Krabby Patty","3.00","Footlong","2.00",
                            "   w/ sea cheese","3.25","Sailors Surprise","3.00",
                            " "," ","Golden Loaf","2.00",
                            "Coral bits"," ","   w/ sauce","2.50",
                            "   Small","1.00"," "," ",
                            "   Medium","1.25","Kelp Shake","2.00",
                            "   Large","1.75","Seafoam Soda"," ",
                            " "," ","   Small","1.00",
                            "Kelp Rings","1.50","   Medium","1.25",
                            "   salty sauce","0.50","   Large","1.50"
                          ];

        menuItemPrice.forEach(element => {
          const item = document.createElement('p');
          item.textContent = element;
          menu.appendChild(item);
        });

        return menu;
    }

    function footer(){
        const footer = document.createElement('footer');
        footer.classList.add('footer');
     
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
     
        const options = document.createElement('div');
        options.classList.add('footeroptions');
        const homebottom = document.createElement('div');
        homebottom.textContent = ("Home");
        options.appendChild(homebottom);
        const menubottom = document.createElement('div');
        menubottom.textContent = ("Menu");
        options.appendChild(menubottom);
        const contactbottom = document.createElement('div');
        contactbottom.textContent = ("Contact");
        options.appendChild(contactbottom);
     
        footer.appendChild(title);
        footer.appendChild(options);
     
        return footer;
     }

    container.appendChild(header());
    container.appendChild(menuContent());
    container.appendChild(footer());

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page_load);

/***/ }),

/***/ "./src/fonts/PlayfairDisplay.ttf":
/*!***************************************!*\
  !*** ./src/fonts/PlayfairDisplay.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54971b7248ded7d0d614.ttf";

/***/ }),

/***/ "./src/fonts/Spongeboy.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Spongeboy.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "885335f34296fce21bdc.ttf";

/***/ }),

/***/ "./src/images/Krabs.png":
/*!******************************!*\
  !*** ./src/images/Krabs.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26ea4e4a06a6460d82a7.png";

/***/ }),

/***/ "./src/images/SpongeBob.png":
/*!**********************************!*\
  !*** ./src/images/SpongeBob.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b56108f111189a4042f7.png";

/***/ }),

/***/ "./src/images/Squidward.png":
/*!**********************************!*\
  !*** ./src/images/Squidward.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "386ae6bcc40e08362106.png";

/***/ }),

/***/ "./src/images/clock.svg":
/*!******************************!*\
  !*** ./src/images/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23d6cb72e4a5e78b2c17.svg";

/***/ }),

/***/ "./src/images/krustykrab.png":
/*!***********************************!*\
  !*** ./src/images/krustykrab.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af5c162b60d46e3edfa4.png";

/***/ }),

/***/ "./src/images/location.svg":
/*!*********************************!*\
  !*** ./src/images/location.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "994928ef06a51d299a5a.svg";

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d11a5673b368c47201f7.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const content = document.getElementById("content");
content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFReUI7QUFDTjtBQUNBOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDekp4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9GeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUTtBQUNBO0FBQ007O0FBRW5DO0FBQ0Esb0JBQW9CLHVEQUFPLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9TcG9uZ2Vib3kudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9QbGF5ZmFpckRpc3BsYXkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMva3J1c3R5a3JhYi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTcG9uZ2Vib3knO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG5cXG4qe1xcbiAgbWFyZ2luOjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLW1vei1mb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJsaWdhXFxcIiBvbjtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XFxufVxcblxcblxcblxcbi5pbnRyb3tcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uaW50cm9fYmFja2dyb3VuZHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDNzO1xcbiAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxufVxcblxcbi5pbnRyb19jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogcmdiKDgsIDgsIDgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uaW50cm9fY29udGVudCBkaXY6Zmlyc3QtY2hpbGR7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgNXJlbSk7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC45MzIpO1xcbn1cXG5cXG4uaW50cm9fY29udGVudCBkaXY6Zmlyc3QtY2hpbGQ6aG92ZXJ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmludHJvX2NvbnRlbnQgZGl2Om50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC45MzIpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTYsIDExNiwgMTE3KTtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG59XFxuXFxuLmhlYWRlciA+IGRpdjpmaXJzdC1vZi10eXBlLCAuZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS43NXZ3LCAycmVtKTtcXG59XFxuXFxuLmFib3V0e1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDh2aDtcXG59XFxuXFxuLmFib3V0IGRpdntcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS43NXZ3LCAycmVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi5hYm91dCBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiKDIyLCA5NywgMjM2KTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMS41dmggMnZ3O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgMnJlbSk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNXZ3O1xcbn1cXG5cXG4uYWJvdXQgYnV0dG9uOmhvdmVye1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCA5NywgMjM2LCAwLjc4OCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWN0e1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogcmdiKDIyLCA5NywgMjM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDMwdmggMDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS40dncsIDJyZW0pO1xcbn1cXG5cXG4uY29udGFjdCBpbWd7XFxuICBoZWlnaHQ6IDcuNXZoO1xcbiAgd2lkdGg6IDcuNXZ3O1xcbiAgb3BhY2l0eTogMC43OTU7XFxufVxcblxcblxcbi5hZGRyZXNzLCAuaG91cnMsIC5jb250YWN0MntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0dmg7XFxufVxcblxcbi5hZGRyZXNzIHAsIC5ob3VycyBwLCAuY29udGFjdDIgcHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLmFkZHJlc3MgcHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlcntcXG4gIGhlaWdodDogMjB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBjb2xvcjogcmdiKDExNiwgMTE2LCAxMTcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5mb290ZXJvcHRpb25zLCAub3B0aW9uc3RvcHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLypGYWRlIGluIGVmZmVjdCovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjc1OyB9XFxufVxcblxcbkAtby1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLyogKioqKioqIE0gRSBOIFUgKioqKioqKioqKiAqL1xcbi5tZW51Q29udGVudHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRmciByZXBlYXQoMTQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgNGZyIDFmcjtcXG4gIHBhZGRpbmc6IDMwdmggMjV2dztcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbi5tZW51VGl0bGV7XFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICBjb2xvcjogcmdiKDIyLCA5NywgMjM2KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogKioqKioqIEMgTyBOIFQgQSBDIFQgKioqKioqKiAqL1xcblxcbi5jb250YWN0U2VjdGlvbntcXG4gIHBhZGRpbmc6IDMwdmggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmlucHV0Q29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWN0Rm9ybXtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCA2cHggIzg4ODg4ODdhO1xcblxcbn1cXG5cXG5cXG5cXG4uY29udGFjdEluZm97XFxuICBjb2xvcjogcmdiKDIyLCA5NywgMjM2KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS40dncsIDJyZW0pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIHB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbi50ZWFtTWVtYmVyc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50ZWFtTWVtYmVyIGltZ3tcXG4gIHdpZHRoOiA4cmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyLCA5NywgMjM2KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3Nc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YUFBYSxFQUFFO0FBQ3hCOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxhQUFhLEVBQUU7QUFDeEI7O0FBRUE7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixPQUFPLGFBQWEsRUFBRTtBQUN4Qjs7QUFFQTtFQUNFLEtBQUssVUFBVSxFQUFFO0VBQ2pCLE9BQU8sYUFBYSxFQUFFO0FBQ3hCOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBLGlDQUFpQzs7QUFFakM7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQ0FBc0M7O0FBRXhDOzs7O0FBSUE7RUFDRSx1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTcG9uZ2Vib3knO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvU3BvbmdlYm95LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvUGxheWZhaXJEaXNwbGF5LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG5cXG4qe1xcbiAgbWFyZ2luOjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLW1vei1mb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJsaWdhXFxcIiBvbjtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XFxufVxcblxcblxcblxcbi5pbnRyb3tcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uaW50cm9fYmFja2dyb3VuZHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMva3J1c3R5a3JhYi5wbmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjc1O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtby1hbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcztcXG59XFxuXFxuLmludHJvX2NvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiByZ2IoOCwgOCwgOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5pbnRyb19jb250ZW50IGRpdjpmaXJzdC1jaGlsZHtcXG4gIGZvbnQtZmFtaWx5OiAnU3BvbmdlYm95JztcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCA1cmVtKTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xcbiAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjkzMik7XFxufVxcblxcbi5pbnRyb19jb250ZW50IGRpdjpmaXJzdC1jaGlsZDpob3ZlcntcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uaW50cm9fY29udGVudCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjkzMik7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDExNiwgMTE2LCAxMTcpO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xcbn1cXG5cXG4uaGVhZGVyID4gZGl2OmZpcnN0LW9mLXR5cGUsIC5mb290ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG4gIGZvbnQtZmFtaWx5OiAnU3BvbmdlYm95JztcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjc1dncsIDJyZW0pO1xcbn1cXG5cXG4uYWJvdXR7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6IHJnYigyMiwgOTcsIDIzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHZoO1xcbn1cXG5cXG4uYWJvdXQgZGl2e1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjc1dncsIDJyZW0pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuXFxuLmFib3V0IGJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMjIsIDk3LCAyMzYpO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAxLjV2aCAydnc7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNXZ3LCAycmVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1dnc7XFxufVxcblxcbi5hYm91dCBidXR0b246aG92ZXJ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDk3LCAyMzYsIDAuNzg4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3R7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMzB2aCAwO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjR2dywgMnJlbSk7XFxufVxcblxcbi5jb250YWN0IGltZ3tcXG4gIGhlaWdodDogNy41dmg7XFxuICB3aWR0aDogNy41dnc7XFxuICBvcGFjaXR5OiAwLjc5NTtcXG59XFxuXFxuXFxuLmFkZHJlc3MsIC5ob3VycywgLmNvbnRhY3Qye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDR2aDtcXG59XFxuXFxuLmFkZHJlc3MgcCwgLmhvdXJzIHAsIC5jb250YWN0MiBwe1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbn1cXG5cXG4uYWRkcmVzcyBwe1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiByZ2IoMTE2LCAxMTYsIDExNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuLmZvb3Rlcm9wdGlvbnMsIC5vcHRpb25zdG9we1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbn1cXG5cXG4vKkZhZGUgaW4gZWZmZWN0Ki9cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjc1OyB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4vKiAqKioqKiogTSBFIE4gVSAqKioqKioqKioqICovXFxuLm1lbnVDb250ZW50e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIHJlcGVhdCgxNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciA0ZnIgMWZyO1xcbiAgcGFkZGluZzogMzB2aCAyNXZ3O1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLm1lbnVUaXRsZXtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BvbmdlYm95JztcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiAqKioqKiogQyBPIE4gVCBBIEMgVCAqKioqKioqICovXFxuXFxuLmNvbnRhY3RTZWN0aW9ue1xcbiAgcGFkZGluZzogMzB2aCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uaW5wdXRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhY3RGb3Jte1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDZweCAjODg4ODg4N2E7XFxuXFxufVxcblxcblxcblxcbi5jb250YWN0SW5mb3tcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjR2dywgMnJlbSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdEluZm8gcHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLnRlYW1NZW1iZXJze1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlYW1NZW1iZXIgaW1ne1xcbiAgd2lkdGg6IDhyZW07XFxuICBoZWlnaHQ6IDhyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBLcmFicyBmcm9tICcuL2ltYWdlcy9LcmFicy5wbmcnO1xuaW1wb3J0IFNwb25nZUJvYiBmcm9tICcuL2ltYWdlcy9TcG9uZ2VCb2IucG5nJztcbmltcG9ydCBTcXVpZHdhcmQgZnJvbSAnLi9pbWFnZXMvU3F1aWR3YXJkLnBuZyc7XG5cbmZ1bmN0aW9uIHBhZ2VfbG9hZCgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgICBjb25zdCB0aXRsZXRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGV0b3AudGV4dENvbnRlbnQgPSAoXCJLcnVzdHkgS3JhYlwiKTtcblxuICAgICAgY29uc3Qgb3B0aW9uc3RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgb3B0aW9uc3RvcC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zdG9wJyk7XG4gICAgICBjb25zdCBob21ldG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBob21ldG9wLnRleHRDb250ZW50ID0gKFwiSG9tZVwiKTtcbiAgICAgIG9wdGlvbnN0b3AuYXBwZW5kQ2hpbGQoaG9tZXRvcCk7XG4gICAgICBjb25zdCBtZW51dG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtZW51dG9wLnRleHRDb250ZW50ID0gKFwiTWVudVwiKTtcbiAgICAgIG9wdGlvbnN0b3AuYXBwZW5kQ2hpbGQobWVudXRvcCk7XG4gICAgICBjb25zdCBjb250YWN0dG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWN0dG9wLnRleHRDb250ZW50ID0gKFwiQ29udGFjdFwiKTtcbiAgICAgIG9wdGlvbnN0b3AuYXBwZW5kQ2hpbGQoY29udGFjdHRvcCk7XG5cbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZXRvcCk7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQob3B0aW9uc3RvcCk7XG5cbiAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNvbnRhY3RGb3JtKCl7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0Rm9ybScpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RGb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnRhY3RGb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1UaXRsZSk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnRhY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RGb3JtQ29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Q29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWxGb3JtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgICAgIG5hbWVMYWJlbEZvcm0udGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgICAgICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lTGFiZWxGb3JtKTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIG5hbWVJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XG4gICAgICAgIG5hbWVJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xuICAgICAgICBuYW1lSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsXCJ0cnVlXCIpO1xuICAgICAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dEZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGVtYWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtYWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Q29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGVtYWlsTGFiZWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZW1haWxMYWJlbEZvcm0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWxcIik7XG4gICAgICAgIGVtYWlsTGFiZWxGb3JtLnRleHRDb250ZW50ID0gXCJFbWFpbFwiO1xuICAgICAgICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbExhYmVsRm9ybSk7XG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZW1haWxJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICAgICAgICBlbWFpbElucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XG4gICAgICAgIGVtYWlsSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWxcIik7XG4gICAgICAgIGVtYWlsSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsXCJ0cnVlXCIpO1xuICAgICAgICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbElucHV0Rm9ybSk7XG5cbiAgICAgICAgY29uc3QgdG9waWNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9waWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdG9waWNMYWJlbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0b3BpY0xhYmVsRm9ybS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b3BpY1wiKTtcbiAgICAgICAgdG9waWNMYWJlbEZvcm0udGV4dENvbnRlbnQgPSBcIlRvcGljXCI7XG4gICAgICAgIHRvcGljQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcGljTGFiZWxGb3JtKTtcbiAgICAgICAgY29uc3QgdG9waWNJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgdG9waWNJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvcGljXCIpO1xuICAgICAgICB0b3BpY0lucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcGljXCIpO1xuICAgICAgICB0b3BpY0lucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLFwidHJ1ZVwiKTtcbiAgICAgICAgdG9waWNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9waWNJbnB1dEZvcm0pO1xuICAgICAgICBjb25zdCB0b3BpY09wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdG9waWNPcHRpb24xLnRleHRDb250ZW50ID0gXCJSZXNlcnZhdGlvblwiO1xuICAgICAgICB0b3BpY09wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJyZXNlcnZhdGlvblwiKTtcbiAgICAgICAgdG9waWNJbnB1dEZvcm0uYXBwZW5kQ2hpbGQodG9waWNPcHRpb24xKTtcbiAgICAgICAgY29uc3QgdG9waWNPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRvcGljT3B0aW9uMi50ZXh0Q29udGVudCA9IFwiUHJpdmF0ZSBFdmVudFwiO1xuICAgICAgICB0b3BpY09wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJwcml2YXRlZXZlbnRcIik7XG4gICAgICAgIHRvcGljSW5wdXRGb3JtLmFwcGVuZENoaWxkKHRvcGljT3B0aW9uMik7XG4gICAgICAgIGNvbnN0IHRvcGljT3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0b3BpY09wdGlvbjMudGV4dENvbnRlbnQgPSBcIkZlZWRiYWNrXCI7XG4gICAgICAgIHRvcGljT3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZlZWRiYWNrXCIpO1xuICAgICAgICB0b3BpY0lucHV0Rm9ybS5hcHBlbmRDaGlsZCh0b3BpY09wdGlvbjMpO1xuICAgICAgICBjb25zdCB0b3BpY09wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdG9waWNPcHRpb240LnRleHRDb250ZW50ID0gXCJPdGhlclwiO1xuICAgICAgICB0b3BpY09wdGlvbjQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJvdGhlclwiKTtcbiAgICAgICAgdG9waWNPcHRpb240LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdG9waWNJbnB1dEZvcm0uYXBwZW5kQ2hpbGQodG9waWNPcHRpb240KTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUxhYmVsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG1lc3NhZ2VMYWJlbEZvcm0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVzc2FnZVwiKTtcbiAgICAgICAgbWVzc2FnZUxhYmVsRm9ybS50ZXh0Q29udGVudCA9IFwiTWVzc2FnZVwiO1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VMYWJlbEZvcm0pO1xuICAgICAgICBjb25zdCBtZXNzYWdlSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgbWVzc2FnZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcbiAgICAgICAgbWVzc2FnZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lc3NhZ2VcIik7XG4gICAgICAgIG1lc3NhZ2VJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIixcInRydWVcIik7XG4gICAgICAgIG1lc3NhZ2VJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwicm93c1wiLFwiNVwiKTtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXRGb3JtKTtcblxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kIGl0XCI7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXG4gICAgICAgIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpO1xuICAgICAgICBjb250YWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbENvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcGljQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBjb250YWN0Rm9ybTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRhY3RJbmZvKCkge1xuICAgICAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdEluZm8nKTtcblxuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwaG9uZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBob25lVGl0bGUudGV4dENvbnRlbnQgPSBcIlBob25lXCI7XG4gICAgICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lVGl0bGUpO1xuICAgICAgICBjb25zdCBwaG9uZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBob25lQ29udGVudC50ZXh0Q29udGVudCA9IFwiNTU1LTU1NS01NTU1XCI7XG4gICAgICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lQ29udGVudCk7XG5cbiAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZW1haWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbWFpbFRpdGxlLnRleHRDb250ZW50ID0gXCJFbWFpbFwiO1xuICAgICAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbFRpdGxlKTtcbiAgICAgICAgY29uc3QgZW1haWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbWFpbENvbnRlbnQudGV4dENvbnRlbnQgPSBcImtydXN0eWtyYWJAYmIuY29tXCI7XG4gICAgICAgIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsQ29udGVudCk7XG5cbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRyZXNzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkcmVzc1RpdGxlLnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCI7XG4gICAgICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc1RpdGxlKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFkZHJlc3NDb250ZW50LnRleHRDb250ZW50ID0gYDgzMSBCb3R0b20gRmVlZGVyIExhbmUgXFxyXFxuIEJpa2luaSBCb3R0b20sIFBhY2lmaWMgT2NlYW5gO1xuICAgICAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NDb250ZW50KTtcblxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuICAgICAgICBjb25zdCBob3Vyc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhvdXJzQ29udGVudC50ZXh0Q29udGVudCA9IGBNb25kYXktVGh1cnNkYXkgXFxyXFxuIDExOjAwIGFtIC0gMDk6MDAgcG0gXFxyXFxuIFxcclxcbiBGcmlkYXktU3VuZGF5IFxcclxcbiAxMDowMCBhbSAtIDExOjAwIHBtYDtcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNDb250ZW50KTtcblxuICAgICAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICAgICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgICAgICByZXR1cm4gY29udGFjdEluZm87XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udGFjdFNlY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTZWN0aW9uJyk7XG5cbiAgICAgICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0oKSk7XG4gICAgICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKCkpO1xuXG4gICAgICAgIHJldHVybiBjb250YWN0U2VjdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdXJUZWFtKCl7XG4gICAgICAgIGNvbnN0IG91clRlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIG91clRlYW0uY2xhc3NMaXN0LmFkZCgnb3VyVGVhbScpO1xuXG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICB0ZWFtTWVtYmVycy5jbGFzc0xpc3QuYWRkKCd0ZWFtTWVtYmVycycpO1xuXG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlYW1NZW1iZXIxLmNsYXNzTGlzdC5hZGQoJ3RlYW1NZW1iZXInKTtcbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcjFpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGVhbU1lbWJlcjFpbWcuc3JjID0gS3JhYnM7XG4gICAgICAgIHRlYW1NZW1iZXIxLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIxaW1nKTtcbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcjFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlYW1NZW1iZXIxTmFtZS50ZXh0Q29udGVudCA9IChcIkV1Z2VuZSBILiBLcmFic1wiKTtcbiAgICAgICAgdGVhbU1lbWJlcjEuYXBwZW5kQ2hpbGQodGVhbU1lbWJlcjFOYW1lKTtcbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcjFQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVhbU1lbWJlcjFQb3NpdGlvbi50ZXh0Q29udGVudCA9IChcIk93bmVyIGFuZCBmb3VuZGVyXCIpO1xuICAgICAgICB0ZWFtTWVtYmVyMS5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyMVBvc2l0aW9uKTtcblxuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZWFtTWVtYmVyMi5jbGFzc0xpc3QuYWRkKCd0ZWFtTWVtYmVyJyk7XG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIyaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRlYW1NZW1iZXIyaW1nLnNyYyA9IFNwb25nZUJvYjtcbiAgICAgICAgdGVhbU1lbWJlcjIuYXBwZW5kQ2hpbGQodGVhbU1lbWJlcjJpbWcpO1xuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyMk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVhbU1lbWJlcjJOYW1lLnRleHRDb250ZW50ID0gKFwiU3BvbmdlQm9iIFNxdWFyZVBhbnRzXCIpO1xuICAgICAgICB0ZWFtTWVtYmVyMi5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyMk5hbWUpO1xuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyMlBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZWFtTWVtYmVyMlBvc2l0aW9uLnRleHRDb250ZW50ID0gKFwiRnJ5IENvb2tcIik7XG4gICAgICAgIHRlYW1NZW1iZXIyLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIyUG9zaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlYW1NZW1iZXIzLmNsYXNzTGlzdC5hZGQoJ3RlYW1NZW1iZXInKTtcbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcjNpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGVhbU1lbWJlcjNpbWcuc3JjID0gU3F1aWR3YXJkO1xuICAgICAgICB0ZWFtTWVtYmVyMy5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyM2ltZyk7XG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZWFtTWVtYmVyM05hbWUudGV4dENvbnRlbnQgPSAoXCJTcXVpZHdhcmQgVGVudGFjbGVzXCIpO1xuICAgICAgICB0ZWFtTWVtYmVyMy5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyM05hbWUpO1xuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyM1Bvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZWFtTWVtYmVyM1Bvc2l0aW9uLnRleHRDb250ZW50ID0gKFwiQ2FzaGllclwiKTtcbiAgICAgICAgdGVhbU1lbWJlcjMuYXBwZW5kQ2hpbGQodGVhbU1lbWJlcjNQb3NpdGlvbik7XG5cbiAgICAgICAgdGVhbU1lbWJlcnMuYXBwZW5kQ2hpbGQodGVhbU1lbWJlcjEpO1xuICAgICAgICB0ZWFtTWVtYmVycy5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyMik7XG4gICAgICAgIHRlYW1NZW1iZXJzLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIzKTtcblxuICAgICAgICByZXR1cm4gdGVhbU1lbWJlcnM7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb290ZXIoKXtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gKFwiS3J1c3R5IEtyYWJcIik7XG4gICAgIFxuICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnZm9vdGVyb3B0aW9ucycpO1xuICAgICAgICBjb25zdCBob21lYm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVib3R0b20udGV4dENvbnRlbnQgPSAoXCJIb21lXCIpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKGhvbWVib3R0b20pO1xuICAgICAgICBjb25zdCBtZW51Ym90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVib3R0b20udGV4dENvbnRlbnQgPSAoXCJNZW51XCIpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKG1lbnVib3R0b20pO1xuICAgICAgICBjb25zdCBjb250YWN0Ym90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3Rib3R0b20udGV4dENvbnRlbnQgPSAoXCJDb250YWN0XCIpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKGNvbnRhY3Rib3R0b20pO1xuICAgICBcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG91clRlYW0oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VfbG9hZDsiLCJpbXBvcnQgbG9jYXRpb25JY29uIGZyb20gJy4vaW1hZ2VzL2xvY2F0aW9uLnN2Zyc7XG5pbXBvcnQgY2xvY2tJY29uIGZyb20gJy4vaW1hZ2VzL2Nsb2NrLnN2Zyc7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gJy4vaW1hZ2VzL3Bob25lLnN2Zyc7XG5cbmZ1bmN0aW9uIHBhZ2VfbG9hZCgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgICBjb25zdCB0aXRsZXRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGV0b3AudGV4dENvbnRlbnQgPSAoXCJLcnVzdHkgS3JhYlwiKTtcblxuICAgICAgY29uc3Qgb3B0aW9uc3RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgb3B0aW9uc3RvcC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zdG9wJyk7XG4gICAgICBjb25zdCBob21ldG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBob21ldG9wLnRleHRDb250ZW50ID0gKFwiSG9tZVwiKTtcbiAgICAgIG9wdGlvbnN0b3AuYXBwZW5kQ2hpbGQoaG9tZXRvcCk7XG4gICAgICBjb25zdCBtZW51dG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtZW51dG9wLnRleHRDb250ZW50ID0gKFwiTWVudVwiKTtcbiAgICAgIG9wdGlvbnN0b3AuYXBwZW5kQ2hpbGQobWVudXRvcCk7XG4gICAgICBjb25zdCBjb250YWN0dG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWN0dG9wLnRleHRDb250ZW50ID0gKFwiQ29udGFjdFwiKTtcbiAgICAgIG9wdGlvbnN0b3AuYXBwZW5kQ2hpbGQoY29udGFjdHRvcCk7XG5cbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZXRvcCk7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQob3B0aW9uc3RvcCk7XG5cbiAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW50cm8oKSB7XG4gICAgICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGludHJvLmNsYXNzTGlzdC5hZGQoJ2ludHJvJyk7XG5cbiAgICAgICAgY29uc3QgaW50cm9fYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnRyb19iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2ludHJvX2JhY2tncm91bmQnKTtcblxuICAgICAgICBjb25zdCBpbnRyb19jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGludHJvX2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW50cm9fY29udGVudCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IChcIkhvbWUgb2YgdGhlIEtyYWJieSBQYXR0eVwiKTtcbiAgICAgICAgaW50cm9fY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGludHJvX2NvbnRlbnQuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gICAgICAgIGludHJvLmFwcGVuZENoaWxkKGludHJvX2JhY2tncm91bmQpO1xuICAgICAgICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb19jb250ZW50KTtcbiAgICAgXG4gICAgICAgIHJldHVybiBpbnRybztcbiAgICAgfVxuICAgICBcbiAgICAgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAoXCJLcnVzdHkgS3JhYlwiKTtcbiAgICAgXG4gICAgICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gKFwiTWVudVwiKTtcbiAgICAgXG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgYWJvdXQuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIGFib3V0O1xuICAgICB9XG4gICAgIFxuICAgICBmdW5jdGlvbiBjb250YWN0KCl7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgICBcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhZGRyZXNzaW1nLnNyYyA9IGxvY2F0aW9uSWNvbjtcbiAgICAgICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzaW1nKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZHJlc3N0aXRsZS50ZXh0Q29udGVudCA9IChcIkFkZHJlc3NcIik7XG4gICAgICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc3RpdGxlKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFkZHJlc3Njb250ZW50LnRleHRDb250ZW50ID0gKGA4MzEgQm90dG9tIEZlZWRlciBMYW5lIFxcclxcbiBCaWtpbmkgQm90dG9tIFxcclxcbiBQYWNpZmljIE9jZWFuYCk7XG4gICAgICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc2NvbnRlbnQpO1xuICAgICBcbiAgICAgICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcbiAgICAgICAgY29uc3QgaG91cnNpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaG91cnNpbWcuc3JjID0gY2xvY2tJY29uO1xuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc2ltZyk7XG4gICAgICAgIGNvbnN0IGhvdXJzdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG91cnN0aXRsZS50ZXh0Q29udGVudCA9IChcIkhvdXJzXCIpO1xuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc3RpdGxlKTtcbiAgICAgICAgY29uc3QgaG91cnNjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBob3Vyc2NvbnRlbnQudGV4dENvbnRlbnQgPSAoYE1vbmRheS1UaHVyc2RheSBcXHJcXG4gMTE6MDAgYW0gLSAwOTowMCBwbSBcXHJcXG4gXFxyXFxuIEZyaWRheS1TdW5kYXkgXFxyXFxuIDEwOjAwIGFtIC0gMTE6MDAgcG1gKTtcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNjb250ZW50KTtcblxuICAgICAgICBjb25zdCBjb250YWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0Mi5jbGFzc0xpc3QuYWRkKCdjb250YWN0MicpO1xuICAgICAgICBjb25zdCBjb250YWN0MmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb250YWN0MmltZy5zcmMgPSBwaG9uZUljb247XG4gICAgICAgIGNvbnRhY3QyLmFwcGVuZENoaWxkKGNvbnRhY3QyaW1nKTtcbiAgICAgICAgY29uc3QgY29udGFjdDJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0MnRpdGxlLnRleHRDb250ZW50ID0gKFwiQ29udGFjdFwiKTtcbiAgICAgICAgY29udGFjdDIuYXBwZW5kQ2hpbGQoY29udGFjdDJ0aXRsZSk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QyY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29udGFjdDJjb250ZW50LnRleHRDb250ZW50ID0gKGBQaG9uZTogNTU1LTU1NS01NTU1IFxcclxcbiBFbWFpbDoga3J1c3R5a3JhYkBiYi5jb21gKTtcbiAgICAgICAgY29udGFjdDIuYXBwZW5kQ2hpbGQoY29udGFjdDJjb250ZW50KTtcblxuICAgICBcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdDIpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhY3Q7XG4gICAgIH1cbiAgICAgXG4gICAgIGZ1bmN0aW9uIGZvb3Rlcigpe1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAoXCJLcnVzdHkgS3JhYlwiKTtcbiAgICAgXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdmb290ZXJvcHRpb25zJyk7XG4gICAgICAgIGNvbnN0IGhvbWVib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZWJvdHRvbS50ZXh0Q29udGVudCA9IChcIkhvbWVcIik7XG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoaG9tZWJvdHRvbSk7XG4gICAgICAgIGNvbnN0IG1lbnVib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudWJvdHRvbS50ZXh0Q29udGVudCA9IChcIk1lbnVcIik7XG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQobWVudWJvdHRvbSk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3Rib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdGJvdHRvbS50ZXh0Q29udGVudCA9IChcIkNvbnRhY3RcIik7XG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoY29udGFjdGJvdHRvbSk7XG4gICAgIFxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgICB9XG5cbiAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvKCkpO1xuICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG4gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xuICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuXG4gICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VfbG9hZDsiLCJmdW5jdGlvbiBwYWdlX2xvYWQoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgICAgY29uc3QgdGl0bGV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpdGxldG9wLnRleHRDb250ZW50ID0gKFwiS3J1c3R5IEtyYWJcIik7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG9wdGlvbnN0b3AuY2xhc3NMaXN0LmFkZCgnb3B0aW9uc3RvcCcpO1xuICAgICAgY29uc3QgaG9tZXRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaG9tZXRvcC50ZXh0Q29udGVudCA9IChcIkhvbWVcIik7XG4gICAgICBvcHRpb25zdG9wLmFwcGVuZENoaWxkKGhvbWV0b3ApO1xuICAgICAgY29uc3QgbWVudXRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWVudXRvcC50ZXh0Q29udGVudCA9IChcIk1lbnVcIik7XG4gICAgICBvcHRpb25zdG9wLmFwcGVuZENoaWxkKG1lbnV0b3ApO1xuICAgICAgY29uc3QgY29udGFjdHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFjdHRvcC50ZXh0Q29udGVudCA9IChcIkNvbnRhY3RcIik7XG4gICAgICBvcHRpb25zdG9wLmFwcGVuZENoaWxkKGNvbnRhY3R0b3ApO1xuXG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGV0b3ApO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG9wdGlvbnN0b3ApO1xuXG4gICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBtZW51Q29udGVudCgpe1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnVDb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAoXCJHYWxsZXkgR3J1YlwiKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgICAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG5cbiAgICAgICAgbGV0IG1lbnVJdGVtUHJpY2U9W1wiS3JhYmJ5IFBhdHR5XCIsXCIxLjI1XCIsXCJLcmFiYnkgTWVhbFwiLFwiMy41MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICAgdy8gc2VhIGNoZWVzZVwiLFwiMS41MFwiLFwiRG91YmxlIEtyYWJieSBNZWFsXCIsXCIzLjc1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEb3VibGUgS3JhYmJ5IFBhdHR5XCIsXCIyLjAwXCIsXCJUcmlwbGUgS3JhYmJ5IE1lYWxcIixcIjQuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgIHcvIHNlYSBjaGVlc2VcIixcIjIuMjVcIixcIlNhbHR5IFNlYSBEb2dcIixcIjEuMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRyaXBsZSBLcmFiYnkgUGF0dHlcIixcIjMuMDBcIixcIkZvb3Rsb25nXCIsXCIyLjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICB3LyBzZWEgY2hlZXNlXCIsXCIzLjI1XCIsXCJTYWlsb3JzIFN1cnByaXNlXCIsXCIzLjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXCIgXCIsXCJHb2xkZW4gTG9hZlwiLFwiMi4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29yYWwgYml0c1wiLFwiIFwiLFwiICAgdy8gc2F1Y2VcIixcIjIuNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgIFNtYWxsXCIsXCIxLjAwXCIsXCIgXCIsXCIgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICBNZWRpdW1cIixcIjEuMjVcIixcIktlbHAgU2hha2VcIixcIjIuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgIExhcmdlXCIsXCIxLjc1XCIsXCJTZWFmb2FtIFNvZGFcIixcIiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIixcIiBcIixcIiAgIFNtYWxsXCIsXCIxLjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJLZWxwIFJpbmdzXCIsXCIxLjUwXCIsXCIgICBNZWRpdW1cIixcIjEuMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgIHNhbHR5IHNhdWNlXCIsXCIwLjUwXCIsXCIgICBMYXJnZVwiLFwiMS41MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgbWVudUl0ZW1QcmljZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9vdGVyKCl7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuICAgICBcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcm9wdGlvbnMnKTtcbiAgICAgICAgY29uc3QgaG9tZWJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lYm90dG9tLnRleHRDb250ZW50ID0gKFwiSG9tZVwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChob21lYm90dG9tKTtcbiAgICAgICAgY29uc3QgbWVudWJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51Ym90dG9tLnRleHRDb250ZW50ID0gKFwiTWVudVwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChtZW51Ym90dG9tKTtcbiAgICAgICAgY29uc3QgY29udGFjdGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0Ym90dG9tLnRleHRDb250ZW50ID0gKFwiQ29udGFjdFwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChjb250YWN0Ym90dG9tKTtcbiAgICAgXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlX2xvYWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==