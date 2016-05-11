const path = require('path')

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] }
    ]
  }
}
