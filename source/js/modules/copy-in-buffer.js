const copyButtons = Array.from(document.querySelectorAll('[data-copy]'));

const copyInBuffer = () => {
  if (copyButtons.length === 0) {
    return;
  }

  const clickHandler = (evt) => {

    const dataWrapper = evt.target.closest('.pay__official-info-value');
    const data = dataWrapper.querySelector('p').innerHTML;

    navigator.clipboard.writeText(data)
      .then(() => {
        dataWrapper.classList.add('is-copied');
        setTimeout(() => dataWrapper.classList.remove('is-copied'), 1000);
      })
      .catch(() => {
        console.log('не удалось скопировать данные');
      });
  }

  copyButtons.forEach((item) => item.addEventListener('click', clickHandler));
}

export { copyInBuffer };
