class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado.`);
            return;
        };

        this.ligado = true;
    };

    desligar() {
        if (!this.ligado){
            console.log(`${this.nome} já está desligado.`);
            return;
        };

        this.ligado = false;
    };
};

// const d1 = new DispositivoEletronico('Smartphone');

// console.log(d1);

// d1.ligar();

// console.log(d1);

// d1.ligar();


// ============================================== //

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);

        this.temWifi = temWifi;
    };

    ligar() {
        console.log('Alterado')
    };

    falaOi() {
        console.log('Oi');
    };
};


const s1 = new Smartphone('Iphone', 'Preto', 'Iphone 10');

s1.ligar()

console.log(s1);

const t1 = new Tablet('Ipad', true);
console.log(t1);
t1.falaOi();
