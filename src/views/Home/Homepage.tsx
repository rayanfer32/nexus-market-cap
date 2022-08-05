import type { NextComponentType, NextPageContext } from 'next'
import Advertisement from '@components/Advertisement'
import TickerBar from '@components/TickerBar'
import TokenTable from '@components/TokenTable'
import styles from './Homepage.module.scss'
import PageHeader from '@components/common/PageHeader/PageHeader'

const Homepage: NextComponentType<NextPageContext> = () => {
  return (
    <>
      <PageHeader page="home" />
      <div className={styles.container}>
        <TickerBar />
        <Advertisement />
        <TokenTable />
      </div>
    </>
  )
}

export default Homepage
