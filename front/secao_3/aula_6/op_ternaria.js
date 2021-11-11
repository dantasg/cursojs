// (condição)? : 'Valor para o verdadeiro' : 'Valor para o falso'; 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = null; 
const corPadrao = corUsuario || 'Preto';// Se o usuário "escolher" uma cor, a cor padrão passa a ser a cor escolhida

console.log(nivelUsuario, corPadrao);

//if (pontuacaoUsuario >= 1000) {
//    console.log ('Usuário VIP');
//} else {
//    console.log('Usuario normal');
//}
