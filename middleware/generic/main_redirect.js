/**
 * When the user visits the / main page, redirected to
 *    - /login when not signed in
 *    - /inventory when signed in
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof req.session.userid === 'undefined') {
            return res.redirect('/login');
        } else {
            return res.redirect('/tasks');
        }
    };
};