const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const Effect = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const effectRangeMap = {
  [Effect.NONE]: [0, 100, 1],
  [Effect.CHROME]: [0, 1, .1],
  [Effect.SEPIA]: [0, 1, .1],
  [Effect.MARVIN]: [0, 100, 1],
  [Effect.PHOBOS]: [0, 3, .1],
  [Effect.HEAT]: [1, 3, .1]
};

const createSliderOptions = (name) => {
  const [min, max, step] = effectRangeMap[name];

  return {
    range: {min, max},
    step,
    start: max
  };
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
 * @type {HTMLFieldSetElement}
 */
const effectPicker = document.querySelector('.img-upload__effects');

/**
 * @param {number} percent
 */
const setScale = (percent) => {
  picture.style.setProperty('transform', `scale(${percent / 100})`);
  scaleControl.querySelector('input').setAttribute('value', `${percent}%`);
};

/**
 * @param {string} name
 */
const setEffect = (name) => {
  picture.setAttribute('class', `effects__preview--${name}`);
};

// @ts-ignore
const effectSlider = noUiSlider.create(
  document.querySelector('.effect-level__slider'),
  createSliderOptions(Effect.NONE)
);

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
 * @param {Event & {target: Element}} event
 */
const onEffectPickerChange = (event) => {
  const name = event.target.getAttribute('value');
  setEffect(name);
};

/**
 * @param {File} data
 */
const updatePreview = (data) => {
  //TODO подстановка изображения
  void data;
  setScale(Scale.MAX);
  setEffect(Effect.NONE);
  scaleControl.addEventListener('click', onScaleControlClick);
  effectPicker.addEventListener('change', onEffectPickerChange);
};

export default updatePreview;
