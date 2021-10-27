const mysql = require('mysql2');
//Create a connection 

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shop'
});

module.exports = pool.promise();