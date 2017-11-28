var requireOption = require('../common').requireOption;

/**
 * Get the rent of the given rentID param
 *  If there is a rent with the ID, put it on res.tpl.rents, else redirect to /rents
 */
module.exports = function (objectrepository) {
    var rentModel = requireOption(objectrepository, 'rentModel');

    return function (req, res, next) {

        commentModel.findOne({
            _id: req.param('rentid')

        }, function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/rent/' + req.param('rentid'));
            }

            res.tpl.comment = result;
            return next();
        });
    };
};