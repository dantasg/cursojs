module.exports = (req, res, next) => {
    
    if(req.body.cliente) {
        console.log();
        console.log('Passei no middleware global.');
        console.log();

        // req.body.cliente = req.body.cliente.replace() // Para mudar o valor;

        console.log(`Vi que você postou ${req.body.cliente}`);
    }

    next();
}