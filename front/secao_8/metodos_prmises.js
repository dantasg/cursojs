function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false);
            return;
        };

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei na promise');
        }, tempo);
    });

};

// Promice.all
// Para quando a ordem das promises não importa. Ela resovle todas e depois age.
// Caso uma caia no reject(), o código é finalizado.

// =========================================================================
// const promises = [
//     'Primeiro valor', 
//     esperaAi('Promise 1', 3000), 
//     esperaAi('Promise 2', 3000), 
//     esperaAi('Promise 3', 3000),
//     // esperaAi(1000, 3000),
//     'Outro valor'
// ];

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     }) 
// =========================================================================

// Promice.race
// Entrega somente o primeiro que resolver

// =========================================================================
// const promises = [
//     // 'Primeiro valor', // Sempre vaser entregue primero, por não ser uma promesa.
//     esperaAi('Promise 1 ', rand(1, 5)), 
//     esperaAi('Promise 2 ' , rand(1, 5)),
//     esperaAi('Promise 3 ', rand(1, 5)),
//     // esperaAi(1000, 3000),
//     // 'Outro valor'
// ];

// Promise.race(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     }) 
// =========================================================================

// Promice.resolve
// Resolve rapidamente 

// =========================================================================
// function baixaPagina() {
//     const inCache = false;

//     if(inCache) {
//         return Promise.resolve('Pagina em cache');
//     } else {
//         return esperaAi('Baixei a página', 5000);
//     }
// };

// baixaPagina()
//     .then(dadospagina => {
//         console.log(dadospagina);
//     })
//     .catch(e => console.log(e));
// =========================================================================

// Promice.reject
// Rejeita caso seja true e vai para o catch.

// =========================================================================
function baixaPagina() {
    const inCache = false;

    if(inCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a página', 5000);
    }
};

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));
// =========================================================================
