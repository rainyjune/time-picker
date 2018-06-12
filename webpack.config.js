const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

var PACKAGE = require('./package.json');
var version = PACKAGE.version;

const config = [{
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'rc-time-picker-' + version + '.js',
    library: 'TimePicker',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=8192&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('rc-time-picker-' + version + '.css')
  ],
  externals: {
    "moment": {
      commonjs: "moment",
      commonjs2: "moment",
      amd: "moment",
      root: "moment"
    },
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}, {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'rc-time-picker-' + version + '.min.js',
    library: 'RCTimePicker',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=8192&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      comments: false,
      beautify: false,
      mangle: {
        keep_fnames: true,
        except: ['$super', '$', 'exports', 'require']
      }
    }),
    new ExtractTextPlugin('rc-time-picker-' + version + '.min.css')
  ],
  externals: {
    "moment": {
      commonjs: "moment",
      commonjs2: "moment",
      amd: "moment",
      root: "moment"
    },
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}];

module.exports = config;