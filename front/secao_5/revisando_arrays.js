// Valor por referência
//                    0         1        2          3        4 
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const nomes = new Array('Eduardo', 'Maria', 'Joana'); // Usando o método construtor
// nomes[1] = 'João';
// console.log(nomes);
// delete nomes[2];
// console.log(nomes);

// const novo = nomes;
// console.log(novo);
// novo.pop();
// console.log(novo);
// console.log(nomes); // Os dois são afetados pelos comandos dados.

// console.log(nomes.length); Para saber quantos elementos tem dentro do array

// nomes.pop(); Remove um elemento do array e retorna ele, podendo assim armazenar o mesmo dentro de uma constante.
// const removido = [nomes.pop()];
// console.log(nomes, removido);

// const removido = nomes.shift(); Remove e reotrna um item do começo da array, no caso o item "0"
// console.log(nomes, removido);

// Add
// nomes.push('João'); Adiciona um elemento ao array. Podendo adicionar quantas vezes quiser.
// console.log(nomes);

// nomes.unshift('João'); Adiciona ao inicio da array, movendo todos os indices dos elementos do array.
// console.log(nomes);

// const novo = nomes.slice(1, 3); Corta e passa apenas os numeros que estiverem entre 1 e 3. O 3 não sendo incluido dentro
// const novo = nomes.slice(1, -1); Aqui com o indice "-1" ele corta o último elemento da array e acresentas todos menos o cortado, podendo ser qualquer número, com o menos, ele vai cortar da quantidade passada pra ele.
// console.log(novo);

// const nome = 'Genival Dantas de Resende Neto';
// const nomes = nome.split(' ');
// console.log(nomes);

const nomes = [ 'Genival', 'Dantas', 'de', 'Resende', 'Neto' ];
const nome = nomes.join(' ');
console.log(nome);