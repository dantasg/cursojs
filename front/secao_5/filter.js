/*
// Filter, map, reduce

Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
//               0   1   2  2  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor){
//     return valor > 10;
// }

// const maior_10 = numeros.filter(valor => valor > 10);// Função de call back mais moderna possivel

const maior_10 = numeros.filter((valor, indice, array) => {
    console.log(valor); // valor de cada filtro
    console.log(indice); // indice de cada valor
    console.log(array); // array completa, retornada a cada passagem
    return valor > 10
});
console.log(maior_10);


// for (let chave in numeros){
//     if (numeros[chave] > 10){
//         maior_10.push(numeros[chave]);
//     };
// };

// console.log(`Os números maiores que 10 são: ${maior_10}.`);

*/

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com o mais de 50 anos
// Retorne as pessoas cujo nome termnina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasNome = pessoas.filter(valor => valor.nome.length >= 5);

const pessoasIdade = pessoas.filter(valor => valor.idade > 50);

const pessoasNomeA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasNome);
console.log('==========================');
console.log(pessoasIdade);
console.log('==========================');
console.log(pessoasNomeA);