exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: 'Genival', logado: true};
    res.render('index.ejs');
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return
};