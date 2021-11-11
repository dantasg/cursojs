/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(p, 'prop')
... (spread)

// Já vimos
Object.keys (Retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
/*
    const produto = {nome: 'Produto', preco: 1.8};
    // const outraCoisa = produto;
    // const caneca = {
    //     ...produto,
    //     material: 'porcelana' 
    // };
    // const caneca = Object.assign({}, produto, { material: 'porcelana'});
    const caneca = { nome: produto.nome, preco: produto.preco};
    caneca.nome = 'Caneca';
    caneca.preco = 2.5;
    console.log(produto);
    console.log(caneca);
*/

const produto = {nome: 'Produto', preco: 1.8, material: 'Ainda não tem'};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
})
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Retorna as property

// console.log(Object.values(produto)); // retorna uma array com os valores

console.log(Object.entries(produto)); // Retorna uma array com as arrays do objeto

for (let [chave, valor] of Object.entries(produto)) {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
}