import {pickItemFromList, pickIntegerInRange} from './util.js';

const DESCRIPTIONS = [
  'Описание1',
  'Описание2',
  'Описание3'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Александр',
  'Алексей',
  'Виктория'
];

// Генерирует текст комментария из 1 или 2 сообщений (случайным образом)
const createMessage = () =>
  Array.from({length: pickIntegerInRange(1, 2)}, () =>
    pickItemFromList(COMMENTS)).join(' ');

/**
 * Добавит 1 объект (комментарий)
 * @param {number} id
 * @return {CommentState}
 */
const createCommentState = (id) => {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = createMessage();
  const name = pickItemFromList(NAMES);

  return {id, avatar, message, name};
};

/**
 * Добавит список(массив) объектов (комментариев)
 * @param {number} length
 * @return {CommentState[]}
 */
const createCommentStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};

/**
 * Добавит 1 объект (фотография)
 * @param {number} id
 * @return {ImageState}
 */
const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(DESCRIPTIONS);
  const likes = pickIntegerInRange(15, 200);
  const comments = createCommentStateList(pickIntegerInRange(1, 5));

  return {id, url, description, likes, comments};
};

/**
 * Добавит список(массив) объектов (фотографий)
 * @param {number} length
 * @return {ImageState[]}
 */
const createImageStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createImageState(start + index));
};

//const createImages = createImageStateList(); ?? есть смысл такой доп константы??

export default createImageStateList;
