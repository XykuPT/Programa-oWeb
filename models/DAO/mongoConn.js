var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/projectoWeb";

MongoClient.connect(mongoUrl, {poolSize: 10},
  function(err, db){
      if (err){    
        console.log("Unable to connect");
      }else {
        console.log("connection established")
        exports.db = db;
      }
  }
);
