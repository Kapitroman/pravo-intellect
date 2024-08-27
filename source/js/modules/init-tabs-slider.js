const tabsSlider = document.querySelector('.about-specialist__info');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    freeMode: true,
  });
};

const initTabsSlider = () => {
  if (!tabsSlider) {
    return;
  }

  initSwiper(tabsSlider);
};

export { initTabsSlider };
