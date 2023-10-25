const UsuariosController = require('../controllers/usuariosController');
const { app } = require('../server');


module.exports = (app) => {
    app.get('/api/usuario/getAll', UsuariosController.getAll);
}

