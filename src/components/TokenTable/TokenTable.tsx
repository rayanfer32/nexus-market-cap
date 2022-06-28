import React from 'react'
import styles from './TokenTable.module.scss'

export default function TokenTable() {
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
            <th>MaxSupply</th>
            <th>CurrentSupply</th>
            <th>Volume(24h)</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <tr key={index} className={styles.tr}>
                <td>{index + 1}</td>
                <td>VIE</td>
                <td>3.2$</td>
                <td>+32.5%</td>
                <td>+21.2%</td>
                <td>50,000,000</td>
                <td>520,000</td>
                <td>6,565</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

function ActionBar() {
  return (
    <div className="p-2">
      <button className="btn btn-sm">lock</button>
    </div>
  )
}
