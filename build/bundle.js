webpackJsonp([0],[
/* 0 */
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Webserver\canvas-game-template\src\main.ts */1);


/***/ }),
/* 1 */
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var game_1 = __webpack_require__(/*! ./lib/game */ 3); //
// console.log(Utils);
// Utils.


window.onload = function (e) {
  var game = new game_1.default({
    container: 'content'
  });
  game.init(); // console.log(window.innerWidth);
  // console.log('asd');
  // utils.resize(e);
};

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Utils =
/** @class */
function () {
  function Utils() {
    console.log('constructing utils ');
  }

  return Utils;
}();

exports.default = Utils;

/***/ }),
/* 3 */
/*!*************************!*\
  !*** ./src/lib/game.ts ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = __webpack_require__(/*! ./utils */ 2);

var render_1 = __webpack_require__(/*! ./render */ 4);

var Game =
/** @class */
function () {
  function Game(params) {
    this.utils = new utils_1.default();
    this.render = new render_1.default(params.container);
  }

  Game.prototype.init = function () {
    console.log('init game');
    this.render.init();
  };

  return Game;
}();

exports.default = Game;

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./src/lib/render.ts ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Render =
/** @class */
function () {
  function Render(container) {
    var _this = this;

    this.render = function () {
      _this.ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);

      _this.ctx.strokeStyle = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";

      _this.ctx.beginPath();

      _this.ctx.moveTo(0, 0);

      _this.ctx.lineTo(_this.canvas.width, _this.canvas.height);

      _this.ctx.moveTo(_this.canvas.width, 0);

      _this.ctx.lineTo(0, _this.canvas.height);

      _this.ctx.closePath();

      _this.ctx.stroke();

      _this.ctx.strokeRect(0, 0, _this.canvas.width, _this.canvas.height);

      requestAnimationFrame(_this.render);
    };

    console.log('constructing render');
    this.containerID = container;
  } // init rendering stuff


  Render.prototype.init = function () {
    var _this = this;

    this.canvas = document.createElement('canvas');
    document.getElementById(this.containerID).appendChild(this.canvas); // add Canvas element to container

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.render();

    window.onresize = function (e) {
      _this.resize(e);
    };
  }; // handle resize event


  Render.prototype.resize = function (e) {
    console.log('resize', e);
  };

  return Render;
}();

exports.default = Render;

/***/ })
],[0]);
//# sourceMappingURL=bundle.js.map