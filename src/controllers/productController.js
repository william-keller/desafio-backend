'use strict';

const express = require('express');
const Product = require('../models/productModel');


// ROTA PARA ADICIONAR PRODUTO
const addProductRouter = express.Router();
addProductRouter.post('/', async(req, res) => {
    try {

        // VALIDA SE O PRODUTO JÁ EXISTE
        const products = await Product.find({ product_id: req.body.product_id});
        if (products.length > 0) {
            throw new Error('Produto já existente');
        }
        
        const product = await Product.create(req.body);

        return res.status(201).send(product);

    } catch(exception) {
        return res.status(400).send({
            error : 'Não foi possivel adicionar o produto',
            code: exception.code,
            msg: exception.message
        });
    }
});


// ROTA PARA LISTAR TODOS PRODUTOS
const getProductsRouter = express.Router();
getProductsRouter.get('/', async(req, res) => {
    try {

        const products = await Product.find({});

        return res.send(products);

    } catch(exception) {
        return res.status(400).send({
            error : 'Não foi possivel buscar os produtos',
            code: exception.code,
            msg: exception.message
        });
    }
});

module.exports = {
    addProductRouter,
    getProductsRouter
};