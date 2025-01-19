/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ParkSnoopyInc',
    description: 'Modified 3rd party registry of ParkSnoopyInc\'s.',
    icon: 'https://raw.githubusercontent.com/ParkSnoopy/kasm-registry/1.0/site/public/ParkSnoopyInc.png',
    listUrl: 'https://ParkSnoopyInc.github.io/kasm-registry/',
    contactUrl: 'https://github.com/ParkSnoopyInc/kasm-registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
