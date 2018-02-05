$(document).ready(function() {

  // MENU TOGGLE
  document.querySelector(".menu__toggle").onclick = function() {
    document.querySelector(".menu__list").classList.toggle("active");
    document.querySelector(".menu__toggle").classList.toggle("active");
  };
  
  $(".menu__link").click(function() {
    $(".menu__list").removeClass("active");
    $(".menu__toggle").removeClass("active");
  });

  // HEADER FIX ON SCROLL
  var header = document.getElementById("header");
  var hero = document.getElementById("hero");

  window.onscroll = function() {
    if (window.pageYOffset >= (window.getComputedStyle(hero, null).height).replace(/\D/g,'') -20) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };

});
