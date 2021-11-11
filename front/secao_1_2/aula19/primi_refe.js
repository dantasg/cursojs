/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
- Valores copiados

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa'; // Não muda o valor de "b"
console.log(a, b);

Referência (mutável) - array, object, function
- Passados por referência

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4); // Ambos são alterados
console.log(a, b); 

b.pop(); // Ambos são alterados
console.log(a, b);

Para copiar: 

let a = [1, 2, 3];
let b = [...a];
console.log(a, b);

a.push(4); // Ambos são alterados
console.log(a, b); 

b.pop(); // Ambos são alterados
console.log(a, b);

Com objeto é a mesma coisa

const a = {
    nome: 'Luiz', 
    sobrenome: 'Otávio'
};

const b = a;

a.nome = 'João';
console.log(b);

Para copiar: 

const a = {
    nome: 'Luiz', 
    sobrenome: 'Otávio'
};

const b = [...a];

a.nome = 'João';
console.log(b);
*/