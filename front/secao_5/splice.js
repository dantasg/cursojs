//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(4, 1);
// console.log(nomes, removidos);

// removidos.push(nomes.splice(3, 2)); // Apartir do 3 elemine 2 elementos
// console.log(nomes, removidos);

// removidos.push(nomes.splice(-2, 1));
// console.log(nomes, removidos);

// removidos.push(nomes.splice(2, Number.MAX_VALUE)); // Eliminar todos do 2 em diante
// console.log(nomes, removidos);

// nomes.splice(3, 0, 'Luiz');
// console.log(nomes);

// nomes.splice(4, 1, 'Genival');
// console.log(nomes);

// nomes.splice(2, 2, 'Vinicius');
// console.log(nomes);

// Pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// Push
// nomes.splice(nomes.length, 0, 'Luiz');
// console.log(nomes)

// Unshift
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);