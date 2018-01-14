import * as webpack from 'webpack';
import {
    devServer,
    entry,
    output,
    plugins,
    resolve,
    stats,
    webpackModule,
} from './webpack/config';
import { isProd } from './webpack/global';

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
