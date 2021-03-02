const express = require('express');

const app = express();
// app vai receber o express

const bodyParser = require('body-parser');

const indexRouter = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.json());
// converte bodyParser para o javascript

app.use('/', indexRouter);
app.use('/products', productRoute);

module.exports = app;