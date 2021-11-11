// defineProperty - defineProperties
function Produto(nome, preço, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave?
        value: estoque, // Valor
        writable: false, // Pode alterar?
        configurable: true // Pode reconfigurar a chave?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: false, // Mostra a chave?
            value: nome, // Valor
            writable: true, // Pode alterar?
            configurable: true // Pode reconfigurar a chave?    
        },
        preço: {
            enumerable: true, // Mostra a chave?
            value: preço, // Valor
            writable: true, // Pode alterar?
            configurable: true // Pode reconfigurar a chave?    
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); // Para ver todas as chaves

for (let chave in p1) {
    console.log(chave);
};

console.log(p1);