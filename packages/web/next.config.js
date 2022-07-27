/** @type {import('next').NextConfig} */
const path = require('path')
const withPlugins = require('next-compose-plugins')
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  poweredByHeader: false,
  useFileSystemPublicRoutes: true,
  // reactStrictMode: true,
  // env: {
  //   environment: process.env.NODE_ENV,
  //   token: process.env.SENTRY_AUTH_TOKEN
  // },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['cdn.sanity.io', 'img.clock.co.uk', 'picsum.photos']
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'assets/svg/icons')],
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: { dimensions: false }
        }
      ]
    })
    config.resolve.alias['@'] = path.join(__dirname, './')
    return config
  }
}

module.exports = withPlugins(
  [
    [
      {
        exclude: path.resolve(__dirname, 'assets/svg'),
        inlineImageLimit: 1
      }
    ],
    // [
    //   withPWA,
    //   {
    //     pwa: {
    //       dest: 'public',
    //       disable: process.env.NODE_ENV === 'development'
    //     }
    //   }
    // ],
    ...(isDev
      ? [
          require('@next/bundle-analyzer')({
            enabled: process.env.ANALYZE === 'true'
          })
        ]
      : [])
    // (nextConfig) =>
    //   withSentryConfig(nextConfig, {
    //     silent: true,
    //     environment: process.env.NODE_ENV,
    //     token: process.env.SENTRY_AUTH_TOKEN
    //   })
  ],
  nextConfig
)

module.exports = nextConfig
