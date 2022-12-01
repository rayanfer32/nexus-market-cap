import React from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi'
import styles from './Header.module.scss'
import Brand from '@components/common/Brand'
import { setShowMenu } from '@store/slices/homepageSlice'
import { dispatch } from '@store/store'
import { Dropdown } from '@components/common/Dropdown'
import { SearchBar, ThemeToggle } from '@components/common'
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
    <div className={styles.nav}>
      <Brand />
      <menu className="flex gap-2">
        <Link href="/">Tokens</Link>
        <Link href="/exchanges">Exchanges</Link>
        <Link href="/community">Community</Link>
        <Link href="/learn">Learn</Link>
      </menu>
      <div className="flex gap-1 items-center">
        <div className="w-20">
          <Dropdown type="elevated" header={'English'}>
            <p>English</p>
            <p>Spanish</p>
            <p>Dutch</p>
          </Dropdown>
        </div>
        <div className="w-20">
          <Dropdown type="elevated" header={'USD'}>
            <p>USD</p>
            <p>INR</p>
            <p>EUR</p>
          </Dropdown>
        </div>
        <div className="w-30 h-9">
          <SearchBar />
        </div>
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
          <BiSearch />
          <BiMenu onClick={() => dispatch(setShowMenu(true))} />
        </div>
      </nav>
    </div>
  )
}
