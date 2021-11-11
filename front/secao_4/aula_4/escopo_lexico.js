const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio'; // Será exibido "Luiz", pois a função falaNome lembrará de onde ela foi instânciada
    falaNome();
}

usaFalaNome();