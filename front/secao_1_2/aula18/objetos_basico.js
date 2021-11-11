/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
}
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa.idade);
*/
//==================================================//
console.log('==================================================')
//==================================================//

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade,
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('João', 'Miranda', 25);
const pessoa3 = criaPessoa('Maria', 'Oliveira', 25);
const pessoa4 = criaPessoa('Felipe', 'Justino', 25);
const pessoa5 = criaPessoa('Thiago', 'Queiroz', 25);


console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome);
console.log(pessoa4.nome, pessoa4.idade);
console.log(pessoa5.nome, pessoa5.sobrenome);
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando "oi!"`);
    },

    incrementaIdade() {
        ++this.idade;
    },

    falaIdade() {
        console.log(`A minha idade atual é ${this.idade}`);
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();
