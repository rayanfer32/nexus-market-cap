import { Dropdown } from '@components/common'
import { TokenIcon } from '@components/TokenIcon/TokenIcon'
import Layout from '@views/Layout'
import { useRouter } from 'next/router'
import React from 'react'

export default function TokenDetail() {
  const router = useRouter()

  const tokenName: string = router.query.slug as string
  const ticker: string = tokenName?.substring(0, 3).toUpperCase()

  return (
    <Layout>
      <div className="flex">
        {/* sidebar */}
        <div className="shadow w-64 min-w-[15%] p-4 ">Sidebar</div>

        <div className="min-h-screen min-w-full">
          {/* token name and rating */}
          <section className="p-4 shadow">
            <div className="flex place-items-center gap-4">
              <TokenIcon name={tokenName} />
              <h3 className="font-bold">{ticker}</h3>
              <Rating />
              <div className="w-24">
                <Dropdown type="elevated" header={'USD'}>
                  <p>USD</p>
                  <p>INR</p>
                  <p>EUR</p>
                </Dropdown>
              </div>
            </div>
            <button className="badge badge-outline badge-primary">
              Add Review
            </button>
          </section>

          <section className="flex">
            {/* charts section */}
            <section className="w-[65%] p-4 shadow ">
              <div className="flex justify-around gap-2 mb-4">
                <button className="badge badge-secondary">1H</button>
                <button>1W</button>
                <button>1M</button>
                <button>1Y</button>
                <button>All</button>
              </div>
              <div className="grid h-64 place-content-center bg-green-300 rounded">
                <div className="badge badge-primary">Charts coming soon.</div>
              </div>
            </section>

            {/* buy panel */}
            <section className="grid place-content-center w-[20%]">
              <div className="badge badge-primary">Buy panel coming soon.</div>
            </section>
          </section>
          <MarketSection />
          <AboutSection />
        </div>
      </div>
    </Layout>
  )
}

function Rating() {
  return (
    <div className="rating">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        ))}
    </div>
  )
}

function MarketSection() {
  return (
    <section className="h-auto p-4">
      <h1 className="font-bold text-xl">Market</h1>
      <h2 className="font-bold text-l">Market Statistics</h2>
      <div className="flex flex-wrap w-[50%] gap-2">
        <StatCard title="Market Cap" value="$15.4T" />
        <StatCard title="Volume (24H)" value="$1.8T" />
        <StatCard title="Circulating Supply" value="122 VIE" />
        <StatCard title="Typical Hold Time" value="110 Days" />
        <StatCard title="Popularity" value="#2" />
        <StatCard title="All Time High" value="$5646" />
        <StatCard title="Price Change (1H)" value="+2.2%" />
        <StatCard title="Price Change (24H)" value="+3.21%" />
        <StatCard title="Price Change (7H)" value="+11.9%" />
      </div>
    </section>
  )
}

interface StatCardProps {
  title: string
  value: number | string
  desc?: string
}
function StatCard({ title, value, desc }: StatCardProps) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value text-xl">{value}</div>
        <div className="stat-desc">{desc}</div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="flex flex-col gap-2 p-4 w-[50%]">
      <h1 className="font-bold text-xl">About</h1>
      <p>
        VIE is a decentralized computing platform that uses NXS (also called
        Nexus) to pay transaction fees (or “gas”). Developers can use VIE to run
        decentralized applications (dApps) and issue new crypto assets, known as
        VIE tokens.
      </p>
      <h1 className="font-bold text-xl">Resources</h1>
      <p>Whitepaper</p>
      <p>Official website</p>
      <h1 className="font-bold text-xl">What is VIE?</h1>
      <p>
        VIE is the second-biggest cryptocurrency by market cap after Bitcoin. It
        is also a decentralized computing platform that can run a wide variety
        of applications — including a universe of decentralized finance (or
        DeFi) apps and services. Everything from financial tools and games to
        complex databases are already running on the VIE blockchain. And its
        future potential is only limited by developers imaginations. As the
        nonprofit VIE Foundation puts it: “VIE is for more than payments. Its a
        marketplace of financial services, games and apps that cant steal your
        data or censor you.”
      </p>
    </section>
  )
}
