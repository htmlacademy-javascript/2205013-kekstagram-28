import openPopup from './popup.js';
/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');
/**
 * @type {HTMLDivElement}
 */
const popup = form.querySelector('.img-upload__overlay');

/**
 * @param {event} event
 */
const onFormChange = (event) => {
  if (event.target === form.elements.filename) {
    openPopup(popup);
  }
};

form.addEventListener('change', onFormChange);
