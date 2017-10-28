var requireOption = require('../common').requireOption;

/**
 * Get the rent of the given rentID param
 *  If there is a rent with the ID, put it on res.tpl.rents, else redirect to /rents
 */
module.exports = function (objectrepository) {
    var rentModel = requireOption(objectrepository, 'rentModel');
    return function (req, res, next) {
        return next();
    };
};