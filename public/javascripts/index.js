
$(".carousel-inner").ready(function() {
    $(".carousel-inner").find(".carousel-item").first().addClass("active")
    $(".carousel-indicators li:first-child").addClass("active")

    $(".carousel-indicators").on("click", function(event){
        $(".carousel-indicators .active").removeClass('active')
        $(event.target).addClass("active")
        
        $(".carousel-item.active").removeClass('active')
        var position = $(event.target).attr("data-slide-to")
        var item = $(".carousel-inner").find(".carousel-item")[position]
        $(item).addClass("active")

    })
});
