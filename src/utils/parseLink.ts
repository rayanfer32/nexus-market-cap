/**
 * Get string from a route link
 * @param path  the path of the route
 * @returns route string
 */
export const getRouteName = (path: string): string => {
  const route = path.replace(/\/|#/, '')
  return route ? route : ''
}
