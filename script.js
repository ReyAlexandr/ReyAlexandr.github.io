
var swiper = new Swiper(".mySwiper1", {
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

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

  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scroll-nav', window.scrollY > 100);
  })
