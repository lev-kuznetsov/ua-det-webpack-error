module.exports = {
  entry: './index.js',
  output: {path: __dirname, filename: 'bundle.js'},
  module: {
    unknownContextCritical:false,
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: '#inline-source-map'
}
