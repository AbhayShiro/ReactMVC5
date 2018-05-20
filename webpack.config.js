var path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    watch: true,
    entry: path.resolve(__dirname, 'Scripts/App/index.js'),
    output: {
        path: path.resolve(__dirname, 'Scripts/Build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                      loader: 'url-loader',
                      options: {
                          limit: 8192
                      }
                  }
                ]
            },
             {
                 test: /\.svg$/,
                 loader: 'svg-inline-loader'
             }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:50171/',
            reload: true
        })
    ]
}