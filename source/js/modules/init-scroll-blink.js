const initScrollBlink = () => {
  const intro = document.querySelector('.intro');

  if (!intro) {
    return;
  }

  const blinkElement = intro.querySelector('.blink ellipse');

  const getBlink = () => {
    if (document.documentElement.scrollTop > intro.offsetHeight) {
      return;
    }

    blinkElement.setAttribute('rx', document.documentElement.scrollTop / 1);
    blinkElement.setAttribute('ry', document.documentElement.scrollTop / 1.6);
  }

  window.addEventListener('scroll', getBlink);
};

export { initScrollBlink };
