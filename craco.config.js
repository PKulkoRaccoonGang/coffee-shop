const BundleAanlyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// import the plugin
module.exports = function () {
  return {
    webpack: {
      // append Webpack configuration
      plugins: [new BundleAanlyzerPlugin({ analyzerMode: 'server' })],
    },
  };
};
