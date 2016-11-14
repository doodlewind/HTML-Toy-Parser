var path = require('path');

module.exports = {
  entry: "./app/main.js",
  // entry: "./parser-poc/main.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules/
      }
    ]
  }
}