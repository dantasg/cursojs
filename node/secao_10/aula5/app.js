const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');


// Escrever

// const pessoas = [
//     { nome : 'João' },
//     { nome : 'Maria' },
//     { nome : 'Eduardo' },
//     { nome : 'Luiza' },
//     { nome : 'Genival' },
//     { nome : 'Clara' },
//     { nome : 'Dantas' }

// ];

// const json = JSON.stringify(pessoas, '', 2); 

// escreve(caminhoArquivo, json);


// Ler

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
};

function renderizaDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val.nome));
    
};

lerArquivo(caminhoArquivo);

// Uma opção
// const dadosArquivos = lerArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));