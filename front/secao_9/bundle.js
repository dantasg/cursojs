"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// npx babel main.js -o bundle.js --presets=@babel/env
// "babel": "babel ./secaoo_9/main.js -o ./bundle.js --presets=@babel/env -w"
// const nome = 'Ana Clara';
// const obj = {nome};
// const novoObj = { ...obj };
var Pessoa = function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
};
