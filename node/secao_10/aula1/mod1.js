/*
    const nome = 'Genival';
    const sobrenome = 'Dantas';

    const falaNome = () => {
        console.log(nome, sobrenome);
    };

    // module.exports.nome = nome;
    // module.exports.sobrenome = sobrenome;
    // module.exports.falaNome = falaNome;

    exports.nome = nome;
    exports.sobrenome = sobrenome;
    exports.falaNome = falaNome;

    // Aqui "fora de uma classe" o this aponta para o exports
    this.oi = 'Oi!';
    // Mas não é muito usado

    // console.log(module.exports)
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    };
};

exports.Pessoa = Pessoa;
