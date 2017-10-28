var requireOption = require('../common').requireOption;

/**
 * Get the customers' list and put it on res.tpl.customers
 */
module.exports = function (objectrepository) {
    var customerModel = requireOption(objectrepository, 'customerModel');
    return function (req, res, next) {
        return next();
    };
};