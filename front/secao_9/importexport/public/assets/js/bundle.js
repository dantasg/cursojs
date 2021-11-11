/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "soma": () => (/* binding */ soma),
/* harmony export */   "default": () => (/* binding */ Pessoa)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const nome = 'Genival';
// const sobrenome = 'Dantas';
// const idade = 20;
// function soma(x, y) {
//     return x + y;
// };
// // Para não ter conflito mudamos o nome da importação.
// export {nome, sobrenome as sobrenome2, idade, soma};
// Geralmente é usado assim.
var nome = 'Genival';
var sobrenome = 'Dantas';
var idade = 20; // Variável privada, só é acessada nesse escopo;

var cpf = '';
function soma(x, y) {
  return x + y;
}
; // Geralmente o default é uma classe, mas não é regra.

var Pessoa = function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
};


; // Vamos configurar a default, que é o que vai ser exportado caso não seja declarado o que deseja-se exportar.

/*
    export default function mult (x, y) {
        return x * y;
    };
*/
// export default (x, y) => x * y;
// Para importar variaveis:
// const EstadoCivil = 'Namorando';
// export {EstadoCivil as default};

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
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
/*
import {nome as nome2, sobrenome, idade, soma, Pessoa} from './modulo1';
// Para não ter conflito mudamos o nome da importação.
const nome = 'João';

console.log(nome2, sobrenome, idade);
console.log(soma(5, 1));
console.log(nome);

const p1 = new Pessoa('Genival', 'Dantas');
console.log(p1);

console.log(MeuModulo);
*/
// ===============================================================================

/*
import * as MeuModulo from './modulo1';

const nome = 'João';

console.log(MeuModulo.nome, MeuModulo.sobrenome, MeuModulo.idade);
console.log(MeuModulo.soma(5, 1));
console.log(nome);

const p1 = new MeuModulo.Pessoa('Genival', 'Dantas');
console.log(p1);

console.log(MeuModulo);
*/
// Aqui estamos exportando o default, com o nome de qualquer coisa.
// import qualquerCoisa, {nome, sobrenome, idade, soma} from './modulo1';
// console.log(qualquerCoisa(5, 2));

var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["default"](_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome);
console.log(p1);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map