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


module.exports = function (objectrepository) {

    var customerModel = requireOption(objectrepository, 'customerModel');

    return function (req, res, next) {

        customerModel.findOne({
            _id: req.param('customerId')
            // AssignedTo ??? kell ez ide?
        }).populate('_assignedto').exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/cars');
            }

            res.tpl.task = result;
            return next();
        });
    };

};