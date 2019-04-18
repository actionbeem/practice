const mysql = require('mysql');
const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '111111',
database: 'actionbeem'
});
db.connect();

module.exports = db;