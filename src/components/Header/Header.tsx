import Image from 'next/image'
import React from 'react'
import NexusBlueSvg from '../../assets/icons/nexusBlue.svg'
import { BiMenu, BiSearch } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import styles from './Header.module.scss'

function Header() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={NexusBlueSvg} width={32} height={32} alt="logo" />
          <p className="text-l font-bold">NexusMarketCap</p>
        </div>

        <div className={styles.nav_buttons}>
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <BiSearch />
            <BiMenu />
          </IconContext.Provider>
        </div>
      </nav>
    </div>
  )
}

export default Header
