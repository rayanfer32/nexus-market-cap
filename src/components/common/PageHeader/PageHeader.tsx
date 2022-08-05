import Head from 'next/head'
import PAGEMETA from '@constants/page-meta'

type PageMetaKeyType = keyof typeof PAGEMETA
/**
 * PageHeader component
 * @param {string} page Name of the page
 * @param {string} title Title of the page
 * @param {string} description Description of the page
 */
const PageHeader = ({
  page = 'DEFAULT',
  title,
  description,
}: {
  page?: string
  title?: string
  description?: string
}) => {
  const pageMeta = PAGEMETA[page.toUpperCase() as PageMetaKeyType]
  const { TITLE: pageTitle, DESCRIPTION: pageDescription } =
    pageMeta as keyof typeof pageMeta

  const _title = title || pageTitle
  const _description = description || pageDescription
  const _nmc_domain = process.env.NEXT_PUBLIC_DOMAIN_BASE_URL || ''

  return (
    <Head>
      <title key="title">{_title}</title>
      <meta name="description" content={_description} />
      <link rel="canonical" href={_nmc_domain} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="keywords"
        content="nexus, marketcap, nxs, search, blockchain,nexus tokens, quantum resistance, nexus coins"
      />
      <meta property="og:locale" content={PAGEMETA.OG.LOCALE} />
      <meta property="og:type" content={PAGEMETA.OG.TYPE} />
      <meta property="og:description" content={_description} />
      <meta property="og:url" content={_nmc_domain} />
      <meta property="og:image" content={`${_nmc_domain}/og_meta_image.jpg`} />
      <meta
        property="og:image:url"
        content={`${_nmc_domain}/og_meta_image.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${_nmc_domain}/og_meta_image.jpg`}
      />
      <meta property="og:image:alt" content={PAGEMETA.OG.IMAGE_ALT} />
      <meta property="og:title" content={_title} />
      <meta property="og:site_name" content={PAGEMETA.DEFAULT.TITLE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={_description} />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:image" content={`${_nmc_domain}/og_meta_image.jpg`} />
      <meta name="twitter:image:alt" content={PAGEMETA.TWITTER.IMAGE_ALT} />
      <meta name="twitter:site" content={PAGEMETA.TWITTER.SITE}></meta>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}

export default PageHeader
