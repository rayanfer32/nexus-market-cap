import styles from './Footer.module.scss'
import Image from 'next/image'
import { ObjectToArray } from '@utils/helper'
import FOOTER_ITEMS from '@constants/footer'
import { cls } from '@utils/classnames'
import nexusBlueSvg from '@assets/icons/nexusBlue.svg'
import { IconType } from 'react-icons'

/**
 * Footer component for the website
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__primary}>
        {/* Map and display primary section of footer */}
        {ObjectToArray(FOOTER_ITEMS.PRIMARY).map((info, idx) => (
          <div className={styles.footer__info} key={idx}>
            {info.title && (
              <h4 className={styles.footer__info__title}>{info.title}</h4>
            )}
            {/* Map links and it's icon/image */}
            {info.items.map((item: any, i: number) => (
              <Footer_Segment item={item} idx={i} key={i} />
            ))}
          </div>
        ))}
      </section>
      <section className={styles.footer__secondary}>
        {/* Map and display second section of footer */}
        {ObjectToArray(FOOTER_ITEMS.SECONDARY).map((info, idx) => (
          <div
            className={cls(
              styles[`footer__info`],
              styles[`footer__secondary__info`]
            )}
            key={idx}
          >
            {/* Map links and it's icon/image */}
            {info.items.map((item: any, i: number) => (
              <Footer_Segment item={item} idx={i} key={i} />
            ))}
          </div>
        ))}
      </section>
    </footer>
  )
}

const Footer_Segment = ({ item, idx }: { item: any; idx: number }) => (
  <div className={styles.footer__info__segment}>
    <Footer_Icon Icon={item.icon} label={item.label} idx={idx} />
    <Footer_Label
      label={item.label}
      href={item.href}
      target={item.target}
      idx={idx}
    />
  </div>
)

const Footer_Label = ({
  label,
  href,
  target,
  idx,
}: {
  label: string
  href: string
  target: string
  idx: number
}) => (
  <a className={styles.footer__info__label} href={href} target={target}>
    <label className={styles.footer__info__label} htmlFor={`${label}-${idx}`}>
      {label}
    </label>
  </a>
)

const Footer_Icon = ({
  Icon,
  label,
  idx,
}: {
  Icon: IconType
  label: string
  idx: number
}) => {
  return (
    <>
      {!!Icon && (
        <span className={styles.footer__info__icon} id={`${label}-${idx}`}>
          {/* Icon should be JSX.component */}
          {(typeof Icon == 'function' && (
            <Icon className={styles.footer__info__icon} color="inherit" />
          )) || (
            <Image
              className={styles.footer__info__icon}
              src={nexusBlueSvg}
              alt={'nexus logo'}
            />
          )}
        </span>
      )}
    </>
  )
}
