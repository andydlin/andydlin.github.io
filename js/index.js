$(document).ready(function() {

    var height = $(window).height();
    if(height > 800) {
        $('.scroll').hide();
    }

    $('.about-col').each(function(index) {
        var delay = (100 * (index + 1)) + "ms";
        $(this).css({
            'transition-delay': delay,
            '-webkit-transition-delay': delay
        });
    });

    $('.scroll').addClass('in-view');
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 10) {
        $('.scroll').fadeOut();
    } else {
        $('.scroll').fadeIn();
    }
});

$('.scroll').on('click', function() {
    var pos = $('.sec1').offset().top;
    $('html, body').animate({
        scrollTop: pos
    }, 1000);
});