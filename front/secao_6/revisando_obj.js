/*
const pessoa = {
    nome: 'Genival',
    sobrenome: 'Dantas',
    idade: 20
}

console.log(pessoa.nome);
console.log(pessoa['sobrenome']); // Funciona da mesma forma que com a anotação de ponto.
const idade = 'idade';
console.log(pessoa[idade]); // Também funciona da mesma forma.


const pessoa1 = new Object();
pessoa1.nome = 'Genival';
pessoa1.sobrenome = 'Dantas';
pessoa1.idade = 20
pessoa1.falaNome = function () {
    return `${this.nome} está dizendo seu nome.`
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
// console.log(pessoa1);

console.log(pessoa1.falaNome());

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave);
}

*/

// Factory functions / Constructor functions / Classes
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Genival', 'Dantas');
console.log(p1.nomeCompleto);

*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Para travar todos os "this", contidos no objeto, assim, não podendo alterar nem criar algo novo, nem mesmo deletar algo, nada pode ser feito depois dessa linha de código.
}

const p1 = new Pessoa('Genival', 'Dantas');
const p2 = new Pessoa('Ana', 'Clara');
console.log(p1);
console.log(p2);

p1.nome = 'de Resende'; // Mesmo sendo const, com os Objs, podesse mudar os valores das contantes 
console.log(p1); 

// p1 = (ENDEREÇO DE MOEMORIA) -> 'valor'
// p1.ENDEREÇO DE MOEMORIA = {nome: 'Outra coisa'}; Faz isso, acessando somente o valor, não o escopo de memória
// p1.NOVO ENDEREÇO DE MEMORIA; Não faz isso 

const p3 = new Pessoa('Vinicius', 'Barbosa');
Object.freeze(p3); // Assim travamos o obj, e ele não pode mais ser mudado, caso seja instanciado, não gerará erro, porém não mudará o valor contido dentro deles anteriormente

