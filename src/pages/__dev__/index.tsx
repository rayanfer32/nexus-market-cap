import type { GetStaticProps, NextPage } from 'next'
import Layout from '@views/Layout'
import Custom404 from '@pages/404'
import { isDev } from '@utils/getEnv'
import DevView from '@views/DevView'
import { useRouter } from 'next/router'
import { Button, Input, ThemeToggle, SearchBar } from '@components/common'
import { Dropdown, NativeSelect } from '@components/common/Dropdown'
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import Image from 'next/image'
import nexusBlue from '@assets/icons/nexusBlue.svg'
import toast from '@modules/react-hot-toast'

const DevPage: NextPage = () => {
  const { isProd: mockProd } = useRouter().query
  const onToastClick = () => toast('Hello World!')

  if (isDev && !(mockProd === 'true')) {
    return (
      <Layout>
        <DevView>
          {/* Add your components inside these */}
          <Button onClick={onToastClick}>Toast Test</Button>
          <Input />
          <SearchBar placeholder={'Search...'} />
          <ThemeToggle />
          <Dropdown type="elevated" header={'Drop down menu'}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Dropdown>
          <Dropdown header={'Drop down menu'} arrowAnimate="none">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Dropdown>
          <Dropdown type="flat" arrowAlign="left" arrowAnimate="flip">
            <div style={{ display: 'flex', gap: '4px' }}>
              <BsFillEmojiHeartEyesFill />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <Image width={16} height={16} src={nexusBlue} alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
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
