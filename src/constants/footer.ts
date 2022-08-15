import {
  BsBook,
  BsChatLeftText,
  BsDiscord,
  BsFileEarmarkText,
  BsGlobe2,
  BsMedium,
  BsReddit,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'
import { SiGitbook } from 'react-icons/si'
import NexusWallet from '@assets/icons/footer/app-store.svg'
import Appstore from '@assets/icons/footer/nexus-wallet.svg'
import Playstore from '@assets/icons/footer/playstore.svg'

export const footer_items = {
  PRIMARY: {
    ABOUT_NEXUS: {
      title: 'About Nexus',
      items: [
        {
          href: 'https://nexus.io',
          label: 'Go to Nexus.io',
          target: '_blank',
          icon: BsGlobe2,
        },
        {
          href: 'https://devdocs.nexus-interactions.io/',
          label: 'API Documentation',
          target: '_blank',
          icon: BsFileEarmarkText,
        },
        {
          href: 'https://docs.nexus-interactions.io/',
          label: 'Nexus Docs',
          target: '_blank',
          icon: SiGitbook,
        },
        {
          href: 'https://nexus.io/ResourceHub/',
          label: 'Resource Hub',
          target: '_blank',
          icon: BsBook,
        },
      ],
    },
    SOCIAL_MEDIA: {
      title: 'Social Media',
      items: [
        {
          href: 'https://t.me/NexusOfficial',
          target: '_blank',
          label: 'Telegram',
          icon: BsTelegram,
          iconColor: '#229ED9',
        },
        {
          href: 'https://medium.com/@NexusOfficial',
          target: '_blank',
          label: 'Blog',
          icon: BsMedium,
        },
        {
          href: 'https://www.youtube.com/channel/UCDi2stU5yj71_iPgxMZF79w',
          target: '_blank',
          label: 'YouTube',
          icon: BsYoutube,
          iconColor: 'red',
        },
        {
          href: 'https://t.me/nexusprice',
          target: '_blank',
          label: 'Price Talk',
          icon: BsChatLeftText,
          iconColor: 'green',
        },
        {
          href: 'https://discord.gg/KNvxWh7t4E',
          target: '_blank',
          label: 'Discord',
          icon: BsDiscord,
          iconColor: '#5865F2',
        },
        {
          href: 'https://twitter.com/NexusOfficial',
          target: '_blank',
          label: 'Twitter',
          icon: BsTwitter,
          iconColor: '#1DA1F2',
        },
        {
          href: 'https://www.reddit.com/r/nexus_community/',
          target: '_blank',
          label: 'Reddit',
          icon: BsReddit,
          iconColor: 'orangered',
        },
      ],
    },
    WALLET_LINKS: {
      title: 'Download Wallet',
      items: [
        {
          href: 'https://nexus.io/wallets',
          target: '_blank',
          label: 'Desktop Wallet',
          icon: NexusWallet,
        },
        {
          href: 'https://play.google.com/store/apps/details?id=io.nexus.wallet',
          target: '_blank',
          label: 'Get it on Playstore',
          icon: Playstore,
        },
        {
          href: 'https://testflight.apple.com/join/dJLBiKzt',
          target: '_blank',
          label: 'Download from IOS store',
          icon: Appstore,
        },
      ],
    },
  },
  SECONDARY: {
    LEGAL_RIGHTS: {
      title: undefined,
      items: [
        {
          href: 'https://nexus.io/privacy',
          target: '_blank',
          label: 'Privacy Policy',
          icon: undefined,
        },
        {
          href: 'https://nexus.io/terms',
          target: '_blank',
          label: 'Terms of Use',
          icon: undefined,
        },
        {
          href: null,
          target: '_blank',
          label: 'Copyright © 2014-2022 www.nexus.io',
          icon: undefined,
        },
      ],
    },
  },
}
export default footer_items
