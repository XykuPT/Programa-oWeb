var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productsController');

var getAll = function(){
    product_controller.getAll();
}