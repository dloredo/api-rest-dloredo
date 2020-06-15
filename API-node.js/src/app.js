const express = require('express')
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//IMPORTAR RUTAS
const usuariosRoutes = require('./routes/usuarios');

// Configuracion
app.set('port', process.env.PORT || 8000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//moddlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'apinodejs'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', usuariosRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Correr server
app.listen(app.get('port'), () => {
    console.log('El servidor esta corriendo en el puerto ' + app.get('port'));
});