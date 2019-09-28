$(document).ready(function() {
  var i = 0;
  var txt = `Hello 👋🏼, the name's Juli Cheng and I'm a front-end developer! 😃`;
  var speed = 70;

  function typeWriter() {
    if (i < txt.length) {
      document.querySelector("h1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

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
