import React from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import styles from './Header.module.scss'
import Brand from '@components/common/Brand'
import { setShowMenu } from '@store/slices/homepageSlice'
import { useDispatch } from 'react-redux'

function Header() {
  const dispatch = useDispatch()

  return (
    <div>
      <nav className={styles.nav}>
        <Brand />
        <div className={styles.nav_buttons}>
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <BiSearch />
            <BiMenu onClick={() => dispatch(setShowMenu(true))} />
          </IconContext.Provider>
        </div>
      </nav>
    </div>
  )
}

export default Header
