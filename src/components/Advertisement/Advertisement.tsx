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
  link: string
}

function AdCard({ title, desc, image, link }: AdCardProps) {
  let imageUrl = image
  if (image.startsWith('/uploads')) {
    imageUrl = `${SERVER_BASE_URL}${image}`
  }

  return (
    <div className="group relative">
      <div className="w-64 overflow-hidden rounded-lg group-hover:opacity-75 shadow">
        <Image
          // className={styles.card_body_image}
          src={imageUrl}
          alt={image}
          width={640}
          height={360}
          // sizes="50vw"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-2 text-sm">
        <p className="text-base font-semibold">{title}</p>
        <a href={link}>
          <span className="absolute inset-0"></span>
          {desc}
        </a>
      </h3>
    </div>
  )
}
