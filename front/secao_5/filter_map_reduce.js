// Retorne a soma do dobro de todos os pares
// -> Filtar pares 
// -> Dobrar os valores
// -> Reduzir (somar tudo)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// //  Filter 
// // const pares = numeros.filter(valor => {
// //     if (valor % 2 === 0)
// //         return true
// //     return false
// //     });

// const pares = numeros.filter(valor => valor % 2 === 0)



// console.log(`Os números pares que estão presentes na array são: ${pares}`);

// // Map

// const dobro = numeros.map(valor => valor *2);

// console.log(`O dobro de cada elemento presente na lista é: ${dobro}.`);

// // Reduce

// const somaTudo = numeros.reduce((ac, valor) => ac + valor);

// console.log(`${somaTudo}.`)


// A soma do dobro de todos os pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFinal = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumu, valor) => acumu + valor);

console.log(`A soma do dobro de todos os pares é ${numerosFinal}.`)