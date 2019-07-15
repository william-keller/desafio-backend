'use strict';

const database = require('../database/database');

const HistorySchema = new database.Schema({
    card_number: String,
    client_id: String,
    value: Number,
    order_id: String
});

const History = database.model('History', HistorySchema);

module.exports = History;