const swiperMain = new Swiper('.slider_main', {

    loop: true,
    speed: 800,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
  });

const swiperOtzyvy = new Swiper('.otzyvy_slider', {

  loop: true,
  speed: 800,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});