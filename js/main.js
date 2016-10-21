$(document).ready(function() {
    $('.slider').owlCarousel({
        items: 1,
        center: true,
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
    });

    $('.slider-2').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        dotsContainer: '#carousel-custom-dots',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('#carousel-custom-dots .owl-dot').click(function() {
        $('.slider-2').trigger('to.owl.carousel', [$(this).index(), 100]);
    });

    $('.slider-3').owlCarousel({
        items: 1,
        center: true,
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<a class="prev">&lt;</a>', '<a class="next">&gt;</a>']
    });

    $('.slider-4').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        dotsContainer: '#carousel-custom-dots-2',

    });
    $('#carousel-custom-dots-2 .owl-dot').click(function() {
        $('.slider-4').trigger('to.owl.carousel', [$(this).index(), 100]);
    });

    $('.go-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 0);
    });


    $('.cmmtxt').click(function() {
        if ($(this).children('span').css('display') == 'inline') {
            $(this).children('span').css('display', 'none');
            $(this).children('b').css('display', 'inline')
        } else {
            $(this).children('span').css('display', 'inline');
            $(this).children('b').css('display', 'none')
        }
    });
});
