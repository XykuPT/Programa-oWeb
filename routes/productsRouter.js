var express = require('express');
var router = express.Router();
var productModel = require('../models/products');

/* GET stand resource */
router.get('/', function(req, res, next) {
	var products = productModel.getProducts();
	var json = JSON.stringify(products);
	res.send(json);
});

module.exports = router;