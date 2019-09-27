$(document).ready(function() {
  let owlCarouselValues = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
  $(window).resize(function() {
    $(".owl-carousel").owlCarousel(owlCarouselValues);
  });
  $(".owl-carousel").owlCarousel(owlCarouselValues);
});
