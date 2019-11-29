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
