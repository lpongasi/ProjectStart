import * as webpack from 'webpack';
import * as path from 'path';
import { mode, entry, output, stats, resolve, plugins, module } from './webpack/index';

declare var __dirname;

const config: webpack.Configuration = {
    devtool: mode.IS_DEV ? false : 'source-map',
    stats,
    resolve,
    module,
    entry,
    output,
    plugins,
};

export default config;