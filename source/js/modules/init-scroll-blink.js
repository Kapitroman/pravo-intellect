const initScrollBlink = () => {
  const intro = document.querySelector('.intro');
  console.log(intro.offsetHeight);

  if (!intro) {
    return;
  }

  const blinkElement = intro.querySelector('.blink ellipse');

  const getBlink = () => {

    if (document.documentElement.scrollTop > intro.offsetHeight) {
      return;
    }
    console.log(document.documentElement.scrollTop);
    blinkElement.setAttribute('rx', document.documentElement.scrollTop / 1);
    blinkElement.setAttribute('ry', document.documentElement.scrollTop / 1.6);
  }

  window.addEventListener('scroll', getBlink);
};

export { initScrollBlink };
