import styles from './Layout.module.scss'
import { DevViewDebug } from '@views/DevView'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { NextComponentType, NextPageContext } from 'next'
import React, { ReactNode } from 'react'
import { MenuPage } from '@components/common/Menu'

interface LayoutProps {
  children: ReactNode
}

/**
 * Common layout for the nexplorer website
 */
const Layout: NextComponentType<NextPageContext, {}, LayoutProps> = ({
  children,
}: LayoutProps) => {
  const [showMenu, setShowMenu] = React.useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      {/* Need second opinion on section tag is it required or not */}
      <section className={styles.main}>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
      </section>
      <MenuPage show={showMenu} onClick={handleMenuClick} />
      <DevViewDebug />
    </>
  )
}

export default Layout
