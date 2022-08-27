/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://writeitvg.herokuapp.com/:path*' // Proxy to Backend
      }
    ]
  }
}