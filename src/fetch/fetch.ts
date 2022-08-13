import { SERVER_BASE_URL } from '@constants/index'
import axios from 'axios'
import { IAdsData, ITokenData } from './interfaces'

export async function fetchAds() {
  const { data } = await axios.get(`${SERVER_BASE_URL}/api/adcontents`)
  return data.data as IAdsData[]
}

export async function fetchTokens() {
  const { data } = (await axios.get(
    `${SERVER_BASE_URL}/api/coins?pagination[start]=0&pagination[limit]=100`
  )) as any
  return data?.data as ITokenData[]
}
