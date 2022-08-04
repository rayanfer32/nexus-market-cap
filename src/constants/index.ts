import colors from './colors'
import footer_items from './footer'
import routes from './routes'

export const NEXUS_BASE_URL = 'https://explorer.nexus.io/api/v1/mainnet'
export const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

const CONSTANTS = {
  COLOR: { ...colors },
  FOOTER: { ...footer_items },
  ROUTE: { ...routes },
}

export default CONSTANTS
