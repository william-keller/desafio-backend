'use strict';

const database = require('../database/database');

const ProductSchema = new database.Schema({
    product_id: {
        type: String,
        require: true,
        unique: true
    },
    artist: String,
    year: Number,
    album: String,
    price: Number,
    store: String,
    thumb: String,
    date: String
});

const Product = database.model('Product', ProductSchema);

module.exports = Product;