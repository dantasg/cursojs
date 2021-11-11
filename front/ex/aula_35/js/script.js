function meuScopo () {
    const form = document.querySelector('.form'); // Para classe usar ponto, para Id usar "#"
    const resultado = document.querySelector('.resultado');

    const pessoa = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        //console.log(nome, sobrenome, peso, altura); // Para saber a classe selecionada
        //console.log(nome.value, sobrenome.value, peso.value, altura.value); // Para saber o valor dentro da classe

        const pessoa1 = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
         pessoa.push(pessoa1);

         resultado.innerHTML += `
         <p>Nome: ${nome.value} | Sobrenome: ${sobrenome.value} | Peso: ${peso.value} | Altura: ${altura.value}.</p>
         `;

         console.log(pessoa);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuScopo();
