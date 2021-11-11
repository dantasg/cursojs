// 705.484.450-52 070.987.720-03

/*

7x  0x 5x 4x 8x 4x 4x 5x 0x 
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito)
Se o digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo dígito)
Se o digito for maior que 9, consideramos 0.



let cpf = '705.484.450-52';
let cpflimpo = cpf.replace(/\D+/g, '');
console.log(cpflimpo);
*/

function ValidaCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        },
        // set: function() {

        // }
    });
}

ValidaCPF.prototype.valida = function() {
    // Validações
    if (typeof this.cpfLimpo === 'undefined') return false; // Se o valor de cpdLimpo for undefined encerra o programa
    if (this.cpfLimpo.length !== 11) return false; // Se o cpf tem a quantidade certa de números
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); // Corta os dois últimos digitos do cpf
    // console.log(cpfParcial)
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    // console.log(digito1);
    // console.log(digito2);

    const novoCpf = cpfParcial + digito1 + digito2
    // console.log(novoCpf);

    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial); 
    // Coloca os 9 primeiros digitos dentro de uma array
    // console.log(cpfArray)
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');
// cpf.ValidaCPF();

if(cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}