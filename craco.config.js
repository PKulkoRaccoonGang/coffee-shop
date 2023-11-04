const BundleAnalyzerWebpackPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function () {
  return {
    webpack: {
      plugins: [new BundleAnalyzerWebpackPlugin({ analyzerMode: 'server' })],
    },
  };
};
