/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prismic-io.s3.amazonaws.com',
      },
      {
        hostname: 'images.prismic.io',
      },
      { hostname: 'escreveaiblog.com' },
    ],
  },
}

export default nextConfig
