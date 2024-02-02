/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'prismic-io.s3.amazonaws.com'
      },
      {
        hostname: 'images.prismic.io'
      }
    ]
  }
};

export default nextConfig;
