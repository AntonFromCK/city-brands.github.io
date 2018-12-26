$(document).ready(function(){

    $('.present-slider').slick({
        adaptiveHeight:true,
        slidesToShow: 3,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
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

