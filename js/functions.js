/**
 * Проверит подходит ли строка по длине
 * @param {string} target
 * @param {number} length
 * @return {boolean}
 */
const fitsLength = (target, length) => target.length <= length;

/**
 * Проверит является ли строка или число палиндромом
 * @param {string|number} target
 * @return {boolean}
 */
const isPalindrome = (target) => {
  const normalized = String(target).replaceAll(' ', '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
};

/**
 * Извлечет из строки или числа цифры от 0 до 9 и объединит их в одно число
 * @param {string|number} target
 * @return {number}
  */
const parseDigits = (target) => {
  const digits = String(target).replace(/[^0-9]/g, '');

  return digits ? Number(digits) : NaN;
};

/**
 * Добавит в начало строки символы другой строки,
 * в результате исходная строка достигнет заданной строки
 * @param {string} target
 * @param {number} length
 * @param {string} pad
 * @return {string}
 */
const addPadStart =(target, length, pad) => {
  const start = pad.repeat(length);

  return `${start}${target}`.slice(-length);
};

