const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    // Todos os tipos são possiveis
    titulo: { type: String, required: true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports(Home);