$('.dropdown-menu li').on('click', function() {
    $('#size').html($(this).html());
}); 

$('.btnMinus').on('click', function(){
    $('.qtyInput').val(parseInt($('.qtyInput').val()) - 1).change();
    if(parseInt($('.qtyInput').val()) < parseInt($('.qtyInput').attr("min")))
        $('.qtyInput').val(1).change();
});

$('.btnPlus').on('click', function(){
    $('.qtyInput').val(parseInt($('.qtyInput').val()) + 1).change();
});

$('.colorBtn').on('click',function(){
    if($('.colorGrp').find('.active').length != 0)
        $('.colorGrp').find('.active').removeClass('active')

    $(event.target).addClass('active');
})

$('.addToCart').on('click',function(){
    var name = $('#name').text();
    var price = $('#price').text();
    var qty = parseInt($('.qtyInput').val());
    var color = $('.colorGrp').find('.active').attr('id') || $('.colorBtn').first().attr('id');

    var existingProducts = JSON.parse(window.localStorage.getItem('shoppingCart')) instanceof Array ?  JSON.parse(window.localStorage.getItem('shoppingCart')) : [] ;
    var product = {
        name: name,
        price: price,
        qty: qty,
        color: color
    }
    existingProducts.push(product);
    window.localStorage.setItem("shoppingCart", JSON.stringify(existingProducts));
    
    $('#alert').append("  <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\"><strong>Holy guacamole!</strong> You should check in on some of those fields below.<button id=\"alertClose\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>");
});


