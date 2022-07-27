/* eslint-disable no-console */
import color from '@constants/colors'
import { isDev } from './getEnv'

/**
 * Log to console if in dev.
 */
export class Logger {
  static #isShow = isDev || false
  static #env = isDev ? '__DEV__' : ''
  static #style = `color:${color.WHITE};padding:2px;border-radius:4px;margin-right:4px;`
  static #infoStyle = `background:${color.NEXUS_BLUE}; ${this.#style}`
  static #warnStyle = `background:${color.FULVOUS};${this.#style}`
  static #errorStyle = `background:${color.MAXIMUM_RED};${this.#style}`

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
