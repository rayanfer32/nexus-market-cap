/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
  i18n: {
    locales: ['en-IN'],
    defaultLocale: 'en-IN',
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
