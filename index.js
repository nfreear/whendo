/**
 * When a time-dependent condition is met, resolve a promise.
 *
 * @copyright © Nick Freear, 13-Dec-2021.
 *
 * @see https://gist.github.com/nfreear/f40470e1aec63f442a8a;
 * @see https://gist.github.com/nfreear/c2b55a396c7e40c3e5fcda050102e07f;
 */

/**
 * When a time-dependent condition is met, resolve a promise.
 *
 * @param {function} callback to test a condition.
 * @param {number} interval in milliseconds.
 * @return {Promise}
 */
export function whenDo (testCallbackFn, intervalMs = 250) {
  return new Promise(resolve => {
    /* if (testCallbackFn()) {
      resolve();
      return;
    } */
    const intId = setInterval(() => {
      if (testCallbackFn()) {
        clearInterval(intId);
        resolve();
      }
    },
    intervalMs);
  });
}

/**
 * When a time-dependent condition is met, resolve a promise.
 * If a timeout expires - reject the promise.
 *
 * @param {function} callback to test a condition.
 * @param {string} identify rejections.
 * @param {number} timeout in milliseconds.
 * @param {number} interval in milliseconds.
 * @return {Promise}
 */
export function whenTimeout (testCallbackFn, id = null, timeoutMs = 5000, intervalMs = 250) {
  return new Promise((resolve, reject) => {
    const TID = {};

    TID.interval = setInterval(() => {
      if (testCallbackFn()) {
        clearAll();
        resolve(id);
      }
    },
    intervalMs);

    TID.timeout = setTimeout(() => {
      clearAll();
      reject(new Error(`whenTimeout expired: ${id}`));
    },
    timeoutMs);

    function clearAll () {
    // const clearAll=()=>{
      clearInterval(TID.interval);
      clearTimeout(TID.timeout);
    }
  });
}

export function timeout (timeoutMs = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), timeout);
  });
}

// Doesn't work!
// const sleep = delay => new Promise(resolve => setTimeout(() => resolve), delay);

// export { whenDo, whenTimeout, timeout } from 'src/whendo.js';
