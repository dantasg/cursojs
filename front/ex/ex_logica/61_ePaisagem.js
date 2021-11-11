/*
Escreva uam função chamada ePaisagem que recebe dois argumentos, largura e altura
de uma imagem (number).

Retorne true se a imagem estiver no modo paisagem.
*/

// paissagem = deitada
// retrado = "em pé"


function ePaisagem (largura, altura) {
    let paissagem = false;

    if (largura > altura) {
        paissagem = true;
    } else if (largura === altura) {
        paissagem = true;
    }

    return paissagem;

    // return largura > altura ? true : false;
}

const largura = 10;
const altura = 23;

const paissagem = ePaisagem(largura, altura);

if (paissagem) {
    console.log(`Temos uma foto no modo paissagem de ${largura}px de largura, por ${altura}px de altura.`);
} else {
    console.log(`Temos uma foto no modo retrado de ${largura}px de largura, por ${altura}px de altura.`);
}