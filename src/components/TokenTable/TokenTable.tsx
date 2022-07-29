import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { SERVER_BASE_URL } from 'src/constants'
import styles from './TokenTable.module.scss'
import nexusTokenBgLight from '@assets/icons/TokenIconType1.svg'
import Image from 'next/image'
import { Button } from '@components/common/Button'
import Table from '@components/Table/Table'
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

const columns = [
  {
    Header: 'Rank',
    accessor: 'attributes.rank', // accessor is the "key" in the data
  },
  {
    Header: 'Token',
    accessor: 'attributes.name',
    Cell: ({ value }: { value: string }) => (
      <td>
        {value ? makeIcon(removeLocalTag(value)) : value.substring(0, 10)}
      </td>
    ),
  },
  {
    Header: 'Price',
    accessor: 'attributes.priceUSD',
  },
  {
    Header: '24h',
    accessor: 'attributes.price24h',
  },
  {
    Header: '7d',
    accessor: 'attributes.price7d',
  },
  {
    Header: 'Rating',
    accessor: 'attributes.rating',
  },
  {
    Header: 'Supply',
    accessor: 'attributes.currentsupply',
  },
  {
    Header: 'Max Supply',
    accessor: 'attributes.maxsupply',
  },
]

export default function TokenTable() {
  const coinsRQ = useQuery(['coins'], async () => {
    const { data } = (await axios.get(
      `${SERVER_BASE_URL}/api/coins?pagination[start]=0&pagination[limit]=100`
    )) as any
    return data?.data as tokenDataType[]
  })

  if (coinsRQ.error) {
    return <div>error</div>
  }

  return (
    <div className={styles.container}>
      <ActionBar />
      <Table columns={columns} data={coinsRQ.data || []} />
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
