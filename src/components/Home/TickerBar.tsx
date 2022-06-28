import React from 'react'
import styles from './TickerBar.module.css'

export default function TickerBar() {
  return (
    <div className={styles.container}>
      <p>Tokens: 15</p>
      <p>MarketCap: 70,000,000$</p>
      <p>MaxSupply: 75,000,000$</p>
    </div>
  )
}
