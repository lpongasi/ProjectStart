import * as path from 'path';

declare var __dirname;

export const nodeEnv = 'NODE_ENV';

export const isProd = process.env[nodeEnv] === 'production';

export const root = path.resolve(__dirname, '..');

export const assetPath = path.resolve(root, 'wwwroot');

export const outputPath = path.resolve(assetPath, 'assets');

export const scssInputPath = path.resolve(assetPath, 'scss');

export const nodePath = path.resolve(root, 'node_modules');

export const clientAppPath = path.resolve(root, 'ClientApp');

export const libPath = path.resolve(clientAppPath, 'Lib');

export const devApplicationUrl = 'http://localhost:2373/';

export const materializeJsFiles = [
    'js/cash.js',
    'js/component.js',
    'js/global.js',
    'js/anime.min.js',
    'js/collapsible.js',
    'js/dropdown.js',
    'js/modal.js',
    'js/materialbox.js',
    'js/parallax.js',
    'js/tabs.js',
    'js/tooltip.js',
    'js/waves.js',
    'js/toasts.js',
    'js/sidenav.js',
    'js/scrollspy.js',
    'js/autocomplete.js',
    'js/forms.js',
    'js/slider.js',
    'js/cards.js',
    'js/chips.js',
    'js/pushpin.js',
    'js/buttons.js',
    'js/datepicker.js',
    'js/timepicker.js',
    'js/characterCounter.js',
    'js/carousel.js',
    'js/tapTarget.js',
    'js/select.js',
    'js/range.js']
    .map(m => `materialize-css/${m}`);
