/* =============================================================================== */

var swiper = new Swiper(".mySwiper1", {
  loop : true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

/* =============================================================================== */


var swiper2 = new Swiper(".mySwiper2", {
  loop : true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints : {
    600: {
      slidesPerView:1,
      loopedSlides:1
    },
    1100:{
      slidesPerView : 3,
      loopedSlides : 3,    
    }
  }
});

/* =============================================================================== */

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

  nav.classList.toggle('nav-scroll', window.scrollY > 100);
})
