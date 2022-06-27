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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Spongeboy';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: 600;\n  font-style: normal;\n} \n\n@font-face {\n  font-family: 'Playfair';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 400;\n  font-style: normal;\n} \n\n*{\n  margin:0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -moz-font-feature-settings: \"liga\" on;\n  font-family: 'Playfair';\n  letter-spacing: 0.08rem;\n}\n\n\n\n.intro{\n  height: 100vh;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.intro_background{\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 100% 100%;\n  height: 100%;\n  width: 100%;\n  opacity: 0.75;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: fadeIn 3s;\n  -webkit-animation: fadeIn 3s;\n  -moz-animation: fadeIn 3s;\n  -o-animation: fadeIn 3s;\n  -ms-animation: fadeIn 3s;\n}\n\n.intro_content{\n  height: 100%;\n  width: 100%;\n  color: rgb(8, 8, 8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.intro_content div:first-child{\n  font-family: 'Spongeboy';\n  font-size: clamp(2rem, 4vw, 5rem);\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  color:rgba(0, 0, 0, 0.932);\n}\n\n.intro_content div:first-child:hover{\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  opacity: 0.8;\n}\n\n.intro_content div:nth-child(2){\n  color:rgba(0, 0, 0, 0.932);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  font-weight: 600;\n  text-shadow: 2px 2px 2px white;\n}\n\n.header{\n  height: 15vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgb(116, 116, 117);\n  z-index: 3;\n  background-color: rgba(255, 255, 255, 0.466);\n  padding: 0 2rem;\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.header > div:first-of-type, .footer > div:first-of-type{\n  font-family: 'Spongeboy';\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  font-size: clamp(1rem, 1.75vw, 2rem);\n}\n\n.about{\n  height: 50vh;\n  background-color: #f5f5f5;\n  color: rgb(22, 97, 236);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8vh;\n}\n\n.about div{\n  font-size: clamp(1rem, 1.75vw, 2rem);\n  letter-spacing: 0.5vw;\n  font-weight: 550;\n}\n\n.about button {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: 2px solid rgb(22, 97, 236);\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  padding: 1.5vh 2vw;\n  font-size: clamp(1rem, 1.5vw, 2rem);\n  letter-spacing: 0.25vw;\n}\n\n.about button:hover{\n  border: 2px solid white;\n  background-color: rgba(22, 97, 236, 0.788);\n  color: white;\n}\n\n.contact{\n  height: 100vh;\n  background-color: #fff;\n  color: rgb(22, 97, 236);\n  display: flex;\n  justify-content: space-around;\n  padding: 30vh 0;\n  font-size: clamp(1rem, 1.4vw, 2rem);\n}\n\n.contact img{\n  height: 7.5vh;\n  width: 7.5vw;\n  opacity: 0.795;\n}\n\n\n.address, .hours, .contact2{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4vh;\n}\n\n.address p, .hours p, .contact2 p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.address p{\n  text-align: center;\n}\n\n.footer{\n  height: 20vh;\n  background-color: #f5f5f5;\n  color: rgb(116, 116, 117);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n}\n\n.footeroptions, .optionstop{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n/*Fade in effect*/\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-moz-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-webkit-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-o-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-ms-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n/* ****** M E N U ********** */\n.menuContent{\n  display: grid;\n  grid-template-rows: 4fr repeat(14, 1fr);\n  grid-template-columns: 4fr 1fr 4fr 1fr;\n  padding: 30vh 25vw;\n  white-space: pre;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.menuTitle{\n  grid-column: 1 / 5;\n  font-family: 'Spongeboy';\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 2vw, 2rem);\n  text-align: center;\n}\n\n/* ****** C O N T A C T ******* */\n\n.contactSection{\n  padding: 30vh 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.inputContainer{\n  display: flex;\n  flex-direction: column;\n}\n\n.contactForm{\n  box-shadow: 3px 3px 12px 6px #8888887a;\n\n}\n\n.contactInfo{\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 1.4vw, 2rem);\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.contactInfo p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.ourTeam{\n  display: flex;\n  flex-direction: column;\n  padding: 10vh 10vw;\n  gap: 5vh;\n}\n\n.ourTeam p{\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 1.8vw, 4rem);\n}\n\n.teamMembers{\n  display: flex;\n  justify-content: space-between;\n}\n\n.teamMember{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.teamMember p{\n  font-size: clamp(1rem, 1vw, 2rem);\n  color: rgba(0, 0, 0, 0.795);\n  font-style: italic;\n}\n\n.teamMember img{\n  width: clamp(5rem, 12.5vw, 30rem);\n  border-radius: 50%;\n  border: 0.15vw solid rgb(22, 97, 236);\n  padding: 1rem;\n  margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Spongeboy';\n  src: url('./fonts/Spongeboy.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n} \n\n@font-face {\n  font-family: 'Playfair';\n  src: url('./fonts/PlayfairDisplay.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n} \n\n*{\n  margin:0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -moz-font-feature-settings: \"liga\" on;\n  font-family: 'Playfair';\n  letter-spacing: 0.08rem;\n}\n\n\n\n.intro{\n  height: 100vh;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.intro_background{\n  background: url('./images/krustykrab.png');\n  background-size: 100% 100%;\n  height: 100%;\n  width: 100%;\n  opacity: 0.75;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: fadeIn 3s;\n  -webkit-animation: fadeIn 3s;\n  -moz-animation: fadeIn 3s;\n  -o-animation: fadeIn 3s;\n  -ms-animation: fadeIn 3s;\n}\n\n.intro_content{\n  height: 100%;\n  width: 100%;\n  color: rgb(8, 8, 8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.intro_content div:first-child{\n  font-family: 'Spongeboy';\n  font-size: clamp(2rem, 4vw, 5rem);\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  color:rgba(0, 0, 0, 0.932);\n}\n\n.intro_content div:first-child:hover{\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  opacity: 0.8;\n}\n\n.intro_content div:nth-child(2){\n  color:rgba(0, 0, 0, 0.932);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  font-weight: 600;\n  text-shadow: 2px 2px 2px white;\n}\n\n.header{\n  height: 15vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgb(116, 116, 117);\n  z-index: 3;\n  background-color: rgba(255, 255, 255, 0.466);\n  padding: 0 2rem;\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.header > div:first-of-type, .footer > div:first-of-type{\n  font-family: 'Spongeboy';\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  font-size: clamp(1rem, 1.75vw, 2rem);\n}\n\n.about{\n  height: 50vh;\n  background-color: #f5f5f5;\n  color: rgb(22, 97, 236);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8vh;\n}\n\n.about div{\n  font-size: clamp(1rem, 1.75vw, 2rem);\n  letter-spacing: 0.5vw;\n  font-weight: 550;\n}\n\n.about button {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: 2px solid rgb(22, 97, 236);\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  padding: 1.5vh 2vw;\n  font-size: clamp(1rem, 1.5vw, 2rem);\n  letter-spacing: 0.25vw;\n}\n\n.about button:hover{\n  border: 2px solid white;\n  background-color: rgba(22, 97, 236, 0.788);\n  color: white;\n}\n\n.contact{\n  height: 100vh;\n  background-color: #fff;\n  color: rgb(22, 97, 236);\n  display: flex;\n  justify-content: space-around;\n  padding: 30vh 0;\n  font-size: clamp(1rem, 1.4vw, 2rem);\n}\n\n.contact img{\n  height: 7.5vh;\n  width: 7.5vw;\n  opacity: 0.795;\n}\n\n\n.address, .hours, .contact2{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4vh;\n}\n\n.address p, .hours p, .contact2 p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.address p{\n  text-align: center;\n}\n\n.footer{\n  height: 20vh;\n  background-color: #f5f5f5;\n  color: rgb(116, 116, 117);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n}\n\n.footeroptions, .optionstop{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n/*Fade in effect*/\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-moz-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-webkit-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-o-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 0.75; }\n}\n\n@-ms-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n/* ****** M E N U ********** */\n.menuContent{\n  display: grid;\n  grid-template-rows: 4fr repeat(14, 1fr);\n  grid-template-columns: 4fr 1fr 4fr 1fr;\n  padding: 30vh 25vw;\n  white-space: pre;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.menuTitle{\n  grid-column: 1 / 5;\n  font-family: 'Spongeboy';\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 2vw, 2rem);\n  text-align: center;\n}\n\n/* ****** C O N T A C T ******* */\n\n.contactSection{\n  padding: 30vh 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.inputContainer{\n  display: flex;\n  flex-direction: column;\n}\n\n.contactForm{\n  box-shadow: 3px 3px 12px 6px #8888887a;\n\n}\n\n.contactInfo{\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 1.4vw, 2rem);\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.contactInfo p{\n  white-space: pre-line;\n  color: rgba(0, 0, 0, 0.795);\n  font-size: clamp(1rem, 1.25vw, 2rem);\n}\n\n.ourTeam{\n  display: flex;\n  flex-direction: column;\n  padding: 10vh 10vw;\n  gap: 5vh;\n}\n\n.ourTeam p{\n  color: rgb(22, 97, 236);\n  font-size: clamp(1rem, 1.8vw, 4rem);\n}\n\n.teamMembers{\n  display: flex;\n  justify-content: space-between;\n}\n\n.teamMember{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: clamp(1rem, 1.25vw, 2rem);\n  color: rgba(0, 0, 0, 0.795);\n}\n\n.teamMember p{\n  font-size: clamp(1rem, 1vw, 2rem);\n  color: rgba(0, 0, 0, 0.795);\n  font-style: italic;\n}\n\n.teamMember img{\n  width: clamp(5rem, 12.5vw, 30rem);\n  border-radius: 50%;\n  border: 0.15vw solid rgb(22, 97, 236);\n  padding: 1rem;\n  margin-bottom: 1rem;\n}"],"sourceRoot":""}]);
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

        const ourTeamTitle = document.createElement('p');
        ourTeamTitle.textContent = "Our Team";
        ourTeam.appendChild(ourTeamTitle);

        const teamMembers = document.createElement('section');
        teamMembers.classList.add('teamMembers');

        const teamMember1 = document.createElement('div');
        teamMember1.classList.add('teamMember');
        const teamMember1img = document.createElement('img');
        teamMember1img.src = _images_Krabs_png__WEBPACK_IMPORTED_MODULE_0__;
        teamMember1.appendChild(teamMember1img);
        const teamMember1Name = document.createElement('div');
        teamMember1Name.textContent = ("Eugene Harold Krabs");
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

        ourTeam.appendChild(teamMembers);

        return ourTeam;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ1E7QUFDQTs7QUFFL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhDQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrREFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFJ5QjtBQUNOO0FBQ0E7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUN6SnhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0Z4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNRO0FBQ0E7QUFDTTs7QUFFbkM7QUFDQSxvQkFBb0IsdURBQU8sSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1Nwb25nZWJveS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9rcnVzdHlrcmFiLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpcic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcblxcbip7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAtbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcImxpZ2FcXFwiIG9uO1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpcic7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wOHJlbTtcXG59XFxuXFxuXFxuXFxuLmludHJve1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5pbnRyb19iYWNrZ3JvdW5ke1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjc1O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtby1hbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcztcXG59XFxuXFxuLmludHJvX2NvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiByZ2IoOCwgOCwgOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5pbnRyb19jb250ZW50IGRpdjpmaXJzdC1jaGlsZHtcXG4gIGZvbnQtZmFtaWx5OiAnU3BvbmdlYm95JztcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCA1cmVtKTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xcbiAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjkzMik7XFxufVxcblxcbi5pbnRyb19jb250ZW50IGRpdjpmaXJzdC1jaGlsZDpob3ZlcntcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uaW50cm9fY29udGVudCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjkzMik7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDExNiwgMTE2LCAxMTcpO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xcbn1cXG5cXG4uaGVhZGVyID4gZGl2OmZpcnN0LW9mLXR5cGUsIC5mb290ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG4gIGZvbnQtZmFtaWx5OiAnU3BvbmdlYm95JztcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjc1dncsIDJyZW0pO1xcbn1cXG5cXG4uYWJvdXR7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6IHJnYigyMiwgOTcsIDIzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHZoO1xcbn1cXG5cXG4uYWJvdXQgZGl2e1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjc1dncsIDJyZW0pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuXFxuLmFib3V0IGJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMjIsIDk3LCAyMzYpO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAxLjV2aCAydnc7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNXZ3LCAycmVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1dnc7XFxufVxcblxcbi5hYm91dCBidXR0b246aG92ZXJ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDk3LCAyMzYsIDAuNzg4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3R7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMzB2aCAwO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjR2dywgMnJlbSk7XFxufVxcblxcbi5jb250YWN0IGltZ3tcXG4gIGhlaWdodDogNy41dmg7XFxuICB3aWR0aDogNy41dnc7XFxuICBvcGFjaXR5OiAwLjc5NTtcXG59XFxuXFxuXFxuLmFkZHJlc3MsIC5ob3VycywgLmNvbnRhY3Qye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDR2aDtcXG59XFxuXFxuLmFkZHJlc3MgcCwgLmhvdXJzIHAsIC5jb250YWN0MiBwe1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbn1cXG5cXG4uYWRkcmVzcyBwe1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiByZ2IoMTE2LCAxMTYsIDExNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuLmZvb3Rlcm9wdGlvbnMsIC5vcHRpb25zdG9we1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbn1cXG5cXG4vKkZhZGUgaW4gZWZmZWN0Ki9cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjc1OyB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4vKiAqKioqKiogTSBFIE4gVSAqKioqKioqKioqICovXFxuLm1lbnVDb250ZW50e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIHJlcGVhdCgxNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciA0ZnIgMWZyO1xcbiAgcGFkZGluZzogMzB2aCAyNXZ3O1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLm1lbnVUaXRsZXtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BvbmdlYm95JztcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiAqKioqKiogQyBPIE4gVCBBIEMgVCAqKioqKioqICovXFxuXFxuLmNvbnRhY3RTZWN0aW9ue1xcbiAgcGFkZGluZzogMzB2aCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uaW5wdXRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhY3RGb3Jte1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDZweCAjODg4ODg4N2E7XFxuXFxufVxcblxcbi5jb250YWN0SW5mb3tcXG4gIGNvbG9yOiByZ2IoMjIsIDk3LCAyMzYpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjR2dywgMnJlbSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdEluZm8gcHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuLm91clRlYW17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwdmggMTB2dztcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4ub3VyVGVhbSBwe1xcbiAgY29sb3I6IHJnYigyMiwgOTcsIDIzNik7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuOHZ3LCA0cmVtKTtcXG59XFxuXFxuLnRlYW1NZW1iZXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRlYW1NZW1iZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XFxufVxcblxcbi50ZWFtTWVtYmVyIHB7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50ZWFtTWVtYmVyIGltZ3tcXG4gIHdpZHRoOiBjbGFtcCg1cmVtLCAxMi41dncsIDMwcmVtKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMC4xNXZ3IHNvbGlkIHJnYigyMiwgOTcsIDIzNik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwrREFBb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwrREFBMEQ7RUFDMUQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1EQUEwQztFQUMxQywwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxpRUFBaUU7RUFDakUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VB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QUNwQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1Nwb25nZWJveSc7XFxuICBzcmM6IHVybCgnLi9mb250cy9TcG9uZ2Vib3kudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpcic7XFxuICBzcmM6IHVybCgnLi9mb250cy9QbGF5ZmFpckRpc3BsYXkudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcblxcbip7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAtbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcImxpZ2FcXFwiIG9uO1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpcic7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wOHJlbTtcXG59XFxuXFxuXFxuXFxuLmludHJve1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5pbnRyb19iYWNrZ3JvdW5ke1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9rcnVzdHlrcmFiLnBuZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuNzU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDNzO1xcbiAgLW1vei1hbmltYXRpb246IGZhZGVJbiAzcztcXG4gIC1vLWFuaW1hdGlvbjogZmFkZUluIDNzO1xcbiAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDNzO1xcbn1cXG5cXG4uaW50cm9fY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHJnYig4LCA4LCA4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmludHJvX2NvbnRlbnQgZGl2OmZpcnN0LWNoaWxke1xcbiAgZm9udC1mYW1pbHk6ICdTcG9uZ2Vib3knO1xcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDVyZW0pO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XFxuICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuOTMyKTtcXG59XFxuXFxuLmludHJvX2NvbnRlbnQgZGl2OmZpcnN0LWNoaWxkOmhvdmVye1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5pbnRyb19jb250ZW50IGRpdjpudGgtY2hpbGQoMil7XFxuICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuOTMyKTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggd2hpdGU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTE2LCAxMTYsIDExNyk7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ2Nik7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XFxufVxcblxcbi5oZWFkZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSwgLmZvb3RlciA+IGRpdjpmaXJzdC1vZi10eXBle1xcbiAgZm9udC1mYW1pbHk6ICdTcG9uZ2Vib3knO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNzV2dywgMnJlbSk7XFxufVxcblxcbi5hYm91dHtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBjb2xvcjogcmdiKDIyLCA5NywgMjM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4dmg7XFxufVxcblxcbi5hYm91dCBkaXZ7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNzV2dywgMnJlbSk7XFxuICBsZXR0ZXItc3BhY2luZzogMC41dnc7XFxuICBmb250LXdlaWdodDogNTUwO1xcbn1cXG5cXG4uYWJvdXQgYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMiwgOTcsIDIzNik7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDEuNXZoIDJ2dztcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDJyZW0pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjV2dztcXG59XFxuXFxuLmFib3V0IGJ1dHRvbjpob3ZlcntcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgOTcsIDIzNiwgMC43ODgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6IHJnYigyMiwgOTcsIDIzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAzMHZoIDA7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNHZ3LCAycmVtKTtcXG59XFxuXFxuLmNvbnRhY3QgaW1ne1xcbiAgaGVpZ2h0OiA3LjV2aDtcXG4gIHdpZHRoOiA3LjV2dztcXG4gIG9wYWNpdHk6IDAuNzk1O1xcbn1cXG5cXG5cXG4uYWRkcmVzcywgLmhvdXJzLCAuY29udGFjdDJ7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHZoO1xcbn1cXG5cXG4uYWRkcmVzcyBwLCAuaG91cnMgcCwgLmNvbnRhY3QyIHB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbi5hZGRyZXNzIHB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXJ7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6IHJnYigxMTYsIDExNiwgMTE3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4uZm9vdGVyb3B0aW9ucywgLm9wdGlvbnN0b3B7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbi8qRmFkZSBpbiBlZmZlY3QqL1xcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDAuNzU7IH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjc1OyB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMC43NTsgfVxcbn1cXG5cXG5ALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjc1OyB9XFxufVxcblxcbkAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi8qICoqKioqKiBNIEUgTiBVICoqKioqKioqKiogKi9cXG4ubWVudUNvbnRlbnR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgcmVwZWF0KDE0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDRmciAxZnI7XFxuICBwYWRkaW5nOiAzMHZoIDI1dnc7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbn1cXG5cXG4ubWVudVRpdGxle1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgZm9udC1mYW1pbHk6ICdTcG9uZ2Vib3knO1xcbiAgY29sb3I6IHJnYigyMiwgOTcsIDIzNik7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qICoqKioqKiBDIE8gTiBUIEEgQyBUICoqKioqKiogKi9cXG5cXG4uY29udGFjdFNlY3Rpb257XFxuICBwYWRkaW5nOiAzMHZoIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5pbnB1dENvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFjdEZvcm17XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggNnB4ICM4ODg4ODg3YTtcXG5cXG59XFxuXFxuLmNvbnRhY3RJbmZve1xcbiAgY29sb3I6IHJnYigyMiwgOTcsIDIzNik7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNHZ3LCAycmVtKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0SW5mbyBwe1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xcbn1cXG5cXG4ub3VyVGVhbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTB2aCAxMHZ3O1xcbiAgZ2FwOiA1dmg7XFxufVxcblxcbi5vdXJUZWFtIHB7XFxuICBjb2xvcjogcmdiKDIyLCA5NywgMjM2KTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS44dncsIDRyZW0pO1xcbn1cXG5cXG4udGVhbU1lbWJlcnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGVhbU1lbWJlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG59XFxuXFxuLnRlYW1NZW1iZXIgcHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRlYW1NZW1iZXIgaW1ne1xcbiAgd2lkdGg6IGNsYW1wKDVyZW0sIDEyLjV2dywgMzByZW0pO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAwLjE1dncgc29saWQgcmdiKDIyLCA5NywgMjM2KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEtyYWJzIGZyb20gJy4vaW1hZ2VzL0tyYWJzLnBuZyc7XG5pbXBvcnQgU3BvbmdlQm9iIGZyb20gJy4vaW1hZ2VzL1Nwb25nZUJvYi5wbmcnO1xuaW1wb3J0IFNxdWlkd2FyZCBmcm9tICcuL2ltYWdlcy9TcXVpZHdhcmQucG5nJztcblxuZnVuY3Rpb24gcGFnZV9sb2FkKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAgIGNvbnN0IHRpdGxldG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aXRsZXRvcC50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuXG4gICAgICBjb25zdCBvcHRpb25zdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBvcHRpb25zdG9wLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnN0b3AnKTtcbiAgICAgIGNvbnN0IGhvbWV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhvbWV0b3AudGV4dENvbnRlbnQgPSAoXCJIb21lXCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChob21ldG9wKTtcbiAgICAgIGNvbnN0IG1lbnV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1lbnV0b3AudGV4dENvbnRlbnQgPSAoXCJNZW51XCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChtZW51dG9wKTtcbiAgICAgIGNvbnN0IGNvbnRhY3R0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhY3R0b3AudGV4dENvbnRlbnQgPSAoXCJDb250YWN0XCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChjb250YWN0dG9wKTtcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxldG9wKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChvcHRpb25zdG9wKTtcblxuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY29udGFjdEZvcm0oKXtcbiAgICAgICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RGb3JtJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdEZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29udGFjdEZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChjb250YWN0Rm9ybVRpdGxlKTtcblxuICAgICAgICBjb25zdCBjb250YWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29udGFjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdEZvcm1Db250YWluZXInKTtcblxuICAgICAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5hbWVMYWJlbEZvcm0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICAgICAgbmFtZUxhYmVsRm9ybS50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgICAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVMYWJlbEZvcm0pO1xuICAgICAgICBjb25zdCBuYW1lSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgbmFtZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgICAgICAgbmFtZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XG4gICAgICAgIG5hbWVJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIixcInRydWVcIik7XG4gICAgICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0Rm9ybSk7XG5cbiAgICAgICAgY29uc3QgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW1haWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgZW1haWxMYWJlbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBlbWFpbExhYmVsRm9ybS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZW1haWxMYWJlbEZvcm0udGV4dENvbnRlbnQgPSBcIkVtYWlsXCI7XG4gICAgICAgIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsTGFiZWxGb3JtKTtcbiAgICAgICAgY29uc3QgZW1haWxJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlbWFpbElucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gICAgICAgIGVtYWlsSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZW1haWxJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZW1haWxJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIixcInRydWVcIik7XG4gICAgICAgIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsSW5wdXRGb3JtKTtcblxuICAgICAgICBjb25zdCB0b3BpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b3BpY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0b3BpY0xhYmVsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRvcGljTGFiZWxGb3JtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvcGljXCIpO1xuICAgICAgICB0b3BpY0xhYmVsRm9ybS50ZXh0Q29udGVudCA9IFwiVG9waWNcIjtcbiAgICAgICAgdG9waWNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9waWNMYWJlbEZvcm0pO1xuICAgICAgICBjb25zdCB0b3BpY0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICB0b3BpY0lucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9waWNcIik7XG4gICAgICAgIHRvcGljSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9waWNcIik7XG4gICAgICAgIHRvcGljSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsXCJ0cnVlXCIpO1xuICAgICAgICB0b3BpY0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BpY0lucHV0Rm9ybSk7XG4gICAgICAgIGNvbnN0IHRvcGljT3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0b3BpY09wdGlvbjEudGV4dENvbnRlbnQgPSBcIlJlc2VydmF0aW9uXCI7XG4gICAgICAgIHRvcGljT3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInJlc2VydmF0aW9uXCIpO1xuICAgICAgICB0b3BpY0lucHV0Rm9ybS5hcHBlbmRDaGlsZCh0b3BpY09wdGlvbjEpO1xuICAgICAgICBjb25zdCB0b3BpY09wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdG9waWNPcHRpb24yLnRleHRDb250ZW50ID0gXCJQcml2YXRlIEV2ZW50XCI7XG4gICAgICAgIHRvcGljT3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInByaXZhdGVldmVudFwiKTtcbiAgICAgICAgdG9waWNJbnB1dEZvcm0uYXBwZW5kQ2hpbGQodG9waWNPcHRpb24yKTtcbiAgICAgICAgY29uc3QgdG9waWNPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRvcGljT3B0aW9uMy50ZXh0Q29udGVudCA9IFwiRmVlZGJhY2tcIjtcbiAgICAgICAgdG9waWNPcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZmVlZGJhY2tcIik7XG4gICAgICAgIHRvcGljSW5wdXRGb3JtLmFwcGVuZENoaWxkKHRvcGljT3B0aW9uMyk7XG4gICAgICAgIGNvbnN0IHRvcGljT3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0b3BpY09wdGlvbjQudGV4dENvbnRlbnQgPSBcIk90aGVyXCI7XG4gICAgICAgIHRvcGljT3B0aW9uNC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm90aGVyXCIpO1xuICAgICAgICB0b3BpY09wdGlvbjQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0b3BpY0lucHV0Rm9ybS5hcHBlbmRDaGlsZCh0b3BpY09wdGlvbjQpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBtZXNzYWdlTGFiZWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbWVzc2FnZUxhYmVsRm9ybS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZXNzYWdlXCIpO1xuICAgICAgICBtZXNzYWdlTGFiZWxGb3JtLnRleHRDb250ZW50ID0gXCJNZXNzYWdlXCI7XG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsRm9ybSk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBtZXNzYWdlSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtZXNzYWdlXCIpO1xuICAgICAgICBtZXNzYWdlSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVzc2FnZVwiKTtcbiAgICAgICAgbWVzc2FnZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLFwidHJ1ZVwiKTtcbiAgICAgICAgbWVzc2FnZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsXCI1XCIpO1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dEZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNlbmQgaXRcIjtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cbiAgICAgICAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9waWNDb250YWluZXIpO1xuICAgICAgICBjb250YWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChjb250YWN0Rm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhY3RGb3JtO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udGFjdEluZm8oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpO1xuXG4gICAgICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBob25lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGhvbmVUaXRsZS50ZXh0Q29udGVudCA9IFwiUGhvbmVcIjtcbiAgICAgICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVUaXRsZSk7XG4gICAgICAgIGNvbnN0IHBob25lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGhvbmVDb250ZW50LnRleHRDb250ZW50ID0gXCI1NTUtNTU1LTU1NTVcIjtcbiAgICAgICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVDb250ZW50KTtcblxuICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBlbWFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtYWlsVGl0bGUudGV4dENvbnRlbnQgPSBcIkVtYWlsXCI7XG4gICAgICAgIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsVGl0bGUpO1xuICAgICAgICBjb25zdCBlbWFpbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVtYWlsQ29udGVudC50ZXh0Q29udGVudCA9IFwia3J1c3R5a3JhYkBiYi5jb21cIjtcbiAgICAgICAgZW1haWwuYXBwZW5kQ2hpbGQoZW1haWxDb250ZW50KTtcblxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRyZXNzVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZHJlc3NcIjtcbiAgICAgICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzVGl0bGUpO1xuICAgICAgICBjb25zdCBhZGRyZXNzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWRkcmVzc0NvbnRlbnQudGV4dENvbnRlbnQgPSBgODMxIEJvdHRvbSBGZWVkZXIgTGFuZSBcXHJcXG4gQmlraW5pIEJvdHRvbSwgUGFjaWZpYyBPY2VhbmA7XG4gICAgICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUaXRsZSk7XG4gICAgICAgIGNvbnN0IGhvdXJzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG91cnNDb250ZW50LnRleHRDb250ZW50ID0gYE1vbmRheS1UaHVyc2RheSBcXHJcXG4gMTE6MDAgYW0gLSAwOTowMCBwbSBcXHJcXG4gXFxyXFxuIEZyaWRheS1TdW5kYXkgXFxyXFxuIDEwOjAwIGFtIC0gMTE6MDAgcG1gO1xuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0NvbnRlbnQpO1xuXG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICAgICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgICAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICAgICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgICAgIHJldHVybiBjb250YWN0SW5mbztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250YWN0U2VjdGlvbigpe1xuICAgICAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdFNlY3Rpb24nKTtcblxuICAgICAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSgpKTtcbiAgICAgICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEluZm8oKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG91clRlYW0oKXtcbiAgICAgICAgY29uc3Qgb3VyVGVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgb3VyVGVhbS5jbGFzc0xpc3QuYWRkKCdvdXJUZWFtJyk7XG5cbiAgICAgICAgY29uc3Qgb3VyVGVhbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvdXJUZWFtVGl0bGUudGV4dENvbnRlbnQgPSBcIk91ciBUZWFtXCI7XG4gICAgICAgIG91clRlYW0uYXBwZW5kQ2hpbGQob3VyVGVhbVRpdGxlKTtcblxuICAgICAgICBjb25zdCB0ZWFtTWVtYmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgdGVhbU1lbWJlcnMuY2xhc3NMaXN0LmFkZCgndGVhbU1lbWJlcnMnKTtcblxuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZWFtTWVtYmVyMS5jbGFzc0xpc3QuYWRkKCd0ZWFtTWVtYmVyJyk7XG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIxaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRlYW1NZW1iZXIxaW1nLnNyYyA9IEtyYWJzO1xuICAgICAgICB0ZWFtTWVtYmVyMS5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyMWltZyk7XG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZWFtTWVtYmVyMU5hbWUudGV4dENvbnRlbnQgPSAoXCJFdWdlbmUgSGFyb2xkIEtyYWJzXCIpO1xuICAgICAgICB0ZWFtTWVtYmVyMS5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyMU5hbWUpO1xuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyMVBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZWFtTWVtYmVyMVBvc2l0aW9uLnRleHRDb250ZW50ID0gKFwiT3duZXIgYW5kIGZvdW5kZXJcIik7XG4gICAgICAgIHRlYW1NZW1iZXIxLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIxUG9zaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlYW1NZW1iZXIyLmNsYXNzTGlzdC5hZGQoJ3RlYW1NZW1iZXInKTtcbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcjJpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGVhbU1lbWJlcjJpbWcuc3JjID0gU3BvbmdlQm9iO1xuICAgICAgICB0ZWFtTWVtYmVyMi5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyMmltZyk7XG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZWFtTWVtYmVyMk5hbWUudGV4dENvbnRlbnQgPSAoXCJTcG9uZ2VCb2IgU3F1YXJlUGFudHNcIik7XG4gICAgICAgIHRlYW1NZW1iZXIyLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIyTmFtZSk7XG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIyUG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlYW1NZW1iZXIyUG9zaXRpb24udGV4dENvbnRlbnQgPSAoXCJGcnkgQ29va1wiKTtcbiAgICAgICAgdGVhbU1lbWJlcjIuYXBwZW5kQ2hpbGQodGVhbU1lbWJlcjJQb3NpdGlvbik7XG5cbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVhbU1lbWJlcjMuY2xhc3NMaXN0LmFkZCgndGVhbU1lbWJlcicpO1xuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyM2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0ZWFtTWVtYmVyM2ltZy5zcmMgPSBTcXVpZHdhcmQ7XG4gICAgICAgIHRlYW1NZW1iZXIzLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIzaW1nKTtcbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcjNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlYW1NZW1iZXIzTmFtZS50ZXh0Q29udGVudCA9IChcIlNxdWlkd2FyZCBUZW50YWNsZXNcIik7XG4gICAgICAgIHRlYW1NZW1iZXIzLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIzTmFtZSk7XG4gICAgICAgIGNvbnN0IHRlYW1NZW1iZXIzUG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlYW1NZW1iZXIzUG9zaXRpb24udGV4dENvbnRlbnQgPSAoXCJDYXNoaWVyXCIpO1xuICAgICAgICB0ZWFtTWVtYmVyMy5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyM1Bvc2l0aW9uKTtcblxuICAgICAgICB0ZWFtTWVtYmVycy5hcHBlbmRDaGlsZCh0ZWFtTWVtYmVyMSk7XG4gICAgICAgIHRlYW1NZW1iZXJzLmFwcGVuZENoaWxkKHRlYW1NZW1iZXIyKTtcbiAgICAgICAgdGVhbU1lbWJlcnMuYXBwZW5kQ2hpbGQodGVhbU1lbWJlcjMpO1xuXG4gICAgICAgIG91clRlYW0uYXBwZW5kQ2hpbGQodGVhbU1lbWJlcnMpO1xuXG4gICAgICAgIHJldHVybiBvdXJUZWFtO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9vdGVyKCl7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuICAgICBcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcm9wdGlvbnMnKTtcbiAgICAgICAgY29uc3QgaG9tZWJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lYm90dG9tLnRleHRDb250ZW50ID0gKFwiSG9tZVwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChob21lYm90dG9tKTtcbiAgICAgICAgY29uc3QgbWVudWJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51Ym90dG9tLnRleHRDb250ZW50ID0gKFwiTWVudVwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChtZW51Ym90dG9tKTtcbiAgICAgICAgY29uc3QgY29udGFjdGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0Ym90dG9tLnRleHRDb250ZW50ID0gKFwiQ29udGFjdFwiKTtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChjb250YWN0Ym90dG9tKTtcbiAgICAgXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXJUZWFtKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlX2xvYWQ7IiwiaW1wb3J0IGxvY2F0aW9uSWNvbiBmcm9tICcuL2ltYWdlcy9sb2NhdGlvbi5zdmcnO1xuaW1wb3J0IGNsb2NrSWNvbiBmcm9tICcuL2ltYWdlcy9jbG9jay5zdmcnO1xuaW1wb3J0IHBob25lSWNvbiBmcm9tICcuL2ltYWdlcy9waG9uZS5zdmcnO1xuXG5mdW5jdGlvbiBwYWdlX2xvYWQoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgICAgY29uc3QgdGl0bGV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpdGxldG9wLnRleHRDb250ZW50ID0gKFwiS3J1c3R5IEtyYWJcIik7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG9wdGlvbnN0b3AuY2xhc3NMaXN0LmFkZCgnb3B0aW9uc3RvcCcpO1xuICAgICAgY29uc3QgaG9tZXRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaG9tZXRvcC50ZXh0Q29udGVudCA9IChcIkhvbWVcIik7XG4gICAgICBvcHRpb25zdG9wLmFwcGVuZENoaWxkKGhvbWV0b3ApO1xuICAgICAgY29uc3QgbWVudXRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWVudXRvcC50ZXh0Q29udGVudCA9IChcIk1lbnVcIik7XG4gICAgICBvcHRpb25zdG9wLmFwcGVuZENoaWxkKG1lbnV0b3ApO1xuICAgICAgY29uc3QgY29udGFjdHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFjdHRvcC50ZXh0Q29udGVudCA9IChcIkNvbnRhY3RcIik7XG4gICAgICBvcHRpb25zdG9wLmFwcGVuZENoaWxkKGNvbnRhY3R0b3ApO1xuXG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGV0b3ApO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG9wdGlvbnN0b3ApO1xuXG4gICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludHJvKCkge1xuICAgICAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnRyby5jbGFzc0xpc3QuYWRkKCdpbnRybycpO1xuXG4gICAgICAgIGNvbnN0IGludHJvX2JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50cm9fYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdpbnRyb19iYWNrZ3JvdW5kJyk7XG5cbiAgICAgICAgY29uc3QgaW50cm9fY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnRyb19jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ludHJvX2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAoXCJLcnVzdHkgS3JhYlwiKTtcbiAgICAgICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSAoXCJIb21lIG9mIHRoZSBLcmFiYnkgUGF0dHlcIik7XG4gICAgICAgIGludHJvX2NvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBpbnRyb19jb250ZW50LmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICAgICAgICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb19iYWNrZ3JvdW5kKTtcbiAgICAgICAgaW50cm8uYXBwZW5kQ2hpbGQoaW50cm9fY29udGVudCk7XG4gICAgIFxuICAgICAgICByZXR1cm4gaW50cm87XG4gICAgIH1cbiAgICAgXG4gICAgIGZ1bmN0aW9uIGFib3V0KCkge1xuICAgICAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gKFwiS3J1c3R5IEtyYWJcIik7XG4gICAgIFxuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IChcIk1lbnVcIik7XG4gICAgIFxuICAgICAgICBhYm91dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBhYm91dDtcbiAgICAgfVxuICAgICBcbiAgICAgZnVuY3Rpb24gY29udGFjdCgpe1xuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICAgXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYWRkcmVzc2ltZy5zcmMgPSBsb2NhdGlvbkljb247XG4gICAgICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc2ltZyk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3N0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRyZXNzdGl0bGUudGV4dENvbnRlbnQgPSAoXCJBZGRyZXNzXCIpO1xuICAgICAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3N0aXRsZSk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3Njb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRyZXNzY29udGVudC50ZXh0Q29udGVudCA9IChgODMxIEJvdHRvbSBGZWVkZXIgTGFuZSBcXHJcXG4gQmlraW5pIEJvdHRvbSBcXHJcXG4gUGFjaWZpYyBPY2VhbmApO1xuICAgICAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3Njb250ZW50KTtcbiAgICAgXG4gICAgICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgICAgIGNvbnN0IGhvdXJzaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGhvdXJzaW1nLnNyYyA9IGNsb2NrSWNvbjtcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNpbWcpO1xuICAgICAgICBjb25zdCBob3Vyc3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvdXJzdGl0bGUudGV4dENvbnRlbnQgPSAoXCJIb3Vyc1wiKTtcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnN0aXRsZSk7XG4gICAgICAgIGNvbnN0IGhvdXJzY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG91cnNjb250ZW50LnRleHRDb250ZW50ID0gKGBNb25kYXktVGh1cnNkYXkgXFxyXFxuIDExOjAwIGFtIC0gMDk6MDAgcG0gXFxyXFxuIFxcclxcbiBGcmlkYXktU3VuZGF5IFxcclxcbiAxMDowMCBhbSAtIDExOjAwIHBtYCk7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzY29udGVudCk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdDIuY2xhc3NMaXN0LmFkZCgnY29udGFjdDInKTtcbiAgICAgICAgY29uc3QgY29udGFjdDJpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29udGFjdDJpbWcuc3JjID0gcGhvbmVJY29uO1xuICAgICAgICBjb250YWN0Mi5hcHBlbmRDaGlsZChjb250YWN0MmltZyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QydGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdDJ0aXRsZS50ZXh0Q29udGVudCA9IChcIkNvbnRhY3RcIik7XG4gICAgICAgIGNvbnRhY3QyLmFwcGVuZENoaWxkKGNvbnRhY3QydGl0bGUpO1xuICAgICAgICBjb25zdCBjb250YWN0MmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnRhY3QyY29udGVudC50ZXh0Q29udGVudCA9IChgUGhvbmU6IDU1NS01NTUtNTU1NSBcXHJcXG4gRW1haWw6IGtydXN0eWtyYWJAYmIuY29tYCk7XG4gICAgICAgIGNvbnRhY3QyLmFwcGVuZENoaWxkKGNvbnRhY3QyY29udGVudCk7XG5cbiAgICAgXG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgICAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3QyKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBjb250YWN0O1xuICAgICB9XG4gICAgIFxuICAgICBmdW5jdGlvbiBmb290ZXIoKXtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gKFwiS3J1c3R5IEtyYWJcIik7XG4gICAgIFxuICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnZm9vdGVyb3B0aW9ucycpO1xuICAgICAgICBjb25zdCBob21lYm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVib3R0b20udGV4dENvbnRlbnQgPSAoXCJIb21lXCIpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKGhvbWVib3R0b20pO1xuICAgICAgICBjb25zdCBtZW51Ym90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVib3R0b20udGV4dENvbnRlbnQgPSAoXCJNZW51XCIpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKG1lbnVib3R0b20pO1xuICAgICAgICBjb25zdCBjb250YWN0Ym90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3Rib3R0b20udGV4dENvbnRlbnQgPSAoXCJDb250YWN0XCIpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKGNvbnRhY3Rib3R0b20pO1xuICAgICBcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICAgfVxuXG4gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRybygpKTtcbiAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KCkpO1xuICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlX2xvYWQ7IiwiZnVuY3Rpb24gcGFnZV9sb2FkKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAgIGNvbnN0IHRpdGxldG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aXRsZXRvcC50ZXh0Q29udGVudCA9IChcIktydXN0eSBLcmFiXCIpO1xuXG4gICAgICBjb25zdCBvcHRpb25zdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBvcHRpb25zdG9wLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnN0b3AnKTtcbiAgICAgIGNvbnN0IGhvbWV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhvbWV0b3AudGV4dENvbnRlbnQgPSAoXCJIb21lXCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChob21ldG9wKTtcbiAgICAgIGNvbnN0IG1lbnV0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1lbnV0b3AudGV4dENvbnRlbnQgPSAoXCJNZW51XCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChtZW51dG9wKTtcbiAgICAgIGNvbnN0IGNvbnRhY3R0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhY3R0b3AudGV4dENvbnRlbnQgPSAoXCJDb250YWN0XCIpO1xuICAgICAgb3B0aW9uc3RvcC5hcHBlbmRDaGlsZChjb250YWN0dG9wKTtcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxldG9wKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChvcHRpb25zdG9wKTtcblxuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbWVudUNvbnRlbnQoKXtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGVudCcpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gKFwiR2FsbGV5IEdydWJcIik7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICAgICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuXG4gICAgICAgIGxldCBtZW51SXRlbVByaWNlPVtcIktyYWJieSBQYXR0eVwiLFwiMS4yNVwiLFwiS3JhYmJ5IE1lYWxcIixcIjMuNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgIHcvIHNlYSBjaGVlc2VcIixcIjEuNTBcIixcIkRvdWJsZSBLcmFiYnkgTWVhbFwiLFwiMy43NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRG91YmxlIEtyYWJieSBQYXR0eVwiLFwiMi4wMFwiLFwiVHJpcGxlIEtyYWJieSBNZWFsXCIsXCI0LjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICB3LyBzZWEgY2hlZXNlXCIsXCIyLjI1XCIsXCJTYWx0eSBTZWEgRG9nXCIsXCIxLjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUcmlwbGUgS3JhYmJ5IFBhdHR5XCIsXCIzLjAwXCIsXCJGb290bG9uZ1wiLFwiMi4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICAgdy8gc2VhIGNoZWVzZVwiLFwiMy4yNVwiLFwiU2FpbG9ycyBTdXJwcmlzZVwiLFwiMy4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiLFwiIFwiLFwiR29sZGVuIExvYWZcIixcIjIuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvcmFsIGJpdHNcIixcIiBcIixcIiAgIHcvIHNhdWNlXCIsXCIyLjUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICBTbWFsbFwiLFwiMS4wMFwiLFwiIFwiLFwiIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICAgTWVkaXVtXCIsXCIxLjI1XCIsXCJLZWxwIFNoYWtlXCIsXCIyLjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICBMYXJnZVwiLFwiMS43NVwiLFwiU2VhZm9hbSBTb2RhXCIsXCIgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXCIgXCIsXCIgICBTbWFsbFwiLFwiMS4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiS2VscCBSaW5nc1wiLFwiMS41MFwiLFwiICAgTWVkaXVtXCIsXCIxLjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICBzYWx0eSBzYXVjZVwiLFwiMC41MFwiLFwiICAgTGFyZ2VcIixcIjEuNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgIG1lbnVJdGVtUHJpY2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50O1xuICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtZW51O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvb3Rlcigpe1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAoXCJLcnVzdHkgS3JhYlwiKTtcbiAgICAgXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdmb290ZXJvcHRpb25zJyk7XG4gICAgICAgIGNvbnN0IGhvbWVib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZWJvdHRvbS50ZXh0Q29udGVudCA9IChcIkhvbWVcIik7XG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoaG9tZWJvdHRvbSk7XG4gICAgICAgIGNvbnN0IG1lbnVib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudWJvdHRvbS50ZXh0Q29udGVudCA9IChcIk1lbnVcIik7XG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQobWVudWJvdHRvbSk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3Rib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdGJvdHRvbS50ZXh0Q29udGVudCA9IChcIkNvbnRhY3RcIik7XG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoY29udGFjdGJvdHRvbSk7XG4gICAgIFxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGVudCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZV9sb2FkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=