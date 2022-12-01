import Image from 'next/image'
import React from 'react'
import styles from './TokenIcon.module.scss'
import nexusTokenBgLight from '@assets/icons/TokenIconType1.svg'

export function TokenIcon({ name }: any): React.ReactElement {
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
