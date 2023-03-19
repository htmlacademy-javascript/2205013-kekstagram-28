/**
 * @param {HTMLElement} preview
 */
const preview = document.querySelector('.big-picture__preview');

/**
 * @type {HTMLUListElement}
 */
const discussion = preview.querySelector('.social__comments');

/**
 * @type {HTMLButtonElement}
 */
const commentTemplate = discussion.querySelector('.social__comment');

/**
 * @type {HTMLLIElement}
 */
const loadMoreButton = preview.querySelector('.comments-loader');

/**
 * @type {PictureState & {commentsTotal: number}}
 */
let currentData;

/**
 * @param {CommentState} data
 * @return {HTMLElement}
 */
const createComment = (data) => {
  const comment =
    /**
     * @type {HTMLElement}
     */
    (commentTemplate.cloneNode(true));

  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', data.name);
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const onLoadMoreButtonClick = () => {
  const newComments = currentData.comments.splice(0, 5).map(createComment);
  const shownComments = currentData.commentsTotal - currentData.comments.length;

  preview.querySelector('.comments-shown').textContent = String(shownComments);
  discussion.append(...newComments);
  loadMoreButton.classList.toggle('hidden', shownComments === currentData.commentsTotal);
};

/**
 *
 * @param {PictureState} data
 */
const updatePreview = (data) => {
  currentData = {
    ...structuredClone(data),
    commentsTotal: data.comments.length
  };

  preview.querySelector('.big-picture__img img').setAttribute('src', currentData.url);
  preview.querySelector('.social__caption').textContent = currentData.description;
  preview.querySelector('.likes-count').textContent = String(currentData.likes);
  preview.querySelector('.comments-count').textContent = String(currentData.commentsTotal);
  discussion.replaceChildren();
  loadMoreButton.addEventListener('click', onLoadMoreButtonClick);
  loadMoreButton.click();
};

export default updatePreview;
