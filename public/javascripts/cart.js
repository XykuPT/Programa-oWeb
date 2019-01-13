window.onload = function(){
    var cart = JSON.parse(window.localStorage.getItem('shoppingCart'));
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        var index = i + 1
        $('#cartRow').append("<tr><td id=\"Index\">" + index + "</td><td>" + cart[i].name +"</td><td>" + cart[i].price + "</td><td>" + cart[i].qty + "</td><td>" + cart[i].color + "</td><td><button class=\"btn\" onClick=\" deleteItem(" + index + ")\"> <i class=\"fa fa-trash\"></i></button></td></tr>")
        
        total = total + (parseInt(cart[i].price.split("€")[0]) * parseInt(cart[i].qty));
    }
    $('#cartRow').append("<tr><td>total</td><td></td><td><b>"+ total +"€ </b></td></tr>");
}

var deleteItem = function(id) {
        id = id - 1
        var item = JSON.parse(window.localStorage.getItem('shoppingCart'));
        item.splice(id, 1);

        window.localStorage.setItem("shoppingCart", JSON.stringify(item));
    
        location.reload();
    };

var clearCart = function() {
    window.localStorage.removeItem("shoppingCart");
    location.reload();

}