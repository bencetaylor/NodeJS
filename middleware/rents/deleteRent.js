var requireOption = require('../common').requireOption;

/**
 * Delete the rent object
 */
module.exports = function (objectrepository) {
    var rentModel = requireOption(objectrepository, 'rentModel');
    return function (req, res, next) {
        if (typeof res.tpl.rent === 'undefined') {
            return next();
        }
        res.tpl.rent.remove(function (err) {
            if (err) {
                return next(err);
            }
            return next();
        });
    };
};