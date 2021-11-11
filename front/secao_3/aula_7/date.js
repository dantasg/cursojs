// const data = new Date();
//const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date('2021-04-20');
// console.log(data);
// const data = new Date();
// console.log('Dia: ', data.getDate());
// console.log('Mês: ', data.getMonth() + 1); // Mês começa do 0
// console.log('Ano: ', data.getFullYear());
// console.log('Hora: ', data.getHours());
// console.log('Min: ', data.getMinutes());
// console.log('Seg: ', data.getSeconds());
// console.log('ms: ', data.getMilliseconds());
// console.log('Dia semana: ', data.getDay()); // 0 - Domingo, 6 - sábado

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    // const hora = zeroAEsquerda(data.getHours());
    // const min = zeroAEsquerda(data.getMinutes());
    // const seg = zeroAEsquerda(data.gerSeconds());

    return `${dia}/${mes}/${ano}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);