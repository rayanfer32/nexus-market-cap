import React from 'react'
import styles from './Advertisement.module.scss'
import adsData from '@assets/data/adsData.json'
import Image from 'next/image'

export default function Advertisement() {
  return (
    <div className={styles.container}>
      {adsData.map(({ title, desc, image }) => (
        <AdCard key={title} title={title} desc={desc} image={image} />
      ))}
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
