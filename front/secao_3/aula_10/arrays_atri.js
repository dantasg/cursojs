/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/

//               0  1  2  3  4  5  6  7  8  - Indice
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0]; // chama o indice 0
// const [primeiroNumero, segundoNumero] = numeros; // Pega a quantidade de números presentes na primeira lista e passa para a segunda
// console.log(primeiroNumero, segundoNumero);
const [primeiroNumero, segundoNumero, ...resto] = numeros; // "..." pega o resto // ... rest, ... spread
console.log(primeiroNumero, segundoNumero);
console.log(resto);
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numeros2[1][2]); // O primeiro é para escolher a lista estre todas as três, o segundo para o elemento dentro da escolhida

const [,[,,seis]] = numeros2; // Muito complexo
console.log(seis); 

// Melhor forma de fazer 

const [lista1, lista2, lista3] = numeros2;
console.log(lista2[2]);
