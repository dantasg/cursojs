// defineProperty -> Getter e Setters
function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave?
        // value: estoque, // Valor
        // writable: false, // Pode alterar?
        configurable: true, // Pode reconfigurar a chave?
        get: () => estoque,
        set: valor => {
            if(typeof valor !== 'number') {
                throw new TypeError('Digite um número.')
            };
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 45;
console.log(p1);

console.log(p1.estoque);