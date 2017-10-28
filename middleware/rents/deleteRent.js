var requireOption = require('../common').requireOption;

/**
 * Delete the rent object
 */
module.exports = function (objectrepository) {
    var rentModel = requireOption(objectrepository, 'rentModel');
    return function (req, res, next) {
        return next();
    };
};