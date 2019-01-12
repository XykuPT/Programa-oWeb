var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/models/products.json', 'utf8'));

exports.getProducts = function() {
    return obj;
};