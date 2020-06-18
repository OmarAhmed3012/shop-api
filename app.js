const express = require('express');

const app = express();

const productRouters = require('./api/routes/product');
const orderRouters = require('./api/routes/order');

app.use('/products', productRouters);
app.use('/orders', orderRouters);

module.exports = app;