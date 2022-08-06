import { Button } from '../Button'
import { ImSun } from 'react-icons/im'
import styles from './ThemeToggle.module.scss'
import { BsMoonFill } from 'react-icons/bs'
import { MdDevices } from 'react-icons/md'

export type ThemeType = 'light' | 'dark' | 'system'

export interface ThemeToggleProps {
  theme: ThemeType
  onClick: () => void
}

export const ThemeToggle = ({ theme, onClick }: ThemeToggleProps) => {
  let Icon = MdDevices
  if (theme === 'light') Icon = ImSun
  if (theme === 'dark') Icon = BsMoonFill

  return (
    <Button type="button" className={styles.themeToggler} onClick={onClick}>
      <Icon className={styles.icon} />
    </Button>
  )
}

export default ThemeToggle
