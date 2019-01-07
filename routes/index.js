var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cart', function(req, res, next) {
  res.render('cart', {script: '/javascripts/cart.js'});
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.get('/catalog', function(req, res, next) {
  res.render('catalog');
});

router.get('/product', function(req, res, next) {
  res.render('product');
});

module.exports = router;
