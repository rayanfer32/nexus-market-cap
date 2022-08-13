import type { NextComponentType, NextPageContext } from 'next'
import Advertisement from '@components/Advertisement'
import TickerBar from '@components/TickerBar'
import TokenTable from '@components/TokenTable'
import styles from './Homepage.module.scss'
import PageHeader from '@components/common/PageHeader/PageHeader'

const Homepage: NextComponentType<NextPageContext> = (props) => {
  // Logger.log('[HOMEPAGE] - props', props)

  return (
    <>
      <PageHeader page="home" />
      <div className={styles.container}>
        <TickerBar />
        <Advertisement adsData={undefined} {...props} />
        <TokenTable tokensData={undefined} {...props} />
      </div>
    </>
  )
}

export default Homepage
