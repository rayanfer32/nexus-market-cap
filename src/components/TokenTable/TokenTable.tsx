import axios from 'axios'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { NEXUS_BASE_URL } from 'src/constants'
import styles from './TokenTable.module.scss'
import nexusTokenBgLight from '@assets/icons/TokenIconType1.svg'
import { Log } from '@utils/cusomLog'
// import tokenbgLight from '@assets/icons/tokenbgLight.svg'

import Image from 'next/image'
import { Button } from '@components/common/Button'
interface tokenData {
  token: string
  ticker: string
  maxsupply: number
  currentsupply: number
  owner: string
  decimals: number
  balance: number
}

export default function TokenTable() {
  const tokensRQ = useQuery(['tokens'], async () => {
    const data = (await axios.get(
      `${NEXUS_BASE_URL}/register/list/tokens?sort=maxsupply&limit=1000`
    )) as any
    return data.data.result as tokenData[]
  })

  useEffect(() => {
    Log(tokensRQ.data)
  }, [tokensRQ.data])

  return (
    <div className={styles.container}>
      <ActionBar />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>#</th>
            <th>Token</th>

            {/* // ! no api support */}
            {/* <th>Price</th> */}
            {/* <th>24h</th> */}
            {/* <th>7D</th> */}
            {/* <th>Volume(24h)</th> */}

            <th>Balance</th>
            <th>MaxSupply</th>
            <th>CurrentSupply</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {tokensRQ.data?.map((item, index) => (
            <tr key={index} className={styles.tr}>
              <td>{index + 1}</td>
              <td>
                {item?.ticker ? (
                  makeIcon(removeLocalTag(item.ticker))
                ) : (
                  <div className={styles.token_name}>
                    {item.token.substring(0, 10)}
                  </div>
                )}
                {/* {removeLocalTag(item.ticker)} */}
              </td>

              {/* <td>3.2$</td> */}
              {/* <td>+32.5%</td> */}
              {/* <td>+21.2%</td> */}

              <td>{item.balance.toFixed(1)}</td>
              <td>{item.maxsupply}</td>
              <td>{item.currentsupply.toFixed(1)}</td>
            </tr>
          ))}
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
