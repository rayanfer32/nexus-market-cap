import Script from 'next/script'
import React, { useEffect } from 'react'

export default function Community() {
  useEffect(() => {
    if (Object.hasOwn(window, 'twttr')) {
      window?.twttr.widgets.load()
    }
  }, [])

  return (
    <div className="container">
      <a
        className="twitter-timeline"
        href="https://twitter.com/NXSCommunity?ref_src=twsrc%5Etfw"
      >
        Tweets by NXSCommunity
      </a>
      <Script
        id="stripe-js"
        src="https://platform.twitter.com/widgets.js"
        strategy="beforeInteractive"
      />

      <style jsx>
        {`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          padding: 1rem;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        `}
      </style>
    </div>
  )
}
