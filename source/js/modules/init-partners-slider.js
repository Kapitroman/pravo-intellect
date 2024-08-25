const partnersSlider = document.querySelector('.slider-partners');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      480: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 64,
      },
    },
    navigation: {
      nextEl: slider.closest('section').querySelector('.swiper-button-next'),
      prevEl: slider.closest('section').querySelector('.swiper-button-prev'),
    },
  });
};

const initPartnersSlider = () => {
  if (!partnersSlider) {
    return;
  }

  initSwiper(partnersSlider);
};

export { initPartnersSlider };
