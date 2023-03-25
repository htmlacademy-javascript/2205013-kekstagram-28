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

};

/**
 * @param {File} data
 */
const updatePreview = (data) => {
  //TODO подстановка изображения
  void data
  setScale(100);
};

export default updatePreview;
