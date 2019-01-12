var express = require('express');
var router = express.Router();
var productsDao = require('../models/DAO/productsDAO');

/* GET home page. */
router.get('/', function(req, res, next) {
  productsDao.listProducts(function(err, data) {
    res.render('index', { data: data, script: '/javascripts/index.js'});
  });
});

router.get('/cart', function(req, res, next) {
  res.render('cart', {script: '/javascripts/cart.js'});
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.get('/catalog', function(req, res, next) {
  res.render('catalog', {script: '/javascripts/catalog.js'});
});

router.get('/product/:prodId', function(req, res, next) {
  res.render('product');
});

module.exports = router;
