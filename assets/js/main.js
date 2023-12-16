const swiper1 = new Swiper('.testimonial__slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.testimonial__next',
      prevEl: '.testimonial__prev',
    },
  });