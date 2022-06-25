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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Spongeboy';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: 600;\n  font-style: normal;\n} \n\n@font-face {\n  font-family: 'Playfair';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 400;\n  font-style: normal;\n} \n\n*{\n  margin:0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -moz-font-feature-settings: \"liga\" on;\n  font-family: 'Playfair';\n  letter-spacing: 0.08rem;\n}\n\n\n\n.intro{\n  height: 100vh;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.intro_background{\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 100% 100%;\n  height: 100%;\n  width: 100%;\n  opacity: 0.75;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: fadeIn 3s;\n  -webkit-animation: fadeIn 3s;\n  -moz-animation: fadeIn 3s;\n  -o-animation: fadeIn 3s;\n  -ms-animation: fadeIn 3s;\n}\n\n.intro_content{\n  height: 100%;\n  width: 100%;\n  color: rgb(8, 8, 8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.intro_content div:first-child{\n  font-family: 'Spongeboy';\n  font-size: clamp(2rem, 4vw, 5rem);\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  color:rgba(0, 0, 0, 0.932);\n}\n\n.intro_content div:first-child:hover{\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  opacity: 0.8;\n}\n\n.intro_content div:nth-child(2){\n  color:rgba(0, 0, 0, 0.932);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  font-weight: 600;\n  text-shadow: 2px 2px 2px white;\n}\n\n.header{\n  height: 15vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgb(116, 116, 117);\n  z-index: 3;\n  background-color: rgba(255, 255, 255, 0.466);\n  padding: 0 2rem;\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.header > div:first-of-type, .footer > div:first-of-type{\n  font-family: 'Spongeboy';\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  font-size: clamp(1rem, 1.75vw, 2rem);\n}\n\n.about{\n  height: 50vh;\n  background-color: #f5f5f5;\n  color: rgb(22, 97, 236);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8vh;\n}\n\n.about div{\n  font-size: clamp(1rem, 1.75vw, 2rem);\n  letter-spacing: 0.5vw;\n  font-weight: 550;\n}\n\n.about button {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: 2px solid rgb(22, 97, 236);\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  padding: 1.5vh 2vw;\n  font-size: clamp(1rem, 1.5vw, 2rem);\n  letter-spacing: 0.25vw;\n}\n\n.about button:hover{\n  border: 2px solid white;\n  background-color: rgba(22, 97, 236, 0.788);\n  color: white;\n}\n\n.contact{\n  height: 100vh;\n  background-color: #fff;\n  color: rgb(22, 97, 236);\n  display: flex;\n  justify-content: space-around;\n  padding: 30vh 0;\n  font-size: clamp(1rem, 1.4vw, 2rem);\n}\n\n.contact img{\n  height: 7.5vh;\n  width: 7.5vw;\n  opacity: 0.795;\n}\n\n\n.address, .hours, .contact2{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4vh;\n}\n\n.address p, .hours p, .contact2 p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.address p{\n  text-align: center;\n}\n\n.footer{\n  height: 20vh;\n  background-color: #f5f5f5;\n  color: rgb(116, 116, 117);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n}\n\n.footeroptions, .optionstop{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n/*Fade in effect*/\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-moz-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-webkit-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-o-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-ms-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,+DAAoD;EACpD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,+DAA0D;EAC1D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,QAAQ;EACR,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,kCAAkC;EAClC,kCAAkC;EAClC,qCAAqC;EACrC,uBAAuB;EACvB,uBAAuB;AACzB;;;;AAIA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;;AAEA;EACE,mDAA0C;EAC1C,0BAA0B;EAC1B,YAAY;EACZ,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,oBAAoB;EACpB,4BAA4B;EAC5B,yBAAyB;EACzB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;AACA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,iEAAiE;EACjE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,iEAAiE;EACjE,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,oCAAoC;EACpC,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2CAA2C;EAC3C,UAAU;EACV,4CAA4C;EAC5C,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,iEAAiE;EACjE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,oCAAoC;EACpC,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,kCAAkC;CAClC,aAAa;CACb,eAAe;CACf,gBAAgB;EACf,kBAAkB;EAClB,mCAAmC;EACnC,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,0CAA0C;EAC1C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;AAChB;;;AAGA;EACE,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,oCAAoC;AACtC;;AAEA,iBAAiB;AACjB;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,aAAa,EAAE;AACxB;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,aAAa,EAAE;AACxB;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,aAAa,EAAE;AACxB;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,aAAa,EAAE;AACxB;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,UAAU,EAAE;AACrB","sourcesContent":["@font-face {\n  font-family: 'Spongeboy';\n  src: url('./fonts/Spongeboy.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n} \n\n@font-face {\n  font-family: 'Playfair';\n  src: url('./fonts/PlayfairDisplay.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n} \n\n*{\n  margin:0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -moz-font-feature-settings: \"liga\" on;\n  font-family: 'Playfair';\n  letter-spacing: 0.08rem;\n}\n\n\n\n.intro{\n  height: 100vh;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.intro_background{\n  background: url('./images/krustykrab.png');\n  background-size: 100% 100%;\n  height: 100%;\n  width: 100%;\n  opacity: 0.75;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: fadeIn 3s;\n  -webkit-animation: fadeIn 3s;\n  -moz-animation: fadeIn 3s;\n  -o-animation: fadeIn 3s;\n  -ms-animation: fadeIn 3s;\n}\n\n.intro_content{\n  height: 100%;\n  width: 100%;\n  color: rgb(8, 8, 8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.intro_content div:first-child{\n  font-family: 'Spongeboy';\n  font-size: clamp(2rem, 4vw, 5rem);\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  color:rgba(0, 0, 0, 0.932);\n}\n\n.intro_content div:first-child:hover{\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  opacity: 0.8;\n}\n\n.intro_content div:nth-child(2){\n  color:rgba(0, 0, 0, 0.932);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  font-weight: 600;\n  text-shadow: 2px 2px 2px white;\n}\n\n.header{\n  height: 15vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgb(116, 116, 117);\n  z-index: 3;\n  background-color: rgba(255, 255, 255, 0.466);\n  padding: 0 2rem;\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.header > div:first-of-type, .footer > div:first-of-type{\n  font-family: 'Spongeboy';\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  font-size: clamp(1rem, 1.75vw, 2rem);\n}\n\n.about{\n  height: 50vh;\n  background-color: #f5f5f5;\n  color: rgb(22, 97, 236);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8vh;\n}\n\n.about div{\n  font-size: clamp(1rem, 1.75vw, 2rem);\n  letter-spacing: 0.5vw;\n  font-weight: 550;\n}\n\n.about button {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: 2px solid rgb(22, 97, 236);\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  padding: 1.5vh 2vw;\n  font-size: clamp(1rem, 1.5vw, 2rem);\n  letter-spacing: 0.25vw;\n}\n\n.about button:hover{\n  border: 2px solid white;\n  background-color: rgba(22, 97, 236, 0.788);\n  color: white;\n}\n\n.contact{\n  height: 100vh;\n  background-color: #fff;\n  color: rgb(22, 97, 236);\n  display: flex;\n  justify-content: space-around;\n  padding: 30vh 0;\n  font-size: clamp(1rem, 1.4vw, 2rem);\n}\n\n.contact img{\n  height: 7.5vh;\n  width: 7.5vw;\n  opacity: 0.795;\n}\n\n\n.address, .hours, .contact2{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4vh;\n}\n\n.address p, .hours p, .contact2 p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.address p{\n  text-align: center;\n}\n\n.footer{\n  height: 20vh;\n  background-color: #f5f5f5;\n  color: rgb(116, 116, 117);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n}\n\n.footeroptions, .optionstop{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n/*Fade in effect*/\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-moz-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-webkit-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-o-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-ms-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}"],"sourceRoot":""}]);
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



const content = document.getElementById("content");
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUTs7QUFFN0I7QUFDQSxvQkFBb0Isb0RBQUksSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9TcG9uZ2Vib3kudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9QbGF5ZmFpckRpc3BsYXkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMva3J1c3R5a3JhYi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTcG9uZ2Vib3knO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG5cXG4qe1xcbiAgbWFyZ2luOjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLW1vei1mb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJsaWdhXFxcIiBvbjtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XFxufVxcblxcblxcblxcbi5pbnRyb3tcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uaW50cm9fYmFja2dyb3VuZHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDNzO1xcbiAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxufVxcblxcbi5pbnRyb19jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogcmdiKDgsIDgsIDgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uaW50cm9fY29udGVudCBkaXY6Zmlyc3QtY2hpbGR7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgNXJlbSk7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC45MzIpO1xcbn1cXG5cXG4uaW50cm9fY29udGVudCBkaXY6Zmlyc3QtY2hpbGQ6aG92ZXJ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmludHJvX2NvbnRlbnQgZGl2Om50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC45MzIpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTYsIDExNiwgMTE3KTtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG59XFxuXFxuLmhlYWRlciA+IGRpdjpmaXJzdC1vZi10eXBlLCAuZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS43NXZ3LCAycmVtKTtcXG59XFxuXFxuLmFib3V0e1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDh2aDtcXG59XFxuXFxuLmFib3V0IGRpdntcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS43NXZ3LCAycmVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi5hYm91dCBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiKDIyLCA5NywgMjM2KTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMS41dmggMnZ3O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgMnJlbSk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNXZ3O1xcbn1cXG5cXG4uYWJvdXQgYnV0dG9uOmhvdmVye1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCA5NywgMjM2LCAwLjc4OCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWN0e1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogcmdiKDIyLCA5NywgMjM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDMwdmggMDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS40dncsIDJyZW0pO1xcbn1cXG5cXG4uY29udGFjdCBpbWd7XFxuICBoZWlnaHQ6IDcuNXZoO1xcbiAgd2lkdGg6IDcuNXZ3O1xcbiAgb3BhY2l0eTogMC43OTU7XFxufVxcblxcblxcbi5hZGRyZXNzLCAuaG91cnMsIC5jb250YWN0MntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0dmg7XFxufVxcblxcbi5hZGRyZXNzIHAsIC5ob3VycyBwLCAuY29udGFjdDIgcHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLmFkZHJlc3MgcHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlcntcXG4gIGhlaWdodDogMjB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBjb2xvcjogcmdiKDExNiwgMTE2LCAxMTcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5mb290ZXJvcHRpb25zLCAub3B0aW9uc3RvcHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLypGYWRlIGluIGVmZmVjdCovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjc1OyB9XFxufVxcblxcbkAtby1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwrREFBb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwrREFBMEQ7RUFDMUQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1EQUEwQztFQUMxQywwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxpRUFBaUU7RUFDakUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxVQUFVO0VBQ1YsNENBQTRDO0VBQzVDLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUVBQWlFO0VBQ2pFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Qsa0NBQWtDO0NBQ2xDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxhQUFhLEVBQUU7QUFDeEI7O0FBRUE7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixPQUFPLGFBQWEsRUFBRTtBQUN4Qjs7QUFFQTtFQUNFLEtBQUssVUFBVSxFQUFFO0VBQ2pCLE9BQU8sYUFBYSxFQUFFO0FBQ3hCOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxhQUFhLEVBQUU7QUFDeEI7O0FBRUE7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixPQUFPLFVBQVUsRUFBRTtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU3BvbmdlYm95JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1Nwb25nZWJveS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn0gXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn0gXFxuXFxuKntcXG4gIG1hcmdpbjowO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC1tb3otZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcXFwibGlnYVxcXCIgb247XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyJztcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4cmVtO1xcbn1cXG5cXG5cXG5cXG4uaW50cm97XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLmludHJvX2JhY2tncm91bmR7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL2tydXN0eWtyYWIucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDNzO1xcbiAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxufVxcblxcbi5pbnRyb19jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogcmdiKDgsIDgsIDgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uaW50cm9fY29udGVudCBkaXY6Zmlyc3QtY2hpbGR7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgNXJlbSk7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC45MzIpO1xcbn1cXG5cXG4uaW50cm9fY29udGVudCBkaXY6Zmlyc3QtY2hpbGQ6aG92ZXJ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmludHJvX2NvbnRlbnQgZGl2Om50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC45MzIpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTYsIDExNiwgMTE3KTtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG59XFxuXFxuLmhlYWRlciA+IGRpdjpmaXJzdC1vZi10eXBlLCAuZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS43NXZ3LCAycmVtKTtcXG59XFxuXFxuLmFib3V0e1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDh2aDtcXG59XFxuXFxuLmFib3V0IGRpdntcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS43NXZ3LCAycmVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi5hYm91dCBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiKDIyLCA5NywgMjM2KTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMS41dmggMnZ3O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgMnJlbSk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNXZ3O1xcbn1cXG5cXG4uYWJvdXQgYnV0dG9uOmhvdmVye1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCA5NywgMjM2LCAwLjc4OCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWN0e1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogcmdiKDIyLCA5NywgMjM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDMwdmggMDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS40dncsIDJyZW0pO1xcbn1cXG5cXG4uY29udGFjdCBpbWd7XFxuICBoZWlnaHQ6IDcuNXZoO1xcbiAgd2lkdGg6IDcuNXZ3O1xcbiAgb3BhY2l0eTogMC43OTU7XFxufVxcblxcblxcbi5hZGRyZXNzLCAuaG91cnMsIC5jb250YWN0MntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0dmg7XFxufVxcblxcbi5hZGRyZXNzIHAsIC5ob3VycyBwLCAuY29udGFjdDIgcHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLmFkZHJlc3MgcHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlcntcXG4gIGhlaWdodDogMjB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBjb2xvcjogcmdiKDExNiwgMTE2LCAxMTcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5mb290ZXJvcHRpb25zLCAub3B0aW9uc3RvcHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLypGYWRlIGluIGVmZmVjdCovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjc1OyB9XFxufVxcblxcbkAtby1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2NhdGlvbkljb24gZnJvbSAnLi9pbWFnZXMvbG9jYXRpb24uc3ZnJztcbmltcG9ydCBjbG9ja0ljb24gZnJvbSAnLi9pbWFnZXMvY2xvY2suc3ZnJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9pbWFnZXMvcGhvbmUuc3ZnJztcblxuZnVuY3Rpb24gcGFnZV9sb2FkKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAgIGNvbnN0IHRpdGxldG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aXRsZXRvcC50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuXG4gICAgICBjb25zdCBvcHRpb25zdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBvcHRpb25zdG9wLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnN0b3AnKTtcbiAgICAgIGNvbnN0IGhvbWV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhvbWV0b3AudGV4dENvbnRlbnQgPSAoXCJIb21lXCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChob21ldG9wKTtcbiAgICAgIGNvbnN0IG1lbnV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1lbnV0b3AudGV4dENvbnRlbnQgPSAoXCJNZW51XCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChtZW51dG9wKTtcbiAgICAgIGNvbnN0IGNvbnRhY3R0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhY3R0b3AudGV4dENvbnRlbnQgPSAoXCJDb250YWN0XCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChjb250YWN0dG9wKTtcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxldG9wKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChvcHRpb25zdG9wKTtcblxuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnRybygpIHtcbiAgICAgICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZCgnaW50cm8nKTtcblxuICAgICAgICBjb25zdCBpbnRyb19iYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGludHJvX2JhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaW50cm9fYmFja2dyb3VuZCcpO1xuXG4gICAgICAgIGNvbnN0IGludHJvX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50cm9fY29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnRyb19jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gKFwiS3J1c3R5IEtyYWJcIik7XG4gICAgICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gKFwiSG9tZSBvZiB0aGUgS3JhYmJ5IFBhdHR5XCIpO1xuICAgICAgICBpbnRyb19jb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaW50cm9fY29udGVudC5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgICAgICAgaW50cm8uYXBwZW5kQ2hpbGQoaW50cm9fYmFja2dyb3VuZCk7XG4gICAgICAgIGludHJvLmFwcGVuZENoaWxkKGludHJvX2NvbnRlbnQpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIGludHJvO1xuICAgICB9XG4gICAgIFxuICAgICBmdW5jdGlvbiBhYm91dCgpIHtcbiAgICAgICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuICAgICBcbiAgICAgICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSAoXCJNZW51XCIpO1xuICAgICBcbiAgICAgICAgYWJvdXQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBhYm91dC5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gICAgIFxuICAgICAgICByZXR1cm4gYWJvdXQ7XG4gICAgIH1cbiAgICAgXG4gICAgIGZ1bmN0aW9uIGNvbnRhY3QoKXtcbiAgICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgIFxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICAgICAgICBjb25zdCBhZGRyZXNzaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFkZHJlc3NpbWcuc3JjID0gbG9jYXRpb25JY29uO1xuICAgICAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NpbWcpO1xuICAgICAgICBjb25zdCBhZGRyZXNzdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkcmVzc3RpdGxlLnRleHRDb250ZW50ID0gKFwiQWRkcmVzc1wiKTtcbiAgICAgICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzdGl0bGUpO1xuICAgICAgICBjb25zdCBhZGRyZXNzY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWRkcmVzc2NvbnRlbnQudGV4dENvbnRlbnQgPSAoYDgzMSBCb3R0b20gRmVlZGVyIExhbmUgXFxyXFxuIEJpa2luaSBCb3R0b20gXFxyXFxuIFBhY2lmaWMgT2NlYW5gKTtcbiAgICAgICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzY29udGVudCk7XG4gICAgIFxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgICAgICBjb25zdCBob3Vyc2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBob3Vyc2ltZy5zcmMgPSBjbG9ja0ljb247XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzaW1nKTtcbiAgICAgICAgY29uc3QgaG91cnN0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob3Vyc3RpdGxlLnRleHRDb250ZW50ID0gKFwiSG91cnNcIik7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzdGl0bGUpO1xuICAgICAgICBjb25zdCBob3Vyc2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhvdXJzY29udGVudC50ZXh0Q29udGVudCA9IChgTW9uZGF5LVRodXJzZGF5IFxcclxcbiAxMTowMCBhbSAtIDA5OjAwIHBtIFxcclxcbiBcXHJcXG4gRnJpZGF5LVN1bmRheSBcXHJcXG4gMTA6MDAgYW0gLSAxMTowMCBwbWApO1xuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc2NvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3QyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QyJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QyaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnRhY3QyaW1nLnNyYyA9IHBob25lSWNvbjtcbiAgICAgICAgY29udGFjdDIuYXBwZW5kQ2hpbGQoY29udGFjdDJpbWcpO1xuICAgICAgICBjb25zdCBjb250YWN0MnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3QydGl0bGUudGV4dENvbnRlbnQgPSAoXCJDb250YWN0XCIpO1xuICAgICAgICBjb250YWN0Mi5hcHBlbmRDaGlsZChjb250YWN0MnRpdGxlKTtcbiAgICAgICAgY29uc3QgY29udGFjdDJjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb250YWN0MmNvbnRlbnQudGV4dENvbnRlbnQgPSAoYFBob25lOiA1NTUtNTU1LTU1NTUgXFxyXFxuIEVtYWlsOiBrcnVzdHlrcmFiQGJiLmNvbWApO1xuICAgICAgICBjb250YWN0Mi5hcHBlbmRDaGlsZChjb250YWN0MmNvbnRlbnQpO1xuXG4gICAgIFxuICAgICAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBjb250YWN0LmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Mik7XG4gICAgIFxuICAgICAgICByZXR1cm4gY29udGFjdDtcbiAgICAgfVxuICAgICBcbiAgICAgZnVuY3Rpb24gZm9vdGVyKCl7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuICAgICBcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcm9wdGlvbnMnKTtcbiAgICAgICAgY29uc3QgaG9tZWJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lYm90dG9tLnRleHRDb250ZW50ID0gKFwiSG9tZVwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChob21lYm90dG9tKTtcbiAgICAgICAgY29uc3QgbWVudWJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51Ym90dG9tLnRleHRDb250ZW50ID0gKFwiTWVudVwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChtZW51Ym90dG9tKTtcbiAgICAgICAgY29uc3QgY29udGFjdGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0Ym90dG9tLnRleHRDb250ZW50ID0gKFwiQ29udGFjdFwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChjb250YWN0Ym90dG9tKTtcbiAgICAgXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgIH1cblxuICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm8oKSk7XG4gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCgpKTtcbiAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG4gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZV9sb2FkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9