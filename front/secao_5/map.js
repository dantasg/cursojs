// Dobre os números
//               0   1   2  2  4  5  6  7  8  9   10  11  12
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosDobro = numeros.map(valor => valor * 2);
// console.log(numerosDobro);


// Para cada elemento:
//  Retorne apenas um string com o nome da pessoa
//  Remova apenas a chave "nome" do obejto
//  Adicione uma chave id em cada obejto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const apenasUma = pessoas.map(obj => obj.nome);

const idades = pessoas.map(obj => ({idade: obj.idade}));

const comId = pessoas.map(function(obj, indice){
    // obj.id = (indice + 1) * 1000 // Mexendo no objeto original
    // return obj

    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1000
    return newObj
});

console.log(apenasUma);
console.log(idades);
console.log(comId)