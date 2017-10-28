var requireOption = require('../common').requireOption;

/**
 * Delete the customer object
 */
module.exports = function (objectrepository) {
    var customerModel = requireOption(objectrepository, 'customerModel');
    return function (req, res, next) {
        return next();
    };
};