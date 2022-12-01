import styles from './Layout.module.scss'
import { DevViewDebug } from '@views/DevView'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { NextComponentType, NextPageContext } from 'next'
import React, { ReactNode } from 'react'
import { MenuPage } from '@components/common/Menu'
import { setShowMenu } from '@store/slices/homepageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { IconContext } from 'react-icons'
import { Toaster } from '@modules/react-hot-toast'
import { toastPosition } from '@constants/toasts'

interface LayoutProps {
  children: ReactNode
}

/**
 * Common layout for the nexplorer website
 */
const Layout: NextComponentType<NextPageContext, {}, LayoutProps> = ({
  children,
}: LayoutProps) => {
  const dispatch = useDispatch()
  const { showMenu } = useSelector((state: RootState) => state.home)

  const handleMenuClick = () => {
    dispatch(setShowMenu(!showMenu))
  }

  return (
    <IconContext.Provider value={{ size: '1.5rem', className: 'icon' }}>
      {/* Need second opinion on section tag is it required or not */}
      <section className={styles.main}>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
      </section>
      <MenuPage showOverlay={showMenu} onOverlayClick={handleMenuClick} />
      <DevViewDebug />
      <Toaster position={toastPosition.BOTTOM_RIGHT} reverseOrder={false} />
    </IconContext.Provider>
  )
}

export default Layout
