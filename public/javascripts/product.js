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