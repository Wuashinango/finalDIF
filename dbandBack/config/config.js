//Aqui va toda la configuracion para la base de datos

const promise = require('bluebird');
const pg = require('pg-promise/typescript/pg-subset');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue){
    return stringValue
});

const databaseConfig = {
    'host': '127.0.0.1',
    'port': 5432,
    'database': 'pruebaCom',
    'user': 'postgres',
    'password': 'admin',
}

const db = pgp(databaseConfig);
module.exports = db;

