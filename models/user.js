var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
    password: String
});

module.exports = User;