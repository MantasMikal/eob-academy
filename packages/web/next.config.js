/** @type {import('next').NextConfig} */
const path = require('path')
// const withPlugins = require('next-compose-plugins')
// const isDev = process.env.NODE_ENV === 'development'
const { fetchSanityRedirects } = require('./services/fetch-redirects')
// const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  async redirects() {
    console.log('redirects........')
    return await fetchSanityRedirects()
  },
  // reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
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
  typescript: {
    ignoreBuildErrors: true
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
    config.exclude
    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)

// module.exports = withPlugins(
//   [
//     [
//       {
//         exclude: path.resolve(__dirname, 'assets/svg'),
//         inlineImageLimit: 1
//       }
//     ],
//     [
//       withPWA,
//       {
//         pwa: {
//           register: true,
//           skipWaiting: true,
//           dest: 'public',
//           runtimeCaching,
//           // disable: process.env.NODE_ENV === 'development',
//           buildExcludes: [/middleware-manifest.json$/]
//         }
//       }
//     ],
//     // (nextConfig) =>
//     //   withSentryConfig(nextConfig, {
//     //     silent: true,
//     //     environment: process.env.NODE_ENV,
//     //     token: process.env.SENTRY_AUTH_TOKEN
//     //   })
//   ],
//   nextConfig
// )

// module.exports = nextConfig
