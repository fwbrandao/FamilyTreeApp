const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ],
        rules: [
        {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'client/index.html'
        })
    ]
};
