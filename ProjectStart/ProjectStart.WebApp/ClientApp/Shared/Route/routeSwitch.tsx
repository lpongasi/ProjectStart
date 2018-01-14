import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Navigation from 'container/Navbar';
import ErrorPage from 'shared/errorPage';

export default () => (
<div>
    <Navigation />
    <div className="container">
        <Switch>
            <Route component={ErrorPage} />
        </Switch>
    </div>
</div>
);
