import * as React from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';

import RouteSwitch from './routeSwitch';

export default () => (
    <BrowserRouter>
        <RouteSwitch />
    </BrowserRouter>
);
