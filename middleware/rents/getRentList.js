var requireOption = require('../common').requireOption;

/**
 * Get the list of the rents and put it on res.tpl.rents
 */
module.exports = function (objectrepository) {
    var rentModel = requireOption(objectrepository, 'rentModel');
    return function (req, res, next) {
        return next();
    };
};