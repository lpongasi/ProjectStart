import * as webpack from 'webpack';
import { mode } from './Configs/global';
import { entry, output, stats, resolve, plugins, webpackModule } from './Configs/webpack';

const config: webpack.Configuration = {
  devtool: mode.IS_DEV ? false : 'source-map',
  stats,
  resolve,
  module: webpackModule,
  entry,
  output,
  plugins,
};

export default config;