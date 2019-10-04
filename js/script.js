$(document).ready(function() {
  $(".nav-item").click(function() {
    if ($(window).width() < 990) {
      $(".fa-bars").click();
    }
  });

  // $(".project-inner").each(function() {
  //   var max = 0;
  //   $(this)
  //     .find(".title")
  //     .each(function() {
  //       if ($(this).height() > max) max = $(this).height();
  //     });

  //   $(this)
  //     .find(".title")
  //     .css("height", max);
  // });
  let i = 0;
  const txt = `Hello 👋🏼, the name's Juli Cheng and I'm a front-end developer! 😃`;
  const speed = 70;

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
      940: {
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
      console.log("hi" + $(this).innerHeight());
      if ($(this).height() > tallest) {
        tallest = $(this).height();
        console.log($(this).height());
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
});
