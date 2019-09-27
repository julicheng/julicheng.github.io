$(document).ready(function() {
  let owlCarouselValues = {
    loop: true,
    margin: 20,
    responsiveClass: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };
  $(window).resize(function() {
    $(".owl-carousel").owlCarousel(owlCarouselValues);
  });
  $(".owl-carousel").owlCarousel(owlCarouselValues);
});
