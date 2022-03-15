const swiperMain = new Swiper('.swiper-wrapper', {

    loop: true,
    speed: 400,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
  });