require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('connect');
    })
    .catch(e => {
        console.log('Não conectado!');
        console.log(e);
    });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const meuMiddleware = require('./src/middlewares/middleware');
const e = require('express');

app.use(express.urlencoded( {extended: true} ));

app.use(express.static(path.resolve(__dirname, 'public')));

// Nosso prórpios middlewares;
app.use(meuMiddleware);

const sessionOptions = session({
    secret: 'niguem pode saber',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    } 
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('connect', () => {
    console.log('Conectado! ');
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });

});
