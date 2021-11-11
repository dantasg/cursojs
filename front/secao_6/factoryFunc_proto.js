const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.beber} está bebendo.`);
    }
};

const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome) {
    
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Genival', 'Dantas');
console.log(p1);

const p2 = criaPessoa('Ana', 'Clara');
console.log(p2);
