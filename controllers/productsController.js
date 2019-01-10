var Mongo = require('./mongoConn');

exports.listProducts = function (callback,next) {
    Mongo.find({}).toArray(function(err, result) {
        if (err) 
            next(err);
        else 
            callback(result);
});  
}