/*
Luiz otávio Miranda tem 30 anos, pesa 84 kg 
tem 1.8 de altura e seu IMC é de 25.95
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let ano_nascimento;
imc = peso / (altura * altura);
ano_nascimento = 2020 - idade;
/*console.log(nome, sobrenome, 'tem', idade, 'e pesa', peso, 'kg;');
console.log('Tem', altura, 'de altura', 'e seu IMC é de', imc, ';');
console.log(nome, 'nasceu em', ano_nascimento, '.');
*/
//console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg;');

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg;`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc};`);
console.log(`${nome} nasceu em ${ano_nascimento}.`);
