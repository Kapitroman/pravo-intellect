const initScrollSeparator = () => {
  const header = document.querySelector('[data-header]');

  if (!header) {
    return;
  }

  const getSeparator = () => {
    if (document.documentElement.scrollTop > 10) {
      header.classList.add('header--shadow');
    } else {
      header.classList.remove('header--shadow');
    }
  }

  window.addEventListener('scroll', getSeparator);
};

export { initScrollSeparator };
