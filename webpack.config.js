const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: (process.env.N ? './examples/' + process.env.N + '.js' : './src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: (process.env.N ? process.env.N + '.min.js' : 'bundle.min.js')
  },
  devServer: {
    contentBase: __dirname,
    hot:true,
    host: '0.0.0.0',
    compress: true,
    port: 8000,
    inline: false,
    watchContentBase: true,
  }
}