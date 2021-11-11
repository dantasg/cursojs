// Construtora -> molde (clases)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.estouAqui = ('Hahahaha');
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// Instância
const pessoa1 = new Pessoa('Genival', 'Dantas'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Clara', 'Silva'); // <- Pessoa = Função construtora

const data = new Date(); // <-- Date = função construtora


console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.nomeCompleto);
console.log(data)

console.log(pessoa1.estouAqui);
console.log(pessoa2.estouAqui);
