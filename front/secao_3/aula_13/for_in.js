// const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let i in frutas) {
//     console.log(i);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa){
    console.log(chave); // retorna a chave
}

for (let chaves in pessoa){
    console.log(pessoa[chaves]); // retorna o que está mandito dentro da chave
}
