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
  document.body.append(popup);
};
export default openStatusPopup;
