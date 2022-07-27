import Image from 'next/image'
import React from 'react'
import NexusBlueSvg from '@assets/icons/nexusBlue.svg'
import { BiMenu, BiSearch } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import styles from './Header.module.scss'
import { setShowMenu } from '@views/Home/homepageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'

function Header() {
  const dispatch = useDispatch()
  const { showMenu } = useSelector((state: RootState) => state.home)

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={NexusBlueSvg} width={32} height={32} alt="logo" />
          <p className={styles.title}>NexusMarketCap</p>
        </div>

        <div className={styles.nav_buttons}>
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <BiSearch />
            <BiMenu onClick={() => dispatch(setShowMenu(!showMenu))} />
          </IconContext.Provider>
        </div>
      </nav>
    </div>
  )
}

export default Header
