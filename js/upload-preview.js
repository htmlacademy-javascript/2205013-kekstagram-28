const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

/**
 * @type {HTMLImageElement}
 */
const picture = document.querySelector('.img-upload__preview img');

/**
 * @type {HTMLFieldSetElement}
 */
const scaleControl = document.querySelector('.img-upload__scale');

/**
 * @param {number} percent
 */
const setScale = (percent) => {
  picture.style.setProperty('transform', `scale(${percent / 100})`);
  scaleControl.querySelector('input').setAttribute('value', `${percent}%`);
};

/**
 * @param {MouseEvent} event
 */
const onScaleControlClick = (event) => {
  const [less, input, more] = scaleControl.querySelectorAll('input, button');
  const value = Number.parseFloat(input.getAttribute('value'));

  switch (event.target) {
    case less:
      setScale(Math.max(value - Scale.STEP, Scale.MIN));
      break;
    case more:
      setScale(Math.min(value + Scale.STEP, Scale.MAX));
      break;
  }
};

/**
 * @param {File} data
 */
const updatePreview = (data) => {
  //TODO подстановка изображения
  void data
  setScale(Scale.MAX);
  scaleControl.addEventListener('click', onScaleControlClick);
};

export default updatePreview;
