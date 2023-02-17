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
  slidesPerView : 4,
  loopedSlides : 4,
  // loopPreventsSliding : false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

/* =============================================================================== */

const nav = document.querySelector('nav');

var img1_sec1 = document.querySelector('footer');

var ob1 = new IntersectionObserver( es=> {
  nav.style.background = es[0].isIntersecting ? 'blue' : 'var(--c1)';
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    ob1.observe(img1_sec1);
    nav.style.boxShadow = '0px 5px 5px rgba(0,0,0,0.2)';
  }
  else {
    ob1.disconnect();
    nav.style.background = 'transparent';
    nav.style.boxShadow = 'none';
  }
})
