const webpack = require('webpack')
const path = require('path')
const chalk = require('chalk')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { coreVendor, uiVendor, otherVendor } = require('./vendor')

const config = {
    mode: 'production',
    entry: {
        app: ['@babel/polyfill', path.join(__dirname, './src/index')]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [path.resolve('./src'), path.resolve('./node_modules')]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                coreVendor: {
                    name: 'coreVendor',
                    chunks: 'all',
                    enforce: true,
                    test: new RegExp(`[\\/]node_modules[\\/](${coreVendor.join('|')})[\\/]`)
                },
                uiVendor: {
                    name: 'uiVendor',
                    chunks: 'all',
                    enforce: true,
                    test: new RegExp(`[\\/]node_modules[\\/](${uiVendor.join('|')})[\\/]`)
                },
                otherVendor: {
                    name: 'otherVendor',
                    chunks: 'all',
                    enforce: true,
                    test: new RegExp(`[\\/]node_modules[\\/](${otherVendor.join('|')})[\\/]`)
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                extractComments: false,
                exclude: [/\.min\.js$/gi],
                parallel: true, // recommended to increase build time
                sourceMap: true,
                terserOptions: {
                    ecma: 5, // to es5
                    mangle: true,
                    compress: true
                }
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            description: 'TV Shows Demo',
            template: './src/index.html',
            title: 'TV Shows Demo'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new BundleAnalyzerPlugin({
            // In `server` mode analyzer will start HTTP server to show bundle report.
            // In `static` mode single HTML file with bundle report will be generated.
            // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
            analyzerMode: 'static',
            reportFilename: '../chunk-analysis-report.html',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            defaultSizes: 'parsed',
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: '../stats.json',
            statsOptions: null,
            logLevel: 'info'
        }),
        new ProgressBarPlugin({
            format: 'build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        }),
        new CopyWebpackPlugin([{ from: './static_files' }]),
        new webpack.HashedModuleIdsPlugin()
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
                    { loader: MiniCssExtractPlugin.loader },
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
