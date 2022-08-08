import React from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi'
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
          <BiSearch />
          <BiMenu onClick={() => dispatch(setShowMenu(true))} />
        </div>
      </nav>
    </div>
  )
}

export default Header
