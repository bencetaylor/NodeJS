var requireOption = require('../common').requireOption;

/**
 * Delete the car  object
 */
module.exports = function (objectrepository) {
    var carModel = requireOption(objectrepository, 'carModel');
    return function (req, res, next) {
        return next();
    };
};