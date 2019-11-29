const Item = require('../models/item.model');

exports.index = function(request, response)
{
    Item.index(function(error, results)
    {
        if (error)
        {
            return response.send(error);
        }
        response.send(results);
    });
};

exports.create = function(request, response)
{
    const item = new Item(request.body);
    Item.create(item, function(error, results)
    {
        if (error)
        {
            return response.send(error);
        }
        response.redirect('/items');
    });
};

exports.new = function(request, response)
{
    response.render('items/new.html');
};

exports.show = function(request, response)
{
    Item.show(request.params.id, function(error, results)
    {
        if (error)
        {
            return response.send(error);
        }
        response.send(results);
    });
};
