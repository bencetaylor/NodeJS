var requireOption = require('../common').requireOption;

/**
 * Delete the car  object
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.tpl.car === 'undefined') {
            return next();
        }
        res.tpl.car.remove(function (err) {
            if (err) {
                return next(err);
            }
            //redirect to all cars
            res.redirect('/cars/');
        });
    };
};