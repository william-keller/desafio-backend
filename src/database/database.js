'use strict';

const mongoose = require('mongoose');
const config = require('../config');

try {
    mongoose.connect(config.connectionString, {
        useCreateIndex: true,
        useNewUrlParser: true
    });
} catch(exception) {

}

mongoose.Promise = global.Promise;

module.exports = mongoose;
