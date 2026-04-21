/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/management',
        destination: '/roster',
        permanent: true,
      },
      {
        source: '/label',
        destination: '/roster',
        permanent: true,
      },
      {
        source: '/consulting',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/store',
        destination: 'https://store.goodpeopleonly.com',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
