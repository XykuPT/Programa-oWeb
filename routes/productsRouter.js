var express = require('express');
var router = express.Router();
var productsDAO = require("../models/DAO/productsDAO");

router.get('/', function( res, next) {
    productsDAO.listProducts( function(result) {res.writeHead(200, {'Content-Type':'application/json'});
    res.send(result);
}, next)
});

module.exports = router;
