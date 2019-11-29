const express = require('express');
const app = express();
const body_parser = require('body-parser');

app.engine('html', require('express-art-template'));

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

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
