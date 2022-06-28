import styles from './Layout.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

/**
 * Common layout for the nexplorer website
 * @param {*} children
 * @returns {JSX.Element}
 */
function Layout({ children }) {
  return (
    <>
      {/* Need second opinion on section tag is it required or not */}
      <section className={styles.main}>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
      </section>
    </>
  )
}

export default Layout
