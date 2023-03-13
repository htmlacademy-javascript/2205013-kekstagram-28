import {isEscapeKey} from './util.js';

const thumbnailsList = document.querySelector('.pictures');
const fullPicture = document.querySelector('.big-picture');
const fullPictureClose = fullPicture.querySelector('.big-picture__cancel');

const onPictureClick = (evt) => {
  if (evt.target.closest('.picture')) {
    fullPicture.classList.remove('hidden');
  }
};

thumbnailsList.addEventListener('click', onPictureClick);

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullPicture.classList.add('hidden');
  }
});

fullPictureClose.addEventListener('click', () => {
  fullPicture.classList.add('hidden');
});


