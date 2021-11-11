// function funcao () {
//     console.log('Oi');
//     // console.log(arguments); // Onde fica armazenado todos os paremetros passados
// }
// funcao('Valor'); // Não gera error, porém não muda nada
// funcao(1, 2, 3, 4, 5, 6, 3, 4, 2); // Também não gera erros

// // function somaValores () {
// //     let total = 0;
// //     for (let argumento of arguments) {
// //         total += argumento;
// //     }

// //     console.log(total);
// // }

// // somaValores(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function somaValores (a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
//     console.log(a, b, c); // Armazenam os primeiros argumentos passados 
// }

// somaValores(1, 2, 3, 4, 5, 6, 7, 8, 9);
// somaValores(3, 4, 5, 6, 7, 8, 9);

// // =========================================================

// function funcao (a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }

// funcao(1, 2, 3); // Caso passemos paramêtros a menos, os argumentos já declarados ficam com os valores de undefined

// // =======================================================

// // function funcao (a, b) {
// //     b = b || 0; // Verifica se b tem algum valor, se não, ele recebe o valor de zero
// //     console.log(a + b); 
// // }

// function funcao (a, b = 2, c = 4) {
//     console.log(a + b + c); // Também pode declarar a função dessa forma caso, o valor não seja passado
// }

// funcao(2); // Nan
// funcao(2); // Não retorna mais NaN por conta de verificar lá em cima se "b" tem valor
// funcao(2, '', 20); // O "b" não recebe o valor caso seja string ou Zero
// // funcao(2, , 20); // Não podemos mandar valores vazio, gera erro

// // =================================================================

// function funcao ({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// funcao({nome: 'Genival', sobrenome: 'Dantas', idade: 20});
// let objeto = {nome: 'Genival', sobrenome: 'Dantas', idade: 20};
// funcao(objeto); // Também funciona passando o objeto

// // =================================================================

// function funcao ([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Genival', 'Dantas', 30]);

// function conta(operador, acumulador, ...numeros) {
//     console.log(operador, acumulador, numeros);
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '*') acumulador *= numero;
//         if (operador === '/') acumulador /= numero;
//     }

//     console.log(acumulador);
// }

// conta('*', 0, 20, 30, 40, 50);

const conta = function(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
