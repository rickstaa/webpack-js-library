const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    module: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-js-library.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  // NOTE: The code below does cause a error when uncommented.
  // externalsType: 'module',
  // externals: {
  //   lodash: 'lodash',
  // },
  experiments: {
    outputModule: true,
  },
};
