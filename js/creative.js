(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });
  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  })
});

function postForm()
{
  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdc4-o3REAKb4OAsOKUJpkJYqR6__v59kAxh_6FHLAnaeSuWA/viewform",
    data: {
      // "entry.1747390747": field1,//name
      // "entry.1225988834_year": field2,//year
      // "entry.1225988834_month": field3,//month
      // "entry.1225988834_day": field3,//day
      // "entry.1707775353": field4,//phone
      // "entry.872549937": field4,//email
      // "entry.241036852": field4,//chuyen nganh dao tao
      // "entry.1800879466": field4,//truong dai hoc
      // "entry.977354531": field4,//nam tot nghiep
      // "entry.986893235"://bao hiem

      "entry.1747390747": 123123,
      "entry.1225988834_year": 2019,
      "entry.1225988834_month": 11,
      "entry.1225988834_day": 18,
      "entry.1707775353": "09678979874",
      "entry.872549937": "123",
      "entry.241036852": "123",
      "entry.1800879466": "Đại học Ngoại thương",
      "entry.977354531": "123",
      "entry.986893235": "Bảo hiểm",
      "fvv": 1
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
    },
    error: function (x, y, z) {

      $('#success-msg').show();
      $('#form').hide();

    }
  });
}