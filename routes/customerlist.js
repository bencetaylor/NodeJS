var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getCustomerListMW = require('../middleware/customers/getCustomerList');
var updateCustomerMW = require('../middleware/customers/updateCustomer');
var getCustomerMW = require('../middleware/customers/getCustomer');
var deleteCustomerMW = require('../middleware/customers/deleteCustomer');
var customerModel = require('../models/customer');

module.exports = function (app) {

    var objectRepository = {
        customerModel: customerModel
    };

    /**
     * List all customer
     */
    app.use('/customers',
        authMW(objectRepository),
        getCustomerListMW(objectRepository),
        renderMW(objectRepository, 'customers')
    );

    /**
     * Add new customer
     */
    app.use('/customers/add',
        authMW(objectRepository),
        updateCustomerMW(objectRepository),
        renderMW(objectRepository, 'addcustomer')
    );

    /**
     * Edit the customer's details
     */
    app.use('/customers/:customerid/edit',
        authMW(objectRepository),
        getCustomerMW(objectRepository),
        updateCustomerMW(objectRepository),
        renderMW(objectRepository, 'addcustomer')
    );

    /**
     * Delete customer
     * - then redirect to /customers
     */
    app.use('/customers/:customerid/delete',
        authMW(objectRepository),
        getCustomerMW(objectRepository),
        deleteCustomerMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/customers');
        }
    );
};