/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/end-of-game.mp3":
/*!************************************!*\
  !*** ./src/assets/end-of-game.mp3 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2fd02232b10907ecd763be4060f47292.mp3";

/***/ }),

/***/ "./src/assets/hit.mp3":
/*!****************************!*\
  !*** ./src/assets/hit.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c57f0316a295265790a11aab8261b04f.mp3";

/***/ }),

/***/ "./src/js/ball.js":
/*!************************!*\
  !*** ./src/js/ball.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Objects

var Ball =
/*#__PURE__*/
function () {
  function Ball(x, y, dx, dy, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.color = color;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw(c) {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
      c.closePath();
    }
  }, {
    key: "reset",
    value: function reset(game) {
      game.reset();
    }
  }, {
    key: "incressSpeed",
    value: function incressSpeed() {// if(this.dx >=  Math.abs(7)){
      //     this.dx = 7;
      // }else{
      //     this.dx += 0.5;
      // }
      // if(this.dy >= Math.abs(7)){
      //     this.dy = 7;
      // }else{
      //     this.dy += 0.5;
      // }
    }
  }, {
    key: "update",
    value: function update(game) {
      if (this.y + this.radius + this.dy > game.canvas.height || this.y - this.radius <= 0) {
        this.dy = -this.dy;
      } // left paddle


      if (this.x - this.radius <= 0) {
        game.playerTwo.addScore();
        return this.reset(game);
      } // right paddle


      if (this.x + this.radius + this.dx > game.canvas.width) {
        game.playerOne.addScore();
        return this.reset(game);
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_0___default.a.circleRectCollision(this.x, this.y, this.radius, game.rightPaddle.x, game.rightPaddle.y, game.rightPaddle.width + Math.abs(this.dx), game.rightPaddle.height)) {
        game.playHit();
        this.dx = -this.dx;
        this.incressSpeed();
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_0___default.a.circleRectCollision(this.x, this.y, this.radius, game.leftPaddle.x, game.leftPaddle.y, game.leftPaddle.width + Math.abs(this.dx), game.leftPaddle.height)) {
        game.playHit();
        this.dx = -this.dx;
        this.incressSpeed();
      }

      this.y += this.dy;
      this.x += this.dx;
      this.draw(game.c);
    }
  }]);

  return Ball;
}();

/* harmony default export */ __webpack_exports__["default"] = (Ball);

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ "./src/js/ball.js");
/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paddle */ "./src/js/paddle.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _assets_hit_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/hit.mp3 */ "./src/assets/hit.mp3");
/* harmony import */ var _assets_hit_mp3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_hit_mp3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_end_of_game_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/end-of-game.mp3 */ "./src/assets/end-of-game.mp3");
/* harmony import */ var _assets_end_of_game_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_end_of_game_mp3__WEBPACK_IMPORTED_MODULE_5__);






var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FF7F66', '#ff8364', '#ffb677'];
var backgrounds = ['#ffffff', '#000000', '#261a67', '#e8ebf5', '#E3EAEF', '#21232f'];
var backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomColor(backgrounds)); // Implementation

var Game = {
  hook: document.querySelector('.game'),
  ball: undefined,
  c: c,
  canvas: canvas,
  leftPaddle: undefined,
  rightPaddle: undefined,
  playerOne: undefined,
  playerTwo: undefined,
  direction: true,
  computer: false
}; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight; // Game.init();
});
document.querySelector('.js-player-one').addEventListener('click', function (e) {
  Game.computer = true;
  Game.init();
  Game.animate();
  Game.hook.classList.remove('is-active');
  canvas.classList.add('is-active');
});
document.querySelector('.js-player-two').addEventListener('click', function (e) {
  Game.init(false);
  Game.animate();
  Game.hook.classList.remove('is-active');
  canvas.classList.add('is-active');
});
addEventListener('keydown', function (event) {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  switch (event.keyCode) {
    case 87:
      // left up
      Game.leftPaddle.up = true;
      break;

    case 83:
      // left down
      Game.leftPaddle.down = true;
      break;

    case 38:
      // upP
      Game.rightPaddle.up = true;
      break;

    case 40:
      // down
      Game.rightPaddle.down = true;
      break;

    default:
      return;
    // exit this handler for other keys
  } // do something

});
addEventListener('keyup', function (event) {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  switch (event.keyCode) {
    case 87:
      // left up
      Game.leftPaddle.up = false;
      break;

    case 83:
      // left down
      Game.leftPaddle.down = false;
      break;

    case 38:
      // up
      Game.rightPaddle.up = false;
      break;

    case 40:
      // down
      Game.rightPaddle.down = false;
      break;

    default:
      return;
    // exit this handler for other keys
  } // do something

});

Game.playHit = function () {
  var audio = new Audio(_assets_hit_mp3__WEBPACK_IMPORTED_MODULE_4___default.a);
  audio.play();
};

Game.reset = function () {
  var audio = new Audio(_assets_end_of_game_mp3__WEBPACK_IMPORTED_MODULE_5___default.a);
  audio.play();
  var dx = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(4.5, 6.5);
  var direction = Game.direction ? -dx : dx;
  Game.direction = Game.direction ? false : true;
  var bConf = {
    radius: 10,
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: direction,
    dy: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(4, 6.5),
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomColor(colors)
  };
  Game.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](bConf.x, bConf.y, bConf.dx, bConf.dy, bConf.radius, bConf.color);
};

Game.init = function () {
  var bConf = {
    radius: 10,
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(4.5, 6.5),
    dy: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(4, 6.5),
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomColor(colors)
  };
  Game.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](bConf.x, bConf.y, bConf.dx, bConf.dy, bConf.radius, bConf.color);
  Game.leftPaddle = new _paddle__WEBPACK_IMPORTED_MODULE_2__["default"](10, canvas.height / 2, 20, 40, 8, _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomColor(colors));
  Game.rightPaddle = new _paddle__WEBPACK_IMPORTED_MODULE_2__["default"](canvas.width - 30, canvas.height / 2, 20, 40, 8, _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomColor(colors));
  Game.playerOne = new _player__WEBPACK_IMPORTED_MODULE_3__["default"]('Computer', 0, 10, 50);
  Game.playerOne.computer = Game.computer;
  Game.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_3__["default"]('Frank', 0, canvas.width - 100, 50);
}; // Animation Loop


Game.animate = function () {
  requestAnimationFrame(Game.animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);
  Game.ball.update(Game);
  Game.leftPaddle.update(Game);
  Game.rightPaddle.update(Game);
  Game.playerOne.update(Game);
  Game.playerTwo.update(Game);
};

/***/ }),

/***/ "./src/js/paddle.js":
/*!**************************!*\
  !*** ./src/js/paddle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Objects
var Paddle =
/*#__PURE__*/
function () {
  function Paddle(x, y, width, height, dy, color) {
    _classCallCheck(this, Paddle);

    this.x = x;
    this.y = y;
    this.dy = dy;
    this.width = width;
    this.height = height;
    this.color = color;
    this.up = false;
    this.down = false;
    this.border = 10;
  }

  _createClass(Paddle, [{
    key: "draw",
    value: function draw(c) {
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
      c.closePath();
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (!this.up) return;

      if (this.y - this.dy - this.border <= 0) {
        return this.y = 0 + this.border;
      }

      this.y += -this.dy;
    }
  }, {
    key: "moveDown",
    value: function moveDown(game) {
      if (!this.down) return;

      if (this.y + (this.height + this.dy + this.border) >= game.canvas.height) {
        return this.y = game.canvas.height - this.height - this.border;
      }

      this.y += this.dy;
    }
  }, {
    key: "update",
    value: function update(game) {
      this.moveUp(game);
      this.moveDown(game);
      this.draw(game.c);
    }
  }]);

  return Paddle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Paddle);

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(name, score, x, y) {
    _classCallCheck(this, Player);

    this.name = name;
    this.score = score;
    this.x = x;
    this.y = y;
    this.computer = false;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(c) {
      c.font = '18px Arial';
      c.fillText(this.name + ': ' + this.score, this.x, this.y);
    }
  }, {
    key: "update",
    value: function update(game) {
      this.computer ? this.automate(game) : '';
      this.draw(game.c);
    }
  }, {
    key: "addScore",
    value: function addScore() {
      this.score++;
    }
  }, {
    key: "automate",
    value: function automate(game) {
      game.leftPaddle.y = +game.ball.y * 0.87;
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var utils = {
  randomIntFromRange: function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  randomColor: function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  },
  distance: function distance(x1, y1, x2, y2) {
    var xDist = x2 - x1;
    var yDist = y2 - y1;
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  },
  // CIRCLE/RECTANGLE
  circleRectCollision: function circleRectCollision(cx, cy, radius, rx, ry, rw, rh) {
    // temporary variables to set edges for testing
    var testX = cx;
    var testY = cy; // which edge is closest?

    if (cx < rx) testX = rx; // test left edge
    else if (cx > rx + rw) testX = rx + rw; // right edge

    if (cy < ry) testY = ry; // top edge
    else if (cy > ry + rh) testY = ry + rh; // bottom edge
    // get distance from closest edges

    var distance = this.distance(testX, testY, cx, cy); // if the distance is less than the radius, collision!

    if (distance <= radius) {
      return true;
    }

    return false;
  }
};
module.exports = utils;

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/js/canvas.js ./src/scss/master.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/canvas.js */"./src/js/canvas.js");
module.exports = __webpack_require__(/*! ./src/scss/master.scss */"./src/scss/master.scss");


/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map