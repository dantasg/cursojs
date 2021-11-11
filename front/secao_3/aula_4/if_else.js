/*
Entre 0  - 11 - Bom dia;
Entre 12 - 17 - Boa tarde;
Entre 18 - 23 - Boa noite;

|-> If; pode ser usado sozinho
|-> Else; Sempre que utilizo a palavra else, preciso de um if antes
|-> Podemos ter vários "else if" na checagem
|-> Só podemos ter um else na checagem
|-> Podemos usar condições sem "else if", usando apenas if e else
*/
const hora = 15;

if (hora >= 00 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!');
} else if (hora >18 && hora < 24){
    console.log('Boa noite!');
} else {
    console.log('Erro! Esse horário não existe');
}