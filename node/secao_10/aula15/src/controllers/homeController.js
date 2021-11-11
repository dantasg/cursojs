exports.paginaInicial = (req, res, next) => {
    req.session.usuario = {}
    res.render('index');
    return
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return
};