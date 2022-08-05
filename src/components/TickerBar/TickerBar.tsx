import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './TickerBar.module.scss'

export default function TickerBar() {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <p>{t('tokens')}: 15</p>
      <p>{t('marketCap')}: 70,000,000$</p>
      <p>{t('maxSupply')}: 75,000,000$</p>
    </div>
  )
}
