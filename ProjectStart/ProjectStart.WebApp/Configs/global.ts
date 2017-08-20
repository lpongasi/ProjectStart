import * as path from 'path';

declare var __dirname;

export const mode = {
  IS_DEV: process.env['NODE_ENV'] !== 'production',
  IS_PROD: process.env['NODE_ENV'] === 'production'
}

export const root = path.resolve(__dirname, '..');

export const assetPath = path.resolve(root, 'wwwroot');

export const outputPath = path.resolve(assetPath, 'assets');

export const scssInputPath = path.resolve(assetPath, 'scss');

export const libPath = path.resolve(assetPath, 'lib');

export const nodePath = path.resolve(root, 'node_modules');

export const clientAppAssetPath = path.resolve(root, 'ClientApp', 'assets');

export const MaterializePath = path.resolve(clientAppAssetPath, 'Materialize');

export const FontAwesomePath = path.resolve(clientAppAssetPath, 'FontAwesome');

export const JqueryPath = path.resolve(clientAppAssetPath, 'JQuery');

//export const commonLibPaths = [];
export const commonLibPaths = [
  path.resolve(MaterializePath, 'scss', 'materialize.scss'),
  path.resolve(FontAwesomePath, 'scss', 'font-awesome.scss'),
  path.resolve(MaterializePath, 'js', `materialize${mode.IS_PROD ? '.min' : ''}.js`),
  path.resolve(JqueryPath, `jquery-3.2.1${mode.IS_PROD ? '.min' : ''}.js`)
];

