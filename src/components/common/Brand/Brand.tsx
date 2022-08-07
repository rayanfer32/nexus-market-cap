import Image from 'next/image'
import NMC from '@assets/icons/nmc_light.svg'
import styles from './Brand.module.scss'
import CustomLink from '../CustomLink'
import routes from '@constants/routes'

export default function Brand() {
  return (
    <CustomLink href={routes.HOME} className={styles.logo}>
      <Image src={NMC} width={32} height={32} alt="logo" loading="eager" />
      <p className={styles.title}>NexusMarketCap</p>
    </CustomLink>
  )
}
