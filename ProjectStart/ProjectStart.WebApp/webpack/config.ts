import * as webpack from 'webpack';
import * as path from 'path';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import { outputPath, clientAppPath, isProd, assetPath } from './global';
const bootstrapJsLibs = [
    'util.js',
    'alert.js',
    'button.js',
    'carousel.js',
    'collapse.js',
    'dropdown.js',
    'modal.js',
    'scrollspy.js',
    'tab.js',
    'tooltip.js',
    'popover.js'
];

export const entry = {
    common: [
        'react',
        'redux',
        'react-dom',
        'react-redux',
        'redux-thunk',
        'react-router-dom',
        'jquery',
        'tether',
        path.resolve(clientAppPath, 'bower_components', 'bootstrap', 'scss', 'bootstrap.scss'),
        path.resolve(clientAppPath, 'bower_components', 'font-awesome', 'scss', 'font-awesome.scss'),
        path.resolve(clientAppPath, 'style', 'normalize.css'),
        path.resolve(clientAppPath, 'style', 'main.scss'),
    ]
        .concat(bootstrapJsLibs.map(m => path.resolve(clientAppPath, 'bower_components', 'bootstrap', 'js', 'src', m))),
    main: path.resolve(clientAppPath, 'index.tsx')
}

export const output = {
    publicPath: '/assets/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    path: outputPath,
}

export const devServer = {
    publicPath: output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: assetPath,
    port: 9000,
    open: true,
    //https: true,
    compress: true,
    inline: true,
    hot: true,
    overlay: {
        warnings: true,
        errors: true
    },
    proxy: {
        "**": {
            target: "http://localhost:49993",
            secure: false
            //pathRewrite: { "^/assets": "" },
            //target: "https://localhost:44391",
        }
    }
}
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
    warnings: true
}

export const resolve = {
    extensions: [
        '.ts', '.tsx',
        '.js', '.jsx',
        '.css', '.scss',
        '.otf', '.eot', '.svg', '.ttf', '.woff', '.woff2',
        '.png', '.jpg', '.jpeg', '.gif'
    ],
    alias: {
        common: clientAppPath
    }
}

export const plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify(process.env['NODE_ENV'])
        }
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        Tether: 'tether',
        "window.Tether": 'tether',
    }),
    new ExtractTextPlugin({
        filename: '[name].bundle.css',
        disable: !isProd,
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['common'],
        filename: '[name].bundle.js'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: isProd,
        debug: !isProd
    })
].concat(isProd
    ? [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        })
    ]
    : [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NamedModulesPlugin(),
    ]);

const cssLoaders = [
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
            plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-url')(),
                require('postcss-cssnext')({ browsers: ['last 2 version', 'ie >= 9', 'Android >= 4', 'ios >= 7'] }),
                require('postcss-svg')(),
                require('postcss-sprites')(),
                require('postcss-browser-reporter')(),
                require('postcss-reporter')(),
            ]
        }
    },
    {
        loader: 'sass-loader',
        options: {
            modules: false,
            importLoaders: 3,

        }
    }
];
const cssDev = [{ loader: 'style-loader' }].concat([...cssLoaders]);
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [...cssLoaders]
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
                    transpileOnly: true
                }
            }
        },
        {
            test: /\.(scss|css)$/,
            //exclude: /node_modules/,
            use: cssConfig
        },
        {
            test: /\.(otf|eot|ttf|svg|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]'
                }
            }]
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]?[hash]'
                }
            }]
        },
        {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            }, {
                loader: 'expose-loader',
                options: '$'
            }]
        }
    ]
}
