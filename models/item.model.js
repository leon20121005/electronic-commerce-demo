const connection = require('../db/db.js');

const execute_callback = function(error, results, callback)
{
    if (error)
    {
        console.log('Error: ', error);
        callback(error, null);
    }
    else
    {
        console.log(results);
        callback(null, results);
    }
};

const Item = function(item)
{
    this.name = item.name;
    this.quantity = item.quantity;
    this.price = item.price;
};

Item.index = function(callback)
{
    const sql = 'SELECT * FROM items';
    connection.query(sql, function(error, results)
    {
        execute_callback(error, results, callback)
    });
};

Item.create = function(item, callback)
{
    const sql = 'INSERT INTO items SET ?';
    connection.query(sql, item, function(error, results)
    {
        execute_callback(error, results, callback)
    });
};

Item.show = function(id, callback)
{
    const sql = 'SELECT * FROM items WHERE id = ?';
    connection.query(sql, id, function(error, results)
    {
        execute_callback(error, results, callback)
    });
};

Item.update = function(id, item, callback)
{
};

Item.destroy = function(id, callback)
{
};

module.exports = Item;
