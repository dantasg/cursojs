// const nome = 'Genival';
// const sobrenome = 'Dantas';
// const idade = 20;

// function soma(x, y) {
//     return x + y;
// };

// // Para não ter conflito mudamos o nome da importação.
// export {nome, sobrenome as sobrenome2, idade, soma};

// Geralmente é usado assim.
export const nome = 'Genival';
export const sobrenome = 'Dantas';
export const idade = 20;
// Variável privada, só é acessada nesse escopo;
const cpf = '';


export function soma(x, y) {
    return x + y;
};

// Geralmente o default é uma classe, mas não é regra.
export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
};

// Vamos configurar a default, que é o que vai ser exportado caso não seja declarado o que deseja-se exportar.
/*
    export default function mult (x, y) {
        return x * y;
    };
*/
// export default (x, y) => x * y;

// Para importar variaveis:
// const EstadoCivil = 'Namorando';
// export {EstadoCivil as default};