var requireOption = require('../common').requireOption;

/**
 * Get the customer of the given customerID param
 *  If there is a customer with the ID, put it on res.tpl.customers, else redirect to /customers
 */
module.exports = function (objectrepository) {
    var customerModel = requireOption(objectrepository, 'customerModel');
    return function (req, res, next) {
        return next();
    };
};