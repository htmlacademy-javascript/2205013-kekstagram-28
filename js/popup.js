/**
 * @param {KeyboardEvent & {target: Element}} evt
 */
const onDocumentKeydown = (evt) => {
  const isEscapeKey = evt.key.startsWith('Esc');
  const isTextField = evt.target.matches('input[type="text"], textarea');

  if (isEscapeKey && !isTextField) {
    /**
     * @type {HTMLButtonElement}
     */
    const cancelButton = document.querySelector('.overlay:not(.hidden) .cancel');

    cancelButton.click();
  }
};

/**
 * @param {MouseEvent & {target: Element}} evt
 */
const onCancelButtonClick = (evt) => {
  const popup = evt.target.closest('.overlay');

  popup.classList.add('hidden');

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

/**
 * @param {Element} popup
 */
const openPopup = (popup) => {
  const cancelButton = popup.querySelector('.cancel');

  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  cancelButton.addEventListener('click', onCancelButtonClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

export default openPopup;
