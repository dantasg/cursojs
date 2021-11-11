const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    // Todos os tipos são possiveis
    titulo: { type: String, required: true},
    descricao: String
}, {
    writeConcern : {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports(Home);