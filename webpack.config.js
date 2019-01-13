const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",
    entry: "./client/common.js",
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]   //  <=  Order is very important
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
        }
        ],
    },
    resolve: {
      extensions: [ '.vue', '.js' ]
    },
    output: {
        path: path.resolve(__dirname, './client/'),
        filename: 'bundle.js'
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};