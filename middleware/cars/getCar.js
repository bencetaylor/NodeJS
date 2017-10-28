var requireOption = require('../common').requireOption;

/**
 * Get the car of the given carID param
 *  If there is car with the ID, put it on res.tpl.cars, else redirect to /cars
 */
module.exports = function (objectrepository) {
    var carModel = requireOption(objectrepository, 'carModel');
    return function (req, res, next) {
        return next();
    };
};