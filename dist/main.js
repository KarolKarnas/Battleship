/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Ui.js":
/*!***************************!*\
  !*** ./src/modules/Ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Gameboard */ "./src/modules/factories/Gameboard.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ "./src/modules/factories/Player.js");
/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Ship */ "./src/modules/factories/Ship.js");



class Ui {
  constructor() {}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ui);

/***/ }),

/***/ "./src/modules/factories/Gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/factories/Gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/factories/Ship.js");

class Gameboard {
  constructor() {
    this.board = [];
    this.shipTracker = [];
    this.makeBoard(this.board);
    this.idTracker = 0;
  }
  makeBoard(board) {
    for (let j = 0; j < 10; j++) {
      board[j] = [];
      for (let i = 0; i < 10; i++) {
        board[j][i] = {
          ship: false,
          shipId: false,
          missedShot: false,
          hitShip: false,
          coordinatesArr: [j, i],
          coordinates: {
            x: j,
            y: i
          }
        };
      }
    }
  }
  placeShip() {
    let startCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
    let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
    let shipLength = arguments.length > 2 ? arguments[2] : undefined;
    const myShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](shipLength, this.idTracker);
    this.shipTracker.push(myShip);
    this.idTracker++;
    // const shipStartCoordinates = startCoordinates;
    if (this.isEnoughSpace(startCoordinates, direction, myShip.length)) {
      let x = startCoordinates[0];
      let y = startCoordinates[1];
      for (let i = 0; i < myShip.length; i++) {
        if (direction === 'x') {
          this.board[x][y].ship = true;
          this.board[x][y].shipId = myShip.id;
          x++;
        } else if (direction === 'y') {
          this.board[x][y].ship = true;
          y++;
        }
      }
      return 'Ship placed';
    } else {
      return 'Cannot build here';
    }
  }
  checkCoordinates() {
    let coordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
    const x = coordinates[0];
    const y = coordinates[1];
    if (x >= 10 || y >= 10) return false;
    if (this.board[x][y].ship === false) {
      return true;
    }
  }
  isEnoughSpace() {
    let startCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
    let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
    let shipLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    let x = startCoordinates[0];
    let y = startCoordinates[1];
    for (let i = 0; i < shipLength; i++) {
      if (direction === 'x') {
        if (this.checkCoordinates([x, y])) {
          x++;
        } else {
          return false;
        }
      } else if (direction === 'y') {
        if (this.checkCoordinates([x, y])) {
          y++;
        } else {
          return false;
        }
      }
    }
    return true;
  }
  receiveAttack() {
    let attackCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
    let x = attackCoordinates[0];
    let y = attackCoordinates[1];
    if (this.board[x][y].ship === true && this.board[x][y].hitShip === false) {
      const id = this.board[x][y].shipId;
      this.board[x][y].hitShip = true, this.shipTracker[id].hit();
    } else {
      this.board[x][y].missedShot = true;
    }
    // return attackCoordinates
  }

  areAllShipsSunk() {
    for (let i = 0; i < this.shipTracker.length; i++) {
      if (this.shipTracker[i].sunk === false) {
        return false;
      }
    }
    return true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/factories/Player.js":
/*!*****************************************!*\
  !*** ./src/modules/factories/Player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor() {
    this.aiShots = [];
  }
  attack(gameboard) {
    let coordinates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
    gameboard.receiveAttack(coordinates);
  }
  checkShot(coordinates) {
    const currentX = coordinates[0];
    const currentY = coordinates[1];
    for (let i = 0; i < this.aiShots.length; i++) {
      const previousX = this.aiShots[i][0];
      const previousY = this.aiShots[i][1];
      if (previousX === currentX && previousY === currentY) {
        return false;
      }
    }
    return true;
  }
  getRandomCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const coordinates = [x, y];
    return coordinates;
  }
  randomAttack(gameboard) {
    const coordinates = this.getRandomCoordinates();
    if (this.checkShot(coordinates)) {
      this.aiShots.push(coordinates);
      gameboard.receiveAttack(coordinates);
    } else {
      this.randomAttack();
    }
    return coordinates;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/factories/Ship.js":
/*!***************************************!*\
  !*** ./src/modules/factories/Ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor() {
    let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
    let id = arguments.length > 1 ? arguments[1] : undefined;
    let hits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let sunk = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    this.length = length;
    this.id = id;
    this.hits = hits;
    this.sunk = sunk;
  }
  hit() {
    this.hits++;
    this.isSunk();
    // return this.hits
  }

  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
      // return true
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Ui */ "./src/modules/Ui.js");

const ui = new _modules_Ui__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map