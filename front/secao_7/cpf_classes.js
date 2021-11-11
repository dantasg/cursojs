// 705.484.450-52 070.987.720-03
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, 
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    };

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.isSequencia()) return false;
        
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    };

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    };

    criaDigito(cpfParcial) {
        /*
        // Para ver se tá chegando aqui
        console.log('Chegamos no cria digito');

        // Transforma o cpfParcial em uma array
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length +1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo --;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
        */

        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso --;
        };

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    };

    geraNovoCpf() {
        // Corta os dois últimos digitos de cpfLimpo
        const cpfParcial = this.cpfLimpo.slice(0, -2);
                
        // Chama e passa para criar digito
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        // Gera o novo cpf
        this.novoCpf = cpfParcial + digito1 + digito2;
    }
};

let validacpf = new ValidaCpf('999.999.999.99');

if (validacpf.valida()){
    console.log('Seu cpf é válido.');
} else {
    console.log('Seu cpf não é valido.');
}