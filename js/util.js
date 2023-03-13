/**
 * Выберет по индексу случайное значение, в рамках заданного массива
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
export const pickItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * Выбирает случайное число в заданном диапазоне
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export const pickIntegerInRange = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};
/**
 * При нажатии ESK
 * @param {*} evt
 */
export const isEscapeKey = (evt) => evt.key === 'Escape';
