var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Rent = db.model('Rent', {
    _car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    },
    _customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    startDate: Date,
    endDate: Date
});

module.exports = Rents;