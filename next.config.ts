/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // or '5mb', '20mb'
    },
  },
};

module.exports = nextConfig;
