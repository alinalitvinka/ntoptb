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

$(document).ready(function() {
	$('.otzyvy_slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});