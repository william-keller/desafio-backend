'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const cartController = require('./controllers/cartController');
const historyController = require('./controllers/historyController');
const productController = require('./controllers/productController');
const transactionController = require('./controllers/transactionController');

app.use(config.baseURL + '/product', productController.addProductRouter);
app.use(config.baseURL + '/products', productController.getProductsRouter);

app.use(config.baseURL + '/add_to_cart', cartController.addToCart);
app.use(config.baseURL + '/buy', transactionController.proccessBuy);

app.use(config.baseURL + '/history', historyController.getHistory);

module.exports = app;