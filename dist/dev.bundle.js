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
/******/ 	return __webpack_require__(__webpack_require__.s = "./__tests__/dev.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./__tests__/dev.ts":
/*!**************************!*\
  !*** ./__tests__/dev.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src */ \"./src/index.ts\");\n\nvar chess = new _src__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n// chess.printGameState();\nconsole.log(chess.getValidMoves(1, 0));\n\n\n//# sourceURL=webpack:///./__tests__/dev.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: columnsConst, columnConst, rows, fieldColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"columnsConst\", function() { return columnsConst; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"columnConst\", function() { return columnConst; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rows\", function() { return rows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldColors\", function() { return fieldColors; });\nvar columnsConst = [\n    \"1\",\n    \"2\",\n    \"3\",\n    \"4\",\n    \"5\",\n    \"6\",\n    \"7\",\n    \"8\"\n];\nvar columnConst = [\n    \"A\",\n    \"B\",\n    \"C\",\n    \"D\",\n    \"E\",\n    \"F\",\n    \"G\",\n    \"H\"\n];\nvar rows = [\"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\"];\nvar fieldColors = { white: 0, black: 1 };\n\n\n//# sourceURL=webpack:///./src/constants.ts?");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: createFunctionalGameState, createStart, createStartField, getFieldColor, getStartFigureForField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFunctionalGameState\", function() { return createFunctionalGameState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStart\", function() { return createStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStartField\", function() { return createStartField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldColor\", function() { return getFieldColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStartFigureForField\", function() { return getStartFigureForField; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n\nvar createFunctionalGameState = function (GameState) {\n    var functionalGameState = GameState;\n    functionalGameState[0] = createEmptyRow(\"0\");\n};\nvar createEmptyRow = function (row) {\n    var rowObj = {};\n    for (var i = 0; i < 10; i++) {\n        rowObj[i] = createEmptyStartField(row, i);\n    }\n    return rowObj;\n};\nvar createEmptyStartField = function (row, column) {\n    return {\n        validMoves: null,\n        figureType: null,\n        side: null,\n        field: \"\" + _constants__WEBPACK_IMPORTED_MODULE_0__[\"columnConst\"][column] + (row + 1),\n        row: row,\n        column: column,\n        columnName: _constants__WEBPACK_IMPORTED_MODULE_0__[\"columnConst\"][column],\n        fieldColor: null\n    };\n};\nvar createStart = function () {\n    var State;\n    for (var _i = 0, rows_1 = _constants__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]; _i < rows_1.length; _i++) {\n        var rowI = rows_1[_i];\n        var row = {};\n        for (var _a = 0, columnsConst_1 = _constants__WEBPACK_IMPORTED_MODULE_0__[\"columnsConst\"]; _a < columnsConst_1.length; _a++) {\n            var column = columnsConst_1[_a];\n            row[Number(column)] = createStartField(rowI, column);\n        }\n        State[Number(rowI)] = row;\n    }\n    return State;\n};\nvar createStartField = function (row, column) {\n    var figure = getStartFigureForField(row, column);\n    return {\n        validMoves: null,\n        figureType: figure ? figure[0] : null,\n        side: figure ? figure[1] : null,\n        field: \"\" + _constants__WEBPACK_IMPORTED_MODULE_0__[\"columnConst\"][column] + (row + 1),\n        row: row,\n        column: column,\n        columnName: _constants__WEBPACK_IMPORTED_MODULE_0__[\"columnConst\"][column],\n        fieldColor: getFieldColor(row, column)\n    };\n};\nvar __getRowFieldColor = function (order, columnS) {\n    var fieldColorsP = [_constants__WEBPACK_IMPORTED_MODULE_0__[\"fieldColors\"].white, _constants__WEBPACK_IMPORTED_MODULE_0__[\"fieldColors\"].black];\n    var column = Number(columnS);\n    if (column % 2 === 0) {\n        return fieldColorsP[order];\n    }\n    else {\n        fieldColorsP.splice(order, 1);\n        return fieldColorsP[0];\n    }\n};\nvar getFieldColor = function (row, column) {\n    if (row % 2 === 0) {\n        return __getRowFieldColor(0, column);\n    }\n    else {\n        return __getRowFieldColor(1, column);\n    }\n};\nvar getStartFigureForField = function (rowS, columnS) {\n    var row = Number(rowS);\n    var column = Number(columnS);\n    switch (row) {\n        case 0:\n            if (column === 1 || column === 8) {\n                return \"Rw\";\n            }\n            if (column === 2 || column === 7) {\n                return \"Nw\";\n            }\n            if (column === 3 || column === 6) {\n                return \"Bw\";\n            }\n            if (column === 4) {\n                return \"Qw\";\n            }\n            if (column === 5) {\n                return \"Kw\";\n            }\n        case 1:\n            return \"Pw\";\n        case 6:\n            return \"Pb\";\n        case 7:\n            if (column === 1 || column === 8) {\n                return \"Rb\";\n            }\n            if (column === 2 || column === 7) {\n                return \"Nb\";\n            }\n            if (column === 3 || column === 6) {\n                return \"Bb\";\n            }\n            if (column === 4) {\n                return \"Qb\";\n            }\n            if (column === 5) {\n                return \"Kb\";\n            }\n        default:\n            return null;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/helpers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.ts\");\n// helpers\n\nvar ChessLogic = /** @class */ (function () {\n    // constructor\n    function ChessLogic(GameState) {\n        var _this = this;\n        if (GameState === void 0) { GameState = null; }\n        // Methods\n        this.getGameState = function () {\n            return _this.__currentGameState;\n        };\n        this.printGameState = function () {\n            for (var _i = 0, _a = Object.keys(_this.__currentGameState); _i < _a.length; _i++) {\n                var r = _a[_i];\n                console.log(r);\n                for (var _b = 0, _c = Object.keys(_this.__currentGameState[r]); _b < _c.length; _b++) {\n                    var c = _c[_b];\n                    console.log(c, _this.__currentGameState[r][c]);\n                }\n            }\n        };\n        this.getValidMoves = function (row, column) {\n            if (row === void 0) { row = false; }\n            if (column === void 0) { column = false; }\n            if (row !== false && column !== false) {\n                return _this.__getValidMoveForField(row, column);\n            }\n        };\n        this.__getValidMoveForField = function (row, column) {\n            var field = _this.__currentGameState[String(row)][String(column)];\n            if (field.figureType && field.side) {\n                return _this.__getValidMoves(field.figureType, field.side, row, column);\n            }\n            return null;\n        };\n        this.__getValidMoves = function (figType, figSide, row, column) {\n            switch (figType) {\n                case \"P\":\n                    console.log(_this.__getValidPawnMoves(figSide, row, column));\n                    return _this.__getValidPawnMoves(figSide, row, column);\n            }\n        };\n        this.__getValidPawnMoves = function (side, row, column) {\n            var field = _this.__currentGameState[row][column];\n            if (!field.validMoves) {\n                var validMoves = [];\n                if (side === \"w\") {\n                    // straight Moves\n                    var field1 = _this.__currentGameState[String(row + 1)][String(column)];\n                    if (!field1.figureType) {\n                        validMoves.push(field1.field);\n                    }\n                    var field2 = _this.__currentGameState[row + 2][column];\n                    if (!field2.figureType) {\n                        validMoves.push(field2.field);\n                    }\n                    // diagonal Moves\n                    var field3 = _this.__currentGameState[row + 1][column + 1];\n                    if (field3.figureType) {\n                        validMoves.push(field3.field);\n                    }\n                    var field4 = _this.__currentGameState[row + 1][column - 1];\n                    if (field4.figureType) {\n                        validMoves.push(field4.field);\n                    }\n                }\n                return validMoves;\n            }\n            return field.validMoves;\n        };\n        this.initialGameState = GameState;\n        this.__currentGameState = null;\n        if (!GameState) {\n            this.__currentGameState = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createStart\"])();\n            this.__functionalGameState = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createFunctionalGameState\"])(this.__currentGameState);\n        }\n    }\n    return ChessLogic;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChessLogic);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });