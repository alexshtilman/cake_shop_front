const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const outputObj = (mode) => {
  return {
    path:
      mode == "development"
        ? path.resolve(__dirname, "distr")
        : path.resolve(__dirname, "../cake_shop_backend_flask_rest/static"),
    filename:
      mode == "development" ? "[name].[hash].js" : "[name].[chunkhash].js",
  };
};

const templateObj = (mode) => {
  let obj = {
    template: "./index.html",
    minify: { collapseWhitespace: true },
    favicon: "./images/favicon.png",
  };
  if (mode == "production") obj["filename"] = "../templates/index.html";
  return obj;
};
module.exports = (env, options) => {
  console.log(`This is the Webpack 4 'mode': ${options.mode}`);
  var devMode = options.mode == "development";
  return {
    context: path.resolve(__dirname, "src"),
    mode: options.mode,
    entry: "./index.js",
    output: outputObj(options.mode),
    resolve: {
      extensions: [".js", ".jsx"],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      runtimeChunk: {
        name: "manifest",
      },
      moduleIds: "hashed",
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "node_vendors", // part of the bundle name and
            // can be used in chunks array of HtmlWebpackPlugin
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
          },
          common: {
            test: /[\\/]src[\\/]components[\\/]/,
            chunks: "all",
            minSize: 0,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[a|c]ss$/,
          loader: "sass-loader!style-loader!css-loader",
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: ["url-loader?limit=100000&name=fonts/[name].[ext]"],
        },
        {
          test: /\.(jpg|png|gif|jpeg)$/,
          loader: "file-loader",
          options: {
            outputPath: "images",
          },
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(templateObj(options.mode)),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
      }),
    ],
    devServer: {
      host: "localhost",
      https: true,
      port: 5000,
    },
  };
};
