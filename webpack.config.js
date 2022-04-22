const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require("webpack");

module.exports = (env, args) => {
  console.log(`MODE: ${args.mode}`);

  return {
    devtool: "source-map",
    entry: path.resolve(__dirname, "src", "index.js" ),
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" }
        },
        {
          test: /\.html$/,
          use: [{ loader: "html-loader" }]
        },
        {
          test: /\.css$/,
          use: [ "style-loader", "css-loader" ]
        },
        {
          test: /\.(png|jp(e*)g|svg|gif|eot|ttf|woff|woff2)$/,
          use: [ 'file-loader' ]
        },
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebPackPlugin ({
        template: './src/index.html',
        filename: './index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': `"${args.mode}"`,
      }),
    ]
  };
};