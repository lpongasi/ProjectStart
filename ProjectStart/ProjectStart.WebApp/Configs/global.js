"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.mode = {
    IS_DEV: process.env['NODE_ENV'] !== 'production',
    IS_PROD: process.env['NODE_ENV'] === 'production'
};
exports.root = path.resolve(__dirname, '..');
exports.assetPath = path.resolve(exports.root, 'wwwroot');
exports.outputPath = path.resolve(exports.assetPath, 'assets');
exports.scssInputPath = path.resolve(exports.assetPath, 'scss');
exports.nodePath = path.resolve(exports.root, 'node_modules');
exports.clientAppPath = path.resolve(exports.root, 'ClientApp');
