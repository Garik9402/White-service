$(document).ready(function() {
    $(".specialists__slider").slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        // speed: 1000,
        // autoplay: true,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 747,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});