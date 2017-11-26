var requireOption = require('../common').requireOption;

/**
 * Get the customer of the given customerID param
 *  If there is a customer with the ID, put it on res.tpl.customers, else redirect to /customers
 */

module.exports = function (objectrepository) {

    var customerModel = requireOption(objectrepository, 'customerModel');

    return function (req, res, next) {
        customerModel.findOne({
            'PID': req.param('PID')
        }).exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/customers');
            }
            res.tpl.task = result;
            return next();
        });
    };

};