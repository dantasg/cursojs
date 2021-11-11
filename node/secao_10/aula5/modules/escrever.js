/*
const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

// flag "w" para apagar tudo que tiver no arquivo.
// flag "a" para escrever novamente, mantendo o que já tem no arquivo.

fs.writeFile(caminhoArquivo, 'Fase 1\n', { flag: 'w', encoding: 'utf-8' });
*/

const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
};

