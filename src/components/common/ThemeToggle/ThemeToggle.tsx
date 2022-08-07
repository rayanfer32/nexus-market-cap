import { Button } from '../Button'
import { ImSun } from 'react-icons/im'
import styles from './ThemeToggle.module.scss'
import { BsMoonFill } from 'react-icons/bs'
import { MdDevices } from 'react-icons/md'
import { useDarkMode } from '@utils/hooks'
import { theme } from '@constants/theme'

export type ThemeType = 'light' | 'dark' | 'system'

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  const onClick = () => {
    const newMode = darkMode === theme.DARK ? theme.LIGHT : theme.DARK
    setDarkMode(newMode)
  }

  let Icon = MdDevices
  if (darkMode === theme.LIGHT) Icon = ImSun
  if (darkMode === theme.DARK) Icon = BsMoonFill

  return (
    <Button type="button" className={styles.themeToggler} onClick={onClick}>
      <Icon className={styles.icon} />
    </Button>
  )
}

export default ThemeToggle
