/*
Operadores de comparação: 
>   : Maior que;
>=  : Maior ou igual a;
<   : Menor que;
<=  : Menor ou iguaa a;
==  : Igualdade (valor); ************* Não usar.
=== : Igualdaded estrita (Valor e tipo);
!=  : Diferente (valor); ************* Não usar.
!== : Diferente estrito (valor e tipo);
*/
console.log(10 > 5); // Também pode ser guardade em uma variavel
// ====================//
console.log(10 >= 5); // Retorna true, mesmo não sendo igual
console.log(10 >= 10);
console.log(10 >= 11); // false
// ====================//
console.log(5 > 10); // Também pode ser amazenado em uma variavel
// ====================//
console.log(10 <= 5); // Retorna true, mesmo não sendo igual
console.log(10 <= 10);
console.log(10 <= 11); // false
// ====================//
const num1 = 10;
const num2 = 11;
const comp = num1 === num2;
console.log(comp);
/*
Usando apenas o "==" a linguagem não vai diferenciar por exemplo:
cosnt num1 = 10;
const num2 = '10';
const comp = num1 == num2; "Retorna true"

Retornando true mesmo sendo uma string e um number
*/
