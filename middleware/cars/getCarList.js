var requireOption = require('../common').requireOption;

/**
 * Get the car list and put it on res.tpl.cars
 */

module.exports = function (objectrepository) {

    var carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {

        carModel.find({
        // AssignedTo ???
        }).populate('_assignedto').exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting cars'));
            }

            res.tpl.tasks = results;
            return next();
        });
    };

};