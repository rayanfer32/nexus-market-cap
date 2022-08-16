import styles from './Footer.module.scss'
import FOOTER_ITEMS from '@constants/footer'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.section1}>
        {/* About Nexus and wallet download links */}
        <div className={styles.aboutNexus}>
          <p>About Nexus</p>
          {FOOTER_ITEMS.PRIMARY.ABOUT_NEXUS.items.map((item) => {
            return (
              <a
                className={styles.aboutItem}
                key={item.label}
                href={item.href}
                target={item.target}
              >
                <span>
                  <item.icon />
                </span>
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>
        <div className={styles.downloadLinks}>
          <p>Download Wallet</p>
          {FOOTER_ITEMS.PRIMARY.WALLET_LINKS.items.map((item) => {
            return (
              <a
                className={styles.downloadLink}
                key={item.label}
                href={item.href}
                target={item.target}
              >
                <span>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    height={52}
                    width={156}
                  />
                </span>
              </a>
            )
          })}
        </div>
      </section>
      <section className={styles.section2}>
        {/* Social media icons */}
        <p>Follow Us on</p>
        <div>
          {FOOTER_ITEMS.PRIMARY.SOCIAL_MEDIA.items.map((item) => (
            <a key={item.label} href={item.href}>
              <item.icon color={item.iconColor} />
            </a>
          ))}
        </div>
      </section>
      <section className={styles.section3}>
        {/* Copyright and legal links */}
        {FOOTER_ITEMS.SECONDARY.LEGAL_RIGHTS.items.map((item) => (
          <a key={item.label} href={item.href as string} target={item.target}>
            {item.label}
          </a>
        ))}
      </section>
    </footer>
  )
}
