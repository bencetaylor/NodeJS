var requireOption = require('../common').requireOption;

/**
 * Logs out the user
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};
