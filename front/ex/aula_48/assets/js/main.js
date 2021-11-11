// const texto = document.querySelector('.container h1');

// function formaNomeSemana (diaSemana) {
//     let nomeSemana;

//     switch (diaSemana){
//         case (0):
//             nomeSemana = 'Domindo';
//             return nomeSemana;
//         case (1):
//             nomeSemana = 'Segunda-feira';
//             return nomeSemana;
//         case (2):
//             nomeSemana = 'Terça-feira';
//             return nomeSemana;
//         case (3):
//             nomeSemana = 'Quarta-feira';
//             return nomeSemana;
//         case (4):
//             nomeSemana = 'Quinta-feira';
//             return nomeSemana;
//         case (5):
//             nomeSemana = 'Sexta-feira';
//             return nomeSemana;
//         case (6):
//             nomeSemana = 'Sábado';
//             return nomeSemana;
//     }
// }

// function formaNomeMes (mes) {
//     let nomeMes;

//     switch (mes) {
//         case (1):
//             nomeMes = 'Janeiro';
//             return nomeMes;
//         case (2):
//             nomeMes = 'Fevereiro';
//             return nomeMes;
//         case (3):
//             nomeMes = 'Março';
//             return nomeMes;
//         case (4):
//             nomeMes = 'Abril';
//             return nomeMes;
//         case (5):
//             nomeMes = 'Maio';
//             return nomeMes;
//         case (6):
//             nomeMes = 'Junho';
//             return nomeMes;
//         case (7):
//             nomeMes = 'Julho';
//             return nomeMes;
//         case (8):
//             nomeMes = 'Agosto';
//             return nomeMes;
//         case (9):
//             nomeMes = 'Setembro';
//             return nomeMes;
//         case (10):
//             nomeMes = 'Outubro';
//             return nomeMes;
//         case (11):
//             nomeMes = 'Novembro';
//             return nomeMes;
//         case (12):
//             nomeMes = 'Dezembro';
//             return nomeMes;
//     }
// }

// function formataMin(num) {
//     return num >= 10 ? num : `0${num}`;
// }


// const data = new Date();
// const dia = data.getDate();
// const ano = data.getFullYear();
// const diaSemana = data.getDay();
// const mes = data.getMonth() + 1;
// const nomeSemana = formaNomeSemana(diaSemana);
// const nomeMes = formaNomeMes(mes);
// const hora = data.getHours();
// const min = formataMin(data.getMinutes());

// texto.innerHTML = `${nomeSemana},  ${dia} de ${nomeMes} de ${ano} \n ${hora}:${min}`;

const h1 = document.querySelector('.container h1');
const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     // timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});