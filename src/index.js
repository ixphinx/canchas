const express = require('express');
const app = express();
const path = require('path');


//Configuracion
app.set('port', 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');


//Middlewares



//Rutas
app.use(require('./routes/index'));


//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto ' + app.get('port'));
});