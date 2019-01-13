var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/apiController');

router.get('/products', ctrl.getProducts);
router.get('/products/:prodId', ctrl.getProduct);
router.get('/category/:category', ctrl.getCategory);

module.exports = router;
