/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination: 'https://goodpeopleonly.limitedrun.com/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
