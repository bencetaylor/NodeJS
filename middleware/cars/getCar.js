var requireOption = require('../common').requireOption;

/**
 * Get the car of the given carID param
 *  If there is car with the ID, put it on res.tpl.cars, else redirect to /cars
 */

module.exports = function (objectrepository) {

    var carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {

        carModel.findOne({
            // Lehet hogy a carid nem lesz jó -> TODO carId
            _id: req.param('carid')
            //AssignedTo se kell valószínűleg...
        }).populate('_assignedto').exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/cars');
            }

            res.tpl.task = result;
            return next();
        });
    };

};