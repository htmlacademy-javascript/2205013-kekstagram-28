import {isEscPressed} from './util.js';

/**
 * @param {KeyboardEvent} evt
 */
const onDocumentKeydown = (evt) => {
  if (isEscPressed) {
    /**
     * @type {HTMLElement}
     */
    const popup = document.querySelector('.success, .error');

    popup.click();
    evt.stopPropagation();
  }
};

/**
 * @param {MouseEvent & {target: Element, currentTarget: HTMLElement}} evt
 */
const onPopupClick = (evt) => {
  if (evt.target.matches('section, button')) {
    evt.currentTarget.remove();

    document.removeEventListener('keydown', onDocumentKeydown, true);
  }
};

/**
 * @param {'success'|'error'} type
 * @param {{title?: string, button?: string}} data
 */
const openStatusPopup = (type, data = {}) => {
  /**
   * @type {HTMLTemplateElement}
   */
  const popupTemplate = document.querySelector(`#${type}`);
  const popup =
    /**
     * @type {HTMLElement}
     */
    (popupTemplate.content.querySelector(`.${type}`).cloneNode(true));

  Object.keys(data).forEach((key) => {
    popup.querySelector(`.${type}__${key}`).textContent = data[key];
  });

  popup.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onDocumentKeydown, true);

  document.body.append(popup);
};

export default openStatusPopup;
