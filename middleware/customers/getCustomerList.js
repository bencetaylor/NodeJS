var requireOption = require('../common').requireOption;

/**
 * Get the customers' list and put it on res.tpl.customers
 */
module.exports = function (objectrepository) {
    var customerModel = requireOption(objectrepository, 'customerModel');

    return function (req, res, next) {
        customerModel.find({
        }).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting customers'));
            }
            res.tpl.customers = results;
            return next();
        });
    };
};