document.addEventListener('DOMContentLoaded', () => {
  // swiper slider: testimonial
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    navigation: {
      nextEl: '.testimonial-next',
      prevEl: '.testimonial-prev',
    },
  })

  swiper.slideNext()

  // swiper slider: testimonial
  const brandSlider = new Swiper('.brand-slider', {
    slidesPerView: 5,
    speed: 400,
    loop: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },

      767: {
        slidesPerView: 2,
      },

      1400: {
        slidesPerView: 3,
      },

      1800: {
        slidesPerView: 5,
      },
    },
  })

  brandSlider.slideNext()

  // aos animation
  AOS.init({
    easing: 'ease-in-out',
    anchorPlacement: 'center center',
    duration: 700,
    throttleDelay: 400,
    once: true,
  })
})
