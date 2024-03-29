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
 * Функция для устранения "дребезга"
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

/**
 * @param {KeyboardEvent} evt
 */
export const isEscPressed = (evt) => evt.key === 'Escape';
