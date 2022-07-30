import Image from 'next/image'
import NexusBlueSvg from '@assets/icons/nexusBlue.svg'
import styles from './Brand.module.scss'
import CustomLink from '../CustomLink'
import routes from '@constants/routes'

export default function Brand() {
  return (
    <CustomLink href={routes.HOME} className={styles.logo}>
      <Image
        src={NexusBlueSvg}
        width={32}
        height={32}
        alt="logo"
        loading="eager"
      />
      <p className={styles.title}>NexusMarketCap</p>
    </CustomLink>
  )
}
