var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
  // entry: './src/main.js',
  entry: {
    'main'     : './src/main.js',
    'docs'     : './docs/docs.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    // filename: 'build.js'
    filename: '[name].bundle.js',
    // path: '/dist'
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'css': 'vue-style-loader!css-loader',
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },
      { 
        test: /\.(jpe|jpg|ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader",
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, 'src'),
      'apijs': path.resolve(__dirname, process.env.NODE_ENV in {development: 1, test: 1} ? 'src/api/apimock.js' : 'src/api/api.js'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
