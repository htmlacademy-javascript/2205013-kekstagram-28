const descriptions = [
  'Описание1',
  'Описание2',
  'Описание3'
];

/**
 * Выберет по индексу рандомное значение, в рамках заданного массива
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
const pickItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * Выбирает случайное число в заданном диапазоне
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const pickIntegerInRange = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};

// createCommentState
// createCommentStateList

/**
 * Добавит 1 объект
 * @param {number} id
 * @return {ImageState}
 */
const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = [];

  return {id, url, description, likes, comments};
};

/**
 * Добавит список объектов
 * @param {number} length
 * @return {ImageState[]}
 */
const createImageStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createImageState(start + index));
};
createImageStateList();
