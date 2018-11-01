const express = require('express'); //definicao do express utilizando, require p/ receber pacote
const bodyParser = require('body-parser');

const app = express(); //cria aplicacao chamando minha funcao

//indicar a utilizacao do body com a funcao json
//json p/ que ele interprete quando minha requisicao for feita em json
app.use(bodyParser.json());

//funcao urleconded p/ interpretar parametros via url
app.use(bodyParser.urlencoded({extended: false}));

require('../API-NodeJS/controllers/authController')(app);

//listen seguido da porta q quero ouvir
app.listen(3000);