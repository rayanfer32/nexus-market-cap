import styles from './Layout.module.scss'
import { DevViewDebug } from '@views/DevView'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { NextComponentType, NextPageContext } from 'next'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

/**
 * Common layout for the nexplorer website
 */
const Layout: NextComponentType<NextPageContext, {}, LayoutProps> = ({
  children,
}: LayoutProps) => {
  return (
    <>
      {/* Need second opinion on section tag is it required or not */}
      <section className={styles.main}>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
      </section>
      <DevViewDebug />
    </>
  )
}

export default Layout
