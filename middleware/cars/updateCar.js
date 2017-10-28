var requireOption = require('../common').requireOption;

/**
 * Update car if we have the data for it
 * update if we have a res.tpl.cars, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /cars/:carID   ???
 */
module.exports = function (objectrepository) {
    var carModel = requireOption(objectrepository, 'carModel');
    return function (req, res, next) {
        return next();
    };
};