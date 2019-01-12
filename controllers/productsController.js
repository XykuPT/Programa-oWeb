var Mongo = require('./mongoConn');

exports.listProducts = function (req, res) {
    Mongo.find({}).toArray(function(err, result) {
        if (err) 
            next(err);
        else 
            res.send(result);
});  
}