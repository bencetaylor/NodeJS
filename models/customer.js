var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Customer = db.model('Customer', {
    name: String,
    email: String,
    PID: String,
    license: String,
    birthDate: Date
});

module.exports = Customer;