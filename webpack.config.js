const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: ['./src/js/canvas.js', './src/scss/master.scss'],
  output: {
    path: __dirname + '/dist/',
    filename: "js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        }, 'eslint-loader']
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },

          
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|webp)$/i,
        use: [
         {
          loader: 'file-loader',
            options: {
              esModule: false,
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['dist']
      },
      files: ['./dist/*'],
      notify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '/css/main.css',
      chunkFilename: 'main.css',
      ignoreOrder: false
    }),
    new CleanWebpackPlugin()
  ],
  watch: true,
  devtool: 'source-map'
}