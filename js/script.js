
$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
        return false;
    });

    let btn = $('#button-up');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 550) {
            $('#button-up').css({
                'display':'block'
            });
        } else {
            $('#button-up').css({
                'display':'none'
            });
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1500);
    });


    $(".show-section").click(function(){
        $( ".most-popular-posts" ).slideToggle();
    });
});




