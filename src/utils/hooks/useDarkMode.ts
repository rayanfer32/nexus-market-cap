import { ThemeType } from '@components/common'
import { theme } from '@constants/theme'
import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage<ThemeType | any>(
    'dark-mode-enabled',
    theme.SYSTEM
  )

  // This allows user to override OS level setting on our website.
  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const attribute = 'data-user-theme'
      const element = document.querySelector('body')
      if (element) {
        element.setAttribute(attribute, enabledState)
      }
    },
    [enabledState]
    // [enabled] // Only re-call effect when value changes
  )
  // Return enabled state and setter
  return [enabledState, setEnabledState]
}
