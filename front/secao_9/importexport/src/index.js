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


import Pessoa, {nome, sobrenome, idade} from "./modulo1";

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);