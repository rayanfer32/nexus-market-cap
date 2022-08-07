import routes from '@constants/routes'
import { isDev } from '@utils/getEnv'
import { getRouteName } from '@utils/parseLink'
import { useRouter } from 'next/router'
import styles from './devView.module.scss'

export const DevViewDebug = () => {
  const router = useRouter()
  const { isProd: mockProd } = router.query

  if (mockProd === 'true') return <></>
  const shouldExitDev = router.pathname === routes.DEV

  if (isDev) {
    return (
      <button
        className={styles.devDebug}
        onClick={() =>
          shouldExitDev ? router.back() : router.push(routes.DEV)
        }
      >
        {getRouteName(routes.DEV)}
      </button>
    )
  }

  return <></>
}
