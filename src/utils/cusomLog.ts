/* eslint-disable no-console */
import { CONSTANTS } from '@constants/index'
import { isDev } from './getEnv'

/**
 * Log to console if in dev.
 */
export class Logger {
  static #isShow = isDev || false
  static #env = isDev ? '__DEV__' : ''
  static #style = `color:${CONSTANTS.COLOR.WHITE};padding:2px;border-radius:4px;margin-right:4px;`
  static #infoStyle = `background:${CONSTANTS.COLOR.NEXUS_BLUE}; ${this.#style}`
  static #warnStyle = `background:${CONSTANTS.COLOR.FULVOUS};${this.#style}`
  static #errorStyle = `background:${CONSTANTS.COLOR.MAXIMUM_RED};${
    this.#style
  }`

  static log(...data: any[]): void {
    Logger.#isShow &&
      console.log.apply(console, [
        `%c${Logger.#env}`,
        Logger.#infoStyle,
        ...data,
      ])
  }

  static warn(...data: any[]): void {
    Logger.#isShow &&
      console.log.apply(console, [
        `%c${Logger.#env}`,
        Logger.#warnStyle,
        ...data,
      ])
  }

  static error(...data: any[]): void {
    Logger.#isShow &&
      console.log.apply(console, [
        `%c${Logger.#env}`,
        Logger.#errorStyle,
        ...data,
      ])
  }
}

export default Logger
export const Log = Logger.log
export const Warn = Logger.warn
export const Error = Logger.error
