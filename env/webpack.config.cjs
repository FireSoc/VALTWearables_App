const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    })
  ],
  module: {
    rules: [
        {
            test: /\.(tsx|ts|jsx|js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel_loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        ['@babel/preset-react', {runtime: 'automatic'}],
                        '@babel/preset-typescript',
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  } //TODO: Handling images
};