// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

// Scroll
// - Shadow in header after scroll
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $("#header").addClass("active");
  }
  else {
      $("#header").removeClass("active");
  }
});
// - Arrow bouncing
/*$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  var arrowOffsetTop = document.querySelector('#banner-arrow').offsetTop;
  var headerHeight = document.querySelector("#header").offsetHeight;
  if (scroll > arrowOffsetTop - 2*headerHeight) {
      $("#banner-arrow").removeClass("animate__animated");
  }
  else {
      $("#banner-arrow").addClass("animate__animated");
  }
});*/

(function ($) {
  'use strict';

  // product Slider
  $('.product-image-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-image">';
    }
  });

  /*TODO
    $('.product-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });*/

  // Product slider
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.modal-slick').on('shown.bs.modal', function (e) {
    $('.product-slider').slick('setPosition');
  });

  /*#TODO
  $('.homepage-slider').slick()({
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  })*/

})(jQuery);