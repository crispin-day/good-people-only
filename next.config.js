/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co', // Spotify CDN
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/consulting',
        destination: '/affiliates',
        permanent: true,
      },
      {
        source: '/store',
        destination: 'https://goodpeopleonly.limitedrun.com/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
