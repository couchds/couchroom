/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      dns: false,
      fs: false,
      net: false,
      'pg-native': false,
      tls: false
    };

    return config;
  },
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = nextConfig
