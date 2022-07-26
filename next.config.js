/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./styles'],
  },
  images: {
    domains: ['dummyimage.com'],
},

  experimental: { images: { allowFutureImage: true } }
}


module.exports = nextConfig
