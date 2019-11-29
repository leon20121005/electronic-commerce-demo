const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

connection.connect(function(error)
{
    if (error)
    {
        console.log('Error: ', error);
    }
});

const sql = fs.readFileSync('./db/initialize.sql').toString().replace('\n', '');

connection.query(sql, function(error, results)
{
    if (error)
    {
        return console.log('Error: ', error);
    }
    console.log(results);
});

module.exports = connection;
