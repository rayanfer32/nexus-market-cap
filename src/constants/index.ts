import { colors } from './colors'
import { routes } from './routes'

export const NEXUS_BASE_URL = 'https://explorer.nexus.io/api/v1/mainnet'
export const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

const CONSTANTS = { COLOR: { ...colors }, ROUTE: { ...routes } }

export default CONSTANTS
