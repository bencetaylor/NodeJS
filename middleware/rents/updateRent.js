var requireOption = require('../common').requireOption;

/**
 * Update the rent if we have the data for it
 * update if we have a res.tpl.rents, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /rents/:rentID   ???
 */
module.exports = function (objectrepository) {
    var rentModel = requireOption(objectrepository, 'rentModel');
    return function (req, res, next) {
        return next();
    };
};