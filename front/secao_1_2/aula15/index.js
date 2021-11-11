let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda para baixo
let num3 = Math.ceil(num1); // Arredonda para cima
let num4 = Math.round(num1); // Arredonda para o mais próximo (Na metade ele arredonda pra cima)
// ===================================================//
console.log(`Número 1: ${num1}`);
console.log(`Número 2: ${num2}`);
console.log(`Número 3: ${num3}`);
console.log(`Número 4: ${num4}`);
// ===================================================//

console.log(Math.max(1, 2, 3, 4, 5, 6, -10, -45, 1550, 4, 6, 7 ,9, 10)); // Retorna o maior número de uma lista de números
console.log(Math.min(1, 2, 3, 4, 5, 6, -10, -45, 1550, 4, 6, 7 ,9, 10)); // Retorna o menor número de uma lista de números
console.log(Math.random()); // Gera um número aleatório entre 0 e 1, sendo que o 1 não é incluído.

// ===================================================//

//const aleatorio = Math.random() * (10 - 5) + 5; // Gera um número aleatório entre 10 e 5
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Gera um número aleatório entre 10 e 5 e arredonda para o mais próximo.
console.log(aleatorio);

// ===================================================//

console.log(Math.PI);
console.log(Math.pow(2, 10));// console.log(2 ** 10)

// ===================================================//
// let num1 = 9;
console.log(num1 ** (1/2)); // Raiz quadrada
console.log(num1 ** 0.5); // Raiz quadrada

// ===================================================//

console.log(100 / 0); // Não da erro, e é true, porém retorna um valor Infinity
