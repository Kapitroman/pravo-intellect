import { mobileVhFix } from './utils/mobile-vh-fix.js';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import { CustomSelect } from './modules/select/custom-select';
// import { uploadFile, uploadImageDrop } from './modules/input-file/init-upload';

import { Burger } from './modules/burger';
import { initScrollBlink } from './modules/init-scroll-blink';
import { initScrollSeparator } from './modules/init-scroll-separator';
import { initYM } from './modules/init-map';
import { initPartnersSlider } from './modules/init-partners-slider';
import { initNewsSlider } from './modules/init-news-slider';
import { copyInBuffer } from './modules/copy-in-buffer';
import { initTabs } from './modules/init-tabs';
import { initTabsSlider } from './modules/init-tabs-slider.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    // uploadFile();
    // uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();

    const burger = new Burger();
    burger.init();
    initScrollBlink();
    initScrollSeparator();
    initYM();
    initPartnersSlider();
    initNewsSlider();
    copyInBuffer();
    initTabs();
    initTabsSlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
