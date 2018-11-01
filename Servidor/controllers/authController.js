const express = require('express');

//model de usuario pra controle
const User = require('../models/user');

//buscar no express uma funcao Router
const router = express.Router();

//definindo uma rota de cadastro
router.post('/register', async (req, res) =>{
//criar usuario quando a rota for chamada
    try{
        const user = await User.create(req.body)/*pegar todos parametros q o user estiver 
                                                 enviando e repassar para create 
                                                */
        return res.send({user});                                
//tratamento de erro     
    } catch (err){
        return res.status(400).send({error: 'Registro falhou'});

    }

});

module.exports = app => app.use('/auth', router);