//            012345678910
const nome = 'Luiz Otávio';
//                 0       1        2 
const alunos = ['Luiz', 'Maria', 'João']; // Tentar colocar apenas um tipo de dado dentro da array
console.log(alunos);
console.log(alunos[1]);

//==================================================//
console.log('==================================================')
//==================================================//

alunos[2] = 'Eduardo'; // Alterando o indice
alunos[3] = 'Luiza'; // Caso não tenha o indice, será criado um novo
alunos[alunos.length] = 'Felipe'; // Mesma coisa, porém sem saber o último indice
console.log(alunos);

//==================================================//
console.log('==================================================')
//==================================================//

alunos.push('Otávio'); // Adiciona um novo elemente ao array
alunos.push('Vinicius'); // Adicionando ao fim
console.log(alunos);

//==================================================//
console.log('==================================================')
//==================================================//

alunos.unshift('Clara'); // Adiciona o no começo do array
alunos.unshift('Fábio');

console.log(alunos);

//==================================================//
console.log('==================================================')
//==================================================//

alunos.pop();// Remove o último elemento do array
const removido = alunos.pop(); // Também pode retornar

alunos.shift(); // Remove o primeiro indice
const removidoCome = alunos.shift(); // Tambpem pode retornar

//delete alunos[1]; // Remove da lista, mas o indice continua existindo

console.log(alunos);

//==================================================//
console.log('==================================================')
//==================================================//

console.log(alunos[50]); // undefined (não existe esse indice)

//==================================================//
console.log('==================================================')
//==================================================//
// Temos 5 elementos dentro do array

console.log(alunos.slice(0, 3)); // Mostra os elementos do indice 0 até o indice 3

console.log(alunos.slice(0, -1)); // Mostra os elementos do indice 0 até o último indice menos 1

console.log(typeof alunos);
