import '@styles/globals.scss'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // eslint-disable-next-line no-console
  console.log(metric)
}

export default MyApp
