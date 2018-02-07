$(document).ready(function() {

  // PRELOADER
  $(window).on('load', function () {
    setTimeout(function() {
      $(".preloader-bg").fadeOut();
    }, 1000);
  });

  // SLICK SLIDER INITIALIZATION
  $('.reviews__slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true
  });

  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: "unslick"
    }
  ]
  });

  // MENU TOGGLE
  $(".menu__toggle").click(function() {
    $(".menu__list").toggleClass("active");
    $(".menu__toggle").toggleClass("active");
  });

  $(".menu__link").click(function() {
    $(".menu__list").removeClass("active");
    $(".menu__toggle").removeClass("active");
  });

  // HEADER FIX ON SCROLL
  window.onscroll = function() {
    if (window.pageYOffset >= (window.getComputedStyle(hero, null).height).replace(/\D/g,'') -20) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  };

});
