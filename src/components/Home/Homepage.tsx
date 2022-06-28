import React from 'react'
import Advertisement from '../Advertisement/Advertisement'
import TickerBar from '../TickerBar/TickerBar'
import TokenTable from '../TokenTable/TokenTable'
import styles from './Homepage.module.scss'

export default function Homepage() {
  return (
    <div className={styles.container}>
      <TickerBar />
      <Advertisement />
      <TokenTable />
    </div>
  )
}
