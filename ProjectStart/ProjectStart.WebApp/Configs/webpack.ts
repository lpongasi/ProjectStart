import * as webpack from 'webpack';
import * as path from 'path';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import { mode, root, outputPath, commonLibPaths } from './global';

export const entry = {
  lib: commonLibPaths,
  main: [
    path.resolve(root, 'ClientApp', 'main.tsx'),
  ]
}

export const output = {
  filename: '[name].bundle.js',
  chunkFilename: '[id].bundle.js',
  path: outputPath
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
  ]
}

export const plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify(process.env['NODE_ENV'])
    }
  }),
  new ExtractTextPlugin({
    filename: "[name].bundle.css",
    allChunks: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    filename: "common.js"
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: mode.IS_PROD,
    debug: mode.IS_DEV
  }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: mode.IS_DEV,
    mangle: {
      screw_ie8: mode.IS_PROD,
      keep_fnames: mode.IS_PROD
    },
    compress: {
      warnings: mode.IS_DEV,
      screw_ie8: mode.IS_PROD,
      conditionals: mode.IS_PROD,
      unused: mode.IS_PROD,
      comparisons: mode.IS_PROD,
      sequences: mode.IS_PROD,
      dead_code: mode.IS_PROD,
      evaluate: mode.IS_PROD,
      if_return: mode.IS_PROD,
      join_vars: mode.IS_PROD
    },
    comments: mode.IS_DEV
  })
];

export const webpackModule = {
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
              importLoaders: 3
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
          modules: true,
          name: '../font/[name].[ext]'
        }
      }]
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          modules: true,
          name: '../image/[name].[ext]'
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
}