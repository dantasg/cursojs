const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {

//     if (numero === 2){
//         console.log('Pulei o número 2')
//         continue;
//     }

//     // if (numero === 5){
//     //     continue; // Podemos ter quantos quiser
//     // }

//     if (numero === 7) {
//         console.log('Achamos o 7');
//         break;
//     }

//     console.log(numero);
// }

let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    if (numero === 7) {
        console.log('7 Encontrado, saindo ...');
        break;
    }

    console.log(numero);

    i++;
}

// continue = Continua para a próxima iteração
// break    = Sai do laço
