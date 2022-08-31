import React from 'react'
import { useQuery } from 'react-query'
import styles from './TokenTable.module.scss'
import nexusTokenBgLight from '@assets/icons/TokenIconType1.svg'
import Image from 'next/image'
import Table from '@components/Table/Table'
import { fetchTokens } from 'src/fetch/fetch'

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
