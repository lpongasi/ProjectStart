import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import Navigation from './containers/navigation';
import Node from './containers/node';
import Loading from './containers/loading';
import RouteSwitch from './routeSwitch';

export default () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <Loading />
            <Node />
            <RouteSwitch />
        </div>
    </BrowserRouter>
);
