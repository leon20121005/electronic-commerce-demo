const express = require('express');
const app = express();

const PORT = 3000

const item_route = require('./routes/item.route');

app.use('/items', item_route);

app.get('/', function(request, response)
{
    response.send('Hello world!')
});

app.listen(PORT, function()
{
    console.log(`Example app listening on port ${PORT}!`);
});
