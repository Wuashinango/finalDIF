const db = require('../config/config'); //acceder al archivo 

const Usuario = {};

//metodo
Usuario.getAll = () => {
    `
    SELECT
        *
    FROM
        usuarios
    `
    return db.manyOrNone(sql);
}

module.exports = Usuario;