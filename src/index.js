const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');


//Database
mongoose.connect('mongodb+srv://admin:huevon33@database-aizqn.gcp.mongodb.net/test?retryWrites=true&w=majority')
    .then(()=> console.log('Database OK'))
    .catch(e => console.log(e));

//Middlewares



//Rutas
app.use(require('./routes/index'));


//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto ' + app.get('port'));
});
