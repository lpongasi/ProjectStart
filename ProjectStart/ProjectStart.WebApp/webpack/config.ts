import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import {
    assetPath,
    clientAppPath,
    devApplicationUrl,
    isProd,
    nodeEnv,
    outputPath,
} from './global';

export const entry = {
    common: [
        'react',
        'redux',
        'react-dom',
        'react-redux',
        'redux-thunk',
        'react-router-dom',
        path.resolve(clientAppPath, 'Library', 'Materialize', 'js', `materialize${isProd ? '.min' : ''}.js`),
        path.resolve(clientAppPath, 'Library', 'Materialize', 'sass', 'materialize.scss'),
    ],
    client: path.resolve(clientAppPath, 'client.tsx'),
    admin: path.resolve(clientAppPath, 'admin.tsx'),
};

export const output = {
    publicPath: '/assets/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    path: outputPath,
};

export const devServer = {
    publicPath: output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: assetPath,
    port: 9000,
    open: true,
    // https: true,
    compress: true,
    inline: true,
    hot: true,
    overlay: {
        warnings: true,
        errors: true,
    },
    proxy: {
        '**': {
            target: devApplicationUrl,
            secure: false,
        },
    },
};

export const stats = {
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
    warnings: true,
};

export const resolve = {
    extensions: [
        '.ts', '.tsx',
        '.js', '.jsx',
        '.css', '.scss',
        '.png', '.jpg', '.jpeg', '.gif',
        '.otf', '.eot', '.svg', '.ttf', '.woff', '.woff2',
    ],
    alias: {
        shared: path.resolve(clientAppPath, 'Shared'),
        container: path.resolve(clientAppPath, 'Container'),
    },
};

export const plugins = [
    new webpack.DefinePlugin({
        'isProd': isProd,
        'process.env': {
            [nodeEnv]: JSON.stringify(process.env[nodeEnv]),
        },
    }),
    new ExtractTextPlugin({
        filename: '[name].bundle.css',
        disable: !isProd,
        allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: Infinity,
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: isProd,
        debug: !isProd,
    }),
].concat(isProd
    ? [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: true,
            compress: true,
            comments: false,
        }),
    ]
    : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]);

const cssLoaders = [
    {
        loader: 'css-loader',
        options: {
            modules: false,
            importLoaders: 2,
        },
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-url')(),
                require('postcss-cssnext')({
                    browsers: [
                        'last 2 versions',
                        'Chrome >= 30',
                        'Firefox >= 30',
                        'ie >= 10',
                        'Safari >= 8'],
                }),
                require('postcss-svg')(),
                require('postcss-sprites')(),
                require('postcss-browser-reporter')(),
                require('postcss-reporter')(),
            ],
        },
    },
    {
        loader: 'sass-loader',
        options: {
            modules: false,
            importLoaders: 3,

        },
    },
];
const cssDev = [{ loader: 'style-loader' }].concat([...cssLoaders]);
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [...cssLoaders],
});
const cssConfig = isProd ? cssProd : cssDev;

export const webpackModule = {
    rules: [
        {
            test: /\.(ts|tsx|js|jsx)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        },
        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: cssConfig,
        },
        {
            test: /\.(otf|eot|ttf|svg|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]',
                },
            }],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]?[hash]',
                },
            }],
        },
        {
            test: require.resolve('react'),
            use: [
                {
                    loader: 'expose-loader',
                    options: 'React',
                },
            ],
        },
        /*{
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            }, {
                loader: 'expose-loader',
                options: '$'
            }]
        },*/
    ],
};
