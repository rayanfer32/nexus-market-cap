import { classnames } from '@utils/classnames'
import { MouseEventHandler } from 'react'
import styles from './MenuPage.module.scss'

interface MenuPageProps {
  show: boolean
  onClick?: MouseEventHandler<HTMLElement>
}

export const MenuPage = ({ show, onClick }: MenuPageProps) => {
  return (
    <>
      {
        <section
          className={classnames(
            styles.menuPage,
            show ? styles.show : styles.hide
          )}
          onClick={onClick}
        >
          Menu Page
        </section>
      }
    </>
  )
}
