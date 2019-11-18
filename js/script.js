var toggleStatus = document.querySelector('.toggle-status');
var pageHeader = document.querySelector('.page-header');
var link = document.querySelector('.popular__send');
var popup = document.querySelector(".modal-basket");
var overlay = document.querySelector(".overlay");

toggleStatus.classList.remove('toggle-status--nojs');
pageHeader.classList.remove('page-header--nojs');

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

$(function() {
  svg4everybody();
    $(".js__toggle").click(function (menu) {
			menu.preventDefault();
			$(".nav__list").toggle(300);
    });
});

$(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
  });

});

$(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.slider__toggle--left').click(function() {
    owl.trigger('next.owl.carousel', [300]);
  });

  $('.slider__toggle--right').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  });
});
