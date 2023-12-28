const swiper1 = new Swiper('.testimonial__slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.testimonial__next',
      prevEl: '.testimonial__prev',
    },
  });

  const menu = document.querySelector('.header__menu');
  const open = document.querySelector('.menu');
  const close = document.querySelector('.close-menu');
  const body = document.querySelector('body');
if(open){
    open.addEventListener('click', function () {
    menu.classList.add('open-menu');
    close.classList.add('close-menu__open');
    body.style="overflow: hidden";
  });
  menu.addEventListener('click', function () {
    menu.classList.remove('open-menu');
    close.classList.remove('close-menu__open');
    body.style="overflow: auto";
  });
  close.addEventListener('click', function () {
    menu.classList.remove('open-menu');
    close.classList.remove('close-menu__open');
    body.style="overflow: auto";
  });
}

new Accordion('.accordion-container');