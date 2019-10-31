//const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

const nextConfig = {
  purgeCssEnabled: ({ dev, isServer }) => (dev || isServer),
  useFileSystemPublicRoutes: false,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /(.png|.jpg)$/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /https:.*\.(css|js)/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /api/,
        handler: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'cache-apis',
          // Only cache 10 requests for 1 hours.
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60,
          },
        }
      }
    ]
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['postcss-loader'],
      }
    );
    return config;
  }
}

module.exports = withOffline(withCSS(withPurgeCss(nextConfig)));