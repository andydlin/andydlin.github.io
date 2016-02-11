$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 500);

    var height = $(window).height();
    if(height > 800) {
        $('.scroll').hide();
    }

    $('.nav li, .logo img, .menu').addClass('in-view');

    $('.nav li').each(function(index) {
        var delay = (100 * (index + 1)) + "ms";
        $(this).css({
            'transition-delay': delay,
            '-webkit-transition-delay': delay
        });
    });

    $('.mobile-nav li a').each(function(index) {
        var delay = (100 * (index + 1)) + "ms";
        $(this).css({
            'transition-delay': delay,
            '-webkit-transition-delay': delay
        });
    });

    $('.header-content h1, .header-content a, .header-content p').addClass('in-view');
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.on-scroll').each(function() {
        var posTop = $(this).offset().top;
        var diff = posTop - scrollTop;
        if(diff <= 600) {
            $(this).addClass('in-view');
        }
    });

    var wheight = $(window).height() + scrollTop;
    var dheight = $(document).height();
    if(wheight > (dheight - 50)) {
        $('.on-scroll.scroll-h').addClass('in-view');
    }
});

$('.menu').on('click', function() {
    $('.navbar').addClass('show-mobile');
});

$('.close-menu').on('click', function() {
    $('.navbar').removeClass('show-mobile');
});