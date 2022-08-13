import type { NextPage } from 'next'
import Homepage from 'src/views/Home'
import Layout from '@views/Layout'
import { fetchAds, fetchTokens } from 'src/fetch/fetch'
import { REVALIDATE_INTERVALS } from '@constants/index'
import Logger from '@utils/customLog'

export async function getStaticProps() {
  const adsData = await fetchAds()
  const tokensData = await fetchTokens()
  return {
    props: {
      adsData,
      tokensData,
    },
    revalidate: REVALIDATE_INTERVALS.ads,
  }
}

const Home: NextPage = (props) => {
  Logger.log('[INDEX] - props', props)

  return (
    <Layout>
      <Homepage {...props} />
    </Layout>
  )
}

export default Home
