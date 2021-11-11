// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(valor > this.saldo) {
        console.log('Você não tem esse valor na sua conta!')
        this.verSaldo();
        return;
    };
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}//${this.conta} || Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 100);

// ========================================================================= //

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Você não tem esse valor na conta.`)
        this.verSaldo();
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};


const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);
contaCorrente1.depositar(200);
contaCorrente1.sacar(100);
contaCorrente1.sacar(50);
contaCorrente1.sacar(151);

// ========================================================================= //

function ContaPoupança(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);

}

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

ContaPoupança.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Você não tem esse valor na conta.`)
        this.verSaldo();
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

console.log();

const contaPoupança1 = new ContaPoupança(11, 22, 0);
contaPoupança1.depositar(10);
contaPoupança1.sacar(10);
contaPoupança1.sacar(1);
