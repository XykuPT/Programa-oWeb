var MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://FrancSerra:fserra@projectoweb-shard-00-00-nxojt.gcp.mongodb.net:27017,projectoweb-shard-00-01-nxojt.gcp.mongodb.net:27017,projectoweb-shard-00-02-nxojt.gcp.mongodb.net:27017/test?ssl=true&replicaSet=ProjectoWeb-shard-0&authSource=admin&retryWrites=true";

const client = new MongoClient(mongoUrl, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("products").collection("products");
  
  console.log(client.isConnected());
  
  exports.collection = collection;
});
