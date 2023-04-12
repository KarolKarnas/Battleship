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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Ui */ \"./src/modules/Ui.js\");\n/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Game */ \"./src/modules/Game.js\");\n\n\nconst game = new _modules_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst ui = new _modules_Ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Gameboard */ \"./src/modules/factories/Gameboard.js\");\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ \"./src/modules/factories/Player.js\");\n/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Ship */ \"./src/modules/factories/Ship.js\");\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ui */ \"./src/modules/Ui.js\");\n\n\n\n\nclass Game {\n  constructor() {\n    this.gameboardPlayer = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.gameboardAi = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.player = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.ai = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.placeShipsPlayer();\n    this.placeShipsAi();\n  }\n  placeShipsPlayer() {\n    this.gameboardPlayer.placeShip([0, 0], 'x', 1);\n    this.gameboardPlayer.placeShip([1, 4], 'x', 1);\n    this.gameboardPlayer.placeShip([6, 7], 'x', 1);\n    this.gameboardPlayer.placeShip([9, 0], 'x', 1);\n    this.gameboardPlayer.placeShip([1, 2], 'x', 2);\n    this.gameboardPlayer.placeShip([6, 4], 'y', 2);\n    this.gameboardPlayer.placeShip([1, 7], 'y', 2);\n    this.gameboardPlayer.placeShip([6, 2], 'x', 3);\n    this.gameboardPlayer.placeShip([4, 4], 'y', 3);\n    this.gameboardPlayer.placeShip([6, 9], 'x', 4);\n  }\n  placeShipsAi() {\n    this.gameboardAi.placeShip([1, 0], 'x', 1);\n    this.gameboardAi.placeShip([0, 4], 'x', 1);\n    this.gameboardAi.placeShip([5, 7], 'x', 1);\n    this.gameboardAi.placeShip([8, 0], 'x', 1);\n    this.gameboardAi.placeShip([3, 0], 'y', 2);\n    this.gameboardAi.placeShip([7, 4], 'y', 2);\n    this.gameboardAi.placeShip([0, 7], 'y', 2);\n    this.gameboardAi.placeShip([6, 2], 'x', 3);\n    this.gameboardAi.placeShip([3, 4], 'x', 3);\n    this.gameboardAi.placeShip([4, 9], 'x', 4);\n  }\n  playerTurn() {\n    this.player.attack(gameboardAi, [1, 1]);\n    if (this.gameboardAi.areAllShipsSunk()) {\n      this.gameOver();\n    }\n    this.aiTurn();\n  }\n  aiTurn() {\n    this.ai.randomAttack(this.gameboardPlayer);\n    if (this.gameboardPlayer.areAllShipsSunk()) {\n      this.gameOver();\n    }\n    this.playerTurn();\n  }\n  gameOver() {}\n\n  // gameStart() {\n\n  // }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship/./src/modules/Game.js?");

/***/ }),

/***/ "./src/modules/Ui.js":
/*!***************************!*\
  !*** ./src/modules/Ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ui {\n  constructor(game) {\n    const playerGameboardElement = document.getElementById('player-gameboard');\n    const aiGameboardElement = document.getElementById('ai-gameboard');\n    this.game = game;\n    this.renderGameboard(this.game.gameboardPlayer.board, playerGameboardElement);\n    this.renderGameboard(this.game.gameboardAi.board, aiGameboardElement);\n  }\n  renderGameboard(gameboard, gameboardElement) {\n    console.log(gameboard);\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const divField = document.createElement('div');\n        divField.classList.add('field');\n        divField.textContent = gameboard[j][i].coordinatesStr;\n        if (gameboard[j][i].ship) {\n          divField.classList.add('ship');\n        }\n        gameboardElement.appendChild(divField);\n      }\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ui);\n\n//# sourceURL=webpack://battleship/./src/modules/Ui.js?");

/***/ }),

/***/ "./src/modules/factories/Gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/factories/Gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/factories/Ship.js\");\n\nclass Gameboard {\n  constructor() {\n    this.board = [];\n    this.shipTracker = [];\n    this.makeBoard(this.board);\n    this.idTracker = 0;\n  }\n  makeBoard(board) {\n    for (let j = 0; j < 10; j++) {\n      board[j] = [];\n      for (let i = 0; i < 10; i++) {\n        board[j][i] = {\n          ship: false,\n          shipId: false,\n          missedShot: false,\n          hitShip: false,\n          coordinatesArr: [j, i],\n          coordinates: {\n            x: j,\n            y: i\n          },\n          coordinatesStr: `[${j},${i}]`\n        };\n      }\n    }\n  }\n  placeShip() {\n    let startCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];\n    let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';\n    let shipLength = arguments.length > 2 ? arguments[2] : undefined;\n    const myShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shipLength, this.idTracker);\n    this.shipTracker.push(myShip);\n    this.idTracker++;\n    // const shipStartCoordinates = startCoordinates;\n    if (this.isEnoughSpace(startCoordinates, direction, myShip.length)) {\n      let x = startCoordinates[0];\n      let y = startCoordinates[1];\n      for (let i = 0; i < myShip.length; i++) {\n        if (direction === 'x') {\n          this.board[x][y].ship = true;\n          this.board[x][y].shipId = myShip.id;\n          x++;\n        } else if (direction === 'y') {\n          this.board[x][y].ship = true;\n          y++;\n        }\n      }\n      return 'Ship placed';\n    } else {\n      return 'Cannot build here';\n    }\n  }\n  checkCoordinates() {\n    let coordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];\n    const x = coordinates[0];\n    const y = coordinates[1];\n    if (x >= 10 || y >= 10) return false;\n    if (this.board[x][y].ship === false) {\n      return true;\n    }\n  }\n  isEnoughSpace() {\n    let startCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];\n    let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';\n    let shipLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;\n    let x = startCoordinates[0];\n    let y = startCoordinates[1];\n    for (let i = 0; i < shipLength; i++) {\n      if (direction === 'x') {\n        if (this.checkCoordinates([x, y])) {\n          x++;\n        } else {\n          return false;\n        }\n      } else if (direction === 'y') {\n        if (this.checkCoordinates([x, y])) {\n          y++;\n        } else {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n  receiveAttack() {\n    let attackCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];\n    let x = attackCoordinates[0];\n    let y = attackCoordinates[1];\n    if (this.board[x][y].ship === true && this.board[x][y].hitShip === false) {\n      const id = this.board[x][y].shipId;\n      this.board[x][y].hitShip = true, this.shipTracker[id].hit();\n    } else {\n      this.board[x][y].missedShot = true;\n    }\n    // return attackCoordinates\n  }\n\n  areAllShipsSunk() {\n    for (let i = 0; i < this.shipTracker.length; i++) {\n      if (this.shipTracker[i].sunk === false) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/factories/Gameboard.js?");

/***/ }),

/***/ "./src/modules/factories/Player.js":
/*!*****************************************!*\
  !*** ./src/modules/factories/Player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Player {\n  constructor() {\n    this.aiShots = [];\n  }\n  attack(gameboard) {\n    let coordinates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];\n    gameboard.receiveAttack(coordinates);\n  }\n  checkShot(coordinates) {\n    const currentX = coordinates[0];\n    const currentY = coordinates[1];\n    for (let i = 0; i < this.aiShots.length; i++) {\n      const previousX = this.aiShots[i][0];\n      const previousY = this.aiShots[i][1];\n      if (previousX === currentX && previousY === currentY) {\n        return false;\n      }\n    }\n    return true;\n  }\n  getRandomCoordinates() {\n    const x = Math.floor(Math.random() * 10);\n    const y = Math.floor(Math.random() * 10);\n    const coordinates = [x, y];\n    return coordinates;\n  }\n  randomAttack(gameboard) {\n    const coordinates = this.getRandomCoordinates();\n    if (this.checkShot(coordinates)) {\n      this.aiShots.push(coordinates);\n      gameboard.receiveAttack(coordinates);\n    } else {\n      this.randomAttack();\n    }\n    return coordinates;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/modules/factories/Player.js?");

/***/ }),

/***/ "./src/modules/factories/Ship.js":
/*!***************************************!*\
  !*** ./src/modules/factories/Ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor() {\n    let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;\n    let id = arguments.length > 1 ? arguments[1] : undefined;\n    let hits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    let sunk = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n    this.length = length;\n    this.id = id;\n    this.hits = hits;\n    this.sunk = sunk;\n  }\n  hit() {\n    this.hits++;\n    this.isSunk();\n    // return this.hits\n  }\n\n  isSunk() {\n    if (this.length === this.hits) {\n      this.sunk = true;\n      // return true\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/modules/factories/Ship.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;