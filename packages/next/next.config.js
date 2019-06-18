const path = require('path');

const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withTranspileModules = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const isServerless = process.env.SERVERLESS === 'true';

const nextConfig = {
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
    };
  },
  target: isServerless ? 'serverless' : 'server',
  distDir: '../build',
};

module.exports = withPlugins(
  [
    [
      withTranspileModules,
      {
        transpileModules: ['@lerna-next/ui-kit'],
      },
    ],
    [
      withCustomBabelConfigFile,
      {
        babelConfigFile: path.resolve('./babel.config.js'),
      },
    ],
    withTypescript,
    [
      withBundleAnalyzer,
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html',
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../.next/bundles/client.html',
          },
        },
      },
    ],
  ],
  nextConfig
);
