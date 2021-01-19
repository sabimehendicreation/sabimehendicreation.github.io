// $(window).on('load', function() { // makes sure the whole site is loaded 
//   $('#loadermain').delay(3000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
//   $('body').delay(3000).css({'overflow-y':'visible'});
// })

// ************* Header fixed & humburgar init start *************
const body = document.body;
const triggerMenu = document.querySelector(".page-header .trigger-menu");
triggerMenu.addEventListener("click", () => {
  body.classList.toggle("menu-open");
});

$(function(){
  var shrinkHeader = 100;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= shrinkHeader ) {
            $('.page-header').addClass('shrink');
         }
         else {
             $('.page-header').removeClass('shrink');
         }
   });
    function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
    }
  });

// ************* Header fixed & humburgar init end *************

// page onclick scroll init
$('.scrollTo').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-20
    }, 1000);
    return false;
});

$(document).ready( function() {   

    // Car park after before init
    $('.ba-slider').beforeAfter();

    // Car park process init
    $('#parkProcess li').on('click', function(){
      var onPark = parseInt($(this).data('value'), 10);
      var parksteps = $(this).parent().children('li.progress-col');
      for (i = 0; i < parksteps.length; i++) {
        $(parksteps[i]).removeClass('active');
      }
      for (i = 0; i < onPark; i++) {
        $(parksteps[i]).addClass('active');
      } 
    });

    // website ISOTOPE list init

    $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
        itemSelector: '.grid-item',
      });
    });

    // $('.grid').isotope({
    //   itemSelector: '.grid-item',
    // });
    
    // filter items on button click
    $('.filter-button-group').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $('.grid').isotope({ filter: filterValue });
      $('.filter-button-group li').removeClass('active');
      $(this).addClass('active');
    });
})

// VISIBLE JS image reveal init.
jQuery(document).ready(ImgReveal);
jQuery(window).scroll(ImgReveal);
function ImgReveal(){
    jQuery(".image-reveal").each(function(){
        if ( jQuery(this).visible(true) ){
            jQuery(this).addClass("is-reveal");
        } else {
            // jQuery(this).removeClass("is-reveal");
        }
    });
}


// home page coffee cataory Slider
var swiper = new Swiper('.coffee-slider .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  effect: 'fade',
  speed: 1500,
  navigation: {
    nextEl: '.coffee-slider .swiper-button-next',
    prevEl: '.coffee-slider .swiper-button-prev',
  },
});

// about page testimonial slider
var swiper = new Swiper('.about-testimonial .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: '.about-testimonial .swiper-button-next',
    prevEl: '.about-testimonial .swiper-button-prev',
  },
});

// inner blog page user Slider
var swiper = new Swiper('.blog-inner-slider .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  effect: 'fade',
  speed: 1500,
  navigation: {
    nextEl: '.blog-inner-slider .swiper-button-next',
    prevEl: '.blog-inner-slider .swiper-button-prev',
  },
});

// inner blog page related competitons Slider
var swiper = new Swiper('.related-slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1500,
  navigation: {
    nextEl: '.related-slider .swiper-button-next',
    prevEl: '.related-slider .swiper-button-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1365: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    2399: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});

// brand page text brand name Slider
var SwiperTop = new Swiper('.brands-slide .swiper-text-top', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

var SwiperBottom = new Swiper('.brands-slide .swiper-text-bottom', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
    reverseDirection: true
  },
  loop: true,
  loopedSlides: 4,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

// Brand page New in Slider
var swiper = new Swiper('.newin-slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1500,
  navigation: {
    nextEl: '.newin-slider .swiper-button-next',
    prevEl: '.newin-slider .swiper-button-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    2400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }
});

