const pessoas = [
    { id: 3, nome: 'Genival'},
    { id: 2, nome: 'Vinicius'},
    { id: 1, nome: 'Leticia'}
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa}
// }


const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
};

console.log(novasPessoas);
console.log(novasPessoas.get(2));


