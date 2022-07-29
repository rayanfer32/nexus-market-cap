import React from 'react'
import styles from './Advertisement.module.scss'
import Image from 'next/image'
import { SERVER_BASE_URL } from '@constants/index'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function Advertisement() {
  async function fetchAds() {
    const { data } = await axios.get(`${SERVER_BASE_URL}/api/adcontents`)
    return data.data
  }

  const { data } = useQuery(['ads'], fetchAds)

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
  return (
    <div className={styles.card} {...rest}>
      <span className={styles.card_title}>{title}</span>
      <div className={styles.card_body}>
        <Image
          className={styles.card_body_image}
          src={image}
          alt={image}
          width={300}
          height={200}
        />
        <span className={styles.card_body_desc}>{desc}</span>
      </div>
    </div>
  )
}
