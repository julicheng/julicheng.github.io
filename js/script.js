$(document).ready(function() {
  $(".nav-item").click(function() {
    if ($(window).width() < 990) {
      $(".fa-bars").click();
    }
  });

  let i = 0;
  const txt = `Hello 👋🏼, the name's Juli Cheng and I'm a front-end developer! 😃`;
  const speed = 150;

  function typeWriter() {
    if (i < txt.length) {
      document.querySelector("h1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setInterval(typeWriter, 1000);

  let owlCarouselValues = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      730: {
        items: 2
      },
      1680: {
        items: 3
      }
    }
  };

  function projectHeightCalc() {
    $(".project-inner").height("unset");
    let tallest = 0;
    $(".project-inner").each(function() {
      if ($(this).height() > tallest) {
        tallest = $(this).height();
      }
    });
    $(".project-inner").height(tallest);
  }

  $(".owl-carousel").owlCarousel(owlCarouselValues);

  projectHeightCalc();

  $(window).resize(function() {
    $(".owl-carousel").owlCarousel(owlCarouselValues);
    projectHeightCalc();
  });

  $(".project").tilt({
    maxTilt: 3,
    glare: true,
    maxGlare: 0.2
  });
  $("h1").tilt({
    maxTilt: 8
  });
  $(".female-technologist").tilt({
    maxTilt: 20
  });
});
