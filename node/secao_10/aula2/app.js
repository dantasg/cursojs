// Para fazer importarção, usasse um ponto para frente e dois pontos para trás

/*
    const Cachorro = require('./mod');

    const cachorrinho = new Cachorro('Dog');

    cachorrinho.latir();
*/
// Nome do arquivo
console.log(__filename);
// Nome da pasta 
console.log(__dirname);

// Para manipular pastas, a primeira virgula, volta uma pasta e a segunda entra na pasta escrita;
// Não a limite de quantidade de pastas "virgulas"
const path = require('path');
console.log(path.resolve(__dirname, '..', 'secao_11'));