const mysql= require('mysql')

let db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'gameDB',
});


module.exports = db