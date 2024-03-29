import updatePreview from './gallery-preview.js';
import openPopup from './popup.js';
import {debounce} from './util.js';

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
 *  @type {PictureState[]}
 */
let initialData;

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

  picture.addEventListener('click', (evt) => {
    updatePreview(data);
    openPopup(popup);
    evt.preventDefault();
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
 * @param {MouseEvent & {target: Element}} evt
 */
const onMenuClick = (evt) => {
  const selectedButton = evt.target.closest('button');

  if (!selectedButton) {
    return;
  }

  menu.querySelectorAll('button').forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });

  selectedButton.classList.add('img-filters__button--active');
  selectedButton.dispatchEvent(new Event('change'));
};

/**
 * @param {Event & {target: HTMLButtonElement}} evt
 */
const onMenuChange = debounce((evt) => {
  const data = structuredClone(initialData);

  switch (evt.target.getAttribute('id')) {
    case 'filter-random':
      data.sort(() => Math.random() - .5).splice(10);
      break;
    case 'filter-discussed':
      data.sort((a, b) => b.comments.length - a.comments.length);
      break;
  }

  renderPictures(data);
});

/**
 * @param {PictureState[]} data
 */
const initGallery = (data) => {
  initialData = data;

  menu.classList.remove('img-filters--inactive');
  menu.addEventListener('click', onMenuClick);
  menu.addEventListener('change', onMenuChange, true);

  renderPictures(data);
};

export default initGallery;
