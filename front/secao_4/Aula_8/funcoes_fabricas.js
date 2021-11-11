// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
            console.log(valor);
        },

        fala: function(assunto = 'falando sobnre nada'){
            return `${this.nome} está ${assunto}.`; /* "this, usado para acessar os dados do objeto."*/
        },

        altura: altura,
        peso: peso,
        
        // Geter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

    };
}
/*
const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(p1);
console.log(p1.fala('Falando sobre Js'));
console.log(p1.nome);
*/

// const p2 = criaPessoa('Genival', 'Dantas', 1.90, 92);
// /*console.log(p2.nome);
// console.log(p2.sobrenome);
// console.log(p2.imc);*/
// // console.log(p2.imc());
// // console.log(p2.nomeCompleto());
// p2.nomeCompleto = 'Vinicius Barbosa Fernandes';
// console.log(p2.nomeCompleto);
// console.log(p2.nome);
// console.log(p2.sobrenome);
// console.log(p2.fala());

/*======================================================*/

const p1 = criaPessoa('Luis', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.7, 85);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
