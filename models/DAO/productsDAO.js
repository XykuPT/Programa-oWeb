var Mongo = require('./mongoConn');


exports.listProducts = function (callback) {
    Mongo.collection.find({}).toArray(function(err, result) {
        console.log(result)
        if (err) 
            callback(err, null);
        else 
            callback(null, result);
});  
}

exports.getProduct = function (id, callback) {
    Mongo.collection.find({prodId: parseInt(id)}).toArray(function(err, result) {
        if (err) 
            callback(err, null);
        else 
            callback(null, result);
});  
}

exports.getCategory = function (category, callback) {
    Mongo.collection.find({category: category}).toArray(function(err, result) {
        if (err) 
            callback(err, null);
        else 
            callback(null, result);
});  
}
