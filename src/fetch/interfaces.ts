export interface IAdsData {
  id: number
  attributes: {
    title: string
    desc: string
    image: string
    link: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}
export interface ITokenData {
  id: number
  attributes: {
    ticker: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    name: string
    rank: number
    icon: string
    priceUSD: number
    price24h: number
    price7d: number
    rating: number
    maxsupply: number
    currentsupply: number
  }
}
