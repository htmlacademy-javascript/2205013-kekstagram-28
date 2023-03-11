/**
 * @type {HTMLElement}
 */
const picturesList = document.querySelector('.pictures');
/**
 *
 */
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumbnail = ({description, url, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);

  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__img').alt = description;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;

  return newPicture;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  picturesList.append(fragment);
};

export default renderThumbnails;


