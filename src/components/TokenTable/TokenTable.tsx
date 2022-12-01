import React from 'react'
import { useQuery } from 'react-query'
import styles from './TokenTable.module.scss'
import Table from '@components/Table/Table'
import { fetchTokens } from 'src/fetch/fetch'
import Link from 'next/link'
import { TokenIcon } from '@components/TokenIcon/TokenIcon'

const columns = [
  {
    Header: 'Rank',
    accessor: 'attributes.rank', // accessor is the "key" in the data
  },
  {
    Header: 'Token',
    accessor: 'attributes.name',
    Cell: ({ value }: { value: string }) => (
      <Link href={`/token/${removeLocalTag(value)}`}>
        <a>
          {value ? (
            <TokenIcon name={removeLocalTag(value)} />
          ) : (
            value.substring(0, 10)
          )}
        </a>
      </Link>
    ),
  },
  {
    Header: 'Price',
    accessor: 'attributes.priceUSD',
    Cell: () => <div className="badge badge-secondary">Coming soon</div>,
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

export default function TokenTable({ tokensData }: any) {
  const coinsRQ = useQuery(['coins'], fetchTokens, { initialData: tokensData })

  if (coinsRQ.error) {
    return <div>error</div>
  }

  return (
    <div className={styles.container}>
      <Table columns={columns} data={coinsRQ?.data} />
    </div>
  )
}

function removeLocalTag(name: string): string {
  return name?.replace('local:', '')
}
