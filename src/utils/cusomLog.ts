/* eslint-disable no-console */
import { CONSTANTS } from '@constants/index'
import { isDev } from './getEnv'

/**
 * Log to console if in dev.
 * Add // @ts-ignore while using this function
 */
const Logger = (function () {
  const isShow = isDev || false
  const _env = isDev ? '__DEV__' : ''
  const _style = `color:${CONSTANTS.COLOR.WHITE};font-weight:800;padding: 0.2rem 0.4rem;border-radius: 0.25rem;margin-right: 0.5rem;`
  const _infoStyle = `background: ${CONSTANTS.COLOR.NEXUS_BLUE}; ${_style}`
  const _warnStyle = `background: ${CONSTANTS.COLOR.FULVOUS}; ${_style}`
  const _errorStyle = `background: ${CONSTANTS.COLOR.MAXIMUM_RED}; ${_style}`

  return {
    log: function () {
      const args = Array.prototype.slice.call(arguments)
      isShow && console.log.apply(console, [`%c${_env}`, _infoStyle, ...args])
    },

    warn: function () {
      const args = Array.prototype.slice.call(arguments)
      isShow && console.warn.apply(console, [`%c${_env}`, _warnStyle, ...args])
    },

    error: function () {
      const args = Array.prototype.slice.call(arguments)
      isShow &&
        console.error.apply(console, [`%c${_env}`, _errorStyle, ...args])
    },
  }
})()

export default Logger
export const Log = Logger.log
export const Warn = Logger.warn
export const Error = Logger.error
