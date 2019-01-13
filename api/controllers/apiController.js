var productsDao = require('../../models/DAO/productsDAO');

var sendJSONresponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.getProducts = function(req, res) {
    productsDao.listProducts(function(err, data) {
        if(err) {
            sendJSONresponse(res, 404, err)
        } else {
            sendJSONresponse(res, 200, data);
        }
      });
}

module.exports.getProduct = function(req, res) {
    productsDao.getProduct( req.params.prodId, function(err, data) {
        if(err){
            sendJSONresponse(res, 404, err);
        } else {
            sendJSONresponse(res, 200, data);
        }
    });
}

module.exports.getCategory = function(req, res){
    productsDao.getCategory( req.params.category ,function(err, data) {
        if(err){
            sendJSONresponse(res, 404, err);
        } else {
            sendJSONresponse(res, 200, data);
        }
    });
}