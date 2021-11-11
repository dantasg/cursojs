// Escreva um função que recebe 2 números e retorne o maior deles

function retornaMaior (num1, num2) {
    if (num1 > num2) {
        return `O primeiro número é maior ${num1}`;
    }

    if (num2 > num1){
        return `O segundo número é maior ${num2}`;
    }

    if (num1 === num2) {
        return `Os números são iguais ${num1} = ${num2}`;
    }

    // return num1 > num2 ? num1 : num2;
}

const num1 = 99;
const num2 = 5;

console.log(retornaMaior(num1, num2));
// Pode-se fazer assim:

const maior = (num1, num2) => num1 > num2 ? num1 : num2;
