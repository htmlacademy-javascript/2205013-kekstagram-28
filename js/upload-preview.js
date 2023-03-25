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
 * @param {File} data
 */
const updatePreview = (data) => {
  //TODO подстановка изображения
  void data
  setScale(Scale.MAX);
};

export default updatePreview;
