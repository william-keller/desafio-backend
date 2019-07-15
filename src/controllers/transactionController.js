'use strict';

const express = require('express');
const Cart = require('../models/cartModel');
const Transaction = require('../models/transactionModel');


// ROTA PARA FINALIZAR A COMPRA
const proccessBuy = express.Router();
proccessBuy.post('/', async(req, res) => {
    try {

        // VALIDA SE O CARRINHO EXISTE
        const carts = await Cart.find({cart_id: req.body.cart_id});
        if (carts.length == 0) {
            throw new Error('Carrinho inexistente');
        }

        // VALIDA SE JÁ FOI EFETUADO PROCESSAMENTO DE COMPRA PARA ESTE CARRINHO
        const transactions = await Transaction.find({cart_id: req.body.cart_id});
        if (transactions.length > 0) {
            throw new Error('Já foi efetuado processamento de compra para este carrinho');
        }
        
        const transaction = await Transaction.create(req.body);

        return res.status(201).send(transaction);

    } catch(exception) {
        return res.status(400).send({
            error : 'Não foi possivel processar a compra',
            code: exception.code,
            msg: exception.message
        });
    }
});

module.exports = {
    proccessBuy
};