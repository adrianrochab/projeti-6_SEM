const mongoose = require('../database/index');
//const bcrypt = require('bcryptjs');



//definido os campos no BD
const UserSchema = new mongoose.Schema({
    nome: {
        type: String, 
        require: true, //obrigatorio
    },
    email: {
        type: String,
        unique: true, //unico
        required: true,
        lowercase: true, //caixa baixa
    },

    password: {
        type: String,
        required: true,
        select: false, //para q essa informação ñ apareca quando ouver uma chamada na tabela
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//ação antes de salvar 
/*UserSchema.pre('save', function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();

});
*/
//definindo o model, passando nome do model e seu Schema
const User = mongoose.model('User', UserSchema);

//exportar model
module.exports = User;
