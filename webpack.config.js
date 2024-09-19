const path = require('path')
const {} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicpath: '/public/js',
    fileName: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 8080
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}