
//Домашняя работа 7 раздел

import createImageStateList from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const pictureStateList = createImageStateList();
const fragment = document.createDocumentFragment();

pictureStateList.forEach(picture => {
  const newPicture = pictureTemplate.cloneNode(true);

  newPicture.querySelector('.picture__img').src = picture.url;
  newPicture.querySelector('.picture__img').alt = picture.description;
  newPicture.querySelector('.picture__likes').textContent = picture.likes;
  newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
  fragment.append(newPicture);
});

const renderThumbnails = () => {
  picturesList.appendChild(fragment);
};

export default renderThumbnails;


