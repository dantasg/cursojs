/*
Não podemos criar constantes com palavras reservadas
Constantes precisam ter noimes significativos
Não pode começar o nome de uma constante com um número
Nâo podem conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não pode modificar o valor de uma constante
Não utilize VAR, Utilize LET

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segungoNumero = 10;
const soma = primeiroNumero * segungoNumero;

console.log(soma);

*/
const primeiroNumero = 5;
const segungoNumero = 10;
const soma = primeiroNumero * segungoNumero;
const soma_duplicado = soma * 2;
let soma_triplicado = soma * 3; // Valor de let, é perdido;
soma_triplicado += 5;
console.log(soma_duplicado);
console.log(soma_triplicado);
console.log(soma + 5);
