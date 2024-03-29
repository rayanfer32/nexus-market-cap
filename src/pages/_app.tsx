import '@styles/globals.scss'
import { Log } from '@utils/customLog'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import { ReactQueryDevtools } from 'react-query/devtools'
import '@utils/i18n'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  Log(metric)
}

export default MyApp
