import type { GetStaticProps, NextPage } from 'next'
import Layout from '@views/Layout'
import Custom404 from '@pages/404'
import { isDev } from '@utils/getEnv'
import DevView from '@views/DevView'
import { useRouter } from 'next/router'
import { Button, Input, ThemeToggle } from '@components/common'
import { Dropdown, NativeSelect } from '@components/common/Dropdown'

const DevPage: NextPage = () => {
  const { isProd: mockProd } = useRouter().query

  if (isDev && !(mockProd === 'true')) {
    return (
      <Layout>
        <DevView>
          {/* Add your components inside these */}
          <Button />
          <Input />
          <ThemeToggle />
          <Dropdown type="elevated" header={'Drop down menu'}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Dropdown>
          <Dropdown header={'Drop down menu'}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Dropdown>
          <Dropdown type="flat" header={'Drop down menu'}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Dropdown>
          <NativeSelect
            data={[
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
            ]}
          ></NativeSelect>
          {/* Add your components inside these */}
        </DevView>
      </Layout>
    )
  }
  return <Custom404 />
}

export const getStaticProps: GetStaticProps = () => {
  if (isDev) return { props: {} }

  return {
    // returns the default 404 page with a status code of 404
    notFound: true,
  }
}

export default DevPage
