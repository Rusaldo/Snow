$(document).ready(function() {

  // MENU TOGGLE
  document.querySelector(".menu__toggle").onclick = function() {
    document.querySelector(".menu__list").classList.toggle("active");
    document.querySelector(".menu__toggle").classList.toggle("active");
  };

  // HEADER FIX ON SCROLL
  window.onscroll = function() {
    var header = document.getElementById("header");
    var hero = document.getElementById("hero");
    var heroHeight = (window.getComputedStyle(hero, null).height).replace(/\D/g,'');
    if (window.pageYOffset >= heroHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };

});
