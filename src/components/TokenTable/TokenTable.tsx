import axios from 'axios'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { SERVER_BASE_URL } from 'src/constants'
import styles from './TokenTable.module.scss'
import nexusTokenBgLight from '@assets/icons/TokenIconType1.svg'
import { Log } from '@utils/customLog'
import Image from 'next/image'
import { Button } from '@components/common/Button'
interface tokenDataType {
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

export default function TokenTable() {
  const coinsRQ = useQuery(['coins'], async () => {
    const { data } = (await axios.get(`${SERVER_BASE_URL}/api/coins`)) as any
    return data?.data as tokenDataType[]
  })

  useEffect(() => {
    Log(coinsRQ.data)
  }, [coinsRQ.data])

  if (coinsRQ.error) {
    return <div>error</div>
  }

  return (
    <div className={styles.container}>
      <ActionBar />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>#</th>
            <th>Token</th>

            <th>Price</th>
            <th>24h</th>
            <th>7D</th>
            {/* <th>Volume(24h)</th> */}

            <th>MaxSupply</th>
            <th>CurrentSupply</th>
            {/* <th>Volume(24h)</th> */}
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {coinsRQ?.data?.map((_item, index) => {
            const item = _item.attributes

            return (
              <tr key={index} className={styles.tr}>
                <td>{item.rank}</td>
                <td>
                  {item?.ticker
                    ? makeIcon(removeLocalTag(item.ticker))
                    : item.name.substring(0, 10)}
                  {/* {removeLocalTag(item.ticker)} */}
                </td>
                <td>{item.priceUSD}</td>
                <td>{item.price24h}</td>
                <td>{item.price7d}</td>
                <td>{item.maxsupply}</td>
                <td>{item.currentsupply}</td>
                {/* <td>{item.balance}</td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function makeIcon(name: string): React.ReactElement {
  return (
    <div className={styles.token_container}>
      <div className={styles.icon_container}>
        <Image
          height={40}
          width={40}
          src={nexusTokenBgLight}
          alt="token-logo"
        ></Image>
        <div className={styles.icon_name}>{name?.substring(0, 2)}</div>
      </div>
      <span>{name}</span>
    </div>
  )
}

function removeLocalTag(name: string): string {
  return name?.replace('local:', '')
}

function ActionBar() {
  return (
    <div className="">
      <Button>Lock</Button>
    </div>
  )
}
