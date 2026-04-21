/** @type {import('next').NextConfig} */
const nextConfig = {
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
