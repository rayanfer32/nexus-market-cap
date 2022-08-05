import Head from 'next/head'
import PAGEMETA from '@constants/page-meta'

/**
 * PageHeader component
 * @param {string} page Name of the page
 * @param {string} title Title of the page
 * @param {string} description Description of the page
 */
const PageHeader = ({
  page = 'HOME',
  title,
  description,
}: {
  page?: string
  title?: string
  description?: string
}) => {
  const pageUppercase = page.toUpperCase()
  const _title = title || PAGEMETA[pageUppercase]?.TITLE || PAGEMETA.TITLE
  const _description =
    description || PAGEMETA[pageUppercase]?.DESCRIPTION || PAGEMETA.DESCRIPTION
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
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
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
      <meta property="og:image:alt" content="Visit nexus.io" />
      <meta property="og:title" content={_title} />
      <meta property="og:site_name" content="Nexus Market Cap" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={_description} />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:image" content={`${_nmc_domain}/og_meta_image.jpg`} />
    </Head>
  )
}

export default PageHeader
