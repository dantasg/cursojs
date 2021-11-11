function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false 
    });
}

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

setInterval(function () {
    console.log(mostraHora());
}, 10000); // função anônima

const timer = setInterval(function() {
    console.log(mostraHora());
}, 10000);

setTimeout (function(){
    console.log(mostraHora());
}, 100);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);