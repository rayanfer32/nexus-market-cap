/**
 * Debounce function to avoid multiple calls
 * @param {Function} cb - The function to be debounced
 * @param {number} delay - The time to wait before calling cb
 * @example debounce(() => { console.log('debounced') }, 1000)
 */
export default function debounce(cb: CallableFunction, delay = 1000) {
  let timeout
  clearTimeout(timeout)
  timeout = setTimeout(cb, delay)
}
