import React from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import styles from './Header.module.scss'
import Brand from '@components/common/Brand'
import { setShowMenu } from '@store/slices/homepageSlice'
import { dispatch } from '@store/store'
import Dropdown from '@components/common/Dropdown'
import { ThemeToggle } from '@components/common'
import Link from 'next/link'

export default function Header() {
  return <DesktopNavbar />
}

function DesktopNavbar() {
  return (
    <div className={styles.nav}>
      <Brand />
      <menu style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Tokens</Link>
        <Link href="/exchanges">Exchanges</Link>
        <Link href="/community">Community</Link>
        <Link href="/learn">Learn</Link>
      </menu>
      <div style={{ display: 'flex' }}>
        <Dropdown type="elevated" header={'English'}>
          <p>English</p>
          <p>Spanish</p>
          <p>Dutch</p>
        </Dropdown>
        <Dropdown type="elevated" header={'USD'}>
          <p>USD</p>
          <p>INR</p>
          <p>EUR</p>
        </Dropdown>
        <input className="searchbar" type="search" placeholder="Search" />
        <ThemeToggle />
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function MobileNavbar() {
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
