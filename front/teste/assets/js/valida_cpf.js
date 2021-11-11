// 705.484.450-52 070.987.720-03

class ValidaCpf {
    constructor(cpfEnviado) {
        // Aqui estou criando o cpfLimpo, com todas as configurações necessárias.

        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, 
            enumerable: true,
            configurable: false, 
            value: cpfEnviado.replace(/\D+/g, '')
        });

    };

    // Aqui em tese é onde fazemos as validações do cpf
    // Geralmente o primeiro a ser feito, para daqui vermos as funções que teremos que programar para 
    valida() {
        // Verificando o tipo de arquivo recebido em cpfLimpo
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (typeof this.cpfLimpo !==  'string');

        // Outras verificações
        if (this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        // Aqui geramos o novo cpf
        this.geraNovoCpf();

        // Após todas as validações, comparamos o cpf criado a partir dos numeros recebido e vemos se ele comfere com o recebido e passado para cpfLimpo,
        // Se forem iguais, é retornado true, se forem diferente é retornado false.
        return this.novoCpf === this.cpfLimpo;
    
    };

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    };

    geraNovoCpf() {
        // Corta os dois últimos digitos de 'cpflimpo';
        const cpfParcial = this.cpfLimpo.slice(0, -2);

        // Chama e passa o cria digito, que iremos criar ali em baixo
        // Passamos cpfParcial, que foi cortado o último digito, para que podemos criar os dois digitos e assim comparar o que foi recebido e o que foi gerado, assim, sabermos se é valido ou não.
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        // Gera o novo cpf para compararmos;
        this.novoCpf = cpfParcial + digito1 + digito2;
    };

    criaDigito(cpfParcial) {
        // O tatal é onde armazenaremos o valor total para a conta, segundo como é a formula.
        let total = 0;

        // Reverso é o que vamos usar no laço.
        let reverso = cpfParcial.length + 1;

        // stringNumerica, vai receber o valor de cada digito presente em cpfParcial
        for(let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso --;
        };

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    };

};

// Como não vai ser um programa "solto" não precisamos instânciar ele aqui

// let validacpf = new ValidaCpf('705.484.450-52');

// if (validacpf.valida()){
//     console.log('Seu cpf é válido.');
// } else {
//     console.log('Seu cpf não é valido.');
// }