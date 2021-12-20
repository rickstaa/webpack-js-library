import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  target: 'web',
  entry: './src/index.js',
  output: {
    libraryTarget: 'module',
    module: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
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
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js'],
  },
  // NOTE: The code below does cause a error when uncommented.
  externalsType: 'module',
  externals: {
    // lodash: 'umd lodash',
    'lodash-es': 'umd lodash-es',
    // 'lodash-es': 'umd lodash-es',
    // react: 'umd React',
    // 'react-dom': 'umd ReactDOM',
  },
  experiments: {
    outputModule: true,
  },
};
