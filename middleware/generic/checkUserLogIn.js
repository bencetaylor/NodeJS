var requireOption = require('../common').requireOption;

/**
 * Checks the users password
 */
module.exports = function (objectrepository) {
    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        //not enough parameter
        if ((typeof req.body === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }

        //lets find the user
        userModel.findOne({
            // Nem biztos hogy jó...
            password: req.body.password
        }, function (err, result) {
            //check password
            if (result.password !== req.body.password) {
                res.tpl.error.push('Wrong password!');
                return next();
            }
            //login is ok, save id to session
            req.session.userid = result._id;

            //redirect to / so the app can decide where to go next
            return res.redirect('/');
        });
    };
};