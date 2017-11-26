var requireOption = require('../common').requireOption;

/**
 * Delete the customer object
 */
module.exports = function (objectrepository) {
   // var customerModel = requireOption(objectrepository, 'customerModel');
    return function (req, res, next) {
        if (typeof res.tpl.customer === 'undefined') {
            return next();
        }
        res.tpl.customer.remove(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/customers/');
        });
    };
};