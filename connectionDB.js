// CONNECT DB
const mysql = require('mysql');
const connection = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bookstore'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection
