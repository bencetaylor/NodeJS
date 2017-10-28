var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getCarListMW = require('../middleware/cars/getCarList');
var updateCarMW = require('../middleware/cars/updateCar');
var getCarMW = require('../middleware/cars/getCar');
var deleteCarMW = require('../middleware/cars/deleteCar');
var carModel = {};

module.exports = function (app) {

    var objectRepository = {
        carModel: carModel
    };

    /**
     * List all car
     */
    app.use('/cars',
        authMW(objectRepository),
        getCarListMW(objectRepository),
        renderMW(objectRepository, 'cars')
    );

    /**
     * Add new car
     */
    app.use('/cars/add',
        authMW(objectRepository),
        updateCarMW(objectRepository),
        renderMW(objectRepository, 'addcar')
    );

    /**
     * Edit the car's details
     */
    app.use('/cars/:carid/edit',
        authMW(objectRepository),
        getCarMW(objectRepository),
        updateCarMW(objectRepository),
        renderMW(objectRepository, 'addcar')
    );

    /**
     * Delete car
     * - then redirect to /cars
     */
    app.use('/cars/:carid/delete',
        authMW(objectRepository),
        getCarMW(objectRepository),
        deleteCarMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/cars');
        }
    );
};