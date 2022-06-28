import '@styles/globals.scss'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // eslint-disable-next-line no-console
  console.log(metric)
}

export default MyApp
