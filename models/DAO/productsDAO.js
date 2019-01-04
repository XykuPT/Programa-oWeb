/* MongoDB */
// var mongodb = require('./mongoConn.js');

// exports.listProducts = function(callback, next){
//     mongodb.db.collection("products").find({}).toArray(function(err, res){
//         if(err) next(err);
//         else callback(res);
//     })
// }

/* using json file*/
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)


