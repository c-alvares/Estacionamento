const mysql = require('mysql');

const con = mysql.createConnection({
    user: 'root',
    host: 'logalhost',
    database: 'estacionamento'
});

module.exports = con;