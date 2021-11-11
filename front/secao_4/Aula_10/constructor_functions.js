// Função fabrica -> fabrica objetos
// Função contrutora -> contrói objetos

// Fabrica -> criaPessoa
// Construtora -> Pessoa (new) (cria uma nova pessoa)

function Pessoa(nome, sobrenome) {
    // Métodos privados, que só existem dentro da função.
    const ID = 12345;
    const metodoInterno = function(){
        
    };

    // Atributos ou métodos públicos, possivel ser utilizado fora, através de ponto;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(`${this.nome}: sou um metodo`);
    };


};

// new => Cria um objeto vazio, faz o this apontar para o objeto vazio e já faz ele retornar para a variavel.

const p1 = new Pessoa('Genival', 'Dantas');
const p2 = new Pessoa('Vinicius', 'Barbosa');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();