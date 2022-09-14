document.addEventListener('DOMContentLoaded', () => {
  // swiper slider: testimonial
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.testimonial-next',
      prevEl: '.testimonial-prev',
    },
  })

  swiper.slideNext()

  // swiper slider: testimonial
  const brandSlider = new Swiper('.brand-slider', {
    slidesPerView: 5,
    loop: true,
    autoplay: {
      delay: 200,
    },
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
    disable: 'mobile',
  })

  // header menu
  const menuTrigger = document.getElementById('menu-trigger')
  const menuClose = document.getElementById('menu-close')
  const offCanvas = document.getElementById('offcanvas-menu')
  const menuClass = 'menu-active'

  menuClose.addEventListener('click', () => {
    if (offCanvas.classList.contains(menuClass)) {
      offCanvas.classList.remove(menuClass)
    }
  })

  menuTrigger.addEventListener('click', () => {
    if (!offCanvas.classList.contains(menuClass)) {
      offCanvas.classList.add(menuClass)
    }
  })
})
