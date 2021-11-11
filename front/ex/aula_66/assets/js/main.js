function relogio () {
    function criaHoraDosSegundos (seg) {
        const data = new Date(seg * 1000); // Aqui é recebido em milessimo de segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    const status = document.querySelector('.status');
    let segundo = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function (){
            segundo++;
            relogio.innerHTML = criaHoraDosSegundos(segundo);
        }, 1000);
    }
    /* 
    Outra forma de fazer o evente listener
    Assim também podemos remover a parte de selecionar os botões de cima (
        const iniciar = document.querySelector('.iniciar');
        const pausar = document.querySelector('.pausar');
        const zerar = document.querySelector('.zerar');
    ), pois já estamos fazendo tudo no mesmo código.
    */
    // document.addEventListener('click', function(event){
    //     const elemento = event.target;
    //     if (elemento.classList.contains('iniciar')){
    //         relogio.classList.remove('.pausado');
    //         clearInterval(timer);
    //         status.innerHTML = 'Você iniciou o timer!';
    //         iniciaRelogio();
    //     }
    //     if (elemento.classList.contains('pausar')){
    //         relogio.classList.add('.pausado');
    //         status.innerHTML = 'Você pausou o timer!';
    //         clearInterval(timer);
    //     }
    //     if (elemento.classList.contains('zerar')){
    //         status.innerHTML = 'Você zerou o timer!';
    //         relogio.classList.remove('.pausado');
    //         clearInterval(timer);
    //         relogio.innerHTML = '00:00:00';
    //     segundo = 0;
    //     }
    // });

    iniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado');
        relogio.classList.add('iniciado');
        clearInterval(timer);
        status.innerHTML = 'Você iniciou o timer!';
        iniciaRelogio();
    });

    pausar.addEventListener('click', function(event){
        relogio.classList.remove('iniciado');
        relogio.classList.add('pausado');
        status.innerHTML = 'Você pausou o timer!';
        clearInterval(timer);
    });
    zerar.addEventListener('click', function(event){
        status.innerHTML = 'Você zerou o timer!';
        relogio.classList.remove('pausado');
        relogio.classList.remove('iniciado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundo = 0;
    });
}

relogio();
