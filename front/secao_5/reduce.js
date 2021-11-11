// // Some todos os números (Reduce)
// // Retorne um array com os pares (Filter)
// // Retorne um array com o dobro dos valores (Map)
// //               0   1   2  2  4  5  6  7  8  9   10  11  12
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// }, 0);

// console.log(`Dentro do array temos um total de ${total}.`);

// // const par = numeros.filter(valor => valor % 2 === 0);
// const par = numeros.reduce(function(acumulador, valor){
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, [])

// console.log(`Os números pares do array são: ${par}.`)

// // const dobro = numeros.map(valor => valor * 2);
// const dobro = numeros.reduce(function(acumulador, valor){
//     acumulador.push(valor * 2);
//     return acumulador;
// }, [])

// console.log(`O dobro dos valores da array é ${dobro}`);



// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor
});

console.log(`A pessoa mais velha é ${maisVelha.nome}, com ${maisVelha.idade} anos.`)