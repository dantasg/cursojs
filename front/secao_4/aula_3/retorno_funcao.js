/*
return
Retorna um valor
Termina a função
*/

// function soma (a, b) {
//     return a + b;
// }

// let soma1 = soma(2, 3);
// console.log(soma1); // A variavel fica com o valor do retorno 

// function dizOi() {
//     console.log('Oi');
// }
// let oi = dizOi();
// console.log(oi); // undefined, são tem retorno

// function criaPessoa (nome, sobrenome) {
//     return {nome, sobrenome};
// }

// // As duas são exatamente iguais, criando um objeto, porém a "p1" tem uma função para fazer isso por ela.

// const p1 = criaPessoa('Luiz', 'Otávio');
// const p2 = {
//     nome: 'João', 
//     sobrenome: 'Oliveira'
// };

// console.log(p1);
// console.log(p2);
// console.log(p1.nome);
// console.log(p2.nome);

// function falarFrase (comeco) {
//     function falarResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return comeco;
// }

// const olaMundo = falarFrase('Olá');
// console.log(falarFrase(olaMundo));

//===========================================================
// Function usual

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    // multiplicador
    // function muplicacao(n) {
    //     return n * multiplicador;
    // }

    // return multiplicador;

    return function(n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
