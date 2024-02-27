$(document).ready(function(){
    $(".slick-slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>', 
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
})