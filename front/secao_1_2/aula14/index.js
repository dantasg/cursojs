// IEEE 754-2008
let num1 = 10; // number
let num2 = 2.5; // number

// ============================================//

console.log(num1.toString() + num2); // Concatenação # 12.5
console.log(typeof num1);

// num1 = num1.toString(); // Altera permanentemente o número para string;

// ============================================//

console.log(num1.toString(2)); // Representação binária
console.log(num1);
console.log(num1.toFixed(2)); // Mostra apenas 2 casas decimais. Não altera o valor real quando inscrito dessa forma

// ============================================//

console.log(Number.isInteger(num1)) // Se o número é um inteiro ou não (true, false)

// ============================================//
let temp = num1 * '5';
console.log(Number.isNaN(temp)); // Se true, o código está errado, se false o código está correto
// Sempre passar a variável para int quando for fazer contas

// ============================================//

let num3 = 0.7; // number
let num4 = 0.1; // number

num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0 (deveria ser assim)

//num3 = num3.toFixed(2); // Para fazer a conta certa, porém não resolve, pois o numero não é mais int
//num3 = parseFloat(num3.toFixed(2));
num3 = Number(num3.toFixed(2)); // Com isso ou parseFloat transforma novamente em int

console.log(num3);
console.log(Number.isInteger(num3));

// ============================================//
num1 = Number.toFixed(2);
console.log(num1.toFixed(2));
