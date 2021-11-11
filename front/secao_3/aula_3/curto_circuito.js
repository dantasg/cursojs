/*
&& -> false && true -> false "o valor mesmo"
|| -> 

falsy: 
O valor literal de "false";
0;
'', "", ``;
null / undefined;
NaN

fora esses, todos outros valores retornam true
*/
console.log('Luiz Otávio' && 0 && 'Maria'); // retorna "0"
console.log('Luiz Otávio' && undefined && 'Maria'); // retorna "undefined"
console.log('Luiz Otávio' && NaN && 'Maria'); // retorna "NaN"
// ======================= //

function falaOi () {
    return 'Oi!';
}

let vaiExecutar = 'Genival!';

console.log(vaiExecutar && falaOi());

// ===================================================== //
console.log('==========================');
// ==================================================== //

console.log(0 || false || null || 'Luiz Otávio' || true);
