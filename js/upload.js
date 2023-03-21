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
  classTo: 'form-group',
  errorTextParent: 'img-upload__field-wrapper',
});

/**
 * @param {event} event
 */
const onFormChange = (event) => {
  if (event.target === form.elements.filename) {
    //TODO изображение
    openPopup(popup);
  }
};

form.addEventListener('change', onFormChange);

openPopup(popup);
