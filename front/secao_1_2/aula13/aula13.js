//               0123456789
let umaString = 'Um "texto"';

console.log(umaString);
console.log(umaString[0]); // U
console.log(umaString[4]); // t
console.log(umaString[-1]); // undefined
console.log(umaString.charAt(5)); // e
console.log(umaString.charAt(10)); // 

// ================================== //

console.log(umaString.concat(' em um lindo dia!'));
console.log(umaString + ' em um lindo dia!');
console.log(`${umaString} em um lindo dia!`);

// ================================== //

console.log(umaString.indexOf('texto')); // 4
console.log(umaString.indexOf('o', 3)); // 8

// Mesma coisa que a de cima, porém comaça procurando do útilmo.
console.log(umaString.lastIndexOf('o')); // 8
console.log(umaString.lastIndexOf('m', 4)); // 1

// ================================== //
// Expressão regular.
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/));
console.log(umaString.replace('Um', 'Outro'));

// ================================== //
console.log('=================================================');
// ================================== //

let outraString = 'O rato roeu a roupa do rei de Roma.';

console.log(outraString.replace('r', '#'));
console.log(outraString.length); // conta quantas letras tem
console.log(outraString.slice(2, 6)); // Só os caracteres que estiver entre os números
console.log(outraString.slice(-5, -1)); // Pega a string inteira e subtrai o valor que estiver no parenteses, e retorna os valores subtraidos.
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));

// ================================== //

console.log(outraString.split(' ')); // separa pelo caracter que estiver deentro do paresenteses
console.log(outraString.split('r'));
console.log(outraString.split(' ', 2));

// ================================== //

console.log(outraString.toUpperCase()); // Joga tudo pra maiusculo
console.log(outraString.toLowerCase()); // joga tudo pra minusculo
