/**
 * window.alert
 * window.confirm
 * window.prompt
 * 
 */
let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite o outro número: ');
num1 = parseInt(num1);
num2 = parseInt(num2);
const resultado = num1 + num2;
alert('Bom, vamos somar os dois numeros.');
alert(`A soma de ${num1} e ${num2} é ${resultado}`);
