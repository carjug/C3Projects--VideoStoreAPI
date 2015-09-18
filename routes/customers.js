var express = require('express');
var router = express.Router();
var customer_exports = require('../controllers/customers');

// GET CUSTOMER ROUTES
router.get('/', function(req, res, next) {
  return customer_exports.customersController.customers(req, res);
});

router.get('/names/:name', function(req, res, next) {
  return customer_exports.customersController.customers_by_name(req, res);
});

module.exports = router;
