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

    $('form').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function () {
                console.log("oll ok");
            }
        })
    })
});

