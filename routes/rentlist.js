var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getRentListMW = require('../middleware/rents/getRentList');
var updateRentMW = require('../middleware/rents/updateRent');
var getRentMW = require('../middleware/rents/getRent');
var deleteRentMW = require('../middleware/rents/deleteRent');
var rentModel = require('../models/rent');

module.exports = function (app) {

    var objectRepository = {
        rentModel: rentModel
    };

    /**
     * List all rent
     */
    app.use('/rents',
        authMW(objectRepository),
        getRentListMW(objectRepository),
        renderMW(objectRepository, 'rents')
    );

    /**
     * Add new rent
     */
    app.use('/rents/add',
        authMW(objectRepository),
        updateRentMW(objectRepository),
        renderMW(objectRepository, 'addrent')
    );

    /**
     * Edit the rent's details
     */
    app.use('/rents/:rentid/edit',
        authMW(objectRepository),
        getRentMW(objectRepository),
        updateRentMW(objectRepository),
        renderMW(objectRepository, 'addrent')
    );

    /**
     * Delete rent
     * - then redirect to /rents
     */
    app.use('/rents/:rentid/delete',
        authMW(objectRepository),
        getRentMW(objectRepository),
        deleteRentMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/rents');
        }
    );
};