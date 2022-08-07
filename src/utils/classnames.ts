/**
 * util function to support mutilple classNames for react components
 */
export const cls = (...args: (string | boolean)[]): string =>
  args.filter(Boolean).join(' ')
