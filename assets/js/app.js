const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  speed: 400,
  navigation: {
    nextEl: '.testimonial-next',
    prevEl: '.testimonial-prev',
  },
})

swiper.slideNext()
