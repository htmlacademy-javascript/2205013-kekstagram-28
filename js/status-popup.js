/**
 * @param {KeyboardEvent} event
 */
const onDocumentKeydown = (event) => {
  if(event.key.startsWith('Esc')) {
    /**
     * @type {HTMLElement}
     */
    const popup = document.querySelector('.success, .error');

    popup.click();
  }
};

/**
 * @param {MouseEvent & {target: Element, currentTarget: HTMLElement}} event
 */
const onPopupClick = (event) => {
  if (event.target.matches('section, button')) {
    event.currentTarget.remove();

    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

/**
 * @param {'success'|'error'} type
 */
const openStatusPopup = (type) => {
  /**
   * @type {HTMLTemplateElement}
   */
  const popupTemplate = document.querySelector(`#${type}`);
  const popup =
    /**
     * @type {HTMLElement}
     */
    (popupTemplate.content.querySelector(`.${type}`).cloneNode(true));

  popup.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onDocumentKeydown);

  document.body.append(popup);
};
export default openStatusPopup;
