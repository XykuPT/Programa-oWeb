var express = require('express');
var router = express.Router();
var request = require('request');
var productsDao = require('../models/DAO/productsDAO');
var apiUrl = 'http://localhost:3000/api';


/* GET home page. */
router.get('/', function(req, res, next) {
    var options = {
      method: 'GET',
      uri: apiUrl + '/products'
    };
    request(options, function(err, result){
      res.render('index', {data: JSON.parse(result.body), script: '/javascripts/index.js'});
    })
});

router.get('/cart', function(req, res, next) {
  res.render('cart', {script: '/javascripts/cart.js'});
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', {script: '/javascripts/checkout.js'}); 
});

router.get('/catalog', function(req, res, next) {
  var options = {
    method: 'GET',
    uri: apiUrl + '/products'
  };
  request(options, function(err, result){
    res.render('catalog', {data: JSON.parse(result.body), script: '/javascripts/catalog.js'});
  })
});

router.get('/catalog/:category', function(req, res, next) {
  var options = {
    method: 'GET',
    uri: apiUrl + '/category/' + req.params.category
  }
  request(options, function(err, result){
    res.render('catalog', {data: JSON.parse(result.body), script: '/javascripts/catalog.js'});
  })
});

router.get('/product/:prodId', function(req, res, next) {
  var options = {
    method: 'GET',
    uri: apiUrl + '/products/' + req.params.prodId
  }
  request(options, function(err, result){
    res.render('product', {data: JSON.parse(result.body), script: '/javascripts/product.js'});
  });
});

module.exports = router;
