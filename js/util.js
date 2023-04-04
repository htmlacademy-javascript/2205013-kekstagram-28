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
 * Обрабатывает ошибку при обращении к серверу
 * @param {string} url
 * @param {RequestInit} [options]
 * @return {Promise}
 */
export const request = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status}. ${response.statusText}`);
  }

  return response.json();
};

/**
 * Функция для устранения дребезга
 * @param {(...args: any) => any} callback
 * @param {number} delay
 * @returns {(...args: any) => any}
 */
export const debounce = (callback, delay = 500) => {
  let timeoutId;
  let lastCallTime;

  return (...args) => {
    const elapsedTime = Date.now() - lastCallTime;
    const newDelay = Math.max(delay - elapsedTime, 0);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
      lastCallTime = Date.now();
    }, newDelay);
  };
};

// Функция для пропуска кадров
export const throttle = (callback, delayBetweenFrames) => {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};
