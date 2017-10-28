var requireOption = require('../common').requireOption;

/**
 * LEHET ROSSZ A KOMMENT!!!!!!!!
 *
 * Update customer if we have the data for it
 * update if we have a res.tpl.customers, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /customers/:customerID   ???
 */
module.exports = function (objectrepository) {
    var customerModel = requireOption(objectrepository, 'customerModel');
    return function (req, res, next) {
        return next();
    };
};