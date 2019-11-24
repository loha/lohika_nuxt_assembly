const path = require('path');

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./server/index.ts'];

    config.resolve = {
      extensions: ['.ts', '.js', '.json'],
    };

    config.module.rules.push({
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
    });

    config.resolve.alias = {
      '~': path.resolve(__dirname, './server/'),
    };

    return config;
  },
};
