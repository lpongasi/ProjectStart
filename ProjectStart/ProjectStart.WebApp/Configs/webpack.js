"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var global_1 = require("./global");
exports.entry = {
    common: ['react',
        'redux',
        'react-dom',
        'react-redux',
        'redux-thunk',
        'react-router-dom',
        'jquery',
        path.resolve(global_1.clientAppPath, 'assets', 'materialize', 'js', 'materialize.min.js'),
        path.resolve(global_1.clientAppPath, 'assets', 'fontawesome', 'scss', 'font-awesome.scss'),
        path.resolve(global_1.clientAppPath, 'assets', 'materialize', 'scss', 'materialize.scss')
    ],
    main: path.resolve(global_1.clientAppPath, 'main.tsx')
};
exports.output = {
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    path: global_1.outputPath
};
exports.stats = {
    assets: true,
    children: true,
    chunks: true,
    colors: true,
    errorDetails: true,
    errors: true,
    hash: true,
    modules: true,
    publicPath: true,
    reasons: true,
    source: true,
    timings: true,
    version: true,
    warnings: true
};
exports.resolve = {
    extensions: [
        '.ts', '.tsx',
        '.js', '.jsx',
        '.css', '.scss',
        '.otf', '.eot', '.svg', '.ttf', '.woff', '.woff2',
        '.png', '.jpg', '.jpeg', '.gif'
    ]
};
exports.plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify(process.env['NODE_ENV'])
        }
    }),
    new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.js'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: global_1.mode.IS_PROD,
        debug: global_1.mode.IS_DEV
    })
].concat(global_1.mode.IS_PROD
    ? [
        new webpack.optimize.UglifyJsPlugin({
            beautify: global_1.mode.IS_DEV,
            mangle: {
                screw_ie8: global_1.mode.IS_PROD,
                keep_fnames: global_1.mode.IS_PROD
            },
            compress: {
                warnings: global_1.mode.IS_DEV,
                screw_ie8: global_1.mode.IS_PROD,
                conditionals: global_1.mode.IS_PROD,
                unused: global_1.mode.IS_PROD,
                comparisons: global_1.mode.IS_PROD,
                sequences: global_1.mode.IS_PROD,
                dead_code: global_1.mode.IS_PROD,
                evaluate: global_1.mode.IS_PROD,
                if_return: global_1.mode.IS_PROD,
                join_vars: global_1.mode.IS_PROD
            },
            comments: global_1.mode.IS_DEV
        })
    ]
    : []);
exports.webpackModule = {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        },
        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function (loader) { return [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-url')(),
                                require('postcss-cssnext')({ browsers: ['last 2 version', 'ie >= 9', 'Android >= 4', 'ios >= 7'] }),
                                require('postcss-svg')(),
                                require('postcss-sprites')(),
                                require('postcss-browser-reporter')(),
                                require('postcss-reporter')(),
                            ]; }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: false,
                            importLoaders: 3,
                        }
                    }
                ]
            })
        },
        {
            test: /\.(otf|eot|ttf|svg|woff|woff2)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        //modules: true,
                        name: '../fonts/[name].[ext]'
                    }
                }]
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        //modules: true,
                        name: '../images/[name].[ext]'
                    }
                }]
        },
        {
            test: require.resolve('jquery'),
            use: [{
                    loader: 'expose-loader',
                    options: '$'
                }, {
                    loader: 'expose-loader',
                    options: 'jQuery'
                }]
        }
    ]
};
