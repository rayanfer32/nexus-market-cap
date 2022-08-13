import React from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi'
import styles from './Header.module.scss'
import Brand from '@components/common/Brand'
import { setShowMenu } from '@store/slices/homepageSlice'
import { dispatch } from '@store/store'
import { Dropdown } from '@components/common/Dropdown'
import { ThemeToggle } from '@components/common'
import Link from 'next/link'

export interface HeaderProps {
  isMobile?: boolean
}

export default function Header({ isMobile }: HeaderProps) {
  if (isMobile) {
    return <MobileNavbar />
  }
  return <DesktopNavbar />
}

function DesktopNavbar() {
  return (
    <nav className={styles.nav}>
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
    </nav>
  )
}

// eslint-disable-next-line no-unused-vars
function MobileNavbar() {
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
