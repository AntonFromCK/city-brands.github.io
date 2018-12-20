$(document).ready(function(){
    $('.slider-shop').slick({
        adaptiveHeight:true,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:2000
    });
    $('#mob-nav-icon').click(function(){
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            $('.nav-mob-wrapper').css("display", "block");
        } else {
            $('.nav-mob-wrapper').css("display", "none");
        }
    });
});

