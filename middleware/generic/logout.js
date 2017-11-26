var requireOption = require('../common').requireOption;

/**
 * Logs out the user
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.destroy(function (err) {
            return next();
        });
    };
};
