import updatePreview from './gallery-preview.js';
import openPopup from './popup.js';

/**
 * @type {HTMLElement}
 */
const menu = document.querySelector('.img-filters');

/**
 * @type {HTMLElement}
 */
const picturesList = document.querySelector('.pictures');

/**
 * Находит шаблон по ID
 * @type {HTMLTemplateElement}
 */
const pictureTemplate = document.querySelector('#picture');

/**
 * @type {HTMLElement}
 */
const popup = document.querySelector('.big-picture');

/**
 * Создает новое изображение по шаблону
 * @param {PictureState} data
 * @return {HTMLAnchorElement}
 */
const createPicture = (data) => {
  const picture =
    /**
     * @type {HTMLAnchorElement}
     */
    (pictureTemplate.content.querySelector('.picture').cloneNode(true));

  picture.querySelector('.picture__img').setAttribute('src', data.url);
  picture.querySelector('.picture__img').setAttribute('alt', data.description);
  picture.querySelector('.picture__comments').textContent = String(data.comments.length);
  picture.querySelector('.picture__likes').textContent = String(data.likes);

  //Замыкание, эта внутренняя функция запоминает data при клике будет обращаться к той миниатюре на которую кликнули
  picture.addEventListener('click', (event) => {
    updatePreview(data);
    openPopup(popup);
    event.preventDefault();
  });

  return picture;
};

/**
 * @param {PictureState[]} data
 */
const renderPictures = (data) => {
  const pictures = picturesList.querySelectorAll('.picture');
  const newPictures = data.map(createPicture);

  pictures.forEach((picture) => picture.remove());
  picturesList.append(...newPictures);
};

/**
 * @param {PictureState[]} data
 */
const initGallery = (data) => {
  menu.classList.remove('img-filters--inactive');

  renderPictures(data);
};

export default initGallery;
