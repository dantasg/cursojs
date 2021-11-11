const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

// /profiles/12345?campanha=googleads
// /profiles/12345?campanha=googleads&nome_campanha=nao_sei

app.get('/', (req, res) => {

    res.send(`
        <form action="/" method="POST">
        Nome : <input type="text" name="nome">
        <button>Enviar Formulário</button>
        </form>
    `);

});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    // res.send(req.params.idUsuarios);
    // res.send(req.params);// É um objeto qualquer;
    res.send(req.query);

})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
