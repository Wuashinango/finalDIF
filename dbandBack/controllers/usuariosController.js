const { json } = require('express');
const Usuario = require('../models/usuario');

module.exports = {

    async getAll(req, res, next){
        try{
            const data = await Usuario.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(200).json(data);
        }
        catch{
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al solicitar los usuarios'
            })
        }
    }
}