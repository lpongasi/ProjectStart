import * as webpack from 'webpack';
import { isProd } from './Configs/global';
import { devServer, entry, output, stats, resolve, plugins, webpackModule } from './Configs/webpack';

const config: webpack.Configuration = {
  devtool: isProd ? false : 'source-map',
  devServer,
  stats,
  resolve,
  module: webpackModule,
  entry,
  output,
  plugins,
};

export default config;