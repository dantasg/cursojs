class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    };

    // Metodos de Instância
    aumentarVolume() {
        if(this.volume >= 100) {
            console.log('Você já está no máximo.');
            return;
        };
        
        this.volume += 2;
        console.log(`Volume: ${this.volume}.`);
    };

    diminuirVolume() {
        if(this.volume <= 0) {
            console.log(`Você já está no volume mínimo.`);
            return;
        };

        this.volume -= 2;
        console.log(`Volume: ${this.volume}.`);
    };

    // Método Estático
    static trocaPilha() {
        console.log('As pilhas foram trocadas.')
    };
};

// Instânciando uma classe e consequentemente os metodos.
const controle1 = new ControleRemoto('LG');

// Metodos de Instância (Precisa ser intânciado)
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

// Metodo estático (Não precisa instânciar ele)
ControleRemoto.trocaPilha(); 
