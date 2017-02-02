module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/lib`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: `${__dirname}/src`,
        loader: 'babel-loader?cacheDirectory',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime'],
          cacheDirectory: true
        }
      }
    ]
  }
}
