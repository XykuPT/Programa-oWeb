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
    var color = $('.colorGrp').find('.active').val();

    window.localStorage.setItem("shoppingCart", color)
});