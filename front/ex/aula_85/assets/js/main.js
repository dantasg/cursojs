class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    };

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);

        })
    };

    handleSubmit(e) {
        // Para segurar o envio do formulario
        e.preventDefault();
        // console.log('formulario não enviado ...');

        const campValid = this.isValid();

        const senhasValidas = this.passwordIsValid();
        
        if(campValid && senhasValidas) {
            alert('Formulario enviado.');
            this.formulario.submit();
        }
    };

    isValid() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        };

        for (let campo of this.formulario.querySelectorAll('.validar')) {

            let label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaError(campo, `O campo "${label}" não pode estar vazio.`)
                valid = false;
                // console.log('!campo.value   ' + valid)
            };

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
                // console.log('cpf   ' + valid)
            };

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
                // console.log('usuario   ' + valid)
            };
        };
        // console.log(valid);
        return valid;
    };

    passwordIsValid() {
        let validPassword = true;

        const password = this.formulario.querySelector('.senha');
        const repeatPasswaor = this.formulario.querySelector('.repetir-senha');

        if(password.value !== repeatPasswaor.value){
            validPassword = false;
            this.criaError(password, 'Campos senha e repetir senha precisam ser iguais.' );
            this.criaError(repeatPasswaor, 'Campos senha e repetir senha precisam ser iguais.' )
        };

        if(password.value.length < 6 || password.value.length > 12) {
            validPassword = false;
            this.criaError(password, 'Senha precisa estar entre 6 e 12 caracteres.');
        };

        return validPassword;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let validUsuario = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaError(campo, 'Usuário presica ter entre 3 e 12 caracteres.');
            validUsuario = false;
        };

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaError(campo, 'Nome de usuário precisa contar apenas e/ou número.')
            validUsuario = false;
        }

        return validUsuario;
    }

    validaCPF(campo) {
        const cpf = new ValidaCpf(campo.value);

        // 187.596.300-61 para teste
        if (!cpf.valida()) {
            this.criaError(campo, 'CPF inválido.');
            return false
        };

        return true;
    }

    criaError(campo, msg){

        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');

        campo.insertAdjacentElement('afterend', div);
        

    }
}

const valida = new ValidaFormulario();