var mainRedirectMW = require('../middleware/generic/main_redirect');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLogInMW = require('../middleware/generic/checkUserLogIn');
var renderMW = require('../middleware/generic/render');
var auth = require('../middleware/generic/auth');
var logoutMW = require('../middleware/generic/logout');
var userModel = {};

module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /**
     * Main page
     */
    app.get('/',
        mainRedirectMW(objectRepository)
    );

    /**
     * Login page
     */
    app.use('/login',
        inverseAuthMW(objectRepository),
        checkUserLogInMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    /**
     * Main page
     */
    app.get('/logout',
        logoutMW(objectRepository),
        function(req, res, next) {
            res.redirect('/');
        }
    );
};
