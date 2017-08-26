"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("./Configs/global");
var webpack_1 = require("./Configs/webpack");
var config = {
    devtool: global_1.mode.IS_DEV ? false : 'source-map',
    stats: webpack_1.stats,
    resolve: webpack_1.resolve,
    module: webpack_1.webpackModule,
    entry: webpack_1.entry,
    output: webpack_1.output,
    plugins: webpack_1.plugins,
};
exports.default = config;
