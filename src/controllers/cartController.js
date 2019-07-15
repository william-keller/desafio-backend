'use strict';

const express = require('express');
const Product = require('../models/productModel');
const Cart = require('../models/cartModel');


// ROTA PARA ADICIONAR PRODUTO AO CARRINHO
const addToCart = express.Router();
addToCart.post('/', async(req, res) => {
    try {

        // VALIDA SE O PRODUTO EXISTE
        const products = await Product.find({ product_id: req.body.product_id });
        if (products.length == 0) {
            throw new Error('Produto inexistente');
        }
        
        const cart = await Cart.create(req.body);

        return res.status(201).send(cart);

    } catch(exception) {
        return res.status(400).send({
            error : 'Não foi possivel adicionar o produto ao carrinho',
            code: exception.code,
            msg: exception.message
        });
    }
});

module.exports = {
    addToCart
};