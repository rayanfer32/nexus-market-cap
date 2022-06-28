import Homepage from '@components/Home/Homepage'
import Layout from '@components/Layout/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  )
}

export default Home
