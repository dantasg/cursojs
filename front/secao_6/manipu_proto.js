/*
// New Object -> Object.propotype
const objA = {
    chaveA: 'A'
    // __proto__: Object proto
};

const objB = {
    chaveB: 'B'
    // __proto__: Object proto
};

const objC = new Object;
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveA)
console.log(objC.chaveB)
console.log(objC.chaveC);

*/

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50);
p1.aumento(50)
// p1.desconto(1q100)
console.log(p1)

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Bermuda'
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    }
});

p3.aumento(10)
console.log(p3);