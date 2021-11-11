/*
Operadores Lógicos
&& -> AND -> E   -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> or  -> OU  -> Qualquer uma expressão precisa ser verdadeira
!  -> NOT -> NÃO -> Nenhuma expressão pode ser verdadeira
*/
const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);
// ====================//
//const expressaoOr = true || false; // true
//const expressaoOr = false || true; // true
const expressaoOr = false || false; // false
console.log(expressaoOr);
// ====================//
