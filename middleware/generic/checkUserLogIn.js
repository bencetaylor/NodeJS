var requireOption = require('../common').requireOption;

/**
 * Checks the users password
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};