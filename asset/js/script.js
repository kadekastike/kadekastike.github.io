$(window).on("scroll", function () {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      $(".navbar").css("background", "rgb(45, 32, 188)");
   } else {
      $(".navbar").css("background", "transparent");
   }
});

$(document).ready(function () {
   var breakpointSmall = 276;
 
   if ($(window).width() < breakpointSmall) {
     $('.js-slidein').removeClass('js-slidein');
   }
 
   // Check which of the elements with this class is visible on the page
   $('.js-slidein').each(function (i) {
     var bottomObject = $(this).offset().top;
     var bottomWindow = $(window).scrollTop() + $(window).height();
 
     if (bottomWindow > bottomObject) {
       $(this).removeClass('js-slidein');
     }
   });
 
   // Trigger the slide-in effect on scroll
   $(window).scroll(function () {
     $('.js-slidein').each(function (i) {
       var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
       var bottomWindow = $(window).scrollTop() + $(window).height();
 
       if (bottomWindow > bottomObject) {
         $(this).addClass('js-slidein-visible');
       }
     });
   });
 });

particlesJS("particles-js", {
   "particles": {
      "number": {
         "value": 80,
         "density": {
            "enable": true,
            "value_area": 800
         }
      },
      "color": {
         "value": "#ffffff"
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000000"
         },
         "polygon": {
            "nb_sides": 5
         },
         "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
         }
      },
      "opacity": {
         "value": 0.5,
         "random": false,
         "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 3,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
         }
      },
      "line_linked": {
         "enable": true,
         "distance": 150,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 1
      },
      "move": {
         "enable": true,
         "speed": 6,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
            "enable": true,
            "mode": "grab"
         },
         "onclick": {
            "enable": true,
            "mode": "push"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 140,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
         },
         "repulse": {
            "distance": 200,
            "duration": 0.4
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         }
      }
   },
   "retina_detect": true
});
