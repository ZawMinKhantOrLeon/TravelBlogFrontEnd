import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
      
const swiper = new Swiper('.swiper', {
// Optional parameters
effect:"cube",
direction: 'horizontal',
loop:false,
speed: 2500,
on: {
    slideChange: function (e) {
      
    }},

autoplay:{
    delay:500,
    
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

});

const postSwiper = new Swiper('.postSwiper', {
    // Optional parameters
    
    direction: 'horizontal',
    loop:false,
    speed: 2500,

    autoplay:{
      delay:1000,
      
  },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    
    }
  ,

    
    });