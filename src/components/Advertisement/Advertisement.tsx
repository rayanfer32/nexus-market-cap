import React from 'react'
import styles from './Advertisement.module.scss'
import Image from 'next/image'
import Carousel, { RenderArrowProps } from 'react-elastic-carousel'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
export default function Advertisement() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  function myArrow({ type, onClick, isEdge }: RenderArrowProps) {
    const Pointer = type === 'PREV' ? HiArrowSmLeft : HiArrowSmRight
    return (
      <button style={{ border: '0' }} onClick={onClick} disabled={isEdge}>
        <Pointer />
      </button>
    )
  }

  return (
    <div className={styles.container}>
      <Carousel
        itemPadding={[0, 150]}
        renderArrow={myArrow}
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={3000}
        itemsToShow={3}
      >
        {adsData.map(({ title, desc, image }) => (
          <AdCard key={title} title={title} desc={desc} image={image} />
        ))}
      </Carousel>
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
      <div className={styles.card_title}>{title}</div>
      <div className={styles.card_body}>
        <Image
          className={styles.card_body_image}
          src={image}
          alt={image}
          width={300}
          height={200}
        />
        <div className={styles.card_body_desc}>{desc}</div>
      </div>
    </div>
  )
}
