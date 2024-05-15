/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  reactStrictMode: true,
  // source: '/:path*', // Match all paths
  // headers: [
  //   {
  //     key: 'Cache-Control',
  //     value: 'public, max-age=31536000, immutable' // 1 year
  //   }
  // ]
};

module.exports = withPWA(nextConfig)
// module.exports = nextConfig
