'use strict';

const express = require('express');
const History = require('../models/historyModel');


// ROTA PARA RETORNAR TODAS AS COMPRAS REALIZADAS
const getHistory = express.Router();
getHistory.get('/', async(req, res) => {
    try {
        const histories = await History.find({});
        return res.status(200).send(histories);
    } catch(exception) {
        return res.status(400).send({
            error : 'Não foi possivel retornar o histórico',
            msg: exception.message
        });
    }
});

// ROTA PARA RETORNAR TODAS AS COMPRAS REALIZADAS POR UM DETERMINADO CLIENTE
getHistory.get('/:clientId', async(req, res) => {
    try {
        const histories = await History.find({client_id: req.params.clientId});
        return res.status(200).send(histories);
    } catch(exception) {
        return res.status(400).send({
            error : 'Não foi possivel retornar o historico',
            msg: exception.message
        });
    }
});


module.exports = {
    getHistory
};
