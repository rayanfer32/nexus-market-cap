import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)
    mediaQuery.addEventListener('change', () => setMatches(mediaQuery.matches))
    return () => {
      mediaQuery.removeEventListener('change', () =>
        setMatches(mediaQuery.matches)
      )
    }
  }, [query])
  return matches
}
