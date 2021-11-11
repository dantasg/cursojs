/*
Declaração de função (Function hoisting)
Podendo chamar a função antes de criala no código


*/

falaOi();

function falaOi() {
    console.log('Oi!');
}

falaOi();

// First-class objects (Objetos de primeira classe)
const nome = 'Luiz';
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}

souUmDado();

function executaFuncao (funcao) {
    funcao(); // Recebe uma função e executa a mesma.
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrox function');
}
funcaoArrow();

// setInterval(function () {

// }, 1000);

// setInterval(Afuncao, 1000);

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    },
    falar2 () {
        console.log('Estou falando...');
    }
}

obj.falar();
obj.falar2();