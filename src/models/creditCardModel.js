'use strict';

const database = require('../database/database');

const CreditCardSchema = new database.Schema({
    card_number: String,
    card_holder_name: String,
    cvv: Number,
    exp_date: String
});

const CreditCard = database.model('CreditCard', CreditCardSchema);

module.exports = CreditCard;