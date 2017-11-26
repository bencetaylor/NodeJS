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

        if ((typeof req.body.brand === 'undefined') ||
            (typeof req.body.type === 'undefined') ||
            (typeof req.body.plate === 'undefined') ||
            (typeof req.body.price === 'undefined')) {
            return next();
        }

        var car = undefined;
        // Ha már létezik módosítjuk, egyébként újat hozunk létre
        if (typeof res.tpl.car !== 'undefined') {
            car = res.tpl.car;
        } else {
            car = new carModel();
        }
        car.brand = req.body.brand;
        car.type = req.body.type;
        car.plate = req.body.plate;
        car.price = req.body.price;

        car.save(function (err, result) {
            if (err) {
                return next(err);
            }
            // Remélhatőleg itt az "id"-től nem száll el :D
            return res.redirect('/car/' + result.id);
        });
    };

};