const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco : {
        rua: 'Av. Brasil',
        numero: 320
    }
};
// Atribuição
// const nome = pessoa.nome;
// console.log(nome);

// Atribuição via desestruturação
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);
const {endereco: {rua, numero}} = pessoa;
console.log(rua + ',', numero);
