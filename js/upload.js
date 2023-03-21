import openPopup from './popup.js';
/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');
/**
 * @type {HTMLDivElement}
 */
const popup = form.querySelector('.img-upload__overlay');

// @ts-ignore
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

/**
 * @param {string} message
 * @param {(tags: string[]) => boolean} validate
 */
const addHashTagsValidator = (message, validate) => {
  pristine.addValidator(form.hashtags, (value) => {
    const tags = value.toLowerCase().split(' ').filter(Boolean);

    return validate(tags);
  }, message, 1, true);
};


/**
 * @param {event} event
 */
const onFormChange = (event) => {
  if (event.target === form.elements.filename) {
    //TODO изображение
    openPopup(popup);
  }
};

addHashTagsValidator(
  'Хештеги должны начинаться с символа # (решетка)',
  (tags) => tags.every((tag) => tag.startsWith('#'))
);

addHashTagsValidator(
  'После символа # (решетка) должны идти буквы/цифры',
  (tags) => tags.every((tag) => /^#[a-zа-яё0-1$]/.test(tag))
);

form.addEventListener('change', onFormChange);

openPopup(popup);
