const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Consts = require('./Consts/Consts')

const productRouters = require('./api/routes/product');
const orderRouters = require('./api/routes/order');

mongoose.connect('mongodb+srv://user:' + Consts.MONGOPASS + '@cluster0-ddq7s.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT', 'PATCH', 'POST', 'DELETE', 'GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/products', productRouters);
app.use('/orders', orderRouters);

app.use((req, res, next) => {
    const error = new Error('Error happend');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;