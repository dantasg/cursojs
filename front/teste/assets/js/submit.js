class ValidaFormulario {
    constructor() {
        // Passamos para "this.formulario" a classe formulario, presente no nosso html.
        this.formulario = document.querySelector('.formulario');

        // Aqui chamos a função eventos();
        this.eventos();
    };

    eventos() {
        // Aqui capturamos o evento 'submit' de formluario, e passamos uma função a ser executado quando ocorrer esse envento.
        this.formulario.addEventListener('submit', e => {
            // Quando ocorrer o evento "submit" criamos e passamos o evento com essa letra "e";
            this.handleSubmit(e);

        });
    };

    handleSubmit(e) {
        // Aqui seguramos o submit
        e.preventDefault();

        // Aqui vamos criar as validações necessários para o envio do formulario;
        // Iremos fazer duas partes, uma para validação da senha e outra para as validações de todos os outros fatores.
        
        // Para validação dos campos.
        const campValid = this.isValid();

        // Para validação da senha.
        const senhaValida = this.passwordIsValid();
        
        // Aqui para sabermos se as duas partes são validas para podermos enviar o formulario.
        if(campValid && senhaValida) {
            alert('Será pertuntado se deseja confirmar o envio do formulário, caso enviado, você será redirecionado.');
            let resultado = confirm('Deseja enviar o formulario?');

            if (resultado){
                alert('Formulário enviado!');
                this.formulario.submit();
                this.redireciona();
                
            } else {
                window.location.reload();
            }
        };
    };

    // Aqui vamos começar as validações com a função "isValid"
    isValid() {
        let valid = true;

        // Aqui fazemos todos as classes (error-text) existentes sumirem após uma atualização da página e correção do mesmo.
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        };

        /**
         * Nenhum campo pode estar vazio; *
         * Usuário só poderá conter letras ou números; *
         * Usuário deverá ter entre 3 e 12 caracteres; * 
         */

        // Aqui pegamos todas os elementos que possuem a classe "validar".
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            
            // "label" recebe o texto presente no campo que ocorrer o erro.
            let label = campo.previousElementSibling.innerText;

            // Se campo estiver vazio.
            if(!campo.value) {
                this.criaError(campo, `O campo "${label}" não pode estar vazio.`);
                
                // valid recebe false, para não validarmos o formulario.  
                valid = false;
            };

            // Aqui capturamos a classe cpf.
            if(campo.classList.contains('cpf')) {
                // Aqui validamos a classe cpf.
                if(!this.validaCpfFormulario(campo)) valid = false;
                
            };

            // Aqui capturamos a classe usuário.
            if(campo.classList.contains('usuario')) {
                // Aqui validamos a classe usuario.
                if(!this.validaUsuario(campo)) valid = false;

            };
        
        };

        return valid;

    };

    // Aqui criamos a função para validar o cpf.
    validaCpfFormulario(campo) {
        // Aqui o cpf, recebe o CPF digitado.
        const cpf = new ValidaCpf(campo.value);

        // 187.596.300-61 para teste
        // Aqui chamamos a função valida() presente na classe ValidaCpf.
        if (!cpf.valida()) {
            this.criaError(campo, 'CPF inválido.');
            return false;
        };

        // Se o retorno de valida() for true, retornamos que o cpf é valido.
        return true;
    };

    validaUsuario(campo) {
        // usuario recebe o valor digitado pelo usuário.
        const usuario = campo.value;

        // Já colocamos true, e faremos as verificações e mudaremos quando necessário.
        let validUsuario = true;

        // Verifica o tamanho digitado do usuário.
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaError(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            validUsuario = false;

        };

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaError(campo, 'Nome de usuário precisa contar apenas e/ou números.');
            validUsuario = false;

        };

        return validUsuario;
    };

    passwordIsValid() {
        let validPassword = true;

        // Aqui capturamos o valor digitado em "senha".
        const password = this.formulario.querySelector('.senha');

        // Aqui capturamos o valor digitado em "repetir-senha".
        const repeatPassword = this.formulario.querySelector('.repetir-senha');

        if (password.value !== repeatPassword.value) {
            validPassword = false;
            this.criaError(password, 'Campo senha e repetir senha devem ser iguais.');
            this.criaError(repeatPassword, 'Campo senha e repetir senha devem ser iguais.');

        };

        if (password.value.length < 6 || password.value.length > 12) {
            validPassword = false;
            this.criaError(password, 'Senha precisa estar entre 6 e 12 caracteres.');

        };

        return validPassword;
        
    };

    // Aqui criamos a função criaError, para todos os possiveis erros gerados durante a validação do formulario.
    criaError(campo, msg) {
        // Aqui criamos a div, que gera um novo elemento dentro de formulario e consequentemente dentro do HTML.
        const div = document.createElement('div');

        // Aqui acresentamos uma possivel mensagem de texto para ser exibido em caso de erro. 
        div.innerHTML = msg;

        // Aqui configuramos a classe a ser criada em caso de erro.
        div.classList.add('error-text');

        // Aqui configuramos onde "div" deve ser exibido.
        campo.insertAdjacentElement('afterend', div);

    };

    redireciona() {
        window.location.replace("https://www.google.com");
    };
    
};

// Como falado no arquivo "valida_cpf.js" não instânciamos a função lá, porém como aqui é basicamente a mãe de todos aqui damos inicio a tudo.
const valida = new ValidaFormulario();
