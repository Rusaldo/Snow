$(document).ready(function() {

  // PRELOADER
  $(window).on("load", function () {
    setTimeout(function() {
      $(".preloader-bg").fadeOut();
    }, 1000);
  });

  // SLICK SLIDER INITIALIZATION
  $(".reviews__slider").slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true
  });

  $(".clients__slider").slick({
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

  $(".blog__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
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
  $(window).scroll(function() {
    var heroHeight = window.getComputedStyle(document.querySelector(".hero")).height;
    var heroHeightNum = Math.floor(Number(heroHeight.slice(0, heroHeight.length - 2)));

    if ($(window).scrollTop() >= heroHeightNum - 50) {
       $(".header").addClass("fixed");
    }
    else {
       $(".header").removeClass("fixed");
    }
  });

  // SMOOTH SCROLL EFFECT
  $('a[href*="#"]')
 	.not('[href="#"]')
  	.not('[href="#0"]')
  	.click(function(event) {
    if (
    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    )   {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
         	   return false;
            } else {
           	 $target.attr('tabindex','-1');
           	 $target.focus();
            };
        	});
     		}
    	}
    });

});
