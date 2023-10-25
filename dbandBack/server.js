const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;

//debuggear errores
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.disable('x-powered-by');


/*
* RUTAS DESDE LA CARPETA ROUTES
*/
const usuario = require('./routes/usuarioRoutes');

app.set('port', port);
server.listen(3000, '10.48.103.155' || 'localhost', function(){
    console.log('Aplicacion de NodeJS ' + process.pid + ' Iniciada...')
});

//LLAMAR A LAS RUTAS

usuario(app);









//RUTAS TEST
app.get('/', (req, res) => { 
    res.send('Ruta raiz del backend')
});

app.get('/test', (req, res) => { 
    res.send('Esta es la ruta del TEST')
});


// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server,
}

