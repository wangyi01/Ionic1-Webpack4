const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  // entry: {
  //   serve:'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
  //   app:'./src/js/main.js'
  // },
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './src/js/main.js'
  ],
  output: {
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    path: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.json', '.less']
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['style-loader', 'css-loader'])
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpe?g|gif|jpg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext].[hash:8]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/[name].[chunkhash:8].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   port: 1111,
  //   open: true,
  //   host: 'localhost',
  //   inline: true,
  //   proxy: {},
  //   headers: {}
  // }
};