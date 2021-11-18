exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo o cliente.');
    res.render('index');
    console.log(`Olha o que tem na req.session.nome = ${req.session.nome}`)
    next();
    // Caso acabe aqui podemos tirar o next e colocar um return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return
};