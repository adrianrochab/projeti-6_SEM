const mongoose = require('mongoose');

//criando conexao com banco 
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/noderest', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;



