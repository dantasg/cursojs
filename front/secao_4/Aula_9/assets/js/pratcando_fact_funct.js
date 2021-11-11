function criaCalculadora() {
    return {
        // Atributos para cima
        display: document.querySelector('.display'),

        // Meotodos para baixo
        inicia() {
            // this -> calculadora
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida!')
                    return;
                }

                this.display.value = String(conta);
            } catch(event) {
                alert('Conta inválida!')
                return;
            }
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', event =>{
                const el = event.target;

                if(el.classList.contains('btn-num')) {
                    // this -> document
                    this.btnParaDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                };

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

    };
}

const calculadora = criaCalculadora();

calculadora.inicia();
