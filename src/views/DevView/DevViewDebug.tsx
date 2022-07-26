import routes from '@constants/routes'
import { isDev } from '@utils/getEnv'
import { getRouteName } from '@utils/parseLink'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './devView.module.scss'

export const DevViewDebug = () => {
  const router = useRouter()
  const { isProd: mockProd } = router.query

  if (mockProd === 'true') return <></>

  if (isDev) {
    return (
      <button className={styles.devDebug}>
        <Link href={routes.DEV}>{getRouteName(routes.DEV)}</Link>
      </button>
    )
  }

  return <></>
}
