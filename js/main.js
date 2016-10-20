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
    $('.owl-dot').click(function() {
        $('.slider-2').trigger('to.owl.carousel', [$(this).index(), 100]);
    });
});
