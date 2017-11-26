var requireOption = require('../common').requireOption;

/**
 *
 * Update customer if we have the data for it
 * update if we have a res.tpl.customers, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /customers/:customerID
 */
module.exports = function (objectrepository) {
    var customerModel = requireOption(objectrepository, 'customerModel');
    return function (req, res, next) {
        return next();
    };

    return function (req, res, next) {

        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.email === 'undefined') ||
            (typeof req.body.PID === 'undefined') ||
            (typeof req.body.license === 'undefined') ||
            (typeof req.body.birthDate === 'undefined')){
            return next();
        }
        var customer = undefined;
        // Ha már létezik módosítjuk, egyébként újat hozunk létre
        if (typeof res.tpl.customer !== 'undefined') {
            customer = res.tpl.customer;
        } else {
            customer = new customerModel();
        }
        customer.name = res.body.name;
        customer.email = res.body.email;
        customer.PID = res.body.PID;
        customer.license = res.body.license;
        customer.birthDate = res.body.birthDate;

        customer.save(function (err, result) {
            if (err) {
                return next(err);
            }
            //??? ID tuti jó ???
            return res.redirect('/customer/' + result.id);
        });
    };
};