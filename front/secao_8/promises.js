/*
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

esperaAi('Frase 1', rand(1, 3));
esperaAi('Frase 2', rand(1, 3));
esperaAi('Frase 3', rand(1, 3));
*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string') reject('Bad Value.')

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

esperaAi('Conexão com o BD.', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base.', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    })
    .then(resposta => {
        console.log('Exibe os dados na tela.');
    })
    .then(() => {
        console.log('Se despede do usúario.')
    })
    .catch(e => {
        console.log('Erro: ', e);
    });

console.log('Isso aqui vai ser exibido antes de qualquer pomisse.');