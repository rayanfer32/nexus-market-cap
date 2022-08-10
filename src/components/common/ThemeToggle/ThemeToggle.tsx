import { Button } from '../Button'
import { ImSun } from 'react-icons/im'
import styles from './ThemeToggle.module.scss'
import { BsMoonFill } from 'react-icons/bs'
import { MdDevices } from 'react-icons/md'
import { useDarkMode } from '@utils/hooks'
import { theme } from '@constants/theme'
import { memo, useCallback, useEffect, useRef } from 'react'
import { useMediaQuery } from '@utils/hooks/useMediaQuery'

export type ThemeType = 'light' | 'dark' | 'system'
const mq = '(prefers-color-scheme: dark)'

export const ThemeToggle = () => {
  const Icon = useRef(MdDevices)
  const [darkMode, setDarkMode] = useDarkMode()
  const prefersDarkMode = useMediaQuery(mq)

  const onClick = useCallback(() => {
    if (darkMode === theme.SYSTEM) {
      // previous theme is system theme and toggle to respective theme
      setDarkMode(() => {
        Icon.current = prefersDarkMode ? ImSun : BsMoonFill
        return prefersDarkMode ? theme.LIGHT : theme.DARK
      })
      return
    }
    // toggle to theme
    setDarkMode(() => {
      Icon.current = darkMode === theme.DARK ? ImSun : BsMoonFill
      return darkMode === theme.DARK ? theme.LIGHT : theme.DARK
    })
  }, [prefersDarkMode, darkMode, setDarkMode])

  useEffect(() => {
    // on first render, set the icon to the stored theme
    if (darkMode === theme.LIGHT) Icon.current = ImSun
    if (darkMode === theme.DARK) Icon.current = BsMoonFill
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Button type="button" className={styles.themeToggler} onClick={onClick}>
      <Icon.current className={styles.icon} />
    </Button>
  )
}

export default memo(ThemeToggle)
