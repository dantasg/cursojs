const verdadeira = true;

// let tem escopo de bloco { ..... bloco}
// var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz';

// var nome2 = 'Otávio'; // Redeclarada

// if (verdadeira) {
//     var nome2 = 'Luiz'; // Redeclarando
//     let nome = 'Otávio'; // criando
//     console.log(nome, nome2)
// }

function falaOi () {
    var nome = 'Luiz';
    console.log(nome);
}

falaOi();
