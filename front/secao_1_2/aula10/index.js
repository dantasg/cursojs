// String, mumber, undefined, null, boolean, symbol 
const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; // Number
const num2 = 10.10; // Number
const sobrenome_aluno = null; // Nulo -> Não aponta pra lugar nenhum na memória.
let nome_aluno; // underfined = não aponta pra local nenhum na memória.
// Ambas podem ser mudadas 
const aprovado = true; // Valor booleano; false (lógico)
let a = 2;
const b = a;
a = 3;
console.log(a, b)
/*
const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);
*/
/**
 * Arítméticos 
 * + Adição / Conatenação
 * - / * (subtração, divisão, multiplicação)
 * ** Potenciação
 * % Resto da divisão
 * 
 * < Ordem de presedencia:>
 * 1º ()
 * 2º **
 * 3º * / %
 * 4º + - 
 * 
 * < Incremento / Decremento >
 * Incremento = ++ / +=
 * Decremento = -- / -=
 * 
 * |||  += -= *= **= ... |||
 * Pode-se ser usado de qualquer forma 
 * 
 * | Para converter para int --> parseInt('5');
 * | Para converter para float --> parseFloat('5.2');
 */

 const num1 = 2;
 const num2 = 5;
 console.log(num1 % num2); // Não tem  limite de numeros: console.log(num1 + num2 + num2);
 const num3 = 10;
 console.log((num1 + num2) * num3);
 let contador = 1;
 contador++; // 2
 contador++; // 3  
 contador++; // 4
 console.log(contador);
 console.log(contador++);
 console.logm(++console);
 