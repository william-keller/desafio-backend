'use strict';

const database = require('../database/database');
const CreditCard = require('./creditCardModel').schema;

const TransactionSchema = new database.Schema({
    client_id: String,
    cart_id: String,
    client_name: String,
    total_to_pay: Number,
    credit_card: {
        type: CreditCard,
        ref: 'CreditCard'
    }
});

const Transaction = database.model('Transaction', TransactionSchema);

module.exports = Transaction;