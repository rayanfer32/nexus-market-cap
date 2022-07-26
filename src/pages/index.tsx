import type { NextPage } from 'next'
import Homepage from 'src/views/Home'
import Layout from '@views/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  )
}

export default Home
