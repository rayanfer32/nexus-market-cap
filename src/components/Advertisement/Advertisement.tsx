import React from 'react'
import styles from './Advertisement.module.scss'
import Image from 'next/image'
import { SERVER_BASE_URL } from '@constants/index'
import { useQuery } from 'react-query'
import { fetchAds } from 'src/fetch/fetch'

export default function Advertisement({ adsData }: any) {
  const { data } = useQuery(['ads'], fetchAds, {
    initialData: adsData,
  })

  return (
    <div className={styles.container}>
      {data?.map((ad: any) => {
        return <AdCard key={ad.id} {...ad.attributes} />
      })}
    </div>
  )
}

interface AdCardProps {
  title: string
  desc: string
  image: string
}

function AdCard({ title, desc, image, ...rest }: AdCardProps) {
  let imageUrl = image
  if (image.startsWith('/uploads')) {
    imageUrl = `${SERVER_BASE_URL}${image}`
  }

  return (
    <div className={styles.card} {...rest}>
      <span className={styles.card_title}>{title}</span>
      <div className={styles.card_body}>
        <div className={styles.image_container}>
          <Image
            className={styles.card_body_image}
            src={imageUrl}
            alt={image}
            width={640}
            height={360}
            sizes="50vw"
            objectFit="cover"
          />
        </div>
        <span className={styles.card_body_desc}>{desc}</span>
      </div>
    </div>
  )
}
