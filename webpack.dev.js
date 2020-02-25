const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Jarvis = require('webpack-jarvis')

const config = {
    mode: 'development',
    entry: {
        app: [
            '@babel/polyfill',
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            path.join(__dirname, './src/index')
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, '/dist'),
        publicPath: '/',
        historyApiFallback: {
            index: '/'
        }
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
        modules: [path.resolve('./src'), path.resolve('./node_modules')]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            description: 'TV shows demo',
            template: './src/index.html',
            title: 'TV Shows Demo'
        }),
        new Jarvis({
            port: 1337 // optional: set a port
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader?cacheDirectory=true']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['file-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            }
        ]
    }
}

module.exports = config
