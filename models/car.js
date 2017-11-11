var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Car = db.model('Car', {
    brand: String,
    type: String,
    plate: String,
    price: Number
});

module.exports = Cars;