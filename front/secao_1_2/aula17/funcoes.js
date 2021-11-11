function saudacao(nome) {
    return `Bom dia ${nome}.`;
}

saudacao('Genival');
saudacao('Maria');

//==================================================//
console.log('==================================================')
//==================================================//

const variavel = saudacao('Luiz'); // Executa mas não retorna nada
console.log(variavel); // undefined

//==================================================//
console.log('==================================================')
//==================================================//
// Para retornar tem que colocar a função return

const variavel2 = saudacao('Thiago');
console.log(variavel2);

/*
Também pode criar colocando o return no padrão, porém as que não estiverem instanciadas
não iram funcionar (como as duas primeiras do nosso programa.)
*/

//==================================================//
console.log('==================================================')
//==================================================//

function soma(x = 0, y = 0) {
    return x + y;
}

const num1 = 2;
const num2 = 3;
const resultado = soma(num1, num2);
console.log(`O resultado da soma de ${num1} e ${num2} é ${resultado}.`);

//==================================================//
console.log('==================================================')
//==================================================//

const raiz = function (num) {
    return num ** 0.5;
};

console.log(raiz(9));
console.log(raiz(5));

//==================================================//
console.log('==================================================')
//==================================================//

const raizNovo = num => num ** 0.5

console.log(raizNovo(81));
console.log(raizNovo(100));
