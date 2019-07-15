'use strict';

const database = require('../database/database');

const CartSchema = new database.Schema({
    cart_id: String,
    client_id: String,
    product_id: String,
    date: String,
    time: String
});

const Cart = database.model('Cart', CartSchema);

module.exports = Cart;